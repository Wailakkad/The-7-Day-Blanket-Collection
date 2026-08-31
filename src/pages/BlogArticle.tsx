import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';

export default function BlogArticle() {
  return (
    <article className="bg-[#FBF7F1]">

      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[400px] flex items-center">
        <img
          src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788183221/Section_Image_Basic_Crochet_Stitches.jpg"
          alt=""
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
            Crochet Blanket Stitches:<br className="hidden sm:block" /> A Handy Guide
          </h1>
          <p className="text-base sm:text-lg text-[#CCD9D0] max-w-2xl mx-auto leading-relaxed mb-2">
            Beginner + Textures + UK &amp; US Terms
          </p>
          <p className="text-sm text-[#CCD9D0]/70 max-w-xl mx-auto leading-relaxed">
            Basic, textured, lacy, and fun stitches with simple swatch notes, UK vs US terms, and how to choose a finishable blanket project.
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
          <span>8 min read</span>
        </div>

        {/* Article Body */}
        <div className="prose-custom space-y-10">

          {/* Intro */}
          <div className="space-y-5">
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              If you've ever saved a beautiful crochet blanket idea… and then stalled because you weren't sure <strong>which stitch to use</strong>, you're not alone.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              This guide is a quick, beginner-friendly way to understand popular <strong>crochet blanket stitches</strong>, what they look like, and when to use them—so you can move from <em>"I'll finish it someday"</em> to <em>"I made this."</em>
            </p>
          </div>

          {/* CTA Block 1 */}
          <div className="bg-gradient-to-br from-[#2F4A3A] to-[#263C30] rounded-2xl p-6 sm:p-8 text-center shadow-lg">
            <p className="font-fraunces text-lg sm:text-xl font-medium text-white mb-4">
              Want patterns that use these stitches in a finishable way?
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2F4A3A] font-semibold text-sm hover:bg-[#FBF7F1] transition-colors no-underline shadow-sm"
            >
              Discover the Blanket Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Start */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Quick Start: How to Choose a Stitch
              </h2>
            </div>
            <p className="text-base text-[#1F1F1F] leading-relaxed mb-5">
              When picking a crochet stitch for a blanket, focus on 3 things:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">⚡</div>
                <p className="text-sm font-semibold text-[#1F1F1F] mb-1">Speed</p>
                <p className="text-xs text-[#5B5B5B]">Fast progress or slower texture?</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🧶</div>
                <p className="text-sm font-semibold text-[#1F1F1F] mb-1">Drape</p>
                <p className="text-xs text-[#5B5B5B]">Soft + flexible or thick + structured?</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">✨</div>
                <p className="text-sm font-semibold text-[#1F1F1F] mb-1">Look</p>
                <p className="text-xs text-[#5B5B5B]">Classic, modern, textured, or statement?</p>
              </div>
            </div>
            <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-xl p-4 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#2F4A3A] shrink-0 mt-0.5" />
              <p className="text-sm text-[#2F4A3A] leading-relaxed">
                <strong>Beginner tip:</strong> If you're unsure, start with a stitch that's easy to repeat (like <strong>hdc</strong> or <strong>moss stitch</strong>) and choose a size you'll realistically finish.
              </p>
            </div>
          </section>

          {/* Table of Contents */}
          <section>
            <h2 className="font-fraunces text-xl font-semibold text-[#1F1F1F] tracking-tight mb-4">
              Table of Contents
            </h2>
            <nav className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl p-5 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { href: '#basic-crochet-stitches', label: 'Basic Crochet Stitches' },
                  { href: '#textured-blanket-stitches', label: 'Textured Blanket Stitches' },
                  { href: '#lacy-blanket-stitches', label: 'Lacy Blanket Stitches' },
                  { href: '#fun-stitches', label: 'Fun Stitches' },
                  { href: '#uk-vs-us-terms', label: 'UK vs US Terms' },
                  { href: '#wavy-edges', label: 'Wavy Edges Fix' },
                  { href: '#next-step', label: 'Next Step' },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 text-sm font-medium text-[#2F4A3A] hover:text-[#263C30] no-underline py-1.5 px-3 rounded-lg hover:bg-[#E4ECE7] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2F4A3A]/40 shrink-0" />
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          </section>

          {/* Basic Crochet Stitches */}
          <section id="basic-crochet-stitches">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Basic Crochet Stitches
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">Great for blankets — the foundation stitches every beginner should know.</p>

            <img
              src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788183221/Section_Image_Basic_Crochet_Stitches.jpg"
              alt="Basic crochet stitch swatches — sc, hdc, dc side by side"
              loading="lazy"
              className="w-full h-48 sm:h-56 mb-6 object-cover rounded-2xl border border-[#E9E1D7]"
            />

            <div className="space-y-4">
              {[
                {
                  name: 'Single Crochet (sc)',
                  best: 'Dense, warm blankets; clean edges',
                  note: 'Can feel slower (shorter stitch)',
                },
                {
                  name: 'Half Double Crochet (hdc)',
                  best: 'Beginner blankets; balanced speed + texture',
                  note: 'Easy rhythm — great for "crochet-on-autopilot" rows',
                },
                {
                  name: 'Double Crochet (dc)',
                  best: 'Faster blankets; softer drape',
                  note: 'Larger gaps — choose a slightly smaller hook if you want fewer holes',
                },
              ].map((stitch) => (
                <div key={stitch.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex-1">
                    <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-1">
                      {stitch.name}
                    </h3>
                    <p className="text-sm text-[#2F4A3A] font-medium">{stitch.best}</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-xs text-[#5B5B5B]">{stitch.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Textured Blanket Stitches */}
          <section id="textured-blanket-stitches">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Textured Blanket Stitches
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">Cozy + Modern — add dimension and squish to your blankets.</p>

            <img
              src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788183176/Section_Image_Textured_Blanket_Stitches.jpg"
              alt="Textured crochet stitch examples — moss, waffle, and bobble textures"
              loading="lazy"
              className="w-full h-48 sm:h-56 mb-6 object-cover rounded-2xl border border-[#E9E1D7]"
            />

            <div className="space-y-4">
              {[
                {
                  name: 'Moss Stitch (Linen Stitch)',
                  best: 'A woven look that hides small tension changes',
                  note: 'Beginner-friendly repeat + modern texture',
                },
                {
                  name: 'Waffle Stitch',
                  best: 'Thick, squishy blankets with strong texture',
                  note: 'Uses more yarn and takes longer (worth it for cozy!)',
                },
                {
                  name: 'Popcorn / Puff / Bobble Styles',
                  best: 'Statement texture',
                  note: 'Can be more yarn-hungry and slower',
                },
              ].map((stitch) => (
                <div key={stitch.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex-1">
                    <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-1">
                      {stitch.name}
                    </h3>
                    <p className="text-sm text-[#2F4A3A] font-medium">{stitch.best}</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-xs text-[#5B5B5B]">{stitch.note}</p>
                  </div>
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
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2F4A3A] font-semibold text-sm hover:bg-[#FBF7F1] transition-colors no-underline shadow-sm"
            >
              Discover the Blanket Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Lacy Blanket Stitches */}
          <section id="lacy-blanket-stitches">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Lacy Blanket Stitches
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">Lightweight + Airy — perfect for spring throws and warmer climates.</p>

            <img
              src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788183134/Lacy_Blanket_Stitches_Shell_V_stitch_Mesh_samples.jpg"
              alt="Lacy blanket stitch samples — shell, v-stitch, and mesh patterns"
              loading="lazy"
              className="w-full h-48 sm:h-56 mb-6 object-cover rounded-2xl border border-[#E9E1D7]"
            />

            <div className="space-y-4">
              {[
                {
                  name: 'Shell Stitch',
                  best: 'Decorative blankets, pretty edges',
                  note: 'Needs consistent counting',
                },
                {
                  name: 'V-Stitch',
                  best: 'Simple lace look with easy repeats',
                  note: 'Looks fancy but stays beginner-friendly',
                },
                {
                  name: 'Trellis / Mesh Styles',
                  best: 'Lightweight throws, warmer climates',
                  note: 'The "holes" are a feature — choose intentionally',
                },
              ].map((stitch) => (
                <div key={stitch.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex-1">
                    <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-1">
                      {stitch.name}
                    </h3>
                    <p className="text-sm text-[#2F4A3A] font-medium">{stitch.best}</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-xs text-[#5B5B5B]">{stitch.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Fun Stitches */}
          <section id="fun-stitches">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">5</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Fun Stitches
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">When you want "Wow" — statement stitches that turn heads.</p>

            <img
              src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788183125/Fun_Stitches_Colorful_ripplechevron_blanket_in_progress.jpg"
              alt="Colorful ripple chevron crochet blanket in progress"
              loading="lazy"
              className="w-full h-48 sm:h-56 mb-6 object-cover rounded-2xl border border-[#E9E1D7]"
            />

            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex-1">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-1">
                  Ripple / Chevron
                </h3>
                <p className="text-sm text-[#2F4A3A] font-medium">The "statement blanket" look</p>
              </div>
              <div className="sm:text-right">
                <p className="text-xs text-[#5B5B5B]">Counting matters more (markers help a lot)</p>
              </div>
            </div>
          </section>

          {/* UK vs US Terms */}
          <section id="uk-vs-us-terms">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">6</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                UK vs US Crochet Terms
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">Quick translator — switch between UK and US patterns without confusion.</p>

            <img
              src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788183111/UK_vs_US_Crochet_Terms_visual_side-by-side_chart.jpg"
              alt="UK vs US crochet terms visual side-by-side comparison chart"
              loading="lazy"
              className="w-full h-40 sm:h-48 mb-6 object-cover rounded-2xl border border-[#E9E1D7]"
            />

            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 bg-[#2F4A3A] text-white text-xs font-semibold">
                <div className="px-4 py-3">Stitch</div>
                <div className="px-4 py-3 text-center">UK Term</div>
                <div className="px-4 py-3 text-center">US Term</div>
              </div>
              {[
                { stitch: 'Shortest', uk: 'double crochet (dc)', us: 'single crochet (sc)' },
                { stitch: 'Medium', uk: 'half treble (htr)', us: 'half double crochet (hdc)' },
                { stitch: 'Tallest', uk: 'treble (tr)', us: 'double crochet (dc)' },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-[#FBF7F1]' : 'bg-white'}`}>
                  <div className="px-4 py-3 font-medium text-[#1F1F1F]">{row.stitch}</div>
                  <div className="px-4 py-3 text-center text-[#5B5B5B]">{row.uk}</div>
                  <div className="px-4 py-3 text-center text-[#2F4A3A] font-medium">{row.us}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Wavy Edges */}
          <section id="wavy-edges">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">7</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                The #1 Blanket Problem: Wavy Edges
              </h2>
            </div>

            <img
              src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788183137/The_1_Blanket_Problem_Wavy_Edges_side-by-side_straight_vs_wavy.jpg"
              alt="Side-by-side comparison of straight vs wavy crochet blanket edges"
              loading="lazy"
              className="w-full h-48 sm:h-56 mb-6 object-cover rounded-2xl border border-[#E9E1D7]"
            />

            <p className="text-base text-[#1F1F1F] leading-relaxed mb-5">
              Most beginner blankets don't fail because the stitch is hard—<br />
              they fail because the edges get wavy and the project starts feeling "messy."
            </p>
            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl p-5 sm:p-6">
              <p className="text-sm font-semibold text-[#1F1F1F] mb-4">
                Quick fix (edge routine):
              </p>
              <div className="space-y-3">
                {[
                  'Put a stitch marker in the first and last stitch of each row (at least for the first 10 rows).',
                  'Use the same turning rule every time.',
                  'If your stitch count changes, fix it immediately — small corrections prevent big frustration later.',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#2F4A3A] text-white flex items-center justify-center shrink-0 text-xs font-bold">
                      {i + 1}
                    </span>
                    <p className="text-sm text-[#5B5B5B] leading-relaxed pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Next Step */}
          <section id="next-step">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">8</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Next Step: Pick a Finishable Blanket Pattern
              </h2>
            </div>
            <p className="text-base text-[#1F1F1F] leading-relaxed mb-5">
              Knowing stitches is powerful — but what makes a blanket truly finishable is having:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                'The right pattern for your time',
                'A clear yarn + size plan',
                'A simple repeat you can follow',
                'Finishing steps that make it look polished',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-3.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2F4A3A] shrink-0" />
                  <span className="text-sm text-[#1F1F1F] font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-base text-[#1F1F1F] leading-relaxed mb-6">
              That's exactly what the <strong>7-Day Crochet Blanket Collection</strong> is designed for (finishable mindset, not a time guarantee).
            </p>

            <img
              src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788183101/Next_Step_CTA_Section_Image_product_mockup_7_blanket_patterns_included.jpg"
              alt="7-Day Crochet Blanket Collection product mockup — all 7 blanket patterns"
              loading="lazy"
              className="w-full h-56 sm:h-64 mb-6 object-cover rounded-2xl border border-[#E9E1D7]"
            />

            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl p-5 sm:p-6">
              <p className="text-sm font-semibold text-[#1F1F1F] mb-4">
                What you'll get inside the collection:
              </p>
              <div className="space-y-2.5">
                {[
                  '7 beginner-friendly blanket patterns',
                  'Sizing + yarn guidance',
                  'Straight edges routine',
                  'Borders + finishing checklist',
                  'Printable planner + progress tracker',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#2F4A3A] text-white flex items-center justify-center shrink-0 text-[10px]">✓</span>
                    <span className="text-sm text-[#5B5B5B]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Block 3 (Final) */}
          <div className="bg-gradient-to-br from-[#2F4A3A] to-[#263C30] rounded-2xl p-8 sm:p-10 text-center shadow-lg">
            <h3 className="font-fraunces text-xl sm:text-2xl font-semibold text-white mb-3">
              Ready to start a blanket you can actually finish?
            </h3>
            <p className="text-sm text-[#CCD9D0] mb-6 max-w-md mx-auto">
              7 beginner-friendly patterns, sizing help, straight edges, borders, and printable planners — all in one PDF.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#2F4A3A] font-semibold text-sm sm:text-base hover:bg-[#FBF7F1] transition-colors no-underline shadow-md"
            >
              Discover the Blanket Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </article>
  );
}
