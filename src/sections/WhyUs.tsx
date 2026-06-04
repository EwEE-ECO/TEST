import { motion } from "framer-motion";
import { Award, Sofa, Sparkles, Users } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Профессионализм",
    description: "Только опытные барберы с подтверждённой квалификацией и регулярным повышением навыков.",
  },
  {
    icon: Sofa,
    title: "Комфорт",
    description: "Современный интерьер, премиальный сервис и уютная атмосфера для каждого гостя.",
  },
  {
    icon: Sparkles,
    title: "Качество",
    description: "Проверенная профессиональная косметика и современное оборудование ведущих брендов.",
  },
  {
    icon: Users,
    title: "Атмосфера",
    description: "Место, куда хочется возвращаться. Дружелюбный коллектив и истинно мужская атмосфера.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function WhyUs() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark-900 tracking-tight mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-sm text-dark-600 max-w-xl mx-auto">
            Мы делаем всё, чтобы каждый визит оставлял только положительные впечатления
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <div className="bg-white border border-dark-900/5 rounded-sm p-8 h-full hover:border-dark-900/20 hover:shadow-premium transition-all duration-500">
                  <div className="w-12 h-12 rounded-sm bg-dark-900 flex items-center justify-center mb-5 group-hover:bg-dark-700 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-dark-900 mb-3 group-hover:text-dark-700 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-dark-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
