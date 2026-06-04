import { ArrowLeft } from "lucide-react";

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-light">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-dark-600 hover:text-dark-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>На главную</span>
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-dark-900 mb-2">
          Политика конфиденциальности
        </h1>
        <p className="text-xs text-dark-600 mb-10">
          Последнее обновление: 3 июня 2026 г.
        </p>

        <div className="space-y-8 text-sm text-dark-600 leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-dark-900 mb-3">
              1. Общие положения
            </h2>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки
              и защиты персональных данных пользователей сайта барбершопа
              «Классика» (далее — «Сайт»).
            </p>
            <p className="mt-2">
              Используя Сайт, вы выражаете согласие с условиями настоящей
              Политики. Если вы не согласны — пожалуйста, прекратите
              использование Сайта.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-dark-900 mb-3">
              2. Какие данные собираются
            </h2>
            <p className="mb-2">
              Сайт не собирает и не обрабатывает персональные данные
              пользователей (ФИО, телефон, email) напрямую. На Сайте
              отсутствуют формы сбора персональных данных.
            </p>
            <p className="mb-2">
              Для отображения карты на Сайте используется сервис Яндекс.Карты
              (ООО «ЯНДЕКС»). Яндекс.Карты могут автоматически устанавливать
              технические файлы cookie, необходимые для функционирования карты и
              обеспечения безопасности.
            </p>
            <p>Сайт не использует системы аналитики (Яндекс.Метрика, Google Analytics) и рекламные пиксели.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-dark-900 mb-3">
              3. Файлы cookie
            </h2>
            <p className="mb-2">
              Cookie — это небольшие текстовые файлы, которые сохраняются на
              устройстве пользователя при посещении сайта. На Сайте cookie
              используются исключительно для корректной работы сервиса
              Яндекс.Карты.
            </p>
            <p className="mb-2">
              Вы можете отключить использование cookie в настройках вашего
              браузера. В этом случае функциональность карты может быть
              ограничена, но остальные разделы Сайта останутся доступны.
            </p>
            <p>Сайт не использует cookie для отслеживания поведения пользователей, сбора статистики или рекламы.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-dark-900 mb-3">
              4. Цели обработки данных
            </h2>
            <p>Технические cookie Яндекс.Карт обрабатываются с единственной целью — обеспечить отображение карты на Сайте.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-dark-900 mb-3">
              5. Передача данных третьим лицам
            </h2>
            <p className="mb-2">
              Сайт не передаёт персональные данные пользователей третьим лицам.
            </p>
            <p>
              При использовании Яндекс.Карт применяются условия использования
              сервиса Яндекса, который может обрабатывать технические данные в
              соответствии с собственной политикой конфиденциальности,
              доступной на сайте Яндекса.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-dark-900 mb-3">
              6. Права пользователя
            </h2>
            <p className="mb-2">
              В соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ
              «О персональных данных» вы имеете право:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>получить информацию об обработке ваших данных;</li>
              <li>требовать уточнения, блокирования или уничтожения ваших данных;</li>
              <li>отозвать согласие на обработку персональных данных;</li>
              <li>обжаловать действия оператора в уполномоченном органе.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-dark-900 mb-3">
              7. Защита данных
            </h2>
            <p>
              Сайт принимает необходимые организационные и технические меры для
              защиты информации от неправомерного доступа, уничтожения или
              разглашения.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-dark-900 mb-3">
              8. Контакты
            </h2>
            <p className="mb-1">По вопросам, связанным с обработкой персональных данных, обращайтесь:</p>
            <p>Барбершоп «Классика»</p>
            <p>Краснодар, Ростовское шоссе, 30/7к1</p>
            <p>
              Телефон:{" "}
              <a href="tel:+79181280865" className="text-dark-900 underline underline-offset-2">
                +7 (918) 128-08-65
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-dark-900 mb-3">
              9. Изменение Политики
            </h2>
            <p>
              Настоящая Политика может быть изменена. Актуальная версия всегда
              доступна на этой странице.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
