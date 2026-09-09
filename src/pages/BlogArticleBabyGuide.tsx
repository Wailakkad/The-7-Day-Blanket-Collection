import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, Baby, Scissors, Ruler, Heart } from 'lucide-react';

const SECTION_IMAGES = {
  hero: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788952216/Featured_Image_hero_banner_image.jpg',
  supplies: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788952217/Image_1_After_Intro_Quick_Answer_supplies_flat_lay.jpg',
  sizeChart: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788952219/Image_2_After_Size_Chart_measuring_the_blanket.jpg',
  yarn: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788952213/Image_3_After_Yarn_Section_fiber_comparison.jpg',
  buildMethod: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788952211/Image_4_After_Build_Method_foundation_chain_close-up.jpg',
  noCurl: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788952211/Image_5_After_No-Curl_Section_the_perfect_flat_edge.jpg',
  checklist: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788953132/mage_16_Finishing_Checklist_wrapped_gift.jpg',
};

const BORDER_IMAGES = [
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788953058/Images_6_Border_Photos.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788953059/Images_7_Border_Photos.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788953059/Images_8_Border_Photos.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788953056/Images_9_Border_Photos.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788953034/Images_10_Border_Photos.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788953034/Images_11_Border_Photos.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788953033/Images_12_Border_Photos.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788953034/Images_13_Border_Photos.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788953038/Images_14_Border_Photos.jpg',
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788953036/Images_15_Border_Photos.jpg',
];

const BORDERS = [
  {
    name: 'Classic Single Crochet Border',
    desc: 'A clean, simple frame that works with every blanket style. One round of single crochet around the entire blanket creates a polished, finished look.',
    difficulty: 'Beginner',
    pairs: 'Any body stitch — moss, SC, HDC, granny',
    corner: 'Work 3 sc in each corner stitch for a crisp 90° corner.',
  },
  {
    name: 'Crab Stitch / Reverse Single Crochet',
    desc: 'A twisted rope-look border that looks more advanced than it is. You work single crochet in the opposite direction (left to right for right-handers).',
    difficulty: 'Easy',
    pairs: 'Single crochet, half double crochet, moss stitch',
    corner: 'Work 3 crab stitches in each corner, then join with a slip stitch.',
  },
  {
    name: 'V-Stitch Border',
    desc: 'Modern and open — V-stitches create a lacy, airy edge that softens any blanket. Great for spring or summer baby gifts.',
    difficulty: 'Easy',
    pairs: 'Moss stitch, lemon peel, solid stitch bodies',
    corner: 'Work (dc, ch 2, dc) in each corner space.',
  },
  {
    name: 'Shell / Scallop Border',
    desc: 'Classic scalloped edges that add a sweet, vintage touch. Each shell fans out to create a decorative wave along the edge.',
    difficulty: 'Easy',
    pairs: 'Single crochet, half double crochet, granny stripe',
    corner: 'Work a small shell (3 dc) in the corner, then continue the pattern.',
  },
  {
    name: 'Picot Border',
    desc: 'Tiny decorative bumps that create a delicate, heirloom-quality edge. Perfect for special occasion blankets.',
    difficulty: 'Easy',
    pairs: 'Any solid stitch body — especially elegant on SC or HDC',
    corner: 'Skip the picot at the corner; work 3 sc instead for a clean turn.',
  },
  {
    name: 'Bobble (Berry) Border',
    desc: 'Textured bobbles pop out along the edge, creating a playful, tactile border. Babies love touching the raised bumps.',
    difficulty: 'Intermediate',
    pairs: 'Smooth body stitches — SC, HDC, moss stitch',
    corner: 'Place 2 bobbles close together at each corner for a rounded look.',
  },
  {
    name: 'Ribbed Front-Post Border',
    desc: 'Front-post stitches create a raised, ribbed texture that frames the blanket like a cozy picture frame.',
    difficulty: 'Intermediate',
    pairs: 'Flat body stitches — SC, HDC, single crochet ribbing',
    corner: 'Work (sc, ch 2, sc) in each corner, then continue the post pattern.',
  },
  {
    name: 'Pom-Pom Border',
    desc: 'Playful yarn pom-poms attached at regular intervals. Adds a fun, whimsical touch that babies love.',
    difficulty: 'Easy',
    pairs: 'Any body stitch — especially cute on solid colors',
    corner: 'Place a pom-pom at each corner for a balanced look.',
    safety: 'Safety note: Attach pom-poms very securely with multiple passes. Supervise babies under 12 months.',
  },
  {
    name: 'Ruffle Border',
    desc: 'Multiple stitches into each edge stitch create a soft, frilly ruffle. Vintage-inspired and perfect for gifts.',
    difficulty: 'Easy',
    pairs: 'Smooth body stitches — SC, HDC, DC',
    corner: 'Work extra stitches (5-6 dc) in the corner to keep the ruffle flat.',
  },
  {
    name: 'Eyelet + Ribbon Border',
    desc: 'An eyelet row creates holes for weaving a soft satin ribbon through. The ultimate gift-finish touch.',
    difficulty: 'Intermediate',
    pairs: 'Any solid body stitch — especially beautiful on cream or white',
    corner: 'Work (dc, ch 2, dc) in corners. Weave ribbon through eyelets after finishing.',
  },
];

export default function BlogArticleBabyGuide() {
  return (
    <article className="bg-[#FBF7F1]">

      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[400px] flex items-center">
        <img
          src={SECTION_IMAGES.hero}
          alt="Baby blanket crochet complete guide — size chart, borders, and no-curl edges"
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
            Baby Blanket Crochet:<br className="hidden sm:block" /> The Complete Start-to-Finish Guide
          </h1>
          <p className="text-base sm:text-lg text-[#CCD9D0] max-w-2xl mx-auto leading-relaxed mb-2">
            Size Chart + Border Ideas + No-Curl Edges
          </p>
          <p className="text-sm text-[#CCD9D0]/70 max-w-xl mx-auto leading-relaxed">
            Make a gift-ready baby blanket: size chart (preemie to crib), beginner build steps, 10 border ideas, and no-curl edge tips that actually work.
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
          <span>20 min read</span>
        </div>

        {/* Article Body */}
        <div className="prose-custom space-y-10">

          {/* Intro */}
          <div className="space-y-5">
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              You're making a baby blanket — maybe for your own little one, maybe as a gift for a shower this weekend. You want it to look <strong>perfect, professional, and gift-ready</strong>. But somewhere between picking the yarn and figuring out the size, you're stuck.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              This guide walks you through <strong>everything</strong>: the right size (with a chart), beginner-friendly build steps, 10 beautiful border ideas, and the no-curl edge trick that actually works. By the end, you'll have a blanket you're proud to wrap with a ribbon.
            </p>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-2xl p-5 sm:p-6">
            <h2 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">Quick Answer: Baby Blanket Crochet at a Glance</h2>
            <div className="space-y-2.5">
              {[
                { label: 'Classic gift size', value: '30" × 30" (76 × 76 cm)' },
                { label: 'Stroller size', value: '30" × 36" (76 × 91 cm)' },
                { label: 'Crib size', value: '36" × 52" (91 × 132 cm)' },
                { label: 'Fastest border', value: 'Classic single crochet — one round, done' },
                { label: 'Safest yarn', value: 'Machine-washable acrylic or cotton-acrylic blend, #3 DK or #4 worsted' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2F4A3A] shrink-0 mt-1" />
                  <p className="text-sm text-[#5B5B5B]">
                    <span className="font-semibold text-[#1F1F1F]">{item.label}:</span> {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE 1 */}
          <img
            src={SECTION_IMAGES.supplies}
            alt="Flat lay of baby blanket crochet supplies — yarn, hook, scissors, and tape measure"
            loading="lazy"
            className="w-full rounded-2xl border border-[#E9E1D7]"
          />

          {/* Size Chart */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              Baby Blanket Sizes (Preemie to Crib) — Size Chart
            </h2>
            <p className="text-sm text-[#5B5B5B] mb-5">
              Pick your size by purpose. A border adds ~1–2 inches per side, so plan your body size slightly smaller than the final target.
            </p>

            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-4 bg-[#2F4A3A] text-white text-xs font-semibold">
                <div className="px-4 py-3">Blanket Type</div>
                <div className="px-4 py-3 text-center">Size (inches)</div>
                <div className="px-4 py-3 text-center">Size (cm)</div>
                <div className="px-4 py-3 text-center">Best For</div>
              </div>
              {[
                { type: 'Lovey', inches: '12" × 12"', cm: '30 × 30', best: 'Security blanket, sensory toy' },
                { type: 'Preemie', inches: '18" × 20"', cm: '46 × 51', best: 'NICU, premature babies' },
                { type: 'Newborn / Receiving', inches: '30" × 30"', cm: '76 × 76', best: 'Hospital gift, swaddle' },
                { type: 'Stroller', inches: '30" × 36"', cm: '76 × 91', best: 'Car seat, stroller, on-the-go' },
                { type: 'Crib', inches: '36" × 52"', cm: '91 × 132', best: 'Crib, toddler bed, long-term use' },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-4 text-sm ${i % 2 === 0 ? 'bg-[#FBF7F1]' : 'bg-white'}`}>
                  <div className="px-4 py-3 font-medium text-[#1F1F1F]">{row.type}</div>
                  <div className="px-4 py-3 text-center text-[#5B5B5B]">{row.inches}</div>
                  <div className="px-4 py-3 text-center text-[#5B5B5B]">{row.cm}</div>
                  <div className="px-4 py-3 text-center text-[#2F4A3A] font-medium text-xs">{row.best}</div>
                </div>
              ))}
            </div>
          </section>

          {/* IMAGE 2 */}
          <img
            src={SECTION_IMAGES.sizeChart}
            alt="Measuring a baby blanket with tape measure to check size"
            loading="lazy"
            className="w-full rounded-2xl border border-[#E9E1D7]"
          />

          {/* Yarn Section */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              Choosing Yarn for Baby Skin + Washability
            </h2>

            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Acrylic (Most Popular)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Machine washable, hypoallergenic, affordable, huge color range. Choose "soft" or "baby" lines — they're specifically designed for baby skin.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Cotton</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Breathable, cool, great for summer blankets. Can feel stiff at first but softens with washing. Machine washable.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Bamboo Blend</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Silky soft, naturally hypoallergenic, temperature-regulating. More expensive but incredibly luxurious. May pill over time.</p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <h3 className="font-fraunces text-lg font-semibold text-[#1F1F1F]">Best Yarn Weights for Baby Blankets</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-[#E4ECE7] text-[#2F4A3A] text-xs font-semibold">#3 DK — lighter, drapier</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#E4ECE7] text-[#2F4A3A] text-xs font-semibold">#4 Worsted — warmer, faster</span>
              </div>
            </div>

            <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-xl p-4 flex items-start gap-3 mt-5">
              <CheckCircle2 className="w-5 h-5 text-[#2F4A3A] shrink-0 mt-0.5" />
              <p className="text-sm text-[#2F4A3A] leading-relaxed">
                <strong>Baby safety note:</strong> Avoid long fringe, loose loops, or large bobbles that tiny fingers could pull off. Always weave in ends securely — triple-check before gifting.
              </p>
            </div>
          </section>

          {/* IMAGE 3 */}
          <img
            src={SECTION_IMAGES.yarn}
            alt="Comparison of cotton, acrylic, and bamboo-blend yarn fibers for baby blankets"
            loading="lazy"
            className="w-full rounded-2xl border border-[#E9E1D7]"
          />

          {/* Beginner Build Method */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              The Beginner Build Method (Stitch → Size → First Stitch)
            </h2>

            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Pick your size from the chart',
                  desc: 'Choose based on purpose: newborn gift (30"×30"), stroller (30"×36"), or crib (36"×52").',
                },
                {
                  step: '2',
                  title: 'Pick a beginner-safe stitch',
                  desc: 'Moss stitch, Suzette stitch, or half double crochet are all great choices. Browse 25 baby blanket stitches rated for warmth and stretch.',
                  link: '/blog/baby-blanket-crochet-stitch-patterns',
                  linkText: 'Browse 25 baby blanket stitches →',
                },
                {
                  step: '3',
                  title: 'Crochet a small swatch (4" × 4")',
                  desc: 'Use your chosen stitch and hook. Measure how many stitches fit in 4 inches. This tells you your gauge.',
                },
                {
                  step: '4',
                  title: 'Chain until it measures your target width',
                  desc: 'Example: for a 30" blanket with 4 stitches per inch, chain approximately 120 (plus any stitch multiple remainder).',
                },
                {
                  step: '5',
                  title: 'Work rows until ~2" shorter than target length',
                  desc: 'Leave room for the border. For a 30" blanket, stop at about 28".',
                },
                {
                  step: '6',
                  title: 'Add your border',
                  desc: 'Pick one from the 10 border ideas below. Start with single crochet if you\'re unsure.',
                },
                {
                  step: '7',
                  title: 'Finish: weave ends, block, and gift',
                  desc: 'Weave in all ends securely. Block to shape. Wash per yarn label. Add a gift tag.',
                },
              ].map((item) => (
                <div key={item.step} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5 flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#2F4A3A] text-white flex items-center justify-center shrink-0 text-xs font-bold">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#1F1F1F] mb-1">{item.title}</p>
                    <p className="text-sm text-[#5B5B5B] leading-relaxed">{item.desc}</p>
                    {item.link && (
                      <Link to={item.link} className="inline-flex items-center gap-1 text-sm text-[#2F4A3A] font-medium mt-2 no-underline hover:text-[#263C30]">
                        {item.linkText}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* IMAGE 4 */}
          <img
            src={SECTION_IMAGES.buildMethod}
            alt="Close-up of foundation chain and first rows of a baby blanket"
            loading="lazy"
            className="w-full rounded-2xl border border-[#E9E1D7]"
          />

          {/* No-Curl Edges */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              No-Curl Edges + Tension Tips
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-fraunces text-lg font-semibold text-[#1F1F1F] mb-3">Why Blanket Edges Curl</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">
                  Curling happens when the foundation chain is tighter than the body rows, or when your tension changes at the edges. It's the most common beginner problem — and the easiest to fix.
                </p>
              </div>

              <div>
                <h3 className="font-fraunces text-lg font-semibold text-[#1F1F1F] mb-3">No-Curl Fixes</h3>
                <div className="space-y-2">
                  {[
                    'Use a larger hook for the foundation chain (go up 1–2 hook sizes), then switch to the regular hook for the body.',
                    'Don\'t chain tightly — keep your chain relaxed and loose.',
                    'Start and end with a row of single crochet before adding the border.',
                    'Block the finished blanket — pin it flat and steam or mist with water.',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2F4A3A] shrink-0 mt-1" />
                      <p className="text-sm text-[#5B5B5B] leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-fraunces text-lg font-semibold text-[#1F1F1F] mb-3">Tension Tips for Even Edges</h3>
                <div className="space-y-2">
                  {[
                    'Keep your yarn wrap consistent — don\'t squeeze the hook or let the yarn slide too loosely.',
                    'Count your stitches every few rows, especially the first and last stitch.',
                    'Relax your grip — tight tension causes curling and uneven edges.',
                    'Place a stitch marker in the first and last stitch of each row for the first 10 rows.',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2F4A3A] shrink-0 mt-1" />
                      <p className="text-sm text-[#5B5B5B] leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* IMAGE 5 */}
          <img
            src={SECTION_IMAGES.noCurl}
            alt="Perfectly flat, straight edge on a crochet baby blanket — no curling"
            loading="lazy"
            className="w-full rounded-2xl border border-[#E9E1D7]"
          />

          {/* 10 Border Ideas */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-2">
              10 Baby Blanket Border Ideas (With Photos)
            </h2>
            <p className="text-sm text-[#5B5B5B] mb-8">Easiest first. Each border works on any blanket — pick the look you love.</p>

            <div className="space-y-10">
              {BORDERS.map((border, i) => (
                <div key={i}>
                  <h3 className="font-fraunces text-xl font-semibold text-[#1F1F1F] mb-3">
                    {i + 1}. {border.name}
                  </h3>
                  <img
                    src={BORDER_IMAGES[i]}
                    alt={`${border.name.toLowerCase()} on a cream crochet baby blanket`}
                    loading="lazy"
                    className="w-full rounded-2xl border border-[#E9E1D7] mb-4"
                  />
                  <p className="text-sm text-[#5B5B5B] leading-relaxed mb-3">{border.desc}</p>
                  <div className="space-y-1.5 text-sm">
                    <p><span className="font-semibold text-[#1F1F1F]">Difficulty:</span> <span className="text-[#2F4A3A]">{border.difficulty}</span></p>
                    <p><span className="font-semibold text-[#1F1F1F]">Pairs beautifully with:</span> <span className="text-[#5B5B5B]">{border.pairs}</span></p>
                    <p><span className="font-semibold text-[#1F1F1F]">Corner tip:</span> <span className="text-[#5B5B5B]">{border.corner}</span></p>
                    {border.safety && (
                      <p className="text-[#2F4A3A] font-medium">⚠️ {border.safety}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Gift-Ready Finishing Checklist */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              Gift-Ready Finishing Checklist
            </h2>

            <img
              src={SECTION_IMAGES.checklist}
              alt="Finished baby blanket wrapped with gift tag and ribbon"
              loading="lazy"
              className="w-full rounded-2xl border border-[#E9E1D7] mb-5"
            />

            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl p-5 sm:p-6 space-y-3">
              {[
                'Weave in all ends securely — triple-check, especially on the last row.',
                'Block to shape — pin flat and steam or mist with water.',
                'Wash + dry per yarn label before gifting — removes any residue and softens the fabric.',
                'Remove lint or pills with a fabric shaver or lint roller.',
                'Add a small gift tag with care instructions (fiber content, wash temp, dry method).',
                'Optional: tie with a soft satin ribbon for a polished gift presentation.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded border-2 border-[#2F4A3A] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-[#2F4A3A]" />
                  </span>
                  <p className="text-sm text-[#5B5B5B] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-2xl p-5 sm:p-6">
            <p className="text-sm font-semibold text-[#2F4A3A] mb-3">Related Guides:</p>
            <div className="space-y-2">
              <Link to="/blog/baby-blanket-crochet-stitch-patterns" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → 25 Baby Blanket Crochet Stitch Patterns (Warmth + Stretch Ratings)
              </Link>
              <Link to="/blog/crochet-blanket-sizes-yarn-yardage-chart" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Blanket Sizes + Yarn Yardage Calculator
              </Link>
              <Link to="/blog/crochet-blanket-stitches-guide" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Blanket Stitches: A Handy Guide
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              FAQ: Baby Blanket Crochet
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What size should a crochet baby blanket be?',
                  a: 'The most versatile size is 30" × 30" (newborn/receiving). For crib use, go 36" × 52". For stroller or car seat, 30" × 36" works well. A border adds ~1–2 inches per side.',
                },
                {
                  q: 'How much yarn do I need for a baby blanket?',
                  a: 'For a 30"×30" blanket in #4 worsted, you\'ll need about 800–1,200 yards (roughly 4–6 skeins). Larger sizes need more. Use our yarn yardage chart for exact estimates by weight.',
                  link: '/blog/crochet-blanket-sizes-yarn-yardage-chart',
                  linkText: 'See the yarn yardage chart →',
                },
                {
                  q: 'What\'s the easiest baby blanket border for beginners?',
                  a: 'Classic single crochet — one round around the entire blanket. It\'s fast, clean, and works with every stitch pattern. Crab stitch is the next step up if you want a rope-look finish.',
                },
                {
                  q: 'How do I stop crochet blanket edges from curling?',
                  a: 'Use a larger hook for the foundation chain, keep your chain loose, start/end with a row of single crochet, and block the finished blanket. See the "No-Curl Edges" section above for detailed steps.',
                },
                {
                  q: 'What yarn is best for a baby blanket?',
                  a: 'Machine-washable acrylic is the most popular — it\'s soft, hypoallergenic, and easy to care for. Cotton is great for summer blankets. Bamboo blends are luxuriously soft but pricier. Always choose #3 DK or #4 worsted weight.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <p className="text-sm font-semibold text-[#1F1F1F] mb-2">{item.q}</p>
                  <p className="text-sm text-[#5B5B5B] leading-relaxed">{item.a}</p>
                  {item.link && (
                    <Link to={item.link} className="inline-flex items-center gap-1 text-sm text-[#2F4A3A] font-medium mt-2 no-underline hover:text-[#263C30]">
                      {item.linkText}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}
