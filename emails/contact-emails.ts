export type ContactEmailData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const frame = (preview: string, content: string) => `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${preview}</title></head>
<body style="margin:0;background:#eef2f6;font-family:Arial,Helvetica,sans-serif;color:#1e2b42">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0">${preview}</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#eef2f6;padding:32px 12px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 12px 35px rgba(17,42,72,.10)">
        <tr><td style="padding:26px 34px;background:linear-gradient(135deg,#00558f,#012c64);color:#fff">
          <div style="font-size:25px;font-weight:700;letter-spacing:3px">▰ LUZAR</div>
          <div style="margin-top:7px;font-size:11px;letter-spacing:2px;color:#bfd4e5">TRADING · CONFIANZA GLOBAL</div>
        </td></tr>
        <tr><td style="padding:38px 34px">${content}</td></tr>
        <tr><td style="padding:22px 34px;background:#f5f7fa;border-top:1px solid #e4e9ef;color:#7c8796;font-size:12px;line-height:19px">
          Luzar Trading · Comercio global de materias primas<br>Este mensaje fue generado desde luzartrading.com
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

export function customerConfirmationEmail(data: ContactEmailData) {
  const name = escapeHtml(data.name);
  return frame(
    "Hemos recibido tu solicitud",
    `<div style="font-size:11px;font-weight:700;letter-spacing:2px;color:#7590a8">SOLICITUD RECIBIDA</div>
     <h1 style="margin:14px 0 18px;font-size:30px;line-height:38px;font-weight:500;color:#18263d">Gracias por contactarnos, ${name}.</h1>
     <p style="margin:0;color:#667386;font-size:16px;line-height:26px">Hemos recibido correctamente tu solicitud de información. Nuestro equipo comercial la revisará y se pondrá en contacto contigo muy pronto.</p>
     <div style="margin-top:28px;padding:18px 20px;border-left:4px solid #1b79a8;background:#edf5fa;color:#40516a;font-size:14px;line-height:22px">No necesitas responder a este mensaje. Si deseas añadir información, puedes escribirnos directamente a nuestro correo comercial.</div>
     <p style="margin:30px 0 0;color:#24344d;font-size:15px;line-height:24px">Atentamente,<br><strong>Equipo Luzar Trading</strong></p>`,
  );
}

export function teamNotificationEmail(data: ContactEmailData) {
  const fields = [
    ["Nombre", data.name], ["Empresa", data.company || "No indicada"],
    ["Email", data.email], ["Teléfono", data.phone || "No indicado"],
  ];
  const rows = fields.map(([label, value]) => `<tr><td style="padding:10px 0;color:#8490a0;font-size:13px;width:110px">${label}</td><td style="padding:10px 0;color:#26364e;font-size:14px;font-weight:600">${escapeHtml(value)}</td></tr>`).join("");

  return frame(
    `Nueva solicitud de ${escapeHtml(data.name)}`,
    `<div style="font-size:11px;font-weight:700;letter-spacing:2px;color:#7590a8">NUEVO CONTACTO WEB</div>
     <h1 style="margin:14px 0 22px;font-size:28px;line-height:36px;font-weight:500;color:#18263d">Nueva solicitud comercial</h1>
     <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-top:1px solid #e3e8ee;border-bottom:1px solid #e3e8ee">${rows}</table>
     <div style="margin-top:24px;color:#8490a0;font-size:12px;font-weight:700;letter-spacing:1.4px">MENSAJE</div>
     <div style="margin-top:10px;padding:18px 20px;border-radius:10px;background:#f3f6f9;color:#3d4d63;font-size:15px;line-height:24px;white-space:pre-wrap">${escapeHtml(data.message)}</div>`,
  );
}
