import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import {
  BoltIcon,
  BuildingOfficeIcon,
  VideoCameraIcon,
  FireIcon,
  CalendarIcon,
  MapPinIcon,
  UserGroupIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  const projects = {
    '1': {
      title: t('Industrial Complex Electrical Installation', 'Електроинсталация на Промишлен Комплекс'),
      category: t('Electrical Construction', 'Електроизграждане'),
      description: t(
        'Complete electrical installation for a new industrial complex, including medium voltage systems and distribution networks.',
        'Цялостна електроинсталация за нов промишлен комплекс, включваща системи от средно напрежение и разпределителни мрежи.'
      ),
      fullDescription: t(
        'This project involved the complete electrical installation of a new industrial complex spanning over 10,000 square meters. The scope included medium voltage systems up to 20kV, distribution networks, and comprehensive control systems. Our team successfully implemented state-of-the-art electrical infrastructure that meets all safety standards and provides efficient power distribution throughout the facility.',
        'Този проект включваше цялостната електроинсталация на нов промишлен комплекс с площ над 10 000 квадратни метра. Обхватът включваше системи от средно напрежение до 20kV, разпределителни мрежи и цялостни контролни системи. Нашият екип успешно имплементира модерна електрическа инфраструктура, която отговаря на всички стандарти за безопасност и осигурява ефективно разпределение на енергията в съоръжението.'
      ),
      image: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: <BoltIcon className="h-6 w-6" />,
      location: t('Sofia Industrial Zone', 'Софийска Индустриална Зона'),
      date: '2024',
      team: t('Project Team of 15 Specialists', 'Екип от 15 Специалисти'),
      challenges: [
        t('Complex medium voltage system integration', 'Сложна интеграция на системи от средно напрежение'),
        t('Strict safety requirements', 'Строги изисквания за безопасност'),
        t('Tight project timeline', 'Стеснен срок на проекта'),
      ],
      solutions: [
        t('Advanced control systems implementation', 'Имплементация на напреднали контролни системи'),
        t('Comprehensive safety protocols', 'Цялостни протоколи за безопасност'),
        t('Efficient project management', 'Ефективно управление на проекта'),
      ],
      gallery: [
        'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      ],
    },
    '2': {
      title: t('Transformer Station Modernization', 'Модернизация на Трафопост'),
      category: t('Transformer Stations', 'Трафопостове'),
      description: t(
        'Modernization of an existing transformer station with new equipment and control systems.',
        'Модернизация на съществуващ трафопост с ново оборудване и контролни системи.'
      ),
      fullDescription: t(
        'Complete modernization of a transformer station, including installation of new transformers, control systems, and safety equipment. The project involved careful planning to ensure minimal disruption to power supply during the upgrade process.',
        'Пълна модернизация на трафопост, включваща инсталиране на нови трансформатори, контролни системи и оборудване за безопасност. Проектът включваше внимателно планиране, за да се осигури минимално прекъсване на електрозахранването по време на процеса на обновяване.'
      ),
      image: 'https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <BuildingOfficeIcon className="h-6 w-6" />,
      location: t('Industrial Zone, Sofia', 'Индустриална Зона, София'),
      date: t('January 2024', 'Януари 2024'),
      teamSize: t('8 specialists', '8 специалиста'),
      challenges: [
        t('Minimizing power supply disruption', 'Минимизиране на прекъсванията в електрозахранването'),
        t('Complex equipment integration', 'Сложна интеграция на оборудването'),
        t('Safety compliance requirements', 'Изисквания за съответствие с правилата за безопасност')
      ],
      solutions: [
        t('Phased implementation approach', 'Поетапен подход при изпълнението'),
        t('Advanced control systems', 'Разширени контролни системи'),
        t('Comprehensive safety protocols', 'Цялостни протоколи за безопасност')
      ],
      gallery: [
        'https://images.unsplash.com/photo-1581972327480-e3764d31e5e6?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1595856898575-9d187bd32fd6?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ]
    },
    '3': {
      title: t('Warehouse Security System', 'Система за Сигурност на Склад'),
      category: t('Video Surveillance', 'Видеонаблюдение'),
      description: t(
        'Installation of a comprehensive video surveillance system with mobile access for a large warehouse facility.',
        'Инсталиране на цялостна система за видеонаблюдение с достъп през телефон за голям складов комплекс.'
      ),
      fullDescription: t(
        'This project involved the installation of a state-of-the-art video surveillance system for a large warehouse complex. The system includes high-resolution cameras, motion detection, and mobile access capabilities. The implementation provides comprehensive security coverage while allowing remote monitoring and management.',
        'Този проект включваше инсталирането на модерна система за видеонаблюдение за голям складов комплекс. Системата включва камери с висока резолюция, детекция на движение и възможности за достъп през мобилни устройства. Имплементацията осигурява цялостно покритие за сигурност, като същевременно позволява отдалечен мониторинг и управление.'
      ),
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: <VideoCameraIcon className="h-6 w-6" />,
      location: t('Varna Logistics Center', 'Логистичен Център Варна'),
      date: '2023',
      team: t('Project Team of 6 Specialists', 'Екип от 6 Специалисти'),
      challenges: [
        t('Large area coverage requirements', 'Изисквания за покритие на голяма площ'),
        t('Integration with existing systems', 'Интеграция със съществуващите системи'),
        t('Mobile access security', 'Сигурност на мобилния достъп'),
      ],
      solutions: [
        t('Strategic camera placement', 'Стратегическо разположение на камерите'),
        t('Advanced system integration', 'Напреднала интеграция на системите'),
        t('Secure mobile access implementation', 'Сигурна имплементация на мобилен достъп'),
      ],
      gallery: [
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
        'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      ],
    },
    '4': {
      title: t('Fire Safety System Upgrade', 'Подобряване на Пожарната Сигнализация'),
      category: t('Fire Alarm Systems', 'Пожароизвестяване'),
      description: t(
        'Upgrade of fire detection and alarm systems in a commercial building with modern equipment.',
        'Подобряване на системите за пожарна сигнализация в търговска сграда с модерно оборудване.'
      ),
      fullDescription: t(
        'This project involved the complete upgrade of fire detection and alarm systems in a large commercial building. The new system includes advanced smoke detectors, heat sensors, and automated notification systems. The upgrade significantly improved the building\'s fire safety capabilities while ensuring compliance with the latest safety standards.',
        'Този проект включваше цялостното подобрение на системите за пожарна сигнализация в голяма търговска сграда. Новата система включва напреднали димни детектори, температурни сензори и автоматизирани системи за известяване. Подобрението значително увеличи възможностите за пожарна безопасност на сградата, като същевременно осигури съответствие с най-новите стандарти за безопасност.'
      ),
      image: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: <FireIcon className="h-6 w-6" />,
      location: t('Sofia Business Center', 'Бизнес Център София'),
      date: '2023',
      team: t('Project Team of 5 Specialists', 'Екип от 5 Специалисти'),
      challenges: [
        t('Minimizing building disruption', 'Минимизиране на смущенията в сградата'),
        t('Integration with building systems', 'Интеграция със системите на сградата'),
        t('Compliance with new standards', 'Съответствие с новите стандарти'),
      ],
      solutions: [
        t('Phased installation approach', 'Поетапен подход при инсталацията'),
        t('Advanced system integration', 'Напреднала интеграция на системите'),
        t('Comprehensive testing and certification', 'Цялостно тестване и сертификация'),
      ],
      gallery: [
        'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      ],
    },
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">{t('Project Not Found', 'Проектът не е намерен')}</h1>
          <p className="text-xl text-gray-600">
            {t('The requested project could not be found.', 'Заявеният проект не може да бъде намерен.')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Project Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              {project.icon}
              <span className="ml-2">{project.category}</span>
            </div>
            <span>•</span>
            <div className="flex items-center">
              <MapPinIcon className="h-4 w-4 mr-1" />
              <span>{project.location}</span>
            </div>
            <span>•</span>
            <div className="flex items-center">
              <CalendarIcon className="h-4 w-4 mr-1" />
              <span>{project.date}</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">{project.fullDescription}</p>
        </div>

        {/* Project Image */}
        <div className="mb-16">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Challenges */}
          <div>
            <h2 className="text-2xl font-bold mb-6">{t('Challenges', 'Предизвикателства')}</h2>
            <ul className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h2 className="text-2xl font-bold mb-6">{t('Solutions', 'Решения')}</h2>
            <ul className="space-y-4">
              {project.solutions.map((solution, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Project Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t('Project Team', 'Екип по Проекта')}</h2>
          <div className="flex items-center space-x-2">
            <UserGroupIcon className="h-6 w-6 text-primary-600" />
            <span>{project.team}</span>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t('Project Gallery', 'Галерия на Проекта')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">{t('Have a Similar Project?', 'Имате Подобен Проект?')}</h2>
          <p className="text-xl text-gray-600 mb-8">
            {t(
              'Contact us to discuss how we can help with your project.',
              'Свържете се с нас, за да обсъдим как можем да помогнем с вашия проект.'
            )}
          </p>
          <a
            href="/contact"
            className="btn btn-primary"
          >
            {t('Get in Touch', 'Свържете се с нас')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails; 