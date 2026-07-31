"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  TrendingUp,
  Award,
  Users,
  Utensils,
  Coffee,
  ChefHat,
  Apple,
  Beef,
  Package,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

// Components
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";

// Types
interface ServiceDetail {
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: React.ReactNode;
  image: string;
}

const servicesList: ServiceDetail[] = [
  {
    title: "Fruver",
    shortDesc: "Frutas y verduras frescas seleccionadas, lavadas y desinfectadas listas para uso comercial.",
    longDesc: "Abastecemos a hoteles, restaurantes e instituciones con productos hortofrutícolas de la mejor calidad, comprados directamente a productores locales para asegurar frescura diaria, eliminando intermediarios y ofreciendo precios competitivos en frutas y verduras de temporada.",
    icon: <Apple className="h-7 w-7 text-primary" />,
    image: "/images/fruver.png",
  },
  {
    title: "Proteínas",
    shortDesc: "Suministro mayorista de carnes rojas, pollo, pescado y embutidos con trazabilidad garantizada.",
    longDesc: "Proveemos proteínas animales frescas, porcionadas e higienizadas a restaurantes, hoteles y comercios. Garantizamos cortes homogéneos y una cadena de frío estricta que preserva la calidad y frescura de cada producto.",
    icon: <Beef className="h-7 w-7 text-primary" />,
    image: "/images/proteinas.jpeg",
  },
  {
    title: "Abarrotes",
    shortDesc: "Víveres secos, granos, enlatados y productos de consumo masivo para despensas institucionales.",
    longDesc: "Simplifique su cadena de compras adquiriendo todo su portafolio de abarrotes con un solo proveedor. Ofrecemos granos de alta pureza, aceites, harinas, conservas y productos de aseo institucional con despacho consolidado.",
    icon: <Package className="h-7 w-7 text-primary" />,
    image: "/images/abarrotes.jpeg",
  },
  {
    title: "Refrigerios institucionales",
    shortDesc: "Snacks y meriendas balanceadas para colegios y comedores institucionales.",
    longDesc: "Diseñamos y suministramos refrigerios nutritivos y seguros, cumpliendo con normas de inocuidad, para instituciones educativas y corporativas que requieren opciones de snack saludables y convenientes.",
    icon: <Coffee className="h-7 w-7 text-primary" />,
    image: "/images/refrigerios.jpeg",
  }
];

const sectorsList = [
  { name: "Restaurantes", desc: "Cadenas de comida rápida, restaurantes tradicionales e independientes.", icon: <Utensils className="h-6 w-6" /> },
  { name: "Hoteles", desc: "Abastecimiento constante de fruver y abarrotes para operaciones hoteleras.", icon: <Coffee className="h-6 w-6" /> },
  { name: "Supermercados y Tiendas", desc: "Distribución mayorista de productos frescos y de consumo masivo.", icon: <Package className="h-6 w-6" /> },
  { name: "Instituciones Educativas", desc: "Suministro de fruver, abarrotes y refrigerios institucionales en grandes volúmenes.", icon: <ChefHat className="h-6 w-6" /> },
  { name: "Casinos e Instituciones", desc: "Abastecimiento confiable para casinos empresariales y comedores institucionales.", icon: <Users className="h-6 w-6" /> },
  { name: "Empresas Privadas", desc: "Soluciones de abastecimiento para empresas que requieren insumos alimenticios constantes.", icon: <Award className="h-6 w-6" /> }
];

const valueProps = [
  { title: "Productos Frescos", desc: "Selección rigurosa y directa con productores locales garantizando frescura total." },
  { title: "Distribución Confiable", desc: "Rutas programadas y despachos puntuales para mantener el abastecimiento de su operación." },
  { title: "Entregas Oportunas", desc: "Cumplimiento estricto de horarios pactados para no interrumpir su producción." },
  { title: "Personal Certificado", desc: "Todo nuestro personal cuenta con carnet de manipulación y capacitación en inocuidad." },
  { title: "Cumplimiento Sanitario", desc: "Instalaciones certificadas por Secretarías de Salud, INVIMA y en transición HACCP." },
  { title: "Atención Personalizada", desc: "Un asesor de cuenta B2B dedicado responderá sus requerimientos de inmediato." },
  { title: "Cobertura Logística", desc: "Red propia con capacidad de despacho a nivel nacional." },
  { title: "Calidad Garantizada", desc: "Monitoreo constante mediante auditorías internas de calidad e inocuidad alimentaria." }
];

const workProcess = [
  { step: "01", title: "Contacto", desc: "Recibimos su requerimiento y analizamos las necesidades de abastecimiento de su operación." },
  { step: "02", title: "Cotización", desc: "Elaboramos una propuesta personalizada con precios competitivos y condiciones claras." },
  { step: "03", title: "Selección", desc: "Seleccionamos los mejores productos de nuestros proveedores y productores aliados." },
  { step: "04", title: "Preparación", desc: "Clasificamos, empacamos y preparamos su pedido con riguroso control de calidad." },
  { step: "05", title: "Distribución", desc: "Entregamos en rutas programadas con vehículos adecuados que preservan la frescura." },
  { step: "06", title: "Seguimiento", desc: "Evaluamos la satisfacción del servicio y ajustamos para garantizar mejora continua." }
];

export default function Home() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const handleOpenModal = (service: ServiceDetail) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      <Navbar />

      {/* Hero — light, fresh, floating produce */}
      <section id="inicio" className="relative min-h-[92vh] flex items-center pt-24 overflow-hidden mint-wash">
        <div className="absolute inset-0 leaf-pattern opacity-70 pointer-events-none" />
        <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-primary-light/20 blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <div className="lg:col-span-6 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-6"
              >
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Distribuidor de Alimentos Frescos</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.4rem] text-neutral-dark tracking-tight leading-[1.08]"
              >
                Alimentos frescos que{" "}
                <span className="text-gradient">impulsan</span> su operación
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-6 text-base sm:text-lg text-neutral-text font-sans leading-relaxed max-w-xl"
              >
                Fruver, proteínas, abarrotes y refrigerios institucionales. Calidad, frescura y cumplimiento en cada entrega para restaurantes, hoteles, supermercados y empresas.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-9 flex flex-wrap gap-3"
              >
                <a
                  href="#contacto"
                  className="px-7 py-3.5 bg-primary hover:bg-secondary text-white font-display font-extrabold text-sm rounded-full shadow-lg shadow-primary/25 hover:shadow-xl transition-all duration-200"
                >
                  Solicitar Cotización
                </a>
                <a
                  href="#servicios"
                  className="px-7 py-3.5 bg-white hover:bg-mint border border-neutral-muted text-neutral-dark font-display font-bold text-sm rounded-full transition-all"
                >
                  Nuestros Productos
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="mt-12 grid grid-cols-2 gap-3 sm:gap-4"
              >
                {[
                  "Calidad Garantizada",
                  "Entregas Oportunas",
                  "Cobertura Nacional",
                  "Atención Personalizada",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-neutral-dark">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-sans font-bold text-xs sm:text-sm tracking-wide">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Floating produce — single cutout */}
            <div className="lg:col-span-6 relative h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative z-10 w-[92%] max-w-[520px] animate-float"
              >
                <Image
                  src="/images/22.png"
                  alt="Frutas y verduras frescas Alternativas Food"
                  width={700}
                  height={700}
                  priority
                  className="w-full h-auto object-contain float-shadow"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros Section */}
      <section id="nosotros" className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-1/4 h-[350px] w-[350px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-0 bottom-1/4 h-[280px] w-[280px] rounded-full bg-primary-light/15 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-primary uppercase tracking-widest block">
                Sobre Nosotros
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-neutral-dark leading-tight">
                Especialistas en Distribución de Alimentos Frescos y Productos de Consumo Masivo
              </h2>
              <p className="font-sans text-neutral-text text-base sm:text-lg leading-relaxed">
                En <strong>Alternativa Food SAS</strong> somos una empresa especializada en la distribución de alimentos frescos y productos de consumo masivo. Trabajamos con productores seleccionados y proveedores confiables para garantizar calidad, frescura y cumplimiento en cada entrega.
              </p>
              <p className="font-sans text-neutral-text text-sm sm:text-base leading-relaxed">
                Nos enfocamos en brindar soluciones eficientes a <strong>restaurantes, hoteles, supermercados, empresas y negocios</strong> que requieren abastecimiento constante y seguro. Nuestra promesa de valor se fundamenta en la <strong>excelencia operativa, el cumplimiento y la calidad</strong> de cada producto que distribuimos.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="flex items-center gap-2.5 bg-mint border border-neutral-muted rounded-2xl px-4 py-3">
                  <Award className="h-6 w-6 text-primary shrink-0" />
                  <span className="font-sans font-bold text-xs sm:text-sm text-neutral-dark">Certificación de Inocuidad</span>
                </div>
                <div className="flex items-center gap-2.5 bg-mint border border-neutral-muted rounded-2xl px-4 py-3">
                  <TrendingUp className="h-6 w-6 text-primary shrink-0" />
                  <span className="font-sans font-bold text-xs sm:text-sm text-neutral-dark">Logística de Entrega Oportuna</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="absolute inset-8 hero-blob opacity-25 blur-sm" />
              <div className="relative w-full max-w-md rounded-3xl bg-white/80 border border-neutral-muted p-8 sm:p-10 shadow-xl shadow-primary/5 flex items-center justify-center backdrop-blur-sm">
                <Image
                  src="/images/logo.png"
                  alt="Alternativas Food SAS"
                  width={480}
                  height={288}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Servicios Section */}
      <section id="servicios" className="py-20 lg:py-28 bg-mint relative">
        <div className="absolute inset-0 leaf-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
              Productos y Servicios
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-neutral-dark">
              Portafolio Integral de Distribución de Alimentos
            </h2>
            <p className="font-sans text-neutral-text mt-4">
              Ofrecemos fruver, proteínas, abarrotes y refrigerios institucionales, cuidadosamente seleccionados para cumplir con altos estándares de calidad. Eficiencia en la entrega, disponibilidad constante y atención personalizada.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesList.map((service, index) => (
              <motion.article
                key={index}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-3xl overflow-hidden border border-neutral-muted shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/25 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-b from-mint to-white flex items-center justify-center p-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={280}
                    height={200}
                    className={`object-contain max-h-40 w-auto transition-transform duration-500 group-hover:scale-105 ${
                      service.image.endsWith(".png") ? "float-shadow" : "rounded-2xl object-cover max-h-40 w-full"
                    }`}
                  />
                </div>

                <div className="flex flex-col flex-1 p-6 sm:p-7 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-mint rounded-xl p-2.5">{service.icon}</div>
                    <h3 className="font-display font-bold text-xl text-neutral-dark leading-snug">
                      {service.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-neutral-text leading-relaxed flex-1">
                    {service.shortDesc}
                  </p>

                  <button
                    onClick={() => handleOpenModal(service)}
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white font-display font-bold text-sm transition-all duration-200 focus:outline-none"
                  >
                    Más Información
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores que Atendemos Section */}
      <section id="sectores" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
              Sectores que Atendemos
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-neutral-dark">
              Soluciones de Abastecimiento para Diferentes Tipos de Operación
            </h2>
            <p className="font-sans text-neutral-text mt-4">
              Nos adaptamos a las necesidades de cada cliente, ofreciendo soluciones eficientes de distribución para el sector gastronómico y comercial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectorsList.map((sector, index) => (
              <div
                key={index}
                className="bg-mint border border-neutral-muted rounded-2xl p-5 flex flex-col justify-between hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
              >
                <div className="bg-white rounded-lg p-2.5 shadow-sm text-primary shrink-0 self-start mb-4">
                  {sector.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-neutral-dark mb-1">
                    {sector.name}
                  </h3>
                  <p className="font-sans text-xs text-neutral-text">
                    {sector.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Propuesta de Valor Section */}
      <section className="py-20 lg:py-28 bg-mint relative overflow-hidden">
        <div className="absolute inset-0 leaf-pattern opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
              Nuestra Propuesta de Valor
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-neutral-dark">
              ¿Por Qué Confiar en Alternativas Food SAS?
            </h2>
            <p className="font-sans text-neutral-text mt-4">
              Garantizamos la excelencia en cada eslabón de la cadena de suministro alimentario a través de procesos rigurosos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-muted rounded-2xl p-6 flex flex-col gap-3 hover:border-primary/25 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200"
              >
                <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-display font-bold text-base text-neutral-dark mb-1.5">
                    {prop.title}
                  </h3>
                  <p className="font-sans text-xs text-neutral-text leading-relaxed">
                    {prop.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-neutral-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
              Metodología de Trabajo
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-neutral-dark">
              Proceso Logístico Estandarizado y Controlado de Extremo a Extremo
            </h2>
            <p className="font-sans text-neutral-text mt-4">
              Nuestra operación estructurada de 6 fases nos permite sostener un índice de cumplimiento superior al 99.8%.
            </p>
          </div>

          {/* Timeline Row/Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {/* Visual connector line for desktops */}
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-neutral-muted z-0" />

            {workProcess.map((proc, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4 relative z-10 group">
                {/* Step Number Circle */}
                <div className="h-[90px] w-[90px] rounded-full bg-mint border-2 border-neutral-muted flex items-center justify-center font-display font-black text-xl text-neutral-dark group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-md">
                  {proc.step}
                </div>
                <div className="space-y-1 px-2">
                  <h3 className="font-display font-bold text-base text-neutral-dark group-hover:text-primary transition-colors">
                    {proc.title}
                  </h3>
                  <p className="font-sans text-xs text-neutral-text leading-relaxed">
                    {proc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cobertura Section */}
      <section id="cobertura" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
              Cobertura y Logística
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-neutral-dark">
              Entregas Oportunas a Nivel Nacional
            </h2>
            <p className="font-sans text-neutral-text mt-6 text-base sm:text-lg leading-relaxed">
              Contamos con cobertura nacional, garantizando entregas oportunas mediante rutas programadas y procesos logísticos eficientes. Nuestro compromiso es asegurar que cada producto llegue en óptimas condiciones, conservando su frescura y calidad desde el origen hasta el destino final.
            </p>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 lg:py-28 bg-neutral-light border-t border-neutral-muted relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
              Contáctenos
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-neutral-dark">
              Estamos Disponibles para Atender sus Requerimientos
            </h2>
            <p className="font-sans text-neutral-text mt-4">
              Comuníquese con nosotros para recibir asesoría personalizada y conocer más sobre nuestro portafolio de productos. Soluciones oportunas de abastecimiento.
            </p>
          </div>

          {/* Contact details & Form component */}
          <ContactForm />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#243D20] text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            <div className="md:col-span-5 space-y-4">
              <div className="inline-flex items-center rounded-2xl bg-white px-3 py-2">
                <Image
                  src="/images/logo.png"
                  alt="Alternativas Food SAS"
                  width={200}
                  height={120}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="font-sans text-xs text-white/70 leading-relaxed max-w-sm">
                Empresa especializada en distribución de alimentos frescos y productos de consumo masivo. Fruver, proteínas, abarrotes y refrigerios institucionales con calidad garantizada.
              </p>
              <div className="flex items-center gap-4 text-xs font-bold text-white/55">
                <span>NIT. 901.321.456-7</span>
                <span>•</span>
                <span>Régimen Común</span>
              </div>
            </div>

            <div className="md:col-span-3 space-y-4">
              <h4 className="font-display font-bold text-sm tracking-wider uppercase text-primary-light">Navegación</h4>
              <ul className="space-y-2 text-xs font-bold text-white/80">
                {["Inicio", "Nosotros", "Servicios", "Sectores", "Cobertura", "Contacto"].map((link, i) => (
                  <li key={i}>
                    <a href={`#${link.toLowerCase()}`} className="hover:text-primary-light transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 space-y-4">
              <h4 className="font-display font-bold text-sm tracking-wider uppercase text-primary-light">Nuestros Productos</h4>
              <ul className="space-y-2 text-xs text-white/80">
                <li><a href="#servicios" className="hover:text-primary-light transition-colors">Fruver</a></li>
                <li><a href="#servicios" className="hover:text-primary-light transition-colors">Proteínas</a></li>
                <li><a href="#servicios" className="hover:text-primary-light transition-colors">Abarrotes</a></li>
                <li><a href="#servicios" className="hover:text-primary-light transition-colors">Refrigerios Institucionales</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-sans gap-4">
            <p>© {new Date().getFullYear()} Alternativas Food SAS. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">Políticas de Privacidad</a>
              <span>•</span>
              <a href="#" className="hover:underline">Tratamiento de Datos Personales (Sagrilaft)</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating widgets */}
      <WhatsAppButton />

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-dark/70 backdrop-blur-sm p-5 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.96, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden mx-auto"
            >
              <div className="relative w-full h-48 sm:h-56 bg-gradient-to-b from-mint to-white">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 512px"
                  className={
                    selectedService.image.endsWith(".png")
                      ? "object-contain p-8"
                      : "object-cover"
                  }
                />
                {!selectedService.image.endsWith(".png") && (
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/60 via-transparent to-transparent" />
                )}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 bg-white hover:bg-mint text-neutral-dark rounded-full p-2.5 shadow-md transition-all focus:outline-none z-10"
                  aria-label="Cerrar ventana"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-5 left-6 right-6 flex items-end gap-3">
                  <div className="bg-white rounded-2xl p-3 shadow-lg shrink-0 border border-neutral-muted">
                    {selectedService.icon}
                  </div>
                  <h3 className={`font-display font-black text-2xl sm:text-3xl drop-shadow-md pb-0.5 ${
                    selectedService.image.endsWith(".png") ? "text-neutral-dark" : "text-white"
                  }`}>
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="px-6 sm:px-8 py-7 space-y-6">
                <p className="font-sans text-sm sm:text-base text-neutral-text leading-relaxed">
                  {selectedService.longDesc}
                </p>

                <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-1">
                  <button
                    onClick={handleCloseModal}
                    className="px-5 py-3 rounded-xl border border-neutral-muted hover:bg-neutral-light text-neutral-dark font-display font-bold text-sm focus:outline-none transition-colors"
                  >
                    Cerrar
                  </button>
                  <a
                    href="#contacto"
                    onClick={() => {
                      handleCloseModal();
                      const target = document.querySelector("#contacto");
                      if (target) {
                        const offset = 80;
                        const bodyRect = document.body.getBoundingClientRect().top;
                        const elementRect = target.getBoundingClientRect().top;
                        const elementPosition = elementRect - bodyRect;
                        const offsetPosition = elementPosition - offset;
                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                      }
                    }}
                    className="px-6 py-3 rounded-xl bg-primary hover:bg-secondary text-white font-display font-bold text-sm text-center shadow-md hover:shadow-lg transition-all"
                  >
                    Cotizar este producto
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
