import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { BoltIcon, HomeIcon, BuildingOfficeIcon, WrenchScrewdriverIcon, StarIcon, VideoCameraIcon, FireIcon, CheckIcon } from '@heroicons/react/24/outline';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <BoltIcon className="h-12 w-12 text-primary-600" />,
      title: t('Electrical Construction', 'Електроизграждане'),
      description: t(
        'Complete electrical installations for industrial and commercial facilities, from medium voltage to 20kV.',
        'Цялостни електроинсталации за промишлени и търговски обекти, от средно напрежение до 20kV.'
      ),
      features: [
        t('Building electrical systems', 'Електроизграждане на сгради'),
        t('Medium voltage installations', 'Инсталации от средно напрежение'),
        t('Up to 20kV systems', 'Системи до 20kV'),
        t('Industrial facilities', 'Промишлени помещения')
      ]
    },
    {
      icon: <BuildingOfficeIcon className="h-12 w-12 text-primary-600" />,
      title: t('Transformer Stations', 'Трафопостове'),
      description: t(
        'Design and construction of transformer stations up to 20kV.',
        'Проектиране и изграждане на трафопостове до 20kV.'
      ),
      features: [
        t('Complete design', 'Пълен проект'),
        t('Construction', 'Изграждане'),
        t('Testing and commissioning', 'Тестване и пускане'),
        t('Documentation', 'Документация')
      ]
    },
    {
      icon: <VideoCameraIcon className="h-12 w-12 text-primary-600" />,
      title: t('Video Surveillance', 'Видеонаблюдение'),
      description: t(
        'Installation of complete video surveillance systems.',
        'Инсталиране на цялостни системи за видеонаблюдение.'
      ),
      features: [
        t('Full installation', 'Пълен монтаж'),
        t('Indoor/outdoor cameras', 'Вътрешни/външни камери'),
        t('Mobile access', 'Достъп през телефон'),
        t('Remote monitoring', 'Отдалечен контрол')
      ]
    },
    {
      icon: <FireIcon className="h-12 w-12 text-primary-600" />,
      title: t('Fire Alarm Systems', 'Пожароизвестяване'),
      description: t(
        'Early warning and fire protection solutions.',
        'Решения за ранно известяване и защита от пожар.'
      ),
      features: [
        t('Design and installation', 'Проектиране и монтаж'),
        t('Detectors', 'Детектори'),
        t('Alarm and notification', 'Сигнализация и известяване'),
        t('System integration', 'Интеграция на системи')
      ]
    },
    {
      icon: <WrenchScrewdriverIcon className="h-12 w-12 text-primary-600" />,
      title: t('Maintenance', 'Поддръжка'),
      description: t(
        'Regular maintenance of electrical installations and systems.',
        'Редовна поддръжка на електроинсталации и системи.'
      ),
      features: [
        t('Preventive maintenance', 'Превантивна поддръжка'),
        t('System checks', 'Проверка на системи'),
        t('Emergency support', 'Спешна поддръжка'),
        t('Performance optimization', 'Оптимизация на работата')
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Ivan Petrov',
      role: t('Business Owner', 'Собственик на бизнес'),
      content: t(
        'Elingineering Ltd. provided exceptional service for our office renovation. Their team was professional, efficient, and completed the work ahead of schedule.',
        'Елинжинеринг предостави изключително обслужване при обновяването на нашия офис. Екипът им беше професионален, ефективен и завърши работата предсрочно.'
      ),
      rating: 5,
    },
    {
      name: 'Maria Ivanova',
      role: t('Homeowner', 'Домакин'),
      content: t(
        'I was impressed by their attention to detail and safety standards. They transformed our home with a complete electrical upgrade.',
        'Бях впечатлена от вниманието им към детайлите и стандартите за безопасност. Те трансформираха нашия дом с пълно електрическо обновяване.'
      ),
      rating: 5,
    },
    {
      name: 'Georgi Dimitrov',
      role: t('Factory Manager', 'Управител на фабрика'),
      content: t(
        'Their industrial electrical solutions have significantly improved our production efficiency. Highly recommended!',
        'Техните индустриални електрически решения значително подобриха нашата производствена ефективност. Горещо препоръчвам!'
      ),
      rating: 5,
    },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: t('Industrial Complex Electrical Installation', 'Електроинсталация на Промишлен Комплекс'),
      description: t(
        'Complete electrical installation for a new industrial complex, including medium voltage systems and distribution networks.',
        'Цялостна електроинсталация за нов промишлен комплекс, включваща системи от средно напрежение и разпределителни мрежи.'
      ),
      image: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: t('Electrical Construction', 'Електроизграждане'),
      icon: <BoltIcon className="h-6 w-6" />,
    },
    {
      id: 2,
      title: t('Transformer Station Modernization', 'Модернизация на Трафопост'),
      description: t(
        'Modernization of an existing transformer station with new equipment and control systems.',
        'Модернизация на съществуващ трафопост с ново оборудване и контролни системи.'
      ),
      image: 'https://images.unsplash.com/photo-1595856898575-9d187bd32fd6?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: t('Transformer Stations', 'Трафопостове'),
      icon: <BuildingOfficeIcon className="h-6 w-6" />,
    },
    {
      id: 3,
      title: t('Warehouse Security System', 'Система за Сигурност на Склад'),
      description: t(
        'Installation of a comprehensive video surveillance system with mobile access for a large warehouse facility.',
        'Инсталиране на цялостна система за видеонаблюдение с достъп през телефон за голям складов комплекс.'
      ),
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: t('Video Surveillance', 'Видеонаблюдение'),
      icon: <VideoCameraIcon className="h-6 w-6" />,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-900">
                {t('ELIN ENGINEERING Ltd.', 'ЕЛИНЖИНЕРИНГ ЕООД')}
              </h1>
              <p className="text-xl mb-8 text-gray-700">
                {t('Specialized electrical services – from medium voltage to 20kV. Construction of transformer stations, electrical installations in warehouses, storage facilities, and production premises.', 'Специализирани електроуслуги – от средно напрежение до 20kV. Изграждане на трафопостове, електроинсталации в халета, складове и производствени помещения.')}
              </p>
              <Link to="/contact" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
                {t('Contact Us', 'Свържете се с нас')}
              </Link>
            </div>

            {/* Right Column - Image */}
            <div className="relative max-w-full overflow-hidden">
              {/* Main Image Container */}
              <div className="relative overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)',
                  borderRadius: '2rem'
                }}>
                <img
                  src="https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Professional Electrical Services"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
              </div>

              {/* Overlapping Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-20 md:w-40 h-20 md:h-40 bg-primary-200 rounded-full opacity-50 blur-2xl" />
              <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-20 md:w-40 h-20 md:h-40 bg-primary-300 rounded-full opacity-50 blur-2xl" />
              
              {/* Accent Lines */}
              <div className="absolute bottom-0 right-0 w-24 md:w-32 h-1 bg-primary-500 transform rotate-45 origin-bottom-right" />
              <div className="absolute top-0 left-0 w-16 md:w-24 h-1 bg-primary-400 transform -rotate-45 origin-top-left" />
              
              {/* Floating Elements */}
              <div className="absolute -right-2 md:-right-4 top-1/4 w-12 md:w-16 h-12 md:h-16 bg-white/10 backdrop-blur-sm rounded-lg transform rotate-12 shadow-lg" />
              <div className="absolute -left-2 md:-left-4 bottom-1/4 w-8 md:w-12 h-8 md:h-12 bg-white/10 backdrop-blur-sm rounded-full shadow-lg" />
              
              {/* Accent Border */}
              <div className="absolute inset-0 border-2 border-primary-200/30 rounded-2xl transform translate-x-2 md:translate-x-4 translate-y-2 md:translate-y-4 -z-10" />

              {/* Additional Geometric Shapes */}
              <div className="absolute -right-3 md:-right-6 top-1/3 w-12 md:w-20 h-12 md:h-20 bg-primary-300/20 rounded-lg transform rotate-45 shadow-lg" />
              <div className="absolute -left-3 md:-left-6 bottom-1/3 w-10 md:w-16 h-10 md:h-16 bg-primary-400/20 rounded-full shadow-lg" />
              
              {/* Diagonal Stripes */}
              <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 overflow-hidden">
                <div className="absolute w-[200%] h-[200%] bg-gradient-to-br from-primary-500/10 to-transparent transform -rotate-45" />
              </div>
              
              {/* Dots Pattern */}
              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 w-16 md:w-24 h-16 md:h-24">
                <div className="absolute top-0 left-0 w-1.5 md:w-2 h-1.5 md:h-2 bg-primary-400 rounded-full" />
                <div className="absolute top-3 md:top-4 left-3 md:left-4 w-1.5 md:w-2 h-1.5 md:h-2 bg-primary-400 rounded-full" />
                <div className="absolute top-6 md:top-8 left-6 md:left-8 w-1.5 md:w-2 h-1.5 md:h-2 bg-primary-400 rounded-full" />
                <div className="absolute top-9 md:top-12 left-9 md:left-12 w-1.5 md:w-2 h-1.5 md:h-2 bg-primary-400 rounded-full" />
              </div>

              {/* Zigzag Line */}
              <div className="absolute top-1/2 right-4 md:right-8 w-12 md:w-16 h-12 md:h-16">
                <div className="absolute top-0 left-0 w-3 md:w-4 h-3 md:h-4 border-t-2 border-r-2 border-primary-500" />
                <div className="absolute top-3 md:top-4 left-3 md:left-4 w-3 md:w-4 h-3 md:h-4 border-t-2 border-r-2 border-primary-500" />
                <div className="absolute top-6 md:top-8 left-6 md:left-8 w-3 md:w-4 h-3 md:h-4 border-t-2 border-r-2 border-primary-500" />
              </div>

              {/* Circular Accent */}
              <div className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 w-16 md:w-24 h-16 md:h-24 border-2 border-primary-300/30 rounded-full" />
              <div className="absolute -bottom-1 md:-bottom-2 -right-1 md:-right-2 w-12 md:w-20 h-12 md:h-20 border-2 border-primary-400/30 rounded-full" />
              <div className="absolute bottom-0 right-0 w-8 md:w-16 h-8 md:h-16 border-2 border-primary-500/30 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('Our Services', 'Нашите Услуги')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckIcon className="h-5 w-5 text-primary-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('Featured Projects', 'Избрани Проекти')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full flex items-center space-x-2">
                    {project.icon}
                    <span>{project.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <span className="text-primary-600 hover:text-primary-700 font-medium">
                    {t('View Details', 'Детайли')} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="btn btn-primary">
              {t('View All Projects', 'Виж Всички Проекти')}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('What Our Clients Say', 'Какво Казват Нашите Клиенти')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('About Us', 'За нас')}</h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('ELIN ENGINEERING Ltd. is an established company with experience in electrical installations, transformer stations, video surveillance, and fire alarm systems. We work with guaranteed quality and reliability.', 'ЕЛИНЖИНЕРИНГ ЕООД е утвърдена компания с опит в изграждането на електроинсталации, трафопостове, видеонаблюдение и пожароизвестяване. Работим с гарантирано качество и надеждност.')}
            </p>
            <Link to="/about" className="btn btn-primary">
              {t('Learn More', 'Научи повече')}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('Ready to Get Started?', 'Готови ли сте да започнем?')}</h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('Contact us today for a free consultation and quote.', 'Свържете се с нас днес за безплатна консултация и оферта.')}
          </p>
          <Link to="/contact" className="btn btn-primary">
            {t('Contact Us', 'Свържете се с нас')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 