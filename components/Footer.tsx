'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Space as Clock, ArrowUp, Send, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121214] text-gray-300 pt-16 pb-8 border-t border-white/5 relative z-10">
      {/* Decorative architectural grid element lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.01] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/5">
          {/* Logo & Brand description */}
          <div className="space-y-4">
            <span className="font-sans text-2xl font-bold tracking-widest text-white flex items-center">
              EVRO
              <span className="text-[#C4A47C] font-light ml-1.5 border-l border-white/20 pl-2">PLAZA</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed antialiased">
              Девелопер премиальной жилой и коммерческой недвижимости. Создаем новые ориентиры будущего и эстетические стандарты в Узбекистане.
            </p>
            <div className="flex items-center space-x-3 pt-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/10 hover:border-[#C4A47C] hover:text-[#C4A47C] transition-all flex items-center justify-center bg-white/5 text-gray-400"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/10 hover:border-[#C4A47C] hover:text-[#C4A47C] transition-all flex items-center justify-center bg-white/5 text-gray-400"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/10 hover:border-[#C4A47C] hover:text-[#C4A47C] transition-all flex items-center justify-center bg-white/5 text-gray-400"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4 md:pl-6">
            <h4 className="text-white font-sans text-sm font-semibold uppercase tracking-wider">Навигация</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#C4A47C] transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C4A47C] transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#C4A47C] transition-colors">
                  Портфолио проектов
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C4A47C] transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types / Highlights */}
          <div className="space-y-4">
            <h4 className="text-white font-sans text-sm font-semibold uppercase tracking-wider">Недвижимость</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/projects?type=residential" className="hover:text-[#C4A47C] transition-colors">
                  Премиальные жилые комплексы
                </Link>
              </li>
              <li>
                <Link href="/projects?type=commercial" className="hover:text-[#C4A47C] transition-colors">
                  Деловые и коммерческие центры
                </Link>
              </li>
              <li>
                <Link href="/projects?type=villas" className="hover:text-[#C4A47C] transition-colors">
                  Закрытые клубные виллы
                </Link>
              </li>
              <li>
                <Link href="/projects?status=completed" className="hover:text-[#C4A47C] transition-colors">
                  Реализованные проекты
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Contacts */}
          <div className="space-y-4 text-sm">
            <h4 className="text-white font-sans text-sm font-semibold uppercase tracking-wider">Отдел продаж</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C4A47C] mt-0.5 shrink-0" />
                <span>Ташкент, ул. Амира Темура, д. 1</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#C4A47C] shrink-0" />
                <a href="tel:+998712000000" className="hover:text-white transition-colors font-mono">
                  +998 71 200-00-00
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#C4A47C] shrink-0" />
                <a href="mailto:info@evroplaza.uz" className="hover:text-white transition-colors">
                  info@evroplaza.uz
                </a>
              </li>
              <li className="text-xs text-gray-500 pt-1">
                График работы: Пн – Сб, 09:00 – 19:00 (Офис продаж)
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom metadata */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} EVRO PLAZA GROUP. Все права защищены.</span>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Условия использования
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-white/5 hover:bg-white/10 hover:text-[#C4A47C] border border-white/10 p-2.5 rounded transition-all cursor-pointer flex items-center justify-center"
            title="Вернуться наверх"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
