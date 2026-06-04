import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-dark-900/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2 group">
            <Scissors className="w-5 h-5 text-dark-700 group-hover:rotate-90 transition-transform duration-500" />
            <span className="text-lg font-display font-bold tracking-widest text-dark-900">
              КЛАССИКА
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-dark-600 hover:text-dark-900 transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              target="_blank"
              href="https://n1972733.yclients.com"
              data-company-id="1972733"
              className="yclients-wr-button px-5 py-2.5 text-sm font-medium text-white bg-dark-900 hover:bg-dark-700 transition-all duration-300 tracking-wide"
            >
              Записаться
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-dark-600 hover:text-dark-900 transition-colors"
            aria-label="Меню"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-dark-900/5"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm text-dark-600 hover:text-dark-900 transition-colors py-2 tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <a
                target="_blank"
                href="https://n1972733.yclients.com"
                data-company-id="1972733"
                onClick={() => setMobileOpen(false)}
                className="yclients-wr-button block w-full text-center px-5 py-3 text-sm font-medium text-white bg-dark-900 hover:bg-dark-700 transition-colors tracking-wide"
              >
                Записаться
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
