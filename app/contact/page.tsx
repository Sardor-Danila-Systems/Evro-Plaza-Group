'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';

export default function Contact() {
  const [selectedBranch, setSelectedBranch] = useState<'tashkent' | 'samarkand'>('tashkent');

  const branches = {
    tashkent: {
      title: 'Главный офис продаж (Ташкент)',
      address: 'Узбекистан, г. Ташкент, Мирабадский район, ул. Амира Темура, д. 1',
      phones: ['+998 71 200-00-00', '+998 71 200-11-11'],
      email: 'tashkent@evroplaza.uz',
      hours: 'Пн – Сб: 09:00 – 19:00, Вс: Выходной',
      mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80',
    },
    samarkand: {
      title: 'Региональный офис (Самарканд)',
      address: 'Узбекистан, г. Самарканд, набережная реки Сиаб, ул. Дагбитская, д. 24',
      phones: ['+998 66 300-00-00', '+998 71 200-00-00'],
      email: 'samarkand@evroplaza.uz',
      hours: 'Пн – Сб: 09:00 – 18:00, Вс: Выходной',
      mapImage: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80',
    }
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* ================= HEADER SECTION ================= */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-8">
        <span className="text-xs uppercase tracking-widest text-[#C4A47C] font-mono">Контакты и Офисы / EVRO PLAZA</span>
        <h1 className="text-3xl sm:text-5xl font-bold font-heading uppercase text-white tracking-tight">Свяжитесь с Нами</h1>
        <p className="text-gray-400 text-sm font-light leading-relaxed">
          Запишитесь на визит в наши демонстрационные залы, закажите буклет с планировками или напрямую свяжитесь с дежурным руководителем отдела продаж.
        </p>
      </section>

      {/* ================= MAIN INTERACTIVE BODY (OFFICES VS MAP) ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Dynamic Branch selector detail column */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-widest text-[#C4A47C] font-semibold">Выберите филиал</h3>
            
            {/* Quick switcher buttons */}
            <div className="flex p-1 bg-white/5 border border-white/5 rounded-sm">
              <button
                onClick={() => setSelectedBranch('tashkent')}
                className={`flex-1 text-center py-3 text-xs uppercase tracking-widest font-semibold transition-all focus:outline-none cursor-pointer ${
                  selectedBranch === 'tashkent' ? 'bg-[#C4A47C] text-black rounded-sm' : 'text-gray-400 hover:text-white'
                }`}
              >
                Ташкент
              </button>
              <button
                onClick={() => setSelectedBranch('samarkand')}
                className={`flex-1 text-center py-3 text-xs uppercase tracking-widest font-semibold transition-all focus:outline-none cursor-pointer ${
                  selectedBranch === 'samarkand' ? 'bg-[#C4A47C] text-black rounded-sm' : 'text-gray-400 hover:text-white'
                }`}
              >
                Самарканд
              </button>
            </div>

            {/* Selected Branch detail lines list */}
            <motion.div
              key={selectedBranch}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 bg-white/[0.01] border border-white/5 p-6 sm:p-8 rounded-sm"
            >
              <h4 className="text-white text-base sm:text-lg font-bold font-heading uppercase tracking-tight">
                {branches[selectedBranch].title}
              </h4>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-[#C4A47C] mt-0.5 shrink-0" />
                  <span>{branches[selectedBranch].address}</span>
                </div>

                <div className="flex items-start space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-[#C4A47C] mt-0.5 shrink-0" />
                  <div className="space-y-1 font-mono">
                    {branches[selectedBranch].phones.map((phone, pidx) => (
                      <a key={pidx} href={`tel:${phone.replace(/\s+/g, '')}`} className="block hover:text-[#C4A47C] transition-colors">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-[#C4A47C] mt-0.5 shrink-0" />
                  <a href={`mailto:${branches[selectedBranch].email}`} className="hover:text-[#C4A47C] transition-colors">
                    {branches[selectedBranch].email}
                  </a>
                </div>

                <div className="flex items-start space-x-3 text-gray-300">
                  <Clock className="w-5 h-5 text-[#C4A47C] mt-0.5 shrink-0" />
                  <span>{branches[selectedBranch].hours}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick legal/corporate parameters card footer */}
          <div className="bg-white/5 border border-white/5 p-5 sm:p-6 rounded-sm text-xs space-y-2">
            <span className="text-[#C4A47C] font-mono font-bold block uppercase text-[10px]">Важное примечание:</span>
            <p className="text-gray-400 font-light leading-relaxed">
              Для посещения строительных участков в целях безопасности обязательно требуется закрытая обувь. Посещения согласуются за 24 часа. Снаряжение (каски, светоотражающие жилеты) выдаются в Офисе.
            </p>
          </div>
        </div>

        {/* Dynamic Architectural Location map mockup */}
        <div className="lg:col-span-7 relative min-h-[350px] rounded-sm overflow-hidden border border-white/5 shadow-2xl flex flex-col justify-end">
          <Image
            src={branches[selectedBranch].mapImage}
            alt="Office Location Abstract Art style map"
            fill
            className="object-cover opacity-35"
            referrerPolicy="no-referrer"
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
                {selectedBranch === 'tashkent' ? 'Мирабадский р-н, у метро Космонавтов' : 'Набережная р. Сиаб'}
              </span>
            </div>
          </div>

          <div className="relative p-6 sm:p-8 z-10 m-4 bg-black/90 border border-white/10 rounded-sm max-w-sm">
            <p className="text-[#C4A47C] font-mono text-xs uppercase tracking-wider font-semibold mb-1">Как добраться</p>
            <p className="text-gray-300 text-xs font-light leading-relaxed">
              Наш головной офис в Ташкенте имеет удобный въезд со стороны проспекта Шарафа Рашидова, предусмотрен закрытый подземный гостевой паркинг для клиентов.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
