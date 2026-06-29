'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Award, Compass, Shield, ArrowRight, UserCheck, Landmark } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/useTranslation';
import ParallaxImage from '@/components/ParallaxImage';

export default function About() {
  const { t } = useTranslation();

  const valueIcons = [
    <Award className="w-6 h-6 text-[#C4A47C]" />,
    <Shield className="w-6 h-6 text-[#C4A47C]" />,
    <Compass className="w-6 h-6 text-[#C4A47C]" />,
    <Landmark className="w-6 h-6 text-[#C4A47C]" />,
  ];

  const values = [0, 1, 2, 3].map((i) => ({
    icon: valueIcons[i],
    title: t(`about.values.items.${i}.title`),
    desc: t(`about.values.items.${i}.desc`),
  }));

  const milestones = [0, 1, 2, 3, 4].map((i) => ({
    year: t(`about.timeline.items.${i}.year`),
    title: t(`about.timeline.items.${i}.title`),
    desc: t(`about.timeline.items.${i}.desc`),
  }));

  return (
    <div className="py-8 sm:py-12 overflow-hidden">
      {/* ================= HERO HEADER ================= */}
      <section className="relative h-[320px] sm:h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/projects/evro_plaza/hero.jpg"
            alt="EVRO PLAZA GROUP"
            containerClassName="absolute inset-0 h-full w-full"
            imageClassName="opacity-20"
            strength={40}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/60 to-[#121214]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4"
        >
          <span className="text-xs uppercase tracking-widest text-[#C4A47C] font-mono">{t('about.hero.eyebrow')}</span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading uppercase text-white tracking-tight">
            {t('about.hero.title')}
          </h1>
          <p className="text-gray-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
            {t('about.hero.subtitle')}
          </p>
        </motion.div>
      </section>

      {/* ================= FOUNDER BLOCK ================= */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Founders word */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 order-2 lg:order-1"
          >
            <span className="text-[#C4A47C] text-xs font-mono uppercase tracking-widest block">{t('about.founder.eyebrow')}</span>
            <blockquote className="text-xl sm:text-2xl font-light italic text-gray-200 leading-snug font-sans">
              {t('about.founder.quote')}
            </blockquote>

            <div className="space-y-1">
              <h4 className="text-white font-bold text-base">{t('about.founder.name')}</h4>
              <p className="text-gray-400 text-xs font-light">{t('about.founder.role')}</p>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-4 text-gray-400 text-sm font-light leading-relaxed">
              <p>
                {t('about.founder.paragraph1')}
              </p>
              <p>
                {t('about.founder.paragraph2')}
              </p>
            </div>
          </motion.div>

          {/* Large elite photo portrait style representation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[360px] sm:h-[460px] lg:h-[550px] rounded-sm overflow-hidden border border-white/10 shadow-2xl order-1 lg:order-2"
          >
            <ParallaxImage
              src="/projects/avenue-plaza/gallery12.jpg"
              alt="Вход на территорию Avenue Plaza"
              containerClassName="absolute inset-0 h-full w-full"
              imageClassName="opacity-90 brightness-95"
              strength={30}
            />
            {/* Embedded badge details */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-black/90 border border-[#C4A47C]/30 p-3 sm:p-4 rounded-sm">
              <div className="flex items-center space-x-3 text-xs tracking-wider">
                <UserCheck className="w-5 h-5 text-[#C4A47C]" />
                <span className="text-white font-mono font-medium">{t('about.founder.credo')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PHILOSOPHY / CORE VALUES ================= */}
      <section className="py-16 sm:py-24 bg-[#161619] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16"
          >
            <span className="text-[#C4A47C] text-xs font-mono uppercase tracking-widest">{t('about.values.eyebrow')}</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white uppercase tracking-tight">{t('about.values.title')}</h2>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
              {t('about.values.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: (idx % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="flex items-start space-x-5 sm:space-x-6 bg-white/[0.01] border border-white/5 p-6 sm:p-8 rounded-sm hover:border-white/10 transition-all"
              >
                <div className="p-3 bg-white/5 border border-white/10 rounded-sm shrink-0">
                  {val.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-white font-bold font-heading text-lg tracking-tight uppercase">{val.title}</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DETAILED CHRONOLOGICAL TIMELINE ================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto space-y-3 mb-14 sm:mb-20"
        >
          <span className="text-[#C4A47C] text-xs font-mono uppercase tracking-widest">{t('about.timeline.eyebrow')}</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white uppercase tracking-tight">{t('about.timeline.title')}</h2>
          <p className="text-gray-400 text-xs sm:text-sm font-light">
            {t('about.timeline.subtitle')}
          </p>
        </motion.div>

        {/* Chronological central vertical timeline layout */}
        <div className="relative border-l border-white/10 max-w-3xl mx-auto pl-7 sm:pl-12 space-y-10 sm:space-y-12">
          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Central connecting circle ball */}
              <div className="absolute -left-[39px] sm:-left-[61px] top-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#121214] border-2 border-[#C4A47C] group-hover:bg-[#C4A47C] transition-all flex items-center justify-center text-[10px] text-white" />

              <div className="space-y-2">
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#C4A47C]">{milestone.year}</div>
                <h4 className="text-white font-sans text-base sm:text-lg font-bold uppercase tracking-tight group-hover:text-[#C4A47C] transition-colors">
                  {milestone.title}
                </h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CALL TO ACTION - VISIT PROJECTS ================= */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="py-14 sm:py-16 bg-gradient-to-r from-neutral-900 to-black/80 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-sm overflow-hidden relative shadow-xl border border-white/5"
      >
        <div className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none" style={{ backgroundImage: `url('/projects/evro_plaza/gallery-1.jpg')` }} />
        <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white uppercase tracking-tight">
            {t('about.cta.title')}
          </h3>
          <p className="text-gray-400 text-sm font-light max-w-xl mx-auto leading-relaxed">
            {t('about.cta.subtitle')}
          </p>
          <div className="pt-4">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 bg-[#C4A47C] text-black font-semibold uppercase px-8 py-4 text-xs tracking-wider hover:bg-neutral-100 transition-all rounded-sm cursor-pointer w-full sm:w-auto justify-center"
            >
              <span>{t('about.cta.button')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
