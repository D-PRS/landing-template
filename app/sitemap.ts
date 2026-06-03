import type { MetadataRoute } from 'next'
import { FORMATIONS } from './data/formations'

const SITE_URL = 'https://provisual.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: { path: string; priority: number; freq: 'weekly' | 'monthly' | 'yearly' }[] = [
    { path: '', priority: 1.0, freq: 'weekly' },
    { path: '/service-marketing', priority: 0.9, freq: 'monthly' },
    { path: '/service-data-analytics', priority: 0.9, freq: 'monthly' },
    { path: '/e-books', priority: 0.9, freq: 'monthly' },
    { path: '/a-propos', priority: 0.7, freq: 'monthly' },
    { path: '/contact', priority: 0.7, freq: 'monthly' },
    { path: '/mentions-legales', priority: 0.2, freq: 'yearly' },
    { path: '/cgu', priority: 0.2, freq: 'yearly' },
  ]

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }))

  const formationPages: MetadataRoute.Sitemap = FORMATIONS.map((f) => ({
    url: `${SITE_URL}/formations/${f.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...formationPages]
}
