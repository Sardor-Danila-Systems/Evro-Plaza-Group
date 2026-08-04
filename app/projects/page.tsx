import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

const title = 'Проекты';
const description = 'Каталог проектов EVRO PLAZA GROUP в Самарканде: жилой комплекс премиум-класса Avenue Plaza и торговый центр EVRO PLAZA.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title,
    description,
    url: '/projects',
    images: [{ url: '/projects/avenue-plaza/gallery11.jpg', width: 1600, height: 900, alt: 'Проекты EVRO PLAZA GROUP' }],
  },
  twitter: {
    title,
    description,
    images: ['/projects/avenue-plaza/gallery11.jpg'],
  },
};

export default function Projects() {
  return <ProjectsClient />;
}
