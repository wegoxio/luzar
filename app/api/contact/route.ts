import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  customerConfirmationEmail,
  teamNotificationEmail,
  type ContactEmailData,
} from "@/emails/contact-emails";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Campo señuelo: los visitantes no lo ven, pero muchos bots lo completan.
    if (clean(body.website, 100)) {
      return NextResponse.json({ ok: true });
    }

    const data: ContactEmailData = {
      name: clean(body.name, 100),
      company: clean(body.company, 120),
      email: clean(body.email, 180).toLowerCase(),
      phone: clean(body.phone, 40),
      message: clean(body.message, 3000),
    };

    if (data.name.length < 2 || !EMAIL_PATTERN.test(data.email) || data.message.length < 10) {
      return NextResponse.json(
        { error: "Revisa el nombre, el correo y el mensaje." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const contactEmail = process.env.RESEND_CONTACT_EMAIL;

    if (!apiKey || !from || !contactEmail) {
      console.error("Faltan variables de entorno de Resend.");
      return NextResponse.json({ error: "El servicio de contacto no está configurado." }, { status: 503 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.batch.send(
      [
        {
          from,
          to: [data.email],
          subject: "Hemos recibido tu solicitud | Luzar Trading",
          html: customerConfirmationEmail(data),
        },
        {
          from,
          to: [contactEmail],
          replyTo: data.email,
          subject: `Nueva solicitud web · ${data.name}`,
          html: teamNotificationEmail(data),
        },
      ],
      { idempotencyKey: `contact-${crypto.randomUUID()}` },
    );

    if (error) {
      console.error("Error de Resend:", error);
      return NextResponse.json({ error: "No pudimos enviar la solicitud. Inténtalo de nuevo." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error procesando el formulario:", error);
    return NextResponse.json({ error: "Solicitud no válida." }, { status: 400 });
  }
}
