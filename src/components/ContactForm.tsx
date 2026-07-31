"use client";

import { useState } from "react";
import { Mail, Phone, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormState {
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
  servicio: string;
  mensaje: string;
}

const initialForm: FormState = {
  nombre: "",
  empresa: "",
  correo: "",
  telefono: "",
  servicio: "",
  mensaje: "",
};

const CONTACT_EMAIL = "alternativasfoods@gmail.com";
const WHATSAPP_SUBMIT = "573151063714";

const WHATSAPP_NUMBERS = [
  { display: "+57 350 621 9213", wa: "573506219213" },
  { display: "+57 315 106 3714", wa: "573151063714" },
];

const PRODUCT_LABELS: Record<string, string> = {
  fruver: "Fruver (Frutas y Verduras)",
  abarrotes: "Abarrotes y Productos de Consumo Masivo",
  refrigerios: "Refrigerios Institucionales",
  portafolio_completo: "Portafolio Completo",
};

const waUrl = (number: string, text?: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(
    text ??
      "Hola. Estoy interesado en conocer más sobre fruver, abarrotes y refrigerios institucionales de Alternativas Food SAS."
  )}`;

function buildRequestMessage(form: FormState) {
  const producto = PRODUCT_LABELS[form.servicio] ?? form.servicio;
  const lines = [
    "Solicitud de cotización — Alternativas Food SAS",
    "",
    `Nombre: ${form.nombre}`,
    `Empresa: ${form.empresa || "No indicada"}`,
    `Correo: ${form.correo}`,
    `Teléfono: ${form.telefono}`,
    `Producto de interés: ${producto}`,
  ];
  if (form.mensaje.trim()) {
    lines.push("", "Detalles:", form.mensaje.trim());
  }
  return lines.join("\n");
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.correo || !form.telefono || !form.servicio) {
      setStatus("error");
      setErrorMsg("Por favor diligencie todos los campos obligatorios (*).");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    const message = buildRequestMessage(form);
    const subject = encodeURIComponent(
      `Cotización B2B — ${form.empresa || form.nombre} — ${PRODUCT_LABELS[form.servicio] ?? form.servicio}`
    );
    const body = encodeURIComponent(message);

    window.open(waUrl(WHATSAPP_SUBMIT, message), "_blank", "noopener,noreferrer");

    const mailLink = document.createElement("a");
    mailLink.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    mailLink.rel = "noopener";
    document.body.appendChild(mailLink);
    mailLink.click();
    mailLink.remove();

    setStatus("success");
    setForm(initialForm);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Contact Information */}
      <div className="lg:col-span-5 flex flex-col">
        <div className="bg-white text-neutral-dark rounded-2xl border border-neutral-muted p-6 sm:p-8 shadow-lg flex flex-col justify-between h-full">
          <div>
            <h3 className="font-display font-extrabold text-2xl mb-6 text-neutral-dark">
              Canales Corporativos
            </h3>
            <p className="font-sans text-neutral-text text-sm mb-8 leading-relaxed">
              Póngase en contacto con nuestro equipo de planeación y cotizaciones. Atendemos solicitudes B2B a nivel nacional.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-mint rounded-lg p-2.5 shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-neutral-dark">WhatsApp / Línea Directa</h4>
                  {WHATSAPP_NUMBERS.map((n) => (
                    <a
                      key={n.wa}
                      href={waUrl(n.wa)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-xs text-neutral-text mt-0.5 block hover:text-primary transition-colors underline-offset-2 hover:underline"
                    >
                      {n.display}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-mint rounded-lg p-2.5 shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-neutral-dark">Correo Electrónico</h4>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-sans text-xs text-neutral-text mt-0.5 block hover:text-primary transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-mint rounded-lg p-2.5 shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-neutral-dark">Horario de Atención</h4>
                  <p className="font-sans text-xs text-neutral-text mt-0.5">Lunes a Viernes: 7:00 AM – 5:00 PM</p>
                  <p className="font-sans text-xs text-neutral-text">Sábados: 8:00 AM – 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Submission Panel */}
      <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-muted p-6 sm:p-8 shadow-xl flex flex-col justify-between">
        <h3 className="font-display font-extrabold text-2xl text-neutral-dark mb-6">
          Solicitud de Información y Cotización
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-xs font-bold text-neutral-dark uppercase tracking-wider mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Ej. Juan Pérez"
                className="w-full font-sans text-sm px-4 py-3 rounded-lg border border-neutral-muted bg-neutral-light focus:outline-none focus:border-primary focus:bg-white transition-all text-neutral-dark"
                required
              />
            </div>

            {/* Empresa */}
            <div>
              <label htmlFor="empresa" className="block text-xs font-bold text-neutral-dark uppercase tracking-wider mb-2">
                Nombre de la Empresa
              </label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={form.empresa}
                onChange={handleChange}
                placeholder="Ej. Colegios del Norte S.A."
                className="w-full font-sans text-sm px-4 py-3 rounded-lg border border-neutral-muted bg-neutral-light focus:outline-none focus:border-primary focus:bg-white transition-all text-neutral-dark"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Correo */}
            <div>
              <label htmlFor="correo" className="block text-xs font-bold text-neutral-dark uppercase tracking-wider mb-2">
                Correo Electrónico Corporativo *
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                placeholder="Ej. jperez@empresa.com"
                className="w-full font-sans text-sm px-4 py-3 rounded-lg border border-neutral-muted bg-neutral-light focus:outline-none focus:border-primary focus:bg-white transition-all text-neutral-dark"
                required
              />
            </div>

            {/* Telefono */}
            <div>
              <label htmlFor="telefono" className="block text-xs font-bold text-neutral-dark uppercase tracking-wider mb-2">
                Teléfono de Contacto *
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                placeholder="Ej. +57 310 123 4567"
                className="w-full font-sans text-sm px-4 py-3 rounded-lg border border-neutral-muted bg-neutral-light focus:outline-none focus:border-primary focus:bg-white transition-all text-neutral-dark"
                required
              />
            </div>
          </div>

          {/* Servicio de interes */}
          <div>
            <label htmlFor="servicio" className="block text-xs font-bold text-neutral-dark uppercase tracking-wider mb-2">
              Producto de Interés *
            </label>
            <select
              id="servicio"
              name="servicio"
              value={form.servicio}
              onChange={handleChange}
              className="w-full font-sans text-sm px-4 py-3 rounded-lg border border-neutral-muted bg-neutral-light focus:outline-none focus:border-primary focus:bg-white transition-all text-neutral-dark appearance-none"
              required
            >
              <option value="" disabled>Seleccione un producto...</option>
              <option value="fruver">Fruver (Frutas y Verduras)</option>
              <option value="abarrotes">Abarrotes y Productos de Consumo Masivo</option>
              <option value="refrigerios">Refrigerios Institucionales</option>
              <option value="portafolio_completo">Portafolio Completo</option>
            </select>
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="mensaje" className="block text-xs font-bold text-neutral-dark uppercase tracking-wider mb-2">
              Detalles del Proyecto / Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              rows={4}
              placeholder="Describa sus necesidades de abastecimiento, volúmenes estimados, frecuencia de entrega..."
              className="w-full font-sans text-sm px-4 py-3 rounded-lg border border-neutral-muted bg-neutral-light focus:outline-none focus:border-primary focus:bg-white transition-all text-neutral-dark resize-none"
            />
          </div>

          {/* Messages Alerts */}
          <AnimatePresence>
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="flex items-center gap-2 p-3.5 rounded-lg text-sm bg-red-50 text-red-700 border border-red-200"
              >
                <AlertCircle className="h-5 w-5 shrink-0" />
                <span>{errorMsg}</span>
              </motion.div>
            )}

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="flex items-center gap-2.5 p-4 rounded-lg text-sm bg-green-50 text-green-800 border border-green-200"
              >
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                <div>
                  <p className="font-bold">¡Solicitud lista para enviar!</p>
                  <p className="text-xs text-green-700 mt-0.5">
                    Se abrió WhatsApp y su correo con los datos del formulario. Envíe el mensaje desde ahí.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit button */}
          <button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-display text-sm font-bold text-white bg-primary hover:bg-secondary focus:outline-none shadow-md hover:shadow-lg disabled:bg-neutral-muted disabled:text-neutral-dark/40 disabled:cursor-not-allowed transition-all duration-200 gap-2"
          >
            {status === "submitting" ? (
              <>
                <svg className="animate-spin h-5 w-5 text-neutral-dark/45" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Procesando Solicitud...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Enviar Requerimiento B2B</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
