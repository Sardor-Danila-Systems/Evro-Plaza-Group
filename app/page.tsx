'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import ParallaxImage from '@/components/ParallaxImage';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  MapPin,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  X,
  Star
} from 'lucide-react';
import { projectsData } from '@/lib/projectsData';
import { useTranslation } from '@/lib/i18n/useTranslation';

export default function Home() {
  const { t, locale } = useTranslation();
  const [stats, setStats] = useState({ years: 0, projects: 0, families: 0, area: 0 });
  const [activeTesti, setActiveTesti] = useState(0);
  const [activeCategory, setActiveCategory] = useState<'all' | 'residential' | 'commercial'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

  const testimonials = [0, 1, 2].map((i) => ({
    text: t(`home.testimonials.items.${i}.text`),
    author: t(`home.testimonials.items.${i}.author`),
    role: t(`home.testimonials.items.${i}.role`),
    initials: t(`home.testimonials.items.${i}.initials`),
    rating: 5,
  }));

  const nextTesti = () => setActiveTesti((prev) => (prev + 1) % testimonials.length);
  const prevTesti = () => setActiveTesti((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto-advance the testimonials slider; restarts whenever the active slide changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTesti((prev) => (prev + 1) % 3);
    }, 7000);
    return () => clearTimeout(timer);
  }, [activeTesti]);

  const benefits = [0, 1, 2, 3, 4, 5].map((i) => ({
    idx: String(i + 1).padStart(2, '0'),
    title: t(`home.advantages.items.${i}.title`),
    desc: t(`home.advantages.items.${i}.desc`),
    category: t(`home.advantages.items.${i}.category`),
  }));

  const galleryImages = [
    { src: '/projects/avenue-plaza/gallery5.jpg', label: t('home.gallery.images.0') },
    { src: '/projects/avenue-plaza/gallery9.jpg', label: t('home.gallery.images.1') },
    { src: '/projects/avenue-plaza/gallery6.jpg', label: t('home.gallery.images.2') },
    { src: '/projects/avenue-plaza/gallery10.jpg', label: t('home.gallery.images.3') },
    { src: '/projects/evro_plaza/gallery-1.jpg', label: t('home.gallery.images.4') },
    { src: '/projects/evro_plaza/gallery-8.jpg', label: t('home.gallery.images.5') },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.type === activeCategory);

  const showNextImage = () => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % galleryImages.length));
  };

  const showPrevImage = () => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length));
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') showNextImage();
      else if (e.key === 'ArrowLeft') showPrevImage();
      else if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-grid-glow pointer-events-none" />

      <section id="homepage-hero" className="relative min-h-[100vh] sm:min-h-[95vh] flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/projects/avenue-plaza/gallery11.jpg"
            alt="Avenue Plaza — жилой комплекс в Самарканде"
            containerClassName="absolute inset-0 h-full w-full"
            imageClassName="hero-ken-burns"
            strength={50}
            priority
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
              <span>{t('home.hero.badge')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight uppercase font-heading max-w-5xl mx-auto"
            >
              {t('home.hero.titleLine1')} <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-[#C4A47C]">{t('home.hero.titleLine2')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed antialiased"
            >
              {t('home.hero.subtitle')}
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
                <span>{t('home.hero.ctaProjects')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto border border-white/20 hover:border-[#C4A47C] text-white font-medium px-8 py-4 text-xs tracking-wider hover:bg-white/5 transition-all duration-300 rounded-sm flex items-center justify-center"
              >
                {t('home.hero.ctaAbout')}
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 w-full bg-[#121214]/90 border-t border-white/5 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="space-y-1">
                <div className="text-2xl sm:text-4xl font-bold font-heading text-white">
                  {stats.years} <span className="text-[#C4A47C] text-lg font-light">{t('home.hero.statYears')}</span>
                </div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-light">{t('home.hero.statYearsLabel')}</p>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-4xl font-bold font-heading text-white">
                  {stats.projects} <span className="text-[#C4A47C] text-lg font-light">+</span>
                </div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-light">{t('home.hero.statProjectsLabel')}</p>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-4xl font-bold font-heading text-white">
                  {stats.families.toLocaleString()} <span className="text-[#C4A47C] text-lg font-light">+</span>
                </div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-light">{t('home.hero.statFamiliesLabel')}</p>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-4xl font-bold font-heading text-white">
                  {stats.area} <span className="text-[#C4A47C] text-sm font-light">{t('home.hero.statAreaUnit')}</span>
                </div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-light">{t('home.hero.statAreaLabel')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-teaser" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[380px] sm:h-[480px] lg:h-[550px] w-full rounded-sm overflow-hidden group shadow-2xl border border-white/5"
          >
            <ParallaxImage
              src="/projects/avenue-plaza/gallery8.jpg"
              alt="Двор Avenue Plaza с фонтаном и зонами отдыха"
              containerClassName="absolute inset-0 h-full w-full"
              imageClassName="group-hover:scale-105 transition-transform duration-1000 ease-out opacity-85"
              strength={30}
            />
            <div className="absolute bottom-6 left-6 right-6 bg-[#161619]/95 border border-white/10 p-6 rounded-sm flex items-center space-x-4 backdrop-blur-sm shadow-xl">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C4A47C] to-amber-700 flex items-center justify-center text-black font-semibold text-sm shadow-md">
                РЭ
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">{t('home.aboutTeaser.founderName')}</h4>
                <p className="text-[#C4A47C] text-xs font-light">{t('home.aboutTeaser.founderRole')}</p>
              </div>
            </div>
            <div className="absolute top-6 left-6 bg-[#C4A47C] text-black text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm shadow">
              {t('home.aboutTeaser.foundedBadge')}
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
                <span>{t('home.aboutTeaser.eyebrow')}</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white uppercase tracking-tight">
                {t('home.aboutTeaser.title')}
              </h2>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed font-light">
              {t('home.aboutTeaser.paragraph1')}
            </p>

            <p className="text-gray-400 text-sm leading-relaxed font-light">
              {t('home.aboutTeaser.paragraph2')}
            </p>

            {/* Quick stats points */}
            <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-mono">
              <div className="flex items-center space-x-2 bg-white/5 border border-white/5 p-3 rounded">
                <CheckCircle className="w-4 h-4 text-[#C4A47C] shrink-0" />
                <span className="text-gray-300">{t('home.aboutTeaser.pointManagement')}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 border border-white/5 p-3 rounded">
                <CheckCircle className="w-4 h-4 text-[#C4A47C] shrink-0" />
                <span className="text-gray-300">{t('home.aboutTeaser.pointInstallments')}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 border border-white/5 p-3 rounded">
                <CheckCircle className="w-4 h-4 text-[#C4A47C] shrink-0" />
                <span className="text-gray-300">{t('home.aboutTeaser.pointSuppliers')}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 border border-white/5 p-3 rounded">
                <CheckCircle className="w-4 h-4 text-[#C4A47C] shrink-0" />
                <span className="text-gray-300">{t('home.aboutTeaser.pointMaterials')}</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-[#C4A47C] hover:text-white text-xs font-bold tracking-widest uppercase"
              >
                <span>{t('home.aboutTeaser.readMore')}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="homepage-projects" className="py-16 sm:py-24 bg-[#161619] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#C4A47C] font-semibold flex items-center space-x-2">
                <span className="w-8 h-[1px] bg-[#C4A47C]" />
                <span>{t('home.projectsSection.eyebrow')}</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white uppercase tracking-tight">
                {t('home.projectsSection.title')}
              </h2>
            </div>

            <div className="flex items-center space-x-1.5 mt-6 md:mt-0 bg-black/40 border border-white/5 p-1 rounded overflow-x-auto max-w-full">
              <button
                onClick={() => setActiveCategory('all')}
                className={`shrink-0 px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-semibold tracking-wider uppercase rounded-sm transition-all focus:outline-none cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-[#C4A47C] text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {t('home.projectsSection.filterAll')}
              </button>
              <button
                onClick={() => setActiveCategory('residential')}
                className={`shrink-0 px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-semibold tracking-wider uppercase rounded-sm transition-all focus:outline-none cursor-pointer ${
                  activeCategory === 'residential'
                    ? 'bg-[#C4A47C] text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {t('home.projectsSection.filterResidential')}
              </button>
              <button
                onClick={() => setActiveCategory('commercial')}
                className={`shrink-0 px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-semibold tracking-wider uppercase rounded-sm transition-all focus:outline-none cursor-pointer ${
                  activeCategory === 'commercial'
                    ? 'bg-[#C4A47C] text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {t('home.projectsSection.filterCommercial')}
              </button>
            </div>
          </div>

          {/* Cards gallery Grid structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                        alt={project.name[locale] || project.name.ru}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-750 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-90" />

                      <span className="absolute top-4 left-4 bg-black/75 backdrop-blur-sm border border-white/10 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-sm">
                        {project.statusLabel[locale] || project.statusLabel.ru}
                      </span>

                      <span className="absolute bottom-4 left-4 text-xs font-light text-gray-300 flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5 text-[#C4A47C]" />
                        <span>{project.location[locale] || project.location.ru}</span>
                      </span>
                    </Link>

                    <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <span className="text-[10px] tracking-widest font-mono text-gray-500 font-semibold uppercase">
                          {project.typeLabel[locale] || project.typeLabel.ru}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight uppercase group-hover:text-[#C4A47C] transition-colors">
                          <Link href={`/projects/${project.id}`}>{project.name[locale] || project.name.ru}</Link>
                        </h3>
                        <p className="text-gray-400 text-sm font-light leading-relaxed line-clamp-2">
                          {project.description[locale] || project.description.ru}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <div className="text-xs space-y-0.5">
                          <span className="text-gray-500 block">{t('home.projectsSection.mainParams')}</span>
                          <span className="text-gray-100 font-semibold">{project.specs[0]?.label[locale] || project.specs[0]?.label.ru}: {project.specs[0]?.value[locale] || project.specs[0]?.value.ru}</span>
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
              <span>{t('home.projectsSection.viewAll')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-[#C4A47C] font-semibold">{t('home.advantages.eyebrow')}</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white uppercase tracking-tight">
            {t('home.advantages.title')}
          </h2>
          <p className="text-gray-400 text-sm font-light">
            {t('home.advantages.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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

      <section id="construction-quality" className="py-16 sm:py-24 bg-[#161619] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
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
                  <span>{t('home.constructionQuality.eyebrow')}</span>
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white uppercase tracking-tight">
                  {t('home.constructionQuality.titleLine1')} <br />{t('home.constructionQuality.titleLine2')}
                </h2>
                <p className="text-gray-400 text-sm font-light leading-relaxed pt-2">
                  {t('home.constructionQuality.paragraph')}
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { id: 'tech-1', num: '01', title: t('home.constructionQuality.items.0.title'), desc: t('home.constructionQuality.items.0.desc'), border: true },
                  { id: 'tech-2', num: '02', title: t('home.constructionQuality.items.1.title'), desc: t('home.constructionQuality.items.1.desc'), border: true },
                  { id: 'tech-3', num: '03', title: t('home.constructionQuality.items.2.title'), desc: t('home.constructionQuality.items.2.desc'), border: true },
                  { id: 'tech-4', num: '04', title: t('home.constructionQuality.items.3.title'), desc: t('home.constructionQuality.items.3.desc'), border: false },
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
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              <div className="relative h-[220px] sm:h-[300px] lg:h-[380px] rounded-sm overflow-hidden border border-white/5">
                <ParallaxImage
                  src="/projects/avenue-plaza/gallery2.jpg"
                  alt="Дворовая территория Avenue Plaza с высоты"
                  containerClassName="absolute inset-0 h-full w-full"
                  imageClassName="scale-zoom"
                  strength={25}
                />
              </div>
              <div className="relative h-[220px] sm:h-[300px] lg:h-[380px] rounded-sm overflow-hidden border border-white/5 mt-6 sm:mt-8">
                <ParallaxImage
                  src="/projects/evro_plaza/gallery-5.jpg"
                  alt="Интерьер ТЦ EVRO PLAZA"
                  containerClassName="absolute inset-0 h-full w-full"
                  imageClassName="scale-zoom"
                  strength={25}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= DESIGN MASONRY GALLERY SECTION ================= */}
      <section id="gallery-masonry" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span>{t('home.gallery.eyebrow')}</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white uppercase tracking-tight">
              {t('home.gallery.title')}
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md font-light leading-relaxed mt-4 md:mt-0">
            {t('home.gallery.subtitle')}
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
              onClick={() => setLightboxIndex(i)}
              className="relative h-[250px] sm:h-[300px] overflow-hidden group rounded-sm border border-white/5 cursor-pointer"
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

      {/* ================= GALLERY LIGHTBOX OVERLAY ================= */}
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
              onClick={(e) => { e.stopPropagation(); showPrevImage(); }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); showNextImage(); }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <span className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 bg-white/10 border border-white/10 rounded-full px-3 py-1 text-xs text-white font-mono">
              {lightboxIndex + 1} / {galleryImages.length}
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
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].label}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="testimonials" className="py-16 sm:py-24 bg-[#161619] border-t border-white/5 relative z-10">
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
                <span>{t('home.testimonials.eyebrow')}</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white uppercase tracking-tight">
                {t('home.testimonials.title')}
              </h2>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                {t('home.testimonials.subtitle')}
              </p>

              {/* Slider switch dots indicators + arrows */}
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center space-x-2.5">
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
                <div className="flex items-center space-x-2">
                  <button
                    onClick={prevTesti}
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C4A47C] hover:text-black border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTesti}
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C4A47C] hover:text-black border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Testimonials dynamic container card — draggable/swipeable */}
            <div className="lg:col-span-2 relative min-h-[300px] flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTesti}
                  initial={{ opacity: 0, x: 24, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -24, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.25}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) nextTesti();
                    else if (info.offset.x > 60) prevTesti();
                  }}
                  className="bg-white/[0.02] border border-white/5 p-6 sm:p-12 rounded-sm relative w-full space-y-6 cursor-grab active:cursor-grabbing touch-pan-y select-none"
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
