'use client';

import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';
import { useTranslation } from '@/lib/i18n/useTranslation';
import ParallaxImage from '@/components/ParallaxImage';

const branchData = {
  phones: ['+998 88 000-00-10'],
  email: 'info@evroplaza.uz',
  mapImage: '/projects/avenue-plaza/gallery1.jpg',
};

export default function ContactClient() {
  const { t } = useTranslation();
  const branch = {
    ...branchData,
    title: t('contact.branchTitle'),
    address: t('contact.address'),
    hours: t('contact.hours'),
  };

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">

      {/* ================= HEADER SECTION ================= */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center space-y-4 max-w-3xl mx-auto pt-4 sm:pt-8"
      >
        <span className="text-xs uppercase tracking-widest text-[#C4A47C] font-mono">{t('contact.eyebrow')}</span>
        <h1 className="text-3xl sm:text-5xl font-bold font-heading uppercase text-white tracking-tight">{t('contact.title')}</h1>
        <p className="text-gray-400 text-sm font-light leading-relaxed">
          {t('contact.subtitle')}
        </p>
      </motion.section>

      {/* ================= MAIN INTERACTIVE BODY (OFFICE VS MAP) ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

        {/* Branch detail column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-6 sm:space-y-8 flex flex-col justify-between"
        >
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-widest text-[#C4A47C] font-semibold">{t('contact.officeLabel')}</h3>

            <div className="space-y-6 bg-white/[0.01] border border-white/5 p-6 sm:p-8 rounded-sm">
              <h4 className="text-white text-base sm:text-lg font-bold font-heading uppercase tracking-tight">
                {branch.title}
              </h4>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-[#C4A47C] mt-0.5 shrink-0" />
                  <span>{branch.address}</span>
                </div>

                <div className="flex items-start space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-[#C4A47C] mt-0.5 shrink-0" />
                  <div className="space-y-1 font-mono">
                    {branch.phones.map((phone, pidx) => (
                      <a key={pidx} href={`tel:${phone.replace(/\s+/g, '')}`} className="block hover:text-[#C4A47C] transition-colors">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-[#C4A47C] mt-0.5 shrink-0" />
                  <a href={`mailto:${branch.email}`} className="hover:text-[#C4A47C] transition-colors">
                    {branch.email}
                  </a>
                </div>

                <div className="flex items-start space-x-3 text-gray-300">
                  <Clock className="w-5 h-5 text-[#C4A47C] mt-0.5 shrink-0" />
                  <span>{branch.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick legal/corporate parameters card footer */}
          <div className="bg-white/5 border border-white/5 p-5 sm:p-6 rounded-sm text-xs space-y-2">
            <span className="text-[#C4A47C] font-mono font-bold block uppercase text-[10px]">{t('contact.noteLabel')}</span>
            <p className="text-gray-400 font-light leading-relaxed">
              {t('contact.noteText')}
            </p>
          </div>
        </motion.div>

        {/* Architectural Location map mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[350px] rounded-sm overflow-hidden border border-white/5 shadow-2xl flex flex-col justify-end"
        >
          <ParallaxImage
            src={branch.mapImage}
            alt="Office Location Abstract Art style map"
            containerClassName="absolute inset-0 h-full w-full"
            imageClassName="opacity-35"
            strength={25}
          />
          {/* Aesthetic map overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />

          <div className="absolute inset-4 border border-dashed border-[#C4A47C]/20 rounded-sm pointer-events-none" />

          {/* Custom vector representation mock pin */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-black border border-[#C4A47C] text-[#C4A47C] rounded-full flex items-center justify-center shadow-2xl mx-auto animate-bounce">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="bg-black/95 border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-semibold text-white uppercase tracking-wider shadow">
                {t('contact.mapPin')}
              </span>
            </div>
          </div>

          <div className="relative p-5 sm:p-8 z-10 m-3 sm:m-4 bg-black/90 border border-white/10 rounded-sm max-w-sm">
            <p className="text-[#C4A47C] font-mono text-xs uppercase tracking-wider font-semibold mb-1">{t('contact.directionsLabel')}</p>
            <p className="text-gray-300 text-xs font-light leading-relaxed">
              {t('contact.directionsText')}
            </p>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
