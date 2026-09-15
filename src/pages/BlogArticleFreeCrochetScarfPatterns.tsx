import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, X, ZoomIn } from 'lucide-react';

function ScarfImage({ colors, label }: { colors: string[]; label: string }) {
  const c0 = colors[0];
  const c1 = colors[1] || colors[0];
  return (
    <svg viewBox="0 0 200 120" className="w-full" style={{ background: '#F5F0E8' }}>
      <rect width="200" height="120" fill="#FBF7F1" rx="8" />
      <path d="M30,40 Q60,20 100,40 Q140,60 170,40" stroke={c0} strokeWidth="20" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M30,70 Q60,50 100,70 Q140,90 170,70" stroke={c1} strokeWidth="16" fill="none" strokeLinecap="round" opacity="0.5" />
      <text x="100" y="112" textAnchor="middle" fill="#5B5B5B" fontSize="9" fontFamily="sans-serif">{label}</text>
    </svg>
  );
}

interface PatternCard {
  name: string;
  level: string;
  yarn: string;
  construction: string;
  why: string;
  tip: string;
  image: string;
}

const BEGINNER_SCARFS: PatternCard[] = [
  {
    name: 'Classic Single Crochet Scarf',
    level: 'Beginner',
    yarn: '#4 worsted',
    construction: 'Rows',
    why: "The simplest scarf you'll ever make — one stitch, one yarn, zero stress.",
    tip: 'Chain loosely to keep the foundation edge from curling. A larger hook on the foundation chain helps.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789487306/SC_Scarf.jpg',
  },
  {
    name: 'Half Double Crochet Scarf',
    level: 'Beginner',
    yarn: '#4 worsted',
    construction: 'Rows',
    why: 'Faster than SC with a soft, flexible drape — the most popular beginner scarf.',
    tip: 'HDC has a natural slight ridge — use that texture to your advantage on the edges.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789487299/HDC_Scarf.jpg',
  },
  {
    name: 'Moss Stitch Scarf',
    level: 'Beginner',
    yarn: '#4 worsted',
    construction: 'Rows',
    why: "Woven-look texture that's modern and reversible — hides tension changes.",
    tip: 'The SC+CH1 skip 1 repeat hides small tension changes — very forgiving.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789487271/Moss_Stitch_Scarf.jpg',
  },
  {
    name: 'Double Crochet Scarf',
    level: 'Beginner',
    yarn: '#4 worsted',
    construction: 'Rows',
    why: 'The fastest basic stitch scarf — works up in an evening.',
    tip: 'Keep your chain count a multiple of 3 for easy pattern repeats.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789487200/DC_Scarf.jpg',
  },
  {
    name: 'Simple One-Stitch Scarf',
    level: 'Beginner',
    yarn: '#3 DK',
    construction: 'Rows',
    why: 'Pick any stitch and repeat — the meditative project that builds confidence.',
    tip: 'Try yarn overs at the edges to create a built-in decorative border.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789487303/One_Stitch_Scarf.jpg',
  },
];

const STRIPED_SCARFS: PatternCard[] = [
  {
    name: 'Classic Striped Scarf',
    level: 'Beginner',
    yarn: '#4 worsted',
    construction: 'Rows',
    why: 'Horizontal stripes in 2-3 colors — the easiest way to add visual interest.',
    tip: 'Carry the unused color up the side instead of cutting — saves weaving in ends.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789487136/Striped.jpg',
  },
  {
    name: 'Color Block Scarf',
    level: 'Beginner',
    yarn: '#4 worsted',
    construction: 'Rows',
    why: 'Bold color sections that look modern with zero complex stitches.',
    tip: 'Switch colors at the halfway point — use tapestry crochet to carry the unused yarn inside.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789487115/Color_Block.jpg',
  },
  {
    name: 'Two-Color Alternating Scarf',
    level: 'Beginner',
    yarn: '#4 worsted',
    construction: 'Rows',
    why: 'Switch colors every 2 rows for a classic bar-stripe effect.',
    tip: 'Alternate 2 rows of each color for the cleanest stripe pattern.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789487227/Alternating.jpg',
  },
  {
    name: 'Gradient Ombré Scarf',
    level: 'Easy',
    yarn: '#4 worsted',
    construction: 'Rows',
    why: 'Fade between 3 coordinating shades for a sunset effect.',
    tip: 'Fade between colors by alternating rows before the full switch — the gradient looks natural.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789487127/Ombr%C3%A9.jpg',
  },
  {
    name: 'Scrap Yarn Stripe Scarf',
    level: 'Beginner',
    yarn: '#4 worsted',
    construction: 'Rows',
    why: 'Use every leftover bit — the more colors, the better it looks.',
    tip: 'Use a consistent hook size and yarn weight across all scraps for a unified fabric.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789487159/Scrap_Yarn.jpg',
  },
];

const TEXTURED_SCARFS: PatternCard[] = [
  {
    name: 'Waffle Stitch Scarf',
    level: 'Easy',
    yarn: '#4 worsted',
    construction: 'Rows',
    why: 'Deep waffle texture that looks store-bought — squishy and warm.',
    tip: 'Front-post DC creates the raised ridges. Count carefully — the pattern repeats every 2 rows.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789488278/Waffle_Stitch_Scarf.jpg',
  },
  {
    name: 'Ribbed Crochet Scarf',
    level: 'Beginner',
    yarn: '#4 worsted',
    construction: 'Rows',
    why: "BLO ribbing that stretches and looks like knit — great for men's gifts.",
    tip: 'Work in BLO for the entire scarf to create a stretchy, knit-like ribbing.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789488269/Ribbed_Crochet_Scarf.jpg',
  },
  {
    name: 'Lemon Peel Stitch Scarf',
    level: 'Easy',
    yarn: '#4 worsted',
    construction: 'Rows',
    why: 'Overlapping bumps create a magical citrus-skin texture.',
    tip: 'Alternate SC and DC, offsetting each row — the texture builds naturally.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789488273/Lemon_Peel_Stitch_Scarf.jpg',
  },
  {
    name: 'Seed Stitch Scarf',
    level: 'Easy',
    yarn: '#4 worsted',
    construction: 'Rows',
    why: 'Subtle nubby texture that looks elegant in solid colors.',
    tip: 'Use an odd number of stitches so each row starts with SC — the pattern stays aligned.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789488278/Seed_Stitch_Scarf.jpg',
  },
  {
    name: 'Basketweave Scarf',
    level: 'Intermediate',
    yarn: '#4 worsted',
    construction: 'Rows',
    why: 'Faux cable look without a cable hook — impressive texture.',
    tip: 'Skip 2, DC in next 2, go back and DC in the skipped stitches — instant faux cable.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789488247/Basketweave_Scarf.jpg',
  },
];

const CHUNKY_SCARFS: PatternCard[] = [
  {
    name: 'Chunky Bulky Scarf',
    level: 'Beginner',
    yarn: '#5 bulky',
    construction: 'Rows',
    why: 'Finished in under 2 hours — the fastest scarf on this list.',
    tip: 'Use a 6.5mm or 8mm hook with bulky yarn for maximum speed and squish.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789502805/Chunky_Bulky_Scarf.jpg',
  },
  {
    name: 'Super Bulky Quick Scarf',
    level: 'Beginner',
    yarn: '#6 super bulky',
    construction: 'Rows',
    why: 'One skein, one evening, one cozy scarf — perfect for gifts.',
    tip: 'Super bulky yarn hides imperfections — perfect for gifting even if you are a beginner.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789502799/Super_Bulky_Quick_Scarf.jpg',
  },
  {
    name: 'Oversized Cozy Scarf',
    level: 'Beginner',
    yarn: '#5 bulky',
    construction: 'Rows',
    why: 'Extra-wide and extra-long for maximum winter warmth.',
    tip: 'Start with 35-40 chains for an oversized width — bigger is cozier with this style.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789502698/Woman_wearing_crochet_scarf_2K_20260915214317.jpg',
  },
  {
    name: 'Long Winter Scarf',
    level: 'Beginner',
    yarn: '#5 bulky',
    construction: 'Rows',
    why: 'Classic long scarf that wraps twice — warm and practical.',
    tip: 'Aim for 60-70 inches long — long enough to wrap around the neck twice.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789502811/Long_Winter_Scarf.jpg',
  },
  {
    name: 'Puff Stitch Scarf',
    level: 'Easy',
    yarn: '#5 bulky',
    construction: 'Rows',
    why: 'Puffy texture in bulky yarn — maximum coziness with minimum effort.',
    tip: 'Yarn over and pull up 3 times per puff — the bulkier the yarn, the fewer puffs you need.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789502816/Woman_wearing_crochet_scarf_2K_20260915214037.jpg',
  },
];

const STYLE_SCARFS: PatternCard[] = [
  {
    name: 'Granny-Inspired Scarf',
    level: 'Easy',
    yarn: '#4 worsted',
    construction: 'Rows',
    why: 'Granny stitch clusters that look vintage and cozy.',
    tip: 'Work 3 DC clusters into the spaces of the previous row — the classic granny pattern.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789502727/Granny_Inspired_Scarf.jpg',
  },
  {
    name: 'Modern Minimal Scarf',
    level: 'Easy',
    yarn: '#4 worsted',
    construction: 'Rows',
    why: 'Clean lines, solid color, zero frills — the Scandinavian look.',
    tip: 'Choose a single neutral color and keep edges perfectly straight for the minimalist effect.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789502679/Modern_Minimal_Scarf.jpg',
  },
  {
    name: 'Statement Crochet Scarf',
    level: 'Intermediate',
    yarn: '#4 worsted',
    construction: 'Rows',
    why: 'Bold texture and color that makes people ask where you bought it.',
    tip: 'Use a bold color like emerald or mustard with a textured stitch for maximum impact.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789502679/Statement_Crochet_Scarf.jpg',
  },
  {
    name: 'Gift-Worthy Neutral Scarf',
    level: 'Beginner',
    yarn: '#4 worsted',
    construction: 'Rows',
    why: 'Cream, camel, or grey — the safe gift that everyone loves.',
    tip: 'Add a gift tag with care instructions — it makes the handmade gift feel extra special.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789502629/Gift_Worthy_Neutral_Scarf.jpg',
  },
  {
    name: 'Fall Crochet Scarf',
    level: 'Easy',
    yarn: '#4 worsted',
    construction: 'Rows',
    why: 'Warm autumn tones in moss or shell stitch — cozy season essential.',
    tip: 'Use self-striping autumn yarn for the color effect without changing skeins.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789502684/Fall_Crochet_Scarf.jpg',
  },
];

const QUICK_PICKS = [
  { name: 'Classic Single Crochet Scarf', why: 'Easiest scarf on this list — one stitch, one yarn, zero stress.', color: 'bg-[#E4ECE7]' },
  { name: 'Classic Striped Scarf', why: 'Horizontal stripes in 2-3 colors — the easiest way to add visual interest.', color: 'bg-[#E4ECE7]' },
  { name: 'Chunky Bulky Scarf', why: 'Finished in under 2 hours — the fastest scarf on this list.', color: 'bg-[#E4ECE7]' },
  { name: 'Waffle Stitch Scarf', why: 'Looks store-bought — the texture is incredible.', color: 'bg-[#E4ECE7]' },
  { name: 'Fall Crochet Scarf', why: 'Warm autumn tones that scream cozy season.', color: 'bg-[#E4ECE7]' },
  { name: 'Gift-Worthy Neutral Scarf', why: 'Cream, camel, or grey — the safe gift everyone loves.', color: 'bg-[#E4ECE7]' },
];

function PatternCardComponent({ p, onImageClick }: { p: PatternCard; onImageClick: (src: string, alt: string) => void }) {
  return (
    <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => onImageClick(p.image, `${p.name} crochet scarf`)}
        className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
      >
        <img
          src={p.image}
          alt={`${p.name.toLowerCase()} crochet scarf`}
          loading="lazy"
          className="w-full"
        />
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

export default function BlogArticleFreeCrochetScarfPatterns() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt });
  const closeLightbox = () => setLightbox(null);

  return (
    <article className="bg-[#FBF7F1]">

      {/* Hero */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[400px] flex items-center">
        <img
          src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1789487312/hero_banner_bg.jpg"
          alt="Collection of crocheted scarves in various styles and colors"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center w-full">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#CCD9D0] hover:text-white mb-6 no-underline transition-colors"
          >
            ← Back to Blog
          </Link>
          <h1 className="font-fraunces text-3xl sm:text-4xl md:text-5xl leading-[1.15] font-semibold text-white tracking-tight mb-5">
            25 Free Crochet Scarf Patterns:<br className="hidden sm:block" /> Easy, Striped &amp; Cozy Ideas
          </h1>
          <p className="text-base sm:text-lg text-[#CCD9D0] max-w-2xl mx-auto leading-relaxed mb-2">
            Easy, Cozy, and Beautiful Free Crochet Scarf Pattern Ideas
          </p>
          <p className="text-sm text-[#CCD9D0]/70 max-w-xl mx-auto leading-relaxed">
            Discover 25 free crochet scarf patterns from beginner-friendly to textured showstoppers. Includes yarn suggestions, sizing tips, and stitch guides for every skill level.
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
          <span>25 min read</span>
        </div>

        {/* Article Body */}
        <div className="prose-custom space-y-10">

          {/* Intro */}
          <div className="space-y-5">
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              A crocheted scarf is one of the most <strong>satisfying projects</strong> you can make. It is small enough to finish in a weekend, practical enough that people actually wear it, and customizable enough to match anyone's style. Whether you are making a <strong>quick gift</strong> or your next favorite winter accessory, this collection of <strong>free crochet scarf patterns</strong> has you covered.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              You will find <strong>25 free crochet scarf patterns</strong> organized by style and skill level — from dead-simple beginner scarves to textured designs that look like they came from a boutique. Each pattern includes yarn suggestions, construction method, and a technique tip so your result looks polished.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              Save this post for later — you will want to come back when you need a <strong>crochet scarf pattern</strong> idea.
            </p>
          </div>

          {/* CTA Block */}
          <div className="bg-gradient-to-br from-[#2F4A3A] to-[#263C30] rounded-2xl p-6 sm:p-8 text-center shadow-lg">
            <p className="font-fraunces text-lg sm:text-xl font-medium text-white mb-4">
              Ready to crochet your first scarf?
            </p>
            <Link
              to="/store/7-day-blanket-collection"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2F4A3A] font-semibold text-sm hover:bg-[#FBF7F1] transition-colors no-underline shadow-sm"
            >
              Explore Blanket Patterns Too <ArrowRight className="w-4 h-4" />
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
            <p className="text-sm text-[#5B5B5B] mb-5">Can not browse all 25? Start with these six — each one is great for a different reason.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {QUICK_PICKS.map((p) => (
                <div key={p.name} className={`${p.color} border border-[#CCD9D0] rounded-xl p-4`}>
                  <p className="font-fraunces text-sm font-semibold text-[#2F4A3A] mb-1">{p.name}</p>
                  <p className="text-xs text-[#5B5B5B] leading-relaxed">{p.why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 25 Free Scarf Patterns */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-2">
              25 Free Crochet Scarf Patterns
            </h2>
            <p className="text-sm text-[#5B5B5B] mb-8">Each pattern includes skill level, yarn suggestion, construction method, and a technique tip.</p>

            {/* Group 1: Easy Beginner Scarf Patterns */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Easy Beginner Scarf Patterns
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">Simple construction, basic stitches, and guaranteed results. Perfect for your first crochet scarf.</p>

            <div className="space-y-4 mb-10">
              {BEGINNER_SCARFS.map((p) => (
                <PatternCardComponent key={p.name} p={p} onImageClick={openLightbox} />
              ))}
            </div>

            {/* Group 2: Striped & Colorwork Scarves */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Striped &amp; Colorwork Scarves
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">Add visual interest with stripes, color blocks, and gradient effects — no complex stitches needed.</p>

            <div className="space-y-4 mb-10">
              {STRIPED_SCARFS.map((p) => (
                <PatternCardComponent key={p.name} p={p} onImageClick={openLightbox} />
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

            {/* Group 3: Textured Scarves */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Textured Scarves
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">Advanced-looking stitches that create boutique-quality texture — people will ask where you bought it.</p>

            <div className="space-y-4 mb-10">
              {TEXTURED_SCARFS.map((p) => (
                <PatternCardComponent key={p.name} p={p} onImageClick={openLightbox} />
              ))}
            </div>

            {/* Group 4: Chunky & Quick Scarves */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Chunky &amp; Quick Scarves
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">When you need a gift tonight — these work up in under 2 hours with bulky yarn.</p>

            <div className="space-y-4 mb-10">
              {CHUNKY_SCARFS.map((p) => (
                <PatternCardComponent key={p.name} p={p} onImageClick={openLightbox} />
              ))}
            </div>

            {/* Group 5: Style & Gift Scarves */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Style &amp; Gift Scarves
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">Instagram-worthy styles and crowd-pleasing gifts — perfect for anyone on your list.</p>

            <div className="space-y-4 mb-10">
              {STYLE_SCARFS.map((p) => (
                <PatternCardComponent key={p.name} p={p} onImageClick={openLightbox} />
              ))}
            </div>
          </section>

          {/* How to Choose */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                How to Choose the Right Crochet Scarf Pattern
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">Before you start crocheting, these seven factors will make or break your scarf.</p>

            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Yarn Weight</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">#4 worsted is the most versatile — works for almost every pattern. #5 bulky works up faster and is warmer. #3 DK creates a lighter, spring-weight scarf. Match the yarn to the season and the recipient.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Skill Level</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Beginner patterns use basic stitches (SC, HDC, DC) in rows. Easy patterns add simple texture (moss stitch, lemon peel). Intermediate patterns include front-post stitches, cables, or complex stitch combinations. Be honest about your skill level — a frustrating project is not fun.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Width</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Standard scarves are 6-8 inches wide. Oversized scarves are 10-14 inches wide. Skinny scarves are 3-5 inches wide. Consider who will wear it — a man might prefer a wider scarf, while a child needs something narrower.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Length</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Standard length is 50-60 inches. Oversized or wrap-around scarves are 60-72 inches. A good rule of thumb: the scarf should be as tall as the person wearing it. Measure from the floor to the chin for a rough guide.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Texture</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Smooth yarn shows stitch definition best. Fuzzy or highly variegated yarn hides detailed stitches. For textured scarves (waffle, basketweave, ribbing), choose a yarn with good stitch definition in a solid color.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Season</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Wool and acrylic are warm for winter. Cotton and bamboo are breathable for spring/fall. Lightweight DK weight works for three-season scarves. Match the fiber to the season you will wear it most.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Recipient</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Making a gift? Stick with neutral colors (cream, grey, navy) and classic stitches. Making for yourself? Go bold with color and texture. For kids, use soft, washable yarn in fun colors.</p>
              </div>
            </div>
          </section>

          {/* Best Yarn */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Best Yarn for Crochet Scarves
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">The right yarn makes all the difference in how your scarf feels and looks.</p>

            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">#4 Worsted Weight</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">The most popular choice for scarves. Works with almost every pattern, available in every color, and easy to find. Brands like Caron Simply Soft, Red Heart Soft, and Lion Brand Wool-Ease are great options. Typically uses 1-2 skeins for an adult scarf.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">#3 DK Weight</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Lighter and more drapey than worsted. Creates a scarf that works in three seasons instead of just winter. Perfect for spring and fall. May need an extra skein since DK is thinner — plan for 2-3 skeins.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">#5 Bulky Weight</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Works up fast and creates a warm, chunky scarf. Great for winter gifts when you are short on time. Uses a larger hook (6-8mm) so the fabric is thick and cozy. Usually 1-2 skeins is enough.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">#6 Super Bulky</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">The fastest option — a scarf can be finished in one sitting. Creates a very thick, very warm fabric. Perfect for last-minute gifts. Uses a 9-12mm hook. One skein is often enough for a standard scarf.</p>
              </div>
            </div>
          </section>

          {/* Scarf Length */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                How Long Should a Crochet Scarf Be?
              </h2>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
              <div className="space-y-3 text-sm text-[#5B5B5B] leading-relaxed">
                <p><strong className="text-[#1F1F1F]">Standard scarf:</strong> 50-60 inches long — wraps once around the neck with ends hanging.</p>
                <p><strong className="text-[#1F1F1F]">Oversized scarf:</strong> 60-72 inches long — wraps twice around the neck for extra warmth.</p>
                <p><strong className="text-[#1F1F1F]">Skinny scarf:</strong> 40-50 inches long — a fashion accessory, not for warmth.</p>
                <p><strong className="text-[#1F1F1F]">Child scarf:</strong> 36-48 inches long — proportional to smaller frame.</p>
                <p className="text-xs text-[#5B5B5B] mt-3 italic">Good rule of thumb: the scarf should be as tall as the person wearing it.</p>
              </div>
            </div>
          </section>

          {/* Scarf Width */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                How Wide Should a Crochet Scarf Be?
              </h2>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
              <div className="space-y-3 text-sm text-[#5B5B5B] leading-relaxed">
                <p><strong className="text-[#1F1F1F]">Standard width:</strong> 6-8 inches — the most common and versatile size.</p>
                <p><strong className="text-[#1F1F1F]">Wide scarf:</strong> 10-14 inches — wraps more fully around the neck and shoulders.</p>
                <p><strong className="text-[#1F1F1F]">Skinny scarf:</strong> 3-5 inches — a fashion piece, often worn loosely.</p>
                <p><strong className="text-[#1F1F1F]">Child scarf:</strong> 4-6 inches — proportionally narrower for smaller frames.</p>
              </div>
            </div>
          </section>

          {/* Best Stitches */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">5</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Best Crochet Stitches for Scarves
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">These stitches work especially well for scarves — each one has unique properties.</p>

            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Single Crochet (SC)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Dense, warm, and simple. Creates a tight fabric that blocks wind well. The most basic stitch — perfect for beginners. Works great in rows for a classic scarf.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Half Double Crochet (HDC)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">A bit taller than SC with a softer drape. Creates a slightly ridged fabric that looks great in solid colors. The most popular stitch for beginner scarves.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Double Crochet (DC)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Taller and faster than HDC. Creates a more open, drapey fabric. Works up quickly — great for gifts when you are short on time.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Moss Stitch</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">SC + CH1 skip 1 creates a woven-look fabric that is modern and reversible. Hides small tension changes — very forgiving for beginners.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Lemon Peel Stitch</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Alternating SC and DC creates overlapping bumps that look like citrus skin. Beautiful texture that is easier than it looks.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">BLO Ribbing</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Working in the back loop only creates a stretchy, knit-like ribbing. Great for men's scarves and anything that needs stretch.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Waffle Stitch</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Front-post DC creates a deep, squishy waffle texture. Looks store-bought and feels incredible. Intermediate skill level but worth the effort.</p>
              </div>
            </div>
          </section>

          {/* Yarn Amount */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">6</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                How Much Yarn Do You Need for a Crochet Scarf?
              </h2>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
              <div className="space-y-3 text-sm text-[#5B5B5B] leading-relaxed">
                <p><strong className="text-[#1F1F1F]">#3 DK weight:</strong> 300-450 yards (2-3 skeins) for a standard scarf.</p>
                <p><strong className="text-[#1F1F1F]">#4 worsted weight:</strong> 250-400 yards (1-2 skeins) for a standard scarf.</p>
                <p><strong className="text-[#1F1F1F]">#5 bulky weight:</strong> 150-250 yards (1-2 skeins) for a standard scarf.</p>
                <p><strong className="text-[#1F1F1F]">#6 super bulky:</strong> 100-180 yards (1 skein) for a standard scarf.</p>
                <p className="text-xs text-[#5B5B5B] mt-3 italic">Always buy one extra skein just in case. Returns are easy, but running out mid-project is not.</p>
              </div>
            </div>
          </section>

          {/* Tips for Professional Look */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">7</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Tips for Making a Crochet Scarf Look Professional
              </h2>
            </div>
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Consistent Tension</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Even tension is the single biggest factor in a professional-looking scarf. Practice before starting the project. If your hands get tired, take a break — tension drops when you are fatigued.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Straight Edges</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Count your stitches at the end of each row. Use a stitch marker on the first and last stitch. If edges curl, try going up one hook size for the foundation chain only.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Blocking</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Wet block or steam block your finished scarf to even out stitches and set the shape. This one step takes your scarf from handmade to professional. Pin to measurements and let dry completely.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Weaving in Ends</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Weave ends in with a tapestry needle going in the same direction as the stitches. Weave at least 2 inches, then reverse direction for 1 inch. This prevents ends from popping out after washing.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Borders and Edging</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">A simple border of SC or crab stitch around the entire scarf gives it a finished look. It also helps prevent curling. Work 1 round of SC evenly around the scarf, then add a decorative edging if desired.</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              FAQ: Free Crochet Scarf Patterns
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What is the easiest crochet scarf pattern for beginners?',
                  a: 'The Classic Single Crochet Scarf is the easiest — chain your desired width, then work SC in every stitch across for every row. It uses one stitch, one yarn, and takes about 3-4 hours. The Simple One-Stitch Scarf is also great because you can pick any stitch and just repeat it.',
                },
                {
                  q: 'How many chains do I need to start a crochet scarf?',
                  a: 'For a standard 6-8 inch wide scarf with worsted weight yarn and a 5mm hook, chain 22-28 stitches. For bulky yarn with a 6.5mm hook, chain 16-22. The exact number depends on your gauge and desired width. Always make a small gauge swatch first.',
                },
                {
                  q: 'What is the best crochet stitch for a scarf?',
                  a: 'For absolute beginners, single crochet or half double crochet. For a bit of texture without complexity, moss stitch or lemon peel stitch. For a fast project, double crochet. For a boutique look, waffle stitch or basketweave. There is no single best stitch — it depends on your skill level and the look you want.',
                },
                {
                  q: 'How long should a crochet scarf be?',
                  a: 'A standard scarf is 50-60 inches long — long enough to wrap once around the neck with ends hanging. An oversized scarf is 60-72 inches for wrapping twice. A child scarf is 36-48 inches. As a general rule, the scarf should be about as tall as the person wearing it.',
                },
                {
                  q: 'What yarn is best for a crochet scarf?',
                  a: '#4 worsted weight is the most versatile and popular choice. It works with almost every pattern, comes in endless colors, and is easy to find. For winter warmth, use wool or wool-blend. For easy care, use acrylic. For a luxury feel, try merino or alpaca.',
                },
                {
                  q: 'How much yarn do I need for a scarf?',
                  a: 'For a standard worsted weight scarf, you need about 250-400 yards (1-2 skeins). Bulky yarn needs less — about 150-250 yards. Super bulky needs only 100-180 yards. DK weight needs more since it is thinner — about 300-450 yards. Always buy one extra skein.',
                },
                {
                  q: 'Is crochet or knitting easier for a scarf?',
                  a: 'Crochet is generally easier for beginners making a scarf. You only need one hook instead of two needles, it is easier to fix mistakes, and the fabric tends to be thicker and warmer. Crochet also works up faster than knitting for scarves. Both are great — start with whichever you have access to.',
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
              <Link to="/blog/crochet-blanket-stitches-guide" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Blanket Stitches: A Handy Guide
              </Link>
              <Link to="/blog/crochet-hats-free-pattern" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Hats Free Pattern: 25 Free Beanie Crochet Pattern Ideas
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
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
            <p className="text-center text-white/80 text-sm mt-3">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </article>
  );
}
