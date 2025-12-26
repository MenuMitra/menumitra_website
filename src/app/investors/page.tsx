import React from 'react';
import FooterSection from '@/components/organisms/FooterSection';
import InvestorStatsSection from '@/components/organisms/InvestorStatsSection';
import OutletsSection from '@/components/organisms/OutletsSection';
import RefetchButton from '@/components/organisms/RefetchButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Investors - MenuMitra",
  description: "Information for investors interested in MenuMitra's restaurant management platform.",
  keywords: [
    "investors",
    "MenuMitra investors",
    "investment opportunity",
    "restaurant technology investment",
    "startup investment"
  ],
  
  openGraph: {
    title: "Investors - MenuMitra",
    description: "Information for investors interested in MenuMitra's restaurant management platform.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Investors',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Investors - MenuMitra",
    description: "Information for investors interested in MenuMitra's restaurant management platform.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
};

const InvestorsPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero overflow-hidden relative max-lg:pt-150 pt-[240px] pb-[60px] z-40">
        <div className="container">
          <div className="max-w-[948px] mx-auto text-center relative">
            <RefetchButton className="!absolute !top-0 !right-0" />
            <p className="mb-4 font-medium uppercase">Investors</p>
            <h1 className="max-lg:mb-10 mb-10">
              Investor Relations
            </h1>
            <p className="max-lg:mb-10 mb-12 max-w-[590px] mx-auto">
              Discover the impressive growth and impact of MenuMitra&apos;s restaurant management platform. 
              Explore our comprehensive statistics and see why we&apos;re revolutionizing the food service industry.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <InvestorStatsSection />

      {/* Outlets Section */}
      <OutletsSection />

      <FooterSection />
    </>
  );
};

export default InvestorsPage;

