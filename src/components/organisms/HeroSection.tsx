'use client';

import Image from 'next/image';
import React from 'react';
import { SplitText, TargetCursor } from '@/components/reactbits';
import ActionButtonsSection from './ActionButtonsSection';
import MobileDeviceOverlay from '@/components/atoms/MobileDeviceOverlay';

const HeroSection: React.FC = () => {
  return (
    <section className="hero relative lg:pt-[240px] max-lg:pt-[120px] pb-[120px] overflow-hidden lg:overflow-visible border border-bottom ">
      {/* Background decoration - Desktop SVG graphs */}
      <div className="absolute top-0 left-0 w-full max-lg:hidden">
        <Image 
          src="/images/hero/hero-graph-top.svg" 
          alt="MenuMitra QR menu analytics dashboard background" 
          width={1612} 
          height={520} 
          className="w-full h-auto opacity-50"
          priority
        />
      </div>
      
      {/* Background decoration - Mobile SVG graphs */}
      <div className="absolute top-0 left-0 w-full lg:hidden">
        <Image 
          src="/images/hero/hero-graph-top.svg" 
          alt="MenuMitra QR menu analytics dashboard mobile background" 
          width={375} 
          height={520} 
          className="w-full h-auto opacity-50"
          priority
        />
      </div>
      
      {/* Bottom background decoration - Desktop */}
      <div className="absolute bottom-0 left-0 w-full max-lg:hidden">
        <Image 
          src="/images/hero/hero-graph-bottom.svg" 
          alt="MenuMitra restaurant analytics data visualization background" 
          width={1920} 
          height={444} 
          className="w-full h-auto opacity-30"
        />
      </div>
      
      {/* Bottom background decoration - Mobile */}
      <div className="absolute bottom-0 left-0 w-full lg:hidden">
        <Image 
          src="/images/hero/hero-graph-bottom.svg" 
          alt="MenuMitra restaurant analytics data visualization mobile background" 
          width={375} 
          height={444} 
          className="w-full h-auto opacity-30"
        />
      </div>
      
      <div className="container">
        <div className="grid grid-cols-12 gap-5 items-end relative z-10">
          {/* Text Content - More columns */}
          <div className="max-md:col-span-full md:col-span-8 lg:col-span-9 max-md:mb-8">
            <p className="mb-4 md:mb-6 lg:mb-8 font-medium uppercase text-base md:text-lg lg:text-xl">Join 15,000+ Restaurants Using MenuMitra</p>
            <h1 className="mb-8 md:mb-10 lg:mb-12">
              <SplitText 
                text="Boost Sales" 
                delay={0.2} 
                duration={0.8} 
                className="block" 
                fontWeight="font-black"
                fontSize="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                textColor="text-primary"
                letterSpacing="tracking-tight"
                lineHeight="leading-tight"
              />
              <SplitText 
                text="with Smart QR Menus" 
                delay={0.8} 
                duration={0.8} 
                className="block" 
                fontWeight="font-black"
                fontSize="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                textColor="text-gray-900"
                letterSpacing="tracking-tight"
                lineHeight="leading-tight"
              />
              <SplitText 
                text="& Real-time Insights" 
                delay={1.2} 
                duration={0.8} 
                className="block" 
                fontWeight="font-black"
                fontSize="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                textColor="text-primary"
                letterSpacing="tracking-tight"
                lineHeight="leading-tight"
              />
            </h1>
            <p className="mb-8 md:mb-10 lg:mb-12 text-base sm:text-lg md:text-xl lg:text-2xl max-w-full md:max-w-[590px] leading-relaxed">
              MenuMitra is the leading QR code menu solution for restaurants worldwide. Our digital menu platform creates contactless dining experiences, automates order management, and provides real-time sales insights. MenuMitra helps restaurants increase revenue through smart menu technology. Join 15,000+ restaurants already using MenuMitra to boost profits. Start your free MenuMitra trial today - see results quickly!
            </p>
          </div>
          
          {/* Right: visuals - Fewer columns */}
          <div className="md:col-span-4 lg:col-span-4 relative md:z-10">
            {/* Background blur effects */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex -z-10 max-md:hidden">
              <div className="max-lg:hidden max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
              <div className="max-lg:w-[335px] max-1xl:h-[335px] max-1xl:blur-[80px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/25 -ml-[170px] -mt-150 max-md:ml-0 blur-[145px]"></div>
              <div className="max-lg:hidden max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 -ml-[170px] blur-[145px]"></div>
            </div>
            
            {/* Mobile gradient background */}
            <div className="absolute left-1/2 -bottom-150 p-[350px] -translate-x-1/2 bg-contain w-full h-full bg-[url('/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"></div>
            
            <div className="w-full h-full">
              <div className="relative w-full h-full min-h-[200px] md:min-h-[400px] lg:min-h-[500px]">

          

                {/* PHONE_WRAPPER: Right end */}
                <div
                  className="
                    absolute
                    right-0 left-10 bottom-4 top-0
                    lg:right-0 lg:bottom-8
                    w-[300px] md:w-[240px] lg:w-[300px]
                    lg:aspect-auto
                    transform
                    max-md:left-20 max-md:-translate-x-1/2
                    max-md:top-20
                  "
                  style={{ zIndex: 20 }}
                >
                  <img
                    src="/images/payment/payment-hero-device2.png"
                    alt="MenuMitra mobile app interface"
                    className="cursor-target inline-block rounded-t-medium w-full h-auto shadow-lg"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
        <ActionButtonsSection />
      </div>
      
      {/* Target Cursor for interactive elements */}
      <TargetCursor 
        targetSelector=".cursor-target"
        spinDuration={2}
      />
    </section>
  );
};

export default HeroSection;