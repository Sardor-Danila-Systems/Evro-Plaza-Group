import type { Metadata } from 'next';
import HomeClient from './HomeClient';

const title = 'EVRO PLAZA GROUP — Недвижимость и торговые центры в Самарканде';
const description = 'EVRO PLAZA GROUP — девелопер жилой и коммерческой недвижимости в Самарканде. ЖК Avenue Plaza премиум-класса и действующий торговый центр EVRO PLAZA.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    url: '/',
    images: [{ url: '/projects/avenue-plaza/gallery11.jpg', width: 1600, height: 900, alt: 'Avenue Plaza — жилой комплекс в Самарканде' }],
  },
  twitter: {
    title,
    description,
    images: ['/projects/avenue-plaza/gallery11.jpg'],
  },
};

export default function Home() {
  return <HomeClient />;
}
