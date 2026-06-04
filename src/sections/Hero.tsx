import { motion } from "framer-motion";
import { Calendar, ArrowDown, Scissors, Gift } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-16 lg:pt-20 flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={`${import.meta.env.BASE_URL}hero-bg.mp4`} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-dark-900/60" />
      <div className="absolute inset-0 bg-gradient-to-br from-dark-800/80 via-dark-900/80 to-dark-900/80" />
      <div className="absolute inset-0 texture-overlay" />

      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 glass-dark rounded-full mb-6 sm:mb-8"
          >
            <Gift className="w-3.5 h-3.5 text-gray-200" />
            <span className="text-xs tracking-wider text-white/80">
              Скидка 15% на первое посещение
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-[0.08em] text-white mb-6"
          >
            КЛАССИКА
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-white/70 font-light tracking-wider mb-4"
          >
            Мужские стрижки и уход в Краснодаре
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base text-white/40 max-w-xl leading-relaxed mb-10"
          >
            Современный барбершоп для мужчин, которые ценят качество, стиль и сервис.
            Барбершоп «Классика» — первое посещение со скидкой 15%.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              target="_blank"
              href="https://n1972733.yclients.com"
              data-company-id="1972733"
              className="yclients-wr-button group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-dark-900 bg-white hover:bg-gray-200 transition-all duration-500"
            >
              <Calendar className="w-4 h-4" />
              <span>Записаться</span>
            </a>
            <a
              href="#services"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white/80 hover:text-white glass-dark hover:bg-white/10 transition-all duration-500"
            >
              <Scissors className="w-4 h-4" />
              <span>Посмотреть услуги</span>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-300"
      >
        <span className="text-xs tracking-widest">SCROLL</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
