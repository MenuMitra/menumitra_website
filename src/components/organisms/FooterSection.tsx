'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ContactHeader from './ContactHeader';
import StickersSection from './StickersSection';
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
  Truck,
  Home,
  Info,
  Package2,
  PhoneCall,
  Calendar,
  Briefcase,
  Headphones
} from 'lucide-react';
 

interface FooterSectionProps {
  className?: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const isActive = (path: string) => {
    // For exact matches (like home, about, products, contact)
    if (pathname === path) {
      return true;
    }
    
    // For features, addons, and outlet types, check if current path matches exactly
    if (path.startsWith('/features/') && pathname.startsWith('/features/')) {
      return pathname === path;
    }
    
    if (path.startsWith('/addons/') && pathname.startsWith('/addons/')) {
      return pathname === path;
    }
    
    if (path.startsWith('/outlet-type/') && pathname.startsWith('/outlet-type/')) {
      return pathname === path;
    }
    
    return false;
  };

  return (
    <section className={`bg-white overflow-hidden relative pb-5 pt-0 border-t border-dashed border-gray-100 ${className}`}>
      {/* Contact Header */}
      <ContactHeader />
      
      <div className="container">

        <div className="grid grid-cols-12 mb-20 max-lg:gap-y-10 max-lg:text-center gap-2">
          <div className="col-span-6 lg:col-span-3 max-lg:text-center">
            <h3 className="mb-8 font-bold text-lg text-left">Navigations</h3>
            <ul className="[&>*:not(:last-child)]:mb-3 text-left">
              <li>
                <Link 
                  href="/" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/about') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/products" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/products') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Package2 className="w-4 h-4" />
                    Products
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/contact') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4" />
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/book-demo" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/book-demo') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Book a Demo
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/careers" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/careers') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Careers
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/customer-care" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/customer-care') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Headphones className="w-4 h-4" />
                    Customer Care
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6 lg:col-span-3 max-lg:text-center">
            <h3 className="mb-8 font-bold text-lg text-left">Features</h3>
            <ul className="[&>*:not(:last-child)]:mb-3 text-left">
              <li>
                <Link 
                  href="/features/menu" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/menu') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <MenuIcon className="w-4 h-4" />
                    Menu
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/billing" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/billing') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    Billing
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/inventory" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/inventory') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    Inventory
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/online-order" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/online-order') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Online Order
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/restaurant-reports" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/restaurant-reports') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    Restaurant Reports
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/customer-management" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/customer-management') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Customer Management
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/customer-feedback" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/customer-feedback') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Customer Feedback
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/scan-order" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/scan-order') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <QrCode className="w-4 h-4" />
                    Scan & Order
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/store-management" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/store-management') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Store className="w-4 h-4" />
                    Store Management
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/recipe-management" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/recipe-management') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Recipe Management
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/social-media-management" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/social-media-management') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Social Media Management
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/utility-management" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/utility-management') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Utility Management
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/staff-management" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/staff-management') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4" />
                    Staff Management
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/chain-management" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/chain-management') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <LinkIcon className="w-4 h-4" />
                    Chain Management
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6 lg:col-span-3 max-lg:text-center">
            <h3 className="mb-8 font-bold text-lg text-left">AddOns</h3>
            <ul className="[&>*:not(:last-child)]:mb-3 text-left">
              <li>
                <Link 
                  href="/addons/captain-app" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/addons/captain-app') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4" />
                    Captain App
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/addons/waiter-app" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/addons/waiter-app') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Waiter App
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/addons/point-of-sale" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/addons/point-of-sale') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <CashRegister className="w-4 h-4" />
                    Point of Sale
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/addons/kitchen-display-system" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/addons/kitchen-display-system') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Monitor className="w-4 h-4" />
                    Kitchen Display
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/addons/customer-display-system" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/addons/customer-display-system') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Monitor className="w-4 h-4" />
                    Customer Display System
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/addons/smart-mobile-app" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/addons/smart-mobile-app') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4" />
                    Smart Mobile App
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/addons/money-management" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/addons/money-management') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Coins className="w-4 h-4" />
                    Money Management
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/addons/customer-app" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/addons/customer-app') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <TwoPerson className="w-4 h-4" />
                    Customer App
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/addons/customised-solution" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/addons/customised-solution') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Cog className="w-4 h-4" />
                    Customised Solution
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/addons/hotel-management" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/addons/hotel-management') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    Hotel Management
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6 lg:col-span-2 max-lg:text-center">
            <h3 className="mb-8 font-bold text-lg text-left">Outlet Type</h3>
            <ul className="[&>*:not(:last-child)]:mb-3 text-left">
              <li>
                <Link 
                  href="/outlet-type/restaurant" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/restaurant') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Storefront className="w-4 h-4" />
                    Restaurant
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/outlet-type/fine-dine" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/fine-dine') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Utensils className="w-4 h-4" />
                    Fine Dine
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/outlet-type/food-courts" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/food-courts') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Storefront className="w-4 h-4" />
                    Food Courts
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/outlet-type/food-truck" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/food-truck') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    Food Truck
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/outlet-type/pizzeria" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/pizzeria') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Pizza className="w-4 h-4" />
                    Pizzeria
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/outlet-type/cafe" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/cafe') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Coffee className="w-4 h-4" />
                    Cafe
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/outlet-type/qsr" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/qsr') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Hamburger className="w-4 h-4" />
                    QSR
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/outlet-type/bakeries" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/bakeries') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Bread className="w-4 h-4" />
                    Bakeries
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/outlet-type/bar-pub" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/bar-pub') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Coffee className="w-4 h-4" />
                    Bar & Pub
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/outlet-type/catering" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/catering') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Utensils className="w-4 h-4" />
                    Catering
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/outlet-type/cloud-kitchens" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/cloud-kitchens') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Cloud className="w-4 h-4" />
                    Cloud Kitchens
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/outlet-type/large-chain" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/large-chain') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    Large Chain
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="seperator block">
          <Image
            src="/images/footer-seperator.svg"
            alt="footer-seperator"
            width={1200}
            height={50}
            className=" w-full object-cover"
          />
        </div> */}
<hr />
        
        {/* Recognition Stickers */}
        <StickersSection className="mb-10" />
                  
      <hr />
        <div className="py-5 max-lg:text-center">
          <div className="flex flex-col lg:items-center">
            <ul className="max-lg:grid max-lg:grid-cols-2 max-lg:gap-x-6 max-lg:gap-y-3 max-lg:place-items-start max-lg:w-full lg:flex lg:items-center lg:gap-5">
              <li>
                <a href="/privacy-and-policy" className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 text-gray-custom text-nowrap">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 text-gray-custom text-nowrap">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/compliance" className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 text-gray-custom text-nowrap">
                  Compliance
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 text-gray-custom text-nowrap">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/cancellation-policy" className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 text-gray-custom text-nowrap">
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="/refund-policy" className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 text-gray-custom text-nowrap">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="/escalation-matrix" className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-10 text-gray-custom text-nowrap">
                  Escalation Matrix
                </a>
              </li>
              <li>
                <a href="/request-data-removal" className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 text-gray-custom text-nowrap">
                  Request Data Removal
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-900">@ {currentYear} MenuMitra. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;