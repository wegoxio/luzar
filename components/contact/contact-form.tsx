"use client";

import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

const inputClass =
  "h-12 w-full rounded-lg border border-white/20 bg-white/10 px-4 text-sm text-white outline-none backdrop-blur placeholder:text-white/45 transition focus:border-white/55 focus:bg-white/15";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) throw new Error(result.error);

      form.reset();
      setStatus("success");
      setFeedback("Solicitud enviada. Revisa tu correo para ver la confirmación.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error && error.message ? error.message : "No pudimos enviar la solicitud. Inténtalo nuevamente.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-white/18 bg-[#061b32]/58 p-5 text-left shadow-2xl backdrop-blur-md sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-medium text-white/72">Nombre *</span>
          <input className={inputClass} name="name" type="text" autoComplete="name" required minLength={2} maxLength={100} placeholder="Tu nombre" />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-medium text-white/72">Empresa</span>
          <input className={inputClass} name="company" type="text" autoComplete="organization" maxLength={120} placeholder="Nombre de empresa" />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-medium text-white/72">Correo electrónico *</span>
          <input className={inputClass} name="email" type="email" autoComplete="email" required maxLength={180} placeholder="nombre@empresa.com" />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-medium text-white/72">Teléfono</span>
          <input className={inputClass} name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder="+00 000 000 000" />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-2 block text-xs font-medium text-white/72">¿Cómo podemos ayudarte? *</span>
        <textarea className="min-h-32 w-full resize-y rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm leading-6 text-white outline-none backdrop-blur placeholder:text-white/45 transition focus:border-white/55 focus:bg-white/15" name="message" required minLength={10} maxLength={3000} placeholder="Cuéntanos brevemente qué información necesitas" />
      </label>

      <div className="absolute -left-[10000px]" aria-hidden="true">
        <label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === "sending"} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-[#17304d] transition hover:bg-[#e9f1f7] disabled:cursor-wait disabled:opacity-70">
          {status === "sending" ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {status === "sending" ? "Enviando..." : "Solicitar información"}
        </button>
        <div aria-live="polite" className={`flex items-center gap-2 text-sm ${status === "success" ? "text-[#b9e8cf]" : "text-[#ffd2c9]"}`}>
          {status === "success" && <CheckCircle2 className="h-4 w-4 shrink-0" />}
          {feedback}
        </div>
      </div>
    </form>
  );
}
