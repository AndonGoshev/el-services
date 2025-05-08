import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import {
  BoltIcon,
  BuildingOfficeIcon,
  VideoCameraIcon,
  FireIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const Services: React.FC = () => {
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
        t('Industrial facilities', 'Промишлени помещения'),
        t('Warehouses and storage', 'Халета и складове'),
        t('Commercial spaces', 'Търговски помещения'),
      ],
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
        t('Documentation', 'Документация'),
        t('Safety compliance', 'Спазване на стандартите'),
        t('Maintenance', 'Поддръжка'),
      ],
    },
    {
      icon: <VideoCameraIcon className="h-12 w-12 text-primary-600" />,
      title: t('Video Surveillance', 'Видеонаблюдение'),
      description: t(
        'Installation of complete video surveillance systems with mobile access.',
        'Инсталиране на цялостни системи за видеонаблюдение с достъп през телефон.'
      ),
      features: [
        t('Full installation', 'Пълен монтаж'),
        t('Indoor/outdoor cameras', 'Вътрешни/външни камери'),
        t('Mobile access', 'Достъп през телефон'),
        t('Remote monitoring', 'Отдалечен контрол'),
        t('System integration', 'Интеграция на системи'),
        t('Technical support', 'Техническа поддръжка'),
      ],
    },
    {
      icon: <FireIcon className="h-12 w-12 text-primary-600" />,
      title: t('Fire Alarm Systems', 'Пожароизвестяване'),
      description: t(
        'Design and installation of fire detection and alarm systems.',
        'Проектиране и монтаж на системи за пожарна сигнализация.'
      ),
      features: [
        t('Design and installation', 'Проектиране и монтаж'),
        t('Detectors', 'Детектори'),
        t('Alarm and notification', 'Сигнализация и известяване'),
        t('System integration', 'Интеграция на системи'),
        t('Regular maintenance', 'Редовна поддръжка'),
        t('Emergency support', 'Спешна поддръжка'),
      ],
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
        t('Performance optimization', 'Оптимизация на работата'),
        t('Safety inspections', 'Проверки за безопасност'),
        t('Technical support', 'Техническа поддръжка'),
      ],
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">{t('Our Services', 'Нашите Услуги')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t(
              'Specialized electrical services – from medium voltage to 20kV. Construction of transformer stations, electrical installations in warehouses, storage facilities, and production premises.',
              'Специализирани електроуслуги – от средно напрежение до 20kV. Изграждане на трафопостове, електроинсталации в халета, складове и производствени помещения.'
            )}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{service.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <ShieldCheckIcon className="h-5 w-5 text-primary-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-primary-50 rounded-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">{t('Why Choose Us?', 'Защо да Изберете Нас?')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <ClockIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('Quality Guaranteed', 'Гарантирано Качество')}</h3>
              <p className="text-gray-600">
                {t('We work with guaranteed quality and reliability', 'Работим с гарантирано качество и надеждност')}
              </p>
            </div>
            <div className="text-center">
              <ShieldCheckIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('Licensed & Certified', 'Лицензирани & Сертифицирани')}</h3>
              <p className="text-gray-600">
                {t('Licensed and certified specialists for all services', 'Лицензирани и сертифицирани специалисти за всички услуги')}
              </p>
            </div>
            <div className="text-center">
              <WrenchScrewdriverIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('Professional Team', 'Професионален Екип')}</h3>
              <p className="text-gray-600">
                {t('Experienced professionals with modern equipment', 'Опитни професионалисти с модерно оборудване')}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">{t('Ready to Get Started?', 'Готови ли сте да започнем?')}</h2>
          <p className="text-xl text-gray-600 mb-8">
            {t(
              'Contact us today for a free consultation and quote.',
              'Свържете се с нас днес за безплатна консултация и оферта.'
            )}
          </p>
          <Link to="/contact" className="btn btn-primary">
            {t('Contact Us', 'Свържете се с нас')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services; 