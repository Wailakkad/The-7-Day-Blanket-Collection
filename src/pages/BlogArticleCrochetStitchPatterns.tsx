import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, ArrowRight, X, ZoomIn } from 'lucide-react';
import StitchSwatch from '../components/StitchSwatch';

const HERO_IMAGE = 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788183176/Section_Image_Textured_Blanket_Stitches.jpg';

const EASY_STITCHES = [
  { name: 'Moss Stitch (Linen Stitch)', difficulty: 'Beginner', bestFor: 'Blankets, scarves, dishcloths', tip: 'Use a hook one size smaller than the yarn label recommends for a tighter, more woven-look fabric.', swatch: 'moss' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789114590/Moss_Stitch_Linen_Stitch.jpg' },
  { name: 'Lemon Peel Stitch', difficulty: 'Beginner', bestFor: 'Baby blankets, scarves, hats', tip: 'Keep your tension even — the SC and DC alternation naturally creates texture without extra effort.', swatch: 'lemon' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789114589/Lemon_Peel_Stitch_2.jpg' },
  { name: 'Suzette Stitch', difficulty: 'Beginner', bestFor: 'Lightweight blankets, spring projects', tip: 'Work (SC, DC) in the same stitch, skip one — the rhythm is easy to memorize after two rows.', swatch: 'suzette' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789114592/Suzette_Stitch_2.jpg' },
  { name: 'Seed Stitch', difficulty: 'Beginner', bestFor: 'Scarves, washcloths, baby blankets', tip: 'Alternate SC and DC across each row, offsetting by one each row — simple but textured.', swatch: 'seed' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789114591/Seed_Stitch.jpg' },
  { name: 'Granite Stitch (Moss + Chain)', difficulty: 'Beginner', bestFor: 'Summer blankets, market bags', tip: 'The chain spaces create breathing room — perfect for warm-weather projects.', swatch: 'granite' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789114592/Granite_Stitch_Moss_Chain.jpg' },
  { name: 'Extended Single Crochet', difficulty: 'Beginner', bestFor: 'Dense blankets, bags, baskets', tip: 'Pull up a loop, yarn over, pull through one loop only, then complete like SC — slightly taller than standard SC.', swatch: 'sc' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789114590/Extended_Single_Crochet.jpg' },
];

const BOLD_TEXTURE = [
  { name: 'Bobble Stitch', difficulty: 'Intermediate', bestFor: 'Statement blankets, pillow covers', tip: 'Work 5 DC in the same stitch, then pull through all 6 loops on the hook — push the bobble to the front for maximum texture.', swatch: 'bobble' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789114987/Bobble_Stitch_2.jpg' },
  { name: 'Puff Stitch', difficulty: 'Easy', bestFor: 'Baby blankets, scarves, hats', tip: 'Yarn over and pull up a loop 3-5 times in the same stitch, then pull through all loops — the more repeats, the puffier.', swatch: 'puff' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789115003/Puff_Stitch_2.jpg' },
  { name: 'Popcorn Stitch', difficulty: 'Easy', bestFor: 'Blankets, cowls, decorative edges', tip: 'Work 5 DC in the same stitch, remove hook, insert in first DC, pull the last loop through — creates a raised "pop."', swatch: 'popcorn' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789115004/Popcorn_Stitch_2.jpg' },
  { name: 'Waffle Stitch', difficulty: 'Intermediate', bestFor: 'Thick winter blankets, hot pads', tip: 'The raised ridges use front-post DC — alternate with regular DC to form the waffle grid.', swatch: 'waffle' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789115004/Waffle_Stitch_2.jpg' },
  { name: 'Basketweave Stitch', difficulty: 'Intermediate', bestFor: 'Throw blankets, pillow covers', tip: 'Alternate front-post and back-post DC in blocks of 4 — the woven look comes from switching every 4 rows.', swatch: 'basketweave' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789115003/Basketweave_Stitch.jpg' },
  { name: 'Crocodile Stitch', difficulty: 'Intermediate', bestFor: 'Dragon-scale bags, statement cowls', tip: 'Work pairs of DC around the post of the previous row — each scale overlaps the one below.', swatch: 'crocodile' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789115002/Crocodile_Stitch_2.jpg' },
];

const STRETCHY_TEXTURE = [
  { name: 'Alpine Stitch', difficulty: 'Easy', bestFor: 'Hats, scarves, textured blankets', tip: 'Front-post DC in every other stitch creates a raised diamond pattern — keep the post stitches consistent.', swatch: 'alpine' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789115324/Alpine_Stitch.jpg' },
  { name: 'Herringbone Half Double Crochet', difficulty: 'Easy', bestFor: 'Scarves, blankets, sweaters', tip: 'Pull the first loop through the second loop on the hook immediately after yarning over — creates a slanted, woven look.', swatch: 'herringbone' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789115323/Herringbone_Half_Double_Crochet.jpg' },
  { name: 'Ribbing (BLO HDC)', difficulty: 'Beginner', bestFor: 'Hat brims, sweater cuffs, blanket borders', tip: 'Work HDC in the back loop only — the ribbing stretches horizontally and looks knitted.', swatch: 'ribbing' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789115323/Ribbing_BLO_HDC.jpg' },
  { name: 'Thermal Stitch', difficulty: 'Intermediate', bestFor: 'Oven mitts, thick blankets, hot pads', tip: 'Work SC through both the current row and the row below — creates a double-thick, dense fabric.', swatch: 'thermal' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789115322/Thermal_Stitch_2.jpg' },
  { name: 'Front-Post / Back-Post Ribbing', difficulty: 'Easy', bestFor: 'Hat brims, blanket borders, cuffs', tip: 'Alternate FPDC and BPDC across the row — the more rows you do, the deeper the rib.', swatch: 'ribbing' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789115321/Front-Post_Back-Post_Ribbing.jpg' },
  { name: 'Cable-Style Stitch', difficulty: 'Intermediate', bestFor: 'Aran-style blankets, scarves, hats', tip: 'Skip stitches, work DC, then go back and DC in the skipped stitches — the cross creates a faux cable without a cable hook.', swatch: 'cable' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789115323/Cable-Style_Stitch.jpg' },
];

const MODERN_MINIMAL = [
  { name: 'Honeycomb Stitch', difficulty: 'Intermediate', bestFor: 'Modern blankets, textured scarves', tip: 'Front-post DC and back-post DC in a specific repeat create hexagonal cells — use stitch markers to track the pattern.', swatch: 'honeycomb' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789115780/Honeycomb_Stitch.jpg' },
  { name: 'V-Stitch', difficulty: 'Beginner', bestFor: 'Lightweight blankets, summer throws', tip: '(DC, ch 1, DC) in the same stitch, then work into the chain spaces of the row below — fast and open.', swatch: 'vstitch' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789115778/V-Stitch.jpg' },
  { name: 'Shell Stitch', difficulty: 'Easy', bestFor: 'Borders, baby blankets, shawls', tip: 'Work 5 DC in the same stitch to fan out — skip stitches between shells to keep the fabric flat.', swatch: 'shell' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789115778/Shell_Stitch_2.jpg' },
  { name: 'Granny Stitch', difficulty: 'Beginner', bestFor: 'Classic blankets, scrap yarn projects', tip: 'Clusters of 3 DC with chain spaces between — the most recognizable crochet texture.', swatch: 'granny' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789115776/Granny_Stitch_2.jpg' },
  { name: 'Chevron (Ripple)', difficulty: 'Easy', bestFor: 'Afghans, baby blankets, scarves', tip: 'Increase at the peaks and decrease at the valleys — count carefully to keep the zigzag even.', swatch: 'chevron' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789115775/Chevron_Ripple_2.jpg' },
  { name: 'Mesh Stitch', difficulty: 'Beginner', bestFor: 'Market bags, summer blankets, filet crochet', tip: '(SC, ch 2, skip 2) across — the simplest openwork pattern that works with any yarn.', swatch: 'mesh' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789115777/Mesh_Stitch_2.jpg' },
  { name: 'Eyelet Stitch', difficulty: 'Easy', bestFor: 'Light blankets, decorative edges, ribbons', tip: '(DC, ch 1, skip 1) creates evenly-spaced holes — perfect for threading ribbon through on baby blankets.', swatch: 'eyelet' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789115774/Eyelet_Stitch_2.jpg' },
  { name: 'Ladder Stitch', difficulty: 'Beginner', bestFor: 'Scarves, lightweight blankets, bags', tip: 'Work SC with chain spaces in a ladder formation — the open structure makes it fast to crochet.', swatch: 'ladder' as const, image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789115773/Ladder_Stitch_2.jpg' },
];

export default function BlogArticleCrochetStitchPatterns() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt });
  const closeLightbox = () => setLightbox(null);

  return (
    <article className="bg-[#FBF7F1]">

      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[400px] flex items-center">
        <img
          src={HERO_IMAGE}
          alt="Textured crochet stitches — close-up of waffle, bobble, and moss stitch swatches"
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
            Crochet Stitch Patterns:<br className="hidden sm:block" /> 27 Textured Crochet Stitches That Make Any Project Look Expensive
          </h1>
          <p className="text-base sm:text-lg text-[#CCD9D0] max-w-2xl mx-auto leading-relaxed mb-2">
            Easy crochet stitches + bold textures + modern minimal looks
          </p>
          <p className="text-sm text-[#CCD9D0]/70 max-w-xl mx-auto leading-relaxed">
            Discover crochet stitch patterns with 27 textured crochet stitches, including easy crochet stitches for beginners. Learn how to choose crochet stitches patterns for blankets, scarves, and more.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Article Meta */}
        <div className="flex items-center gap-3 text-xs text-[#5B5B5B] mb-10 pb-6 border-b border-[#E9E1D7]">
          <span className="inline-flex items-center gap-1.5 bg-[#E4ECE7] text-[#2F4A3A] px-2.5 py-1 rounded-full font-semibold">
            <BookOpen className="w-3 h-3" /> Stitch Guide
          </span>
          <span>·</span>
          <span>Beginner Friendly</span>
          <span>·</span>
          <span>20 min read</span>
        </div>

        {/* Article Body */}
        <div className="prose-custom space-y-10">

          {/* Intro */}
          <div className="space-y-5">
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              Texture is what separates a <strong>homemade blanket</strong> from one that looks like it came from a boutique. The right crochet stitch pattern can turn a simple skein of yarn into something that looks <strong>expensive, intentional, and professional</strong> — even if you've been crocheting for less than a year.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              This guide gives you <strong>27 textured crochet stitches</strong> organized by difficulty and style — from easy crochet stitches that beginners can master in an afternoon, to bold statement textures that make people ask "you made that?!" Each stitch includes when to use it and a technique tip so your result looks polished, not lopsided.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              Whether you're planning a chunky winter blanket, a lightweight summer throw, or a scarf that actually gets compliments, you'll find the right crochet stitch pattern here.
            </p>
          </div>

          {/* CTA Block 1 */}
          <div className="bg-gradient-to-br from-[#2F4A3A] to-[#263C30] rounded-2xl p-6 sm:p-8 text-center shadow-lg">
            <p className="font-fraunces text-lg sm:text-xl font-medium text-white mb-4">
              Want patterns that use these stitches in a finishable way?
            </p>
            <Link
              to="/store/7-day-blanket-collection"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2F4A3A] font-semibold text-sm hover:bg-[#FBF7F1] transition-colors no-underline shadow-sm"
            >
              Discover the Blanket Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* How to Choose */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              How to Choose the Right Crochet Stitch Pattern
            </h2>
            <p className="text-sm text-[#5B5B5B] mb-5">
              Before diving into the 27 stitches, here's how to narrow down which ones fit your project:
            </p>

            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Warmth vs Drape</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Dense stitches (SC, thermal, basketweave) trap more air — great for winter blankets. Open stitches (mesh, V-stitch, shell) drape beautifully and work for spring/summer throws.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Speed of Stitching</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Simple repeats (moss, HDC, granny) work up fast. Complex textures (bobble, waffle, crocodile) take longer but create stunning results. Pick based on your patience and deadline.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Yarn Choice for Best Stitch Definition</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Solid, smooth yarns show texture best. Highly variegated or fuzzy yarns can hide detailed stitches. For textured crochet stitches, choose a yarn with good stitch definition — acrylic, cotton, or smooth wool.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Stretch &amp; Edges</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Some stitches (ribbing, BLO HDC) stretch horizontally — perfect for hat brims. Others (SC, thermal) hold their shape. If edges curl, add a border row of single crochet before finishing.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">When to Use Borders</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">A simple SC or crab stitch border frames textured stitches beautifully. For blankets, always add a border — it evens out edges and gives a polished, finished look.</p>
              </div>
            </div>
          </section>

          {/* Section: Easy Crochet Stitches */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-2">
              27 Textured Crochet Stitches
            </h2>
            <p className="text-sm text-[#5B5B5B] mb-8">Easiest first. Each stitch includes when to use it and a technique tip.</p>

            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Easy Crochet Stitches (Beginner-Friendly Texture)
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">Simple repeats that create beautiful texture without advanced techniques.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {EASY_STITCHES.map((s) => (
                <div key={s.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => openLightbox(s.image, `${s.name} crochet stitch`)}
                    className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
                  >
                    <img src={s.image} alt={`${s.name.toLowerCase()} crochet stitch`} loading="lazy" className="w-full" />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </span>
                  </button>
                  <div className="px-3 py-2.5 text-center">
                    <p className="text-xs font-semibold text-[#1F1F1F] leading-tight">{s.name}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {EASY_STITCHES.map((s) => (
                <div key={s.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h4 className="font-fraunces text-base font-semibold text-[#1F1F1F]">{s.name}</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-2 py-0.5 rounded-full w-fit">{s.difficulty}</span>
                  </div>
                  <p className="text-sm text-[#2F4A3A] font-medium mb-1">Best for: {s.bestFor}</p>
                  <p className="text-xs text-[#5B5B5B] leading-relaxed">Tip: {s.tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Bold Textured Stitches */}
          <section>
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Bold Textured Crochet Stitches (Statement Texture)
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">High-impact stitches that create raised, dimensional fabric — perfect for making a statement.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {BOLD_TEXTURE.map((s) => (
                <div key={s.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => openLightbox(s.image, `${s.name} crochet stitch`)}
                    className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
                  >
                    <img src={s.image} alt={`${s.name.toLowerCase()} crochet stitch`} loading="lazy" className="w-full" />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </span>
                  </button>
                  <div className="px-3 py-2.5 text-center">
                    <p className="text-xs font-semibold text-[#1F1F1F] leading-tight">{s.name}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {BOLD_TEXTURE.map((s) => (
                <div key={s.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h4 className="font-fraunces text-base font-semibold text-[#1F1F1F]">{s.name}</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-2 py-0.5 rounded-full w-fit">{s.difficulty}</span>
                  </div>
                  <p className="text-sm text-[#2F4A3A] font-medium mb-1">Best for: {s.bestFor}</p>
                  <p className="text-xs text-[#5B5B5B] leading-relaxed">Tip: {s.tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Block 2 (Mid-article) */}
          <div className="bg-gradient-to-br from-[#2F4A3A] to-[#263C30] rounded-2xl p-6 sm:p-8 text-center shadow-lg">
            <p className="font-fraunces text-lg sm:text-xl font-medium text-white mb-4">
              Ready to try these stitches in a finishable blanket?
            </p>
            <Link
              to="/store/7-day-blanket-collection"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2F4A3A] font-semibold text-sm hover:bg-[#FBF7F1] transition-colors no-underline shadow-sm"
            >
              Discover the Blanket Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Section: Stretchy Textures */}
          <section>
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Stretchy Textures (Ribbing &amp; Structured Looks)
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">Stitches with built-in stretch and structure — great for fitted items and borders.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {STRETCHY_TEXTURE.map((s) => (
                <div key={s.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => openLightbox(s.image, `${s.name} crochet stitch`)}
                    className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
                  >
                    <img src={s.image} alt={`${s.name.toLowerCase()} crochet stitch`} loading="lazy" className="w-full" />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </span>
                  </button>
                  <div className="px-3 py-2.5 text-center">
                    <p className="text-xs font-semibold text-[#1F1F1F] leading-tight">{s.name}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {STRETCHY_TEXTURE.map((s) => (
                <div key={s.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h4 className="font-fraunces text-base font-semibold text-[#1F1F1F]">{s.name}</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-2 py-0.5 rounded-full w-fit">{s.difficulty}</span>
                  </div>
                  <p className="text-sm text-[#2F4A3A] font-medium mb-1">Best for: {s.bestFor}</p>
                  <p className="text-xs text-[#5B5B5B] leading-relaxed">Tip: {s.tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Modern Minimal Textures */}
          <section>
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Modern Minimal Textures (Clean + No Big Holes)
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">Clean, contemporary textures that look sophisticated without being fussy.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
              {MODERN_MINIMAL.map((s) => (
                <div key={s.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => openLightbox(s.image, `${s.name} crochet stitch`)}
                    className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
                  >
                    <img src={s.image} alt={`${s.name.toLowerCase()} crochet stitch`} loading="lazy" className="w-full" />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </span>
                  </button>
                  <div className="px-3 py-2.5 text-center">
                    <p className="text-xs font-semibold text-[#1F1F1F] leading-tight">{s.name}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {MODERN_MINIMAL.map((s) => (
                <div key={s.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h4 className="font-fraunces text-base font-semibold text-[#1F1F1F]">{s.name}</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-2 py-0.5 rounded-full w-fit">{s.difficulty}</span>
                  </div>
                  <p className="text-sm text-[#2F4A3A] font-medium mb-1">Best for: {s.bestFor}</p>
                  <p className="text-xs text-[#5B5B5B] leading-relaxed">Tip: {s.tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Techniques Section */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              Techniques That Make Textured Crochet Look Professional
            </h2>

            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">How to Keep Edges Straight</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Place a stitch marker in the first and last stitch of every row. Count your stitches every 5 rows. If the count changes, fix it immediately — small corrections now prevent big frustration later.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Why Swatches Matter</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">A 4" × 4" swatch tells you your gauge, how the stitch drapes, and whether you like the texture before committing to a full blanket. It takes 15 minutes and saves hours of frogging.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">How to Block Textured Stitches</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Pin the finished piece flat, then steam or mist with water. For textured stitches, don't press flat — hover the steam iron above the surface to relax the fibers without flattening the texture.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">How to Avoid Uneven Texture</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Keep your yarn tension consistent — don't squeeze the hook or let the yarn slide too loosely. Relax your grip. Tight tension causes curling and uneven texture across rows.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Choosing Hook Size for Definition</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">For crisp stitch definition, go down half a hook size from the yarn label recommendation. For softer, drapier texture, go up half a size. The yarn label is a guideline, not a rule.</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              FAQ: Crochet Stitch Patterns
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Best textured crochet stitches for blankets?',
                  a: 'Moss stitch, waffle stitch, and alpine stitch are top picks. Moss stitch is fast and beginner-friendly, waffle creates thick squishy fabric, and alpine gives a sophisticated raised diamond pattern.',
                },
                {
                  q: 'Which crochet stitches look expensive?',
                  a: 'Cable-style stitches, honeycomb, and basketweave create a high-end, artisan look. Bobble and popcorn stitches also add luxury-level texture that looks store-bought.',
                },
                {
                  q: 'Which stitches use the most yarn?',
                  a: 'Bobble, puff, waffle, and crocodile stitches are the most yarn-hungry because they use multiple loops per stitch. Budget about 20-30% more yarn compared to basic SC or DC.',
                },
                {
                  q: 'Which stitches work up fast?',
                  a: 'Granny stitch, V-stitch, and double crochet are the fastest. They cover more area per row and have simple repeats you can do on autopilot.',
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
              <Link to="/blog/crochet-blanket-stitches-guide" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Blanket Stitches: A Handy Guide
              </Link>
              <Link to="/blog/baby-blanket-crochet-stitch-patterns" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → 25 Baby Blanket Crochet Stitch Patterns
              </Link>
            </div>
          </div>

          {/* Closing CTA */}
          <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-2xl p-6 sm:p-8 text-center">
            <p className="font-fraunces text-lg sm:text-xl font-semibold text-[#2F4A3A] mb-3">
              Ready to turn these stitches into a finished blanket?
            </p>
            <p className="text-sm text-[#5B5B5B] mb-5 max-w-md mx-auto">
              Explore our beginner-friendly blanket patterns with sizing help, yarn guidance, and straight-edge tips built in.
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
