import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircleIcon, BoltIcon, BuildingOfficeIcon, VideoCameraIcon, FireIcon } from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const { t } = useLanguage();

  const expertise = [
    {
      icon: <BoltIcon className="h-8 w-8 text-primary-600" />,
      title: t('Electrical Construction', 'Електроизграждане'),
      description: t(
        'Complete electrical installations for industrial and commercial facilities, from medium voltage to 20kV.',
        'Цялостни електроинсталации за промишлени и търговски обекти, от средно напрежение до 20kV.'
      )
    },
    {
      icon: <BuildingOfficeIcon className="h-8 w-8 text-primary-600" />,
      title: t('Transformer Stations', 'Трафопостове'),
      description: t(
        'Design and construction of transformer stations up to 20kV.',
        'Проектиране и изграждане на трафопостове до 20kV.'
      )
    },
    {
      icon: <VideoCameraIcon className="h-8 w-8 text-primary-600" />,
      title: t('Video Surveillance', 'Видеонаблюдение'),
      description: t(
        'Installation of complete video surveillance systems with mobile access.',
        'Инсталиране на цялостни системи за видеонаблюдение с достъп през телефон.'
      )
    },
    {
      icon: <FireIcon className="h-8 w-8 text-primary-600" />,
      title: t('Fire Alarm Systems', 'Пожароизвестяване'),
      description: t(
        'Design and installation of fire detection and alarm systems.',
        'Проектиране и монтаж на системи за пожарна сигнализация.'
      )
    }
  ];

  const features = [
    t('Licensed and certified specialists', 'Лицензирани и сертифицирани специалисти'),
    t('Quality guaranteed work', 'Гарантирано качество на работата'),
    t('Modern equipment and technology', 'Модерно оборудване и технологии'),
    t('Safety standards compliance', 'Спазване на стандартите за безопасност'),
    t('Professional team', 'Професионален екип'),
    t('Comprehensive solutions', 'Цялостни решения'),
  ];

  const team = [
    {
      name: 'Ivan Petrov',
      role: t('Lead Electrician', 'Главен Електротехник'),
      experience: t('15 years', '15 години'),
    },
    {
      name: 'Maria Ivanova',
      role: t('Project Manager', 'Мениджър на Проекти'),
      experience: t('10 years', '10 години'),
    },
    {
      name: 'Georgi Dimitrov',
      role: t('Technical Director', 'Технически Директор'),
      experience: t('20 years', '20 години'),
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">{t('About ELIN ENGINEERING', 'За ЕЛИНЖИНЕРИНГ')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t(
              'ELIN ENGINEERING Ltd. is an established company with experience in electrical installations, transformer stations, video surveillance, and fire alarm systems. We work with guaranteed quality and reliability.',
              'ЕЛИНЖИНЕРИНГ ЕООД е утвърдена компания с опит в изграждането на електроинсталации, трафопостове, видеонаблюдение и пожароизвестяване. Работим с гарантирано качество и надеждност.'
            )}
          </p>
        </div>

        {/* Expertise Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">{t('Our Expertise', 'Нашата Експертиза')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircleIcon className="h-6 w-6 text-primary-600 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">{t('Our Team', 'Нашият Екип')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{t('Experience', 'Опит')}: {member.experience}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{t('Our Mission', 'Нашата Мисия')}</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            {t(
              'To provide comprehensive electrical solutions and security systems for industrial and commercial facilities, ensuring the highest standards of quality, safety, and reliability. We are committed to delivering innovative solutions that meet our clients\' needs and exceed their expectations.',
              'Да предоставяме цялостни електрически решения и системи за сигурност за промишлени и търговски обекти, гарантирайки най-високите стандарти за качество, безопасност и надеждност. Ангажирани сме да предоставяме иновативни решения, които отговарят на нуждите на нашите клиенти и надминават очакванията им.'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 