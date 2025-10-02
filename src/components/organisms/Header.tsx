'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  CreditCard, 
  Package, 
  Menu as MenuIcon, 
  ShoppingCart, 
  BarChart3, 
  Users, 
  Star, 
  QrCode, 
  Store, 
  FileText, 
  Share2, 
  Settings, 
  UserCheck, 
  Link as LinkIcon,
  Smartphone,
  Monitor,
  CreditCard as CashRegister,
  Coins,
  Users as TwoPerson,
  Cog,
  Building,
  Store as Storefront,
  Utensils,
  Pizza,
  Coffee,
  Hamburger,
  CircleDot as Bread,
  Cloud,
  ChevronDown,
  X,
  Menu,
  Truck,
  Home,
  Info,
  Package2,
  PhoneCall
} from 'lucide-react';

// Type definitions for navigation
interface NavItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

interface NavDropdown {
  label: string;
  items: NavItem[];
}

type NavigationItem = 
  | { type: 'link'; href: string; label: string; icon?: React.ReactNode }
  | { type: 'dropdown'; label: string; icon?: React.ReactNode; items: NavItem[] };

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const isFeaturesActive = () => {
    return pathname.startsWith('/features/');
  };

  const isAddOnsActive = () => {
    return pathname.startsWith('/addons/');
  };

  const isOutletTypeActive = () => {
    return pathname.startsWith('/outlet-type/');
  };

  const toggleMobileMenu = () => {
    console.log('toggleMobileMenu called, current state:', isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log('toggleMobileMenu setting state to:', !isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    console.log('closeMobileMenu called, current state:', isMobileMenuOpen);
    setIsMobileMenuOpen(false);
    console.log('closeMobileMenu setting state to: false');
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      setIsScrolled(scrollY >= 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or pressing escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.querySelector('.mobile-menu');
      const mobileMenuButton = document.querySelector('.mobile-menu-button');
      
      if (isMobileMenuOpen && 
          mobileMenu && 
          !mobileMenu.contains(event.target as Node) && 
          !mobileMenuButton?.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);


  // Single navigation configuration - easy to edit and maintain
  const navigationConfig: { main: NavigationItem[] } = {
    main: [
      { type: 'link', href: '/', label: 'Home', icon: <Home className="w-4 h-4" /> },
      { type: 'link', href: '/about', label: 'About', icon: <Info className="w-4 h-4" /> },
      { type: 'link', href: '/products', label: 'Products', icon: <Package2 className="w-4 h-4" /> },
      { 
        type: 'dropdown',
        label: 'Features',
        icon: <Settings className="w-4 h-4" />,
        items: [
          { href: '/features/billing', label: 'Billing', icon: <CreditCard className="w-4 h-4" /> },
          { href: '/features/inventory', label: 'Inventory', icon: <Package className="w-4 h-4" /> },
          { href: '/features/menu', label: 'Menu', icon: <MenuIcon className="w-4 h-4" /> },
          { href: '/features/online-order', label: 'Online Order', icon: <ShoppingCart className="w-4 h-4" /> },
          { href: '/features/restaurant-reports', label: 'Restaurant Reports', icon: <BarChart3 className="w-4 h-4" /> },
          { href: '/features/customer-management', label: 'Customer Management', icon: <Users className="w-4 h-4" /> },
          { href: '/features/customer-feedback', label: 'Customer Feedback', icon: <Star className="w-4 h-4" /> },
          { href: '/features/scan-order', label: 'Scan & Order', icon: <QrCode className="w-4 h-4" /> },
          { href: '/features/store-management', label: 'Store Management', icon: <Store className="w-4 h-4" /> },
          { href: '/features/recipe-management', label: 'Recipe Management', icon: <FileText className="w-4 h-4" /> },
          { href: '/features/social-media-management', label: 'Social Media Management', icon: <Share2 className="w-4 h-4" /> },
          { href: '/features/utility-management', label: 'Utility Management', icon: <Settings className="w-4 h-4" /> },
          { href: '/features/staff-management', label: 'Staff Management', icon: <UserCheck className="w-4 h-4" /> },
          { href: '/features/chain-management', label: 'Chain Management', icon: <LinkIcon className="w-4 h-4" /> },
        ]
      },
      { 
        type: 'dropdown',
        label: 'AddOns',
        icon: <Smartphone className="w-4 h-4" />,
        items: [
          { href: '/addons/captain-app', label: 'Captain App', icon: <Smartphone className="w-4 h-4" /> },
          { href: '/addons/waiter-app', label: 'Waiter App', icon: <Users className="w-4 h-4" /> },
          { href: '/addons/kitchen-display-system', label: 'Kitchen Display System', icon: <Monitor className="w-4 h-4" /> },
          { href: '/addons/customer-display-system', label: 'Customer Display System', icon: <Monitor className="w-4 h-4" /> },
          { href: '/addons/point-of-sale', label: 'Point of Sale', icon: <CashRegister className="w-4 h-4" /> },
          { href: '/addons/smart-mobile-app', label: 'Smart Mobile App', icon: <Smartphone className="w-4 h-4" /> },
          { href: '/addons/money-management', label: 'Money Management', icon: <Coins className="w-4 h-4" /> },
          { href: '/addons/customer-app', label: 'Customer App', icon: <TwoPerson className="w-4 h-4" /> },
          { href: '/addons/customised-solution', label: 'Customised Solution', icon: <Cog className="w-4 h-4" /> },
          { href: '/addons/hotel-management', label: 'Hotel Management', icon: <Building className="w-4 h-4" /> },
        ]
      },
      { 
        type: 'dropdown',
        label: 'Outlet Type',
        icon: <Storefront className="w-4 h-4" />,
        items: [
          { href: '/outlet-type/restaurant', label: 'Restaurant', icon: <Storefront className="w-4 h-4" /> },
          { href: '/outlet-type/fine-dine', label: 'Fine Dine', icon: <Utensils className="w-4 h-4" /> },
          { href: '/outlet-type/food-courts', label: 'Food Courts', icon: <Storefront className="w-4 h-4" /> },
          { href: '/outlet-type/food-truck', label: 'Food Truck', icon: <Truck className="w-4 h-4" /> },
          { href: '/outlet-type/pizzeria', label: 'Pizzeria', icon: <Pizza className="w-4 h-4" /> },
          { href: '/outlet-type/cafe', label: 'Cafe', icon: <Coffee className="w-4 h-4" /> },
          { href: '/outlet-type/qsr', label: 'QSR', icon: <Hamburger className="w-4 h-4" /> },
          { href: '/outlet-type/bakeries', label: 'Bakeries', icon: <Bread className="w-4 h-4" /> },
          { href: '/outlet-type/bar-pub', label: 'Bar & Pub', icon: <Coffee className="w-4 h-4" /> },
          { href: '/outlet-type/catering', label: 'Catering', icon: <Utensils className="w-4 h-4" /> },
          { href: '/outlet-type/cloud-kitchens', label: 'Cloud Kitchens', icon: <Cloud className="w-4 h-4" /> },
          { href: '/outlet-type/large-chain', label: 'Large Chain', icon: <Building className="w-4 h-4" /> },
        ]
      },
    ]
  };


  return (
    <>
      <header 
        className={`fixed left-0 pt-8 z-[1000000000] duration-500 transition-all w-full ${
          isScrolled 
            ? 'nav-sticky !backdrop-blur-[15px]' 
            : 'bg-transparent'
        }`}
        id="mainnavigationBar"
      >
      <nav className="container flex items-center relative">
        {/* Logo */}
        <div className="nav-logo xl:min-w-[250px]">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/images/mm/mm.png" 
              alt="MenuMitra logo" 
              width={40} 
              height={40} 
              className="w-auto h-auto"
            />
            <span className="text-2xl font-bold text-gray-900">MenuMitra</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-list hidden lg:flex mx-auto p-2.5 [&>*:not(:last-child)]:me-1">
          {navigationConfig.main.map((item, index) => (
            <li key={index} className={item.type === 'dropdown' ? 'relative group' : 'group'}>
              {item.type === 'link' ? (
            <Link 
                  href={item.href} 
              className={`font-Inter flex items-center text-base font-medium leading-8 text-paragraph py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour  duration-500 hover:duration-500 transition-colors ${
                    isActive(item.href) ? 'active' : ''
              }`}
            >
                  <span className="flex items-center gap-2">
                    {item.icon && <span className="w-4 h-4">{item.icon}</span>}
                    {item.label}
                  </span>
            </Link>
              ) : (
                <>
                  <button className={`font-Inter flex items-center text-base font-medium leading-8 py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large duration-500 hover:duration-500 transition-colors group text-nowrap ${
                    (item.label === 'Features' && isFeaturesActive()) || 
                    (item.label === 'AddOns' && isAddOnsActive()) || 
                    (item.label === 'Outlet Type' && isOutletTypeActive())
                      ? 'text-primary-600 bg-white border-primary-700' 
                      : 'text-paragraph border-transparent hover:bg-white hover:border-borderColour '
                  }`}>
                    <span className="flex items-center gap-2">
                      {item.icon && <span className="w-4 h-4">{item.icon}</span>}
                      {item.label}
                    </span>
                    <ChevronDown 
                      className={`ml-1 group-hover:rotate-180 duration-500 mt-1 w-4 h-4 ${
                        (item.label === 'Features' && isFeaturesActive()) || 
                        (item.label === 'AddOns' && isAddOnsActive()) || 
                        (item.label === 'Outlet Type' && isOutletTypeActive())
                          ? 'text-primary-600'
                          : 'text-paragraph'
                      }`} 
                    />
                  </button>
                  <ul className="absolute min-w-[280px] left-0 top-12 p-5 opacity-0 scale-y-0 origin-top duration-500 group-hover:scale-y-100 bg-white group-hover:opacity-100 rounded-md shadow-lg [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-borderColour [&>*:not(:first-child)]:mt-2.5 z-10">
                    {item.items.map((subItem, subIndex) => (
                        <li key={subIndex} className="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                          <Link href={subItem.href} className={`flex items-center gap-3 ${isActive(subItem.href) ? 'text-primary-600 font-medium bg-white' : ''}`}>
                            {subItem.icon && <span className={`${isActive(subItem.href) ? 'text-primary-600' : 'text-gray-600'}`}>{subItem.icon}</span>}
                            {subItem.label}
                          </Link>
                        </li>
                ))}
              </ul>
                </>
              )}
                </li>
              ))}
        </ul>

        {/* Right Side Actions */}
        <ul className="flex items-center max-lg:ml-auto [&>*:not(:last-child)]:me-2.5 align-middle" >

          {/* Request Demo Button - Desktop */}
          <li className="max-lg:hidden">
            <Link href="/book-demo" className="btn btn-navbar btn-sm font-bold text-nowrap">
              Book a Demo
            </Link>
          </li>

          {/* Mobile Menu Toggle */}
          <li className={`max-lg:inline-block lg:hidden ${isMobileMenuOpen ? 'hidden' : ''}`}>
            <button 
              className={`outline-none mobile-menu-button w-10 h-10 rounded-full bg-white relative ${isMobileMenuOpen ? 'hidden' : ''}`}
              onClick={toggleMobileMenu}
            >
              <Menu className="w-5 h-5 text-paragraph ml-2" />
            </button>
          </li>
        </ul>
      </nav>
    </header>

      {/* Mobile Menu - Now outside header for proper z-index */}
      <div 
        className={`fixed inset-0 z-[2000000000] mobile-menu max-lg:overflow-y-auto ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            toggleMobileMenu();
          }
        }}
        ref={(el) => {
          if (el) {
            console.log('Mobile menu div classes:', el.className);
          }
        }}
      >
        <button 
          className="outline-none navbar-toggle-close w-10 h-10 rounded-full bg-primary-200 fixed right-6 top-10 z-[2000000001] cursor-pointer"
          onClick={(e) => {
            console.log('Close button clicked!');
            e.stopPropagation();
            e.preventDefault();
            closeMobileMenu();
          }}
        >
          <X className="w-5 h-5 ml-2" />
        </button>
        
        <div className="flex flex-col w-full h-full">
        

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto p-6 mt-20">
            <ul className="space-y-4">
              {navigationConfig.main.map((item, index) => (
                <li key={index}>
                  {item.type === 'link' ? (
                    <Link 
                      href={item.href} 
                      className={`flex items-center text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                        isActive(item.href) 
                          ? 'bg-primary-50 text-primary-600' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      <span className="flex items-center gap-3">
                        {item.icon && (
                          <span className={`w-5 h-5 ${
                            isActive(item.href) 
                              ? 'text-primary-600' 
                              : 'text-gray-500'
                          }`}>
                            {item.icon}
                          </span>
                        )}
                        <span>{item.label}</span>
                      </span>
                    </Link>
                  ) : (
                    <div className="space-y-2">
                      <button 
                        className={`w-full flex items-center justify-between text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                          (item.label === 'Features' && isFeaturesActive()) || 
                          (item.label === 'AddOns' && isAddOnsActive()) || 
                          (item.label === 'Outlet Type' && isOutletTypeActive())
                            ? 'bg-primary-50 text-primary-600' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => toggleDropdown(item.label.toLowerCase())}
                      >
                        <span className="flex items-center gap-3">
                          {item.icon && (
                            <span className={`w-5 h-5 ${
                              (item.label === 'Features' && isFeaturesActive()) || 
                              (item.label === 'AddOns' && isAddOnsActive()) || 
                              (item.label === 'Outlet Type' && isOutletTypeActive())
                                ? 'text-primary-600' 
                                : 'text-gray-500'
                            }`}>
                              {item.icon}
                            </span>
                          )}
                          <span>{item.label}</span>
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 transition-transform duration-200 ${
                            activeDropdown === item.label.toLowerCase() ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {/* Mobile Dropdown Items */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.label.toLowerCase() 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0'
                      }`}>
                        <div className="pl-4 space-y-1">
                          {item.items.map((subItem, subIndex) => (
                            <Link 
                              key={subIndex}
                              href={subItem.href} 
                              className={`flex items-center gap-3 py-2 px-4 rounded-lg text-base transition-colors ${
                                isActive(subItem.href) 
                                  ? 'bg-primary-50 text-primary-600 font-medium' 
                                  : 'text-gray-600 hover:bg-gray-50'
                              }`} 
                              onClick={toggleMobileMenu}
                            >
                              {subItem.icon && (
                                <span className={`w-5 h-5 ${
                                  isActive(subItem.href) 
                                    ? 'text-primary-600' 
                                    : 'text-gray-500'
                                }`}>
                                  {subItem.icon}
                                </span>
                              )}
                              <span>{subItem.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-200">
            <Link 
              href="/book-demo" 
              className="w-full btn btn-primary btn-lg text-center block font-bold"
              onClick={toggleMobileMenu}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
