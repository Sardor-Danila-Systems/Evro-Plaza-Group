import type { Metadata } from 'next';
import ContactClient from './ContactClient';

const title = 'Контакты';
const description = 'Офис продаж EVRO PLAZA GROUP в Самарканде: ул. Минская, 98 (район Рухобод). Телефон +998 88 000-00-10, email info@evroplaza.uz.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title,
    description,
    url: '/contact',
  },
  twitter: {
    title,
    description,
  },
};

export default function Contact() {
  return <ContactClient />;
}
