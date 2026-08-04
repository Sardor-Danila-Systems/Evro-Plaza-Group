import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
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

const siteUrl = 'https://evroplaza.uz';
const defaultTitle = 'EVRO PLAZA GROUP — Недвижимость и торговые центры в Самарканде';
const defaultDescription = 'EVRO PLAZA GROUP — девелопер жилой и коммерческой недвижимости в Самарканде. ЖК Avenue Plaza премиум-класса и действующий торговый центр EVRO PLAZA.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: '%s | EVRO PLAZA GROUP',
  },
  description: defaultDescription,
  keywords: 'EVRO PLAZA, Avenue Plaza, недвижимость Самарканд, купить квартиру Самарканд, ЖК Самарканд, новостройки Самарканд, торговый центр Самарканд, девелопер Самарканд',
  authors: [{ name: 'EVRO PLAZA GROUP' }],
  creator: 'EVRO PLAZA GROUP',
  publisher: 'EVRO PLAZA GROUP',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteUrl,
    siteName: 'EVRO PLAZA GROUP',
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: '/projects/avenue-plaza/gallery11.jpg', width: 1600, height: 900, alt: 'Avenue Plaza — жилой комплекс в Самарканде' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/projects/avenue-plaza/gallery11.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'FOf8GEywQw2dHNfkmPEC0221dswEWOGp88jlUoA7OI4',
  },
  category: 'real estate',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'EVRO PLAZA GROUP',
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  image: `${siteUrl}/projects/avenue-plaza/gallery11.jpg`,
  description: defaultDescription,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ул. Минская, 98',
    addressLocality: 'Самарканд',
    addressRegion: 'Самаркандская область',
    postalCode: '141500',
    addressCountry: 'UZ',
  },
  telephone: '+998880000010',
  email: 'info@evroplaza.uz',
  areaServed: {
    '@type': 'City',
    name: 'Самарканд',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="bg-[#121214] text-gray-100 min-h-screen flex flex-col font-sans selection:bg-[#C4A47C]/30 selection:text-white overflow-x-hidden antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LanguageProvider>
          <Loader />
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
