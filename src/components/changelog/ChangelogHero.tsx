import React from 'react';

const ChangelogHero: React.FC = () => {
  return (
    <section className="relative pt-[180px] pb-12 overflow-hidden bg-gray-50/50 border-b border-dashed border-gray-100">
      {/* Radial Glow Blobs */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 flex -z-10 max-md:hidden">
        <div className="w-[442px] h-[442px] rounded-full bg-emerald-200/20 blur-[145px]" />
        <div className="w-[442px] h-[442px] rounded-full bg-emerald-200/25 -ml-[170px] blur-[145px]" />
      </div>

      <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-emerald-700 uppercase bg-emerald-50 rounded-full border border-emerald-200">
          Product Release Notes
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          MenuMitra Changelog
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Explore the latest features, improvements, and updates across MenuMitra products.
        </p>
      </div>
    </section>
  );
};

export default ChangelogHero;
