
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-china-darkBlue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и информация о компании */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Icon name="ShoppingBag" className="w-6 h-6 text-china-red" />
              <span className="text-xl font-bold">КитайКурс</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Освойте выкуп товаров из Китая и начните прибыльный бизнес с нашим профессиональным курсом.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
          
          {/* Ссылки */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Главная</Link>
              </li>
              <li>
                <Link to="/#program" className="text-gray-300 hover:text-white">Программа курса</Link>
              </li>
              <li>
                <Link to="/#benefits" className="text-gray-300 hover:text-white">Преимущества</Link>
              </li>
              <li>
                <Link to="/#testimonials" className="text-gray-300 hover:text-white">Отзывы</Link>
              </li>
            </ul>
          </div>
          
          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-china-red" />
                <a href="mailto:info@kitaykurs.ru" className="text-gray-300 hover:text-white">info@kitaykurs.ru</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-china-red" />
                <a href="tel:+7800123456" className="text-gray-300 hover:text-white">+7 (800) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-china-red" />
                <span className="text-gray-300">Москва, ул. Примерная, 123</span>
              </li>
            </ul>
          </div>
          
          {/* Форма подписки */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Подпишитесь на новости</h3>
            <p className="text-gray-300 mb-2">Получайте актуальные новости о курсе и бизнесе с Китаем</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-china-red"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-china-red text-white rounded hover:bg-china-red/90 transition-colors"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} КитайКурс. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
