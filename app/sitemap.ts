import type { MetadataRoute } from 'next';
import { projectsData } from '@/lib/projectsData';

const baseUrl = 'https://evroplaza.uz';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/projects`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.5 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
