'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Building, Home as House, Award, Filter, Calendar, Check, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
import { projectsData } from '@/lib/projectsData';
import { useTranslation } from '@/lib/i18n/useTranslation';

function ProjectsListContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t, locale } = useTranslation();

  // Get initial filter states from URL query directly as constants derived from URL
  const selectedType = searchParams.get('type') || 'all';
  const selectedStatus = searchParams.get('status') || 'all';

  // Local state managers
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('all');

  const updateFilters = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`/projects?${params.toString()}`);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCity('all');
    router.push('/projects');
  };

  // Run comprehensive matches. Search across all locale variants of the
  // localized text fields so switching languages never silently hides results.
  const filteredProjects = projectsData.filter((project) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      query === '' ||
      [project.name, project.location, project.tagline].some((field) =>
        (Object.values(field) as string[]).some((value) => value.toLowerCase().includes(query))
      );

    const matchesType = selectedType === 'all' || project.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    const matchesCity = selectedCity === 'all' || project.city.toLowerCase().includes(selectedCity.toLowerCase());

    return matchesSearch && matchesType && matchesStatus && matchesCity;
  });

  return (
    <div className="space-y-12">
      {/* ================= FILTER PANEL INTERACTIVE CONTROLS ================= */}
      <section className="bg-white/[0.02] border border-white/5 p-4 sm:p-6 rounded-sm space-y-5 sm:space-y-6">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
          
          {/* Live Searchbar Input */}
          <div className="relative flex-grow max-w-xl">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder={t('projects.list.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-sm pl-12 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#C4A47C] focus:ring-1 focus:ring-[#C4A47C]/35 transition-all font-sans"
            />
          </div>

          {/* Quick Stats Summary / Indicators */}
          <div className="text-xs font-mono text-gray-400 self-center flex items-center space-x-1">
            <span>{t('projects.list.foundResults')}</span>
            <strong className="text-[#C4A47C] font-semibold">{filteredProjects.length} {t('projects.list.of')} {projectsData.length}</strong>
          </div>
        </div>

        {/* Detailed filtering grid row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/5">
          {/* Type Filter dropdown options */}
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-wider text-gray-500 font-mono">{t('projects.list.classificationLabel')}</label>
            <select
              value={selectedType}
              onChange={(e) => {
                updateFilters('type', e.target.value);
              }}
              className="w-full bg-black/40 border border-white/10 rounded-sm px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#C4A47C] transition-all cursor-pointer font-sans"
            >
              <option value="all">{t('projects.list.typeAll')}</option>
              <option value="residential">{t('projects.list.typeResidential')}</option>
              <option value="commercial">{t('projects.list.typeCommercial')}</option>
            </select>
          </div>

          {/* Status filter dropdown options */}
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-wider text-gray-500 font-mono">{t('projects.list.statusLabel')}</label>
            <select
              value={selectedStatus}
              onChange={(e) => {
                updateFilters('status', e.target.value);
              }}
              className="w-full bg-black/40 border border-white/10 rounded-sm px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#C4A47C] transition-all cursor-pointer font-sans"
            >
              <option value="all">{t('projects.list.statusAll')}</option>
              <option value="completed">{t('projects.list.statusCompleted')}</option>
              <option value="construction">{t('projects.list.statusConstruction')}</option>
              <option value="sales">{t('projects.list.statusSales')}</option>
              <option value="upcoming">{t('projects.list.statusUpcoming')}</option>
            </select>
          </div>

          {/* Location City selection */}
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-wider text-gray-500 font-mono">{t('projects.list.geographyLabel')}</label>
            <div className="flex items-center space-x-2">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-sm px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#C4A47C] transition-all cursor-pointer font-sans"
              >
                <option value="all">{t('projects.list.geographyAll')}</option>
                <option value="самарканд">{t('projects.list.geographySamarkand')}</option>
                <option value="фергана">{t('projects.list.geographyFergana')}</option>
              </select>
              {(selectedType !== 'all' || selectedStatus !== 'all' || selectedCity !== 'all' || searchQuery !== '') && (
                <button
                  onClick={clearAllFilters}
                  className="bg-white/5 hover:bg-white/10 text-xs text-gray-300 font-medium px-4 py-3 rounded-sm border border-white/10 transition-all cursor-pointer whitespace-nowrap self-end"
                >
                  {t('projects.list.reset')}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS CARDS LIST GRID ================= */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="bg-white/[0.01] border border-white/5 rounded-sm overflow-hidden flex flex-col hover:border-[#C4A47C]/45 transition-all group"
            >
              {/* Card visual rendering */}
              <div className="relative h-[220px] sm:h-[300px] w-full overflow-hidden">
                <Image
                  src={project.heroImage}
                  alt={project.name[locale] || project.name.ru}
                  fill
                  className="object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-750 ease-out"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-90" />

                {/* Embedded details badges */}
                <span className="absolute top-4 left-4 bg-black/85 border border-white/10 text-white text-[9px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-sm">
                  {project.statusLabel[locale] || project.statusLabel.ru}
                </span>

                <span className="absolute bottom-4 left-4 text-xs text-gray-300 flex items-center space-x-1 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#C4A47C]" />
                  <span>{project.location[locale] || project.location.ru}</span>
                </span>

                <span className="absolute top-4 right-4 bg-[#C4A47C] text-black text-[9px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-sm">
                  {project.year} {t('projects.list.yearSuffix')}
                </span>
              </div>

              {/* Card Meta Content details info body */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-5 sm:space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest font-mono text-[#C4A47C]">
                      {project.typeLabel[locale] || project.typeLabel.ru}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white uppercase tracking-tight group-hover:text-[#C4A47C] transition-colors">
                    {project.name[locale] || project.name.ru}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                    {project.description[locale] || project.description.ru}
                  </p>
                </div>

                {/* Grid stats specification mini card */}
                <div className="grid grid-cols-2 gap-4 bg-white/5 p-4 rounded-sm border border-white/5 text-xs">
                  {project.specs.slice(0, 4).map((spec, sidx) => (
                    <div key={sidx} className="space-y-0.5">
                      <span className="text-gray-500 block text-[10px] uppercase font-mono">{spec.label[locale] || spec.label.ru}</span>
                      <span className="text-gray-200 font-medium">{spec.value[locale] || spec.value.ru}</span>
                    </div>
                  ))}
                </div>

                {/* Link navigators */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[#C4A47C] font-mono text-xs font-semibold">{t('projects.list.priceOnRequest')}</span>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center space-x-2 bg-[#C4A47C] text-black hover:bg-white hover:text-black font-semibold text-[10px] tracking-widest uppercase px-5 py-3 rounded-sm transition-all cursor-pointer"
                  >
                    <span>{t('projects.list.detailsButton')}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white/[0.01] border border-white/5 p-8 rounded space-y-4">
          <p className="text-gray-400 text-sm font-light">{t('projects.list.emptyText')}</p>
          <button
            onClick={clearAllFilters}
            className="bg-[#C4A47C] text-black font-semibold uppercase px-6 py-3 text-xs tracking-wider rounded-sm transition-colors cursor-pointer"
          >
            {t('projects.list.resetAll')}
          </button>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
      {/* ================= HEADER SECTION ================= */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-4 sm:pt-8">
        <span className="text-xs uppercase tracking-widest text-[#C4A47C] font-mono">{t('projects.list.eyebrow')}</span>
        <h1 className="text-3xl sm:text-5xl font-bold font-heading uppercase text-white tracking-tight">{t('projects.list.title')}</h1>
        <p className="text-gray-400 text-sm font-light leading-relaxed">
          {t('projects.list.subtitle')}
        </p>
      </section>

      {/* Render the core filtering component within a safe Next/Suspense boundary */}
      <Suspense fallback={
        <div className="text-center py-24 text-gray-500 font-mono text-xs">
          {t('projects.list.loading')}
        </div>
      }>
        <ProjectsListContent />
      </Suspense>
    </div>
  );
}
