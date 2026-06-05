import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EVRO PLAZA GROUP — Премиальная недвижимость в Узбекистане',
  description: 'EVRO PLAZA GROUP — девелопер премиальной жилой и коммерческой недвижимости в Узбекистане. Создаем новые архитектурные ориентиры будущего.',
  keywords: 'EVRO PLAZA, Evro Plaza Group, элитное жилье, купить квартиру Ташкент, коммерческая недвижимость, премиум-класс, Tashkent City, девелопер',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏰</text></svg>" />
      </head>
      <body className="bg-[#121214] text-gray-100 min-h-screen flex flex-col font-sans selection:bg-[#C4A47C]/30 selection:text-white overflow-x-hidden antialiased" suppressHydrationWarning>
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
