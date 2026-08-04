'use client';

import { useState, useEffect } from 'react';
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
  ChevronLeft,
  X,
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
  Hammer,
  School,
  ShoppingCart,
  ShoppingBag,
  ShieldCheck,
  Briefcase,
  Gem,
  Shirt,
  Film,
  Gamepad2,
  UtensilsCrossed
} from 'lucide-react';
import { projectsData } from '@/lib/projectsData';
import { useTranslation } from '@/lib/i18n/useTranslation';
import ParallaxImage from '@/components/ParallaxImage';

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
    case 'School':
      return <School className="w-5 h-5 text-[#C4A47C]" />;
    case 'ShoppingCart':
      return <ShoppingCart className="w-5 h-5 text-[#C4A47C]" />;
    case 'ShoppingBag':
      return <ShoppingBag className="w-5 h-5 text-[#C4A47C]" />;
    case 'ShieldCheck':
      return <ShieldCheck className="w-5 h-5 text-[#C4A47C]" />;
    case 'Briefcase':
      return <Briefcase className="w-5 h-5 text-[#C4A47C]" />;
    case 'Gem':
      return <Gem className="w-5 h-5 text-[#C4A47C]" />;
    case 'Shirt':
      return <Shirt className="w-5 h-5 text-[#C4A47C]" />;
    case 'Film':
      return <Film className="w-5 h-5 text-[#C4A47C]" />;
    case 'Gamepad2':
      return <Gamepad2 className="w-5 h-5 text-[#C4A47C]" />;
    case 'UtensilsCrossed':
      return <UtensilsCrossed className="w-5 h-5 text-[#C4A47C]" />;
    default:
      return <Sparkles className="w-5 h-5 text-[#C4A47C]" />;
  }
};

export default function ProjectDetailClient({ id }: { id: string }) {
  const router = useRouter();
  const { t, locale } = useTranslation();

  const project = projectsData.find((p) => p.id === id);

  // Layout floor plan selection states
  const [activePlanIdx, setActivePlanIdx] = useState(0);

  // Interactive full-screen gallery lightbox states
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryLength = project?.gallery.length ?? 0;

  const showNext = () => {
    if (galleryLength === 0) return;
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % galleryLength));
  };

  const showPrev = () => {
    if (galleryLength === 0) return;
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + galleryLength) % galleryLength));
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') showNext();
      else if (e.key === 'ArrowLeft') showPrev();
      else if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, galleryLength]);

  // If project is not found, render a premium 404 state
  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center space-y-6">
        <h2 className="text-3xl font-bold font-heading text-white uppercase tracking-wider">{t('projects.detail.notFoundTitle')}</h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          {t('projects.detail.notFoundText')}
        </p>
        <div className="pt-4">
          <Link
            href="/projects"
            className="bg-[#C4A47C] text-black hover:bg-neutral-100 font-semibold text-xs tracking-wider uppercase px-6 py-3 rounded-sm transition-all inline-block"
          >
            {t('projects.detail.backToCatalog')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] sm:h-[80vh] flex items-end overflow-hidden pb-10 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src={project.heroImage}
            alt={project.name[locale] || project.name.ru}
            containerClassName="absolute inset-0 h-full w-full"
            imageClassName="opacity-40"
            strength={45}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/40 to-[#121214]/85" />
        </div>

        {/* Back Link and Header detail */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 space-y-5 sm:space-y-6"
        >
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-[#C4A47C] text-xs uppercase tracking-wider font-semibold transition-colors bg-white/5 px-4 py-2 rounded-sm border border-white/5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t('projects.detail.backLink')}</span>
          </Link>

          <div className="space-y-3">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#C4A47C] font-mono font-semibold bg-white/5 px-3 py-1 rounded">
              {project.typeLabel[locale] || project.typeLabel.ru}
            </span>
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold font-heading uppercase text-white tracking-tight">
              {project.name[locale] || project.name.ru}
            </h1>
            <p className="text-gray-300 text-sm sm:text-lg max-w-3xl font-light leading-relaxed antialiased">
              {project.tagline[locale] || project.tagline.ru}
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= PROJECT OVERVIEW & SPECIFICATIONS ================= */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
        {/* Descriptors */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-[#C4A47C] font-semibold">{t('projects.detail.overviewEyebrow')}</h3>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white uppercase">{t('projects.detail.overviewTitle')}</h2>
          </div>

          <div className="space-y-4 text-gray-300 text-sm font-light leading-relaxed">
            <p className="text-gray-100 text-base leading-relaxed font-normal">
              {project.description[locale] || project.description.ru}
            </p>
            <p>
              {project.longDescription[locale] || project.longDescription.ru}
            </p>
            <p>
              {t('projects.detail.seismicNote')}
            </p>
          </div>

          {/* Infrastructure Feature cards panel */}
          <div className="pt-8 space-y-6">
            <h3 className="text-white font-sans text-base font-bold uppercase tracking-tight">{t('projects.detail.infrastructureTitle')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {project.infrastructure.map((infra, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: (idx % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/[0.01] border border-white/5 p-5 rounded-sm flex items-start space-x-4"
                >
                  <div className="p-2.5 bg-white/5 border border-white/10 rounded-sm shrink-0">
                    {getInfraIcon(infra.icon)}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-white font-semibold text-sm">{infra.title[locale] || infra.title.ru}</h4>
                    <p className="text-gray-400 text-xs font-light leading-relaxed">{infra.description[locale] || infra.description.ru}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Parametrical Specifications panel */}
        <div className="space-y-6">
          <div className="bg-[#1a1a1d] border border-white/10 rounded-sm p-6 sm:p-8 space-y-6">
            <h4 className="text-[#C4A47C] font-mono text-xs uppercase tracking-wider font-semibold border-b border-white/10 pb-3">
              {t('projects.detail.technicalParams')}
            </h4>

            <ul className="space-y-4">
              {project.specs.map((spec, sidx) => (
                <li key={sidx} className="flex flex-col space-y-1">
                  <span className="text-gray-500 text-[10px] uppercase font-mono tracking-wider">{spec.label[locale] || spec.label.ru}</span>
                  <span className="text-white text-sm font-medium">{spec.value[locale] || spec.value.ru}</span>
                </li>
              ))}
              <li className="flex flex-col space-y-1">
                <span className="text-gray-500 text-[10px] uppercase font-mono tracking-wider">{t('projects.detail.locationLabel')}</span>
                <span className="text-white text-sm font-medium flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C4A47C]" />
                  <span>{project.location[locale] || project.location.ru}</span>
                </span>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/5 space-y-3">
              <span className="text-xs text-gray-400 font-light block">{t('projects.detail.breeamNote')}</span>
              <Link
                href="/contact"
                className="w-full bg-[#C4A47C] text-black font-semibold uppercase py-3.5 text-center text-xs tracking-wider rounded-sm transition-all hover:bg-white block"
              >
                {t('projects.detail.requestDocs')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HIGH FIDELITY PROJECT GALLERY ================= */}
      <section className="py-12 sm:py-16 bg-[#161619] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#C4A47C] font-semibold">{t('projects.detail.galleryEyebrow')}</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white uppercase tracking-tight">{t('projects.detail.galleryTitle')}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setLightboxIndex(i)}
                className="relative h-[150px] sm:h-[240px] rounded-sm overflow-hidden border border-white/5 group cursor-pointer"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONSTRUCTION PROGRESS INDICATOR BLOCK ================= */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#C4A47C] font-semibold flex items-center space-x-2">
            <Hammer className="w-4 h-4" />
            <span>{t('projects.detail.progressEyebrow')}</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white uppercase tracking-tight">
            {t('projects.detail.progressTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center bg-[#161619]/60 border border-white/5 p-5 sm:p-8 rounded-sm">
          {/* Progress Rows bars */}
          <div className="space-y-6">
            {project.constructionProgress.map((state, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-300 font-medium">{state.stage[locale] || state.stage.ru}</span>
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
            <div className="text-xs uppercase tracking-wider text-gray-500 font-mono">{t('projects.detail.generalContractor')}</div>
            <h4 className="text-white text-lg font-bold uppercase font-heading">EVRO PLAZA CONSTRUCTION S.R.L.</h4>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
              {t('projects.detail.contractorNote')}
            </p>
            <div className="inline-flex items-center space-x-2 text-[#C4A47C] font-mono text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse pointer-events-none" />
              <span>{t('projects.detail.isoNote')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE LAYOUT SELECTOR FLOOR PLAN PLANNER ================= */}
      <section className="py-12 sm:py-16 bg-[#161619] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#C4A47C] text-xs font-mono uppercase tracking-widest">{t('projects.detail.configuratorEyebrow')}</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white uppercase tracking-tight">{t('projects.detail.configuratorTitle')}</h2>
            <p className="text-gray-400 text-xs sm:text-sm font-light">
              {t('projects.detail.configuratorSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
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
                      {t('projects.detail.apartmentParams')}
                    </span>
                    <h4 className="font-bold text-base font-sans">{p.rooms}-{t('projects.detail.roomsSuffix')} ({p.area})</h4>
                    <p className={`text-xs font-light ${activePlanIdx === idx ? 'text-black/85' : 'text-gray-400'}`}>
                      {t('projects.detail.floorLabel')}: {p.floor}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 opacity-80" />
                </button>
              ))}
            </div>

            {/* Simulated Plan rendering layout */}
            <div className="lg:col-span-8 bg-black/40 border border-white/5 rounded-sm p-6 sm:p-12 text-center flex flex-col items-center space-y-8 min-h-[380px] justify-center relative">
              <div className="absolute top-4 right-4 bg-white/5 border border-white/10 px-2.5 py-1 text-[9px] font-mono text-gray-400 rounded">
                {t('projects.detail.schematicPlan')}
              </div>

              <div className="relative w-48 h-48 sm:w-64 sm:h-64 opacity-80 border-2 border-dashed border-white/10 rounded flex items-center justify-center p-4">
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
                    <span className="text-[#C4A47C] font-mono text-xs font-bold block">{t('projects.detail.planNumber')}{activePlanIdx + 1}</span>
                    <span className="text-xl font-heading font-semibold text-white tracking-tight uppercase block">
                      {project.plans[activePlanIdx]?.area}
                    </span>
                    <span className="text-gray-400 text-xs font-light block">
                      {t('projects.detail.planDescription')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-gray-400 font-light">
                  {t('projects.detail.startingPrice')} <strong className="text-white text-base font-semibold font-mono">{project.plans[activePlanIdx]?.price}</strong> {t('projects.detail.priceNote')}
                </p>
                <Link
                  href="/contact"
                  className="bg-[#C4A47C] text-black font-semibold uppercase px-6 py-3 text-xs tracking-wider hover:bg-neutral-100 transition-all rounded-sm inline-block"
                >
                  {t('projects.detail.learnAboutPlan')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX OVERLAY COMPONENT ================= */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <span className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 bg-white/10 border border-white/10 rounded-full px-3 py-1 text-xs text-white font-mono">
              {lightboxIndex + 1} / {galleryLength}
            </span>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] w-full h-full cursor-default"
            >
              <Image
                src={project.gallery[lightboxIndex]}
                alt={`Gallery image ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
