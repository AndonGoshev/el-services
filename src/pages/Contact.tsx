import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: <MapPinIcon className="h-6 w-6 text-primary-600" />,
      title: t('Address', 'Адрес'),
      content: '123 Main Street, Sofia, Bulgaria',
    },
    {
      icon: <PhoneIcon className="h-6 w-6 text-primary-600" />,
      title: t('Phone', 'Телефон'),
      content: '+359 888 123 456',
    },
    {
      icon: <EnvelopeIcon className="h-6 w-6 text-primary-600" />,
      title: t('Email', 'Имейл'),
      content: 'info@electrical-services.bg',
    },
    {
      icon: <ClockIcon className="h-6 w-6 text-primary-600" />,
      title: t('Working Hours', 'Работно Време'),
      content: t('Mon-Fri: 8:00 - 18:00', 'Пон-Пет: 8:00 - 18:00'),
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">{t('Contact Us', 'Свържете се с Нас')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t(
              'Get in touch with us for any questions or to schedule a service.',
              'Свържете се с нас за въпроси или за планиране на услуга.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">{t('Send us a Message', 'Изпратете ни Съобщение')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('Name', 'Име')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('Email', 'Имейл')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('Phone', 'Телефон')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('Service Type', 'Тип Услуга')}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">{t('Select a service', 'Изберете услуга')}</option>
                  <option value="residential">{t('Residential', 'Жилищна')}</option>
                  <option value="commercial">{t('Commercial', 'Търговска')}</option>
                  <option value="industrial">{t('Industrial', 'Индустриална')}</option>
                  <option value="maintenance">{t('Maintenance', 'Поддръжка')}</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('Message', 'Съобщение')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors"
              >
                {t('Send Message', 'Изпрати Съобщение')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">{t('Contact Information', 'Контактна Информация')}</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">{t('Location', 'Локация')}</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.356464442064!2d23.3219!3d42.6977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQxJzUxLjciTiAyM8KwMTknMTguOCJF!5e0!3m2!1sen!2sbg!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 