import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import {
  BoltIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';

const Blog: React.FC = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: t('Medium Voltage Safety Standards', 'Стандарти за Безопасност при Средно Напрежение'),
      excerpt: t(
        'Understanding the latest safety standards and regulations for medium voltage electrical installations.',
        'Разбиране на най-новите стандарти и правила за безопасност при електроинсталации от средно напрежение.'
      ),
      category: t('Safety', 'Безопасност'),
      author: t('Technical Team', 'Технически Екип'),
      date: '2024-03-15',
      icon: <ShieldCheckIcon className="h-6 w-6" />,
    },
    {
      id: 2,
      title: t('Transformer Station Maintenance Guide', 'Ръководство за Поддръжка на Трафопостове'),
      excerpt: t(
        'Essential maintenance practices for transformer stations to ensure optimal performance and longevity.',
        'Основни практики за поддръжка на трафопостове за осигуряване на оптимална производителност и дълготрайност.'
      ),
      category: t('Maintenance', 'Поддръжка'),
      author: t('Technical Team', 'Технически Екип'),
      date: '2024-03-10',
      icon: <WrenchScrewdriverIcon className="h-6 w-6" />,
    },
    {
      id: 3,
      title: t('Industrial Electrical Systems', 'Индустриални Електрически Системи'),
      excerpt: t(
        'Best practices for designing and implementing electrical systems in industrial facilities.',
        'Добри практики за проектиране и изпълнение на електрически системи в промишлени съоръжения.'
      ),
      category: t('Industrial', 'Индустриален'),
      author: t('Technical Team', 'Технически Екип'),
      date: '2024-03-05',
      icon: <BuildingOfficeIcon className="h-6 w-6" />,
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">{t('Blog', 'Блог')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t(
              'Stay updated with the latest news, tips, and insights from the electrical industry.',
              'Бъдете информирани с най-новите новини, съвети и прозрения от електротехническата индустрия.'
            )}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    {post.icon}
                    <span className="ml-2">{post.category}</span>
                  </div>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.author}</span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    {t('Read More', 'Прочетете Повече')} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-primary-50 rounded-lg p-8 mb-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{t('Stay Updated', 'Бъдете Информирани')}</h2>
            <p className="text-gray-600 mb-6">
              {t(
                'Subscribe to our newsletter for the latest updates and insights.',
                'Абонирайте се за нашия бюлетин за най-новите актуализации и прозрения.'
              )}
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('Enter your email', 'Въведете вашия имейл')}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <button
                type="submit"
                className="btn btn-primary whitespace-nowrap"
              >
                {t('Subscribe', 'Абониране')}
              </button>
            </form>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">{t('Need Professional Help?', 'Нуждаете се от Професионална Помощ?')}</h2>
          <p className="text-xl text-gray-600 mb-8">
            {t(
              'Our team of experts is ready to assist you with your electrical needs.',
              'Нашият екип от експерти е готов да ви помогне с вашите електротехнически нужди.'
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

export default Blog; 