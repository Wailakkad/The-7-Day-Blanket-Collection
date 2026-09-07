import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  ArrowRight,
  Download,
  BookOpen,
  Ruler,
  Palette,
  Calendar,
  Layers,
  ChevronDown,
  Check,
  Zap,
  Heart,
  FileText,
  Coffee,
  Printer,
  Star,
  Truck,
  RotateCcw,
  ShieldCheck,
  ShoppingCart,
  Clock,
  Eye,
  Sparkles,
} from 'lucide-react';

export const CHECKOUT_URL: string = 'https://payhip.com/b/OPqsZ';

export const metadata = {
  title: "The 7-Day Crochet Blanket Collection (PDF Guide)",
  description: "7 beginner-friendly crochet blankets + a simple system to choose, plan, crochet, customize, and finish with confidence. Includes sizing, yarn help, borders, troubleshooting, and printables.",
  openGraph: {
    title: "The 7-Day Crochet Blanket Collection (PDF Guide)",
    description: "7 beginner-friendly crochet blankets + a simple system to choose, plan, crochet, customize, and finish with confidence.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 7-Day Crochet Blanket Collection (PDF Guide)",
    description: "7 beginner-friendly crochet blankets + a simple system to choose, plan, crochet, customize, and finish with confidence.",
  },
};

/* ──────────────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────────────── */

interface BlanketProject {
  id: string;
  name: string;
  bestFor: string;
  yarnWeight: string;
  styleTag: string;
  whyBeginnerFriendly: string;
  recommendedSkill: string;
  colorway: string;
  imageUrl: string;
}

const BLANKET_PROJECTS: BlanketProject[] = [
  {
    id: 'beginner-classic',
    name: 'The Beginner Classic',
    bestFor: 'Perfect first blanket',
    yarnWeight: '#4 Worsted Weight',
    styleTag: 'Timeless Texture',
    whyBeginnerFriendly: 'Uses only 2 foundational stitches with an easy-to-spot turning chain. No stitch counting every single row once your foundation is set!',
    recommendedSkill: 'Absolute Beginner',
    colorway: 'Oatmeal & Linen',
    imageUrl: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788002333/The_Beginner_Classic.jpg',
  },
  {
    id: 'quick-chunky',
    name: 'The Quick Chunky Blanket',
    bestFor: 'Fast progress + cozy stitches',
    yarnWeight: '#6 Super Bulky',
    styleTag: 'Plump Cloud Stitch',
    whyBeginnerFriendly: 'Large hook and thick yarn mean huge, visible stitches that grow 2-3 inches with every 2 rows. Ideal for seeing fast results.',
    recommendedSkill: 'Beginner',
    colorway: 'Soft Sage & Cloud',
    imageUrl: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788002274/The_Quick_Chunky_Blanket.jpg',
  },
  {
    id: 'easy-textured',
    name: 'The Easy Textured Throw',
    bestFor: 'Texture without complexity',
    yarnWeight: '#4 Worsted Weight',
    styleTag: 'Subtle Waffle Moss',
    whyBeginnerFriendly: 'Creates a plush, rich texture through simple alternating front/back placements without complex cable twists or counting charts.',
    recommendedSkill: 'Adventurous Beginner',
    colorway: 'Warm Terracotta',
    imageUrl: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788002298/The_Easy_Textured_Throw.jpg',
  },
  {
    id: 'modern-stripe',
    name: 'The Modern Stripe Blanket',
    bestFor: 'Clean stripes + simple repeats',
    yarnWeight: '#4 Worsted / DK',
    styleTag: 'Scandinavian Minimalist',
    whyBeginnerFriendly: 'Includes our "Seamless Color Change Formula" so you carry yarn cleanly up the edge without weaving in 50 annoying ends.',
    recommendedSkill: 'Beginner',
    colorway: 'Cream, Forest & Camel',
    imageUrl: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788002301/The_Modern_Stripe_Blanket.jpg',
  },
  {
    id: 'granny-inspired',
    name: 'The Granny-Inspired Blanket',
    bestFor: 'Classic look, beginner-friendly',
    yarnWeight: '#4 Worsted Weight',
    styleTag: 'Modern Continuous Granny',
    whyBeginnerFriendly: 'Worked in continuous repeating clusters. You work into open chain spaces instead of tight loops, making it virtually mistake-proof.',
    recommendedSkill: 'Beginner',
    colorway: 'Alabaster & Heather',
    imageUrl: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788002297/The_Granny-Inspired_Blanket.jpg',
  },
  {
    id: 'cozy-weekend',
    name: 'The Cozy Weekend Throw',
    bestFor: 'Relaxing TV crochet',
    yarnWeight: '#6 Bulky',
    styleTag: 'Mindless Rhythmic Stitch',
    whyBeginnerFriendly: 'A purely relaxing, zero-stress single-row repeat. Pick it up while watching a movie without needing to keep track of a pattern sheet.',
    recommendedSkill: 'All Levels',
    colorway: 'Cozy Taupe & Cream',
    imageUrl: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788002276/The_Cozy_Weekend_Throw.jpg',
  },
  {
    id: 'statement-blanket',
    name: 'The Statement Blanket',
    bestFor: 'Bold ripple look (still doable)',
    yarnWeight: '#4 Worsted Weight',
    styleTag: 'Soft Gentle Chevron',
    whyBeginnerFriendly: 'A softened, beginner-tuned wave repeat with built-in visual markers at the peaks and valleys so you never drop or add accidental stitches.',
    recommendedSkill: 'Beginner / Intermediate',
    colorway: 'Eucalyptus & Ivory',
    imageUrl: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788002293/The_Statement_Blanket.jpg',
  },
];

const GALLERY_IMAGES = [
  { src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788796123/1.jpg', alt: 'PDF guide cover' },
  { src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788796123/2.jpg', alt: 'Guide overview' },
  { src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788796124/3.jpg', alt: 'Pattern page preview' },
  { src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788796123/4.jpg', alt: 'Sizing and yarn guide' },
  { src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788796123/6.jpg', alt: 'Stitch guide preview' },
  { src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788796123/20.jpg', alt: 'Troubleshooting page' },
  { src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788796123/21.jpg', alt: 'Printable planner' },
  { src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788796123/13.jpg', alt: 'Finished blanket photo' },
];

const FAQS = [
  { q: 'Is this beginner-friendly?', a: 'Yes, 100%! Every pattern has been crafted and tested specifically for beginners and beginner/intermediates. We include step-by-step photos, stitch anatomy breakdowns, turning chain rules, and count checkpoints so you never feel lost.' },
  { q: 'Is this a physical product?', a: 'No, this is an instant digital PDF product. You will receive an immediate download link to access the full collection, printable planners, cheat sheets, and video references on your phone, tablet, computer, or to print at home.' },
  { q: 'What yarn do I need?', a: 'The guide is designed to be completely yarn-accessible! 5 patterns use widely available #4 Worsted/Medium weight yarn (like standard acrylics, cottons, or wool blends) and 2 patterns use #5–#6 Bulky or Super Bulky yarn. We also include a full Yarn Weight & Hook substitution guide.' },
  { q: 'Can I change the blanket size?', a: 'Absolutely. We include a full "Size Customization Formula" and a Blanket Size Cheat Sheet covering Baby (30"×36"), Lapghan (36"×48"), Throw (50"×60"), Twin (66"×90"), and Queen/King dimensions with exact starting chain calculation multiples.' },
  { q: 'Do I need perfect gauge?', a: 'No! Unlike sweaters or hats where fit is critical, blankets are very forgiving. We show you how to do a quick 3-minute swatch check and adjust hook size if you tend to crochet tightly or loosely.' },
  { q: 'Can I use different yarn weights?', a: 'Yes. The guide includes our Yarn Weight Conversion Matrix, showing you how to adjust foundation counts and hook pairings if you want to make a chunky pattern in worsted weight, or vice versa.' },
  { q: 'Can I print the guide?', a: 'Yes! The entire package is formatted in high-resolution, print-optimized letter & A4 sizing with clean margins and ink-friendly color accents. You can print individual project pages or the entire bundle.' },
  { q: 'What crochet terminology is used?', a: 'All patterns and tutorials are written in standard US crochet terms, accompanied by a quick US-to-UK translation chart for international makers.' },
  { q: 'How do I receive the download?', a: 'Immediately after checkout, you will see a download button on your confirmation screen, plus a backup download link sent straight to your email. You get lifetime access and free updates.' },
  { q: 'Can I sell finished blankets?', a: 'Yes! You are welcome to sell finished physical blankets created from these patterns in small handmade batches. We only ask that you credit "The 7-Day Crochet Blanket Collection" for the pattern design.' },
];

const COMPARISON_ROWS = [
  { feature: 'Clear choosing + planning steps', thisGuide: true, online: false },
  { feature: 'Sizing guidance included', thisGuide: true, online: false },
  { feature: 'Yarn + hook guidance included', thisGuide: true, online: false },
  { feature: 'Straight edge routine included', thisGuide: true, online: false },
  { feature: 'Border + finishing checklist', thisGuide: true, online: false },
  { feature: 'Printables (planner + tracker)', thisGuide: true, online: false },
  { feature: 'Beginner-friendly repeat-based patterns', thisGuide: true, online: false },
  { feature: 'One cohesive system (not scattered)', thisGuide: true, online: false },
];

/* ──────────────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────────────── */

export default function BlanketCollectionLandingPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowStickyBar(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCtaClick = () => {
    if (CHECKOUT_URL && CHECKOUT_URL !== '#') {
      window.location.href = CHECKOUT_URL;
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FBF7F1]">

      {/* ================================================================
          SECTION 1 — ABOVE THE FOLD (Two-column)
          ================================================================ */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">

            {/* LEFT — Image Gallery */}
            <div className="space-y-3">
              {/* Primary Image */}
              <div className="relative bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={GALLERY_IMAGES[selectedImage].src}
                  alt={GALLERY_IMAGES[selectedImage].alt}
                  className="w-full"
                />
                <div className="absolute top-3 left-3 bg-[#2F4A3A] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                  Preview Pages
                </div>
              </div>
              {/* Thumbnail Grid */}
              <div className="grid grid-cols-8 gap-2">
                {GALLERY_IMAGES.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      selectedImage === i
                        ? 'border-[#2F4A3A] shadow-md'
                        : 'border-[#E9E1D7] hover:border-[#2F4A3A]/40'
                    }`}
                  >
                    <img src={img.src} alt={img.alt} className="w-full" />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT — Buy Box */}
            <div className="space-y-6 lg:sticky lg:top-24">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#2F4A3A] text-[#2F4A3A]" />
                  ))}
                </div>
                <span className="text-sm text-[#5B5B5B]">Trusted by beginner crocheters</span>
              </div>

              {/* Title */}
              <h1 className="font-fraunces text-3xl sm:text-4xl font-semibold text-[#1F1F1F] tracking-tight leading-tight">
                The 7-Day Crochet Blanket Collection
              </h1>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="font-fraunces text-4xl font-bold text-[#2F4A3A]">$12</span>
                <span className="text-lg text-[#5B5B5B] line-through">$38</span>
                <span className="text-xs font-bold text-white bg-[#2F4A3A] px-2 py-0.5 rounded-full">68% OFF</span>
              </div>
              <p className="text-sm text-[#5B5B5B] -mt-4">Instant digital download (PDF). No physical item shipped.</p>

              {/* Short Description */}
              <p className="text-base text-[#5B5B5B] leading-relaxed">
                7 beginner-friendly crochet blanket patterns + a simple system to choose, plan, crochet, customize, and finish with confidence (sizing, yarn help, straight edges, borders, and printables included).
              </p>

              {/* Variant Selectors */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-2">Skill Level</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-[#2F4A3A] text-white text-xs font-semibold">Beginner</span>
                    <span className="px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#E9E1D7] text-[#5B5B5B] text-xs font-medium">Beginner-Intermediate</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-2">Terminology</p>
                  <span className="px-3 py-1.5 rounded-lg bg-[#2F4A3A] text-white text-xs font-semibold">US crochet terms</span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-2">Format</p>
                  <span className="px-3 py-1.5 rounded-lg bg-[#2F4A3A] text-white text-xs font-semibold">PDF (printable + tablet-friendly)</span>
                </div>
              </div>

              {/* Includes Pills */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-2">Includes</p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    '7 blanket patterns', 'Sizing cheat sheet', 'Yarn + hook guide',
                    'Straight-edge routine', 'Borders + checklist', 'Printable planner',
                    '20 color palettes',
                  ].map((item) => (
                    <span key={item} className="inline-flex items-center gap-1 text-[11px] font-medium text-[#2F4A3A] bg-[#E4ECE7] px-2.5 py-1 rounded-full">
                      <Check className="w-3 h-3" /> {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-3">
                <button
                  onClick={handleCtaClick}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#2F4A3A] text-white font-semibold text-base sm:text-lg shadow-sm hover:bg-[#263C30] hover:shadow-md active:scale-[0.99] transition-all cursor-pointer group"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Get the Guide ($12)</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('whats-inside')}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#FFFFFF] border border-[#E9E1D7] text-[#1F1F1F] font-medium text-sm hover:bg-[#F4ECE2] hover:border-[#DFD3C3] transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4" /> See what's inside
                </button>
              </div>

              {/* Trust Icons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { icon: Zap, text: 'Instant access' },
                  { icon: Printer, text: 'Printable pages' },
                  { icon: BookOpen, text: 'Beginner-friendly system' },
                  { icon: FileText, text: 'US terms' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-2 text-xs text-[#5B5B5B]">
                      <Icon className="w-4 h-4 text-[#2F4A3A] shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-[#5B5B5B]/80 italic">
                "7-Day" is a finishable mindset—time varies by size and crochet speed.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ================================================================
          SECTION 2 — DESIGNED FOR REAL-LIFE CROCHET (4 benefits)
          ================================================================ */}
      <section className="py-16 md:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-3.5 py-1 rounded-full">
                  Why This Guide
                </span>
                <h2 className="font-fraunces text-3xl sm:text-4xl font-semibold text-[#1F1F1F] tracking-tight leading-tight">
                  Designed for Real-Life Crochet
                </h2>
                <p className="text-base text-[#5B5B5B]">Not overwhelming projects.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { num: '01', title: 'Finishable Patterns', desc: 'Simple repeats that build confidence.' },
                  { num: '02', title: 'Plan Before You Buy Yarn', desc: 'Sizing + yarn guidance included.' },
                  { num: '03', title: 'Straight Edges Help', desc: 'Markers + turning routines to reduce mistakes.' },
                  { num: '04', title: 'Polished Finish', desc: 'Borders + finishing checklist so it looks complete.' },
                ].map((item) => (
                  <div key={item.num} className="bg-[#FBF7F1] border border-[#E9E1D7] rounded-2xl p-5 space-y-2">
                    <span className="text-xs font-bold text-[#2F4A3A] bg-[#E4ECE7] w-7 h-7 rounded-lg flex items-center justify-center">
                      {item.num}
                    </span>
                    <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F]">{item.title}</h3>
                    <p className="text-sm text-[#5B5B5B] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#FBF7F1] border border-[#E9E1D7] rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788183137/The_1_Blanket_Problem_Wavy_Edges_side-by-side_straight_vs_wavy.jpg"
                  alt="Straight edges with stitch markers"
                  className="w-full h-72 sm:h-80 md:h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#E4ECE7] rounded-full blur-2xl opacity-60" />
            </div>
          </div>
        </div>
      </section>


      {/* ================================================================
          SECTION 3 — ONE GUIDE, EVERY VIBE (lifestyle use-cases)
          ================================================================ */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Lifestyle Image */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788002276/The_Cozy_Weekend_Throw.jpg"
                  alt="Blanket on sofa with yarn"
                  className="w-full h-72 sm:h-80 md:h-[420px] object-cover"
                />
              </div>
            </div>
            {/* Right — Use-case list */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-3.5 py-1 rounded-full">
                  7 Projects
                </span>
                <h2 className="font-fraunces text-3xl sm:text-4xl font-semibold text-[#1F1F1F] tracking-tight leading-tight">
                  One Guide, Every Vibe
                </h2>
                <p className="text-base text-[#5B5B5B]">Pick the mood. We give you the pattern.</p>
              </div>
              <div className="space-y-3">
                {[
                  { icon: Heart, label: 'First Blanket Confidence', project: 'Beginner Classic' },
                  { icon: Zap, label: 'Fast Progress Days', project: 'Quick Chunky Blanket' },
                  { icon: Layers, label: 'Texture Without Complexity', project: 'Easy Textured Throw' },
                  { icon: Sparkles, label: 'Modern Home Decor', project: 'Modern Stripe Blanket' },
                  { icon: Coffee, label: 'Classic Cozy Vibes', project: 'Granny-Inspired' },
                  { icon: Clock, label: 'Relaxing TV Crochet', project: 'Cozy Weekend Throw' },
                  { icon: Star, label: 'Statement Project', project: 'Statement Ripple' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-4 bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-4 hover:shadow-sm transition-shadow">
                      <div className="w-10 h-10 rounded-xl bg-[#2F4A3A]/10 text-[#2F4A3A] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#1F1F1F]">{item.label}</p>
                        <p className="text-xs text-[#5B5B5B]">{item.project}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#5B5B5B] shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================================================================
          SECTION 4 — WHAT'S INSIDE (7 project grid)
          ================================================================ */}
      <section id="whats-inside" className="py-16 md:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-3.5 py-1 rounded-full">
              <Layers className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
              The Collection
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-semibold text-[#1F1F1F] tracking-tight">
              What's Inside the Collection
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {BLANKET_PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="bg-[#FBF7F1] border border-[#E9E1D7] rounded-2xl overflow-hidden hover:shadow-md hover:border-[#2F4A3A]/30 transition-all group"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-[#2F4A3A] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {project.recommendedSkill}
                    </span>
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-fraunces text-lg font-semibold text-[#1F1F1F] leading-snug">{project.name}</h3>
                  <p className="text-sm text-[#5B5B5B] italic">"{project.bestFor}"</p>
                  <div className="flex items-center gap-2 text-xs text-[#5B5B5B]">
                    <Ruler className="w-3.5 h-3.5 text-[#2F4A3A]" />
                    <span>{project.yarnWeight}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================
          SECTION 5 — COMPARISON TABLE
          ================================================================ */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-3.5 py-1 rounded-full">
              Compare
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-semibold text-[#1F1F1F] tracking-tight">
              Why This Isn't Just Another Pattern Bundle
            </h2>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[#2F4A3A] text-white text-sm font-semibold">
              <div className="p-4 sm:p-5"></div>
              <div className="p-4 sm:p-5 text-center">This Guide</div>
              <div className="p-4 sm:p-5 text-center">Random Patterns Online</div>
            </div>
            {/* Rows */}
            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-[#FBF7F1]' : 'bg-[#FFFFFF]'} border-t border-[#E9E1D7]/60`}
              >
                <div className="p-4 sm:p-5 text-[#1F1F1F] font-medium">{row.feature}</div>
                <div className="p-4 sm:p-5 flex justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#2F4A3A]" />
                </div>
                <div className="p-4 sm:p-5 flex justify-center">
                  {row.online ? (
                    <CheckCircle2 className="w-5 h-5 text-[#2F4A3A]" />
                  ) : (
                    <span className="w-5 h-5 rounded-full bg-[#E9E1D7] flex items-center justify-center text-[10px] text-[#5B5B5B] font-bold">✕</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================
          SECTION 7 — FAQ
          ================================================================ */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-3.5 py-1 rounded-full">
              FAQ
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-semibold text-[#1F1F1F] tracking-tight">
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-2.5">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <span className="font-fraunces text-sm sm:text-base font-semibold text-[#1F1F1F] pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-[#5B5B5B] transition-transform duration-200 ${
                      openFaq === i ? 'rotate-180 text-[#2F4A3A]' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-[#5B5B5B] leading-relaxed border-t border-[#E9E1D7]/60 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================
          SECTION 8 — FINAL CTA
          ================================================================ */}
      <section className="py-16 md:py-24 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#2F4A3A] to-[#263C30] rounded-3xl p-8 sm:p-12 md:p-16 shadow-xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#CCD9D0] bg-white/10 px-3.5 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCD9D0] animate-pulse" />
              Start Your Blanket Journey
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              Choose a blanket you'll be proud to finish.
            </h2>
            <p className="text-base sm:text-lg text-[#CCD9D0] mb-8 max-w-xl mx-auto leading-relaxed">
              Beautiful crochet projects. Clear guidance. Less overwhelm.
            </p>
            <button
              onClick={handleCtaClick}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-[#2F4A3A] font-semibold text-base sm:text-lg hover:bg-[#FBF7F1] transition-colors cursor-pointer shadow-md group"
            >
              <ShoppingCart className="w-5 h-5" />
              Get the Guide ($12)
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-xs text-[#CCD9D0]/70 mt-6">
              Instant download • Printable • Beginner-friendly • US terms
            </p>
          </div>
        </div>
      </section>


      {/* ================================================================
          MOBILE STICKY BOTTOM CTA
          ================================================================ */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 inset-x-0 p-3 bg-[#FFFFFF]/95 backdrop-blur-md border-t border-[#E9E1D7] shadow-xl z-50 md:hidden flex items-center justify-between gap-3"
          >
            <div className="pl-1">
              <p className="font-fraunces font-bold text-sm text-[#1F1F1F] leading-tight">7-Day Blanket Guide</p>
              <p className="text-[11px] text-[#2F4A3A] font-semibold">$12 • Instant PDF</p>
            </div>
            <button
              onClick={handleCtaClick}
              className="px-5 py-3 rounded-xl bg-[#2F4A3A] text-white font-semibold text-sm hover:bg-[#263C30] shadow-sm flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Get the Guide ($12)</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
