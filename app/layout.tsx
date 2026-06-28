import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/lib/i18n/context';

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
  metadataBase: new URL('https://evroplaza.uz'),
  title: {
    default: 'EVRO PLAZA GROUP — Недвижимость и торговые центры в Самарканде',
    template: '%s | EVRO PLAZA GROUP',
  },
  description: 'EVRO PLAZA GROUP — девелопер жилой и коммерческой недвижимости в Самарканде. ЖК Avenue Plaza и торговый центр EVRO PLAZA.',
  keywords: 'EVRO PLAZA, Avenue Plaza, недвижимость Самарканд, купить квартиру Самарканд, ЖК Самарканд, торговый центр Самарканд, девелопер',
  authors: [{ name: 'EVRO PLAZA GROUP' }],
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'EVRO PLAZA GROUP',
    title: 'EVRO PLAZA GROUP — Недвижимость и торговые центры в Самарканде',
    description: 'Девелопер жилой и коммерческой недвижимости в Самарканде. ЖК Avenue Plaza и торговый центр EVRO PLAZA.',
    images: ['/projects/avenue-plaza/gallery11.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EVRO PLAZA GROUP — Недвижимость и торговые центры в Самарканде',
    description: 'Девелопер жилой и коммерческой недвижимости в Самарканде. ЖК Avenue Plaza и торговый центр EVRO PLAZA.',
    images: ['/projects/avenue-plaza/gallery11.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="bg-[#121214] text-gray-100 min-h-screen flex flex-col font-sans selection:bg-[#C4A47C]/30 selection:text-white overflow-x-hidden antialiased" suppressHydrationWarning>
        <LanguageProvider>
          <Header />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
