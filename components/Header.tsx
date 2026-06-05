'use client';

// Let's create components/Header.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Globe, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<'RU' | 'UZ' | 'EN'>('RU');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path changes with a deferred microtask to avoid cascading renders
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Главная' },
    { href: '/about', label: 'О компании' },
    { href: '/projects', label: 'Проекты' },
    { href: '/contact', label: 'Контакты' },
  ];

  const toggleLang = (selected: 'RU' | 'UZ' | 'EN') => {
    setLang(selected);
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#121214]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-lg'
            : 'bg-gradient-to-b from-[#121214]/80 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Branding Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="font-sans text-xl sm:text-2xl font-bold tracking-widest text-white flex items-center">
                EVRO
                <span className="text-[#C4A47C] font-light ml-1.5 border-l border-white/20 pl-2">PLAZA</span>
              </span>
            </Link>

            {/* Desktop Navigation Link Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-sans text-sm font-medium transition-all duration-200 relative py-1 hover:text-[#C4A47C] ${
                      isActive ? 'text-[#C4A47C]' : 'text-gray-300'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C4A47C]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Area */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Language Selection */}
              <div id="language-toggle" className="flex items-center space-x-1.5 text-xs font-mono text-gray-400 bg-white/5 px-2.5 py-1.5 rounded border border-white/10">
                <button
                  id="lang-ru"
                  onClick={() => toggleLang('RU')}
                  className={`hover:text-white transition-all cursor-pointer ${lang === 'RU' ? 'text-[#C4A47C] font-semibold' : ''}`}
                >
                  RU
                </button>
                <span className="text-white/20">·</span>
                <button
                  id="lang-uz"
                  onClick={() => toggleLang('UZ')}
                  className={`hover:text-white transition-all cursor-pointer ${lang === 'UZ' ? 'text-[#C4A47C] font-semibold' : ''}`}
                >
                  UZ
                </button>
                <span className="text-white/20">·</span>
                <button
                  id="lang-en"
                  onClick={() => toggleLang('EN')}
                  className={`hover:text-white transition-all cursor-pointer ${lang === 'EN' ? 'text-[#C4A47C] font-semibold' : ''}`}
                >
                  EN
                </button>
              </div>

              {/* Direct Call Center */}
              <a
                href="tel:+998712000000"
                className="flex items-center space-x-2 text-white/90 hover:text-[#C4A47C] transition-all text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-[#C4A47C]" />
                <span className="font-mono text-xs">+998 71 200-00-00</span>
              </a>

              {/* Consultation Button */}
              <Link
                href="/contact"
                className="bg-[#C4A47C] text-black px-5 py-2 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-100 transition-all duration-300 rounded-sm"
              >
                Связаться
              </Link>
            </div>

            {/* Mobile Actions Container (Burger & Language Toggle Mobile) */}
            <div className="flex md:hidden items-center space-x-4">
              <a
                href="tel:+998712000000"
                className="p-2 text-gray-300 hover:text-[#C4A47C] transition-colors"
                aria-label="Call"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                id="mobile-burger-btn"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 focus:outline-none focus:ring-1 focus:ring-white/10 rounded-sm"
                aria-label="Open Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 z-40 flex flex-col md:hidden pt-24 pb-6 px-6"
          >
            {/* Navigation options */}
            <nav className="flex flex-col space-y-5 text-xl font-medium mt-8">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between group py-2 border-b border-white/5 ${
                        isActive ? 'text-[#C4A47C]' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <span className="font-sans text-lg">{link.label}</span>
                      <span className="text-xs font-mono text-gray-500 group-hover:text-[#C4A47C] transition-colors">
                        0{idx + 1}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Mobile Footer Area */}
            <div className="mt-auto space-y-6">
              <div className="flex justify-center space-x-3 text-xs font-mono text-gray-400 bg-white/5 py-2.5 rounded border border-white/10">
                <button
                  onClick={() => toggleLang('RU')}
                  className={`px-3 hover:text-white ${lang === 'RU' ? 'text-[#C4A47C] font-semibold' : ''}`}
                >
                  RU
                </button>
                <span className="text-white/20">·</span>
                <button
                  onClick={() => toggleLang('UZ')}
                  className={`px-3 hover:text-white ${lang === 'UZ' ? 'text-[#C4A47C] font-semibold' : ''}`}
                >
                  UZ
                </button>
                <span className="text-white/20">·</span>
                <button
                  onClick={() => toggleLang('EN')}
                  className={`px-3 hover:text-white ${lang === 'EN' ? 'text-[#C4A47C] font-semibold' : ''}`}
                >
                  EN
                </button>
              </div>

              <div className="text-center font-mono space-y-2 text-[#C4A47C] text-sm">
                <a href="tel:+998712000000" className="block hover:underline">
                  +998 71 200 00 00
                </a>
                <span className="block text-gray-500 text-xs">info@evroplaza.uz</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
