'use client';

import React from 'react';
import FooterSection from '@/components/organisms/FooterSection';
import OnboardingForm from '@/components/forms/OnboardingForm';

export default function OnboardingPage() {
  return (
    <>
      <section className="pt-[200px] pb-[100px] max-md:pt-150 relative overflow-hidden">
        <div className="absolute left-1/2 top-0 w-full h-[550px] -translate-x-1/2 bg-cover bg-[url('/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10" />
        <div className="container relative">
          <div className="mb-12 text-center max-w-[600px] mx-auto">
            <h2>Outlet Onboarding</h2>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              Register your restaurant or food outlet with MenuMitra. Fill in your company, owner, and outlet details below.
            </p>
          </div>
          <OnboardingForm />
        </div>
      </section>
      <FooterSection />
    </>
  );
}
