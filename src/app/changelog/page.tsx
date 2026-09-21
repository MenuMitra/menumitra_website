import type { Metadata } from 'next';
import ChangelogHero from '@/components/changelog/ChangelogHero';
import ChangelogClient from '@/components/changelog/ChangelogClient';
import FooterSection from '@/components/organisms/FooterSection';
import { website } from '@/config/contact';

export const metadata: Metadata = {
  title: 'Changelog | MenuMitra Product Release Notes',
  description:
    'Explore the latest features, updates, and performance improvements across MenuMitra POS, Mobile App, and Kitchen Display System starting from version 2.3.0.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Changelog | MenuMitra Product Release Notes',
    description:
      'Explore the latest features, updates, and performance improvements across MenuMitra POS, Mobile App, and Kitchen Display System starting from version 2.3.0.',
    url: `${website.base}/changelog`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Changelog | MenuMitra Product Release Notes',
    description:
      'Explore the latest features, updates, and performance improvements across MenuMitra POS, Mobile App, and Kitchen Display System starting from version 2.3.0.',
  },
  alternates: {
    canonical: `${website.base}/changelog`,
  },
};

export default function ChangelogPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'MenuMitra Changelog',
    description:
      'Release history and changelog for MenuMitra POS, Mobile App, and Kitchen Display System.',
    url: `${website.base}/changelog`,
    publisher: {
      '@type': 'Organization',
      name: 'MenuMitra',
      url: website.base,
    },
    inLanguage: 'en',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-white">
        <ChangelogHero />
        <ChangelogClient />
      </main>
      <FooterSection />
    </>
  );
}
