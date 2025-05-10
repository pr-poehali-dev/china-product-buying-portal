
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Icon name="ShoppingBag" className="w-6 h-6 text-china-red" />
          <span className="text-xl font-bold text-china-darkBlue">КитайКурс</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-gray-600 hover:text-china-red transition-colors">
            Главная
          </Link>
          <Link to="/#program" className="text-sm font-medium text-gray-600 hover:text-china-red transition-colors">
            Программа курса
          </Link>
          <Link to="/#benefits" className="text-sm font-medium text-gray-600 hover:text-china-red transition-colors">
            Преимущества
          </Link>
          <Link to="/#testimonials" className="text-sm font-medium text-gray-600 hover:text-china-red transition-colors">
            Отзывы
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            Войти
          </Button>
          <Button className="bg-china-red hover:bg-china-red/90">
            Записаться на курс
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
