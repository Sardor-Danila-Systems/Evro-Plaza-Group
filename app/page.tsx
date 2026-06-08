'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  MapPin,
  CheckCircle,
  ChevronRight,
  Star
} from 'lucide-react';
import { projectsData } from '@/lib/projectsData';

export default function Home() {
  const [stats, setStats] = useState({ years: 0, projects: 0, families: 0, area: 0 });
  const [activeTesti, setActiveTesti] = useState(0);
  const [activeCategory, setActiveCategory] = useState<'all' | 'residential' | 'commercial'>('all');

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setStats({
        years: Math.min(Math.round((12 / steps) * step), 12),
        projects: Math.min(Math.round((28 / steps) * step), 28),
        families: Math.min(Math.round((4200 / steps) * step), 4200),
        area: Math.min(Math.round((320 / steps) * step), 320),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      text: '«Качество отделки и сервис в EVRO PLAZA Residence превзошли наши ожидания. Это новый уровень жилья в Ташкенте. Продумано до мелочей: от бесшумных лифтов до ландшафтного сада вне доступа автотранспорта.»',
      author: 'Дильшод Рахимов',
      role: 'Резидент EVRO PLAZA Residence',
      initials: 'ДР',
      rating: 5,
    },
    {
      text: '«Прозрачная сделка, четкие договоры и внимание к деталям на каждом этапе. Как инвестор, я рекомендую EVRO PLAZA GROUP без грамма сомнений. Ликвидность объекта выросла на 35% с момента заливки фундамента.»',
      author: 'Карина Юсупова',
      role: 'Инвестор, ресторатор',
      initials: 'КЮ',
      rating: 5,
    },
    {
      text: '«Локация, архитектурные решения и управляющая компания — все на уровне ведущих девелоперов мирового класса. Каждое утро радует вид из панорамного остекления. Обслуживание работает безукоризненно.»',
      author: 'Тимур Алиев',
      role: 'Владелец технологического холдинга',
      initials: 'ТА',
      rating: 5,
    },
  ];

  const benefits = [
    {
      idx: '01',
      title: 'Архитектура высокого стиля',
      desc: 'Сотрудничаем с ведущими международными бюро. Каждый силуэт зданий — это баланс пропорций, света и премиальных долговечных материалов.',
      category: 'дизайн',
    },
    {
      idx: '02',
      title: 'Сейсмостойкость 9+ баллов',
      desc: 'Высокопрочный монолитный каркас, глубокое свайное поле и сертифицированные марки бетона. Ваша стопроцентная безопасность.',
      category: 'инженерия',
    },
    {
      idx: '03',
      title: 'Абсолютная юридическая чистота',
      desc: 'Полный пакет документов на владение, никаких скрытых комиссий, прозрачные условия беспроцентной рассрочки и гибкие варианты оплат.',
      category: 'сделки',
    },
    {
      idx: '04',
      title: 'Престижные локации',
      desc: 'Строим только в лучших развитых кварталах с панорамными видами, удобными транспортными узлами и высокой зеленой плотностью.',
      category: 'география',
    },
    {
      idx: '05',
      title: 'Круглосуточный сервис 360°',
      desc: 'Собственная профессиональная управляющая компания PMG. Вопросы инженерии, порядка, клининга и ухода за садом решаются за пару кликов.',
      category: 'комфорт',
    },
    {
      idx: '06',
      title: 'Доверие поколений',
      desc: 'Собранный годами опыт позволяет гарантировать долговечность зданий. Инвестиционный потенциал наших квартир растет из поколения в поколение.',
      category: 'инвестиции',
    },
  ];

  const galleryImages = [
    { src: '/gallery1.jpg', label: 'Узорное остекление' },
    { src: '/gallery2.jpg', label: 'Премиум Гостиная' },
    { src: '/gallery7.jpg', label: 'Мраморный Лобби-Холл' },
    { src: '/gallery4.jpg', label: 'Эстетика террас вечером' },
    { src: '/gallery5.jpg', label: 'Стильный фасад виллы' },
    { src: '/gallery11.jpg', label: 'Архитектурный дворик' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.type === activeCategory);

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-grid-glow pointer-events-none" />

      <section id="homepage-hero" className="relative min-h-[95vh] flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1628744504163-f273b4d45598?auto=format&fit=crop&w=2000&q=90"
            alt="Premium Architectural Exterior"
            fill
            priority
            className="object-cover hero-ken-burns"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/60 to-[#121214]/80" />
        </div>

        <div className="flex-1 flex items-center justify-center relative z-10 px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <div className="max-w-7xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-medium tracking-widest text-[#C4A47C] uppercase"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Премиальный девелопмент в Узбекистане</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight uppercase font-heading max-w-5xl mx-auto"
            >
              Создаём ориентиры <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-[#C4A47C]">Будущего Узбекистана</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed antialiased"
            >
              EVRO PLAZA GROUP — Синоним монументального изящества и современных семейных ценностей. Объединяем мировые стандарты строительства с лучшими локациями нашей страны.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link
                href="/projects"
                className="w-full sm:w-auto bg-[#C4A47C] text-black font-semibold uppercase px-8 py-4 text-xs tracking-wider hover:bg-neutral-100 hover:shadow-lg transition-all duration-300 rounded-sm flex items-center justify-center space-x-2"
              >
                <span>Смотреть проекты</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto border border-white/20 hover:border-[#C4A47C] text-white font-medium px-8 py-4 text-xs tracking-wider hover:bg-white/5 transition-all duration-300 rounded-sm flex items-center justify-center"
              >
                Узнать о компании
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 w-full bg-[#121214]/90 border-t border-white/5 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="space-y-1">
                <div className="text-2xl sm:text-4xl font-bold font-heading text-white">
                  {stats.years} <span className="text-[#C4A47C] text-lg font-light">лет</span>
                </div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-light">опыта на рынке</p>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-4xl font-bold font-heading text-white">
                  {stats.projects} <span className="text-[#C4A47C] text-lg font-light">+</span>
                </div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-light">реализованных проектов</p>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-4xl font-bold font-heading text-white">
                  {stats.families.toLocaleString()} <span className="text-[#C4A47C] text-lg font-light">+</span>
                </div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-light">счастливых резидентов</p>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-4xl font-bold font-heading text-white">
                  {stats.area} <span className="text-[#C4A47C] text-sm font-light">тыс. м²</span>
                </div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-light">жилого фонда построено</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-teaser" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[480px] sm:h-[550px] w-full rounded-sm overflow-hidden group shadow-2xl border border-white/5"
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
              alt="Elite Real Estate Architecture details"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-85"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-[#161619]/95 border border-white/10 p-6 rounded-sm flex items-center space-x-4 backdrop-blur-sm shadow-xl">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C4A47C] to-amber-700 flex items-center justify-center text-black font-semibold text-sm shadow-md">
                РЭ
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Рустам Эргашев</h4>
                <p className="text-[#C4A47C] text-xs font-light">Основатель и генеральный директор EVRO PLAZA GROUP</p>
              </div>
            </div>
            <div className="absolute top-6 left-6 bg-[#C4A47C] text-black text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm shadow">
              Основана в 2013
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#C4A47C] font-semibold flex items-center space-x-2">
                <span className="w-8 h-[1px] bg-[#C4A47C]" />
                <span>О компании</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white uppercase tracking-tight">
                Девелопмент, где архитектура встречает надёжность
              </h2>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed font-light">
              С 2013 года EVRO PLAZA GROUP формирует новые девелоперские горизонты в Узбекистане. Наша главная цель — проектирование знаковых зданий, сочетающих комфортную внутреннюю философию, утонченную внешнюю форму и безупречное качество инженерной сборки.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Мы верим, что дом — это фамильная крепость. Поэтому мы самостоятельно производим контроль всех фаз строительства, от калибровки грунта до финального узора лобби-подсветок. Для создания проектов привлекаются передовые европейские архитекторы и надзорные инженерные лаборатории.
            </p>

            {/* Quick stats points */}
            <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-mono">
              <div className="flex items-center space-x-2 bg-white/5 border border-white/5 p-3 rounded">
                <CheckCircle className="w-4 h-4 text-[#C4A47C] shrink-0" />
                <span className="text-gray-300">Собственная УК (PMG)</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 border border-white/5 p-3 rounded">
                <CheckCircle className="w-4 h-4 text-[#C4A47C] shrink-0" />
                <span className="text-gray-300">Беспроцентная рассрочка</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 border border-white/5 p-3 rounded">
                <CheckCircle className="w-4 h-4 text-[#C4A47C] shrink-0" />
                <span className="text-gray-300">Проверенные поставщики</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 border border-white/5 p-3 rounded">
                <CheckCircle className="w-4 h-4 text-[#C4A47C] shrink-0" />
                <span className="text-gray-300">Материалы класса Люкс</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-[#C4A47C] hover:text-white text-xs font-bold tracking-widest uppercase"
              >
                <span>Подробнее о нашей истории</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="homepage-projects" className="py-24 bg-[#161619] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#C4A47C] font-semibold flex items-center space-x-2">
                <span className="w-8 h-[1px] bg-[#C4A47C]" />
                <span>Наши проекты</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white uppercase tracking-tight">
                Архитектурные шедевры
              </h2>
            </div>

            <div className="flex items-center space-x-1.5 mt-6 md:mt-0 bg-black/40 border border-white/5 p-1 rounded">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-sm transition-all focus:outline-none cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-[#C4A47C] text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Все
              </button>
              <button
                onClick={() => setActiveCategory('residential')}
                className={`px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-sm transition-all focus:outline-none cursor-pointer ${
                  activeCategory === 'residential'
                    ? 'bg-[#C4A47C] text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Жилые
              </button>
              <button
                onClick={() => setActiveCategory('commercial')}
                className={`px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-sm transition-all focus:outline-none cursor-pointer ${
                  activeCategory === 'commercial'
                    ? 'bg-[#C4A47C] text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Офисы
              </button>
            </div>
          </div>

          {/* Cards gallery Grid structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const isFeatured = index === 0;
                return (
                  <motion.article
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className={`bg-[#1e1e21] border border-white/5 rounded-sm overflow-hidden group flex flex-col hover:border-white/10 transition-all ${
                      isFeatured && activeCategory === 'all' ? 'md:col-span-2' : ''
                    }`}
                  >
                    <Link href={`/projects/${project.id}`} className="relative h-[280px] sm:h-[320px] w-full overflow-hidden block">
                      <Image
                        src={project.heroImage}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-750 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-90" />
                      
                      <span className="absolute top-4 left-4 bg-black/75 backdrop-blur-sm border border-white/10 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-sm">
                        {project.statusLabel}
                      </span>

                      <span className="absolute bottom-4 left-4 text-xs font-light text-gray-300 flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5 text-[#C4A47C]" />
                        <span>{project.location}</span>
                      </span>
                    </Link>

                    <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <span className="text-[10px] tracking-widest font-mono text-gray-500 font-semibold uppercase">
                          {project.typeLabel}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight uppercase group-hover:text-[#C4A47C] transition-colors">
                          <Link href={`/projects/${project.id}`}>{project.name}</Link>
                        </h3>
                        <p className="text-gray-400 text-sm font-light leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <div className="text-xs space-y-0.5">
                          <span className="text-gray-500 block">Основные параметры</span>
                          <span className="text-gray-100 font-semibold">{project.specs[0]?.label}: {project.specs[0]?.value}</span>
                        </div>
                        <Link
                          href={`/projects/${project.id}`}
                          className="w-10 h-10 rounded-full border border-white/10 hover:border-[#C4A47C] text-white hover:text-black hover:bg-[#C4A47C] transition-all flex items-center justify-center cursor-pointer"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 bg-white/5 hover:bg-[#C4A47C] border border-white/10 hover:border-[#C4A47C] text-white hover:text-black px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-all duration-300 rounded-sm cursor-pointer"
            >
              <span>Смотреть абсолютно все объекты</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-[#C4A47C] font-semibold">Наши догмы</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white uppercase tracking-tight">
            Почему нам доверяют
          </h2>
          <p className="text-gray-400 text-sm font-light">
            Инвестиция в жилую или коммерческую недвижимость от EVRO PLAZA GROUP — это защита ваших интересов, долговечность и безупречный комфорт.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="bg-white/[0.02] border border-white/5 p-8 sm:p-10 rounded-sm relative group hover:bg-white/[0.04] transition-colors"
            >
              {/* Top indicators */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold text-[#C4A47C]/40 group-hover:text-[#C4A47C] transition-colors font-mono">
                  {benefit.idx}
                </span>
                <span className="text-[9px] uppercase tracking-widest font-mono text-gray-500 bg-white/5 px-2.5 py-1 rounded">
                  {benefit.category}
                </span>
              </div>

              <h3 className="text-lg font-bold font-heading text-white uppercase tracking-tight mb-3 group-hover:text-[#C4A47C] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                {benefit.desc}
              </p>

              {/* Decorative side bar line */}
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#C4A47C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </section>

      <section id="construction-quality" className="py-24 bg-[#161619] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Specs details and descriptors */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#C4A47C] font-semibold flex items-center space-x-2">
                  <span className="w-8 h-[1px] bg-[#C4A47C]" />
                  <span>Стандарты качества</span>
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white uppercase tracking-tight">
                  Построено на века <br />— чтобы служить поколениям
                </h2>
                <p className="text-gray-400 text-sm font-light leading-relaxed pt-2">
                  Мы ставим бескомпромиссные инженерные стандарты приоритетом №1. Выбрав материалы европейских брендов и собственную систему экспертизы, мы минимизировали любые риски усадки и износа.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { id: 'tech-1', num: '01', title: 'Монолитно-каркасная основа', desc: 'Свободная перепланировка помещений, повышенная жесткость конструкции.', border: true },
                  { id: 'tech-2', num: '02', title: 'Премиальные дышащие фасады', desc: 'Терморегуляция и защита от перегрева летом за счет калиброванного керамогранита.', border: true },
                  { id: 'tech-3', num: '03', title: 'Шумозащитные окна REHAU / Schüco', desc: 'Двухкамерный энергоэффективный стеклопакет не пропускает пыль и уличные звуки.', border: true },
                  { id: 'tech-4', num: '04', title: 'Умные лифтовые шахты KONE', desc: 'Абсолютно бесшумные лифты со встроенными интеллектуальными серверами распределения.', border: false },
                ].map((tech, index) => (
                  <motion.div
                    id={tech.id}
                    key={tech.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex items-start space-x-4 ${tech.border ? 'border-b border-white/5 pb-4' : ''}`}
                  >
                    <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono text-[#C4A47C] shrink-0 font-bold">
                      {tech.num}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{tech.title}</h4>
                      <p className="text-gray-400 text-xs font-light">{tech.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Gallery presentation with double stacked pictures */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative h-[380px] rounded-sm overflow-hidden border border-white/5">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80"
                  alt="Construction details"
                  fill
                  className="object-cover scale-zoom"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative h-[380px] rounded-sm overflow-hidden border border-white/5 mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80"
                  alt="Interior finish detail"
                  fill
                  className="object-cover scale-zoom"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= DESIGN MASONRY GALLERY SECTION ================= */}
      <section id="gallery-masonry" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#C4A47C] font-semibold flex items-center space-x-2">
              <span className="w-8 h-[1px] bg-[#C4A47C]" />
              <span>Эстетика пространств</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white uppercase tracking-tight">
              Галерея наших интерьеров
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md font-light leading-relaxed mt-4 md:mt-0">
            Взгляните на чистоту архитектурных решений, мраморные полы просторных лобби, уют ландшафтных двориков и панорамы вечерней застройки.
          </p>
        </motion.div>

        {/* Elegant 3/2 grids layout mirroring agency standard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[250px] sm:h-[300px] overflow-hidden group rounded-sm border border-white/5"
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6" />
              <span className="absolute bottom-4 left-4 bg-black/75 border border-white/10 rounded px-3 py-1.5 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                {img.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-[#161619] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left intro details layout */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <span className="text-xs uppercase tracking-widest text-[#C4A47C] font-semibold flex items-center space-x-2">
                <span className="w-8 h-[1px] bg-[#C4A47C]" />
                <span>Отзывы резидентов</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white uppercase tracking-tight">
                Нам доверяют лучшие семьи страны
              </h2>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Чистые отзывы от владельцев, заселившихся в наши построенные комплексы и инвесторов, укрепивших свои капиталы.
              </p>

              {/* Slider switch dots indicators */}
              <div className="flex items-center space-x-2.5 pt-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTesti(idx)}
                    className={`h-1.5 focus:outline-none rounded-full transition-all duration-500 cursor-pointer ${
                      activeTesti === idx ? 'bg-[#C4A47C] w-10' : 'bg-white/10 hover:bg-white/20 w-5'
                    }`}
                    aria-label={`Testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Testimonials dynamic container card */}
            <div className="lg:col-span-2 relative min-h-[300px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTesti}
                  initial={{ opacity: 0, x: 24, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -24, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/[0.02] border border-white/5 p-8 sm:p-12 rounded-sm relative w-full space-y-6"
                >
                  {/* Rating stars style */}
                  <div className="flex space-x-1">
                    {[...Array(testimonials[activeTesti].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C4A47C] text-[#C4A47C]" />
                    ))}
                  </div>

                  <blockquote className="text-gray-100 text-sm sm:text-base italic leading-relaxed font-light font-sans">
                    {testimonials[activeTesti].text}
                  </blockquote>

                  <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C4A47C] to-[#121214] text-white flex items-center justify-center font-bold text-sm">
                      {testimonials[activeTesti].initials}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        {testimonials[activeTesti].author}
                      </h4>
                      <p className="text-[#C4A47C] text-xs font-light">
                        {testimonials[activeTesti].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
