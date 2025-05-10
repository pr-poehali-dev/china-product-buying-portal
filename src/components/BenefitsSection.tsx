
import React from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  {
    icon: 'Truck',
    title: 'Надежная доставка',
    description: 'Научитесь выбирать оптимальные способы доставки и минимизировать риски при транспортировке товаров из Китая.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Проверка качества',
    description: 'Освойте методы проверки качества товаров и работу с инспекционными компаниями в Китае.'
  },
  {
    icon: 'Languages',
    title: 'Преодоление языкового барьера',
    description: 'Узнайте, как эффективно общаться с китайскими поставщиками даже без знания китайского языка.'
  },
  {
    icon: 'Banknote',
    title: 'Безопасные платежи',
    description: 'Изучите безопасные способы оплаты и методы защиты при финансовых операциях с китайскими партнерами.'
  },
  {
    icon: 'Search',
    title: 'Поиск надежных поставщиков',
    description: 'Научитесь находить проверенных производителей и оптовиков с лучшими условиями сотрудничества.'
  },
  {
    icon: 'BarChart',
    title: 'Анализ рынка',
    description: 'Освойте методы исследования китайского рынка для выбора перспективных товарных ниш.'
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 bg-china-lightGrey">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-china-darkBlue">
            Преимущества нашего обучения
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Наш курс предоставляет все необходимые знания и инструменты для успешного старта бизнеса с Китаем
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="card-hover border-none">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-china-red/10 p-3 w-fit">
                  <Icon 
                    name={benefit.icon} 
                    className="h-8 w-8 text-china-red" 
                    fallback="Check"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-china-darkBlue">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
