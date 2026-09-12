import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, X, ZoomIn } from 'lucide-react';

/* ─── SVG Image Components ─── */

function HeroPhonePouch() {
  return (
    <svg viewBox="0 0 800 400" className="w-full" style={{ background: '#F5F0E8' }}>
      <defs>
        <linearGradient id="hp-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E9E1D7" />
          <stop offset="100%" stopColor="#FBF7F1" />
        </linearGradient>
      </defs>
      <rect width="800" height="400" fill="url(#hp-bg)" />
      {/* Phone pouch body */}
      <rect x="280" y="60" width="240" height="280" rx="20" fill="#2F4A3A" />
      <rect x="290" y="70" width="220" height="260" rx="14" fill="#4A7A5E" opacity="0.3" />
      {/* Stitch texture */}
      {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(row => [0,1,2,3,4,5,6,7].map(col => (
        <rect key={`st-${row}-${col}`} x={295+col*27} y={75+row*20} width={22} height={14} rx={3} fill="#2F4A3A" opacity={0.4 + (row+col)%2*0.15} />
      )))}
      {/* Phone peeking out */}
      <rect x="310" y="40" width="180" height="30" rx="6" fill="#1F1F1F" />
      <rect x="320" y="45" width="160" height="20" rx="3" fill="#333" />
      <circle cx="400" cy="55" r="4" fill="#555" />
      {/* Strap */}
      <path d="M280,120 Q200,120 200,200 L200,350" stroke="#2F4A3A" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M520,120 Q600,120 600,200 L600,350" stroke="#2F4A3A" strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* Button */}
      <circle cx="400" cy="340" r="10" fill="#E07A5F" stroke="#FBF7F1" strokeWidth="2" />
      <circle cx="400" cy="340" r="3" fill="#FBF7F1" />
      {/* Title */}
      <text x="400" y="390" textAnchor="middle" fill="#2F4A3A" fontSize="14" fontFamily="sans-serif" opacity="0.6">Crochet Phone Pouch Free Pattern</text>
    </svg>
  );
}

function SizeGuideIllustration() {
  return (
    <svg viewBox="0 0 600 300" className="w-full" style={{ background: '#FBF7F1' }}>
      <rect width="600" height="300" fill="#FBF7F1" rx="16" />
      {/* Phone outline */}
      <rect x="180" y="30" width="120" height="240" rx="14" fill="none" stroke="#2F4A3A" strokeWidth="2" />
      <rect x="190" y="45" width="100" height="200" rx="4" fill="#E9E1D7" />
      <circle cx="240" cy="260" r="6" fill="none" stroke="#2F4A3A" strokeWidth="1.5" />
      {/* Width arrow */}
      <line x1="170" y1="150" x2="310" y2="150" stroke="#E07A5F" strokeWidth="2" />
      <polygon points="165,150 175,145 175,155" fill="#E07A5F" />
      <polygon points="315,150 305,145 305,155" fill="#E07A5F" />
      <text x="240" y="142" textAnchor="middle" fill="#E07A5F" fontSize="11" fontFamily="sans-serif" fontWeight="600">Width + ease</text>
      {/* Height arrow */}
      <line x1="150" y1="30" x2="150" y2="270" stroke="#E07A5F" strokeWidth="2" />
      <polygon points="150,25 145,35 155,35" fill="#E07A5F" />
      <polygon points="150,275 145,265 155,265" fill="#E07A5F" />
      <text x="135" y="155" textAnchor="middle" fill="#E07A5F" fontSize="10" fontFamily="sans-serif" fontWeight="600" transform="rotate(-90,135,155)">Height + ease</text>
      {/* Notes */}
      <rect x="340" y="60" width="220" height="70" rx="10" fill="#E4ECE7" />
      <text x="450" y="85" textAnchor="middle" fill="#2F4A3A" fontSize="11" fontFamily="sans-serif" fontWeight="600">Add 0.5" ease on each side</text>
      <text x="450" y="105" textAnchor="middle" fill="#5B5B5B" fontSize="10" fontFamily="sans-serif">For phone case thickness</text>
      <text x="450" y="120" textAnchor="middle" fill="#5B5B5B" fontSize="10" fontFamily="sans-serif">Snug fit prevents sliding</text>
      <rect x="340" y="150" width="220" height="90" rx="10" fill="#E4ECE7" />
      <text x="450" y="175" textAnchor="middle" fill="#2F4A3A" fontSize="11" fontFamily="sans-serif" fontWeight="600">Fit Check Method</text>
      <text x="450" y="195" textAnchor="middle" fill="#5B5B5B" fontSize="10" fontFamily="sans-serif">1. Crochet base + 2 rows</text>
      <text x="450" y="210" textAnchor="middle" fill="#5B5B5B" fontSize="10" fontFamily="sans-serif">2. Place phone inside</text>
      <text x="450" y="225" textAnchor="middle" fill="#5B5B5B" fontSize="10" fontFamily="sans-serif">3. Should be snug, not tight</text>
    </svg>
  );
}

function PouchStepImage({ step, title, colors }: { step: string; title: string; colors: string[] }) {
  return (
    <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
      <svg viewBox="0 0 200 160" className="w-full" style={{ background: '#F5F0E8' }}>
        <rect width="200" height="160" fill="#FBF7F1" />
        {/* Pouch base */}
        <rect x="50" y="30" width="100" height="100" rx="10" fill={colors[0]} opacity="0.8" />
        <rect x="55" y="35" width="90" height="90" rx={colors.length > 2 ? 8 : 10} fill={colors[1] || colors[0]} opacity="0.3" />
        {/* Stitch lines */}
        {[0,1,2,3,4,5].map(i => (
          <line key={i} x1="55" y1={45+i*14} x2="145" y2={45+i*14} stroke={colors[0]} strokeWidth="1.5" opacity="0.4" />
        ))}
        {/* Step badge */}
        <circle cx="170" cy="25" r="16" fill={colors[0]} />
        <text x="170" y="30" textAnchor="middle" fill="white" fontSize="12" fontFamily="sans-serif" fontWeight="bold">{step}</text>
        <text x="100" y="150" textAnchor="middle" fill="#5B5B5B" fontSize="10" fontFamily="sans-serif">{title}</text>
      </svg>
    </div>
  );
}

function StrapOptionsGrid() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Crossbody */}
      <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
        <svg viewBox="0 0 200 160" className="w-full" style={{ background: '#F5F0E8' }}>
          <rect width="200" height="160" fill="#FBF7F1" />
          <rect x="70" y="50" width="60" height="80" rx="8" fill="#2F4A3A" />
          <path d="M70,70 Q40,70 40,100 L40,150" stroke="#2F4A3A" strokeWidth="4" fill="none" />
          <path d="M130,70 Q160,70 160,100 L160,150" stroke="#2F4A3A" strokeWidth="4" fill="none" />
          <text x="100" y="155" textAnchor="middle" fill="#5B5B5B" fontSize="9" fontFamily="sans-serif">Crossbody</text>
        </svg>
      </div>
      {/* Wristlet */}
      <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
        <svg viewBox="0 0 200 160" className="w-full" style={{ background: '#F5F0E8' }}>
          <rect width="200" height="160" fill="#FBF7F1" />
          <rect x="60" y="40" width="80" height="90" rx="10" fill="#2F4A3A" />
          <path d="M140,70 Q170,70 170,90 Q170,110 140,110" stroke="#2F4A3A" strokeWidth="4" fill="none" />
          <circle cx="170" cy="90" r="3" fill="#E07A5F" />
          <text x="100" y="155" textAnchor="middle" fill="#5B5B5B" fontSize="9" fontFamily="sans-serif">Wristlet</text>
        </svg>
      </div>
      {/* Adjustable */}
      <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
        <svg viewBox="0 0 200 160" className="w-full" style={{ background: '#F5F0E8' }}>
          <rect width="200" height="160" fill="#FBF7F1" />
          <rect x="60" y="50" width="80" height="80" rx="10" fill="#2F4A3A" />
          <path d="M60,70 Q30,70 30,100 L30,140" stroke="#2F4A3A" strokeWidth="4" fill="none" />
          <path d="M140,70 Q170,70 170,100 L170,140" stroke="#2F4A3A" strokeWidth="4" fill="none" />
          <rect x="25" y="95" width="10" height="10" rx="2" fill="#E07A5F" />
          <rect x="165" y="95" width="10" height="10" rx="2" fill="#E07A5F" />
          <text x="100" y="155" textAnchor="middle" fill="#5B5B5B" fontSize="9" fontFamily="sans-serif">Adjustable</text>
        </svg>
      </div>
      {/* Button closure */}
      <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
        <svg viewBox="0 0 200 160" className="w-full" style={{ background: '#F5F0E8' }}>
          <rect width="200" height="160" fill="#FBF7F1" />
          <rect x="60" y="40" width="80" height="90" rx="10" fill="#2F4A3A" />
          <rect x="60" y="30" width="80" height="25" rx="6" fill="#4A7A5E" />
          <circle cx="100" cy="55" r="6" fill="#E07A5F" stroke="#FBF7F1" strokeWidth="2" />
          <text x="100" y="155" textAnchor="middle" fill="#5B5B5B" fontSize="9" fontFamily="sans-serif">Button Flap</text>
        </svg>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */

export default function BlogArticleCrochetPhonePouchFreePattern() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt });
  const closeLightbox = () => setLightbox(null);

  return (
    <article className="bg-[#FBF7F1]">

      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <HeroPhonePouch />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center w-full">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#CCD9D0] hover:text-white mb-6 no-underline transition-colors"
          >
            ← Back to Blog
          </Link>
          <h1 className="font-fraunces text-3xl sm:text-4xl md:text-5xl leading-[1.15] font-semibold text-white tracking-tight mb-5">
            Crochet Phone Pouch Free Pattern:<br className="hidden sm:block" /> Easy Crochet Phone Pouch That Fits Any Phone
          </h1>
          <p className="text-base sm:text-lg text-[#CCD9D0] max-w-2xl mx-auto leading-relaxed mb-2">
            With Strap Options
          </p>
          <p className="text-sm text-[#CCD9D0]/70 max-w-xl mx-auto leading-relaxed">
            A beginner-friendly crochet phone pouch free pattern with a simple sizing method, strap options, and easy add-ons like a flap and pocket.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Article Meta */}
        <div className="flex items-center gap-3 text-xs text-[#5B5B5B] mb-10 pb-6 border-b border-[#E9E1D7]">
          <span className="inline-flex items-center gap-1.5 bg-[#E4ECE7] text-[#2F4A3A] px-2.5 py-1 rounded-full font-semibold">
            <BookOpen className="w-3 h-3" /> Pattern Guide
          </span>
          <span>·</span>
          <span>Beginner Friendly</span>
          <span>·</span>
          <span>15 min read</span>
        </div>

        {/* Article Body */}
        <div className="prose-custom space-y-10">

          {/* Intro */}
          <div className="space-y-5">
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              A <strong>crochet phone pouch free pattern</strong> is one of the most practical projects you can make. It's small enough to finish in an evening, useful enough that you'll actually carry it every day, and customizable enough to fit any phone — from the smallest iPhone to the largest Android.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              This <strong>crochet phone pouch</strong> uses a simple "measure and add ease" sizing method that works for <strong>any phone</strong>. You'll also get strap options (crossbody, wristlet, adjustable) and optional add-ons like a flap closure, button, inside pocket, and fabric lining.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              Whether you're making a <strong>crochet mobile pouch</strong> for yourself or a gift, this pattern is beginner-friendly and works up fast. Save this post — you'll want to come back when you need a <strong>phone pouch crochet</strong> idea.
            </p>
          </div>

          {/* Hero Image */}
          <button
            type="button"
            onClick={() => openLightbox('hero-phone-pouch', 'Crochet phone pouch free pattern finished pouch with strap')}
            className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
          >
            <HeroPhonePouch />
            <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
            </span>
          </button>

          {/* CTA Block */}
          <div className="bg-gradient-to-br from-[#2F4A3A] to-[#263C30] rounded-2xl p-6 sm:p-8 text-center shadow-lg">
            <p className="font-fraunces text-lg sm:text-xl font-medium text-white mb-4">
              Ready to crochet your phone pouch?
            </p>
            <Link
              to="/store/7-day-blanket-collection"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2F4A3A] font-semibold text-sm hover:bg-[#FBF7F1] transition-colors no-underline shadow-sm"
            >
              Explore Blanket Patterns Too <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Size Guide */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Crochet Phone Pouch Size Guide (Fits Any Phone)
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">The secret to a phone pouch that fits perfectly is simple math — measure, add ease, and crochet.</p>

            <button
              type="button"
              onClick={() => openLightbox('size-guide', 'Crochet mobile pouch sizing guide for any phone')}
              className="block w-full cursor-pointer bg-transparent border-0 p-0 mb-5 relative group"
            >
              <SizeGuideIllustration />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
              </span>
            </button>

            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">How to Measure Phone Width, Height &amp; Thickness</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Measure your phone's <strong>width</strong> (across the screen), <strong>height</strong> (top to bottom), and <strong>thickness</strong> (including the case). Write these numbers down — you'll use them for every step.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Add Ease for Case Thickness</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Add <strong>0.5" to 1"</strong> to the width and height for ease. If your phone is 3" wide, crochet the pouch 3.5"–4" wide. This accounts for the case and makes it easy to slide in and out.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">The "Fit Check" Method</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Crochet the base panel plus 2-3 rows of the sides. Place your phone inside. It should be <strong>snug but not tight</strong> — you should be able to slide it in easily but it won't fall out on its own. Adjust your stitch count before continuing.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Why Snug Fit Matters</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">A <strong>crochet cellphone pouch</strong> that's too loose will let your phone slide out. A snug fit keeps it secure without needing a zipper. The natural stretch of crochet fills the gap over time.</p>
              </div>
            </div>
          </section>

          {/* Materials */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Materials + Yarn (Best for a Sturdy Phone Pouch Crochet)
              </h2>
            </div>

            <button
              type="button"
              onClick={() => openLightbox('materials', 'Materials needed for crochet phone pouch free pattern')}
              className="block w-full cursor-pointer bg-transparent border-0 p-0 mb-5 relative group"
            >
              <PouchStepImage step="M" title="Materials" colors={['#2F4A3A', '#E9E1D7', '#E4ECE7']} />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
              </span>
            </button>

            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Yarn: Cotton vs Acrylic</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed"><strong>Cotton</strong> is the best choice for a <strong>phone pouch crochet</strong> project — it's durable, holds its shape, and doesn't stretch out over time. Acrylic works but can pill and stretch. For a sturdy <strong>crochet mobile pouch</strong>, always choose cotton.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Hook Size Guidance</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Use the hook size recommended on your yarn label, or go down half a size for a tighter, denser fabric. A smaller hook = a sturdier pouch that holds its shape better.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Notions</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Stitch markers (to mark corners), tapestry needle (for weaving ends), scissors, and a measuring tape. Optional: button or magnetic snap for closure, lining fabric.</p>
              </div>
            </div>
          </section>

          {/* Pattern Steps */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Easy Crochet Phone Pouch Pattern (Step-by-Step)
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">A simple construction that works for any phone size. Follow these steps and adjust based on your measurements.</p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <PouchStepImage step="1" title="Base Panel" colors={['#2F4A3A', '#4A7A5E']} />
              <PouchStepImage step="2" title="Work Up Sides" colors={['#2F4A3A', '#E07A5F']} />
              <PouchStepImage step="3" title="Height Adjustment" colors={['#2F4A3A', '#E9E1D7']} />
              <PouchStepImage step="4" title="Finishing Edge" colors={['#2F4A3A', '#4A7A5E']} />
            </div>

            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Step 1: Base Panel</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Chain the width of your phone + ease. Work rows of single crochet until the base is about 1" tall. This creates a flat rectangle that forms the bottom of your <strong>crochet phone pouch</strong>.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Step 2: Work Up the Sides</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Instead of turning, work in rounds around the base panel. Place 3 SC in each corner to keep it flat. Continue working SC in rounds — the sides will start to build up naturally.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Step 3: Height Adjustment</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Keep crocheting rounds until the pouch is about 0.5" shorter than your phone height. The finishing edge will add the extra height. Try it on your phone as you go.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Step 4: Finishing Edge</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Work one round of reverse single crochet (crab stitch) for a clean, professional edge. Or add a simple SC round with a button loop if you want a closure.</p>
              </div>
            </div>
          </section>

          {/* Strap Options */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Strap Options (Crossbody / Wristlet / Adjustable)
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">Choose the strap style that fits your lifestyle. All three options attach to the same base pouch.</p>

            <button
              type="button"
              onClick={() => openLightbox('strap-options', 'Phone pouch crochet strap options crossbody wristlet')}
              className="block w-full cursor-pointer bg-transparent border-0 p-0 mb-5 relative group"
            >
              <StrapOptionsGrid />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
              </span>
            </button>

            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Crossbody Strap</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Chain to desired length (typically 40"–50" for adults). Attach to both sides of the pouch opening. The strap should hang at hip level when worn crossbody. Reinforce the attachment points with 3-4 extra SC.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Wristlet Loop</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Chain 30–40, attach back to the same side of the pouch. This creates a loop you can slip over your wrist. Great for quick errands where you don't want a full strap.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Adjustable Strap</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Crochet a long strap with buttonholes every 2". Use a slider button or D-ring to adjust the length. This lets you switch between crossbody and shoulder carry.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Reinforcing Strap Stitches</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Always reinforce where the strap meets the pouch — work 3-4 extra SC through both the strap and the pouch edge. This prevents the strap from pulling out under the weight of the phone.</p>
              </div>
            </div>
          </section>

          {/* Optional Add-Ons */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">5</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Optional Add-Ons (Button, Flap, Lining, Pocket)
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">Customize your <strong>crochet cellphone pouch</strong> with these easy additions.</p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <PouchStepImage step="F" title="Flap Closure" colors={['#2F4A3A', '#E07A5F']} />
              <PouchStepImage step="B" title="Button" colors={['#2F4A3A', '#4A7A5E']} />
              <PouchStepImage step="P" title="Inside Pocket" colors={['#2F4A3A', '#E9E1D7']} />
              <PouchStepImage step="L" title="Fabric Lining" colors={['#2F4A3A', '#D4C5B0']} />
            </div>

            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Flap Closure</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">After finishing the pouch, attach yarn to the back edge. Work rows of SC to create a flap that folds over the front. The flap should cover about 1/3 of the pouch front. Add a button loop at the tip.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Button or Magnetic Snap</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Sew a button to the front of the pouch and create a chain loop on the flap. For magnetic snaps, push the prongs through the fabric and bend them flat inside. <strong>Safety note:</strong> if this is for a child, use a sew-on button instead of a magnetic snap.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Inside Pocket for Cards</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Crochet a small rectangle (card width + 1" ease, about 3" tall). Sew it to the inside back wall of the pouch before lining. This gives you a spot for a transit card or ID.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Simple Fabric Lining</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Cut lining fabric to match the pouch interior. Fold the top edge under 0.5" and sew it to the inside of the pouch with a whip stitch. Lining prevents the phone from catching on yarn loops and adds structure.</p>
              </div>
            </div>
          </section>

          {/* CTA Block Mid */}
          <div className="bg-gradient-to-br from-[#2F4A3A] to-[#263C30] rounded-2xl p-6 sm:p-8 text-center shadow-lg">
            <p className="font-fraunces text-lg sm:text-xl font-medium text-white mb-4">
              Love this pattern? Try these stitches in a blanket.
            </p>
            <Link
              to="/store/7-day-blanket-collection"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2F4A3A] font-semibold text-sm hover:bg-[#FBF7F1] transition-colors no-underline shadow-sm"
            >
              Discover the Blanket Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Common Mistakes */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">6</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Common Mistakes (And Easy Fixes)
              </h2>
            </div>
            <div className="space-y-4">
              {[
                { mistake: 'Pouch Too Tight or Too Loose', fix: 'Always do the fit check after 2-3 rows. If too tight, go up a hook size or add 1-2 stitches. If too loose, go down a hook size. The pouch should be snug but not a struggle to insert.' },
                { mistake: 'Stretching Over Time', fix: 'Use cotton yarn (not acrylic) and go down half a hook size for a tighter fabric. Cotton holds its shape much better than acrylic over time.' },
                { mistake: 'Strap Twisting', fix: 'Lay the strap flat before attaching. Make sure it is not twisted along its length. Attach both ends in the same direction.' },
                { mistake: 'Bottom Sagging', fix: 'The base panel should be tight and dense. Use SC (not DC) for the base, and consider working the base in rows for extra structure before switching to rounds for the sides.' },
                { mistake: 'Uneven Edges', fix: 'Place a stitch marker in the first stitch of every round. Count your stitches at the end of each round. If the count changes, fix it immediately.' },
              ].map((item, i) => (
                <div key={i} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <p className="text-sm font-semibold text-[#1F1F1F] mb-1">{item.mistake}</p>
                  <p className="text-sm text-[#5B5B5B] leading-relaxed">{item.fix}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              FAQ: Crochet Phone Pouch Free Pattern
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What stitch is best for a crochet phone pouch?',
                  a: 'Single crochet (SC) is the best stitch for a phone pouch — it creates a dense, sturdy fabric that holds its shape. Use it for both the base and sides. HDC works too but is slightly less dense.',
                },
                {
                  q: 'How do I size it for any phone?',
                  a: 'Measure your phone width and height, add 0.5"–1" ease for each dimension, and crochet to those measurements. The fit check method (crochet base + 2 rows, test with phone) ensures a perfect fit.',
                },
                {
                  q: 'Can I crochet it with cotton yarn?',
                  a: 'Yes — cotton is actually the best choice! It\'s durable, holds its shape, and doesn\'t stretch out over time. Use worsted weight (#4) cotton for the sturdiest result.',
                },
                {
                  q: 'How long should a crossbody strap be?',
                  a: 'For adults, 40"–50" is standard. The pouch should hang at hip level when worn crossbody. Measure from your shoulder to your hip and double it for the strap length.',
                },
                {
                  q: 'How do I make it more secure?',
                  a: 'Add a flap closure with a button, or use a magnetic snap. A snug fit also helps — the phone should require a gentle pull to remove. Lining the pouch adds an extra layer of security.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <p className="text-sm font-semibold text-[#1F1F1F] mb-2">{item.q}</p>
                  <p className="text-sm text-[#5B5B5B] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-2xl p-5 sm:p-6">
            <p className="text-sm font-semibold text-[#2F4A3A] mb-3">Related Guides:</p>
            <div className="space-y-2">
              <Link to="/blog/crochet-blanket-stitches-guide" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Blanket Stitches: A Handy Guide
              </Link>
              <Link to="/blog/crochet-stitch-patterns" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Stitch Patterns: 27 Textured Stitches That Look Expensive
              </Link>
              <Link to="/blog/crochet-blanket-sizes-yarn-yardage-chart" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Blanket Sizes + Yarn Yardage Calculator
              </Link>
            </div>
          </div>

          {/* Closing CTA */}
          <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-2xl p-6 sm:p-8 text-center">
            <p className="font-fraunces text-lg sm:text-xl font-semibold text-[#2F4A3A] mb-3">
              Ready to try these stitches in a blanket?
            </p>
            <p className="text-sm text-[#5B5B5B] mb-5 max-w-md mx-auto">
              Our beginner-friendly blanket patterns include sizing help, yarn guidance, and straight-edge tips — so you can finish with confidence.
            </p>
            <Link
              to="/store/7-day-blanket-collection"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2F4A3A] text-white font-semibold text-sm hover:bg-[#263C30] transition-colors no-underline shadow-sm"
            >
              Browse Blanket Patterns <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer z-10"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="w-full max-h-[85vh] overflow-auto rounded-2xl shadow-2xl bg-[#F5F0E8] p-4">
              <p className="text-center text-[#5B5B5B] text-sm italic">{lightbox.alt}</p>
            </div>
            <p className="text-center text-white/80 text-sm mt-3">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </article>
  );
}
