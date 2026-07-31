"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Sectores", href: "#sectores" },
  { name: "Cobertura", href: "#cobertura" },
  { name: "Contacto", href: "#contacto" },
];

const WHATSAPP_URL =
  "https://wa.me/573151063714?text=" +
  encodeURIComponent(
    "Hola. Estoy interesado en conocer más sobre fruver, proteínas, abarrotes y refrigerios institucionales de Alternativas Food SAS."
  );

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glassmorphism shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a
              href="#inicio"
              onClick={(e) => handleLinkClick(e, "#inicio")}
              className="group"
            >
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-neutral-dark group-hover:text-primary transition-colors">
                Alternativas Food SAS
              </span>
            </a>

            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-sans text-sm font-semibold text-neutral-dark/75 hover:text-primary transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="#contacto"
                onClick={(e) => handleLinkClick(e, "#contacto")}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-display text-sm font-bold text-white bg-primary hover:bg-secondary shadow-md hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 group gap-2"
              >
                <span>Cotizar Proyecto</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-neutral-dark hover:text-primary hover:bg-primary/5 focus:outline-none"
              >
                <span className="sr-only">Abrir menú principal</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-white border-b border-primary/10 shadow-xl lg:hidden overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-3 py-3 rounded-lg text-base font-bold text-neutral-dark hover:text-primary hover:bg-mint transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-neutral-muted flex flex-col space-y-3 px-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-primary gap-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>+57 315 106 3714</span>
                </a>
                <a
                  href="#contacto"
                  onClick={(e) => handleLinkClick(e, "#contacto")}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-full font-display text-base font-bold text-white bg-primary hover:bg-secondary shadow-md transition-all text-center gap-2"
                >
                  <span>Solicitar Cotización</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
