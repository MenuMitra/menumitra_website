'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import FooterSection from '@/components/organisms/FooterSection';
import TestimonialsSlider from '@/components/organisms/TestimonialsSlider';
import { useAOS } from '@/hooks/useAOS';
import { Clock, Shield, TrendingUp } from 'lucide-react';

const AboutClient: React.FC = () => {
  const { refreshAOS } = useAOS();
  
  useEffect(() => {
    // Refresh AOS when component mounts to ensure animations work on first load
    const timer = setTimeout(() => {
      refreshAOS();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [refreshAOS]);
  
  return (
    <>
      <section className="hero  overflow-hidden relative max-lg:pt-150 pt-[240px] pb-[60px] z-40">
  <div className="container">
    <div
      className="max-w-[948px] mx-auto text-center"
      data-aos="fade-up"
      data-aos-offset={200}
      data-aos-duration={300}
      data-aos-once="true"
    >
      <p className="section-tagline">About MenuMitra</p>
      <h1 className="max-lg:mb-4 mb-8">
        Managing a restaurant should be as effortless as serving a great meal
      </h1>
      <p className="max-lg:mb-6 mb-11">
        At MenuMitra, we built a smart, all-in-one POS and order management system designed for restaurants, cafés, bakeries, food courts, and cloud kitchens. From QR-based menus and scan-to-order to billing, inventory, staff, vendor, and report management—MenuMitra simplifies the entire workflow, so owners can focus on what truly matters: delighting their customers.
      </p>
    </div>
  </div>
</section>

<section className="bg-white max-md:py-20 relative ">
  <div className="container relative">
    <div className="text-center max-w-[550px] mx-auto mb-16">
      <p className="section-tagline">Our Journey</p>
      <h2>From disconnected tools to seamless restaurant management</h2>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="max-lg:order-2">
        <div className="relative pt-150 lg:py-150 lg:px-150">
          <div className="w-[250px] lg:w-[300px] aspect-video relative mx-auto">
            <Image src="/images/solution/solution.png" alt="vision image" width={300} height={169} className="" />
            <div className="absolute left-10 -top-[130px] lg:-top-[185px] lg:left-15 right-auto bottom-auto w-[250px] h-[150px] lg:w-[280px] lg:h-[180px] xl:w-[320px] xl:h-[230px]" data-aos="fade-left" data-aos-offset={200} data-aos-duration={1000} data-aos-once="true" suppressHydrationWarning>
              <Image src="/images/solution/solution-shape1.png" alt="vision image" width={320} height={230} className="w-full" />
            </div>
            <div className="absolute right-12 top-12 lg:right-20 left-auto bottom-auto w-[280px] h-[190px] lg:w-[320px] lg:h-[230px] xl:w-[368px] xl:h-[280px]" data-aos="fade-up" data-aos-offset={200} data-aos-duration={1000} data-aos-delay={100} data-aos-once="true" suppressHydrationWarning>
              <Image src="/images/solution/solution-shape2.png" alt="vision image" width={368} height={280} className="w-full" />
            </div>
            <div className="absolute left-[175px] -bottom-[70px] lg:-bottom-[86px] lg:left-[200px] right-auto top-auto w-[150px] lg:w-[170px] aspect-video" data-aos="fade-left" data-aos-offset={200} data-aos-duration={1000} data-aos-delay={200} data-aos-once="true" suppressHydrationWarning>
              <Image src="/images/solution/solution-shape3.png" alt="vision image" width={170} height={96} className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-lg:order-1 lg:-mt-15">
        <p className="section-tagline">Our Vision</p>
        <h2 className="max-lg:mb-4 mb-8">
          Building the future of dining technology in India
        </h2>
        <p className="max-lg:mb-6 mb-11">
          We're not just building software—we're building the future of dining technology in India. With real-time analytics, cloud-first infrastructure, and 24/7 support, MenuMitra is committed to empowering every restaurant, big or small, to run smarter, faster, and more profitably. Because when restaurants grow, communities thrive. And MenuMitra is here to be their trusted partner in that journey.
        </p>
        <ul className="max-lg:mb-6 mb-14 flex max-md:flex-col max-md:gap-y-5 lg:items-center lg:[&>*:not(:last-child)]:mr-10 ">
          <li className="relative flex items-center gap-x-2 ">
            <svg ref={undefined} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-qr-code w-10 h-10 text-paragraph" aria-hidden="true">
              <rect width="5" height="5" x="3" y="3" rx="1" />
              <rect width="5" height="5" x="16" y="3" rx="1" />
              <rect width="5" height="5" x="3" y="16" rx="1" />
              <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
              <path d="M21 21v.01" />
              <path d="M12 7v3a2 2 0 0 1-2 2H7" />
              <path d="M3 12h.01" />
              <path d="M12 3h.01" />
              <path d="M12 16v.01" />
              <path d="M16 12h1" />
            </svg>
            <span className="font-jakarta_sans font-medium">All-in-One POS</span>
          </li>
          <li className="relative flex items-center gap-x-2 ">
            <svg ref={undefined} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-column w-10 h-10 text-paragraph" aria-hidden="true">
              <path d="M3 3v16a2 2 0 0 0 2 2h16" />
              <path d="M18 17V9" />
              <path d="M13 17V5" />
              <path d="M8 17v-3" />
            </svg>
            <span className="font-jakarta_sans font-medium">Real-time Analytics</span>
          </li>
          <li className="relative flex items-center gap-x-2 ">
            <svg ref={undefined} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package w-10 h-10 text-paragraph" aria-hidden="true">
              <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
              <path d="M12 22V12" />
              <polyline points="3.29 7 12 12 20.71 7" />
              <path d="m7.5 4.27 9 5.15" />
            </svg>
            <span className="font-jakarta_sans font-medium">24/7 Support</span>
          </li>
        </ul>
        <a href="/contact" className="btn-outline">Explore MenuMitra →</a>
      </div>
    </div>
  </div>
</section>

<section className="bg-white max-md:py-20 py-50 relative ">
  <div className="container relative">
    <div className="text-center max-w-[550px] mx-auto mb-16">
      <p className="section-tagline">Our Journey</p>
      <h2>MenuMitra started with a simple observation: restaurants spend too much time juggling disconnected tools</h2>
    </div>
    <div className="text-center max-w-4xl mx-auto">
      <p className="text-lg text-gray-600 mb-8">
        We set out to change that by creating a seamless platform where every piece—POS, Owner App, Customer App, and Captain/Waiter App—works in perfect sync.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Today, MenuMitra powers hundreds of food businesses across India, helping them save time, reduce errors, boost sales, and deliver better dining experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-medium p-8 shadow-nav" data-aos="fade-up" data-aos-offset={200} data-aos-duration={1000} data-aos-once="true">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">Save Time</h3>
          <p className="text-paragraph text-center text-sm">
            Streamlined operations with integrated tools
          </p>
        </div>
        
        <div className="bg-white rounded-medium p-8 shadow-nav" data-aos="fade-up" data-aos-offset={200} data-aos-duration={1000} data-aos-delay={100} data-aos-once="true">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">Reduce Errors</h3>
          <p className="text-paragraph text-center text-sm">
            Automated processes minimize mistakes
          </p>
        </div>
        
        <div className="bg-white rounded-medium p-8 shadow-nav" data-aos="fade-up" data-aos-offset={200} data-aos-duration={1000} data-aos-delay={200} data-aos-once="true">
          <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <TrendingUp className="w-10 h-10 text-orange-600" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">Boost Sales</h3>
          <p className="text-paragraph text-center text-sm">
            Data-driven insights increase revenue
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<TestimonialsSlider />
<FooterSection />
    </>
  );
};

export default AboutClient;
