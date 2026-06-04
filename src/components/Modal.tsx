import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, ArrowRight } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md"
          >
            <div className="bg-white rounded-sm p-8 sm:p-10 text-center shadow-premium">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 text-dark-600 hover:text-dark-900 transition-colors"
                aria-label="Закрыть"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-16 h-16 rounded-full bg-dark-900 flex items-center justify-center mx-auto mb-6">
                <Gift className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-semibold text-dark-900 mb-3">
                Ваш первый визит со скидкой 15%
              </h3>

              <p className="text-sm text-dark-600 leading-relaxed mb-8">
                Получите специальное предложение для новых клиентов в барбершопе «Классика».
              </p>

              <div className="space-y-3">
                <a
                  target="_blank"
                  href="https://n1972733.yclients.com"
                  data-company-id="1972733"
                  className="yclients-wr-button w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-dark-900 hover:bg-dark-700 transition-all duration-300 group"
                  onClick={onClose}
                >
                  <span>Записаться</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <button
                  onClick={onClose}
                  className="w-full px-6 py-3 text-sm text-dark-600 hover:text-dark-900 transition-colors"
                >
                  Позже
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
