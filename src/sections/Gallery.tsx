import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages, galleryCategories } from "../data/gallery";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const currentIndex = selectedImage !== null
    ? filtered.findIndex((img) => img.id === selectedImage)
    : -1;

  return (
    <section id="gallery" className="relative py-20 sm:py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark-900 tracking-tight mb-4">
            Галерея
          </h2>
          <p className="text-sm text-dark-600 max-w-xl mx-auto">
            Фотографии интерьера и работ наших мастеров
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 text-xs tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-dark-900 text-white font-medium"
                  : "text-dark-600 hover:text-dark-900 bg-light border border-dark-900/5 hover:border-dark-900/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-sm"
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/40 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-xs text-white/80 tracking-wider">
                  Нажмите для просмотра
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && currentIndex >= 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Закрыть"
            >
              <X className="w-6 h-6" />
            </button>

            {currentIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(filtered[currentIndex - 1].id);
                }}
                className="absolute left-4 p-2 text-white/70 hover:text-white transition-colors z-10"
                aria-label="Назад"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}

            {currentIndex < filtered.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(filtered[currentIndex + 1].id);
                }}
                className="absolute right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
                aria-label="Вперёд"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}

            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={filtered[currentIndex].src}
              alt={filtered[currentIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
