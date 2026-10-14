import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, FileDown } from 'lucide-react';

/* ─── SEO (project pattern: client-side title/meta like BlogArticleCrochetBalaclavaPatternPolarBear.tsx) ─── */

const SEO = {
  title: 'Crochet Balaclava Fit Guide: How to Get the Face Opening Perfect (No Sagging!)',
  description: 'Learn how to size a crochet balaclava so the face opening fits perfectly—no sagging and no tight spots. Includes measurements, gauge tips, easy adjustments, and a free printable fit cheat sheet.',
  canonical: '/blog/crochet-balaclava-face-opening-fit-guide',
};

const HERO_IMAGE = 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791990554/Crochet_Balaclava_Fit_Guide_How_to_Get_the_Face_Opening_cover_image.jpg';

/* ─── Main Component ─── */

export default function BlogArticleBalaclavaFitGuide() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${SEO.title} | The 7-Day Crochet Blanket Collection`;

    const prevUrl = typeof window !== 'undefined' ? window.location.origin + SEO.canonical : SEO.canonical;
    const prevOgImage = typeof window !== 'undefined' ? window.location.origin + HERO_IMAGE : HERO_IMAGE;

    const cleanups: Array<() => void> = [];

    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      let created = false;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
        created = true;
      }
      const prev = el.getAttribute('content');
      el.setAttribute('content', content);
      cleanups.push(() => {
        if (!el) return;
        if (created) el.remove();
        else if (prev !== null) el.setAttribute('content', prev);
      });
    };

    setMeta('name', 'description', SEO.description);
    setMeta('property', 'og:title', SEO.title);
    setMeta('property', 'og:description', SEO.description);
    setMeta('property', 'og:url', prevUrl);
    setMeta('property', 'og:image', prevOgImage);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', SEO.title);
    setMeta('name', 'twitter:description', SEO.description);
    setMeta('name', 'twitter:image', prevOgImage);

    let linkCanonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    let createdCanonical = false;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
      createdCanonical = true;
    }
    const prevCanonical = linkCanonical.getAttribute('href');
    linkCanonical.setAttribute('href', SEO.canonical);
    const canonicalEl = linkCanonical;
    cleanups.push(() => {
      if (createdCanonical) canonicalEl.remove();
      else if (prevCanonical !== null) canonicalEl.setAttribute('href', prevCanonical);
    });

    return () => {
      document.title = prevTitle;
      cleanups.forEach((fn) => fn());
    };
  }, []);

  const problems = [
    {
      q: '“It rides up / pulls under the chin”',
      cause: 'Neck section is too short or too tight',
      fix: 'Add 1–3 extra neck rounds, or increase hook size for the neck.',
    },
    {
      q: '“It slips back off the forehead”',
      cause: 'Face opening is too wide',
      fix: 'Add 1–2 sc edging rounds or reduce opening stitches by 2–4 total.',
    },
    {
      q: '“Cheeks feel tight but forehead is fine”',
      cause: 'Not enough shaping at the cheek curve',
      fix: 'Add 1–2 extra decrease rows on each side of the opening.',
    },
    {
      q: '“It looks good now but stretches out later”',
      cause: 'Yarn is growing (common with very soft plush yarns)',
      fix: 'Add sc edging, consider elastic thread, or choose a fiber with better recovery (wool blends are great).',
    },
  ];

  const faqs = [
    {
      q: 'Can I resize a balaclava pattern from child to adult?',
      a: 'Yes—use gauge + measurement math. Don’t rely on “add a few rounds” only; the face opening usually needs extra shaping too.',
    },
    {
      q: 'Should the face opening be tighter than I think?',
      a: 'Slightly, yes—especially with soft yarn. Crochet relaxes as it’s worn.',
    },
    {
      q: 'What’s the fastest way to fix a saggy opening?',
      a: 'Add 1–2 rounds of single crochet edging with a slightly smaller hook.',
    },
  ];

  return (
    <article className="bg-[#FBF7F1]">

      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[400px] flex items-center bg-[#2F4A3A]">
        <img
          src={HERO_IMAGE}
          alt="crochet balaclava fit guide face opening measurement"
          loading="eager"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center w-full">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-xs font-medium text-[#CCD9D0] hover:text-white mb-6 no-underline transition-colors">← Back to Blog</Link>
          <h1 className="font-fraunces text-3xl sm:text-4xl md:text-5xl leading-[1.15] font-semibold text-white tracking-tight mb-5">
            Crochet Balaclava Fit Guide: How to Get the Face Opening Perfect (No Sagging!)
          </h1>
          <p className="text-base sm:text-lg text-[#CCD9D0] max-w-2xl mx-auto leading-relaxed">
            Measurements, gauge tips, shaping, and easy fixes for a face opening that stays put
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Article Meta */}
        <div className="flex items-center gap-3 text-xs text-[#5B5B5B] mb-10 pb-6 border-b border-[#E9E1D7] flex-wrap">
          <span className="inline-flex items-center gap-1.5 bg-[#E4ECE7] text-[#2F4A3A] px-2.5 py-1 rounded-full font-semibold">
            <BookOpen className="w-3 h-3" /> Balaclava
          </span>
          <span>·</span>
          <span>Beginner Friendly</span>
          <span>·</span>
          <span>10 min read</span>
        </div>

        <div className="prose-custom space-y-10">

          {/* Intro */}
          <div className="space-y-5">
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              Make a crochet balaclava that actually fits: the <strong>face opening</strong> is the part that makes or breaks the whole project. If it’s too tight, it’s uncomfortable. If it’s too loose, it slides around and looks sloppy.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              This guide shows you how to get a comfortable, stay-in-place <strong>crochet balaclava face opening</strong>—even if you’re using a free pattern, changing yarn, or resizing.
            </p>
          </div>

          {/* Quick Fixes */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Quick Fixes (bookmark this)</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">If your face opening is too tight:</h3>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0">
                  <li>Go up 0.5–1 hook size</li>
                  <li>Add 1–2 stitches on each side of the opening</li>
                  <li>Use a stretchier stitch around the face (like sc, not overly tight ribbing)</li>
                </ul>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">If your face opening is sagging or too loose:</h3>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0">
                  <li>Go down 0.5–1 hook size</li>
                  <li>Add a single crochet edging (it tightens the opening)</li>
                  <li>Add decreases near the cheeks (gradual shaping works best)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* What you'll need */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">What you’ll need</h2>
            </div>
            {/* IMAGE 1 — supplies */}
            <img
              src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1791990333/hook_img_1.jpg"
              alt="Crochet balaclava supplies on linen: measuring tape, stitch markers, crochet hook, and yarn"
              loading="lazy"
              className="w-full rounded-2xl border border-[#E9E1D7] mb-5"
            />
            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
              <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0">
                <li>Soft measuring tape</li>
                <li>Stitch markers (or scrap yarn)</li>
                <li>Your yarn + hook (and optionally one hook size up/down)</li>
                <li>Yarn needle</li>
                <li>Optional: thin elastic thread for extra hold at the edge</li>
              </ul>
            </div>
          </section>

          {/* Step 1: Measurements */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Step 1: Take 3 measurements (fast + accurate)</h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">These 3 measurements solve 90% of fit problems:</p>
            {/* IMAGE 2 — the 3 measurements */}
            <img
              src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1791990330/blog_img_2.jpg"
              alt="how to size a crochet balaclava face opening"
              loading="lazy"
              className="w-full rounded-2xl border border-[#E9E1D7] mb-5"
            />
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">1) Head circumference</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Measure around the widest part of the head (usually above eyebrows and ears).</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">2) Face opening width</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Measure across the face from cheek to cheek where you want the opening to sit.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">3) Neck circumference (comfortable)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Measure around the neck loosely (balaclavas should feel snug but not restrictive).</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <p className="text-sm text-[#5B5B5B] leading-relaxed"><strong className="text-[#1F1F1F]">Fit tip:</strong> If you want a cozier, windproof fit, make the face opening slightly smaller and rely on yarn stretch.</p>
              </div>
            </div>
          </section>

          {/* Step 2: Gauge */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Step 2: Gauge is the real “size”</h2>
            </div>
            {/* IMAGE 3 — gauge swatch */}
            <img
              src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1791990333/blog_img_3.jpg"
              alt="Crochet gauge swatch measured with a ruler to count stitches per 4 inches"
              loading="lazy"
              className="w-full rounded-2xl border border-[#E9E1D7] mb-5"
            />
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <p className="text-sm text-[#5B5B5B] leading-relaxed">A crochet balaclava fit changes a lot based on:</p>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0 mt-3">
                  <li>yarn fiber (wool stretches differently than acrylic)</li>
                  <li>hook size</li>
                  <li>stitch pattern (ribbing vs plain stitches)</li>
                </ul>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Quick gauge check (5 minutes)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Make a small swatch in the stitch used near the face opening and measure:</p>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0 mt-3">
                  <li>stitches per 4 inches (10 cm)</li>
                  <li>rows per 4 inches (10 cm)</li>
                </ul>
                <p className="text-sm text-[#5B5B5B] leading-relaxed mt-3">Then convert to stitches per inch:</p>
                <p className="text-sm font-semibold text-[#2F4A3A] mt-2">stitches per inch = stitches ÷ 4</p>
              </div>
            </div>
          </section>

          {/* CTA Block #1 — Balaclava Fit Cheat Sheet (email opt-in) */}
          {/* TODO: Replace link with email opt-in landing page for the Balaclava Fit Cheat Sheet once built */}
          <div className="bg-gradient-to-br from-[#2F4A3A] to-[#263C30] rounded-2xl p-6 sm:p-8 text-center shadow-lg">
            <p className="font-fraunces text-lg sm:text-xl font-medium text-white mb-2">Get the free Balaclava Fit Cheat Sheet</p>
            <p className="text-sm text-[#CCD9D0] mb-4 max-w-md mx-auto">Measurements + stitch math + quick fixes on one printable page, so you don’t have to guess.</p>
            <Link to="/freebies/balaclava-fit-cheat-sheet" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2F4A3A] font-semibold text-sm hover:bg-[#FBF7F1] transition-colors no-underline shadow-sm">
              Download the Free Fit Cheat Sheet <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Step 3: Calculate the opening */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">5</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Step 3: How to calculate the opening (simple method)</h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">Use this when resizing any crochet balaclava pattern.</p>
            {/* IMAGE 4 — stitch formula */}
            <img
              src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1791990326/blog_img_4.jpg"
              alt="Formula card: stitches needed = inches × stitches per inch"
              loading="lazy"
              className="w-full rounded-2xl border border-[#E9E1D7] mb-5"
            />
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Formula</h3>
                <p className="text-sm font-semibold text-[#2F4A3A]">stitches needed = (desired inches) × (stitches per inch)</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Example:</h3>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0">
                  <li>desired face opening width segment = 6 inches</li>
                  <li>stitches per inch = 2.5</li>
                  <li>stitches needed ≈ 15 stitches</li>
                </ul>
                <p className="text-sm text-[#5B5B5B] leading-relaxed mt-3">Round to the nearest number that works with your stitch pattern.</p>
              </div>
            </div>
          </section>

          {/* Step 4: Shape the opening */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">6</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Step 4: Shape the face opening so it doesn’t sag</h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">Sagging happens when the opening is just a “hole” with no shaping. The fix is gentle, symmetrical shaping.</p>
            {/* IMAGE 5 — marking the opening for shaping */}
            <img
              src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1791990323/blog_img_5.jpg"
              alt="Crochet balaclava face opening marked with stitch markers before shaping the cheeks"
              loading="lazy"
              className="w-full rounded-2xl border border-[#E9E1D7] mb-5"
            />
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">The best shaping strategy (beginner-friendly)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Work the opening in rows (or short rows) and do:</p>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0 mt-3">
                  <li>1 decrease at the start</li>
                  <li>1 decrease at the end</li>
                  <li>every other row (or every row for a tighter curve)</li>
                </ul>
                <p className="text-sm text-[#5B5B5B] leading-relaxed mt-3">This creates a cheek curve and keeps the opening stable.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">How many decreases?</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Use this rule of thumb:</p>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0 mt-3">
                  <li><strong className="text-[#1F1F1F]">Toddler/Child:</strong> 2–4 decrease rows total</li>
                  <li><strong className="text-[#1F1F1F]">Adult:</strong> 3–6 decrease rows total</li>
                </ul>
                <p className="text-sm text-[#5B5B5B] leading-relaxed mt-3">Stop when the opening sits comfortably without pulling.</p>
              </div>
            </div>
          </section>

          {/* Step 5: Finish the edge */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">7</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Step 5: Finish the edge (this controls tightness)</h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">Your edging is the easiest way to tighten (or relax) the opening without redoing the whole project.</p>
            {/* IMAGE 6 — before/after edging */}
            <img
              src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1791990326/blog_img_6.jpg"
              alt="crochet balaclava too loose fix single crochet edging"
              loading="lazy"
              className="w-full rounded-2xl border border-[#E9E1D7] mb-5"
            />
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Best edging options</h3>
                <p className="text-sm font-semibold text-[#1F1F1F] mt-3 mb-1">Option A: Single crochet edging (best all-around)</p>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0">
                  <li>1 round sc around the opening</li>
                  <li>If still loose: do 2 rounds sc</li>
                </ul>
                <p className="text-sm font-semibold text-[#1F1F1F] mt-4 mb-1">Option B: Tightening round</p>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0">
                  <li>use sc with a slightly smaller hook</li>
                </ul>
                <p className="text-sm font-semibold text-[#1F1F1F] mt-4 mb-1">Option C: Add elastic thread (advanced but powerful)</p>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0">
                  <li>hold thin elastic thread alongside yarn for 1 edging round</li>
                  <li>this helps prevent long-term stretch</li>
                </ul>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <p className="text-sm text-[#5B5B5B] leading-relaxed"><strong className="text-[#1F1F1F]">Pro tip:</strong> If the edge starts to wave, you’re adding too many stitches—skip a stitch occasionally around curves.</p>
              </div>
            </div>
          </section>

          {/* Common fit problems */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">8</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Common fit problems (and fixes)</h2>
            </div>
            {/* IMAGE 7 — fit comparison */}
            <img
              src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1791990327/blog_img_7.jpg"
              alt="Crochet balaclava fit comparison: correct fit, sagging opening, hood pulled back, and worn as a neck warmer"
              loading="lazy"
              className="w-full rounded-2xl border border-[#E9E1D7] mb-5"
            />
            <div className="space-y-4">
              {problems.map((item, i) => (
                <div key={i} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <p className="text-sm font-semibold text-[#1F1F1F] mb-2">{item.q}</p>
                  <p className="text-sm text-[#5B5B5B] leading-relaxed">{item.cause}</p>
                  <p className="text-sm text-[#5B5B5B] leading-relaxed mt-2"><strong className="text-[#1F1F1F]">Fix:</strong> {item.fix}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Best yarn */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">9</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Best yarn for a face opening that keeps its shape</h2>
            </div>
            {/* IMAGE 8 — yarn choices */}
            <img
              src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1791990332/blog_img_8.jpg"
              alt="Yarn choices for a crochet balaclava face opening with matching crochet swatches"
              loading="lazy"
              className="w-full rounded-2xl border border-[#E9E1D7] mb-5"
            />
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <p className="text-sm text-[#5B5B5B] leading-relaxed mb-3">Look for:</p>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0">
                  <li>good “bounce” (elasticity)</li>
                  <li>smooth enough to be comfortable on skin</li>
                  <li>not overly slippery</li>
                </ul>
                <p className="text-sm text-[#5B5B5B] leading-relaxed mt-4 mb-3">Great choices:</p>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0">
                  <li>acrylic/wool blends</li>
                  <li>wool blends</li>
                  <li>soft acrylic with good twist</li>
                </ul>
                <p className="text-sm text-[#5B5B5B] leading-relaxed mt-4 mb-3">Be careful with:</p>
                <ul className="text-sm text-[#5B5B5B] leading-relaxed space-y-2 list-none p-0 m-0">
                  <li>super fluffy novelty yarns (cute but can stretch and grow)</li>
                  <li>very drapey fibers without recovery</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Free download */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">Free download (makes fitting much easier)</h2>
            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
              <p className="text-sm text-[#5B5B5B] leading-relaxed">
                Want the easy version?{' '}
                <Link to="/freebies/balaclava-fit-cheat-sheet" className="text-[#2F4A3A] font-semibold hover:text-[#263C30] no-underline">
                  Download the printable Balaclava Fit Cheat Sheet (measurements + stitch math + quick fixes)
                </Link>{' '}
                so you don’t have to guess.
              </p>
            </div>
          </section>

          {/* Try it with my free pattern */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">Try it with my free pattern</h2>
            <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-2xl p-5 sm:p-6">
              <p className="text-sm text-[#5B5B5B] leading-relaxed mb-3">If you want a cute project to test your fit, start here:</p>
              <Link to="/blog/free-crochet-balaclava-pattern-polar-bear" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-semibold">
                → Free Polar Bear Crochet Balaclava Pattern (Toddler–Adult) + Size Chart
              </Link>
              <p className="text-sm text-[#5B5B5B] leading-relaxed mt-3">This fit guide will help you adjust the face opening on any size.</p>
            </div>
          </section>

          {/* Printable version (ad-free) */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">Printable version (ad-free)</h2>
            <p className="text-sm text-[#5B5B5B] leading-relaxed mb-5">
              If you’d like a printable, ad-free PDF with extra fit notes and sizing tips, grab the PDF version from the store:
            </p>
          </section>

          {/* CTA Block #2 — Store offer (printable ad-free PDF) */}
          <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-2xl p-6 sm:p-8 text-center">
            <p className="font-fraunces text-lg sm:text-xl font-semibold text-[#2F4A3A] mb-2">Want the printable ad-free PDF?</p>
            <p className="text-sm text-[#5B5B5B] mb-5 max-w-md mx-auto">Extra fit notes and sizing tips in a printable PDF — easy to keep next to your hook.</p>
            <Link to="/store/7-day-blanket-collection" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2F4A3A] text-white font-semibold text-sm hover:bg-[#263C30] transition-colors no-underline shadow-sm">
              <FileDown className="w-4 h-4" /> Get the Printable PDF
            </Link>
          </div>

          {/* FAQ */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">FAQ</h2>
            <div className="space-y-4">
              {faqs.map((item, i) => (
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
              <Link to="/blog/free-crochet-balaclava-pattern-polar-bear" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Free Polar Bear Crochet Balaclava Pattern (Toddler–Adult) + Size Chart
              </Link>
              <Link to="/blog/crochet-hats-free-pattern" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Hats Free Pattern: 25 Free Beanie Crochet Pattern Ideas
              </Link>
              <Link to="/free-patterns" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → More Free Crochet Patterns (PDF Downloads)
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
