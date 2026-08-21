import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Outlet Onboarding - Register Your Restaurant with MenuMitra',
  description: 'Register your restaurant, cafe, or food outlet with MenuMitra. Fill in your company, owner, and outlet details to get started. Your account will be reviewed and activated by our team.',
  keywords: [
    'restaurant onboarding',
    'register restaurant',
    'outlet registration',
    'MenuMitra signup',
    'restaurant management registration',
  ],
  openGraph: {
    title: 'Outlet Onboarding - Register Your Restaurant with MenuMitra',
    description: 'Register your restaurant with MenuMitra. Fill in your details and our team will activate your account.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
