import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Andes Studio — Systems & Automations',
  description: 'AI-assisted intake workflows, operational pipelines and dashboards for European businesses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#06080E] text-slate-100 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
