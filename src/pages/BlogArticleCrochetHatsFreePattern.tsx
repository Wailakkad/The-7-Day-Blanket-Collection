import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, ArrowRight, Scissors, Clock, Star, X, ZoomIn } from 'lucide-react';

const HERO_IMAGE = 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789041354/hero_banner_background_image.jpg';

const IMAGES = {
  // Easy
  basicRibbed: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039597/Ribbed_BLO_Beanie.jpg',
  classicSC: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039617/Classic_Single_Crochet_Beanie.jpg',
  hdc: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039619/Half_Double_Crochet_Beanie.jpg',
  slouchy: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039549/Chunky_Slouch_Beanie.jpg',
  striped: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039430/Color-Block_Beanie.jpg',
  // Textured
  waffle: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039603/Waffle_Stitch_Beanie.jpg',
  moss: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039596/Moss_Stitch_Beanie.jpg',
  seed: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039584/Seed_Stitch_Beanie.jpg',
  bobble: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039535/Granny-Inspired_Texture_Beanie.jpg',
  cable: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039573/Basketweave_Beanie.jpg',
  textured: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039601/Alpine_Stitch_Beanie.jpg',
  // Chunky
  bulky: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039557/Super_Bulky_Beanie.jpg',
  jumboRibbed: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039559/Chunky_Ribbed_Beanie.jpg',
  puff: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039545/Chunky_Waffle_Beanie.jpg',
  // Men
  classicMen: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039526/Classic_Men_s_Beanie.jpg',
  fisherman: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039516/Men_s_Ribbed_Watch_Cap.jpg',
  dc: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039607/Double_Crochet_Beanie.jpg',
  // Trendy
  mermaid: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039603/Lemon_Peel_Stitch_Beanie.jpg',
  bow: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039496/Pastel_Aesthetic_Beanie.jpg',
  colorblock: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039430/Color-Block_Beanie.jpg',
  ombre: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039500/Men_s_Textured_Beanie.jpg',
  ocean: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039509/Men_s_Slouch_Beanie.jpg',
  // Cat Ear
  catEar: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039463/Cat_Ear_Beanie.jpg',
  pointedCat: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039431/Cat_Ear_Ribbed_Beanie.jpg',
  classicCat: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039443/Classic_Cat_Ear_Beanie.jpg',
  // Extra
  miniPom: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039447/Beanie_With_Mini_Pompom.jpg',
  fitGuide: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039444/Fit_guide_visual_Fitted_vs_Slouchy.jpg',
  construction: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789039446/Construction_comparison_Top-down_vs_Rectangle-seam.jpg',
};

interface PatternCard {
  name: string;
  level: string;
  yarn: string;
  construction: string;
  why: string;
  tip: string;
  image: string;
}

const EASY_BEANIES: PatternCard[] = [
  { name: 'Ribbed BLO Beanie', level: 'Beginner', yarn: '#4 worsted', construction: 'Rectangle + seam', why: 'The simplest hat you\'ll ever make — crochet a rectangle, seam it, gather the top. Done.', tip: 'Make the rectangle 2-3 inches wider than head circumference for a comfortable fit.', image: IMAGES.basicRibbed },
  { name: 'Classic Single Crochet Beanie', level: 'Beginner', yarn: '#4 worsted', construction: 'Top-down in the round', why: 'Dense, warm, and uses the most basic stitch in crochet — perfect for your first hat.', tip: 'Start with 6 SC in a magic ring and increase 6 each round until the flat circle matches half your head circumference.', image: IMAGES.classicSC },
  { name: 'Half Double Crochet Beanie', level: 'Beginner', yarn: '#4 worsted', construction: 'Top-down in the round', why: 'Faster than SC with a slightly softer fabric — the goldilocks of beginner beanies.', tip: 'HDC naturally creates a slight ridge — use that texture to your advantage on the brim.', image: IMAGES.hdc },
  { name: 'Chunky Slouch Beanie', level: 'Beginner', yarn: '#4 worsted', construction: 'Top-down in the round', why: 'Relaxed fit that looks effortlessly cool — great for anyone who doesn\'t like tight hats.', tip: 'Add 2-3 extra rounds after reaching full diameter to get that slouch without it looking like a bag.', image: IMAGES.slouchy },
  { name: 'Color Block Beanie', level: 'Beginner', yarn: '#4 worsted', construction: 'Top-down in the round', why: 'Color stripes make a basic pattern look custom — use scrap yarn for each stripe.', tip: 'Carry the unused color up the inside instead of cutting — saves weaving in ends.', image: IMAGES.striped },
];

const TEXTURED_BEANIES: PatternCard[] = [
  { name: 'Waffle Stitch Beanie', level: 'Easy', yarn: '#4 worsted', construction: 'Top-down in the round', why: 'Deep waffle texture that looks store-bought — squishy and warm.', tip: 'Front-post DC creates the raised ridges. Count carefully — the pattern repeats every 2 rows.', image: IMAGES.waffle },
  { name: 'Moss Stitch Beanie', level: 'Easy', yarn: '#4 worsted', construction: 'Top-down in the round', why: 'Woven-look texture that\'s modern, clean, and reversible.', tip: 'The SC+CH1 skip 1 repeat hides small tension changes — very forgiving.', image: IMAGES.moss },
  { name: 'Seed Stitch Beanie', level: 'Easy', yarn: '#4 worsted', construction: 'Top-down in the round', why: 'Subtle nubby texture that looks elegant in solid colors.', tip: 'Alternate SC and DC, offsetting each row — the texture builds naturally.', image: IMAGES.seed },
  { name: 'Granny Inspired Texture Beanie', level: 'Intermediate', yarn: '#4 worsted', construction: 'Top-down in the round', why: 'Playful raised bobbles that babies and adults both love — tactile and eye-catching.', tip: 'Push each bobble to the front as you make it. Use a stitch marker to track bobble rows.', image: IMAGES.bobble },
  { name: 'Basketweave Beanie', level: 'Intermediate', yarn: '#5 bulky', construction: 'Bottom-up', why: 'Aran-style cables without a cable hook — looks complicated but uses basic stitches.', tip: 'Skip 2, DC in next 2, go back and DC in the skipped stitches — instant faux cable.', image: IMAGES.cable },
  { name: 'Alpine Stitch Beanie', level: 'Easy', yarn: '#4 worsted', construction: 'Top-down in the round', why: 'Front-post and back-post stitches create a raised diamond pattern — looks expensive.', tip: 'The diamond pattern repeats every 4 rounds — use a row counter.', image: IMAGES.textured },
];

const CHUNKY_BEANIES: PatternCard[] = [
  { name: 'Super Bulky Beanie', level: 'Beginner', yarn: '#5 bulky', construction: 'Top-down in the round', why: 'Finished in under an hour — the fastest beanie on this list.', tip: 'Use a 6.5mm or 8mm hook with bulky yarn for maximum speed and squish.', image: IMAGES.bulky },
  { name: 'Chunky Ribbed Beanie', level: 'Beginner', yarn: '#6 super bulky', construction: 'Rectangle + seam', why: 'Chunky ribbing that looks like a cozy winter essential — works up in 30 minutes.', tip: 'Super bulky yarn hides imperfections — perfect for gifting even if you\'re a beginner.', image: IMAGES.jumboRibbed },
  { name: 'Chunky Waffle Beanie', level: 'Easy', yarn: '#5 bulky', construction: 'Bottom-up', why: 'Puff stitches in bulky yarn create maximum coziness with minimum effort.', tip: 'Yarn over and pull up 3 times per puff — the bulkier the yarn, the fewer puffs you need.', image: IMAGES.puff },
];

const MEN_BEANIES: PatternCard[] = [
  { name: 'Classic Men\'s Beanie', level: 'Beginner', yarn: '#4 worsted', construction: 'Bottom-up', why: 'Clean lines, no fuss — the kind of hat guys actually want to wear.', tip: 'Use dark, solid colors and skip the pom-pom for a classic look.', image: IMAGES.classicMen },
  { name: 'Men\'s Ribbed Watch Cap', level: 'Easy', yarn: '#4 worsted', construction: 'Bottom-up', why: 'Deep ribbing that looks like a high-end knit — stretchy and masculine.', tip: 'Work in front-post and back-post DC for the fisherman rib — the stretch is incredible.', image: IMAGES.fisherman },
  { name: 'Double Crochet Beanie', level: 'Beginner', yarn: '#4 worsted', construction: 'Top-down in the round', why: 'Nothing fancy, just a solid well-made hat — great for everyday wear.', tip: 'Keep tension even and count stitches — simplicity shines when execution is clean.', image: IMAGES.dc },
];

const TRENDY_BEANIES: PatternCard[] = [
  { name: 'Lemon Peel Stitch Beanie', level: 'Easy', yarn: '#4 worsted', construction: 'Top-down in the round', why: 'Overlapping scales create a magical, textured look — perfect for color gradients.', tip: 'Use a self-striping yarn to get the gradient effect without changing colors.', image: IMAGES.mermaid },
  { name: 'Pastel Aesthetic Beanie', level: 'Easy', yarn: '#4 worsted', construction: 'Top-down + bow', why: 'A cute bow on top makes this instantly Instagram-worthy — great for gifts.', tip: 'Crochet the bow separately and sew it on — easier than trying to work it into the hat.', image: IMAGES.bow },
  { name: 'Colorblock Beanie', level: 'Beginner', yarn: '#4 worsted', construction: 'Top-down in the round', why: 'Two-tone color blocking looks modern and trendy with zero complex stitches.', tip: 'Switch colors at the halfway point — use tapestry crochet to carry the unused yarn inside.', image: IMAGES.colorblock },
  { name: 'Men\'s Textured Beanie', level: 'Easy', yarn: '#4 worsted', construction: 'Top-down in the round', why: 'Warm gradient colors that look like a sunset — use 3 coordinating shades.', tip: 'Fade between colors by alternating rows before the full switch — the gradient looks natural.', image: IMAGES.ombre },
  { name: 'Men\'s Slouch Beanie', level: 'Easy', yarn: '#4 worsted', construction: 'Top-down in the round', why: 'Cool blue tones with wave-like texture — calming and stylish.', tip: 'Use shell stitches in the round to create the wave effect naturally.', image: IMAGES.ocean },
];

const CAT_EAR_BEANIES: PatternCard[] = [
  { name: 'Cat Ear Beanie', level: 'Easy', yarn: '#4 worsted', construction: 'Rectangle + fold', why: 'The ears form naturally when you fold and seam the top — no shaping needed.', tip: 'Fold the top corners down to a point before seaming — the "ears" pop up when worn.', image: IMAGES.catEar },
  { name: 'Cat Ear Ribbed Beanie', level: 'Easy', yarn: '#4 worsted', construction: 'Top-down', why: 'More defined ears that stand up — great for costume or playful looks.', tip: 'Increase only at the two ear points each round to create the pointed ear shape.', image: IMAGES.pointedCat },
];

function PatternCardComponent({ p, onImageClick }: { p: PatternCard; onImageClick: (src: string, alt: string) => void }) {
  return (
    <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => onImageClick(p.image, `${p.name} crochet beanie`)}
        className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
      >
        <img
          src={p.image}
          alt={`${p.name.toLowerCase()} crochet beanie`}
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

export default function BlogArticleCrochetHatsFreePattern() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt });
  const closeLightbox = () => setLightbox(null);

  return (
    <article className="bg-[#FBF7F1]">

      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[400px] flex items-center">
        <img
          src={HERO_IMAGE}
          alt="Collection of crocheted beanie hats in various styles and colors"
          loading="eager"
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
            Crochet Hats Free Pattern:<br className="hidden sm:block" /> 25 Free Beanie Crochet Pattern Ideas
          </h1>
          <p className="text-base sm:text-lg text-[#CCD9D0] max-w-2xl mx-auto leading-relaxed mb-2">
            Easy, Cute, and Trendy Beanie Crochet Pattern Free Ideas
          </p>
          <p className="text-sm text-[#CCD9D0]/70 max-w-xl mx-auto leading-relaxed">
            Discover crochet hats free pattern ideas with 25 beginner-friendly beanie crochet pattern free options. Includes tips for easy crochet beanie fit, yarn choice, and popular crochet hat pattern styles.
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
              A crocheted beanie is one of the most <strong>satisfying projects</strong> you can make. It's small enough to finish in an evening, useful enough that people actually wear it, and customizable enough to match anyone's style. Whether you're making a <strong>quick gift</strong> or your next favorite hat, this collection of <strong>crochet hats free pattern</strong> ideas has you covered.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              You'll find <strong>25 beanie crochet pattern free ideas</strong> organized by style and skill level — from dead-simple beginner beanies to textured designs that look like they came from a boutique. Each pattern includes yarn suggestions, construction method, and a technique tip so your result looks polished.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              Save this post for later — you'll want to come back when you need a <strong>crochet hat pattern</strong> idea.
            </p>
          </div>

          {/* CTA Block */}
          <div className="bg-gradient-to-br from-[#2F4A3A] to-[#263C30] rounded-2xl p-6 sm:p-8 text-center shadow-lg">
            <p className="font-fraunces text-lg sm:text-xl font-medium text-white mb-4">
              Ready to crochet your first beanie?
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
            <p className="text-sm text-[#5B5B5B] mb-5">Can't browse all 25? Start with these five — each one is great for a different reason.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { name: 'Basic Ribbed Beanie', why: 'Easiest hat on the list — a rectangle plus a seam.', color: 'bg-[#E4ECE7]' },
                { name: 'Bulky Quick Beanie', why: 'Finished in under an hour — perfect for last-minute gifts.', color: 'bg-[#E4ECE7]' },
                { name: 'Waffle Stitch Beanie', why: 'Looks store-bought — the texture is incredible.', color: 'bg-[#E4ECE7]' },
                { name: 'Classic Men\'s Beanie', why: 'The hat guys actually wear — no pom-pom, no fuss.', color: 'bg-[#E4ECE7]' },
                { name: 'Cat Ear Beanie', why: 'Adorable, fast, and the ears form by themselves.', color: 'bg-[#E4ECE7]' },
              ].map((p) => (
                <div key={p.name} className={`${p.color} border border-[#CCD9D0] rounded-xl p-4`}>
                  <p className="font-fraunces text-sm font-semibold text-[#2F4A3A] mb-1">{p.name}</p>
                  <p className="text-xs text-[#5B5B5B] leading-relaxed">{p.why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to Choose */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                How to Choose the Best Beanie Crochet Pattern
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">Before you start crocheting, these five factors will make or break your beanie.</p>

            <button
              type="button"
              onClick={() => openLightbox(IMAGES.fitGuide, 'Visual guide showing fitted vs slouchy beanie fit comparison')}
              className="block w-full cursor-pointer bg-transparent border-0 p-0 mb-5 relative group"
            >
              <img
                src={IMAGES.fitGuide}
                alt="Visual guide showing fitted vs slouchy beanie fit comparison"
                loading="lazy"
                className="w-full rounded-2xl border border-[#E9E1D7]"
              />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
              </span>
            </button>

            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Yarn Weight</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">#4 worsted is the most versatile — works for almost every pattern. #5 bulky works up faster and is warmer. #3 DK creates a lighter, spring-weight hat. Match the yarn to the season and the recipient.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Fit &amp; Measuring Head Circumference</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Measure around the head above the ears. Average: Baby 16-18", Toddler 18-20", Child 20-22", Adult S 21-22", Adult M 22-23", Adult L 23-24". A beanie should be 1-2" smaller than head circumference for a snug fit (the stretch fills the gap).</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Stretch &amp; Ribbing</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Ribbed brims (BLO HDC, FPDC/BPDC) stretch horizontally — essential for a comfortable fit. Non-ribbed brims need to be sized more precisely since they don't stretch as much.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Stitch Definition</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Smooth, solid-color yarn shows texture best. Highly variegated or fuzzy yarns hide detailed stitches. For textured beanies (waffle, cable, bobble), choose a yarn with good stitch definition.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Avoiding Common Issues</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Too tight brim: go up one hook size for the brim only. Beanie too tall: reduce crown rounds. Beanie too short: add body rounds before the brim. Always try it on (or measure against a hat that fits) before binding off.</p>
              </div>
            </div>
          </section>

          {/* 25 Free Beanie Patterns */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-2">
              25 Free Beanie Crochet Pattern Ideas
            </h2>
            <p className="text-sm text-[#5B5B5B] mb-8">Each pattern includes skill level, yarn suggestion, construction method, and a technique tip.</p>

            <button
              type="button"
              onClick={() => openLightbox(IMAGES.construction, 'Comparison of top-down vs rectangle-seam beanie construction methods')}
              className="block w-full cursor-pointer bg-transparent border-0 p-0 mb-8 relative group"
            >
              <img
                src={IMAGES.construction}
                alt="Comparison of top-down vs rectangle-seam beanie construction methods"
                loading="lazy"
                className="w-full rounded-2xl border border-[#E9E1D7]"
              />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
              </span>
            </button>

            {/* Easy Crochet Beanie Patterns */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Easy Crochet Beanie Patterns (Beginner-Friendly)
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">Simple construction, basic stitches, and guaranteed results. Perfect for your first crochet hat.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {EASY_BEANIES.map((p) => (
                <div key={p.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => openLightbox(p.image, `${p.name} crochet beanie`)}
                    className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
                  >
                    <img src={p.image} alt={`${p.name.toLowerCase()} crochet beanie`} loading="lazy" className="w-full" />
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
              {EASY_BEANIES.map((p) => (
                <PatternCardComponent key={p.name} p={p} onImageClick={openLightbox} />
              ))}
            </div>

            {/* Textured Beanies */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Textured Beanie Crochet Patterns (Looks Expensive)
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">Advanced-looking stitches that create boutique-quality texture — people will ask where you bought it.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {TEXTURED_BEANIES.map((p) => (
                <div key={p.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => openLightbox(p.image, `${p.name} crochet beanie`)}
                    className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
                  >
                    <img src={p.image} alt={`${p.name.toLowerCase()} crochet beanie`} loading="lazy" className="w-full" />
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
              {TEXTURED_BEANIES.map((p) => (
                <PatternCardComponent key={p.name} p={p} onImageClick={openLightbox} />
              ))}
            </div>

            {/* Chunky + Fast */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Chunky + Fast Beanies (Quick Gifts)
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">When you need a gift tonight — these work up in under an hour with bulky yarn.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {CHUNKY_BEANIES.map((p) => (
                <div key={p.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => openLightbox(p.image, `${p.name} crochet beanie`)}
                    className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
                  >
                    <img src={p.image} alt={`${p.name.toLowerCase()} crochet beanie`} loading="lazy" className="w-full" />
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
              {CHUNKY_BEANIES.map((p) => (
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

            {/* Men's Beanies */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Beanies for Men (Simple + Classic)
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">Clean lines, solid colors, no frills — the kind of hat guys actually wear every day.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {MEN_BEANIES.map((p) => (
                <div key={p.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => openLightbox(p.image, `${p.name} crochet beanie`)}
                    className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
                  >
                    <img src={p.image} alt={`${p.name.toLowerCase()} crochet beanie`} loading="lazy" className="w-full" />
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
              {MEN_BEANIES.map((p) => (
                <PatternCardComponent key={p.name} p={p} onImageClick={openLightbox} />
              ))}
            </div>

            {/* Trendy Beanies */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Cute &amp; Trendy Beanies (Aesthetic Styles)
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">Instagram-worthy styles that stand out — perfect for gifts and photos.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {TRENDY_BEANIES.map((p) => (
                <div key={p.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => openLightbox(p.image, `${p.name} crochet beanie`)}
                    className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
                  >
                    <img src={p.image} alt={`${p.name.toLowerCase()} crochet beanie`} loading="lazy" className="w-full" />
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
              {TRENDY_BEANIES.map((p) => (
                <PatternCardComponent key={p.name} p={p} onImageClick={openLightbox} />
              ))}
            </div>

            {/* Cat Ear Beanies */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Cat Ear Beanie Crochet (Fun Variation)
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">The ears form naturally from the construction — no sewing required for most patterns.</p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {CAT_EAR_BEANIES.map((p) => (
                <div key={p.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => openLightbox(p.image, `${p.name} crochet beanie`)}
                    className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
                  >
                    <img src={p.image} alt={`${p.name.toLowerCase()} crochet beanie`} loading="lazy" className="w-full" />
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

            <button
              type="button"
              onClick={() => openLightbox(IMAGES.classicCat, 'Classic cat ear beanie crochet pattern close-up')}
              className="block w-full cursor-pointer bg-transparent border-0 p-0 mb-4 relative group"
            >
              <img
                src={IMAGES.classicCat}
                alt="Classic cat ear beanie crochet pattern close-up"
                loading="lazy"
                className="w-full rounded-2xl border border-[#E9E1D7]"
              />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
              </span>
            </button>

            <div className="space-y-4 mb-10">
              {CAT_EAR_BEANIES.map((p) => (
                <PatternCardComponent key={p.name} p={p} onImageClick={openLightbox} />
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              Common Beanie Mistakes (And Easy Fixes)
            </h2>
            <div className="space-y-4">
              {[
                { mistake: 'Hat Too Tight or Too Loose', fix: 'Always make a gauge swatch. If the hat is too tight, go up a hook size. If too loose, go down. For beanie crochet pattern free projects, the brim should stretch 1-2" beyond the flat measurement.' },
                { mistake: 'Brim Curling', fix: 'Add a round of reverse single crochet (crab stitch) at the brim, or work the first brim round in BLO to prevent curling. Blocking also helps.' },
                { mistake: 'Crown Puckering', fix: 'Too many increases in the crown rounds. Follow the standard increase formula: 6 SC per round for worsted, 8 SC per round for bulky. If it ripples, you have too many increases.' },
                { mistake: 'Uneven Seams', fix: 'Use a stitch marker to mark the beginning of each round. For bottom-up beanies, sew the seam with a mattress stitch for an invisible join.' },
                { mistake: 'Wrong Yarn for the Look', fix: 'Fuzzy yarn hides texture. Variegated yarn hides stitch definition. For textured crochet hat patterns, use solid, smooth yarn with good stitch definition.' },
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
              FAQ: Crochet Hats Free Pattern
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What is the easiest crochet hat pattern for beginners?',
                  a: 'The Basic Ribbed Beanie — crochet a rectangle, seam it, and gather the top. It uses only single crochet or half double crochet and takes about 2 hours. This is the most forgiving beanie crochet pattern because the ribbing hides small tension changes.',
                },
                {
                  q: 'How much yarn do I need for a beanie?',
                  a: 'For a worsted weight adult beanie, you\'ll need about 120-180 yards (roughly 1 skein). Bulky yarn beanies use less — about 80-120 yards. Kids\' sizes need even less. Always buy one extra skein just in case.',
                },
                {
                  q: 'How do I size a beanie for kids, men, and women?',
                  a: 'Measure head circumference above the ears. Baby: 16-18", Toddler: 18-20", Child: 20-22", Women S/M: 21-22", Women L/Men S: 22-23", Men L: 23-24". The beanie should be 1-2" smaller than the head measurement for a snug fit.',
                },
                {
                  q: 'Can I use different yarn weights?',
                  a: 'Yes, but adjust your hook size accordingly. #3 DK creates a lighter hat, #4 worsted is standard, #5 bulky is warmer and faster, #6 super bulky is chunky and quick. Always check your gauge — the pattern will tell you what hook to use.',
                },
                {
                  q: 'How do I make a beanie slouchier?',
                  a: 'Add 2-4 extra rounds to the body of the hat before starting the brim. You can also use a larger hook for the body and a smaller hook for the brim. The slouch comes from having more fabric than the head needs — it folds and drapes naturally.',
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
              <Link to="/blog/crochet-blanket-sizes-yarn-yardage-chart" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Blanket Sizes + Yarn Yardage Calculator
              </Link>
              <Link to="/blog/crochet-stitch-patterns" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Stitch Patterns: 27 Textured Stitches That Look Expensive
              </Link>
              <Link to="/blog/crochet-blanket-stitches-guide" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Blanket Stitches: A Handy Guide
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
