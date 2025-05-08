import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import {
  BuildingOfficeIcon,
  BoltIcon,
  VideoCameraIcon,
  FireIcon,
} from '@heroicons/react/24/outline';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t('Industrial Complex Electrical Installation', 'Електроинсталация на Промишлен Комплекс'),
      category: t('Electrical Construction', 'Електроизграждане'),
      description: t(
        'Complete electrical installation for a new industrial complex, including medium voltage systems and distribution networks.',
        'Цялостна електроинсталация за нов промишлен комплекс, включваща системи от средно напрежение и разпределителни мрежи.'
      ),
      image: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: <BoltIcon className="h-6 w-6" />,
    },
    {
      id: 2,
      title: t('Transformer Station Modernization', 'Модернизация на Трафопост'),
      category: t('Transformer Stations', 'Трафопостове'),
      description: t(
        'Modernization of an existing transformer station with new equipment and control systems.',
        'Модернизация на съществуващ трафопост с ново оборудване и контролни системи.'
      ),
      image: 'https://images.unsplash.com/photo-1581972327480-e3764d31e5e6?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <BuildingOfficeIcon className="h-6 w-6" />,
    },
    {
      id: 3,
      title: t('Warehouse Security System', 'Система за Сигурност на Склад'),
      category: t('Video Surveillance', 'Видеонаблюдение'),
      description: t(
        'Installation of a comprehensive video surveillance system with mobile access for a large warehouse facility.',
        'Инсталиране на цялостна система за видеонаблюдение с достъп през телефон за голям складов комплекс.'
      ),
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: <VideoCameraIcon className="h-6 w-6" />,
    },
    {
      id: 4,
      title: t('Fire Safety System Upgrade', 'Подобряване на Пожарната Сигнализация'),
      category: t('Fire Alarm Systems', 'Пожароизвестяване'),
      description: t(
        'Upgrade of fire detection and alarm systems in a commercial building with modern equipment.',
        'Подобряване на системите за пожарна сигнализация в търговска сграда с модерно оборудване.'
      ),
      image: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: <FireIcon className="h-6 w-6" />,
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">{t('Our Projects', 'Нашите Проекти')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t(
              'Explore our portfolio of successful electrical projects, from industrial installations to security systems.',
              'Разгледайте нашата галерия от успешни електротехнически проекти, от промишлени инсталации до системи за сигурност.'
            )}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {projects.map((project) => (
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

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">{t('Have a Project in Mind?', 'Имате Проект?')}</h2>
          <p className="text-xl text-gray-600 mb-8">
            {t(
              'Contact us to discuss your electrical project requirements.',
              'Свържете се с нас, за да обсъдим изискванията за вашия електротехнически проект.'
            )}
          </p>
          <Link to="/contact" className="btn btn-primary">
            {t('Get in Touch', 'Свържете се с нас')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects; 