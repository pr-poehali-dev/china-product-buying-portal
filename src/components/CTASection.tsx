
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CTASection = () => {
  return (
    <section className="py-16 bg-china-darkBlue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать свой путь к успешному бизнесу с Китаем?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Зарегистрируйтесь сейчас и получите доступ к бонусным материалам и 
            скидку 20% на обучение
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-china-red/20 p-4 rounded-full mb-4">
                  <Icon name="Clock" className="h-8 w-8 text-china-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Старт через</h3>
                <p className="text-3xl font-bold">7 дней</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-china-red/20 p-4 rounded-full mb-4">
                  <Icon name="Users" className="h-8 w-8 text-china-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Осталось мест</h3>
                <p className="text-3xl font-bold">6 из 25</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-china-red/20 p-4 rounded-full mb-4">
                  <Icon name="Tag" className="h-8 w-8 text-china-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Скидка</h3>
                <p className="text-3xl font-bold">20%</p>
              </div>
            </div>
            
            <Button className="bg-china-red hover:bg-china-red/90 text-lg py-6 px-10">
              Забронировать место
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center">
              <Icon name="ShieldCheck" className="h-6 w-6 text-china-red mr-2" />
              <span>Гарантия возврата средств</span>
            </div>
            <div className="flex items-center">
              <Icon name="CreditCard" className="h-6 w-6 text-china-red mr-2" />
              <span>Удобная рассрочка платежа</span>
            </div>
            <div className="flex items-center">
              <Icon name="Clock" className="h-6 w-6 text-china-red mr-2" />
              <span>Доступ к материалам навсегда</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
