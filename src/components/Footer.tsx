import React from 'react';
import { Link } from 'react-router-dom';

const CHECKOUT_URL = 'https://payhip.com/b/OPqsZ';

export default function Footer() {
  return (
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
          <Link to="/store" className="hover:text-[#1F1F1F] transition-colors no-underline text-[#5B5B5B]">
            Store
          </Link>
          <a href={CHECKOUT_URL} className="hover:text-[#1F1F1F] transition-colors no-underline text-[#5B5B5B]">
            Get the Guide
          </a>
        </div>

        <p className="text-[11px] text-[#5B5B5B]/80">
          © {new Date().getFullYear()} All rights reserved. Digital PDF download.
        </p>
      </div>
    </footer>
  );
}
