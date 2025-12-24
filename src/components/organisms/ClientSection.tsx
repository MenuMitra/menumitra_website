'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import GraphBackground from '@/components/atoms/GraphBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCashRegister, 
  faShoppingCart, 
  faQrcode, 
  faChartBar, 
  faBoxes 
} from '@fortawesome/free-solid-svg-icons';
import { 
  Smartphone, 
  ShoppingCart, 
  Zap, 
  Package, 
  TrendingUp, 
  MapPin, 
  BarChart3, 
  Utensils, 
  DollarSign, 
  Wrench, 
  GraduationCap, 
  Rocket 
} from 'lucide-react';

const ClientSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  useEffect(() => {
    // Marquee animation setup - duplicate elements for infinite scroll
    const marqueeContent = document.querySelector('.marquee-content');
    if (marqueeContent) {
      const elementsDisplayed = getComputedStyle(document.documentElement).getPropertyValue('--marquee-elements-displayed');
      const marqueeElements = marqueeContent.children.length;
      
      // Set CSS variable for number of elements
      document.documentElement.style.setProperty('--marquee-elements', marqueeElements.toString());
      
      // Duplicate elements for seamless loop
      for (let i = 0; i < parseInt(elementsDisplayed); i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
      }
    }
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section className=" bg-white overflow-hidden relative pb-150 max-md:pb-20 pt-[140px]">
  <div className="container relative z-10">
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 1xl:gap-x-24 items-center">
      <div className="relative flex max-md:justify-center justify-end items-center">
        <Image
          src="/images/crypto/aboutCrypto12.png"
          alt="MenuMitra platform shape"
          width={420}
          height={420}
          className="max-w-[250px] lg:max-w-[320px] xl:max-w-[420px]"
          data-aos="fade-up"
          data-aos-offset={200}
          data-aos-duration={400}
          data-aos-once="true"
          suppressHydrationWarning
        />
        <div
          className="absolute left-0 right-auto bottom-8 top-auto max-w-[180px] md:max-w-[250px] xl:max-w-[344px] drop-shadow-xl"
          data-aos="fade-right"
          data-aos-offset={200}
          data-aos-duration={400}
          data-aos-once="true"
          suppressHydrationWarning
        >
          <Image
            src="/images/crypto/aboutCrypto-shape-MM.png"
            alt="MenuMitra platform shape"
            width={344}
            height={344}
            className=""
          />
        </div>
      </div>
      <div>
        <p className="section-tagline">ABOUT MENUMITRA</p>
        <h2 className="max-md:mb-4 mb-8">
          MenuMitra is the leading AI-powered digital menu platform for restaurants!
        </h2>
        <div className="bg-white rounded-[90px] shadow-box p-2.5 mb-8">
          <div className="border border-dashed rounded-large border-gray-100 p-2.5 h-full text-center ">
            <ul className="flex overflow-auto items-center tabs gap-3">
              <li className={`group tab flex-1 basis-0 ${activeTab === 'tab1' ? 'tab-active' : ''}`}>
                <span 
                  onClick={() => handleTabClick('tab1')}
                  className={`block text-center w-full font-medium py-2 px-3 rounded-[60px] border border-borderColour-dark hover:bg-paragraph hover:text-white duration-500 hover:duration-500 transition-colors leading-[22px] cursor-pointer ${
                    activeTab === 'tab1' 
                      ? 'bg-paragraph text-white border-paragraph' 
                      : ''
                  }`}
                >
                  Menus
                </span>
              </li>
              <li className={`group tab flex-1 basis-0 ${activeTab === 'tab2' ? 'tab-active' : ''}`}>
                <span 
                  onClick={() => handleTabClick('tab2')}
                  className={`block text-center w-full font-medium py-2 px-3 rounded-[60px] border border-borderColour-dark hover:bg-paragraph hover:text-white duration-500 hover:duration-500 transition-colors leading-[22px] cursor-pointer ${
                    activeTab === 'tab2' 
                      ? 'bg-paragraph text-white border-paragraph' 
                      : ''
                  }`}
                >
                  Orders
                </span>
              </li>
              <li className={`group tab flex-1 basis-0 ${activeTab === 'tab3' ? 'tab-active' : ''}`}>
                <span 
                  onClick={() => handleTabClick('tab3')}
                  className={`block text-center w-full font-medium py-2 px-3 rounded-[60px] border border-borderColour-dark hover:bg-paragraph hover:text-white duration-500 hover:duration-500 transition-colors leading-[22px] cursor-pointer ${
                    activeTab === 'tab3' 
                      ? 'bg-paragraph text-white border-paragraph' 
                      : ''
                  }`}
                >
                  Analytics
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content">
          <div className={`${activeTab === 'tab1' ? 'tab-items-active' : 'hidden'}`}>
            <p className="max-md:mb-6 mb-8">
              Create stunning, contactless QR code menus that customers can access instantly. 
              No app downloads required - just scan and order. Transform your restaurant with 
              beautiful digital menus that boost sales and enhance customer experience.
            </p>
            <ul className="[&>*:not(:last-child)]:mb-6 max-md:[&>*:not(:last-child)]:mb-4">
              <li className="flex items-center gap-x-2 ">
                <span className="relative rounded-full bg-white shadow-icon flex items-center justify-center w-12 h-12">
                  <Smartphone className="w-6 h-6 text-primary-600" />
                </span>
                <span className=""> Contactless QR Code Menus </span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="relative rounded-full bg-white shadow-icon flex items-center justify-center w-12 h-12">
                  <ShoppingCart className="w-6 h-6 text-primary-600" />
                </span>
                <span className=""> Instant Order Placement </span>
              </li>
              <li className="flex items-center gap-x-2 ">
                <span className="relative rounded-full bg-white shadow-icon flex items-center justify-center w-12 h-12">
                  <Zap className="w-6 h-6 text-primary-600" />
                </span>
                <span className=""> Real-time Menu Updates </span>
              </li>
            </ul>
          </div>
          <div className={`${activeTab === 'tab2' ? 'tab-items-active' : 'hidden'}`}>
            <p className="max-md:mb-6 mb-8">
              Streamline your kitchen operations with intelligent order routing, 
              real-time updates, and automated inventory management. Our AI-powered 
              system ensures efficient order processing and reduces wait times.
            </p>
            <ul className="[&>*:not(:last-child)]:mb-6 max-md:[&>*:not(:last-child)]:mb-4">
              <li className="flex items-center gap-x-2 ">
                <span className="relative rounded-full bg-white shadow-icon flex items-center justify-center w-12 h-12">
                  <Package className="w-6 h-6 text-primary-600" />
                </span>
                <span className="">
                  {" "}
                  Intelligent Order Routing{" "}
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="relative rounded-full bg-white shadow-icon flex items-center justify-center w-12 h-12">
                  <TrendingUp className="w-6 h-6 text-primary-600" />
                </span>
                <span className=""> Automated Inventory Management </span>
              </li>
              <li className="flex items-center gap-x-2 ">
                <span className="relative rounded-full bg-white shadow-icon flex items-center justify-center w-12 h-12">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </span>
                <span className=""> Real-time Order Tracking </span>
              </li>
            </ul>
          </div>
          <div className={`${activeTab === 'tab3' ? 'tab-items-active' : 'hidden'}`}>
            <p className="max-md:mb-6 mb-8">
              Track sales performance, popular items, customer preferences, and revenue insights 
              with comprehensive analytics. Make data-driven decisions to boost your restaurant&rsquo;s 
              profitability and optimize operations.
            </p>
            <ul className="[&>*:not(:last-child)]:mb-6 max-md:[&>*:not(:last-child)]:mb-4">
              <li className="flex items-center gap-x-2 ">
                <span className="relative rounded-full bg-white shadow-icon flex items-center justify-center w-12 h-12">
                  <BarChart3 className="w-6 h-6 text-primary-600" />
                </span>
                <span className="">
                  {" "}
                  Real-time Sales Analytics{" "}
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="relative rounded-full bg-white shadow-icon flex items-center justify-center w-12 h-12">
                  <Utensils className="w-6 h-6 text-primary-600" />
                </span>
                <span className=""> Popular Items Tracking </span>
              </li>
              <li className="flex items-center gap-x-2 ">
                <span className="relative rounded-full bg-white shadow-icon flex items-center justify-center w-12 h-12">
                  <DollarSign className="w-6 h-6 text-primary-600" />
                </span>
                <span className=""> Revenue Insights </span>
              </li>
            </ul>
          </div>
          <div className={`${activeTab === 'tab4' ? 'tab-items-active' : 'hidden'}`}>
            <p className="max-md:mb-6 mb-8">
              Get dedicated support from our restaurant technology experts to ensure 
              smooth operations and maximum ROI. Our 24/7 customer support team is 
              always ready to help you succeed with MenuMitra.
            </p>
            <ul className="[&>*:not(:last-child)]:mb-6 max-md:[&>*:not(:last-child)]:mb-4">
              <li className="flex items-center gap-x-2 ">
                <span className="relative rounded-full bg-white shadow-icon flex items-center justify-center w-12 h-12">
                  <Wrench className="w-6 h-6 text-primary-600" />
                </span>
                <span className=""> 24/7 Technical Support </span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="relative rounded-full bg-white shadow-icon flex items-center justify-center w-12 h-12">
                  <GraduationCap className="w-6 h-6 text-primary-600" />
                </span>
                <span className=""> Training & Onboarding </span>
              </li>
              <li className="flex items-center gap-x-2 ">
                <span className="relative rounded-full bg-white shadow-icon flex items-center justify-center w-12 h-12">
                  <Rocket className="w-6 h-6 text-primary-600" />
                </span>
                <span className=""> Performance Optimization </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default ClientSection;
