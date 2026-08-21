'use client';

import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { ChevronLeft, ChevronRight, Building2, Users, Store, CheckCircle } from 'lucide-react';
import { API_ENDPOINTS } from '@/config/api';

// ponytail: hardcoded defaults — update when admin wants to expose subscription/module selection
const DEFAULT_SUBSCRIPTION = {
  subscription_name: 'Basic',
  subscription_price: 0,
  subscription_description: 'Default onboarding plan',
  subscription_tenure: '1 month',
};
const DEFAULT_MODULE_IDS = [1, 2, 3]; // ponytail: basic module IDs, replace with actual defaults from DB

const COMPANY_TYPES = [
  { value: 'proprietorship', label: 'Proprietorship' },
  { value: 'partnership_firm', label: 'Partnership Firm' },
  { value: 'llp', label: 'LLP' },
  { value: 'opc', label: 'One Person Company (OPC)' },
  { value: 'private_limited', label: 'Private Limited' },
  { value: 'limited', label: 'Limited' },
];

const OUTLET_TYPES = [
  { value: 'restaurant', label: 'Restaurant' },
  { value: 'bakery', label: 'Bakery' },
  { value: 'cafe', label: 'Cafe' },
  { value: 'cake_shop', label: 'Cake Shop' },
  { value: 'canteen', label: 'Canteen' },
  { value: 'hotel', label: 'Hotel' },
  { value: 'mess', label: 'Mess' },
  { value: 'bar_pub', label: 'Bar / Pub' },
  { value: 'cloud_kitchen', label: 'Cloud Kitchen' },
  { value: 'food_truck', label: 'Food Truck' },
  { value: 'qsr', label: 'QSR (Quick Service)' },
  { value: 'fine_dine', label: 'Fine Dine' },
  { value: 'food_court', label: 'Food Court' },
  { value: 'pizzeria', label: 'Pizzeria' },
  { value: 'catering', label: 'Catering' },
];

// Company types that require TAN and CIN
const NEEDS_TAN_CIN = new Set(['llp', 'opc', 'private_limited', 'limited']);

const STEPS = ['Company Details', 'Owner Details', 'Outlet Details'] as const;

interface OwnerData {
  name: string;
  mobile: string;
  email: string;
  aadhar: string;
  pan: string;
  address: string;
}

const emptyOwner = (): OwnerData => ({
  name: '', mobile: '', email: '', aadhar: '', pan: '', address: '',
});

// --- Validation rules (Indian business document formats) ---
const validate = {
  // PAN: 5 letters + 4 digits + 1 letter (e.g., ABCDE1234F)
  pan: (v: string) => /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(v.toUpperCase()),
  // FSSAI: exactly 14 digits
  fssai: (v: string) => /^\d{14}$/.test(v),
  // TAN: 4 letters + 5 digits + 1 letter (e.g., MUMA12345B)
  tan: (v: string) => /^[A-Z]{4}[0-9]{5}[A-Z]$/.test(v.toUpperCase()),
  // CIN: 21 characters — U/L + 5 digits + 2 letters + 4 digits + 3 letters + 6 digits (e.g., U72200MH2023PTC123456)
  cin: (v: string) => /^[UL]\d{5}[A-Z]{2}\d{4}[A-Z]{3}\d{6}$/.test(v.toUpperCase()),
  // Aadhar: exactly 12 digits, cannot start with 0 or 1
  aadhar: (v: string) => /^[2-9]\d{11}$/.test(v),
  // Mobile: 10 digits, starts with 6-9
  mobile: (v: string) => /^[6-9]\d{9}$/.test(v),
  // Email: basic RFC-ish check
  email: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v),
  // Non-empty with min length
  name: (v: string) => v.trim().length >= 2,
  address: (v: string) => v.trim().length >= 5,
};

// Error messages shown below fields
const errorMsg: Record<string, string> = {
  pan: 'Format: ABCDE1234F (5 letters, 4 digits, 1 letter)',
  fssai: 'Must be exactly 14 digits',
  tan: 'Format: MUMA12345B (4 letters, 5 digits, 1 letter)',
  cin: 'Format: U72200MH2023PTC123456 (21 characters)',
  aadhar: 'Must be 12 digits, cannot start with 0 or 1',
  mobile: 'Must be 10 digits starting with 6, 7, 8, or 9',
  email: 'Enter a valid email address',
  name: 'Minimum 2 characters',
  address: 'Minimum 5 characters',
};

// Shared CSS classes (matching BookDemoForm)
const inputCls = 'block w-full text-sm rounded-[48px] border border-borderColour py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light outline-none bg-white focus:border-primary duration-300 transition-all';
const inputErrCls = 'block w-full text-sm rounded-[48px] border border-red-300 py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light outline-none bg-white focus:border-red-400 duration-300 transition-all';
const labelCls = 'block text-sm font-medium font-jakarta_sans text-paragraph mb-2 text-left';
const hintCls = 'text-xs text-red-500 mt-1 ml-5';
const halfCol = 'max-md:col-span-full md:col-span-6';
const fullCol = 'col-span-full';

// Helper: show error only when field has content but is invalid
const showErr = (value: string, validator: (v: string) => boolean) =>
  value.length > 0 && !validator(value);

// Input filter: only allow digits
const digitsOnly = (v: string) => v.replace(/\D/g, '');
// Input filter: only allow alphanumeric
const alphanumOnly = (v: string) => v.replace(/[^A-Za-z0-9]/g, '');

export default function OnboardingForm() {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Company state
  const [company, setCompany] = useState({
    company_name: '',
    company_type: '',
    pan: '',
    fssai: '',
    tan: '',
    cin: '',
  });

  // Owners state (at least 1)
  const [owners, setOwners] = useState<OwnerData[]>([emptyOwner()]);

  // Outlet state
  const [outlet, setOutlet] = useState({
    name: '',
    outlet_type: '',
    address: '',
    mobile: '',
  });

  const needsTanCin = NEEDS_TAN_CIN.has(company.company_type);

  // --- Validation per step ---
  const isCompanyValid = () => {
    const { company_name, company_type, pan, fssai, tan, cin } = company;
    if (!validate.name(company_name) || !company_type) return false;
    if (!validate.pan(pan) || !validate.fssai(fssai)) return false;
    if (needsTanCin && (!validate.tan(tan) || !validate.cin(cin))) return false;
    return true;
  };

  const isOwnerValid = (o: OwnerData) => {
    if (!validate.name(o.name) || !validate.email(o.email) || !validate.address(o.address)) return false;
    if (!validate.mobile(o.mobile) || !validate.pan(o.pan) || !validate.aadhar(o.aadhar)) return false;
    return true;
  };

  const isOwnersValid = () => owners.length > 0 && owners.every(isOwnerValid);

  const isOutletValid = () => {
    const { name, outlet_type, address, mobile } = outlet;
    if (!validate.name(name) || !outlet_type || !validate.address(address)) return false;
    if (!validate.mobile(mobile)) return false;
    return true;
  };

  const stepValid = [isCompanyValid, isOwnersValid, isOutletValid];

  const canProceed = stepValid[step]();

  // --- Handlers ---
  const updateCompany = (field: string, value: string) => {
    setCompany(prev => ({ ...prev, [field]: value }));
  };

  const updateOwner = (idx: number, field: string, value: string) => {
    setOwners(prev => prev.map((o, i) => i === idx ? { ...o, [field]: value } : o));
  };

  const addOwner = () => setOwners(prev => [...prev, emptyOwner()]);

  const removeOwner = (idx: number) => {
    if (owners.length <= 1) return;
    setOwners(prev => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = async () => {
    if (!canProceed) return;
    setIsSubmitting(true);

    const payload = {
      // ponytail: user_id hardcoded to 0 — public endpoint won't need it; remove once Santosh ships public API
      user_id: 0,
      app_source: 'website',
      company: {
        company_name: company.company_name.trim(),
        company_type: company.company_type,
        pan: company.pan.toUpperCase(),
        fssai: company.fssai.trim(),
        ...(needsTanCin ? { tan: company.tan.trim(), cin: company.cin.trim() } : {}),
      },
      owners: owners.map(o => ({
        name: o.name.trim(),
        mobile: o.mobile,
        aadhar: o.aadhar,
        pan: o.pan.toUpperCase(),
        email: o.email.trim(),
        address: o.address.trim(),
      })),
      outlet: {
        name: outlet.name.trim(),
        outlet_type: outlet.outlet_type,
        address: outlet.address.trim(),
        mobile: outlet.mobile,
        ...DEFAULT_SUBSCRIPTION,
        module_ids: DEFAULT_MODULE_IDS,
      },
    };

    try {
      const response = await axios.post(API_ENDPOINTS.ONBOARDING_CREATE, payload, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.data?.detail) {
        toast.success(
          'Onboarding submitted successfully! Your account is under review. Admin will activate it shortly.',
          { duration: 8000 },
        );
        setSubmitted(true);
      } else {
        throw new Error('Invalid response');
      }
    } catch (err: any) {
      const msg =
        err.response?.data?.detail ||
        err.response?.data?.message ||
        err.response?.data?.error ||
        'Submission failed. Please try again.';
      toast.error(msg, { duration: 6000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Success screen ---
  if (submitted) {
    return (
      <div className="relative z-10 max-w-[850px] mx-auto">
        <div className="bg-white rounded-medium p-2.5 shadow-nav">
          <div className="bg-white border border-dashed rounded border-gray-100 p-12 max-md:p-5 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Onboarding Submitted!</h3>
            <p className="text-gray-600 mb-2">
              Your company, owner(s), and outlet have been created in <strong>inactive</strong> status.
            </p>
            <p className="text-gray-600">
              An admin will review and activate your account. You will be notified once it&apos;s active.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // --- Step indicator ---
  const StepIndicator = () => (
    <div className="w-full max-w-lg mx-auto mb-10 px-4">
      <div className="relative flex items-center justify-between">
        {/* Background Track Line */}
        <div className="absolute left-5 right-5 top-5 -translate-y-1/2 h-[3px] bg-gray-200 -z-0 rounded-full" />

        {/* Active Progress Fill Line */}
        <div
          className="absolute left-5 top-5 -translate-y-1/2 h-[3px] bg-primary transition-all duration-500 -z-0 rounded-full"
          style={{
            width: step === 0 ? '0%' : step === 1 ? '50%' : 'calc(100% - 40px)',
          }}
        />

        {STEPS.map((label, i) => {
          const Icon = [Building2, Users, Store][i];
          const isActive = i === step;
          const isDone = i < step;

          return (
            <div key={label} className="relative z-10 flex flex-col items-center">
              <button
                type="button"
                onClick={() => { if (isDone) setStep(i); }}
                disabled={!isDone}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-white shadow-md ring-4 ring-orange-100 scale-105'
                    : isDone
                    ? 'bg-green-600 text-white cursor-pointer hover:bg-green-700 shadow-sm'
                    : 'bg-white text-gray-400 border-2 border-gray-300 cursor-default'
                }`}
              >
                {isDone ? (
                  <CheckCircle className="w-5 h-5 text-white stroke-[2.5]" />
                ) : (
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                )}
              </button>

              {/* Step Label */}
              <span
                className={`mt-2 text-xs font-semibold text-center whitespace-nowrap transition-colors duration-300 ${
                  isActive
                    ? 'text-primary font-bold'
                    : isDone
                    ? 'text-green-700 font-medium'
                    : 'text-gray-400 font-normal'
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="relative z-10 max-w-[850px] mx-auto">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex -z-10 max-md:hidden">
        <div className="w-[442px] h-[442px] rounded-full bg-primary-200/20 blur-[145px]" />
        <div className="w-[442px] h-[442px] rounded-full bg-primary-200/25 -ml-[170px] blur-[145px]" />
        <div className="w-[442px] h-[442px] rounded-full bg-primary-200/20 -ml-[170px] blur-[145px]" />
      </div>

      <div className="bg-white rounded-medium p-2.5 shadow-nav">
        <div className="bg-white border border-dashed rounded border-gray-100 p-12 max-md:p-5">
          <StepIndicator />

          {/* ===== STEP 0: Company ===== */}
          {step === 0 && (
            <div className="grid grid-cols-12 max-md:gap-y-5 md:gap-x-12 md:gap-8">
              <div className={halfCol}>
                <label className={labelCls}><span className="text-red-500">*</span> Company Name</label>
                <input type="text" className={showErr(company.company_name, validate.name) ? inputErrCls : inputCls}
                  placeholder="Enter company name (min 2 characters)"
                  value={company.company_name}
                  onChange={e => updateCompany('company_name', e.target.value)} />
                {showErr(company.company_name, validate.name) && <p className={hintCls}>{errorMsg.name}</p>}
              </div>
              <div className={halfCol}>
                <label className={labelCls}><span className="text-red-500">*</span> Company Type</label>
                <select className={inputCls} value={company.company_type}
                  onChange={e => updateCompany('company_type', e.target.value)}>
                  <option value="">Select company type</option>
                  {COMPANY_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                </select>
              </div>
              <div className={halfCol}>
                <label className={labelCls}><span className="text-red-500">*</span> Company / Business PAN</label>
                <input type="text" className={showErr(company.pan, validate.pan) ? inputErrCls : inputCls}
                  placeholder="e.g. ABCDE1234F (Business Entity PAN)" maxLength={10}
                  value={company.pan}
                  onChange={e => updateCompany('pan', alphanumOnly(e.target.value).toUpperCase())} />
                {showErr(company.pan, validate.pan) && <p className={hintCls}>{errorMsg.pan}</p>}
              </div>
              <div className={halfCol}>
                <label className={labelCls}><span className="text-red-500">*</span> FSSAI Number</label>
                <input type="text" className={showErr(company.fssai, validate.fssai) ? inputErrCls : inputCls}
                  placeholder="14-digit FSSAI license number" maxLength={14}
                  value={company.fssai}
                  onChange={e => updateCompany('fssai', digitsOnly(e.target.value))} />
                {showErr(company.fssai, validate.fssai) && <p className={hintCls}>{errorMsg.fssai}</p>}
              </div>
              {needsTanCin && (
                <>
                  <div className={halfCol}>
                    <label className={labelCls}><span className="text-red-500">*</span> TAN Number</label>
                    <input type="text" className={showErr(company.tan, validate.tan) ? inputErrCls : inputCls}
                      placeholder="e.g. MUMA12345B" maxLength={10}
                      value={company.tan}
                      onChange={e => updateCompany('tan', alphanumOnly(e.target.value).toUpperCase())} />
                    {showErr(company.tan, validate.tan) && <p className={hintCls}>{errorMsg.tan}</p>}
                  </div>
                  <div className={halfCol}>
                    <label className={labelCls}><span className="text-red-500">*</span> CIN Number</label>
                    <input type="text" className={showErr(company.cin, validate.cin) ? inputErrCls : inputCls}
                      placeholder="e.g. U72200MH2023PTC123456" maxLength={21}
                      value={company.cin}
                      onChange={e => updateCompany('cin', alphanumOnly(e.target.value).toUpperCase())} />
                    {showErr(company.cin, validate.cin) && <p className={hintCls}>{errorMsg.cin}</p>}
                  </div>
                </>
              )}
            </div>
          )}

          {/* ===== STEP 1: Owners ===== */}
          {step === 1 && (
            <div className="space-y-8">
              {owners.map((owner, idx) => (
                <div key={idx} className="relative">
                  {owners.length > 1 && (
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-semibold text-paragraph">Owner {idx + 1}</h4>
                      <button type="button" onClick={() => removeOwner(idx)}
                        className="text-xs text-red-500 hover:text-red-700 transition-colors">
                        Remove
                      </button>
                    </div>
                  )}
                  <div className="grid grid-cols-12 max-md:gap-y-5 md:gap-x-12 md:gap-8">
                    <div className={halfCol}>
                      <label className={labelCls}><span className="text-red-500">*</span> Full Name</label>
                      <input type="text" className={showErr(owner.name, validate.name) ? inputErrCls : inputCls}
                        placeholder="Owner full name (min 2 characters)"
                        value={owner.name} onChange={e => updateOwner(idx, 'name', e.target.value)} />
                      {showErr(owner.name, validate.name) && <p className={hintCls}>{errorMsg.name}</p>}
                    </div>
                    <div className={halfCol}>
                      <label className={labelCls}><span className="text-red-500">*</span> Mobile Number</label>
                      <input type="tel" className={showErr(owner.mobile, validate.mobile) ? inputErrCls : inputCls}
                        placeholder="10-digit mobile (starts with 6-9)" maxLength={10}
                        value={owner.mobile} onChange={e => updateOwner(idx, 'mobile', digitsOnly(e.target.value))} />
                      {showErr(owner.mobile, validate.mobile) && <p className={hintCls}>{errorMsg.mobile}</p>}
                    </div>
                    <div className={halfCol}>
                      <label className={labelCls}><span className="text-red-500">*</span> Email</label>
                      <input type="email" className={showErr(owner.email, validate.email) ? inputErrCls : inputCls}
                        placeholder="owner@example.com"
                        value={owner.email} onChange={e => updateOwner(idx, 'email', e.target.value)} />
                      {showErr(owner.email, validate.email) && <p className={hintCls}>{errorMsg.email}</p>}
                    </div>
                    <div className={halfCol}>
                      <label className={labelCls}><span className="text-red-500">*</span> Aadhar Number</label>
                      <input type="text" className={showErr(owner.aadhar, validate.aadhar) ? inputErrCls : inputCls}
                        placeholder="12-digit Aadhar (cannot start with 0 or 1)" maxLength={12}
                        value={owner.aadhar} onChange={e => updateOwner(idx, 'aadhar', digitsOnly(e.target.value))} />
                      {showErr(owner.aadhar, validate.aadhar) && <p className={hintCls}>{errorMsg.aadhar}</p>}
                    </div>
                    <div className={halfCol}>
                      <label className={labelCls}><span className="text-red-500">*</span> Owner Personal PAN</label>
                      <input type="text" className={showErr(owner.pan, validate.pan) ? inputErrCls : inputCls}
                        placeholder="e.g. ABCDE1234F (Personal PAN)" maxLength={10}
                        value={owner.pan} onChange={e => updateOwner(idx, 'pan', alphanumOnly(e.target.value).toUpperCase())} />
                      {showErr(owner.pan, validate.pan) && <p className={hintCls}>{errorMsg.pan}</p>}
                    </div>
                    <div className={halfCol}>
                      <label className={labelCls}><span className="text-red-500">*</span> Address</label>
                      <input type="text" className={showErr(owner.address, validate.address) ? inputErrCls : inputCls}
                        placeholder="Full address (min 5 characters)"
                        value={owner.address} onChange={e => updateOwner(idx, 'address', e.target.value)} />
                      {showErr(owner.address, validate.address) && <p className={hintCls}>{errorMsg.address}</p>}
                    </div>
                  </div>
                  {idx < owners.length - 1 && <hr className="mt-8 border-gray-100" />}
                </div>
              ))}
              <button type="button" onClick={addOwner}
                className="text-sm text-primary hover:underline font-medium">
                + Add Another Owner
              </button>
            </div>
          )}

          {/* ===== STEP 2: Outlet ===== */}
          {step === 2 && (
            <div className="grid grid-cols-12 max-md:gap-y-5 md:gap-x-12 md:gap-8">
              <div className={halfCol}>
                <label className={labelCls}><span className="text-red-500">*</span> Outlet Name</label>
                <input type="text" className={showErr(outlet.name, validate.name) ? inputErrCls : inputCls}
                  placeholder="Enter outlet name (min 2 characters)"
                  value={outlet.name}
                  onChange={e => setOutlet(prev => ({ ...prev, name: e.target.value }))} />
                {showErr(outlet.name, validate.name) && <p className={hintCls}>{errorMsg.name}</p>}
              </div>
              <div className={halfCol}>
                <label className={labelCls}><span className="text-red-500">*</span> Outlet Type</label>
                <select className={inputCls} value={outlet.outlet_type}
                  onChange={e => setOutlet(prev => ({ ...prev, outlet_type: e.target.value }))}>
                  <option value="">Select outlet type</option>
                  {OUTLET_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                </select>
              </div>
              <div className={halfCol}>
                <label className={labelCls}><span className="text-red-500">*</span> Outlet Mobile</label>
                <input type="tel" className={showErr(outlet.mobile, validate.mobile) ? inputErrCls : inputCls}
                  placeholder="10-digit mobile (starts with 6-9)" maxLength={10}
                  value={outlet.mobile}
                  onChange={e => setOutlet(prev => ({ ...prev, mobile: digitsOnly(e.target.value) }))} />
                {showErr(outlet.mobile, validate.mobile) && <p className={hintCls}>{errorMsg.mobile}</p>}
              </div>
              <div className={halfCol}>
                <label className={labelCls}><span className="text-red-500">*</span> Outlet Address</label>
                <input type="text" className={showErr(outlet.address, validate.address) ? inputErrCls : inputCls}
                  placeholder="Full outlet address (min 5 characters)"
                  value={outlet.address}
                  onChange={e => setOutlet(prev => ({ ...prev, address: e.target.value }))} />
                {showErr(outlet.address, validate.address) && <p className={hintCls}>{errorMsg.address}</p>}
              </div>
            </div>
          )}

          {/* --- Info banner --- */}
          <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> Your company, owner(s), and outlet will be created in <strong>inactive</strong> status.
              An admin will review and activate your account.
            </p>
          </div>

          {/* --- Navigation buttons --- */}
          <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={() => setStep(s => s - 1)}
              disabled={step === 0}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-[48px] border text-sm font-medium transition-all duration-300 ${
                step === 0
                  ? 'border-gray-200 bg-gray-50 text-gray-400 opacity-40 cursor-not-allowed'
                  : 'border-borderColour bg-white text-paragraph hover:border-primary hover:text-primary hover:bg-orange-50/50 active:scale-95 cursor-pointer shadow-sm'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            {step < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={() => {
                  if (step === 0 && company.company_type === 'proprietorship' && company.pan) {
                    setOwners(prev => prev.map((o, idx) => idx === 0 && !o.pan ? { ...o, pan: company.pan } : o));
                  }
                  setStep(s => s + 1);
                }}
                disabled={!canProceed}
                className={`flex items-center gap-2 px-7 py-2.5 rounded-[48px] bg-primary text-white text-sm font-semibold shadow-sm transition-all duration-300 ${
                  !canProceed
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-orange-600 active:scale-95 cursor-pointer'
                }`}
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4 text-white stroke-[2.5]" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canProceed || isSubmitting}
                className={`flex items-center gap-2 px-7 py-2.5 rounded-[48px] bg-primary text-white text-sm font-semibold shadow-sm transition-all duration-300 ${
                  (!canProceed || isSubmitting)
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-orange-600 active:scale-95 cursor-pointer'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Submitting...</span>
                  </span>
                ) : (
                  <>
                    <span>Submit Onboarding</span>
                    <CheckCircle className="w-4 h-4 text-white stroke-[2.5]" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
