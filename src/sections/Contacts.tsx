import { motion } from "framer-motion";
import { MapPin, Phone, Calendar, ArrowUpRight, Send } from "lucide-react";

export default function Contacts() {
  return (
    <section id="contacts" className="relative py-20 sm:py-28 lg:py-36 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark-900 tracking-tight mb-4">
            Контакты
          </h2>
          <p className="text-sm text-dark-600">
            Всегда на связи и ждём вас в гости
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-sm bg-dark-900 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-dark-900 mb-1">
                    Адрес
                  </h4>
                  <p className="text-sm text-dark-600">
                    Краснодар, Ростовское шоссе, 30/7к1
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-sm bg-dark-900 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-dark-900 mb-1">
                    Телефон
                  </h4>
                  <a
                    href="tel:+79181280865"
                    className="text-sm text-dark-600 hover:text-dark-900 transition-colors"
                  >
                    +7 (918) 128-08-65
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-sm bg-dark-900 flex items-center justify-center shrink-0">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-dark-900 mb-1">
                    Telegram
                  </h4>
                  <a
                    href="https://t.me/classic_br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-dark-600 hover:text-dark-900 transition-colors"
                  >
                    @classic_br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-sm bg-dark-900 flex items-center justify-center shrink-0">
                  <img src="https://maxicons.ru/icons/Max_logo.svg" alt="Max" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-dark-900 mb-1">
                    Max
                  </h4>
                  <a
                    href="https://max.ru/u/f9LHodD0cOICiE22JFKFeGecTPGF0p8j0P2U_Z-X7HXCKy9aOQ7VX2xqlJQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-dark-600 hover:text-dark-900 transition-colors"
                  >
                    Перейти в профиль
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+79181280865"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-dark-900 hover:bg-dark-700 transition-all duration-500"
              >
                <Phone className="w-4 h-4" />
                <span>Позвонить</span>
              </a>
              <a
                href="https://yandex.ru/maps/-/CPXuZIZp"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm text-dark-600 hover:text-dark-900 bg-white border border-dark-900/5 hover:border-dark-900/20 transition-all duration-500"
              >
                <MapPin className="w-4 h-4" />
                <span>Построить маршрут</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                target="_blank"
                href="https://n1972733.yclients.com"
                data-company-id="1972733"
                className="yclients-wr-button group inline-flex items-center gap-2 px-6 py-3.5 text-sm text-dark-600 hover:text-dark-900 bg-white border border-dark-900/5 hover:border-dark-900/20 transition-all duration-500"
              >
                <Calendar className="w-4 h-4" />
                <span>Онлайн запись</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                target="_blank"
                href="https://n1972733.yclients.com"
                data-company-id="1972733"
                className="yclients-wr-button group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-dark-900 hover:bg-dark-700 transition-all duration-500"
              >
                <Calendar className="w-4 h-4" />
                <span>Скидка 15%</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="h-[300px] lg:h-[400px] rounded-sm overflow-hidden border border-dark-900/5"
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=38.999697%2C45.101216&z=18&pt=38.999697,45.101216,pm2dvl&l=map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Карта - Барбершоп Классика"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
