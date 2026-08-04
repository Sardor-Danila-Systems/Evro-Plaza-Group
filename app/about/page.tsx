import type { Metadata } from 'next';
import AboutClient from './AboutClient';

const title = 'О компании';
const description = 'EVRO PLAZA GROUP — девелопер жилой и коммерческой недвижимости в Самарканде. История компании, ценности и подход к строительству ЖК Avenue Plaza и торгового центра EVRO PLAZA.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title,
    description,
    url: '/about',
    images: [{ url: '/projects/evro_plaza/hero.jpg', width: 1600, height: 900, alt: 'EVRO PLAZA GROUP' }],
  },
  twitter: {
    title,
    description,
    images: ['/projects/evro_plaza/hero.jpg'],
  },
};

export default function About() {
  return <AboutClient />;
}
