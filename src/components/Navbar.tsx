import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'bg' ? 'en' : 'bg');
  };

  const navItems = [
    { path: '/', label: t('Home', 'Начало') },
    { path: '/about', label: t('About', 'За нас') },
    { path: '/services', label: t('Services', 'Услуги') },
    { path: '/projects', label: t('Projects', 'Проекти') },
    { path: '/blog', label: t('Blog', 'Блог') },
    { path: '/contact', label: t('Contact', 'Контакти') },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">
              {language === 'bg' ? 'ЕЛИНЖЕНЕРИНГ ЕООД' : 'EIENGINEERING LTD'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-lg bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors"
            >
              {language === 'bg' ? 'EN' : 'БГ'}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={toggleLanguage}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
              >
                {language === 'bg' ? 'EN' : 'БГ'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 