
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const testimonials = [
  {
    id: 1,
    name: "Алексей Петров",
    role: "Владелец интернет-магазина",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    testimonial: "Курс превзошел все мои ожидания! Я долго не решался начать бизнес с Китаем из-за страха обмана, но благодаря полученным знаниям смог найти надежного поставщика и уже сделал несколько успешных закупок. Окупил стоимость курса уже на первой партии товара!",
    rating: 5
  },
  {
    id: 2,
    name: "Мария Иванова",
    role: "Предприниматель",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    testimonial: "Отличная структура обучения и поддержка. Особенно ценными для меня оказались знания по логистике и таможенному оформлению. Преподаватели всегда на связи и готовы помочь с любыми вопросами. Спасибо команде курса за такие качественные материалы!",
    rating: 5
  },
  {
    id: 3,
    name: "Дмитрий Соколов",
    role: "Начинающий импортер",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    testimonial: "Раньше я боялся работать с китайскими поставщиками из-за языкового барьера и рисков. Курс дал мне четкий алгоритм действий и уверенность. Сейчас активно развиваю свое направление и планирую масштабироваться. Рекомендую всем, кто хочет начать работу с Китаем!",
    rating: 4
  },
  {
    id: 4,
    name: "Елена Смирнова",
    role: "Директор магазина одежды",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    testimonial: "Я уже имела опыт закупок, но хотела структурировать знания. Курс дал мне более глубокое понимание процессов и помог оптимизировать логистику. Теперь мои товары приходят быстрее и дешевле. Отдельное спасибо за раздел про проверку качества!",
    rating: 5
  },
  {
    id: 5,
    name: "Игорь Васильев",
    role: "Предприниматель",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    testimonial: "Пришел на курс с нулевыми знаниями, а ушел с полным пониманием процесса и первым заказом в пути. Материалы изложены доступно, много практических заданий. Особенно понравились разборы реальных кейсов и ошибок. Своих денег курс однозначно стоит!",
    rating: 5
  }
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Icon 
          key={i} 
          name="Star" 
          className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-china-darkBlue">
            Отзывы наших учеников
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Послушайте, что говорят выпускники курса, которые уже успешно развивают 
            свой бизнес с Китаем
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="py-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="h-full border-none shadow-md card-hover">
                  <CardContent className="p-6 flex flex-col h-full">
                    <RatingStars rating={testimonial.rating} />
                    <blockquote className="mt-4 mb-6 flex-grow">
                      <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
                    </blockquote>
                    <div className="flex items-center mt-auto">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-china-darkBlue">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="static translate-y-0 bg-white hover:bg-gray-100 text-china-darkBlue" />
            <CarouselNext className="static translate-y-0 bg-white hover:bg-gray-100 text-china-darkBlue" />
          </div>
        </Carousel>

        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center text-china-red hover:text-china-red/80 font-medium">
            Посмотреть все отзывы
            <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
