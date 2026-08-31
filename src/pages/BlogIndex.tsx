import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function BlogIndex() {
  return (
    <div className="py-16 md:py-24 bg-[#FBF7F1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-3.5 py-1 rounded-full">
            <BookOpen className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
            Crochet Blog
          </span>
          <h1 className="font-fraunces text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F1F1F] tracking-tight">
            Crochet Blog
          </h1>
          <p className="text-base sm:text-lg text-[#5B5B5B] max-w-xl mx-auto leading-relaxed">
            Beginner-friendly guides that help you choose, plan, crochet, and finish.
          </p>
        </div>

        {/* Post Cards */}
        <div className="space-y-6 max-w-2xl mx-auto">

          {/* Post Card 1 */}
          <Link
            to="/blog/crochet-blanket-stitches-guide"
            className="block bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-[#2F4A3A]/40 transition-all no-underline group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#2F4A3A]/10 text-[#2F4A3A] flex items-center justify-center shrink-0 mt-0.5">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-fraunces text-xl sm:text-2xl font-semibold text-[#1F1F1F] mb-2 group-hover:text-[#2F4A3A] transition-colors">
                  Crochet Blanket Stitches: A Handy Guide
                </h2>
                <p className="text-sm sm:text-base text-[#5B5B5B] leading-relaxed mb-4">
                  Basic, textured, lacy, and fun stitches—plus UK vs US terms and a finishable next step.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F4A3A] group-hover:gap-2.5 transition-all">
                  Read the guide <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

        </div>

        {/* CTA Strip */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-[#E4ECE7] border border-[#CCD9D0] rounded-2xl px-6 py-5">
            <p className="font-fraunces text-base sm:text-lg font-medium text-[#2F4A3A] mb-3">
              Want 7 finishable blanket patterns?
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2F4A3A] text-white font-semibold text-sm hover:bg-[#263C30] transition-colors no-underline shadow-sm"
            >
              Discover the Blanket Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
