import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2, Eye, BookMarked } from 'lucide-react';

const PRODUCT_URL = '/store/7-day-blanket-collection';

export default function BlogArticlePatterns() {
  return (
    <article className="bg-[#FBF7F1]">

      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[400px] flex items-center">
        <img
          src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788796123/20.jpg"
          alt="How to read a crochet blanket pattern — beginner cheat sheet"
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
            How to Read ANY Crochet Blanket Pattern
          </h1>
          <p className="text-base sm:text-lg text-[#CCD9D0] max-w-2xl mx-auto leading-relaxed mb-2">
            Beginner Cheat Sheet + Stitch Count Fixes
          </p>
          <p className="text-sm text-[#CCD9D0]/70 max-w-xl mx-auto leading-relaxed">
            Learn how to read any crochet blanket pattern with a beginner cheat sheet, stitch multiples, and stitch count fixes to stop frogging.
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
          <span>12 min read</span>
        </div>

        {/* Article Body */}
        <div className="prose-custom space-y-10">

          {/* Intro */}
          <div className="space-y-5">
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              You found a beautiful crochet blanket pattern. You start hooking. Then you realize you have no idea what "repeat *to*" means, or why your stitch count is off by 3… and suddenly you're pulling out rows again.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              Sound familiar? You're not alone. <strong>Reading crochet patterns</strong> is the #1 thing that stops beginners from finishing their first blanket. This guide breaks it all down — abbreviations, parentheses, stitch multiples, and straight edges — so you can read any pattern with confidence and stop frogging.
            </p>
          </div>

          {/* Quick Cheat Sheet */}
          <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-2xl p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <BookMarked className="w-5 h-5 text-[#2F4A3A] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-[#2F4A3A] mb-3">Quick Cheat Sheet: How Blanket Patterns Are Written</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {[
                    { abbr: 'ch', full: 'chain' },
                    { abbr: 'sc', full: 'single crochet' },
                    { abbr: 'hdc', full: 'half double crochet' },
                    { abbr: 'dc', full: 'double crochet' },
                    { abbr: 'sl st', full: 'slip stitch' },
                    { abbr: 'sk', full: 'skip' },
                    { abbr: 'st(s)', full: 'stitch(es)' },
                    { abbr: 'rep', full: 'repeat' },
                    { abbr: 'turn', full: 'turn your work' },
                    { abbr: 'FO', full: 'fasten off' },
                  ].map((item) => (
                    <div key={item.abbr} className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#2F4A3A] bg-white px-2 py-0.5 rounded min-w-[50px]">{item.abbr}</span>
                      <span className="text-[#5B5B5B]">{item.full}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#5B5B5B] mt-3 italic">
                  Repeats: <strong>( )</strong> = do this group together &nbsp;|&nbsp; <strong>[ ]</strong> = do this group together &nbsp;|&nbsp; <strong>* *</strong> = repeat what's between the stars
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE 1 */}
          <img
            src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788796123/21.jpg"
            alt="Printed crochet pattern page with hook and yarn on linen background"
            loading="lazy"
            className="w-full rounded-2xl border border-[#E9E1D7]"
          />

          {/* Pattern Repeats */}
          <section id="pattern-repeats">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center shrink-0">
                <Eye className="w-4 h-4" />
              </span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Crochet Pattern Repeats (Parentheses, Brackets & Asterisks)
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">
              Patterns use symbols to tell you what to repeat. Here's how to read them:
            </p>

            <div className="space-y-4">
              {[
                {
                  symbol: '( )',
                  title: 'Parentheses = Group Together',
                  example: '"(sc, dc) in next st" — do both stitches into the same stitch.',
                  tip: 'Everything inside the parentheses happens in ONE spot.',
                },
                {
                  symbol: '[ ]',
                  title: 'Brackets = Group Together',
                  example: '"[sc, ch 1, sc] in corner space" — all three go into the corner.',
                  tip: 'Works the same as parentheses — just a different style.',
                },
                {
                  symbol: '* *',
                  title: 'Asterisks = Repeat Section',
                  example: '"*sc 2, dc 2; rep from * across" — keep doing sc 2, dc 2 until the end of the row.',
                  tip: 'The pattern will tell you WHERE to start repeating from.',
                },
                {
                  symbol: 'x times',
                  title: 'Numbers After Brackets',
                  example: '"(sc, ch 2, sc) 5 times" — do the group 5 times total.',
                  tip: 'If it says "in next 5 sts" — do one stitch in each of the next 5 stitches.',
                },
              ].map((item) => (
                <div key={item.symbol} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="font-mono text-lg font-bold text-[#2F4A3A] bg-[#E4ECE7] w-12 h-10 flex items-center justify-center rounded-lg shrink-0">
                      {item.symbol}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#1F1F1F]">{item.title}</p>
                      <p className="text-sm text-[#5B5B5B] mt-1">{item.example}</p>
                    </div>
                  </div>
                  <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-lg p-3 ml-15">
                    <p className="text-xs text-[#2F4A3A]"><strong>Tip:</strong> {item.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stitch Multiples */}
          <section id="stitch-multiples">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Stitch Multiples (Blanket Foundations)
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">
              A "multiple" tells you how many chains your foundation row needs. It's the math behind getting the pattern to line up.
            </p>

            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl p-5 sm:p-6 space-y-4">
              <p className="text-sm text-[#1F1F1F] leading-relaxed">
                <strong>Example:</strong> "Chain a multiple of 3 + 2"
              </p>
              <div className="space-y-2">
                {[
                  'Multiple of 3 means your chain count must be divisible by 3: 18, 21, 24, 27, 30…',
                  '+ 2 means add 2 extra chains at the end (for the turning chain or edge stitch).',
                  'So for this pattern: chain 20 (18 + 2), or 23 (21 + 2), or 26 (24 + 2).',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2F4A3A] shrink-0 mt-1" />
                    <p className="text-sm text-[#5B5B5B] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <h3 className="font-fraunces text-lg font-semibold text-[#1F1F1F] mb-3">Common Stitch Multiples for Blankets</h3>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl overflow-hidden">
                <div className="grid grid-cols-3 bg-[#2F4A3A] text-white text-xs font-semibold">
                  <div className="px-4 py-3">Stitch</div>
                  <div className="px-4 py-3 text-center">Multiple</div>
                  <div className="px-4 py-3 text-center">Example Chains</div>
                </div>
                {[
                  { stitch: 'Single Crochet', multiple: 'Any number + 1', example: '50, 60, 70, 80' },
                  { stitch: 'Double Crochet', multiple: 'Any number + 3', example: '53, 56, 59, 62' },
                  { stitch: 'Granny Stitch', multiple: '3 + 3', example: '51, 54, 57, 60' },
                  { stitch: 'Shell Stitch', multiple: '6 + 1', example: '55, 61, 67, 73' },
                  { stitch: 'Moss Stitch', multiple: '2 + 1', example: '51, 53, 55, 57' },
                  { stitch: 'V-Stitch', multiple: '3 + 4', example: '52, 55, 58, 61' },
                ].map((row, i) => (
                  <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-[#FBF7F1]' : 'bg-white'}`}>
                    <div className="px-4 py-3 font-medium text-[#1F1F1F]">{row.stitch}</div>
                    <div className="px-4 py-3 text-center text-[#5B5B5B] font-mono text-xs">{row.multiple}</div>
                    <div className="px-4 py-3 text-center text-[#2F4A3A] font-medium text-xs">{row.example}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-xl p-4 flex items-start gap-3 mt-5">
              <CheckCircle2 className="w-5 h-5 text-[#2F4A3A] shrink-0 mt-0.5" />
              <p className="text-sm text-[#2F4A3A] leading-relaxed">
                <strong>Beginner tip:</strong> If the pattern doesn't list a multiple, chain until it's close to your desired width, then adjust by a few to fit the repeat.
              </p>
            </div>
          </section>

          {/* CTA #1 */}
          <div className="bg-gradient-to-br from-[#2F4A3A] to-[#263C30] rounded-2xl p-6 sm:p-8 text-center shadow-lg">
            <p className="font-fraunces text-lg sm:text-xl font-medium text-white mb-4">
              Prefer a Pattern That's Already Beginner‑Proofed?
            </p>
            <p className="text-sm text-[#CCD9D0] mb-5 max-w-md mx-auto">
              If you want a blanket pattern with clear repeats, sizing guidance, and fewer chances to mess up, grab my premium blanket digital product.
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
            alt="Starting chain and first row close-up showing stitch multiples concept"
            loading="lazy"
            className="w-full rounded-2xl border border-[#E9E1D7]"
          />

          {/* Reading Rows */}
          <section id="reading-rows">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Reading Rows Like a Pro (Without Guessing)
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-base text-[#1F1F1F] leading-relaxed">
                Most blanket patterns follow a row-by-row structure. Here's how to read it:
              </p>

              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl p-5 sm:p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#2F4A3A] text-white flex items-center justify-center shrink-0 text-xs font-bold">1</span>
                  <div>
                    <p className="text-sm font-semibold text-[#1F1F1F]">Foundation Row</p>
                    <p className="text-sm text-[#5B5B5B]">"Ch 62" — This is your starting chain. Count it carefully.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#2F4A3A] text-white flex items-center justify-center shrink-0 text-xs font-bold">2</span>
                  <div>
                    <p className="text-sm font-semibold text-[#1F1F1F]">Row 1</p>
                    <p className="text-sm text-[#5B5B5B]">"Sc in 2nd ch from hook and in each ch across — 61 sc" — Count: you should have 61 stitches.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#2F4A3A] text-white flex items-center justify-center shrink-0 text-xs font-bold">3</span>
                  <div>
                    <p className="text-sm font-semibold text-[#1F1F1F]">Row 2 (Repeat Row)</p>
                    <p className="text-sm text-[#5B5B5B]">"Ch 1, turn. Sc in each st across — 61 sc" — This is the row you'll repeat over and over.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#2F4A3A] text-white flex items-center justify-center shrink-0 text-xs font-bold">4</span>
                  <div>
                    <p className="text-sm font-semibold text-[#1F1F1F]">Repeat Until Desired Length</p>
                    <p className="text-sm text-[#5B5B5B]">Keep repeating Row 2 until the blanket is the length you want.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-xl p-4 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2F4A3A] shrink-0 mt-0.5" />
                <p className="text-sm text-[#2F4A3A] leading-relaxed">
                  <strong>Count every row</strong> — at least for the first 10 rows. If your count changes, fix it before continuing. This prevents wavy edges.
                </p>
              </div>
            </div>
          </section>

          {/* Straight Edges */}
          <section id="straight-edges">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Keep Straight Blanket Edges (No Widening or Narrowing)
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">
              The #1 beginner problem: edges that get wider or narrower over time. Here's why it happens and how to fix it.
            </p>

            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <p className="text-sm font-semibold text-[#1F1F1F] mb-2">❌ Why edges widen:</p>
                <ul className="space-y-1.5 text-sm text-[#5B5B5B] ml-4 list-disc">
                  <li>Accidentally adding a stitch at the start or end of a row</li>
                  <li>Working into the turning chain (which looks like a stitch but isn't)</li>
                  <li>Not counting stitches regularly</li>
                </ul>
              </div>

              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <p className="text-sm font-semibold text-[#1F1F1F] mb-2">❌ Why edges narrow:</p>
                <ul className="space-y-1.5 text-sm text-[#5B5B5B] ml-4 list-disc">
                  <li>Skipping the first or last stitch of the row</li>
                  <li>Working too tightly at the edges</li>
                  <li>Miscounting the turning chain</li>
                </ul>
              </div>

              <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-2xl p-5 sm:p-6">
                <p className="text-sm font-semibold text-[#2F4A3A] mb-3">✅ The Fix: Edge Routine</p>
                <div className="space-y-2">
                  {[
                    'Place a stitch marker in the first and last stitch of every row (at least for the first 20 rows).',
                    'Use the same turning rule every time — either chain and turn, or turn and chain.',
                    'Count your stitches at the end of every row for the first 10 rows.',
                    'If the count changes, pull back to the last correct row and redo it.',
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#2F4A3A] text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                        {i + 1}
                      </span>
                      <p className="text-sm text-[#5B5B5B] leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* IMAGE 3 */}
          <img
            src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788796123/13.jpg"
            alt="Blanket edge close-up with stitch marker highlighting first and last stitch"
            loading="lazy"
            className="w-full rounded-2xl border border-[#E9E1D7]"
          />

          {/* Borders */}
          <section id="borders">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Borders 101 (Flat, Neat & Not Wavy)
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-base text-[#1F1F1F] leading-relaxed">
                A border is the final touch that makes your blanket look polished. But borders can ripple if you don't manage the stitch count.
              </p>

              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <p className="text-sm font-semibold text-[#1F1F1F] mb-2">Why borders ripple:</p>
                <ul className="space-y-1.5 text-sm text-[#5B5B5B] ml-4 list-disc">
                  <li>Too many stitches along the sides — the border bunches up</li>
                  <li>Too few stitches — the border pulls and puckers</li>
                  <li>Not enough corner increases — corners curl inward</li>
                </ul>
              </div>

              <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-2xl p-5 sm:p-6">
                <p className="text-sm font-semibold text-[#2F4A3A] mb-3">✅ Simple Border Rules</p>
                <div className="space-y-2">
                  {[
                    'Along the sides: work about 3 stitches per 4 rows (or 2 sc per 3 rows). Adjust based on your tension.',
                    'Along the top/bottom: work 1 stitch per stitch (match your foundation count).',
                    'In corners: work 3 stitches into each corner stitch to keep it flat.',
                    'Start with a single crochet border — it\'s the most forgiving for beginners.',
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2F4A3A] shrink-0 mt-1" />
                      <p className="text-sm text-[#5B5B5B] leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* IMAGE 4 */}
          <img
            src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788796123/21.jpg"
            alt="Border close-up showing neat crochet blanket corners with single crochet edge"
            loading="lazy"
            className="w-full rounded-2xl border border-[#E9E1D7]"
          />

          {/* CTA #2 */}
          <div className="bg-gradient-to-br from-[#2F4A3A] to-[#263C30] rounded-2xl p-6 sm:p-8 text-center shadow-lg">
            <p className="font-fraunces text-lg sm:text-xl font-medium text-white mb-4">
              Stop Frogging: Use a Clear Blanket Plan
            </p>
            <p className="text-sm text-[#CCD9D0] mb-5 max-w-md mx-auto">
              Most blanket mistakes come from repeats + stitch counts. My premium digital blanket product includes clear steps so you can crochet confidently and finish faster.
            </p>
            <Link
              to={PRODUCT_URL}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2F4A3A] font-semibold text-sm hover:bg-[#FBF7F1] transition-colors no-underline shadow-sm"
            >
              See the Premium Blanket Product <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Troubleshooting */}
          <section id="troubleshooting">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">5</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Troubleshooting: Fixing Stitch Count & Common Errors
              </h2>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 bg-[#2F4A3A] text-white text-xs font-semibold">
                <div className="px-4 py-3">Problem</div>
                <div className="px-4 py-3 text-center">Likely Cause</div>
                <div className="px-4 py-3 text-center">Quick Fix</div>
              </div>
              {[
                {
                  problem: 'Stitch count keeps increasing',
                  cause: 'Extra stitch at edges',
                  fix: 'Mark first/last stitch, count each row',
                },
                {
                  problem: 'Stitch count keeps decreasing',
                  cause: 'Skipping edge stitches',
                  fix: 'Work into every stitch, including the last one',
                },
                {
                  problem: 'Edges are wavy',
                  cause: 'Uneven tension or missed stitches',
                  fix: 'Use stitch markers, keep consistent tension',
                },
                {
                  problem: 'Blanket is too narrow',
                  cause: 'Starting chain too short',
                  fix: 'Recalculate using the stitch multiple chart',
                },
                {
                  problem: 'Blanket is too wide',
                  cause: 'Starting chain too long',
                  fix: 'Reduce chain by one multiple, recheck width',
                },
                {
                  problem: 'Pattern doesn\'t line up',
                  cause: 'Wrong multiple for the stitch',
                  fix: 'Check stitch multiple chart, adjust starting chain',
                },
                {
                  problem: 'Border is rippling',
                  cause: 'Too many stitches on sides',
                  fix: 'Reduce side border stitches, add corner increases',
                },
                {
                  problem: 'Corners curl inward',
                  cause: 'Not enough corner stitches',
                  fix: 'Work 3 stitches into each corner stitch',
                },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-[#FBF7F1]' : 'bg-white'}`}>
                  <div className="px-4 py-3 font-medium text-[#1F1F1F] text-xs">{row.problem}</div>
                  <div className="px-4 py-3 text-center text-[#5B5B5B] text-xs">{row.cause}</div>
                  <div className="px-4 py-3 text-center text-[#2F4A3A] font-medium text-xs">{row.fix}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Summary */}
          <section id="summary">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">6</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Summary: Your Pattern-Reading Cheat Sheet
              </h2>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl p-5 sm:p-6 space-y-3">
              {[
                'Learn the abbreviations — sc, hdc, dc, ch, sl st, sk, rep.',
                'Understand repeats — ( ) and [ ] = group, * * = repeat section.',
                'Know your multiples — chain count must fit the stitch pattern.',
                'Count your stitches — at least for the first 10 rows.',
                'Use stitch markers — mark first and last stitch of every row.',
                'Start with a simple border — single crochet is the most forgiving.',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2F4A3A] shrink-0" />
                  <span className="text-sm text-[#1F1F1F]">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-base text-[#1F1F1F] leading-relaxed mt-5">
              Now that you know how to read a pattern, the next step is picking a finishable blanket project. The <strong>7-Day Crochet Blanket Collection</strong> gives you 7 beginner-friendly patterns with clear repeats, sizing help, and stitch counts — so you can practice what you just learned and actually finish a blanket.
            </p>
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
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">7</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                FAQ: Reading Crochet Blanket Patterns
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'What does "multiple of X + Y" mean in crochet?',
                  a: '"Multiple of X" means your starting chain must be divisible by X. "+ Y" means add Y extra chains at the end (usually for the turning chain or edge). For example, "multiple of 3 + 2" means chain 20 (18 + 2), 23 (21 + 2), etc.',
                },
                {
                  q: 'How do I know how many chains to start with?',
                  a: 'Check the stitch multiple for your pattern (see the chart above). Chain until you reach your desired width, then adjust by a few to fit the multiple. Always add the "+ Y" at the end.',
                },
                {
                  q: 'Why does my stitch count change every row?',
                  a: 'Usually it\'s an extra or missing stitch at the edges. Place a stitch marker in the first and last stitch of each row and count at the end of every row until you\'re consistent.',
                },
                {
                  q: 'What does "turn" mean in a crochet pattern?',
                  a: '"Turn" means flip your work so you can crochet back in the other direction. Usually you chain 1 (or 2-3 for taller stitches) before turning.',
                },
                {
                  q: 'How do I fix wavy edges on my blanket?',
                  a: 'Wavy edges usually mean you\'re adding or skipping stitches at the edges. Use stitch markers, count every row, and use the same turning rule consistently. See the "Straight Edges" section above.',
                },
                {
                  q: 'What\'s the difference between ( ) and [ ] in patterns?',
                  a: 'They mean the same thing — group the stitches together. Some designers prefer parentheses, others prefer brackets. Both work the same way.',
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
