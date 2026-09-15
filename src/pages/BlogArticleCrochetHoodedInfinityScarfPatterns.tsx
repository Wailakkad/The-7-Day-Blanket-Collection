import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, X, ZoomIn } from 'lucide-react';

interface PatternCard {
  name: string;
  level: string;
  yarn: string;
  construction: string;
  why: string;
  tip: string;
  image: string;
}

function ScarfTypeImage({ colors, shape, label }: { colors: string[]; shape: 'hooded' | 'infinity' | 'triangle' | 'pocket' | 'convertible'; label: string }) {
  const c0 = colors[0];
  const c1 = colors[1] || colors[0];
  return (
    <svg viewBox="0 0 200 120" className="w-full" style={{ background: '#F5F0E8' }}>
      <rect width="200" height="120" fill="#FBF7F1" rx="8" />
      {shape === 'hooded' && <>
        <path d="M60,90 L60,40 Q60,20 80,20 L120,20 Q140,20 140,40 L140,90" fill="none" stroke={c0} strokeWidth="4" opacity="0.7" />
        <path d="M40,90 L60,90" stroke={c0} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
        <path d="M140,90 L160,90" stroke={c0} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      </>}
      {shape === 'infinity' && <>
        <ellipse cx="100" cy="60" rx="50" ry="30" fill="none" stroke={c0} strokeWidth="6" opacity="0.6" />
        <ellipse cx="100" cy="60" rx="30" ry="16" fill="none" stroke={c1} strokeWidth="4" opacity="0.4" />
      </>}
      {shape === 'triangle' && <>
        <polygon points="100,15 40,95 160,95" fill="none" stroke={c0} strokeWidth="4" opacity="0.7" />
        <line x1="100" y1="15" x2="100" y2="95" stroke={c1} strokeWidth="2" opacity="0.4" strokeDasharray="4,3" />
      </>}
      {shape === 'pocket' && <>
        <path d="M50,90 L50,30 Q50,20 60,20 L140,20 Q150,20 150,30 L150,90" fill="none" stroke={c0} strokeWidth="4" opacity="0.7" />
        <rect x="70" y="55" width="30" height="25" rx="3" fill="none" stroke={c1} strokeWidth="2.5" opacity="0.6" />
        <rect x="105" y="55" width="30" height="25" rx="3" fill="none" stroke={c1} strokeWidth="2.5" opacity="0.6" />
      </>}
      {shape === 'convertible' && <>
        <path d="M60,90 Q60,30 100,20 Q140,30 140,90" fill="none" stroke={c0} strokeWidth="4" opacity="0.7" />
        <path d="M60,50 L140,50" stroke={c1} strokeWidth="2" strokeDasharray="4,3" opacity="0.5" />
      </>}
      <text x="100" y="112" textAnchor="middle" fill="#5B5B5B" fontSize="9" fontFamily="sans-serif">{label}</text>
    </svg>
  );
}

const HOODED_PATTERNS: PatternCard[] = [
  { name: 'Classic Crochet Hooded Scarf', level: 'Easy', yarn: '#4 worsted', construction: 'Rectangle + hood', why: 'The timeless design — a long scarf with an attached hood for instant warmth.', tip: 'Crochet the scarf body first, then pick up stitches along one short end to form the hood.', image: 'hooded-classic' },
  { name: 'Chunky Hooded Scarf', level: 'Beginner', yarn: '#5 bulky', construction: 'Rectangle + hood', why: 'Bulky yarn works up fast — finished in an evening with maximum coziness.', tip: 'Use a 6.5mm hook and simple HDC stitches — the bulk does all the work.', image: 'hooded-chunky' },
  { name: 'Cozy Winter Hooded Scarf', level: 'Easy', yarn: '#5 bulky', construction: 'Rectangle + hood', why: 'Extra-long scarf with a deep hood — built for the coldest days.', tip: 'Make the scarf at least 60 inches long so you can wrap it twice around your neck.', image: 'hooded-winter' },
  { name: 'Oversized Hooded Scarf', level: 'Easy', yarn: '#4 worsted', construction: 'Rectangle + hood', why: 'Wide and dramatic — wraps twice with a roomy hood that stays put.', tip: 'Use a wider starting chain (30-35 chains) for that oversized, luxurious drape.', image: 'hooded-oversized' },
  { name: 'Quick Crochet Hooded Scarf', level: 'Beginner', yarn: '#6 super bulky', construction: 'Rectangle + hood', why: 'The fastest hooded scarf on this list — 30 minutes from start to finish.', tip: 'Super bulky yarn and a large hook (8-10mm) means fewer stitches and faster results.', image: 'hooded-quick' },
];

const INFINITY_PATTERNS: PatternCard[] = [
  { name: 'Easy Crochet Infinity Scarf', level: 'Beginner', yarn: '#4 worsted', construction: 'Seamless loop', why: 'The simplest infinity scarf — crochet a long rectangle and seam the ends.', tip: 'Chain until the length wraps twice around your neck (about 60-70 inches), then seam.', image: 'infinity-easy' },
  { name: 'Striped Infinity Scarf', level: 'Beginner', yarn: '#4 worsted', construction: 'Seamless loop', why: 'Horizontal stripes in 2-3 colors — wrap it once or twice for different looks.', tip: 'Change colors at the beginning of each row and carry the yarn up the side to reduce ends.', image: 'infinity-striped' },
  { name: 'Ribbed Infinity Scarf', level: 'Easy', yarn: '#4 worsted', construction: 'Seamless loop', why: 'BLO ribbing that looks like knit — stretchy, warm, and reversible.', tip: 'Work HDC in the back loop only for the entire project — the ribbing forms naturally.', image: 'infinity-ribbed' },
  { name: 'Color-Block Infinity Scarf', level: 'Beginner', yarn: '#4 worsted', construction: 'Seamless loop', why: 'Two bold color sections — modern and eye-catching with basic stitches.', tip: 'Switch colors halfway through — use SC or DC for clean, crisp color transitions.', image: 'infinity-colorblock' },
  { name: 'Beginner Infinity Scarf', level: 'Beginner', yarn: '#3 DK', construction: 'Seamless loop', why: 'Lightweight and soft — the perfect first infinity scarf project.', tip: 'DK yarn creates a lighter drape that works indoors and outdoors without overheating.', image: 'infinity-beginner' },
];

const SPECIALTY_PATTERNS: PatternCard[] = [
  { name: 'Crochet Triangle Scarf', level: 'Easy', yarn: '#4 worsted', construction: 'Top-down triangle', why: 'A pointed shawl-style scarf — boho-chic and surprisingly easy to shape.', tip: 'Start with 2 chains, increase at the center and edges each row — the triangle grows naturally.', image: 'specialty-triangle' },
  { name: 'One-Skein Triangle Scarf', level: 'Beginner', yarn: '#4 worsted', construction: 'Top-down triangle', why: 'One skein, one weekend — a lightweight triangle scarf for layering.', tip: 'Use a fingering or sport weight yarn to maximize the yardage from a single skein.', image: 'specialty-oneskein' },
  { name: 'Crochet Scarf With Pockets', level: 'Easy', yarn: '#4 worsted', construction: 'Rectangle + pockets', why: 'A scarf with built-in pockets — practical and cozy for cold walks.', tip: 'Crochet the pockets separately and sew them on — it\'s easier than trying to work them into the scarf body.', image: 'specialty-pockets' },
  { name: 'Hooded Infinity Scarf', level: 'Intermediate', yarn: '#4 worsted', construction: 'Seamless loop + hood', why: 'The best of both worlds — an infinity scarf with an attached hood.', tip: 'Crochet the infinity loop first, then pick up stitches along one section to build the hood upward.', image: 'specialty-hoodedinfinity' },
  { name: 'Convertible Scarf/Hood Design', level: 'Intermediate', yarn: '#5 bulky', construction: 'Multi-shape', why: 'Wear it as a scarf, a hood, or a cowl — three looks in one project.', tip: 'Add buttons or toggles at strategic points so you can reshape it on the go.', image: 'specialty-convertible' },
];

const HOODED_COLORS = [
  ['#8B6F5E', '#A0887A'],
  ['#4A6741', '#5E7E53'],
  ['#5B4E8A', '#7568A0'],
  ['#C47A4A', '#D89460'],
  ['#3B5E6B', '#4F7A87'],
];

const INFINITY_COLORS = [
  ['#6B8E7B', '#87A995'],
  ['#D4856A', '#E0A088'],
  ['#7B6B9E', '#9585B5'],
  ['#5E8BA0', '#78A3B5'],
  ['#A07B5E', '#B89578'],
];

const SPECIALTY_COLORS = [
  ['#8B7E6B', '#A59885'],
  ['#6B7E5E', '#859878'],
  ['#7B5E6B', '#957885'],
  ['#5E6B8B', '#7885A5'],
  ['#8B5E6B', '#A57885'],
];

function PatternCardComponent({ p, onImageClick, svgContent }: { p: PatternCard; onImageClick: (src: string, alt: string) => void; svgContent: React.ReactNode }) {
  return (
    <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => onImageClick(p.image, `${p.name} crochet scarf`)}
        className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
      >
        {svgContent}
        <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
        </span>
      </button>
      <div className="p-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
          <h4 className="font-fraunces text-base font-semibold text-[#1F1F1F]">{p.name}</h4>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-2 py-0.5 rounded-full w-fit">{p.level}</span>
        </div>
        <div className="flex flex-wrap gap-3 text-xs text-[#5B5B5B] mb-2">
          <span>Yarn: {p.yarn}</span>
          <span>·</span>
          <span>{p.construction}</span>
        </div>
        <p className="text-sm text-[#2F4A3A] font-medium mb-1">{p.why}</p>
        <p className="text-xs text-[#5B5B5B] leading-relaxed">Tip: {p.tip}</p>
      </div>
    </div>
  );
}

export default function BlogArticleCrochetHoodedInfinityScarfPatterns() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt });
  const closeLightbox = () => setLightbox(null);

  return (
    <article className="bg-[#FBF7F1]">

      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[400px] flex items-center">
        <svg viewBox="0 0 1200 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2F4A3A" />
              <stop offset="50%" stopColor="#4A6741" />
              <stop offset="100%" stopColor="#263C30" />
            </linearGradient>
          </defs>
          <rect width="1200" height="400" fill="url(#heroGrad)" />
          <ellipse cx="200" cy="200" rx="120" ry="60" fill="none" stroke="#ffffff" strokeWidth="3" opacity="0.15" />
          <ellipse cx="200" cy="200" rx="70" ry="32" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.1" />
          <path d="M900,280 L900,160 Q900,120 960,120 L1040,120 Q1100,120 1100,160 L1100,280" fill="none" stroke="#ffffff" strokeWidth="3" opacity="0.12" />
          <path d="M850,280 L900,280" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.12" />
          <path d="M1100,280 L1150,280" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.12" />
          <polygon points="600,80 520,260 680,260" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.1" />
          <line x1="600" y1="80" x2="600" y2="260" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.08" />
          <circle cx="400" cy="300" r="40" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.08" />
          <circle cx="800" cy="100" r="25" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.08" />
        </svg>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center w-full">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#CCD9D0] hover:text-white mb-6 no-underline transition-colors"
          >
            ← Back to Blog
          </Link>
          <h1 className="font-fraunces text-3xl sm:text-4xl md:text-5xl leading-[1.15] font-semibold text-white tracking-tight mb-5">
            15 Free Crochet Hooded &amp;<br className="hidden sm:block" /> Infinity Scarf Patterns for Cozy Fall &amp; Winter
          </h1>
          <p className="text-base sm:text-lg text-[#CCD9D0] max-w-2xl mx-auto leading-relaxed mb-2">
            Hooded scarves, infinity loops, triangles &amp; more — all free
          </p>
          <p className="text-sm text-[#CCD9D0]/70 max-w-xl mx-auto leading-relaxed">
            Discover 15 free crochet scarf patterns including hooded scarves, infinity scarves, triangle scarves, and pocket scarves. Beginner-friendly with yarn tips and styling ideas.
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
          <span>22 min read</span>
        </div>

        {/* Article Body */}
        <div className="prose-custom space-y-10">

          {/* Intro */}
          <div className="space-y-5">
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              A <strong>crochet hooded scarf</strong> gives you warmth where it matters most — your neck, your head, and your ears — all in one piece. A <strong>crochet infinity scarf</strong> loops endlessly around your neck for a cozy, layered look without the bulk of a traditional scarf. Both styles are <strong>beginner-friendly</strong>, work up quickly, and make perfect gifts for anyone who braves cold weather.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              This collection brings together <strong>15 free crochet scarf patterns</strong> — hooded scarves, infinity scarves, triangle scarves, pocket scarves, and convertible designs. Each pattern includes the skill level, yarn weight, construction method, and a technique tip so your finished scarf looks polished and feels warm.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              Whether you're looking for a <strong>quick weekend project</strong> or a statement piece to wear all winter, you'll find it here. Save this post for your next cozy crochet session.
            </p>
          </div>

          {/* CTA Block 1 */}
          <div className="bg-gradient-to-br from-[#2F4A3A] to-[#263C30] rounded-2xl p-6 sm:p-8 text-center shadow-lg">
            <p className="font-fraunces text-lg sm:text-xl font-medium text-white mb-4">
              Want a blanket pattern to match your new scarf?
            </p>
            <Link
              to="/store/7-day-blanket-collection"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2F4A3A] font-semibold text-sm hover:bg-[#FBF7F1] transition-colors no-underline shadow-sm"
            >
              Discover the Blanket Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Picks */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">★</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Quick Picks (Start Here)
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">Can't browse all 15? Start with these seven — each one is great for a different reason.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { name: 'Classic Crochet Hooded Scarf', why: 'The timeless design — a long scarf with an attached hood for instant warmth.', color: 'bg-[#E4ECE7]' },
                { name: 'Easy Crochet Infinity Scarf', why: 'The simplest infinity scarf — crochet a long rectangle and seam the ends.', color: 'bg-[#E4ECE7]' },
                { name: 'Chunky Hooded Scarf', why: 'Bulky yarn works up fast — finished in an evening with maximum coziness.', color: 'bg-[#E4ECE7]' },
                { name: 'Crochet Triangle Scarf', why: 'A pointed shawl-style scarf — boho-chic and surprisingly easy to shape.', color: 'bg-[#E4ECE7]' },
                { name: 'Quick Crochet Hooded Scarf', why: 'The fastest hooded scarf on this list — 30 minutes from start to finish.', color: 'bg-[#E4ECE7]' },
                { name: 'One-Skein Triangle Scarf', why: 'One skein, one weekend — a lightweight triangle scarf for layering.', color: 'bg-[#E4ECE7]' },
                { name: 'Cozy Winter Hooded Scarf', why: 'Extra-long scarf with a deep hood — built for the coldest days.', color: 'bg-[#E4ECE7]' },
              ].map((p) => (
                <div key={p.name} className={`${p.color} border border-[#CCD9D0] rounded-xl p-4`}>
                  <p className="font-fraunces text-sm font-semibold text-[#2F4A3A] mb-1">{p.name}</p>
                  <p className="text-xs text-[#5B5B5B] leading-relaxed">{p.why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Hooded Scarf Patterns */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-2">
              15 Free Crochet Hooded &amp; Infinity Scarf Patterns
            </h2>
            <p className="text-sm text-[#5B5B5B] mb-8">Each pattern includes skill level, yarn suggestion, construction method, and a technique tip.</p>

            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Hooded Scarf Patterns
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">A scarf with a built-in hood — wrap your neck and pull up the hood when the wind picks up. No separate hat needed.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {HOODED_PATTERNS.map((p, i) => (
                <div key={p.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => openLightbox(p.image, `${p.name} crochet scarf`)}
                    className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
                  >
                    <ScarfTypeImage colors={HOODED_COLORS[i]} shape="hooded" label={p.name} />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </span>
                  </button>
                  <div className="px-3 py-2.5 text-center">
                    <p className="text-xs font-semibold text-[#1F1F1F] leading-tight">{p.name}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-10">
              {HOODED_PATTERNS.map((p, i) => (
                <PatternCardComponent
                  key={p.name}
                  p={p}
                  onImageClick={openLightbox}
                  svgContent={<ScarfTypeImage colors={HOODED_COLORS[i]} shape="hooded" label={p.name} />}
                />
              ))}
            </div>

            {/* Infinity Scarf Patterns */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Infinity Scarf Patterns
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">A continuous loop that wraps once or twice around your neck — no ends to tuck, no tails to manage.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {INFINITY_PATTERNS.map((p, i) => (
                <div key={p.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => openLightbox(p.image, `${p.name} crochet scarf`)}
                    className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
                  >
                    <ScarfTypeImage colors={INFINITY_COLORS[i]} shape="infinity" label={p.name} />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </span>
                  </button>
                  <div className="px-3 py-2.5 text-center">
                    <p className="text-xs font-semibold text-[#1F1F1F] leading-tight">{p.name}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-10">
              {INFINITY_PATTERNS.map((p, i) => (
                <PatternCardComponent
                  key={p.name}
                  p={p}
                  onImageClick={openLightbox}
                  svgContent={<ScarfTypeImage colors={INFINITY_COLORS[i]} shape="infinity" label={p.name} />}
                />
              ))}
            </div>

            {/* CTA Block Mid */}
            <div className="bg-gradient-to-br from-[#2F4A3A] to-[#263C30] rounded-2xl p-6 sm:p-8 text-center shadow-lg my-10">
              <p className="font-fraunces text-lg sm:text-xl font-medium text-white mb-4">
                Love these stitches? Try them in a blanket.
              </p>
              <Link
                to="/store/7-day-blanket-collection"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2F4A3A] font-semibold text-sm hover:bg-[#FBF7F1] transition-colors no-underline shadow-sm"
              >
                Discover the Blanket Collection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Specialty Scarf Patterns */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Specialty Scarf Patterns
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">Triangle scarves, pocket scarves, and hybrid designs — for when you want something a little different.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {SPECIALTY_PATTERNS.map((p, i) => {
                const shapes: Array<'triangle' | 'triangle' | 'pocket' | 'infinity' | 'convertible'> = ['triangle', 'triangle', 'pocket', 'infinity', 'convertible'];
                return (
                  <div key={p.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
                    <button
                      type="button"
                      onClick={() => openLightbox(p.image, `${p.name} crochet scarf`)}
                      className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
                    >
                      <ScarfTypeImage colors={SPECIALTY_COLORS[i]} shape={shapes[i]} label={p.name} />
                      <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                      </span>
                    </button>
                    <div className="px-3 py-2.5 text-center">
                      <p className="text-xs font-semibold text-[#1F1F1F] leading-tight">{p.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-4 mb-10">
              {SPECIALTY_PATTERNS.map((p, i) => {
                const shapes: Array<'triangle' | 'triangle' | 'pocket' | 'infinity' | 'convertible'> = ['triangle', 'triangle', 'pocket', 'infinity', 'convertible'];
                return (
                  <PatternCardComponent
                    key={p.name}
                    p={p}
                    onImageClick={openLightbox}
                    svgContent={<ScarfTypeImage colors={SPECIALTY_COLORS[i]} shape={shapes[i]} label={p.name} />}
                  />
                );
              })}
            </div>
          </section>

          {/* What Is a Hooded Scarf */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              What Is a Hooded Scarf?
            </h2>
            <div className="space-y-4">
              <p className="text-sm text-[#5B5B5B] leading-relaxed">
                A hooded scarf combines a long scarf with an attached hood — one piece that replaces both a hat and a scarf. The basic construction is a long rectangle (the scarf body) with a hood worked from one end. When you're not wearing the hood, it folds down like a cowl or collar.
              </p>
              <p className="text-sm text-[#5B5B5B] leading-relaxed">
                The beauty of a hooded scarf is its versatility. You can wrap the scarf ends around your neck while the hood stays up, or let the whole thing hang loose when you're indoors. It's especially popular for kids and teens who tend to lose separate hats, and for anyone who wants one-piece warmth without fussing with layers.
              </p>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">How It's Constructed</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Most hooded scarves start as a long rectangle. Once the scarf body is complete, you pick up stitches along one short edge and work upward to form the hood. The hood can be shaped with decreases for a fitted look, or worked straight for a relaxed, slouchy feel. Some patterns work the entire piece in one go — scarf body and hood — without any seaming.</p>
              </div>
            </div>
          </section>

          {/* What Is an Infinity Scarf */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              What Is an Infinity Scarf?
            </h2>
            <div className="space-y-4">
              <p className="text-sm text-[#5B5B5B] leading-relaxed">
                An infinity scarf is a continuous loop of fabric — no ends, no tails, no tying. You crochet a long rectangle (or work in the round), then seam the two short ends together to form a circle. Wrap it once for a relaxed look, or double it up for extra warmth and volume.
              </p>
              <p className="text-sm text-[#5B5B5B] leading-relaxed">
                Infinity scarves are one of the most beginner-friendly scarf projects because the construction is so simple. There's no shaping, no decreases, and no complex assembly. If you can crochet a rectangle, you can make an infinity scarf. The loop construction also means there are no loose ends to tuck in or adjust throughout the day.
              </p>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Loop vs Rectangle Construction</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">The easiest method is to crochet a flat rectangle and seam the short ends together with a mattress stitch or slip stitch join. For a truly seamless look, some patterns work in the round from the start — no seaming at all. Both methods produce the same result: a cozy loop that wraps beautifully around your neck.</p>
              </div>
            </div>
          </section>

          {/* Hooded vs Infinity Comparison */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              Hooded Scarf vs Infinity Scarf
            </h2>
            <p className="text-sm text-[#5B5B5B] mb-5">Both are warmer than a traditional scarf — but they serve different purposes. Here's how to choose.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#2F4A3A] mb-3">Hooded Scarf</h3>
                <ul className="space-y-2 text-sm text-[#5B5B5B]">
                  <li className="flex items-start gap-2"><span className="text-[#2F4A3A] font-bold mt-0.5">✓</span> Replaces both hat and scarf</li>
                  <li className="flex items-start gap-2"><span className="text-[#2F4A3A] font-bold mt-0.5">✓</span> Great for windy, cold climates</li>
                  <li className="flex items-start gap-2"><span className="text-[#2F4A3A] font-bold mt-0.5">✓</span> Kids love the one-piece design</li>
                  <li className="flex items-start gap-2"><span className="text-[#2F4A3A] font-bold mt-0.5">✓</span> More coverage overall</li>
                  <li className="flex items-start gap-2"><span className="text-[#5B5B5B] font-bold mt-0.5">—</span> Slightly more yarn and time</li>
                  <li className="flex items-start gap-2"><span className="text-[#5B5B5B] font-bold mt-0.5">—</span> Hood can feel bulky when not in use</li>
                </ul>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#2F4A3A] mb-3">Infinity Scarf</h3>
                <ul className="space-y-2 text-sm text-[#5B5B5B]">
                  <li className="flex items-start gap-2"><span className="text-[#2F4A3A] font-bold mt-0.5">✓</span> Faster and easier to make</li>
                  <li className="flex items-start gap-2"><span className="text-[#2F4A3A] font-bold mt-0.5">✓</span> No ends to adjust or tuck</li>
                  <li className="flex items-start gap-2"><span className="text-[#2F4A3A] font-bold mt-0.5">✓</span> Wraps twice for extra warmth</li>
                  <li className="flex items-start gap-2"><span className="text-[#2F4A3A] font-bold mt-0.5">✓</span> Works indoors and outdoors</li>
                  <li className="flex items-start gap-2"><span className="text-[#5B5B5B] font-bold mt-0.5">—</span> Doesn't cover your head</li>
                  <li className="flex items-start gap-2"><span className="text-[#5B5B5B] font-bold mt-0.5">—</span> Can slide off in strong wind</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How to Choose Yarn */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              How to Choose Yarn for a Hooded or Infinity Scarf
            </h2>
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Yarn Weight</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">#4 worsted weight is the most popular choice — it's warm, versatile, and available in every color. #5 bulky works up faster and creates a thicker, cozier fabric. #3 DK creates a lighter scarf that works for indoor wear or transitional weather.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Fiber Content</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Acrylic is the best all-around choice — affordable, machine washable, and available in tons of colors. Wool and wool blends are warmer but need hand washing. Cotton is too heavy and doesn't hold warmth well for scarves. For baby scarves, use super-soft acrylic or cotton-acrylic blends.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Warmth &amp; Drape</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">For maximum warmth, choose a yarn with good loft — it traps air between fibers. Bulky and super bulky yarns are naturally warmer. For infinity scarves that need to drape nicely, avoid stiff or rope-like yarns. Test the drape by letting a length hang from your hand — it should fall softly, not stick out.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Washability</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Scarves get a lot of wear and need regular washing. Superwash wool and machine-washable acrylic are the most practical choices. Hand-wash-only yarns are beautiful but less practical for everyday scarves, especially ones made for kids.</p>
              </div>
            </div>
          </section>

          {/* How Much Yarn */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              How Much Yarn Do You Need?
            </h2>
            <p className="text-sm text-[#5B5B5B] mb-5">Yarn amounts depend on the scarf type, yarn weight, and stitch pattern. Here are approximate ranges:</p>
            <div className="space-y-3">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <p className="text-sm font-semibold text-[#1F1F1F] mb-1">Hooded Scarf (Worsted Weight)</p>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">600–900 yards (4–6 skeins of 150-yard worsted). The hood adds about 150–200 extra yards compared to a regular scarf.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <p className="text-sm font-semibold text-[#1F1F1F] mb-1">Hooded Scarf (Bulky Weight)</p>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">400–600 yards (3–5 skeins of 150-yard bulky). Bulky yarn covers more area per stitch, so you use less total yardage.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <p className="text-sm font-semibold text-[#1F1F1F] mb-1">Infinity Scarf (Worsted Weight)</p>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">400–600 yards (3–4 skeins). A single-wrap infinity scarf uses about 400 yards; a double-wrap version needs closer to 600.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <p className="text-sm font-semibold text-[#1F1F1F] mb-1">Triangle Scarf (Worsted Weight)</p>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">300–500 yards (2–4 skeins). A small triangle scarf can be done with one skein; a larger shawl-style version needs more.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <p className="text-sm font-semibold text-[#1F1F1F] mb-1">Pocket Scarf (Worsted Weight)</p>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">500–700 yards (4–5 skeins). The pockets add about 100–150 extra yards on top of a standard scarf.</p>
              </div>
            </div>
          </section>

          {/* How to Make a Scarf Warmer */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              How to Make a Crochet Scarf Warmer
            </h2>
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Choose a Warmer Yarn</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Switch from worsted to bulky or super bulky. Wool, alpaca, and acrylic blends with loft trap more air and hold body heat better than flat, dense yarns.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Use Denser Stitches</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Single crochet and half double crochet create a tighter fabric that blocks wind. Avoid open stitches (mesh, V-stitch, shells) for winter scarves — they let cold air through.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Add a Lining</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Sew a fleece or flannel lining to the inside of your scarf for extra warmth. This is especially effective for hooded scarves — the lining blocks wind and adds softness against the skin.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Make It Bigger</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">A wider scarf wraps more fabric around your neck, which means more insulation. Add 4-6 inches to the width for a noticeably warmer scarf without changing the pattern.</p>
              </div>
            </div>
          </section>

          {/* Best Stitches */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              Best Crochet Stitches for Winter Scarves
            </h2>
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Single Crochet (SC)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Dense, tight, and wind-resistant. The most basic stitch creates the warmest fabric per row. Perfect for hooded scarves where warmth is the priority.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Half Double Crochet (HDC)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Slightly taller than SC with a softer drape. The go-to stitch for infinity scarves — warm enough for winter but not too stiff. Works up faster than SC.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Waffle Stitch</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Front-post DC creates deep pockets that trap warm air. The textured grid looks impressive and feels incredibly cozy against the skin.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">BLO Ribbing</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">HDC or SC in the back loop only creates stretchy, knit-look ribbing. Great for infinity scarves — the stretch makes it easy to pull over your head.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Bobble Stitch</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Raised bobbles add thickness and texture. Each bobble is basically a cluster of DC — they create a squishy, warm fabric that looks boutique-quality.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Front-Post / Back-Post Stitches</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">FPDC and BPDC create deep texture and trapped air pockets. Cable-style and basketweave patterns using these stitches are some of the warmest options for winter scarves.</p>
              </div>
            </div>
          </section>

          {/* How to Style */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              How to Style a Crochet Hooded Scarf
            </h2>
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">The Classic Wrap</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Drape the hood over your head, then wrap each scarf end around your neck in opposite directions. Let the ends hang in front or tuck them into the wrap. This is the warmest configuration — full head, neck, and chest coverage.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Hood Down, Scarf Up</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">When you're indoors or it's not too cold, let the hood fold down naturally and wear the scarf like a regular long scarf. The hood sits behind your neck like a soft collar — it adds volume and looks intentional.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">The Infinity Twist</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Some hooded scarves are long enough to wrap twice around the neck with the hood still accessible. Twist the scarf into a figure-8 before looping — it creates an infinity-style look with the option to pull up the hood anytime.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Layering With Coats</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Wear the hooded scarf over a jacket or under a coat. The hood replaces a hat, so you don't have to worry about hat hair or carrying a separate beanie. For infinity scarves, loop once over a puffer jacket for a clean, modern look.</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              FAQ: Crochet Hooded &amp; Infinity Scarf Patterns
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What is a hooded scarf?',
                  a: 'A hooded scarf is a single crochet piece that combines a long scarf with an attached hood. It replaces both a hat and a scarf — wrap the scarf around your neck and pull up the hood for full coverage. When the hood is down, it folds like a cowl or collar.',
                },
                {
                  q: 'Is a crochet infinity scarf easy for beginners?',
                  a: 'Yes — an infinity scarf is one of the easiest crochet projects you can make. The basic construction is a long rectangle that you seam into a loop. No shaping, no decreases, and no complex assembly. If you can chain and work single or half double crochet, you can make one.',
                },
                {
                  q: 'How much yarn does a crochet infinity scarf need?',
                  a: 'A worsted weight infinity scarf needs about 400–600 yards, depending on how long you want it. A single-wrap version uses around 400 yards (3 skeins), while a double-wrap version that loops twice around your neck needs closer to 600 yards (4 skeins).',
                },
                {
                  q: 'What yarn is best for a winter scarf?',
                  a: "Worsted weight acrylic is the most practical choice — it's affordable, machine washable, and warm. For extra warmth, choose bulky weight wool or wool blends. Avoid cotton — it's heavy, doesn't hold heat, and takes forever to dry.",
                },
                {
                  q: 'How long should an infinity scarf be?',
                  a: 'For a single wrap, aim for 55–65 inches (140–165 cm). For a double wrap that loops twice, go for 70–80 inches (178–203 cm). The width is usually 8–12 inches for worsted weight. When in doubt, make it longer — you can always wrap an extra time.',
                },
                {
                  q: 'Can a crochet scarf have pockets?',
                  a: 'Absolutely. A pocket scarf is a long scarf with two small pockets crocheted or sewn onto each end. The pockets are functional — big enough for a phone, keys, or hands. Most pocket scarves use worsted or bulky weight yarn and work up in a weekend.',
                },
                {
                  q: 'What is the easiest hooded scarf pattern?',
                  a: 'The Classic Crochet Hooded Scarf is the simplest — a long rectangle for the scarf body with stitches picked up along one end to form the hood. It uses basic stitches (SC or HDC) and minimal shaping. A beginner can finish it in a few evenings.',
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
              <Link to="/blog/crochet-stitch-patterns" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Stitch Patterns: 27 Textured Stitches That Look Expensive
              </Link>
              <Link to="/blog/crochet-hats-free-pattern" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Hats Free Pattern: 25 Free Beanie Crochet Pattern Ideas
              </Link>
              <Link to="/blog/free-crochet-scarf-patterns" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → 25 Free Crochet Scarf Patterns: Easy, Striped &amp; Cozy Ideas
              </Link>
            </div>
          </div>

          {/* Closing CTA */}
          <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-2xl p-6 sm:p-8 text-center">
            <p className="font-fraunces text-lg sm:text-xl font-semibold text-[#2F4A3A] mb-3">
              Ready to turn these scarf stitches into a blanket?
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
            <div className="bg-[#FBF7F1] rounded-2xl shadow-2xl overflow-hidden p-8">
              <p className="text-center text-[#5B5B5B] text-sm font-medium">{lightbox.alt}</p>
            </div>
            <p className="text-center text-white/80 text-sm mt-3">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </article>
  );
}
