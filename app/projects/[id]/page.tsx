import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projectsData } from '@/lib/projectsData';
import ProjectDetailClient from './ProjectDetailClient';

const siteUrl = 'https://evroplaza.uz';

export function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return { title: 'Проект не найден' };
  }

  const title = project.name.ru;
  const description = project.description.ru;

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      title,
      description,
      url: `/projects/${project.id}`,
      images: [{ url: project.heroImage, width: 1600, height: 900, alt: title }],
    },
    twitter: {
      title,
      description,
      images: [project.heroImage],
    },
  };
}

export default async function SingleProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': project.type === 'commercial' ? 'ShoppingCenter' : 'ApartmentComplex',
    name: project.name.ru,
    description: project.description.ru,
    image: `${siteUrl}${project.heroImage}`,
    url: `${siteUrl}/projects/${project.id}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: project.city,
      addressCountry: 'UZ',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Проекты', item: `${siteUrl}/projects` },
      { '@type': 'ListItem', position: 3, name: project.name.ru, item: `${siteUrl}/projects/${project.id}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProjectDetailClient id={id} />
    </>
  );
}
