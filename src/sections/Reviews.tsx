import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { reviews } from "../data/reviews";
import CountUp from "../components/CountUp";

export default function Reviews() {
  const avgRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
  );

  return (
    <section id="reviews" className="relative py-20 sm:py-28 lg:py-36 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="text-5xl font-bold text-dark-900">
              <CountUp end={avgRating} duration={2} decimals={1} />
            </span>
            <div className="flex flex-col items-start">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star
                      className={`w-4 h-4 ${
                        i < Math.round(avgRating)
                          ? "text-dark-900 fill-dark-900"
                          : "text-dark-900/20"
                      }`}
                    />
                  </motion.span>
                ))}
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
                className="text-xs text-dark-600 mt-1"
              >
                На основе {reviews.length} отзывов с Яндекс Карт
              </motion.span>
            </div>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark-900 tracking-tight">
            Отзывы наших гостей
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="bg-white border border-dark-900/5 rounded-sm p-6 h-full flex flex-col hover:border-dark-900/20 hover:shadow-premium transition-all duration-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ rotate: -10, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Quote className="w-6 h-6 text-dark-900/20 mb-4" />
                </motion.div>
                <p className="text-sm text-dark-600 leading-relaxed mb-5 flex-1">
                  {review.text}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-dark-900">
                    {review.name}
                  </span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-3 h-3 text-dark-900 fill-dark-900" />
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            target="_blank"
            href="https://n1972733.yclients.com"
            data-company-id="1972733"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="yclients-wr-button inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-white bg-dark-900 hover:bg-dark-700 transition-all duration-500"
          >
            Получить скидку 15%
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
