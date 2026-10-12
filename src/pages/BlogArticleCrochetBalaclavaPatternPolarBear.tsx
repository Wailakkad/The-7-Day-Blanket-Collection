import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, FileDown } from 'lucide-react';

/* ─── SEO (project pattern: client-side title/meta like FreePatterns.tsx) ─── */

const SEO = {
  title: 'Free Polar Bear Crochet Balaclava Pattern (Toddler–Adult) + Size Chart',
  description: 'Make a cozy Polar Bear crochet balaclava hood with this free pattern! Beginner-friendly steps, sizing for toddler/child/adult, yarn tips, and a printable size chart.',
  canonical: '/blog/free-crochet-balaclava-pattern-polar-bear',
};

/* ─── Main Component ─── */

export default function BlogArticleCrochetBalaclavaPatternPolarBear() {
  useEffect(() => {
    document.title = `${SEO.title} | The 7-Day Crochet Blanket Collection`;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', SEO.description);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', SEO.canonical);

    return () => {
      document.title = 'The 7-Day Crochet Blanket Collection';
    };
  }, []);

  // TODO: Upload polar bear balaclava photos to Cloudinary and replace these placeholder image URLs
  // (repo convention is res.cloudinary.com/dhkyla1rv/... — interim images reuse existing winter/hat photos)
  const images = {
    hero: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789041354/hero_banner_background_image.jpg',
  };

  return (
    <article className="bg-[#FBF7F1]">

      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[400px] flex items-center">
        <img
          src={images.hero}
          alt="Free polar bear crochet balaclava pattern with ears"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center w-full">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-xs font-medium text-[#CCD9D0] hover:text-white mb-6 no-underline transition-colors">← Back to Blog</Link>
          <h1 className="font-fraunces text-3xl sm:text-4xl md:text-5xl leading-[1.15] font-semibold text-white tracking-tight mb-5">
            Free Polar Bear Crochet Balaclava Pattern (Toddler–Adult) + Size Chart
          </h1>
          <p className="text-base sm:text-lg text-[#CCD9D0] max-w-2xl mx-auto leading-relaxed">
            Beginner-friendly polar bear hood balaclava with sizing for toddler, child, and adult
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Article Meta */}
        <div className="flex items-center gap-3 text-xs text-[#5B5B5B] mb-10 pb-6 border-b border-[#E9E1D7] flex-wrap">
          <span className="inline-flex items-center gap-1.5 bg-[#E4ECE7] text-[#2F4A3A] px-2.5 py-1 rounded-full font-semibold">
            <BookOpen className="w-3 h-3" /> Pattern Guide
          </span>
          <span>·</span>
          <span>Beginner Friendly</span>
          <span>·</span>
          <span>15 min read</span>
        </div>

        <div className="prose-custom space-y-10">

          {/* Intro */}
          <div className="space-y-5">
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              Make a cozy <strong>Polar Bear crochet balaclava</strong> hood with this free crochet balaclava pattern. It’s beginner-friendly, warm, and includes simple sizing for toddler, child, and adult—plus a fit-focused face opening so it feels comfy and stays in place.
            </p>
          </div>

          {/* Quick Facts */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Quick Facts</h2>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
              <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0">
                <li><strong className="text-[#1F1F1F]">Skill level:</strong> Confident Beginner</li>
                <li><strong className="text-[#1F1F1F]">Style:</strong> Polar Bear hood + balaclava (ears included)</li>
                <li><strong className="text-[#1F1F1F]">Includes:</strong> Face opening shaping + neck coverage</li>
                <li><strong className="text-[#1F1F1F]">Sizing:</strong> Toddler, Child, Adult</li>
              </ul>
            </div>
          </section>

          {/* Materials */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Materials</h2>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
              <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0">
                <li>Bulky weight yarn (#5) for a soft “polar bear” look</li>
                <li>6.5 mm (K) crochet hook (adjust for gauge)</li>
                <li>Stitch marker</li>
                <li>Yarn needle / tapestry needle</li>
                <li>Scissors</li>
              </ul>
            </div>
          </section>

          {/* Gauge */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Gauge</h2>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
              <p className="text-sm text-[#5B5B5B] leading-relaxed">Target gauge: 10 hdc = 4 in (10 cm) and 8 rows = 4 in (10 cm) in half double crochet.</p>
              <p className="text-sm text-[#5B5B5B] leading-relaxed mt-3">If your fabric feels stiff, go up a hook size.</p>
            </div>
          </section>

          {/* CTA Block #1 — Free Balaclava Fit Cheat Sheet */}
          {/* TODO: Replace link with email opt-in landing page for the Balaclava Fit Cheat Sheet once built */}
          <div className="bg-gradient-to-br from-[#2F4A3A] to-[#263C30] rounded-2xl p-6 sm:p-8 text-center shadow-lg">
            <p className="font-fraunces text-lg sm:text-xl font-medium text-white mb-2">Get the free Balaclava Fit Cheat Sheet</p>
            <p className="text-sm text-[#CCD9D0] mb-4 max-w-md mx-auto">A printable fit + size chart so every balaclava lands comfy on the first try.</p>
            <Link to="/free-patterns" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2F4A3A] font-semibold text-sm hover:bg-[#FBF7F1] transition-colors no-underline shadow-sm">
              Download the Free Cheat Sheet <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Sizes + Fit Notes */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Sizes + Fit Notes</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">This pattern is written for:</h3>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0">
                  <li>Toddler (1–3 yrs)</li>
                  <li>Child (4–10 yrs)</li>
                  <li>Adult (Teen–Adult)</li>
                </ul>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <p className="text-sm text-[#5B5B5B] leading-relaxed"><strong className="text-[#1F1F1F]">Fit tip:</strong> Balaclavas need stretch around the face opening. If between sizes, size up.</p>
              </div>
            </div>
          </section>

          {/* Abbreviations */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">5</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Abbreviations (US Terms)</h2>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
              <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0">
                <li><strong className="text-[#1F1F1F]">ch</strong> = chain</li>
                <li><strong className="text-[#1F1F1F]">sc</strong> = single crochet</li>
                <li><strong className="text-[#1F1F1F]">hdc</strong> = half double crochet</li>
                <li><strong className="text-[#1F1F1F]">sl st</strong> = slip stitch</li>
                <li><strong className="text-[#1F1F1F]">inc</strong> = 2 hdc in same stitch</li>
                <li><strong className="text-[#1F1F1F]">dec</strong> = hdc2tog (half double crochet 2 together)</li>
                <li><strong className="text-[#1F1F1F]">st(s)</strong> = stitch(es)</li>
              </ul>
            </div>
          </section>

          {/* Pattern Notes */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">6</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Pattern Notes</h2>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
              <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Construction:</h3>
              <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0">
                <li>Hood is worked top-down in continuous rounds</li>
                <li>Face opening uses short rows + decreases</li>
                <li>Neck is finished with simple ribbing</li>
                <li>Ears are made as round circles and sewn on</li>
              </ul>
            </div>
          </section>

          {/* Part 1: Hood */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">7</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Part 1: Hood (Top of Head)</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Work in continuous rounds. Place a marker in the first stitch of each round.</p>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0 mt-3">
                  <li><strong className="text-[#1F1F1F]">Round 1:</strong> Magic ring, 8 hdc (8)</li>
                  <li><strong className="text-[#1F1F1F]">Round 2:</strong> inc in each st around (16)</li>
                  <li><strong className="text-[#1F1F1F]">Round 3:</strong> (1 hdc, inc) repeat around (24)</li>
                  <li><strong className="text-[#1F1F1F]">Round 4:</strong> (2 hdc, inc) repeat around (32)</li>
                  <li><strong className="text-[#1F1F1F]">Round 5:</strong> (3 hdc, inc) repeat around (40)</li>
                  <li><strong className="text-[#1F1F1F]">Round 6:</strong> (4 hdc, inc) repeat around</li>
                </ul>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Size stops after Round 6</h3>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0">
                  <li><strong className="text-[#1F1F1F]">Toddler:</strong> stop here (48)</li>
                  <li><strong className="text-[#1F1F1F]">Child + Adult:</strong> continue</li>
                </ul>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Round 7 (Child + Adult only)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">(5 hdc, inc) repeat around (56)</p>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0 mt-3">
                  <li><strong className="text-[#1F1F1F]">Child:</strong> stop here</li>
                  <li><strong className="text-[#1F1F1F]">Adult:</strong> continue</li>
                </ul>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Round 8 (Adult only)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">(6 hdc, inc) repeat around (64)</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Work Even Rounds (all sizes)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Hdc in each st around for:</p>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0 mt-3">
                  <li><strong className="text-[#1F1F1F]">Toddler:</strong> 7 rounds</li>
                  <li><strong className="text-[#1F1F1F]">Child:</strong> 8 rounds</li>
                  <li><strong className="text-[#1F1F1F]">Adult:</strong> 9 rounds</li>
                </ul>
                <p className="text-sm text-[#5B5B5B] leading-relaxed mt-3">(Adjust +1 round if you want extra head height.)</p>
              </div>
            </div>
          </section>

          {/* Part 2: Face Opening */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">8</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Part 2: Face Opening Shaping (Short Rows)</h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">You will now work back-and-forth rows to shape the face opening.</p>
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Setup (mark your front center)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Lay the hood flat. Choose a point as center back. The opposite point is front center.</p>
                <p className="text-sm text-[#5B5B5B] leading-relaxed mt-3 mb-2">Mark a front opening section:</p>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0">
                  <li><strong className="text-[#1F1F1F]">Toddler (48 sts):</strong> 20 sts</li>
                  <li><strong className="text-[#1F1F1F]">Child (56 sts):</strong> 22 sts</li>
                  <li><strong className="text-[#1F1F1F]">Adult (64 sts):</strong> 24 sts</li>
                </ul>
                <p className="text-sm text-[#5B5B5B] leading-relaxed mt-3">Work only across the marked stitches for the next rows.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Short Rows</h3>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0">
                  <li><strong className="text-[#1F1F1F]">Row 1 (RS):</strong> Join yarn at first marked st. Ch 1, hdc across marked stitches, turn.</li>
                  <li><strong className="text-[#1F1F1F]">Row 2:</strong> Ch 1, dec, hdc across to last 2 sts, dec, turn.</li>
                  <li><strong className="text-[#1F1F1F]">Row 3:</strong> Ch 1, hdc across, turn.</li>
                </ul>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Repeat Rows 2–3</h3>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0">
                  <li><strong className="text-[#1F1F1F]">Toddler:</strong> 2 more times (total 3 decrease rows)</li>
                  <li><strong className="text-[#1F1F1F]">Child:</strong> 3 more times</li>
                  <li><strong className="text-[#1F1F1F]">Adult:</strong> 4 more times</li>
                </ul>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Chin Bridge</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Ch 8 (9, 10), then sl st into the opposite corner of the face opening section to close the opening into a round again. Fasten off.</p>
              </div>
            </div>
          </section>

          {/* Part 3: Neck */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">9</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Part 3: Neck (Join + Work Down)</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Rejoin yarn at center back bottom edge.</p>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0 mt-3">
                  <li><strong className="text-[#1F1F1F]">Neck Round 1:</strong> hdc evenly around the bottom edge, including the chain bridge (1 hdc in each chain).</li>
                  <li><strong className="text-[#1F1F1F]">Neck Rounds 2–5 (Toddler), 2–6 (Child), 2–7 (Adult):</strong> hdc in each st around.</li>
                </ul>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Neck Ribbing</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Work 2 rounds of sc in back loop only for a snug finish. Join with sl st. Fasten off.</p>
              </div>
            </div>
          </section>

          {/* Part 4: Face Opening Edging */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">10</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Part 4: Face Opening Edging</h2>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
              <p className="text-sm text-[#5B5B5B] leading-relaxed">With RS facing, join yarn anywhere on the face opening.</p>
              <p className="text-sm text-[#5B5B5B] leading-relaxed mt-3">Work sc evenly around. Add 2 sc in the same spot at tight corners if needed to keep it flat. Sl st to join. Fasten off and weave in ends.</p>
            </div>
          </section>

          {/* Part 5: Bear Ears */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">11</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Part 5: Bear Ears (Make 2)</h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">Cute polar bear ears finish the look — make two so they match.</p>
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Outer Ear</h3>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0">
                  <li><strong className="text-[#1F1F1F]">Round 1:</strong> magic ring, 6 sc (6)</li>
                  <li><strong className="text-[#1F1F1F]">Round 2:</strong> inc around (12)</li>
                  <li><strong className="text-[#1F1F1F]">Round 3:</strong> (1 sc, inc) repeat around (18)</li>
                </ul>
                <p className="text-sm text-[#5B5B5B] leading-relaxed mt-3">Fasten off, leave long tail.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Optional Inner Ear</h3>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0">
                  <li><strong className="text-[#1F1F1F]">Round 1:</strong> magic ring, 6 sc</li>
                  <li><strong className="text-[#1F1F1F]">Round 2:</strong> inc around (12)</li>
                </ul>
                <p className="text-sm text-[#5B5B5B] leading-relaxed mt-3">Fasten off, sew onto outer ear.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <p className="text-sm text-[#5B5B5B] leading-relaxed"><strong className="text-[#1F1F1F]">Assembly:</strong> Sew ears onto the top sides of the hood slightly forward for a cute look.</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">FAQ: Crochet Balaclava Pattern Free</h2>
            <div className="space-y-4">
              {[
                { q: 'My face opening feels too tight—what do I do?', a: 'Go up a hook size or size up. You can also add 1–2 chains to the chin bridge.' },
                { q: 'What yarn works best?', a: 'Soft bulky yarn with a bit of squish works great for warmth and comfort.' },
              ].map((item, i) => (
                <div key={i} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <p className="text-sm font-semibold text-[#1F1F1F] mb-2">{item.q}</p>
                  <p className="text-sm text-[#5B5B5B] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Block #2 — Printable ad-free PDF */}
          <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-2xl p-6 sm:p-8 text-center">
            <p className="font-fraunces text-lg sm:text-xl font-semibold text-[#2F4A3A] mb-2">Want the printable ad-free PDF?</p>
            <p className="text-sm text-[#5B5B5B] mb-5 max-w-md mx-auto">Grab the printable version of this polar bear crochet balaclava pattern with bonus fit notes — easy to keep next to your hook.</p>
            <Link to="/store/7-day-blanket-collection" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2F4A3A] text-white font-semibold text-sm hover:bg-[#263C30] transition-colors no-underline shadow-sm">
              <FileDown className="w-4 h-4" /> Get the Printable PDF
            </Link>
          </div>

          {/* Internal Links */}
          <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-2xl p-5 sm:p-6">
            <p className="text-sm font-semibold text-[#2F4A3A] mb-3">Related Guides:</p>
            <div className="space-y-2">
              <Link to="/blog/crochet-cat-ear-beanie" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Cat Ear Beanie
              </Link>
              <Link to="/blog/crochet-hats-free-pattern" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Hats Free Pattern: 25 Free Beanie Crochet Pattern Ideas
              </Link>
              <Link to="/free-patterns" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → More Free Crochet Patterns (PDF Downloads)
              </Link>
            </div>
          </div>

          {/* Closing */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              If you make this <strong>Polar Bear crochet balaclava</strong>, save it on Pinterest and tag me so I can see your version!
            </p>
          </div>

        </div>
      </div>
    </article>
  );
}
