import { ReleaseVersionGroup } from '../types/changelog';

export const CHANGELOG_RELEASES: ReleaseVersionGroup[] = [
  {
    version: '2.3.3',
    changes: [
      {
        id: 'v233-1',
        category: 'improved',
        description: 'Visual Table Status: Table indicator immediately turns yellow upon printing a bill during order creation.',
        apps: ['pos'],
      },
      {
        id: 'v233-2',
        category: 'added',
        description: 'Item Notes on Receipts: Custom preparation notes added during order creation now print on final customer receipts as well as kitchen tickets (KOTs).',
        apps: ['pos'],
      },
      {
        id: 'v233-3',
        category: 'improved',
        description: 'Direct Quantity Editing: Quickly edit item quantities directly on the order cart page.',
        apps: ['pos', 'mobile'],
      },
      {
        id: 'v233-4',
        category: 'added',
        description: 'Table Splitting on Mobile: Added option to split tables directly from the Mobile App settings.',
        apps: ['mobile'],
      },
    ],
  },
  {
    version: '2.3.2',
    changes: [
      {
        id: 'v232-1',
        category: 'added',
        description: 'Order Origin Source Tags: Order details display the source of each order (POS, Mobile App, or Online).',
        apps: ['pos', 'kds'],
      },
      {
        id: 'v232-2',
        category: 'improved',
        description: 'Enhanced Printer Settings & LAN Support: Improved printer configuration interface and performance, adding support for network (LAN) thermal printers.',
        apps: ['pos'],
      },
      {
        id: 'v232-3',
        category: 'added',
        description: 'Portion Visual Indicators: Menu items with multiple portion sizes feature an intuitive portion icon on the order screen.',
        apps: ['pos', 'mobile'],
      },
      {
        id: 'v232-4',
        category: 'improved',
        description: 'Remote Mobile Printing: Orders placed on the Mobile App automatically route kitchen tickets and receipts to the local POS thermal printer.',
        apps: ['pos', 'mobile'],
      },
      {
        id: 'v232-5',
        category: 'improved',
        description: 'Table Bill Status Color: Table cards turn yellow on the floor map when a bill print is requested.',
        apps: ['pos'],
      },
    ],
  },
  {
    version: '2.3.0',
    changes: [
      {
        id: 'v230-1',
        category: 'changed',
        description: 'Cleaned Receipt Footer: Streamlined the bottom area of printed receipts below grand total to emphasize the company website URL.',
        apps: ['pos'],
      },
      {
        id: 'v230-2',
        category: 'fixed',
        description: 'Receipt Spacing Formatting: Removed extra spacing after the website URL on thermal receipts.',
        apps: ['pos'],
      },
      {
        id: 'v230-3',
        category: 'added',
        description: 'Popular Category & Top Menu Display: Automatically displays top 20 selling dishes in a dedicated Popular category and at the top of the All Menu list.',
        apps: ['pos', 'mobile'],
      },
      {
        id: 'v230-4',
        category: 'improved',
        description: 'Streamlined PIN Login: Fast, secure 4-digit PIN authentication across POS and Mobile App.',
        apps: ['pos', 'mobile'],
      },
      {
        id: 'v230-5',
        category: 'improved',
        description: 'Faster Order Flow: Optimized screen responsiveness and rendering speed during order creation and table selection.',
        apps: ['pos', 'mobile'],
      },
      {
        id: 'v230-6',
        category: 'improved',
        description: 'Smooth List View Performance: Accelerated rendering speed across order lists, menu item grids, and bill history.',
        apps: ['pos', 'mobile'],
      },
      {
        id: 'v230-7',
        category: 'improved',
        description: 'Receipt Portion Initials & Number Cleanups: Abbreviated portion names on thermal prints and removed # symbol prefix from bill/order numbers.',
        apps: ['pos'],
      },
      {
        id: 'v230-8',
        category: 'fixed',
        description: 'Paid Stamp Spacing: Cleaned spacing above the PAID status title on printed bills.',
        apps: ['pos'],
      },
      {
        id: 'v230-9',
        category: 'added',
        description: 'Portion Badge Icon: Visual indicator displayed on order items configured with multiple portion sizes.',
        apps: ['pos'],
      },
      {
        id: 'v230-10',
        category: 'added',
        description: 'Seamless Auto-Updates: POS and Mobile App support background updates with automatic application restart.',
        apps: ['pos', 'mobile'],
      },
      {
        id: 'v230-11',
        category: 'improved',
        description: 'Double-Click Protection: UI button protection preventing duplicate order submissions and accidental double-clicks.',
        apps: ['pos', 'mobile'],
      },
      {
        id: 'v230-12',
        category: 'added',
        description: 'Multi-Tier Menu Pricing: Dynamic menu pricing support for different ordering channels (AC, Non-AC, Delivery, Takeaway).',
        apps: ['pos', 'mobile'],
      },
      {
        id: 'v230-13',
        category: 'added',
        description: 'Section-Level Price Overrides: Set price modifiers directly at the menu section level during menu creation and updates.',
        apps: ['pos'],
      },
      {
        id: 'v230-14',
        category: 'added',
        description: 'Menu Portion Management: Easily add, edit, and manage portion sizes (Half, Full, Small, Large) in menu configuration.',
        apps: ['pos'],
      },
      {
        id: 'v230-15',
        category: 'added',
        description: 'Combo Item Details Preview Modal: Clickable info icon on combo items to preview included dishes in a popup modal.',
        apps: ['pos', 'mobile'],
      },
      {
        id: 'v230-16',
        category: 'added',
        description: 'Multi-Printer Support: Print orders and KOTs across multiple thermal printers simultaneously.',
        apps: ['pos', 'mobile'],
      },
    ],
  },
];
