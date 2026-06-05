'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Award, Compass, Shield, Users, CheckCircle, ArrowRight, UserCheck, Landmark } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Award className="w-6 h-6 text-[#C4A47C]" />,
      title: 'Инженерное совершенство',
      desc: 'Мы используем высшие сертифицированные конструкционные сплавы, монолитный каркас с демпферными сейсмоопорами и бетон класса М500. Контроль осуществляют независимые европейские лаборатории.',
    },
    {
      icon: <Shield className="w-6 h-6 text-[#C4A47C]" />,
      title: 'Безусловная честность',
      desc: 'Предоставляем оригинальную кадастровую и регуляторную документацию в день первого обращения. Никаких юридических уловок или скрытых эксплуатационных надбавок.',
    },
    {
      icon: <Compass className="w-6 h-6 text-[#C4A47C]" />,
      title: 'Президентский сервис',
      desc: 'Каждый житель получает полную подписку на услуги нашей премиальной консьерж-службы и клининг-инженеров PMG. Свежая выпечка в лобби, идеальные газоны и моментальный консьерж.',
    },
    {
      icon: <Landmark className="w-6 h-6 text-[#C4A47C]" />,
      title: 'Архитектурный патриотизм',
      desc: 'Внедряем современные европейские тренды, но с уважением к богатому национальному наследию. Мы гармонично вплетаем узоры самаркандского травертина и ташкентского гранита в фасады.',
    },
  ];

  const milestones = [
    {
      year: '2013',
      title: 'Основание группы и первый прорыв',
      desc: 'Регистрация бренда EVRO PLAZA в Ташкенте. Закладка фундамента первого клубного комплекса премиум-класса. Собрана команда архитекторов-диссидентов с европейским образованием.',
    },
    {
      year: '2017',
      title: 'Формирование собственного пула материалов',
      desc: 'Запуск независимого логистического хаба для импорта долговечных отделочных материалов из Италии и Германии. С этого года все наши комплексы оснащаются окнами Schüco.',
    },
    {
      year: '2020',
      title: 'Объекты Deluxe и расширение географии',
      desc: 'Загрузка портфолио знаковыми объектами в Самарканде. Сдача Riverside Residence. Компания впервые получает статус "Надежного федерального застройщика высшей лиги".',
    },
    {
      year: '2024',
      title: 'Управление недвижимостью уровня 5*',
      desc: 'Создание дочернего оператора PMG Services для полноценного отельного сопровождения сданных комплексов. Большинство наших резидентов оценивают сервис на 9.9 из 10.',
    },
    {
      year: '2026',
      title: 'Взгляд в будущее и цифровое моделирование',
      desc: 'Сегодня в стадии строительства находится 5 флагманских объектов суммарной площадью 320,000 квадратных метров, проектируемых по технологиям BIM BIM-моделирования.',
    },
  ];

  return (
    <div className="py-12">
      {/* ================= HERO HEADER ================= */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80"
            alt="Real estate board members building concept"
            fill
            className="object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/60 to-[#121214]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C4A47C] font-mono">О компании / EVRO PLAZA GROUP</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading uppercase text-white tracking-tight">
            История Совершенства
          </h1>
          <p className="text-gray-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
            Познакомьтесь с философией девелопера, строящего надежное будущее и развивающего эстетику городской среды в Узбекистане.
          </p>
        </div>
      </section>

      {/* ================= FOUNDER BLOCK ================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Founders word */}
          <div className="space-y-6 order-2 lg:order-1">
            <span className="text-[#C4A47C] text-xs font-mono uppercase tracking-widest block">Обращение генерального директора</span>
            <blockquote className="text-xl sm:text-2xl font-light italic text-gray-200 leading-snug font-sans">
              «Мы не просто продаем прямоугольные бетонные коробки. Наша команда создает эстетические архитектурные ориентиры, которые останутся вашим наследникам через сотню лет. Качественный девелопмент — это искусство честности перед покупателем.»
            </blockquote>
            
            <div className="space-y-1">
              <h4 className="text-white font-bold text-base">Рустам Эргашев</h4>
              <p className="text-gray-400 text-xs font-light">Основатель, мажоритарный акционер EVRO PLAZA GROUP</p>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-4 text-gray-400 text-sm font-light leading-relaxed">
              <p>
                Когда мы начинали в 2013 году, узбекский рынок недвижимости находился на этапе быстрого количественного наполнения. Архитектурная гармония часто приносилась в жертву экономии ресурсов. Мы решили сломать этот стереотип.
              </p>
              <p>
                По сей день каждый сданный объект находится под контролем нашего гарантийного ведомства. Компания является замкнутым циклом: от исследований локаций, выкупа градостроительных долей, монолитного замеса до уборки газонов.
              </p>
            </div>
          </div>

          {/* Large elite photo portrait style representation */}
          <div className="relative h-[550px] rounded-sm overflow-hidden border border-white/10 shadow-2xl order-1 lg:order-2">
            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
              alt="CEO Rustam Ergashev Profile Portrait"
              fill
              className="object-cover opacity-90 brightness-95"
              referrerPolicy="no-referrer"
            />
            {/* Embedded badge details */}
            <div className="absolute bottom-6 left-6 bg-black/90 border border-[#C4A47C]/30 p-4 rounded-sm">
              <div className="flex items-center space-x-3 text-xs tracking-wider">
                <UserCheck className="w-5 h-5 text-[#C4A47C]" />
                <span className="text-white font-mono font-medium">Кредо: Бескомпромиссная честность</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY / CORE VALUES ================= */}
      <section className="py-24 bg-[#161619] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-[#C4A47C] text-xs font-mono uppercase tracking-widest">Принципы компании</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white uppercase tracking-tight">Наши Ценности</h2>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
              Эти четыре правила лежат в основе каждого кирпича, замеса и подписанного инвестиционного договора.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {values.map((val, idx) => (
              <div key={idx} className="flex items-start space-x-6 bg-white/[0.01] border border-white/5 p-8 rounded-sm hover:border-white/10 transition-all">
                <div className="p-3 bg-white/5 border border-white/10 rounded-sm shrink-0">
                  {val.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-white font-bold font-heading text-lg tracking-tight uppercase">{val.title}</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DETAILED CHRONOLOGICAL TIMELINE ================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-20">
          <span className="text-[#C4A47C] text-xs font-mono uppercase tracking-widest">Хронология великих побед</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white uppercase tracking-tight">Путь к Вершине</h2>
          <p className="text-gray-400 text-xs sm:text-sm font-light">
            Как небольшой локальный девелоперский стартап вырос в признанный ориентир премиального рынка Узбекистана.
          </p>
        </div>

        {/* Chronological central vertical timeline layout */}
        <div className="relative border-l border-white/10 max-w-3xl mx-auto pl-8 sm:pl-12 space-y-12">
          {milestones.map((milestone, idx) => (
            <div key={idx} className="relative group">
              {/* Central connecting circle ball */}
              <div className="absolute -left-[45px] sm:-left-[61px] top-1.5 w-6 h-6 rounded-full bg-[#121214] border-2 border-[#C4A47C] group-hover:bg-[#C4A47C] transition-all flex items-center justify-center text-[10px] text-white" />
              
              <div className="space-y-2">
                <div className="text-2xl font-bold font-mono text-[#C4A47C]">{milestone.year}</div>
                <h4 className="text-white font-sans text-lg font-bold uppercase tracking-tight group-hover:text-[#C4A47C] transition-colors">
                  {milestone.title}
                </h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CALL TO ACTION - VISIT PROJECTS ================= */}
      <section className="py-16 bg-gradient-to-r from-neutral-900 to-black/80 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-sm overflow-hidden relative shadow-xl border border-white/5">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80')` }} />
        <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white uppercase tracking-tight">
            Ознакомьтесь с нашими текущими стройками
          </h3>
          <p className="text-gray-400 text-sm font-light max-w-xl mx-auto leading-relaxed">
            Каждый наш проект уникален. Перейдите в каталог, чтобы сравнить характеристики, рассмотреть поэтажные карты и подобрать лучшее предложение.
          </p>
          <div className="pt-4">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 bg-[#C4A47C] text-black font-semibold uppercase px-8 py-4 text-xs tracking-wider hover:bg-neutral-100 transition-all rounded-sm cursor-pointer"
            >
              <span>Посмотреть проекты</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
