import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const CHECKOUT_URL = 'https://payhip.com/b/OPqsZ';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-[#FBF7F1] text-[#1F1F1F] font-sans antialiased selection:bg-[#2F4A3A]/15 selection:text-[#2F4A3A]">

      {/* Header */}
      <header className="py-4 md:py-5 border-b border-[#E9E1D7]/60 bg-[#FBF7F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <span className="w-8 h-8 rounded-full bg-[#2F4A3A] text-[#FBF7F1] flex items-center justify-center font-fraunces font-bold text-sm">
              7
            </span>
            <span className="font-fraunces font-semibold text-lg md:text-xl text-[#1F1F1F] tracking-tight">
              The 7-Day Blanket Collection
            </span>
          </Link>
          <nav className="flex items-center gap-4 sm:gap-6">
            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors no-underline ${
                location.pathname.startsWith('/blog')
                  ? 'text-[#2F4A3A] font-semibold'
                  : 'text-[#5B5B5B] hover:text-[#1F1F1F]'
              }`}
            >
              Blog
            </Link>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-[#5B5B5B] bg-[#FFFFFF] border border-[#E9E1D7] px-3 py-1 rounded-full shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#2F4A3A]" /> PDF Digital Guide
            </span>
            <a
              href={CHECKOUT_URL}
              className="text-xs font-semibold text-[#2F4A3A] hover:text-[#263C30] underline underline-offset-4 no-underline"
            >
              Instant Access ($12)
            </a>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="py-10 bg-[#FFFFFF] border-t border-[#E9E1D7] text-xs text-[#5B5B5B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#2F4A3A] text-[#FBF7F1] flex items-center justify-center font-fraunces font-bold text-xs">
              7
            </span>
            <span className="font-fraunces font-semibold text-[#1F1F1F]">
              The 7-Day Crochet Blanket Collection
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-[#1F1F1F] transition-colors no-underline text-[#5B5B5B]">
              Home
            </Link>
            <Link to="/blog" className="hover:text-[#1F1F1F] transition-colors no-underline text-[#5B5B5B]">
              Blog
            </Link>
          </div>
          <p className="text-[11px] text-[#5B5B5B]/80">
            © {new Date().getFullYear()} All rights reserved. Digital PDF download.
          </p>
        </div>
      </footer>
    </div>
  );
}
