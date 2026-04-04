'use client';

import React, { useEffect } from 'react';
import FooterSection from '@/components/organisms/FooterSection';
import { Download, Smartphone, Monitor, Calendar, ExternalLink, Globe } from 'lucide-react';
import SectionDivider from '@/components/atoms/SectionDivider';
import { website } from '@/config/contact';
import { useAOS } from '@/hooks/useAOS';
import { getProductDownloadUrl } from '@/config/api';

const ProductsPage: React.FC = () => {
  const { refreshAOS } = useAOS();
  
  useEffect(() => {
    // Refresh AOS when component mounts to ensure animations work on first load
    const timer = setTimeout(() => {
      refreshAOS();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [refreshAOS]);
  


  const productsV2 = [
    {
      name: 'Mobile App',
      image: 'images/mm/mm.png',
      description: 'Revolutionary restaurant management platform with AI-powered insights, real-time analytics, and advanced automation features for modern restaurant owners.',
      downloadUrl: 'https://menu4.xyz/website/MenuMitra_Mobile_2.2.apk',
      platform: 'Android 6.0 and above',
      releaseDate: 'Released: 4 April 2026'
    },
    {
      name: 'POS System',
      image: 'images/mm/mm.png',
      description: 'Next-generation point-of-sale system featuring cloud synchronization, advanced inventory management, and integrated payment processing.',
      downloadUrl: 'https://menu4.xyz/website/desktop/MenuMitra-POS-2.2.0-x64.exe',
      platform: 'Windows 7 and above',
      releaseDate: 'Released: 4 April 2026'
    }
  ];

  const productsV2Web = {
    production: [
      {
        name: 'MenuMitra Kitchen Display System',
        url: website.kds,
        description: 'Advanced Kitchen Display System with order prioritization, cooking timers, and seamless kitchen workflow management.'
      },
      {
        name: 'MenuMitra Customer Display System',
        url: website.cds,
        description: 'Interactive Customer Display System for order tracking, promotions, and enhanced customer engagement experience.'
      },
      {
        name: 'MenuMitra Customer',
        url: website.customer,
        description: 'Customer-facing web application for online ordering, menu browsing, and seamless dining experience.'
      }
    ],
    testing: [
      {
        name: 'Menumitra Stats (Test)',
        url: 'https://test-menumitra-stats-v2.netlify.app',
        description: 'Analytics dashboard testing environment - Experiment with new reporting features and data visualization tools.'
      },
      {
        name: 'Menumitra KDS (Test)',
        url: 'https://test-menumitra-kds-v2.netlify.app',
        description: 'Kitchen Display System testing environment - Validate new kitchen workflows and order management features.'
      },
      {
        name: 'Menumitra CDS (Test)',
        url: 'https://test-menumitra-cds-v2.netlify.app',
        description: 'Customer Display System testing environment - Test new customer engagement features and interface designs.'
      },
      {
        name: 'Menumitra Customer (Test)',
        url: 'https://test-menumitra-customer-v2.netlify.app',
        description: 'Customer application testing environment - Validate new ordering features and user experience improvements.'
      }
    ]
  };

  return (
    <>
      {/* Main Content */}
      <section className="pb-20 relative pt-[230px] ">
        <div className="container">
          <div className="text-center mx-auto mb-25">
            <h2 className="mb-8">Complete Restaurant Management Suite</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your restaurant operations with our comprehensive suite of applications. 
              From order management to analytics, we provide everything you need to run a successful restaurant business.
            </p>
          </div>
          
   


          <SectionDivider className="my-16" />

          <div className="text-center mx-auto mb-25">
            <h2 className="mb-4">Applications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Powerful restaurant management applications built with cutting-edge technology. 
              Download our production-ready solutions designed for modern restaurant operations.
            </p>
          </div>
          <div
            className=" grid grid-cols-2 max-sm:grid-cols-1 gap-8 relative z-10"
            data-aos="fade-up"
            data-aos-offset={200}
            data-aos-duration={300}
            data-aos-delay={200}
            data-aos-once="true"
          >
            {productsV2.map((product, index) => (
              <div key={index} className="bg-white shadow-box rounded-medium p-2.5">
                <div className="border border-dashed rounded border-gray-100 p-10 h-full max-lg:p-5 text-center">
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <img
                      src={product.image}
                      alt={`${product.name} image`}
                      className="w-12 h-12 object-contain"
                    />
                    <h3 className="mb-0">{product.name}</h3>
                  </div>
                  <p className="mb-4">{product.description}</p>
                  <p className="text-sm text-gray-600 mb-2 flex items-center justify-center gap-2">
                    {product.platform.includes('Android') ? (
                      <Smartphone className="w-4 h-4" />
                    ) : (
                      <Monitor className="w-4 h-4" />
                    )}
                    {product.platform}
                  </p>
                  <p className="text-sm text-gray-600 mb-4 flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {product.releaseDate}
                  </p>
                  <div className="flex justify-center mt-4">
                    <a 
                      href={product.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-navbar btn-sm flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" color="white" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider className="my-16" />

      {/* V2 Web Products Section */}
      <section className="pb-20 relative">
        <div className="container">
          <div className="text-center mx-auto mb-25">
            <h2 className="mb-8">Web Applications - Cloud-Powered Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access our cutting-edge web-based applications designed for modern restaurant operations. 
              Built with the latest technology stack, these applications provide seamless, real-time collaboration 
              and management capabilities across all your restaurant operations.
            </p>
          </div>

          <div 
            className="grid grid-cols-1 lg:grid-cols-1 gap-12"
            data-aos="fade-up"
            data-aos-offset={200}
            data-aos-duration={300}
            data-aos-delay={300}
            data-aos-once="true"
          >
            {/* Production Environment */}
            <div className="bg-white shadow-box rounded-medium p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-3">
                  <Globe className="w-6 h-6 text-green-600" />
                  Live Web Applications
                </h3>
                <p className="text-gray-600">
                  Live web apps — click to open.
                </p>

                <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-100">
                    Secure
                  </span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                    Fast
                  </span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-50 text-gray-700 border border-gray-100">
                    Always On
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productsV2Web.production.map((product, index) => (
                  <div 
                    key={index} 
                    className="bg-white shadow-box rounded-medium p-2.5"
                    data-aos="fade-up"
                    data-aos-offset={100}
                    data-aos-duration={300}
                    data-aos-delay={400 + (index * 50)}
                    data-aos-once="true"
                  >
                    <div className="border border-dashed rounded border-gray-100 p-6 h-full max-lg:p-5 text-center flex flex-col">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        <a 
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline text-sm font-medium break-all"
                        >
                          {product.url}
                        </a>
                      </div>

                      <div className="pt-5 flex justify-center">
                        <a 
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-navbar btn-sm flex items-center justify-center gap-2 w-full"
                        >
                          <ExternalLink className="w-4 h-4" color="white" />
                          Visit
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

     
      
      <FooterSection />
    </>
  );
};

export default ProductsPage;
