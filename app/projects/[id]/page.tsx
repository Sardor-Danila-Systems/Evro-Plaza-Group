'use client';

import { useState, useEffect, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Compass,
  ArrowLeft,
  Building,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Sparkles,
  Layers,
  Crown,
  Maximize2,
  BookmarkCheck,
  Award,
  TreePine,
  Car,
  Heart,
  CalendarDays,
  Hammer
} from 'lucide-react';
import { projectsData, Project } from '@/lib/projectsData';

// Generate safe dynamic icons referencing infrastructure names
const getInfraIcon = (iconName: string) => {
  switch (iconName) {
    case 'Concierge':
      return <Crown className="w-5 h-5 text-[#C4A47C]" />;
    case 'Tree':
    case 'TreePine':
      return <TreePine className="w-5 h-5 text-[#C4A47C]" />;
    case 'Dumbbell':
    case 'Award':
      return <Award className="w-5 h-5 text-[#C4A47C]" />;
    case 'Car':
      return <Car className="w-5 h-5 text-[#C4A47C]" />;
    case 'Anchor':
      return <Compass className="w-5 h-5 text-[#C4A47C]" />;
    case 'Smile':
      return <Heart className="w-5 h-5 text-[#C4A47C]" />;
    case 'Building':
      return <Building className="w-5 h-5 text-[#C4A47C]" />;
    default:
      return <Sparkles className="w-5 h-5 text-[#C4A47C]" />;
  }
};

export default function SingleProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  
  // Unwrap dynamic routes parameters using React.use() wrapper matching Next.js 15
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  const project = projectsData.find((p) => p.id === id);

  // Layout floor plan selection states
  const [activePlanIdx, setActivePlanIdx] = useState(0);
  
  // Interactive full-screen gallery lightbox states
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // If project is not found, render a premium 404 state
  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center space-y-6">
        <h2 className="text-3xl font-bold font-heading text-white uppercase tracking-wider">Объект не обнаружен</h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          Запрашиваемый архитектурный проект EVRO PLAZA GROUP отсутствует в актуальном каталоге. Ознакомьтесь с другими знаковыми объектами.
        </p>
        <div className="pt-4">
          <Link
            href="/projects"
            className="bg-[#C4A47C] text-black hover:bg-neutral-100 font-semibold text-xs tracking-wider uppercase px-6 py-3 rounded-sm transition-all inline-block"
          >
            Вернуться в каталог проектов
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[65vh] sm:h-[80vh] flex items-end overflow-hidden pb-12 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.heroImage}
            alt={project.name}
            fill
            priority
            className="object-cover scale-100 opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/40 to-[#121214]/85" />
        </div>

        {/* Back Link and Header detail */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-[#C4A47C] text-xs uppercase tracking-wider font-semibold transition-colors bg-white/5 px-4 py-2 rounded-sm border border-white/5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Вернуться в каталог</span>
          </Link>

          <div className="space-y-3">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#C4A47C] font-mono font-semibold bg-white/5 px-3 py-1 rounded">
              {project.typeLabel}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading uppercase text-white tracking-tight">
              {project.name}
            </h1>
            <p className="text-gray-300 text-sm sm:text-lg max-w-3xl font-light leading-relaxed antialiased">
              {project.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROJECT OVERVIEW & SPECIFICATIONS ================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Descriptors */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-[#C4A47C] font-semibold">Обзор архитектурного решения</h3>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white uppercase">О проекте</h2>
          </div>
          
          <div className="space-y-4 text-gray-300 text-sm font-light leading-relaxed">
            <p className="text-gray-100 text-base leading-relaxed font-normal">
              {project.description}
            </p>
            <p>
              {project.longDescription}
            </p>
            <p>
              Для обеспечения максимальной сейсмической безопасности на конструкцию наложены нормы запаса прочности, превышающие внутренние государственные требования Узбекистана на 25%. Каркас состоит из высокомарочного застывшего армобетона, а внешние теплоэффективные экраны защищают квартиры от летнего солнца и сквозняков зимнего периода.
            </p>
          </div>

          {/* Infrastructure Feature cards panel */}
          <div className="pt-8 space-y-6">
            <h3 className="text-white font-sans text-base font-bold uppercase tracking-tight">Внутренняя инфраструктура</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.infrastructure.map((infra, idx) => (
                <div key={idx} className="bg-white/[0.01] border border-white/5 p-5 rounded-sm flex items-start space-x-4">
                  <div className="p-2.5 bg-white/5 border border-white/10 rounded-sm shrink-0">
                    {getInfraIcon(infra.icon)}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-white font-semibold text-sm">{infra.title}</h4>
                    <p className="text-gray-400 text-xs font-light leading-relaxed">{infra.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Parametrical Specifications panel */}
        <div className="space-y-6">
          <div className="bg-[#1a1a1d] border border-white/10 rounded-sm p-6 sm:p-8 space-y-6">
            <h4 className="text-[#C4A47C] font-mono text-xs uppercase tracking-wider font-semibold border-b border-white/10 pb-3">
              Технические параметры
            </h4>

            <ul className="space-y-4">
              {project.specs.map((spec, sidx) => (
                <li key={sidx} className="flex flex-col space-y-1">
                  <span className="text-gray-500 text-[10px] uppercase font-mono tracking-wider">{spec.label}</span>
                  <span className="text-white text-sm font-medium">{spec.value}</span>
                </li>
              ))}
              <li className="flex flex-col space-y-1">
                <span className="text-gray-500 text-[10px] uppercase font-mono tracking-wider">Локация</span>
                <span className="text-white text-sm font-medium flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C4A47C]" />
                  <span>{project.location}</span>
                </span>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/5 space-y-3">
              <span className="text-xs text-gray-400 font-light block">Имеются сертификаты экологического надзора BREEAM.</span>
              <Link
                href="/contact"
                className="w-full bg-[#C4A47C] text-black font-semibold uppercase py-3.5 text-center text-xs tracking-wider rounded-sm transition-all hover:bg-white block"
              >
                Запросить документацию
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HIGH FIDELITY PROJECT GALLERY ================= */}
      <section className="py-16 bg-[#161619] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#C4A47C] font-semibold">Эстетический рендеринг</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white uppercase tracking-tight">Галерея объекта</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.gallery.map((img, i) => (
              <div
                key={i}
                onClick={() => setLightboxImg(img)}
                className="relative h-[200px] sm:h-[240px] rounded-sm overflow-hidden border border-white/5 group cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="w-6 h-6 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONSTRUCTION PROGRESS INDICATOR BLOCK ================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#C4A47C] font-semibold flex items-center space-x-2">
            <Hammer className="w-4 h-4" />
            <span>Контроль за ходом работ</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white uppercase tracking-tight">
            Текущий статус строительства
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#161619]/60 border border-white/5 p-8 rounded-sm">
          {/* Progress Rows bars */}
          <div className="space-y-6">
            {project.constructionProgress.map((state, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-300 font-medium">{state.stage}</span>
                  <span className="text-[#C4A47C] font-bold">{state.percentage}%</span>
                </div>
                {/* Standard bar progress loader */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${state.percentage}%` }}
                    transition={{ duration: 1.2, delay: index * 0.1 }}
                    className="h-full bg-[#C4A47C]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Quick statement details */}
          <div className="space-y-4 md:border-l md:border-white/10 md:pl-12">
            <div className="text-xs uppercase tracking-wider text-gray-500 font-mono">Генеральный подрядчик</div>
            <h4 className="text-white text-lg font-bold uppercase font-heading">EVRO PLAZA CONSTRUCTION S.R.L.</h4>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
              Мы самостоятельно курируем фазы укладки, контролируем лабораторный состав сухих бетонных смесей, проливы и испытываем арматуру на пиковые переломы под давлением. Каждый этап фиксируется в ведомостях надзора.
            </p>
            <div className="inline-flex items-center space-x-2 text-[#C4A47C] font-mono text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse pointer-events-none" />
              <span>Стройка соответствует стандартам ISO 9001</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE LAYOUT SELECTOR FLOOR PLAN PLANNER ================= */}
      <section className="py-16 bg-[#161619] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#C4A47C] text-xs font-mono uppercase tracking-widest">Конфигуратор апартаментов</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white uppercase tracking-tight">Доступные планировочные решения</h2>
            <p className="text-gray-400 text-xs sm:text-sm font-light">
              Выберите количество комнат и площадь. Выделите нужный вариант планировки, чтобы отправить запрос на персональный расчет цены в рассрочку.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* List selector column buttons */}
            <div className="lg:col-span-4 space-y-4">
              {project.plans.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePlanIdx(idx)}
                  className={`w-full text-left p-6 sm:p-8 rounded-sm border transition-all focus:outline-none cursor-pointer flex justify-between items-center ${
                    activePlanIdx === idx
                      ? 'bg-[#C4A47C] border-[#C4A47C] text-black'
                      : 'bg-white/[0.01] border-white/5 text-gray-300 hover:border-white/10 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="space-y-1">
                    <span className={`text-[10px] font-mono uppercase tracking-wider block ${activePlanIdx === idx ? 'text-black/60' : 'text-gray-500'}`}>
                      Характеристики квартир
                    </span>
                    <h4 className="font-bold text-base font-sans">{p.rooms}-комнатные ({p.area})</h4>
                    <p className={`text-xs font-light ${activePlanIdx === idx ? 'text-black/85' : 'text-gray-400'}`}>
                      Этажность: {p.floor}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 opacity-80" />
                </button>
              ))}
            </div>

            {/* Simulated Plan rendering layout */}
            <div className="lg:col-span-8 bg-black/40 border border-white/5 rounded-sm p-6 sm:p-12 text-center flex flex-col items-center space-y-8 min-h-[380px] justify-center relative">
              <div className="absolute top-4 right-4 bg-white/5 border border-white/10 px-2.5 py-1 text-[9px] font-mono text-gray-400 rounded">
                Схематический план (Ориентир)
              </div>

              <div className="relative w-64 h-64 opacity-80 border-2 border-dashed border-white/10 rounded flex items-center justify-center p-4">
                {/* Simulated luxury floor blueprints structure */}
                <Image
                  src={project.plans[activePlanIdx]?.image || project.heroImage}
                  alt="Simulated Blueprint layout plan"
                  fill
                  className="object-cover opacity-35 filter grayscale brightness-125"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-4 border border-[#C4A47C]/20 rounded flex items-center justify-center bg-[#121214]/80 p-4 shadow-xl z-10 text-center">
                  <div className="space-y-2">
                    <span className="text-[#C4A47C] font-mono text-xs font-bold block">ПЛАНИРОВКА №{activePlanIdx + 1}</span>
                    <span className="text-xl font-heading font-semibold text-white tracking-tight uppercase block">
                      {project.plans[activePlanIdx]?.area}
                    </span>
                    <span className="text-gray-400 text-xs font-light block">
                      Просторная лоджия, застекленная терраса, 2 санузла, прачечная зона, мастер-спальня.
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-gray-400 font-light">
                  Стартовая цена: <strong className="text-white text-base font-semibold font-mono">{project.plans[activePlanIdx]?.price}</strong> (зависит от этажа и типа оплат)
                </p>
                <Link
                  href="/contact"
                  className="bg-[#C4A47C] text-black font-semibold uppercase px-6 py-3 text-xs tracking-wider hover:bg-neutral-100 transition-all rounded-sm inline-block"
                >
                  Узнать о планировке
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX OVERLAY COMPONENT ================= */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <div className="relative max-w-5xl max-h-[85vh] w-full h-full">
              <Image
                src={lightboxImg}
                alt="High resolution render zoom view"
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
