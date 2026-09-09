import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2, Ruler, Calculator } from 'lucide-react';

const PRODUCT_URL = '/store/7-day-blanket-collection';

export default function BlogArticleSizes() {
  return (
    <article className="bg-[#FBF7F1]">

      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[400px] flex items-center">
        <img
          src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788796123/1.jpg"
          alt="Crochet blanket size chart and yarn yardage guide"
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
            Crochet Blanket Sizes +<br className="hidden sm:block" /> Yarn Yardage Calculator
          </h1>
          <p className="text-base sm:text-lg text-[#CCD9D0] max-w-2xl mx-auto leading-relaxed mb-2">
            Throw to King — Save This Chart
          </p>
          <p className="text-sm text-[#CCD9D0]/70 max-w-xl mx-auto leading-relaxed">
            Use this crochet blanket size chart + yarn yardage estimates by yarn weight so you never run out of yarn.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Article Meta */}
        <div className="flex items-center gap-3 text-xs text-[#5B5B5B] mb-10 pb-6 border-b border-[#E9E1D7]">
          <span className="inline-flex items-center gap-1.5 bg-[#E4ECE7] text-[#2F4A3A] px-2.5 py-1 rounded-full font-semibold">
            <BookOpen className="w-3 h-3" /> General Crochet
          </span>
          <span>·</span>
          <span>Beginner Friendly</span>
          <span>·</span>
          <span>10 min read</span>
        </div>

        {/* Article Body */}
        <div className="prose-custom space-y-10">

          {/* Intro */}
          <div className="space-y-5">
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              Planning a crochet blanket but not sure <strong>what size to make</strong> or <strong>how much yarn you need</strong>? You're not alone — one of the most common reasons blankets get abandoned is running out of yarn halfway through or ending up way smaller (or bigger) than expected.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              This guide gives you a <strong>free crochet blanket size chart</strong> (baby to king), <strong>yarn yardage estimates by yarn weight</strong> (DK, Worsted, Bulky), and a simple beginner method so you can plan your project with confidence — no math degree required.
            </p>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-2xl p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#2F4A3A] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-[#2F4A3A] mb-2">Quick Answer: Blanket Sizes + Yarn Yardage (Save This)</p>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">
                  A standard <strong>throw blanket (50"×60")</strong> needs roughly <strong>1,500–2,000 yards</strong> of #4 worsted weight yarn. A <strong>queen-size blanket (90"×90")</strong> needs about <strong>4,000–5,500 yards</strong>. The exact amount depends on your stitch, tension, and yarn weight — use the chart below for your specific size.
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE 1 */}
          <img
            src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788796123/2.jpg"
            alt="Folded crochet blanket with measuring tape on linen background — planning blanket sizes"
            loading="lazy"
            className="w-full rounded-2xl border border-[#E9E1D7]"
          />

          {/* Crochet Blanket Size Chart */}
          <section id="blanket-size-chart">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center shrink-0">
                <Ruler className="w-4 h-4" />
              </span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Crochet Blanket Size Chart (Baby to King)
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">
              These are standard finished dimensions. Adjust based on your preference — some people like blankets longer, others wider.
            </p>

            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-4 bg-[#2F4A3A] text-white text-xs font-semibold">
                <div className="px-4 py-3">Size</div>
                <div className="px-4 py-3 text-center">Width</div>
                <div className="px-4 py-3 text-center">Length</div>
                <div className="px-4 py-3 text-center">Best For</div>
              </div>
              {[
                { size: 'Baby', width: '30"', length: '36"', best: 'Crib, stroller' },
                { size: 'Lapghan', width: '36"', length: '48"', best: 'Wheelchair, sofa throw' },
                { size: 'Throw', width: '50"', length: '60"', best: 'Standard sofa throw' },
                { size: 'Twin', width: '66"', length: '90"', best: 'Single bed, dorm room' },
                { size: 'Full / Double', width: '80"', length: '90"', best: 'Full-size bed' },
                { size: 'Queen', width: '90"', length: '90"', best: 'Queen bed' },
                { size: 'King', width: '108"', length: '90"', best: 'King bed, oversized throw' },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-4 text-sm ${i % 2 === 0 ? 'bg-[#FBF7F1]' : 'bg-white'}`}>
                  <div className="px-4 py-3 font-medium text-[#1F1F1F]">{row.size}</div>
                  <div className="px-4 py-3 text-center text-[#5B5B5B]">{row.width}</div>
                  <div className="px-4 py-3 text-center text-[#5B5B5B]">{row.length}</div>
                  <div className="px-4 py-3 text-center text-[#2F4A3A] font-medium text-xs">{row.best}</div>
                </div>
              ))}
            </div>

            <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-xl p-4 flex items-start gap-3 mt-5">
              <CheckCircle2 className="w-5 h-5 text-[#2F4A3A] shrink-0 mt-0.5" />
              <p className="text-sm text-[#2F4A3A] leading-relaxed">
                <strong>Tip:</strong> A throw (50"×60") is the most popular size for a first blanket — it's big enough to be useful but small enough to finish.
              </p>
            </div>
          </section>

          {/* CTA #1 */}
          <div className="bg-gradient-to-br from-[#2F4A3A] to-[#263C30] rounded-2xl p-6 sm:p-8 text-center shadow-lg">
            <p className="font-fraunces text-lg sm:text-xl font-medium text-white mb-4">
              Want a Done‑For‑You Blanket Plan?
            </p>
            <p className="text-sm text-[#CCD9D0] mb-5 max-w-md mx-auto">
              If you want a blanket pattern you can finish without guesswork (sizes, yardage guidance, and clear steps), grab my premium blanket digital product.
            </p>
            <Link
              to={PRODUCT_URL}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2F4A3A] font-semibold text-sm hover:bg-[#FBF7F1] transition-colors no-underline shadow-sm"
            >
              Get the Premium Blanket Pattern <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* IMAGE 2 */}
          <img
            src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788796124/3.jpg"
            alt="Flat lay of a partially crocheted blanket with hook and yarn skeins — planning yardage"
            loading="lazy"
            className="w-full rounded-2xl border border-[#E9E1D7]"
          />

          {/* Yarn Yardage Estimates */}
          <section id="yarn-yardage-estimates">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center shrink-0">
                <Calculator className="w-4 h-4" />
              </span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Yarn Yardage Estimates (DK, Worsted, Bulky)
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">
              These are realistic ranges for basic stitches (sc, hdc, dc). Textured stitches like waffle or bobble use 10–20% more yarn. Always buy an extra skein to be safe.
            </p>

            {/* DK Weight */}
            <div className="mb-6">
              <h3 className="font-fraunces text-lg font-semibold text-[#1F1F1F] mb-3">#3 DK / Light Weight</h3>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl overflow-hidden">
                <div className="grid grid-cols-3 bg-[#2F4A3A] text-white text-xs font-semibold">
                  <div className="px-4 py-3">Size</div>
                  <div className="px-4 py-3 text-center">Yardage</div>
                  <div className="px-4 py-3 text-center">Skeins (100g)</div>
                </div>
                {[
                  { size: 'Throw (50"×60")', yards: '1,800–2,200', skeins: '10–12' },
                  { size: 'Twin (66"×90")', yards: '3,200–3,800', skeins: '18–21' },
                  { size: 'Queen (90"×90")', yards: '4,500–5,500', skeins: '25–30' },
                  { size: 'King (108"×90")', yards: '5,800–7,000', skeins: '32–39' },
                ].map((row, i) => (
                  <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-[#FBF7F1]' : 'bg-white'}`}>
                    <div className="px-4 py-3 font-medium text-[#1F1F1F]">{row.size}</div>
                    <div className="px-4 py-3 text-center text-[#5B5B5B]">{row.yards}</div>
                    <div className="px-4 py-3 text-center text-[#2F4A3A] font-medium">{row.skeins}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Worsted Weight */}
            <div className="mb-6">
              <h3 className="font-fraunces text-lg font-semibold text-[#1F1F1F] mb-3">#4 Worsted / Medium Weight</h3>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl overflow-hidden">
                <div className="grid grid-cols-3 bg-[#2F4A3A] text-white text-xs font-semibold">
                  <div className="px-4 py-3">Size</div>
                  <div className="px-4 py-3 text-center">Yardage</div>
                  <div className="px-4 py-3 text-center">Skeins (100g)</div>
                </div>
                {[
                  { size: 'Throw (50"×60")', yards: '1,500–2,000', skeins: '8–11' },
                  { size: 'Twin (66"×90")', yards: '2,800–3,400', skeins: '15–19' },
                  { size: 'Queen (90"×90")', yards: '4,000–5,000', skeins: '22–28' },
                  { size: 'King (108"×90")', yards: '5,200–6,400', skeins: '29–36' },
                ].map((row, i) => (
                  <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-[#FBF7F1]' : 'bg-white'}`}>
                    <div className="px-4 py-3 font-medium text-[#1F1F1F]">{row.size}</div>
                    <div className="px-4 py-3 text-center text-[#5B5B5B]">{row.yards}</div>
                    <div className="px-4 py-3 text-center text-[#2F4A3A] font-medium">{row.skeins}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bulky Weight */}
            <div>
              <h3 className="font-fraunces text-lg font-semibold text-[#1F1F1F] mb-3">#5 Bulky / #6 Super Bulky Weight</h3>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl overflow-hidden">
                <div className="grid grid-cols-3 bg-[#2F4A3A] text-white text-xs font-semibold">
                  <div className="px-4 py-3">Size</div>
                  <div className="px-4 py-3 text-center">Yardage</div>
                  <div className="px-4 py-3 text-center">Skeins (100g)</div>
                </div>
                {[
                  { size: 'Throw (50"×60")', yards: '1,000–1,400', skeins: '6–8' },
                  { size: 'Twin (66"×90")', yards: '1,800–2,400', skeins: '10–14' },
                  { size: 'Queen (90"×90")', yards: '2,600–3,400', skeins: '15–19' },
                  { size: 'King (108"×90")', yards: '3,400–4,400', skeins: '19–25' },
                ].map((row, i) => (
                  <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-[#FBF7F1]' : 'bg-white'}`}>
                    <div className="px-4 py-3 font-medium text-[#1F1F1F]">{row.size}</div>
                    <div className="px-4 py-3 text-center text-[#5B5B5B]">{row.yards}</div>
                    <div className="px-4 py-3 text-center text-[#2F4A3A] font-medium">{row.skeins}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-xl p-4 flex items-start gap-3 mt-5">
              <CheckCircle2 className="w-5 h-5 text-[#2F4A3A] shrink-0 mt-0.5" />
              <p className="text-sm text-[#2F4A3A] leading-relaxed">
                <strong>Note:</strong> Stitch type and personal tension change yardage. Textured stitches (waffle, bobble) use 10–20% more. Open stitches (mesh, V-stitch) use less. Always buy one extra skein.
              </p>
            </div>
          </section>

          {/* IMAGE 3 */}
          <img
            src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788796123/4.jpg"
            alt="Close-up of crochet swatch with ruler showing gauge and texture"
            loading="lazy"
            className="w-full rounded-2xl border border-[#E9E1D7]"
          />

          {/* Yardage Made Easy */}
          <section id="yardage-made-easy">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Yardage Made Easy (Beginner Method)
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">
              No complicated formulas needed. Here's the simplest way to estimate yarn:
            </p>

            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Pick your size from the chart above',
                  desc: 'Know your target width × length before you buy yarn.',
                },
                {
                  step: '2',
                  title: 'Check the yarn label',
                  desc: 'Most skeins list yardage (e.g., 220 yards per 100g for worsted).',
                },
                {
                  step: '3',
                  title: 'Use the estimates from the chart',
                  desc: 'Match your yarn weight to the size and find the yardage range.',
                },
                {
                  step: '4',
                  title: 'Add 10–15% buffer',
                  desc: 'Always buy a little extra. Leftover yarn is better than running short.',
                },
              ].map((item) => (
                <div key={item.step} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5 flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#2F4A3A] text-white flex items-center justify-center shrink-0 text-xs font-bold">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#1F1F1F] mb-1">{item.title}</p>
                    <p className="text-sm text-[#5B5B5B] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How to Measure */}
          <section id="how-to-measure">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                How to Measure a Blanket (Width × Length)
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">
              Whether you're making a blanket or buying one, here's how to measure correctly:
            </p>

            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl p-5 sm:p-6 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#2F4A3A] shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-[#1F1F1F]">Width (side to side)</p>
                  <p className="text-sm text-[#5B5B5B]">Measure across the blanket from one side edge to the other. For a bed blanket, measure the mattress width and add 6–12" on each side for drape.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#2F4A3A] shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-[#1F1F1F]">Length (top to bottom)</p>
                  <p className="text-sm text-[#5B5B5B]">Measure from the top edge (near the pillows) down to where you want the blanket to end. For a bed blanket, measure the mattress length and add 12–18" for the foot drape.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#2F4A3A] shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-[#1F1F1F]">Measure after blocking</p>
                  <p className="text-sm text-[#5B5B5B]">Crochet fabric can stretch or shrink slightly after washing and blocking. Measure your finished blanket after its first wash for the most accurate dimensions.</p>
                </div>
              </div>
            </div>
          </section>

          {/* IMAGE 4 */}
          <img
            src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788796123/6.jpg"
            alt="Stack of folded crochet blankets in different neutral tones — giftable blanket look"
            loading="lazy"
            className="w-full rounded-2xl border border-[#E9E1D7]"
          />

          {/* Choose Yarn Weight */}
          <section id="choose-yarn-weight">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Choose Yarn Weight for Drape & Warmth
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">
              Different yarn weights give different feelings. Here's how to choose:
            </p>

            <div className="space-y-4">
              {[
                {
                  weight: '#3 DK / Light',
                  drape: 'Light, flowing drape',
                  warmth: 'Light-medium warmth',
                  best: 'Spring/fall throws, gift blankets, layered bed blankets',
                  hook: '3.5mm–4.5mm',
                },
                {
                  weight: '#4 Worsted / Medium',
                  drape: 'Balanced drape — not too stiff, not too floppy',
                  warmth: 'Medium warmth — year-round use',
                  best: 'Most blankets, beginner projects, all-purpose',
                  hook: '5.0mm–5.5mm',
                },
                {
                  weight: '#5 Bulky',
                  drape: 'Thicker, cozier drape',
                  warmth: 'Warm — great for winter',
                  best: 'Chunky throws, fast projects, cozy gifts',
                  hook: '6.0mm–8.0mm',
                },
                {
                  weight: '#6 Super Bulky',
                  drape: 'Very thick, structured feel',
                  warmth: 'Maximum warmth — cold climate blankets',
                  best: 'Quick blankets, statement pieces, ultra-cozy throws',
                  hook: '8.0mm–12.0mm',
                },
              ].map((item) => (
                <div key={item.weight} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">{item.weight}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <p className="text-[#5B5B5B]"><span className="font-medium text-[#1F1F1F]">Drape:</span> {item.drape}</p>
                    <p className="text-[#5B5B5B]"><span className="font-medium text-[#1F1F1F]">Warmth:</span> {item.warmth}</p>
                    <p className="text-[#5B5B5B]"><span className="font-medium text-[#1F1F1F]">Best for:</span> {item.best}</p>
                    <p className="text-[#5B5B5B]"><span className="font-medium text-[#1F1F1F]">Hook size:</span> {item.hook}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA #2 */}
          <div className="bg-gradient-to-br from-[#2F4A3A] to-[#263C30] rounded-2xl p-6 sm:p-8 text-center shadow-lg">
            <p className="font-fraunces text-lg sm:text-xl font-medium text-white mb-4">
              Shortcut: Start With the Right Plan
            </p>
            <p className="text-sm text-[#CCD9D0] mb-5 max-w-md mx-auto">
              Most blanket problems come from sizing + yarn choices at the start. My premium digital blanket product includes a simple plan so you can start confidently and finish faster.
            </p>
            <Link
              to={PRODUCT_URL}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2F4A3A] font-semibold text-sm hover:bg-[#FBF7F1] transition-colors no-underline shadow-sm"
            >
              See the Premium Blanket Product <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Common Mistakes */}
          <section id="common-mistakes">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Common Crochet Blanket Mistakes (Fixes)
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  mistake: 'Not buying enough yarn',
                  fix: 'Use the yardage chart above and add 10–15%. Dye lots matter — buy all skeins at once.',
                },
                {
                  mistake: 'Wrong size for the bed',
                  fix: 'Measure the mattress first. Add 6–12" per side for drape. Don\'t guess.',
                },
                {
                  mistake: 'Ignoring gauge swatch',
                  fix: 'Crochet a 6"×6" swatch, wash it, and measure. Adjust hook size if needed.',
                },
                {
                  mismatch: 'Mixing yarn weights',
                  fix: 'Stick to one weight per blanket. Mixing creates uneven texture and sizing.',
                },
                {
                  mistake: 'Skipping the border',
                  fix: 'A simple single crochet border cleans up edges and adds 2–4" to your dimensions.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <p className="text-sm font-semibold text-[#1F1F1F] mb-1">
                    ❌ {item.mistake}
                  </p>
                  <p className="text-sm text-[#2F4A3A]">
                    ✅ <strong>Fix:</strong> {item.fix}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-[#2F4A3A] to-[#263C30] rounded-2xl p-8 sm:p-10 text-center shadow-lg">
            <h3 className="font-fraunces text-xl sm:text-2xl font-semibold text-white mb-3">
              Ready to start a blanket you can actually finish?
            </h3>
            <p className="text-sm text-[#CCD9D0] mb-6 max-w-md mx-auto">
              7 beginner-friendly patterns, sizing help, straight edges, borders, and printable planners — all in one PDF.
            </p>
            <Link
              to={PRODUCT_URL}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2F4A3A] font-semibold text-sm hover:bg-[#FBF7F1] transition-colors no-underline shadow-sm"
            >
              Discover the Blanket Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* FAQ */}
          <section id="faq">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">5</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                FAQ: Crochet Blanket Sizes & Yarn Yardage
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'How much yarn do I need for a throw blanket?',
                  a: 'A standard throw (50"×60") needs roughly 1,500–2,000 yards of #4 worsted weight yarn. Bulky yarn uses less (1,000–1,400 yards) and DK uses more (1,800–2,200 yards).',
                },
                {
                  q: 'What is the most popular crochet blanket size?',
                  a: 'The throw (50"×60") is the most popular size — it\'s big enough for a sofa blanket but small enough to finish in a reasonable time.',
                },
                {
                  q: 'How many skeins of yarn for a queen-size blanket?',
                  a: 'For a queen (90"×90") in #4 worsted, you\'ll need about 22–28 skeins (100g each). That\'s roughly 4,000–5,000 yards.',
                },
                {
                  q: 'Can I use different yarn weights in the same blanket?',
                  a: 'It\'s not recommended. Different weights create uneven texture and sizing. Stick to one yarn weight per blanket for consistent results.',
                },
                {
                  q: 'How do I know if I have enough yarn before I start?',
                  a: 'Use the yardage chart above, add 10–15% buffer, and make sure all skeins are from the same dye lot. Buy all yarn at once.',
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
