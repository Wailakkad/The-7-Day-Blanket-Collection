import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, X, ZoomIn } from 'lucide-react';

/* ─── Main Component ─── */

export default function BlogArticleCrochetCatEarBeanie() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt });
  const closeLightbox = () => setLightbox(null);

  const images = {
    hero: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789371511/HERO_IMAGE.jpg',
    intro: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789371510/INTRO_IMAGE.jpg',
    earSoft: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789371511/Cat_Ear_Shaping_Foflt_-_Soft_Ears.jpg',
    earPointy: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789371514/Cat_Ear_Shaping_Pointy_Ears.jpg',
    earMini: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789371508/Cat_Ear_Shaping_Mini_Ears.png',
  };

  return (
    <article className="bg-[#FBF7F1]">

      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[400px] flex items-center">
        <img
          src={images.hero}
          alt="Crochet cat ear beanie finished look"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center w-full">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-xs font-medium text-[#CCD9D0] hover:text-white mb-6 no-underline transition-colors">← Back to Blog</Link>
          <h1 className="font-fraunces text-3xl sm:text-4xl md:text-5xl leading-[1.15] font-semibold text-white tracking-tight mb-5">
            Crochet Cat Ear Beanie (Beginner-Proof):<br className="hidden sm:block" /> No-Math Sizing for Any Head + Cute Ear Shaping
          </h1>
          <p className="text-base sm:text-lg text-[#CCD9D0] max-w-2xl mx-auto leading-relaxed">
            Beginner-proof sizing + 3 ear styles for the cutest cat ear hat crochet pattern
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
          <span>16 min read</span>
        </div>

        <div className="prose-custom space-y-10">

          {/* Intro */}
          <div className="space-y-5">
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              The <strong>crochet cat ear beanie</strong> is everywhere right now — and for good reason. It's cute, it's fast, and it works for literally anyone from babies to adults. The best part? You don't need complicated math or advanced shaping to make one that fits perfectly.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              This <strong>cat ear hat crochet pattern</strong> uses a no-math sizing method that works for any head. Measure, add ease, crochet a rectangle, seam it, and shape the ears. That's it. I'll walk you through three ear styles — soft, pointy, and mini — so you can pick the look you love.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              Whether this is your first <strong>crochet beanie pattern free</strong> project or your fiftieth, this tutorial has you covered. Save it for later — you'll want to come back when you need a <strong>crochet cat hat</strong> gift idea.
            </p>
          </div>

          {/* Intro Image */}
          <button type="button" onClick={() => openLightbox(images.intro, 'Crochet cat ear beanie finished look')} className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group">
            <img
              src={images.intro}
              alt="Crochet cat ear beanie finished look"
              loading="lazy"
              className="w-full rounded-2xl border border-[#E9E1D7]"
            />
            <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
            </span>
          </button>

          {/* CTA Block */}
          <div className="bg-gradient-to-br from-[#2F4A3A] to-[#263C30] rounded-2xl p-6 sm:p-8 text-center shadow-lg">
            <p className="font-fraunces text-lg sm:text-xl font-medium text-white mb-4">Ready to crochet your cat ear beanie?</p>
            <Link to="/store/7-day-blanket-collection" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2F4A3A] font-semibold text-sm hover:bg-[#FBF7F1] transition-colors no-underline shadow-sm">
              Explore Blanket Patterns Too <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* No-Math Sizing */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">No-Math Sizing (Fits Any Head)</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Size Chart (Baby to Adult)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed"><strong>Baby (0-12mo):</strong> 16-18" head circumference. <strong>Toddler (1-3yr):</strong> 18-20". <strong>Kid (4-10yr):</strong> 20-22". <strong>Teen/Adult S:</strong> 21-23". <strong>Adult L:</strong> 23-24". Measure around the head above the ears.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">The "Measure + Add Ease" Rule</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Take the head circumference and <strong>subtract 1-2 inches</strong> for a snug fit (the crochet stretch fills the gap). For a slouchy fit, use the exact measurement. The beanie should stretch slightly to fit.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">How to Test Fit Before Finishing</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">After seaming the rectangle into a tube, try it on the intended wearer (or measure against a hat that fits). The tube should stretch to fit snugly without being tight. Adjust seam placement if needed before gathering the top.</p>
              </div>
            </div>
          </section>

          {/* Materials */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Materials + Yarn That Holds the Ears</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Yarn: Structure vs Drape</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">For ears that stand up, use a <strong>sturdy yarn with memory</strong> — acrylic or wool blends work best. Super soft drapey yarns make ears that flop. If you want crisp ears, go with worsted weight (#4) acrylic.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Hook Size Notes</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Use the hook size on your yarn label, or go down half a size for a tighter fabric. A tighter fabric = sturdier ears that hold their shape better.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Notions</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Stitch markers, tapestry needle, scissors. Optional: thin wire or pipe cleaners for extra ear stiffness, fabric for lining.</p>
              </div>
            </div>
          </section>

          {/* Pattern Steps */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Crochet Cat Ear Beanie Pattern (Beginner Steps)</h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">The rectangle-to-seam method is the easiest <strong>cat ear hat crochet pattern</strong>. No increasing, no decreases, no rounds — just a flat rectangle that becomes a hat.</p>

            <button type="button" onClick={() => openLightbox('https://res.cloudinary.com/dhkyla1rv/image/upload/v1789371511/Crochet_Cat_Ear_Beanie_Pattern_IMAGE_GRID.png', 'Crochet cat ear beanie pattern step by step')} className="block w-full cursor-pointer bg-transparent border-0 p-0 mb-5 relative group">
              <img
                src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1789371511/Crochet_Cat_Ear_Beanie_Pattern_IMAGE_GRID.png"
                alt="Crochet cat ear beanie pattern step by step"
                loading="lazy"
                className="w-full rounded-2xl border border-[#E9E1D7]"
              />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
              </span>
            </button>

            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Step 1: The Brim</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Chain to match the head circumference measurement (not the flat rectangle width — the stretch fills the gap). Work 3-4 rows of BLO HDC for a stretchy ribbed brim.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Step 2: The Body</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Switch to SC or HDC and work even (no increases) until the rectangle height matches from brim to the top of the head. For most adults, that's about 7-8" from brim to crown.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Step 3: The Seam</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Fold the rectangle in half (brim at bottom). Seam the side with whip stitch or mattress stitch. Leave the top open for now — this is where the ears will form.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Step 4: Shaping + Finishing</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Gather the top closed with a tapestry needle and yarn. The corners of the rectangle naturally form the ear points. Pinch and shape each ear, then tack them in place with a few stitches.</p>
              </div>
            </div>
          </section>

          {/* Ear Shaping */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Cat Ear Shaping (3 Styles)</h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">Three ways to shape the ears — pick the style that matches your vibe.</p>

            {/* Ear Style Images */}
            <div className="space-y-6 mb-6">
              <div>
                <button type="button" onClick={() => openLightbox(images.earSoft, 'Soft Ears - round and cute cat ear shaping')} className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group mb-3">
                  <img
                    src={images.earSoft}
                    alt="Soft Ears - round and cute cat ear shaping"
                    loading="lazy"
                    className="w-full rounded-2xl border border-[#E9E1D7]"
                  />
                  <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                  </span>
                </button>
              </div>
              <div>
                <button type="button" onClick={() => openLightbox(images.earPointy, 'Pointy Ears - classic cat ear shaping')} className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group mb-3">
                  <img
                    src={images.earPointy}
                    alt="Pointy Ears - classic cat ear shaping"
                    loading="lazy"
                    className="w-full rounded-2xl border border-[#E9E1D7]"
                  />
                  <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                  </span>
                </button>
              </div>
              <div>
                <button type="button" onClick={() => openLightbox(images.earMini, 'Mini Ears - subtle and sweet cat ear shaping')} className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group mb-3">
                  <img
                    src={images.earMini}
                    alt="Mini Ears - subtle and sweet cat ear shaping"
                    loading="lazy"
                    className="w-full rounded-2xl border border-[#E9E1D7]"
                  />
                  <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                  </span>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Soft Ears (Round + Cute)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">After gathering the top, pinch each corner into a gentle curve. Tack with 3-4 stitches along the curve. The ears fold naturally and look adorable without standing up.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Pointy Ears (Classic Cat)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Pinch each corner into a sharp point. Tack the base of the point to hold the shape. For extra stiffness, insert a small piece of pipe cleaner or wire inside before closing.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Mini Ears (Subtle + Sweet)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Instead of using the full corner, gather only the center top. This leaves smaller nub ears that are subtle and modern — great for adults who want a hint of cat without going full costume.</p>
              </div>
            </div>
          </section>

          {/* Fit Fixes */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">5</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Fit Fixes (Too Tight / Too Tall / Ears Uneven)</h2>
            </div>
            <div className="space-y-4">
              {[
                { problem: 'Too Tight', fix: 'The rectangle width was too small. Frog the seam and re-seam with a looser stitch, or add 2-3 inches to the width and re-crochet.' },
                { problem: 'Too Tall / Slouchy', fix: 'Reduce the rectangle height by 1-2 inches. The top should sit at the crown of the head, not flop behind it.' },
                { problem: 'Ears Uneven', fix: 'Mark both ear positions with stitch markers before gathering. Measure from the center seam to each ear point — they should be equal distance.' },
                { problem: 'Ears Flop Over', fix: 'Use a sturdier yarn (acrylic over soft wool) and go down a hook size. For extra structure, sew a small triangle of felt inside each ear.' },
                { problem: 'Brim Too Loose', fix: 'Go down one hook size for the brim only, or add elastic thread through the brim stitches for a snugger fit.' },
              ].map((item, i) => (
                <div key={i} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <p className="text-sm font-semibold text-[#1F1F1F] mb-1">{item.problem}</p>
                  <p className="text-sm text-[#5B5B5B] leading-relaxed">{item.fix}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Styling Ideas */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">6</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">Styling Ideas (Colors + Cute Variations)</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <p className="text-sm text-[#5B5B5B] leading-relaxed"><strong>Classic Black Cat:</strong> Black yarn + pointy ears = instant Halloween or everyday cat vibes. Add a pink nose embroidery for extra cuteness.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <p className="text-sm text-[#5B5B5B] leading-relaxed"><strong>Pastel Kitten:</strong> Use pastel pink, lavender, or mint for a soft, aesthetic look. Pair with soft ears for maximum cozy energy.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <p className="text-sm text-[#5B5B5B] leading-relaxed"><strong>Colorblock Cat:</strong> Use one color for the body and a contrasting color for the ears. The contrast makes the ears pop and looks modern.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <p className="text-sm text-[#5B5B5B] leading-relaxed"><strong>Striped Cat:</strong> Add horizontal stripes in 2-3 colors. The stripes wrap around the ears too for a playful, cohesive look.</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">FAQ: Crochet Cat Ear Beanie</h2>
            <div className="space-y-4">
              {[
                { q: 'What is the easiest crochet cat ear beanie method?', a: 'The rectangle-to-seam method. Crochet a flat rectangle, seam the side, gather the top. The corners become the ears naturally — no shaping required until the very end.' },
                { q: 'How do I make the ears stand up?', a: 'Use a sturdy acrylic yarn and go down a hook size for a tighter fabric. For extra stiffness, insert pipe cleaners or thin wire inside the ears before closing.' },
                { q: 'What yarn is best for a cat eared beanie?', a: 'Worst weight (#4) acrylic is ideal — it holds its shape, is machine washable, and comes in every color. Wool blends work too but are less machine-friendly.' },
                { q: 'Can I make this as a gift?', a: 'Absolutely! This is one of the best gift beanies because the sizing is forgiving and the ears are universally cute. Make the brim slightly smaller for a snug, stretchy fit.' },
                { q: 'How long does it take to make?', a: 'About 2-3 hours for an adult size. Kid sizes are faster — under 2 hours. The rectangle method is one of the fastest beanie constructions.' },
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
              <Link to="/blog/crochet-hats-free-pattern" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Hats Free Pattern: 25 Free Beanie Crochet Pattern Ideas
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
