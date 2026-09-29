import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'AI Evidence Auditor', description: 'Claim-by-claim AI answer evaluation' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl"><body>{children}</body></html>}