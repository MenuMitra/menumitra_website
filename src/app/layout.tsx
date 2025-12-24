import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import "./custom.css";
// import "./theme.css";
import "./theme-1.css";
import Header from "@/components/organisms/Header";
import { Toaster } from "react-hot-toast";
import { website, social } from "@/config/contact";
import AOSProvider from "@/components/providers/AOSProvider";
import FloatingActionButton from "@/components/atoms/FloatingActionButton";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  // Primary Meta Tags
  title: {
    default: "MenuMitra - AI-Powered Digital Menu Solutions for Restaurants",
    template: "%s | MenuMitra - Smart Restaurant Management"
  },
  description: "Transform your restaurant with MenuMitra's AI-powered digital menu platform. Create stunning QR code menus, manage orders seamlessly, boost sales by 30%, and enhance customer experience. Join 15,000+ restaurants. Start free trial today!",
  keywords: [
    "digital menu",
    "QR code menu",
    "restaurant management",
    "AI menu",
    "restaurant technology",
    "menu management system",
    "restaurant POS",
    "online ordering",
    "restaurant software",
    "smart menu",
    "digital restaurant",
    "menu QR code",
    "restaurant automation",
    "contactless dining",
    "restaurant analytics",
    "food ordering system",
    "restaurant digital transformation"
  ],
  
  // Author and Publisher Information
  authors: [{ name: "MenuMitra Team" }],
  creator: "MenuMitra",
  publisher: "MenuMitra",
  
  // Application Information
  applicationName: "MenuMitra",
  generator: "Next.js",
  
  // Language and Locale
  metadataBase: new URL(website.base),
  
  // Apple Web App Configuration
  appleWebApp: {
    title: "MenuMitra",
    capable: true,
    statusBarStyle: "default",
  },
  
  // Robots and Crawling
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph / Facebook
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: website.base,
    siteName: 'MenuMitra',
    title: 'MenuMitra - AI-Powered Digital Menu Solutions for Restaurants',
    description: 'Transform your restaurant with MenuMitra\'s AI-powered digital menu platform. Create stunning QR code menus, manage orders seamlessly, and boost sales by 30%.',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Digital Menu Platform - AI-Powered Restaurant Management',
        type: 'image/jpeg',
      },
    ],
  },
  
  // X (Twitter) Meta Tags
  twitter: {
    card: 'summary_large_image',
    site: '@menumitra',
    creator: '@menumitra',
    title: 'MenuMitra - AI-Powered Digital Menu Solutions for Restaurants',
    description: 'Transform your restaurant with AI-powered digital menus. Boost sales by 30% with QR code menus and seamless order management.',
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  // Favicon and Icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon1.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon0.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  // Web App Manifest
  manifest: '/manifest.json',
  
  // Canonical URL
  alternates: {
    canonical: website.base,
  },
  
  // Additional Meta Tags
  other: {
    // Business Information
    'business:contact_data:street_address': 'Muktangan English School & Jr College, office No. 6, 2 Floor manogat, Parvati, Pune, Maharashtra 411009',
    'business:contact_data:locality': 'Pune',
    'business:contact_data:region': 'Maharashtra',
    'business:contact_data:postal_code': '411009',
    'business:contact_data:country_name': 'India',
    'business:contact_data:phone_number': '+91 93178 18283',
    'business:contact_data:email': 'menumitra.info@gmail.com',
    
    // Mobile App Meta Tags
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'MenuMitra',
    
    // Theme Colors
    'theme-color': '#10b981',
    'msapplication-TileColor': '#10b981',
    'msapplication-config': '/browserconfig.xml',
    
    // Additional SEO Meta Tags
    'rating': '4.8',
    'distribution': 'global',
    'revisit-after': '7 days',
    'expires': 'never',
    'language': 'en',
    'geo.region': 'IN-MH',
    'geo.placename': 'Pune',
    'geo.position': '18.5204;73.8567',
    'ICBM': '18.5204, 73.8567',
    
    // Social Media Verification
    'facebook-domain-verification': '',
    'google-site-verification': '',
    
    // Security Headers
    'referrer': 'origin-when-cross-origin',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MenuMitra",
    "description": "AI-powered digital menu platform for restaurants. Create stunning QR code menus, manage orders seamlessly, boost sales by 30%, and enhance customer experience.",
    "url": website.base,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "softwareVersion": "2.0",
    "datePublished": "2023-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "author": {
      "@type": "Organization",
      "name": "MenuMitra Team",
      "url": website.base
    },
    "publisher": {
      "@type": "Organization",
      "name": "MenuMitra",
      "url": website.base,
      "logo": {
        "@type": "ImageObject",
        "url": `${website.base}/images/hero/menumitra-og-image.jpg`,
        "width": 1200,
        "height": 630
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Muktangan English School & Jr College, office No. 6, 2 Floor manogat, Parvati",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411009",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 93178 18283",
        "contactType": "customer service",
        "email": "menumitra.info@gmail.com",
        "availableLanguage": "English"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free trial available",
      "availability": "https://schema.org/InStock",
      "validFrom": "2023-01-01"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "15000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "AI-powered digital menu creation",
      "QR code menu generation",
      "Order management system",
      "Restaurant analytics",
      "Customer management",
      "Staff management",
      "Inventory tracking",
      "Payment processing",
      "Multi-outlet support",
      "Real-time reporting"
    ],
    "screenshot": `${website.base}/images/hero/menumitra-og-image.jpg`,
    "downloadUrl": website.base,
    "installUrl": website.base,
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "memoryRequirements": "256 MB RAM",
    "storageRequirements": "50 MB",
    "permissions": "Camera access for QR code scanning",
    "softwareHelp": `${website.base}/contact`,
    "releaseNotes": "Latest version includes enhanced AI features and improved user interface",
    "provider": {
      "@type": "Organization",
      "name": "MenuMitra",
      "url": website.base,
      "sameAs": [
        "https://twitter.com/menumitra",
        "https://facebook.com/menumitra",
        "https://instagram.com/menumitra",
        "https://youtube.com/@menumitra"
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <meta name="title" content="MenuMitra - AI-Powered Digital Menu Solutions for Restaurants" />
        <meta name="description" content="Transform your restaurant with MenuMitra's AI-powered digital menu platform. Create stunning QR code menus, manage orders seamlessly, boost sales by 30%, and enhance customer experience. Join 15,000+ restaurants. Start free trial today!" />
        <meta name="keywords" content="digital menu, QR code menu, restaurant management, AI menu, restaurant technology, menu management system, restaurant POS, online ordering, restaurant software, smart menu, digital restaurant, menu QR code, restaurant automation, contactless dining, restaurant analytics, food ordering system, restaurant digital transformation" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={website.base} />
        <meta property="og:title" content="MenuMitra - AI-Powered Digital Menu Solutions for Restaurants" />
        <meta property="og:description" content="Transform your restaurant with MenuMitra's AI-powered digital menu platform. Create stunning QR code menus, manage orders seamlessly, and boost sales by 30%." />
        <meta property="og:image" content={`${website.base}/images/hero/menumitra-og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="MenuMitra Digital Menu Platform - AI-Powered Restaurant Management" />
        <meta property="og:site_name" content="MenuMitra" />
        <meta property="og:locale" content="en_US" />
        
        {/* X (Twitter) */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={website.base} />
        <meta property="twitter:title" content="MenuMitra - AI-Powered Digital Menu Solutions for Restaurants" />
        <meta property="twitter:description" content="Transform your restaurant with AI-powered digital menus. Boost sales by 30% with QR code menus and seamless order management." />
        <meta property="twitter:image" content={`${website.base}/images/hero/menumitra-og-image.jpg`} />
        <meta property="twitter:site" content="@menumitra" />
        <meta property="twitter:creator" content="@menumitra" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="MenuMitra Team" />
        <meta name="publisher" content="MenuMitra" />
        <meta name="copyright" content="MenuMitra" />
        <meta name="language" content="en" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune" />
        <meta name="geo.position" content="18.5204;73.8567" />
        <meta name="ICBM" content="18.5204, 73.8567" />
        
        {/* Mobile Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MenuMitra" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Theme Colors */}
        <meta name="theme-color" content="#10b981" />
        <meta name="msapplication-TileColor" content="#10b981" />
        <meta name="msapplication-navbutton-color" content="#10b981" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Favicon Links */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon1.png" />
        <link rel="icon" type="image/svg+xml" href="/icon0.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://unpkg.com" />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="//unpkg.com" />
        <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          src="https://unpkg.com/aos@2.3.1/dist/aos.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function initAOS() {
                if (typeof AOS !== 'undefined') {
                  AOS.init({
                    duration: 300,
                    once: true,
                    offset: 50,
                    easing: 'ease-out',
                    delay: 0
                  });
                }
              }
              
              // Initialize AOS when DOM is ready
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initAOS);
              } else {
                initAOS();
              }
              
              // Re-initialize AOS on navigation (for Next.js)
              if (typeof window !== 'undefined') {
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    if (typeof AOS !== 'undefined') {
                      AOS.refresh();
                    }
                  }, 100);
                });
                
                // Additional refresh for client-side navigation
                window.addEventListener('pageshow', function() {
                  setTimeout(function() {
                    if (typeof AOS !== 'undefined') {
                      AOS.refresh();
                    }
                  }, 200);
                });
              }
            `
          }}
        />
      </head>
      <body
        className={`${lato.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <AOSProvider>
          {children}
        </AOSProvider>
        
        {/* Floating Action Button */}
        <FloatingActionButton
          icon="whatsapp"
          label="WhatsApp Us"
          variant="whatsapp"
          size="medium"
          animate={false}
        />
        
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{
            top: '100px',
          }}
          toastOptions={{
            duration: 5000,
            style: {
              background: '#fff',
              color: '#363636',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            },
            success: {
              duration: 5000,
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
