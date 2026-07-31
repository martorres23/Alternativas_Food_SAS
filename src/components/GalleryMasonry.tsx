"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: "fruver" | "abarrotes" | "refrigerios" | "logistica";
  categoryLabel: string;
  image: string;
  aspect: string;
  desc: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 0,
    title: "Selección de Frutas y Verduras Frescas",
    category: "fruver",
    categoryLabel: "Fruver",
    image: "/images/portada.jpeg",
    aspect: "aspect-square",
    desc: "Productos hortofrutícolas seleccionados por maduración y calibre, listos para distribución comercial.",
  },
  {
    id: 1,
    title: "Refrigerios Institucionales Nutritivos",
    category: "refrigerios",
    categoryLabel: "Refrigerios",
    image: "/images/salad.jpg",
    aspect: "aspect-[4/3]",
    desc: "Meriendas balanceadas para colegios y comedores institucionales, con control de inocuidad y empaque individual.",
  },
  {
    id: 2,
    title: "Logística y Distribución Eficiente",
    category: "logistica",
    categoryLabel: "Distribución y Logística",
    image: "/images/basket.jpg",
    aspect: "aspect-[16/10]",
    desc: "Rutas programadas y procesos logísticos eficientes para entregar fruver, abarrotes y refrigerios a tiempo.",
  },
  {
    id: 3,
    title: "Abarrotes y Productos de Consumo Masivo",
    category: "abarrotes",
    categoryLabel: "Abarrotes",
    image: "/images/basket.jpg",
    aspect: "aspect-[16/10]",
    desc: "Granos, aceites, harinas, conservas y víveres secos para despensas institucionales y comerciales.",
  },
  {
    id: 4,
    title: "Entrega de Refrigerios Escolares",
    category: "refrigerios",
    categoryLabel: "Refrigerios",
    image: "/images/salad.jpg",
    aspect: "aspect-square",
    desc: "Suministro coordinado de refrigerios en horarios escolares con opciones dulces y saladas.",
  },
  {
    id: 5,
    title: "Distribución de Fruver y Abarrotes",
    category: "logistica",
    categoryLabel: "Distribución y Logística",
    image: "/images/portada.jpeg",
    aspect: "aspect-[4/3]",
    desc: "Logística integrada de distribución de frutas, verduras y abarrotes para restaurantes, hoteles e instituciones.",
  },
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "fruver", label: "Fruver" },
  { id: "abarrotes", label: "Abarrotes" },
  { id: "refrigerios", label: "Refrigerios" },
  { id: "logistica", label: "Distribución y Logística" },
];

export default function GalleryMasonry() {
  const [filter, setFilter] = useState("all");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setFilter(cat.id);
              setActiveImageIndex(null);
            }}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
              filter === cat.id
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "bg-white text-neutral-dark hover:bg-neutral-light border border-neutral-muted"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid Layout (Masonry-like) */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveImageIndex(idx)}
              className={`group relative overflow-hidden rounded-2xl bg-neutral-dark cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 ${item.aspect}`}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-95"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="inline-block px-2.5 py-0.5 rounded bg-accent text-[10px] font-bold text-neutral-dark uppercase tracking-wider mb-2 self-start">
                  {item.categoryLabel}
                </span>
                <h4 className="font-display font-bold text-white text-lg leading-tight mb-1">
                  {item.title}
                </h4>
                <p className="font-sans text-white/80 text-xs line-clamp-2">
                  {item.desc}
                </p>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white">
                  <Search className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-dark/95 backdrop-blur-md p-4 sm:p-6 lg:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-accent bg-white/10 hover:bg-white/20 transition-all rounded-full p-2.5 z-50 focus:outline-none"
              aria-label="Cerrar vista"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Left Navigation */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-6 text-white hover:text-accent bg-white/10 hover:bg-white/20 transition-all rounded-full p-2.5 z-40 focus:outline-none"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full flex flex-col items-center gap-4 z-30"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[4/3] max-h-[70vh] rounded-xl overflow-hidden bg-neutral-light border border-white/10">
                <Image
                  src={filteredItems[activeImageIndex].image}
                  alt={filteredItems[activeImageIndex].title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Text Meta info */}
              <div className="text-center text-white max-w-2xl px-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-accent/20 text-accent border border-accent/30 mb-2">
                  <ImageIcon className="h-3.5 w-3.5" />
                  {filteredItems[activeImageIndex].categoryLabel}
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-2">
                  {filteredItems[activeImageIndex].title}
                </h3>
                <p className="font-sans text-sm text-neutral-light/80">
                  {filteredItems[activeImageIndex].desc}
                </p>
              </div>
            </motion.div>

            {/* Right Navigation */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-6 text-white hover:text-accent bg-white/10 hover:bg-white/20 transition-all rounded-full p-2.5 z-40 focus:outline-none"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
