import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Кто такие тайные покупатели на вашей платформе?",
    answer:
      "Это верифицированные специалисты с опытом в финансовой сфере. Каждый проходит обучение и тестирование перед допуском к проверкам. В базе — более 500 тестировщиков по всей России.",
  },
  {
    id: 2,
    question: "Что именно проверяет тайный покупатель?",
    answer:
      "Стандарты обслуживания в отделениях, работу колл-центра, онлайн-банк и мобильное приложение, скорость обработки заявок, компетентность сотрудников, соблюдение скриптов и регламентов. Сценарий проверки согласовывается с банком заранее.",
  },
  {
    id: 3,
    question: "Сколько времени занимает одна проверка?",
    answer:
      "Разовая проверка — от 3 до 7 рабочих дней с момента запуска до получения отчёта. Масштабные аудиты (несколько регионов) занимают 2-4 недели. Срочные форматы согласовываются индивидуально.",
  },
  {
    id: 4,
    question: "Как выглядит итоговый отчёт?",
    answer:
      "Структурированный документ с числовыми оценками по каждому критерию, фото и аудио-доказательствами, сравнением по отделениям и конкретными рекомендациями. Доступен в PDF и в личном кабинете банка.",
  },
  {
    id: 5,
    question: "Как банк может стать клиентом?",
    answer:
      "Оставьте заявку через форму — мы свяжемся в течение рабочего дня, обсудим задачу, согласуем сценарий проверки и подпишем договор. Первый пилот возможен уже на следующей неделе.",
  },
  {
    id: 6,
    question: "Как стать тайным покупателем на платформе?",
    answer:
      "Заполните анкету на сайте, пройдите онлайн-тест и короткое собеседование. После верификации вы получаете доступ к заданиям, оплата — за каждый выполненный отчёт.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg">
        <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Частые
          <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">вопросы</span>
        </h2>
        <p className="mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          Всё о работе платформы — для банков, которые хотят проверить качество сервиса,
          и для специалистов, которые хотят стать тайными покупателями.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-gray-300 dark:border-gray-700">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE] transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openItem === faq.id ? "rotate-180 text-[#7A7FEE]" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}