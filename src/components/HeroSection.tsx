
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-china-darkBlue to-slate-800 text-white">
      {/* Decorative element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-china-red/20 blur-3xl"></div>
        <div className="absolute left-1/4 top-1/2 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl animate-float-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Начните бизнес с Китаем <span className="text-china-red">уже сегодня</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Узнайте как искать надежных поставщиков, проверять товары и безопасно 
              осуществлять сделки с китайскими партнерами
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-china-red hover:bg-china-red/90 text-lg py-6 px-8">
                Записаться на курс
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
                Смотреть программу
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm">Уже обучили <span className="font-bold">500+</span> человек</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5 lg:w-1/3 animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-china-red to-blue-600 rounded-2xl blur-sm opacity-75"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                <h3 className="text-center text-xl font-bold text-china-darkBlue mb-4">Ближайший поток</h3>
                <div className="bg-china-lightGrey p-4 rounded-lg mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Дата старта:</span>
                    <span className="font-semibold text-china-darkBlue">15 июня 2025</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Длительность:</span>
                    <span className="font-semibold text-china-darkBlue">8 недель</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Формат:</span>
                    <span className="font-semibold text-china-darkBlue">Онлайн</span>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="w-3/4 h-full bg-china-red rounded-full"></div>
                  </div>
                  <span className="ml-2 text-sm font-medium text-china-red">75%</span>
                </div>
                <p className="text-center text-gray-500 text-sm mb-4">Осталось 6 мест из 25</p>
                <Button className="w-full bg-china-red hover:bg-china-red/90">
                  Забронировать место
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
