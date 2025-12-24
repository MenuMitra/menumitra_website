import React from 'react';
import Image from 'next/image';
import { QrCode, BarChart3, Package } from 'lucide-react';

interface SolutionSectionProps {
  className?: string;
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ className = '' }) => {
  return (
    <section className=" bg-white overflow-hidden relative pt-[160px] pb-150 lg:pb-15 max-lg:pt-20 max-lg:pb-150">
  <div className="container ">
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 1xl:gap-x-24 items-center">
      <div className="max-md:order-2">
        <div className="relative pt-150 lg:py-150 lg:px-150">
          <div className="w-[250px] lg:w-[300px] aspect-video relative mx-auto">
            <Image
              src="/images/solution/solution.png"
              alt="vision image"
              width={300}
              height={169}
              className=""
            />
            <div
              className="absolute left-10 -top-[130px] lg:-top-[185px] lg:left-15 right-auto bottom-auto w-[250px] h-[150px] lg:w-[280px] lg:h-[180px] xl:w-[320px] xl:h-[230px]"
              data-aos="fade-left"
              data-aos-offset={200}
              data-aos-duration={1000}
              data-aos-once="true"
              suppressHydrationWarning
            >
              <Image
                src="/images/solution/solution-shape1.png"
                alt="vision image"
                width={320}
                height={230}
                className="w-full"
              />
            </div>
            <div
              className="absolute right-12 top-12 lg:right-20 left-auto bottom-auto w-[280px] h-[190px] lg:w-[320px] lg:h-[230px] xl:w-[368px] xl:h-[280px]"
              data-aos="fade-up"
              data-aos-offset={200}
              data-aos-duration={1000}
              data-aos-delay={100}
              data-aos-once="true"
              suppressHydrationWarning
            >
              <Image
                src="/images/solution/solution-shape2.png"
                alt="vision image"
                width={368}
                height={280}
                className="w-full"
              />
            </div>
            <div
              className="absolute left-[175px] -bottom-[70px] lg:-bottom-[86px] lg:left-[200px] right-auto top-auto w-[150px] lg:w-[170px] aspect-video"
              data-aos="fade-left"
              data-aos-offset={200}
              data-aos-duration={1000}
              data-aos-delay={200}
              data-aos-once="true"
              suppressHydrationWarning
            >
              <Image
                src="/images/solution/solution-shape3.png"
                alt="vision image"
                width={170}
                height={96}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-md:order-1 lg:-mt-15">
        <p className="section-tagline">Restaurant SaaS Platform</p>
        <h2 className="max-lg:mb-4 mb-8">
          Complete digital menu management system for modern restaurants
        </h2>
        <p className="max-lg:mb-6 mb-11">
          MenuMitra is a comprehensive restaurant management SaaS platform that digitizes your menu operations. 
          Our cloud-based solution helps restaurants streamline ordering, reduce wait times, and increase customer satisfaction 
          through intelligent menu management and real-time order processing.
        </p>
        <ul className="max-lg:mb-6 mb-14 flex max-md:flex-col max-md:gap-y-5 lg:items-center lg:[&>*:not(:last-child)]:mr-10 ">
          <li className="relative flex items-center gap-x-2 ">
            <QrCode className="w-10 h-10 text-paragraph" />
            <span className=" font-jakarta_sans font-medium">
              QR Code Menu System
            </span>
          </li>
          <li className="relative flex items-center gap-x-2 ">
            <BarChart3 className="w-10 h-10 text-paragraph" />
            <span className=" font-jakarta_sans font-medium">
              Order Management Dashboard
            </span>
          </li>
          <li className="relative flex items-center gap-x-2 ">
            <Package className="w-10 h-10 text-paragraph" />
            <span className=" font-jakarta_sans font-medium">
              Inventory Tracking
            </span>
          </li>
        </ul>
        <a href="/book-demo" className="btn-outline">
          Get Started Today
        </a>
      </div>
    </div>
  </div>
</section>

  );
};

export default SolutionSection;
