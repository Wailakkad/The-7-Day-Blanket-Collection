import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2, Star, Baby } from 'lucide-react';

const STITCH_IMAGES = [
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788942209/Moss_Linen_Stitch.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788942210/Half_Double_Crochet_HDC_Fabric.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788942208/Lemon_Peel_Stitch.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788942209/Suzette_Stitch.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788942207/Even_Ribbed_Look_HDC_BLO.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788942208/Extended_Single_Crochet_ESC.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788945100/Single_Crochet_SC.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788945109/Half_Double_Crochet_HDC.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788945109/Double_Crochet_DC.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788945104/Granny_Stitch_3_dc_clusters.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788945105/V_Stitch.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788945094/Shell_Stitch.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788945094/Chevron_Ripple.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788948190/Mesh_Stitch.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788948192/Filet_Crochet_open_filled_squares.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788948189/Ladder_Stitch.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788948185/Diamond_Mesh.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788948188/Trellis_Stitch.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788948186/Eyelet_Stitch.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788950702/Bobble_Stitch.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788950700/Popcorn_Stitch.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788950692/Puff_Stitch.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788950696/Waffle_Stitch.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788950702/Thermal_Stitch.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788950695/Crocodile_Stitch.jpg',
];

interface StitchRating {
  name: string;
  desc: string;
  warmth: number;
  stretch: 'Low' | 'Medium' | 'High';
  texture: 'Smooth' | 'Light texture' | 'Deep texture';
  difficulty: 'Beginner' | 'Confident beginner' | 'Intermediate';
  yarn: string;
  bestFor: string;
}

const MODERN_MINIMAL: StitchRating[] = [
  {
    name: 'Moss Stitch (Linen Stitch)',
    desc: 'A woven-look stitch that creates a flat, reversible fabric with subtle texture. Perfect for modern nurseries.',
    warmth: 3, stretch: 'Medium', texture: 'Light texture', difficulty: 'Beginner',
    yarn: 'Cotton or cotton-acrylic blend',
    bestFor: 'Modern nursery, year-round blanket',
  },
  {
    name: 'Alpine Stitch',
    desc: 'A textured stitch that creates a raised, diamond-like pattern. Looks sophisticated but uses basic stitches.',
    warmth: 4, stretch: 'Medium', texture: 'Deep texture', difficulty: 'Confident beginner',
    yarn: 'Acrylic or wool blend',
    bestFor: 'Winter baby blanket, textured look',
  },
  {
    name: 'Lemon Peel Stitch',
    desc: 'Alternating single and double crochet creates a bumpy, citrus-skin texture. Soft and squishy.',
    warmth: 3, stretch: 'Medium', texture: 'Light texture', difficulty: 'Beginner',
    yarn: 'Soft acrylic or bamboo blend',
    bestFor: 'Year-round blanket, gift giving',
  },
  {
    name: 'Suzette Stitch',
    desc: 'Clusters of single crochet and double crochet create a scalloped, slightly textured fabric.',
    warmth: 3, stretch: 'Low', texture: 'Light texture', difficulty: 'Beginner',
    yarn: 'Cotton or acrylic',
    bestFor: 'Lightweight baby blanket, spring/summer',
  },
  {
    name: 'Herringbone Half Double Crochet',
    desc: 'A slanted stitch that creates a elegant, woven-look fabric. Works up quickly with beautiful drape.',
    warmth: 3, stretch: 'Medium', texture: 'Smooth', difficulty: 'Confident beginner',
    yarn: 'Acrylic or bamboo blend',
    bestFor: 'Modern nursery, fast project',
  },
  {
    name: 'Corner-to-Corner (C2C)',
    desc: 'Worked diagonally from one corner to the other. Creates a pixel-like texture that\'s great for graphgan designs.',
    warmth: 3, stretch: 'Medium', texture: 'Light texture', difficulty: 'Confident beginner',
    yarn: 'Acrylic or cotton',
    bestFor: 'Graphgan designs, modern nursery',
  },
];

const CLASSIC_TIMELESS: StitchRating[] = [
  {
    name: 'Single Crochet',
    desc: 'The simplest stitch — dense, warm, and perfect for beginners. Creates a tight, warm fabric.',
    warmth: 4, stretch: 'Low', texture: 'Smooth', difficulty: 'Beginner',
    yarn: 'Any weight — acrylic, cotton, or blend',
    bestFor: 'Winter blanket, newborn safety',
  },
  {
    name: 'Half Double Crochet',
    desc: 'A balanced stitch that\'s faster than single crochet but still creates a warm, dense fabric.',
    warmth: 3, stretch: 'Medium', texture: 'Smooth', difficulty: 'Beginner',
    yarn: 'Acrylic or cotton-acrylic blend',
    bestFor: 'Year-round blanket, first project',
  },
  {
    name: 'Double Crochet',
    desc: 'A taller stitch that works up fast. Creates a softer, more open fabric than single crochet.',
    warmth: 2, stretch: 'High', texture: 'Smooth', difficulty: 'Beginner',
    yarn: 'Acrylic or cotton',
    bestFor: 'Spring/summer blanket, fast gifting',
  },
  {
    name: 'Granny Stitch',
    desc: 'Clusters of 3 double crochet create the classic granny square look. Works in rows or rounds.',
    warmth: 3, stretch: 'Medium', texture: 'Light texture', difficulty: 'Beginner',
    yarn: 'Acrylic or cotton',
    bestFor: 'Classic look, scrap yarn projects',
  },
  {
    name: 'V-Stitch',
    desc: 'Two double crochet separated by a chain create V-shapes. Open but not too holey.',
    warmth: 2, stretch: 'High', texture: 'Light texture', difficulty: 'Beginner',
    yarn: 'Cotton or cotton-acrylic blend',
    bestFor: 'Lightweight blanket, spring/summer',
  },
  {
    name: 'Shell Stitch',
    desc: 'Groups of stitches fan out to create shell shapes. Beautiful, classic texture.',
    warmth: 3, stretch: 'Medium', texture: 'Light texture', difficulty: 'Confident beginner',
    yarn: 'Cotton or soft acrylic',
    bestFor: 'Heirloom blanket, gift giving',
  },
  {
    name: 'Chevron (Ripple)',
    desc: 'Peaks and valleys create a zigzag pattern. Timeless and works with any color scheme.',
    warmth: 3, stretch: 'Medium', texture: 'Light texture', difficulty: 'Confident beginner',
    yarn: 'Acrylic or cotton',
    bestFor: 'Classic nursery, gender-neutral',
  },
];

const AIRY_LIGHTWEIGHT: StitchRating[] = [
  {
    name: 'Mesh Stitch',
    desc: 'Open grid pattern created with chains and single crochet. Lightweight and breathable.',
    warmth: 1, stretch: 'High', texture: 'Smooth', difficulty: 'Beginner',
    yarn: 'Cotton or bamboo',
    bestFor: 'Summer blanket, stroller cover',
  },
  {
    name: 'Filet Crochet',
    desc: 'A grid of filled and open squares creates pictures or patterns. Delicate and beautiful.',
    warmth: 1, stretch: 'High', texture: 'Smooth', difficulty: 'Intermediate',
    yarn: 'Cotton thread or fine cotton',
    bestFor: 'Heirloom blanket, decorative',
  },
  {
    name: 'Ladder Stitch',
    desc: 'Horizontal bars connected by vertical posts create a ladder-like open pattern.',
    warmth: 1, stretch: 'High', texture: 'Smooth', difficulty: 'Beginner',
    yarn: 'Cotton or cotton blend',
    bestFor: 'Summer blanket, warm climate',
  },
  {
    name: 'Diamond Mesh',
    desc: 'Diamond-shaped openings create a lacy, breathable fabric. Elegant and lightweight.',
    warmth: 1, stretch: 'High', texture: 'Smooth', difficulty: 'Confident beginner',
    yarn: 'Cotton or bamboo',
    bestFor: 'Summer blanket, decorative',
  },
  {
    name: 'Trellis Stitch',
    desc: 'Connected chain loops create a trellis-like open pattern. Very airy and lightweight.',
    warmth: 1, stretch: 'High', texture: 'Smooth', difficulty: 'Confident beginner',
    yarn: 'Cotton or bamboo blend',
    bestFor: 'Summer blanket, warm climate',
  },
  {
    name: 'Eyelet Stitch',
    desc: 'Small holes created by yarn-overs form a delicate, breathable pattern.',
    warmth: 2, stretch: 'Medium', texture: 'Smooth', difficulty: 'Confident beginner',
    yarn: 'Cotton or soft acrylic',
    bestFor: 'Spring blanket, light layer',
  },
];

const EXTRA_WARM_COZY: StitchRating[] = [
  {
    name: 'Bobble Stitch',
    desc: 'Raised bobbles pop out from the fabric, creating a 3D texture. Incredibly cozy and warm.',
    warmth: 5, stretch: 'Low', texture: 'Deep texture', difficulty: 'Intermediate',
    yarn: 'Acrylic or wool blend',
    bestFor: 'Winter blanket, sensory texture',
  },
  {
    name: 'Popcorn Stitch',
    desc: 'Similar to bobble but more rounded. Creates a dense, warm fabric with fun texture.',
    warmth: 5, stretch: 'Low', texture: 'Deep texture', difficulty: 'Intermediate',
    yarn: 'Acrylic or wool blend',
    bestFor: 'Winter blanket, sensory play',
  },
  {
    name: 'Puff Stitch',
    desc: 'Soft, puffy clusters create a squishy, cloud-like texture. Warm but lighter than bobble.',
    warmth: 4, stretch: 'Medium', texture: 'Deep texture', difficulty: 'Confident beginner',
    yarn: 'Soft acrylic or wool blend',
    bestFor: 'Cozy blanket, sensory texture',
  },
  {
    name: 'Waffle Stitch',
    desc: 'Grid of raised squares creates a waffle-like texture. Extremely warm and squishy.',
    warmth: 5, stretch: 'Low', texture: 'Deep texture', difficulty: 'Intermediate',
    yarn: 'Acrylic or wool blend',
    bestFor: 'Winter blanket, maximum warmth',
  },
  {
    name: 'Thermal Stitch',
    desc: 'A double-thick stitch that creates a warm, dense fabric. Great for cold climates.',
    warmth: 5, stretch: 'Low', texture: 'Light texture', difficulty: 'Intermediate',
    yarn: 'Acrylic or wool',
    bestFor: 'Winter blanket, cold climates',
  },
  {
    name: 'Crocodile Stitch',
    desc: 'Overlapping scale-like stitches create a dramatic, textured fabric. Warm and eye-catching.',
    warmth: 5, stretch: 'Low', texture: 'Deep texture', difficulty: 'Intermediate',
    yarn: 'Acrylic or wool blend',
    bestFor: 'Statement blanket, textured look',
  },
];

const ALL_STITCHES = [
  ...MODERN_MINIMAL, ...CLASSIC_TIMELESS, ...AIRY_LIGHTWEIGHT, ...EXTRA_WARM_COZY,
];

function StitchCard({ stitch, image, index }: { stitch: StitchRating; image: string; index: number }) {
  return (
    <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl overflow-hidden">
      <img
        src={image}
        alt={`baby blanket crochet stitch — ${stitch.name}`}
        loading="lazy"
        className="w-full"
      />
      <div className="p-5 sm:p-6 space-y-3">
        <h4 className="font-fraunces text-lg font-semibold text-[#1F1F1F]">{stitch.name}</h4>
        <p className="text-sm text-[#5B5B5B] leading-relaxed">{stitch.desc}</p>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-[#1F1F1F]">Warmth:</span>
            <span className="text-[#2F4A3A]">{'★'.repeat(stitch.warmth)}{'☆'.repeat(5 - stitch.warmth)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-[#1F1F1F]">Stretch:</span>
            <span className="text-[#5B5B5B]">{stitch.stretch}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-[#1F1F1F]">Texture:</span>
            <span className="text-[#5B5B5B]">{stitch.texture}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-[#1F1F1F]">Difficulty:</span>
            <span className="text-[#5B5B5B]">{stitch.difficulty}</span>
          </div>
        </div>

        <div className="pt-2 border-t border-[#E9E1D7]/60 space-y-1">
          <p className="text-xs text-[#5B5B5B]"><span className="font-semibold text-[#1F1F1F]">Best yarn:</span> {stitch.yarn}</p>
          <p className="text-xs text-[#2F4A3A] font-medium">Best for: {stitch.bestFor}</p>
        </div>
      </div>
    </div>
  );
}

export default function BlogArticleBabyBlanket() {
  return (
    <article className="bg-[#FBF7F1]">

      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[400px] flex items-center">
        <img
          src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788939227/Folded_handmade_crochet_blankets_2K_202609090929.jpg"
          alt="25 baby blanket crochet stitch patterns with warmth and stretch ratings"
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
            25 Baby Blanket Crochet Stitch Patterns
          </h1>
          <p className="text-base sm:text-lg text-[#CCD9D0] max-w-2xl mx-auto leading-relaxed mb-2">
            With Warmth + Stretch Ratings
          </p>
          <p className="text-sm text-[#CCD9D0]/70 max-w-xl mx-auto leading-relaxed">
            Browse 25 baby blanket crochet stitch patterns with warmth + stretch ratings so you can pick the right stitch fast.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Article Meta */}
        <div className="flex items-center gap-3 text-xs text-[#5B5B5B] mb-10 pb-6 border-b border-[#E9E1D7]">
          <span className="inline-flex items-center gap-1.5 bg-[#E4ECE7] text-[#2F4A3A] px-2.5 py-1 rounded-full font-semibold">
            <Baby className="w-3 h-3" /> Baby Blankets
          </span>
          <span>·</span>
          <span>Beginner Friendly</span>
          <span>·</span>
          <span>18 min read</span>
        </div>

        {/* Article Body */}
        <div className="prose-custom space-y-10">

          {/* Intro */}
          <div className="space-y-5">
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              Choosing the right stitch for a baby blanket isn't just about how it looks — it's about <strong>warmth, stretch, safety, and how quickly you'll finish</strong>. A stitch that's perfect for a winter baby might be too hot for a summer shower gift.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              This guide gives you <strong>25 baby blanket crochet stitch patterns</strong>, each rated for warmth (1–5), stretch (Low/Medium/High), texture, and difficulty — so you can pick the perfect stitch in minutes, not hours.
            </p>
          </div>

          {/* Quick Pick Guide */}
          <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-2xl p-5 sm:p-6">
            <h2 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">Quick Pick Guide (If You're In a Hurry)</h2>
            <div className="space-y-2.5">
              {[
                { label: 'Best for beginners', stitch: 'Single Crochet or Half Double Crochet' },
                { label: 'Warmest', stitch: 'Waffle Stitch or Bobble Stitch (5/5 warmth)' },
                { label: 'Stretchiest', stitch: 'V-Stitch or Mesh Stitch (High stretch)' },
                { label: 'Least holey (best for newborns)', stitch: 'Single Crochet or Moss Stitch' },
                { label: 'Most modern texture', stitch: 'Alpine Stitch or Herringbone HDC' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2F4A3A] shrink-0 mt-1" />
                  <p className="text-sm text-[#5B5B5B]">
                    <span className="font-semibold text-[#1F1F1F]">{item.label}:</span> {item.stitch}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Before You Choose */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              Before You Choose: What Makes a Stitch Baby-Blanket Friendly?
            </h2>
            <div className="space-y-3">
              {[
                { title: 'Softness', desc: 'Choose stitches that create a soft, squishy fabric — avoid stiff, dense stitches for baby skin.' },
                { title: 'Drape', desc: 'A baby blanket should drape softly, not stand up stiff. Stitches with medium stretch usually have the best drape.' },
                { title: 'Holes & Gaps', desc: 'Very open stitches can trap tiny fingers. For newborns, choose tighter stitches with smaller gaps.' },
                { title: 'Snag Risk', desc: 'Avoid bobbles or textured stitches that small fingers could pull or unravel.' },
                { title: 'Washability', desc: 'Baby blankets get washed a lot. Choose stitches that hold up in the machine without losing shape.' },
                { title: 'Stretch & Recovery', desc: 'A good baby blanket stretches for comfort but bounces back. Too much stretch = misshapen blanket.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2F4A3A] shrink-0 mt-1" />
                  <p className="text-sm text-[#5B5B5B]">
                    <span className="font-semibold text-[#1F1F1F]">{item.title}:</span> {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-xl p-4 flex items-start gap-3 mt-5">
              <Star className="w-5 h-5 text-[#2F4A3A] shrink-0 mt-0.5" />
              <p className="text-sm text-[#2F4A3A] leading-relaxed">
                <strong>Safety note:</strong> Avoid very open lacy gaps for tiny fingers if gifting to newborns. Tighter stitches like single crochet, moss stitch, or lemon peel are safest for the youngest babies.
              </p>
            </div>
          </section>

          {/* 25 Stitches - Modern & Minimal */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-2">
              25 Baby Blanket Crochet Stitch Patterns (Warmth + Stretch Ratings)
            </h2>
            <p className="text-sm text-[#5B5B5B] mb-8">Each stitch is rated for warmth, stretch, texture, and difficulty so you can choose with confidence.</p>

            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-5">Modern & Minimal</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {MODERN_MINIMAL.map((stitch, i) => (
                <StitchCard key={stitch.name} stitch={stitch} image={STITCH_IMAGES[i]} index={i} />
              ))}
            </div>

            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-5">Classic & Timeless</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {CLASSIC_TIMELESS.map((stitch, i) => (
                <StitchCard key={stitch.name} stitch={stitch} image={STITCH_IMAGES[i + 6]} index={i + 6} />
              ))}
            </div>

            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-5">Airy & Lightweight</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {AIRY_LIGHTWEIGHT.map((stitch, i) => (
                <StitchCard key={stitch.name} stitch={stitch} image={STITCH_IMAGES[i + 13]} index={i + 13} />
              ))}
            </div>

            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-5">Extra-Warm & Cozy</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {EXTRA_WARM_COZY.map((stitch, i) => (
                <StitchCard key={stitch.name} stitch={stitch} image={STITCH_IMAGES[i + 19]} index={i + 19} />
              ))}
            </div>
          </section>

          {/* Top 5 Safest */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              Top 5 Safest-for-Baby Textures (Low Snag, Low Gap)
            </h2>
            <div className="space-y-4">
              {[
                { name: 'Single Crochet', reason: 'Tightest stitch with virtually no gaps. Impossible for tiny fingers to catch. Machine washable and holds its shape.' },
                { name: 'Moss Stitch', reason: 'Flat, woven texture with tiny, uniform gaps. No raised elements to snag. Reversible and durable.' },
                { name: 'Lemon Peel Stitch', reason: 'Low-profile texture that\'s soft but not bumpy. Small, even bumps won\'t catch on fingers or nails.' },
                { name: 'Half Double Crochet', reason: 'Smooth, dense fabric with minimal gaps. Faster than single crochet but equally safe for newborns.' },
                { name: 'Herringbone HDC', reason: 'Slanted stitches create a smooth, snag-free surface. Beautiful drape without open holes.' },
              ].map((item) => (
                <div key={item.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <p className="text-sm font-semibold text-[#1F1F1F] mb-1">{item.name}</p>
                  <p className="text-sm text-[#5B5B5B] leading-relaxed">{item.reason}</p>
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
              <Link to="/blog/crochet-blanket-sizes-yarn-yardage-chart" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Blanket Sizes + Yarn Yardage Calculator
              </Link>
              <Link to="/blog/how-to-read-crochet-blanket-pattern" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → How to Read ANY Crochet Blanket Pattern
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              FAQ: Baby Blanket Crochet Stitches + Yarn
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What\'s the best yarn fiber for a baby blanket?',
                  a: 'Acrylic is the most popular — it\'s machine washable, hypoallergenic, and affordable. Cotton is great for summer blankets. Bamboo blends are silky soft but may pill over time. Avoid wool for newborns unless you know the parents won\'t mind hand-washing.',
                },
                {
                  q: 'What yarn weight is best for baby blankets?',
                  a: '#3 DK or #4 Worsted are the most common. DK creates a lighter, drapier fabric. Worsted is warmer and works up faster. Both are easy to find and work with.',
                },
                {
                  q: 'How do I know if a stitch has too many gaps for a newborn?',
                  a: 'Do the "finger test" — hold the finished swatch up to light. If you can see clearly through the holes, it\'s too open for a newborn. Tighter stitches like single crochet, moss stitch, or lemon peel are safest.',
                },
                {
                  q: 'How do I stop my baby blanket from curling?',
                  a: 'Add a border — a simple single crochet border around the entire blanket will stop curling. Also, make sure your turning chains are consistent and you\'re not twisting your work.',
                },
                {
                  q: 'What\'s the best border for a baby blanket?',
                  a: 'Single crochet is the safest and simplest. For a decorative touch, try a scallop or shell border. Avoid very lacy borders that could catch on fingers.',
                },
                {
                  q: 'How do I wash a crochet baby blanket?',
                  a: 'Most acrylic and cotton blankets are machine washable on gentle/cold. Lay flat to dry or tumble dry on low. Always check your yarn label for specific care instructions.',
                },
                {
                  q: 'What size should a baby blanket be?',
                  a: 'Standard sizes: Crib (30"×36"), Stroller (30"×36"), Throw (30"×40" or 40"×40"). A 30"×36" blanket is the most versatile — big enough for a crib but small enough for stroller use.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <p className="text-sm font-semibold text-[#1F1F1F] mb-2">{item.q}</p>
                  <p className="text-sm text-[#5B5B5B] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}
