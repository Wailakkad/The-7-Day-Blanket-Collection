import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';

const CHECKOUT_URL = 'https://payhip.com/b/OPqsZ';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/blog', label: 'Blog' },
  { to: '/store', label: 'Store' },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FBF7F1]/95 backdrop-blur-md border-b border-[#E9E1D7]/60 shadow-sm'
          : 'bg-[#FBF7F1] border-b border-[#E9E1D7]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline shrink-0">
          <span className="w-8 h-8 rounded-full bg-[#2F4A3A] text-[#FBF7F1] flex items-center justify-center font-fraunces font-bold text-sm">
            7
          </span>
          <span className="font-fraunces font-semibold text-lg md:text-xl text-[#1F1F1F] tracking-tight hidden sm:block">
            The 7-Day Blanket Collection
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors no-underline ${
                isActive(link.to)
                  ? 'text-[#2F4A3A] bg-[#2F4A3A]/8 font-semibold'
                  : 'text-[#5B5B5B] hover:text-[#1F1F1F] hover:bg-[#1F1F1F]/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5B5B5B] bg-[#FFFFFF] border border-[#E9E1D7] px-3 py-1 rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#2F4A3A]" /> PDF Digital Guide
          </span>
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2F4A3A] text-white text-sm font-semibold hover:bg-[#263C30] transition-colors no-underline shadow-sm"
          >
            Get the Guide ($12) <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-[#5B5B5B] hover:text-[#1F1F1F] hover:bg-[#1F1F1F]/5 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-[#E9E1D7]/60 bg-[#FBF7F1]"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors no-underline ${
                    isActive(link.to)
                      ? 'text-[#2F4A3A] bg-[#2F4A3A]/8 font-semibold'
                      : 'text-[#5B5B5B] hover:text-[#1F1F1F] hover:bg-[#1F1F1F]/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-[#E9E1D7]/60">
                <a
                  href={CHECKOUT_URL}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-[#2F4A3A] text-white text-sm font-semibold hover:bg-[#263C30] transition-colors no-underline shadow-sm"
                >
                  Get the Guide ($12) <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
