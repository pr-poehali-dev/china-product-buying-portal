
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const programModules = [
  {
    id: "module-1",
    title: "Введение в бизнес с Китаем",
    description: "Основы работы с китайскими поставщиками и особенности китайского рынка.",
    lessons: [
      "Возможности и перспективы бизнеса с Китаем",
      "Культурные особенности ведения бизнеса с китайцами",
      "Обзор популярных товарных категорий",
      "Разбор успешных бизнес-кейсов"
    ]
  },
  {
    id: "module-2",
    title: "Поиск и выбор поставщиков",
    description: "Стратегии поиска надежных поставщиков и производителей в Китае.",
    lessons: [
      "Работа с торговыми площадками: Alibaba, 1688, Taobao",
      "Критерии оценки надежности поставщика",
      "Проверка репутации и верификация компаний",
      "Ведение переговоров и коммуникация"
    ]
  },
  {
    id: "module-3",
    title: "Проверка качества и заказ образцов",
    description: "Методы контроля качества товаров и работа с тестовыми образцами.",
    lessons: [
      "Процесс заказа и согласования образцов",
      "Организация инспекции качества",
      "Работа с инспекционными компаниями",
      "Выявление дефектов и решение проблем с качеством"
    ]
  },
  {
    id: "module-4",
    title: "Логистика и доставка",
    description: "Организация эффективной доставки товаров из Китая.",
    lessons: [
      "Виды доставки и их особенности: авиа, море, ЖД, авто",
      "Расчет стоимости логистики и оптимизация расходов",
      "Таможенное оформление и сертификация",
      "Работа с транспортными компаниями и посредниками"
    ]
  },
  {
    id: "module-5",
    title: "Финансовые аспекты и безопасность сделок",
    description: "Организация безопасных платежей и финансовых операций.",
    lessons: [
      "Способы оплаты поставщикам в Китае",
      "Минимизация рисков при международных платежах",
      "Валютный контроль и банковские операции",
      "Страхование грузов и финансовых рисков"
    ]
  },
  {
    id: "module-6",
    title: "Построение успешного бизнеса",
    description: "Практические рекомендации по развитию бизнеса на основе китайских товаров.",
    lessons: [
      "Разработка бизнес-модели и стратегии",
      "Масштабирование закупок и работа с большими объемами",
      "Управление ассортиментом и ценообразование",
      "Построение долгосрочных отношений с поставщиками"
    ]
  }
];

const ProgramSection = () => {
  return (
    <section id="program" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-china-darkBlue">
            Программа курса
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы разработали комплексную программу, которая проведет вас через все этапы
            организации закупок из Китая — от поиска поставщиков до получения товара
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="w-full">
              {programModules.map((module, index) => (
                <AccordionItem key={module.id} value={module.id} className="border-b border-china-lightGrey">
                  <AccordionTrigger className="py-4 text-left hover:text-china-red">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 bg-china-red/10 text-china-red rounded-full w-10 h-10 flex items-center justify-center">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-china-darkBlue">{module.title}</h3>
                        <p className="text-sm text-gray-500 mt-1 pr-8">{module.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-14">
                    <ul className="space-y-2 py-2">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className="flex items-start gap-2">
                          <Icon name="CheckCircle" className="h-5 w-5 text-china-red mt-0.5" />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="bg-china-lightGrey rounded-lg p-6 lg:p-8 h-fit">
            <h3 className="text-xl font-bold text-china-darkBlue mb-4">Что вы получите</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <Icon name="FileText" className="h-5 w-5 text-china-red mt-1" />
                <div>
                  <h4 className="font-medium">24 обучающих модуля</h4>
                  <p className="text-sm text-gray-600">С подробными видеоуроками и практическими заданиями</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Users" className="h-5 w-5 text-china-red mt-1" />
                <div>
                  <h4 className="font-medium">Доступ к сообществу</h4>
                  <p className="text-sm text-gray-600">Закрытый чат с единомышленниками и преподавателями</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="HeadphonesIcon" className="h-5 w-5 text-china-red mt-1" />
                <div>
                  <h4 className="font-medium">8 групповых созвонов</h4>
                  <p className="text-sm text-gray-600">Разбор ваших вопросов и практических кейсов</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="FileCheck" className="h-5 w-5 text-china-red mt-1" />
                <div>
                  <h4 className="font-medium">Шаблоны документов</h4>
                  <p className="text-sm text-gray-600">Готовые образцы договоров, писем и инструкций</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Database" className="h-5 w-5 text-china-red mt-1" />
                <div>
                  <h4 className="font-medium">База поставщиков</h4>
                  <p className="text-sm text-gray-600">Список проверенных производителей в разных нишах</p>
                </div>
              </li>
            </ul>
            <div className="flex flex-col gap-3">
              <Button className="w-full bg-china-red hover:bg-china-red/90">
                Записаться на курс
              </Button>
              <Button variant="outline" className="w-full">
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
