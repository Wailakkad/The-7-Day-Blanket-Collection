import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FBF7F1] text-[#1F1F1F] font-sans antialiased selection:bg-[#2F4A3A]/15 selection:text-[#2F4A3A]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
