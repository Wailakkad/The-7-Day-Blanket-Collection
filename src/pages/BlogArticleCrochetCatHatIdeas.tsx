import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, X, ZoomIn } from 'lucide-react';

/* ─── Data ─── */

interface CatHatIdea {
  name: string;
  level: string;
  yarn: string;
  fit: string;
  tip: string;
}

const BEGINNER_IDEAS: CatHatIdea[] = [
  { name: 'Classic Rectangle Cat Ear', level: 'Beginner', yarn: '#4 worsted', fit: 'Fitted', tip: 'Rectangle + seam = fastest cat ear beanie. The corners become ears automatically.' },
  { name: 'Single Crochet Basic', level: 'Beginner', yarn: '#4 worsted', fit: 'Fitted', tip: 'SC creates the densest fabric — ears hold shape without extra reinforcement.' },
  { name: 'Half Double Crochet Quick', level: 'Beginner', yarn: '#4 worsted', fit: 'Fitted', tip: 'HDC is faster than SC with a slightly softer feel. Great for everyday wear.' },
  { name: 'Color Block Cat Ear', level: 'Beginner', yarn: '#4 worsted', fit: 'Fitted', tip: 'Use two colors — one for the body, one for the ears. The contrast makes ears pop.' },
];

const RIBBED_IDEAS: CatHatIdea[] = [
  { name: 'BLO Ribbed Cat Ear', level: 'Easy', yarn: '#4 worsted', fit: 'Stretchy', tip: 'BLO HDC ribbing stretches to fit any head — the most forgiving fit.' },
  { name: 'FPDC/BPDC Fisherman Rib', level: 'Easy', yarn: '#4 worsted', fit: 'Stretchy', tip: 'Front-post and back-post DC create a deep, knit-look rib that screams cozy.' },
  { name: 'Waffle Stitch Cat Ear', level: 'Intermediate', yarn: '#4 worsted', fit: 'Cozy', tip: 'Waffle texture adds warmth and visual interest — ears look great in this stitch.' },
];

const WINTER_IDEAS: CatHatIdea[] = [
  { name: 'Chunky Bulky Cat Ear', level: 'Beginner', yarn: '#5 bulky', fit: 'Slouchy', tip: 'Bulky yarn works up in under an hour — perfect for last-minute gifts.' },
  { name: 'Super Bulky Quick Cat', level: 'Beginner', yarn: '#6 super bulky', fit: 'Slouchy', tip: 'The fastest cat hat on this list — 30 minutes from start to finish.' },
  { name: 'Bobble Stitch Cat Ear', level: 'Intermediate', yarn: '#4 worsted', fit: 'Cozy', tip: 'Bobbles add playful texture that looks incredible in solid colors.' },
];

const AESTHETIC_IDEAS: CatHatIdea[] = [
  { name: 'Pastel Kitten Beanie', level: 'Easy', yarn: '#4 worsted', fit: 'Fitted', tip: 'Pastel pink, lavender, or mint with soft ears — maximum cozy aesthetic energy.' },
  { name: 'Ombre Gradient Cat', level: 'Easy', yarn: '#4 worsted', fit: 'Fitted', tip: 'Fade between 3 coordinating shades for a sunset effect — the ears fade too.' },
  { name: 'Striped Cat Ear Hat', level: 'Easy', yarn: '#4 worsted', fit: 'Fitted', tip: 'Horizontal stripes in 2-3 colors. Stripes wrap around ears for a playful look.' },
  { name: 'Lemon Peel Texture Cat', level: 'Easy', yarn: '#4 worsted', fit: 'Fitted', tip: 'Lemon peel stitch creates a magical textured surface — eye-catching in any color.' },
];

const FITTED_VS_SLOUCHY: CatHatIdea[] = [
  { name: 'Fitted Classic Cat', level: 'Beginner', yarn: '#4 worsted', fit: 'Fitted', tip: 'Subtract 2" from head circumference for a snug fit that stays in place.' },
  { name: 'Slouchy Cat Beanie', level: 'Easy', yarn: '#4 worsted', fit: 'Slouchy', tip: 'Add 3-4" extra height for a relaxed, draped look behind the ears.' },
];

/* ─── Main Component ─── */

export default function BlogArticleCrochetCatHatIdeas() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt });
  const closeLightbox = () => setLightbox(null);

  const images = {
    hero: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789379013/Hero_Banner_Background.jpg',
    intro: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789378971/Intro_img.jpg',
    quickPicks: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789378993/Quick_Picks_Grid.jpg',
    earGuide: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789379011/Ear_Types_Guide_3_ear_styles.jpg',
    beginnerHdc: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789379004/Half_Double_Crochet_Quick_BEGINNER.jpg',
    beginnerRect: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789378986/Classic_Rectangle_Cat_Ear_BEGINNER.jpg',
    beginnerSc: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789378962/Single_Crochet_Basic_BEGINNER.jpg',
    beginnerColor: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789378957/Color_Block_Cat_Ear_BEGINNER.jpg',
    ribbedBlo: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789379012/BLO_Ribbed_Cat_Ear_Easy.jpg',
    ribbedFisherman: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789379010/FPDCBPDC_Fisherman_Rib_Easy.jpg',
    ribbedWaffle: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789378950/Waffle_Stitch_Cat_Ear_Intermediate.jpg',
  };

  const beginnerImages = [
    { src: images.beginnerRect, alt: 'Classic Rectangle Cat Ear beanie' },
    { src: images.beginnerSc, alt: 'Single Crochet Basic cat ear hat' },
    { src: images.beginnerHdc, alt: 'Half Double Crochet Quick cat ear hat' },
    { src: images.beginnerColor, alt: 'Color Block Cat Ear beanie' },
  ];

  const ribbedImages = [
    { src: images.ribbedBlo, alt: 'BLO Ribbed Cat Ear hat' },
    { src: images.ribbedFisherman, alt: 'FPDC/BPDC Fisherman Rib cat ear hat' },
    { src: images.ribbedWaffle, alt: 'Waffle Stitch Cat Ear hat' },
  ];

  return (
    <article className="bg-[#FBF7F1]">

      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[400px] flex items-center">
        <img
          src={images.hero}
          alt="Crochet cat hat ideas collection"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center w-full">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-xs font-medium text-[#CCD9D0] hover:text-white mb-6 no-underline transition-colors">← Back to Blog</Link>
          <h1 className="font-fraunces text-3xl sm:text-4xl md:text-5xl leading-[1.15] font-semibold text-white tracking-tight mb-5">
            Crochet Cat Hat Ideas:<br className="hidden sm:block" /> 17 Cat Ear Hat Crochet Pattern Styles (Free + Trendy)
          </h1>
          <p className="text-base sm:text-lg text-[#CCD9D0] max-w-2xl mx-auto leading-relaxed">
            Scroll to pick your style — from beginner to aesthetic
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
          <span>14 min read</span>
        </div>

        <div className="prose-custom space-y-10">

          {/* Intro */}
          <div className="space-y-5">
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              Looking for the perfect <strong>crochet cat hat</strong>? Whether you want a classic pointed-ear beanie, a soft kitten look, or a chunky winter version, this roundup has <strong>17 cat ear hat crochet pattern</strong> styles to choose from.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              Each idea includes skill level, yarn suggestion, fit type, and a quick tip so you can pick a style and start crocheting immediately. These are all <strong>crochet beanie pattern free</strong> ideas — no PDFs, no printables, everything is right here.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              Scroll to find your style, or start with the Quick Picks if you want the most wearable options fast.
            </p>
          </div>

          {/* Intro Image */}
          <button type="button" onClick={() => openLightbox(images.intro, 'Crochet cat hat ideas collection')} className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group">
            <img
              src={images.intro}
              alt="Crochet cat hat ideas collection"
              loading="lazy"
              className="w-full rounded-2xl border border-[#E9E1D7]"
            />
            <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
            </span>
          </button>

          {/* Quick Picks */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">★</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Quick Picks (Most Wearable Styles)</h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">Can't browse all 17? These five are the most popular and versatile.</p>
            <button type="button" onClick={() => openLightbox(images.quickPicks, 'Quick picks - most wearable cat ear hat styles')} className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group">
              <img
                src={images.quickPicks}
                alt="Quick picks - most wearable cat ear hat styles"
                loading="lazy"
                className="w-full rounded-2xl border border-[#E9E1D7]"
              />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
              </span>
            </button>
          </section>

          {/* Ear Guide */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">How to Choose Your Cat Ears (Quick Ear Guide)</h2>
            </div>
            <button type="button" onClick={() => openLightbox(images.earGuide, 'Cat eared beanie ear shaping styles guide')} className="block w-full cursor-pointer bg-transparent border-0 p-0 mb-5 relative group">
              <img
                src={images.earGuide}
                alt="Cat eared beanie ear shaping styles guide"
                loading="lazy"
                className="w-full rounded-2xl border border-[#E9E1D7]"
              />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
              </span>
            </button>
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Pointy Ears (Classic Cat)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Best for: costume looks, Halloween, anyone who wants a clearly "cat" hat. The pointed shape is the most recognizable cat ear style.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Soft Ears (Round + Cute)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Best for: everyday wear, gifts, anyone who wants a subtle cat vibe. The rounded ears look like a kitten — adorable without being costume-y.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Mini Ears (Subtle + Modern)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Best for: adults, minimalists, anyone who wants a hint of cat without going full costume. Small nub ears that are modern and chic.</p>
              </div>
            </div>
          </section>

          {/* 17 Ideas */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-2">17 Crochet Cat Hat Ideas (With Mini Tips)</h2>
            <p className="text-sm text-[#5B5B5B] mb-8">Each idea includes skill level, yarn, fit, and a quick technique tip.</p>

            {/* Beginner */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">Beginner-Friendly Cat Ear Hats</h3>
            <p className="text-sm text-[#5B5B5B] mb-5">Simple construction, basic stitches, and guaranteed results. Perfect for your first <strong>crochet cat hat</strong>.</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {BEGINNER_IDEAS.map((idea, i) => (
                <div key={idea.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
                  <button type="button" onClick={() => openLightbox(beginnerImages[i].src, beginnerImages[i].alt)} className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group">
                    <img
                      src={beginnerImages[i].src}
                      alt={beginnerImages[i].alt}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </span>
                  </button>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-fraunces text-sm font-semibold text-[#1F1F1F]">{idea.name}</h4>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-1.5 py-0.5 rounded-full">{idea.level}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-[10px] text-[#5B5B5B] mb-2">
                      <span>Yarn: {idea.yarn}</span>
                      <span>·</span>
                      <span>{idea.fit}</span>
                    </div>
                    <p className="text-xs text-[#2F4A3A] font-medium">Tip: {idea.tip}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Ribbed */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4 mt-10">Ribbed / Knit-Look Cat Ear Hats</h3>
            <p className="text-sm text-[#5B5B5B] mb-5">Stretchy ribbing that looks like knitting — cozy and professional.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {RIBBED_IDEAS.map((idea, i) => (
                <div key={idea.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
                  <button type="button" onClick={() => openLightbox(ribbedImages[i].src, ribbedImages[i].alt)} className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group">
                    <img
                      src={ribbedImages[i].src}
                      alt={ribbedImages[i].alt}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </span>
                  </button>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-fraunces text-sm font-semibold text-[#1F1F1F]">{idea.name}</h4>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-1.5 py-0.5 rounded-full">{idea.level}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-[10px] text-[#5B5B5B] mb-2">
                      <span>Yarn: {idea.yarn}</span>
                      <span>·</span>
                      <span>{idea.fit}</span>
                    </div>
                    <p className="text-xs text-[#2F4A3A] font-medium">Tip: {idea.tip}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Block Mid */}
            <div className="bg-gradient-to-br from-[#2F4A3A] to-[#263C30] rounded-2xl p-6 sm:p-8 text-center shadow-lg my-10">
              <p className="font-fraunces text-lg sm:text-xl font-medium text-white mb-4">Love these stitches? Try them in a blanket.</p>
              <Link to="/store/7-day-blanket-collection" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2F4A3A] font-semibold text-sm hover:bg-[#FBF7F1] transition-colors no-underline shadow-sm">
                Discover the Blanket Collection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Winter */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">Cozy Winter Cat Ear Hats</h3>
            <p className="text-sm text-[#5B5B5B] mb-5">Chunky yarn, warm textures, and maximum coziness for cold weather.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {WINTER_IDEAS.map((idea) => (
                <div key={idea.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-fraunces text-sm font-semibold text-[#1F1F1F]">{idea.name}</h4>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-1.5 py-0.5 rounded-full">{idea.level}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-[10px] text-[#5B5B5B] mb-2">
                    <span>Yarn: {idea.yarn}</span>
                    <span>·</span>
                    <span>{idea.fit}</span>
                  </div>
                  <p className="text-xs text-[#2F4A3A] font-medium">Tip: {idea.tip}</p>
                </div>
              ))}
            </div>

            {/* Aesthetic */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4 mt-10">Aesthetic Pastel / Colorblock Cat Hats</h3>
            <p className="text-sm text-[#5B5B5B] mb-5">Instagram-worthy colors and modern designs — perfect for gifts and photos.</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {AESTHETIC_IDEAS.map((idea) => (
                <div key={idea.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-fraunces text-sm font-semibold text-[#1F1F1F]">{idea.name}</h4>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-1.5 py-0.5 rounded-full">{idea.level}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-[10px] text-[#5B5B5B] mb-2">
                    <span>Yarn: {idea.yarn}</span>
                    <span>·</span>
                    <span>{idea.fit}</span>
                  </div>
                  <p className="text-xs text-[#2F4A3A] font-medium">Tip: {idea.tip}</p>
                </div>
              ))}
            </div>

            {/* Fitted vs Slouchy */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4 mt-10">Slouchy vs Fitted Cat Ear Hats</h3>
            <p className="text-sm text-[#5B5B5B] mb-5">The same cat ear pattern works for both — just adjust the height.</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {FITTED_VS_SLOUCHY.map((idea) => (
                <div key={idea.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-fraunces text-sm font-semibold text-[#1F1F1F]">{idea.name}</h4>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-1.5 py-0.5 rounded-full">{idea.level}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-[10px] text-[#5B5B5B] mb-2">
                    <span>Yarn: {idea.yarn}</span>
                    <span>·</span>
                    <span>{idea.fit}</span>
                  </div>
                  <p className="text-xs text-[#2F4A3A] font-medium">Tip: {idea.tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Common Mistakes + Fixes</h2>
            </div>
            <div className="space-y-4">
              {[
                { mistake: 'Ears Too Small to Notice', fix: 'Use the full corner of the rectangle for shaping. For bigger ears, make the rectangle taller (more rows) before seaming.' },
                { mistake: 'Hat Slides Back on Head', fix: 'The rectangle width was too wide. Subtract 1-2" from head circumference for a snug fit. The stretch fills the gap.' },
                { mistake: 'Ears Fold Down', fix: 'Use a sturdier yarn (acrylic over soft wool) and go down a hook size. For extra stiffness, add felt or wire inside the ears.' },
                { mistake: 'Seam Shows on the Outside', fix: 'Use mattress stitch for an invisible seam. Always seam with the right sides facing each other.' },
                { mistake: 'Brim Curls Up', fix: 'Add a round of reverse single crochet (crab stitch) at the brim edge, or work the first brim round in BLO to prevent curling.' },
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
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">FAQ: Crochet Cat Hat Ideas</h2>
            <div className="space-y-4">
              {[
                { q: 'What is the easiest cat ear hat crochet pattern?', a: 'The rectangle-to-seam method. Crochet a flat rectangle, seam the side, gather the top. The corners become ears — no shaping required.' },
                { q: 'How do I make a cat eared beanie for a baby?', a: 'Use the same pattern but measure the baby head (16-18"). Use soft, washable acrylic yarn and avoid any small embellishments for safety.' },
                { q: 'Can I make a slouchy cat ear hat?', a: 'Yes — add 3-4" extra height to the rectangle before seaming. The extra fabric creates the slouch while the ears still form at the top.' },
                { q: 'What yarn is best for cat ears that stand up?', a: 'Worsted weight (#4) acrylic is ideal — it holds its shape and is machine washable. For extra stiffness, go down half a hook size.' },
                { q: 'How long does a crochet cat hat take?', a: 'About 2-3 hours for an adult size with worsted yarn. Kid sizes are faster — under 2 hours. Chunky yarn versions can be done in under an hour.' },
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
              <Link to="/blog/crochet-cat-ear-beanie" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Cat Ear Beanie (Beginner-Proof): No-Math Sizing for Any Head
              </Link>
              <Link to="/blog/crochet-hats-free-pattern" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Hats Free Pattern: 25 Free Beanie Crochet Pattern Ideas
              </Link>
              <Link to="/blog/crochet-stitch-patterns" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Stitch Patterns: 27 Textured Stitches That Look Expensive
              </Link>
            </div>
          </div>

          {/* Closing CTA */}
          <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-2xl p-6 sm:p-8 text-center">
            <p className="font-fraunces text-lg sm:text-xl font-semibold text-[#2F4A3A] mb-3">Ready to try these stitches in a blanket?</p>
            <p className="text-sm text-[#5B5B5B] mb-5 max-w-md mx-auto">Our beginner-friendly blanket patterns include sizing help, yarn guidance, and straight-edge tips — so you can finish with confidence.</p>
            <Link to="/store/7-day-blanket-collection" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2F4A3A] text-white font-semibold text-sm hover:bg-[#263C30] transition-colors no-underline shadow-sm">
              Browse Blanket Patterns <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={closeLightbox}>
          <button type="button" onClick={closeLightbox} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer z-10">
            <X className="w-5 h-5" />
          </button>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
            <p className="text-center text-white/80 text-sm mt-3">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </article>
  );
}
