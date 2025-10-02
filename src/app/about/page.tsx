import React from 'react';
import FooterSection from '@/components/organisms/FooterSection';
import TestimonialsSlider from '@/components/organisms/TestimonialsSlider';
import AboutClient from './AboutClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - MenuMitra Team & Mission',
  description: 'Learn about MenuMitra\'s mission to revolutionize restaurant management. Meet our team of experts dedicated to transforming the food service industry with AI-powered digital solutions.',
  keywords: [
    'about menumitra',
    'restaurant management team',
    'digital menu company',
    'food service technology',
    'restaurant software team',
    'menu management experts',
    'restaurant innovation',
    'food tech company'
  ],
  openGraph: {
    title: 'About MenuMitra - Leading Restaurant Management Solutions',
    description: 'Discover MenuMitra\'s journey in revolutionizing restaurant management. Our expert team is committed to transforming the food service industry with cutting-edge AI technology.',
    url: 'https://menumitra.com/about',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Team - Restaurant Management Experts',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About MenuMitra - Restaurant Management Innovation',
    description: 'Meet the team behind MenuMitra\'s revolutionary restaurant management platform. Transforming food service with AI-powered digital solutions.',
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
};

const AboutPage: React.FC = () => {
  return <AboutClient />;
};

export default AboutPage;
