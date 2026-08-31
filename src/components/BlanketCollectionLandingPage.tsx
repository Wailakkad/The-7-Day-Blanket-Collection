import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Download,
  BookOpen,
  Ruler,
  AlertCircle,
  Palette,
  Calendar,
  Layers,
  ChevronDown,
  Lock,
  Scissors,
  Check,
  Zap,
  Heart,
  FileText,
  ShieldCheck,
  Eye,
  Coffee,
  HelpCircle,
  Printer
} from 'lucide-react';

/**
 * Configure your payment processor or direct checkout link here
 * e.g., Gumroad, Stripe Checkout, Shopify, or Lemon Squeezy
 */
export const CHECKOUT_URL: string = 'https://payhip.com/b/OPqsZ';

// Metadata for Next.js App Router exports
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

interface QuizOption {
  label: string;
  project: BlanketProject;
  reason: string;
  vibeNote: string;
}

const QUIZ_OPTIONS: QuizOption[] = [
  {
    label: 'I want FAST progress',
    project: BLANKET_PROJECTS[1], // Quick Chunky
    reason: 'Thick #6 super bulky yarn with an 8mm-10mm hook lets you see rows stack up in minutes. Perfect for instant gratification!',
    vibeNote: 'Yarn: #6 Super Bulky • Hook: 9mm / M-13 • Vibe: Chunky & ultra-cozy',
  },
  {
    label: 'This is my first blanket',
    project: BLANKET_PROJECTS[0], // The Beginner Classic
    reason: 'Zero tricky maneuvers and clean edge anchors. Built specifically to eliminate fear of wavy sides or accidental stitch drops.',
    vibeNote: 'Yarn: #4 Worsted • Hook: 5.5mm / I-9 • Vibe: Classic, gentle, forgiving',
  },
  {
    label: 'I want modern style',
    project: BLANKET_PROJECTS[3], // Modern Stripe
    reason: 'Crisp, editorial color blocking that looks high-end on any couch, with no messy yarn-tail knots to dread at the end.',
    vibeNote: 'Yarn: #4 Worsted • Hook: 5.0mm / H-8 • Vibe: Nordic chic, crisp lines',
  },
  {
    label: 'I want cozy TV crochet',
    project: BLANKET_PROJECTS[5], // Cozy Weekend
    reason: 'A soothing rhythm where your hands take over automatically. No stitch counters or row tally sheets required.',
    vibeNote: 'Yarn: #6 Bulky • Hook: 6.5mm / K-10.5 • Vibe: Mindful, calming, zero stress',
  },
  {
    label: 'I want a WOW blanket',
    project: BLANKET_PROJECTS[6], // Statement Blanket
    reason: 'Stunning gentle wave ripples that look like a master artisan piece, made simple through visual anchor stitches.',
    vibeNote: 'Yarn: #4 Worsted • Hook: 5.5mm / I-9 • Vibe: Architectural, heirloom-worthy',
  },
];

const FAQS = [
  {
    q: 'Is this beginner-friendly?',
    a: 'Yes, 100%! Every pattern has been crafted and tested specifically for beginners and beginner/intermediates. We include step-by-step photos, stitch anatomy breakdowns, turning chain rules, and count checkpoints so you never feel lost.',
  },
  {
    q: 'Is this a physical product?',
    a: 'No, this is an instant digital PDF product. You will receive an immediate download link to access the full collection, printable planners, cheat sheets, and video references on your phone, tablet, computer, or to print at home.',
  },
  {
    q: 'What yarn do I need?',
    a: 'The guide is designed to be completely yarn-accessible! 5 patterns use widely available #4 Worsted/Medium weight yarn (like standard acrylics, cottons, or wool blends) and 2 patterns use #5–#6 Bulky or Super Bulky yarn. We also include a full Yarn Weight & Hook substitution guide.',
  },
  {
    q: 'Can I change the blanket size?',
    a: 'Absolutely. We include a full "Size Customization Formula" and a Blanket Size Cheat Sheet covering Baby (30"×36"), Lapghan (36"×48"), Throw (50"×60"), Twin (66"×90"), and Queen/King dimensions with exact starting chain calculation multiples.',
  },
  {
    q: 'Do I need perfect gauge?',
    a: 'No! Unlike sweaters or hats where fit is critical, blankets are very forgiving. We show you how to do a quick 3-minute swatch check and adjust hook size if you tend to crochet tightly or loosely.',
  },
  {
    q: 'Can I use different yarn weights?',
    a: 'Yes. The guide includes our Yarn Weight Conversion Matrix, showing you how to adjust foundation counts and hook pairings if you want to make a chunky pattern in worsted weight, or vice versa.',
  },
  {
    q: 'Can I print the guide?',
    a: 'Yes! The entire package is formatted in high-resolution, print-optimized letter & A4 sizing with clean margins and ink-friendly color accents. You can print individual project pages or the entire bundle.',
  },
  {
    q: 'What crochet terminology is used?',
    a: 'All patterns and tutorials are written in standard US crochet terms, accompanied by a quick US-to-UK translation chart for international makers.',
  },
  {
    q: 'How do I receive the download?',
    a: 'Immediately after checkout, you will see a download button on your confirmation screen, plus a backup download link sent straight to your email. You get lifetime access and free updates.',
  },
  {
    q: 'Can I sell finished blankets?',
    a: 'Yes! You are welcome to sell finished physical blankets created from these patterns in small handmade batches. We only ask that you credit "The 7-Day Crochet Blanket Collection" for the pattern design.',
  },
];

export default function BlanketCollectionLandingPage() {
  const [selectedQuizIdx, setSelectedQuizIdx] = useState<number>(0);
  const [expandedBlanket, setExpandedBlanket] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCtaClick = () => {
    if (CHECKOUT_URL && CHECKOUT_URL !== '#') {
      window.location.href = CHECKOUT_URL;
    } else {
      const pricingSection = document.getElementById('pricing-offer');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeQuiz = QUIZ_OPTIONS[selectedQuizIdx];

  return (
    <div className="min-h-screen bg-[#FBF7F1] text-[#1F1F1F] font-sans antialiased selection:bg-[#2F4A3A]/15 selection:text-[#2F4A3A]">
      
      {/* ========================================================================= */}
      {/* 1) HERO SECTION */}
      {/* ========================================================================= */}
      <header className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2F4A3A]/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#DFD3C3]/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Brand Bar */}
          <div className="flex items-center justify-between pb-8 md:pb-12 border-b border-[#E9E1D7]/60 mb-8 md:mb-12">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#2F4A3A] text-[#FBF7F1] flex items-center justify-center font-fraunces font-bold text-sm">
                7
              </span>
              <span className="font-fraunces font-semibold text-lg md:text-xl text-[#1F1F1F] tracking-tight">
                The 7-Day Blanket Collection
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/blog"
                className="text-xs font-medium text-[#5B5B5B] hover:text-[#1F1F1F] transition-colors"
              >
                Blog
              </Link>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-[#5B5B5B] bg-[#FFFFFF] border border-[#E9E1D7] px-3 py-1 rounded-full shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#2F4A3A]" /> PDF Digital Guide
              </span>
              <a
                href={CHECKOUT_URL}
                onClick={(e) => { e.preventDefault(); handleCtaClick(); }}
                className="text-xs font-semibold text-[#2F4A3A] hover:text-[#263C30] underline underline-offset-4"
              >
                Instant Access ($12)
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-6 md:space-y-7 text-left"
            >
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E9E1D7] shadow-xs text-xs md:text-sm font-semibold tracking-wider text-[#2F4A3A] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#2F4A3A] animate-pulse" />
                BEGINNER-FRIENDLY PDF GUIDE
              </div>

              {/* H1 Headline */}
              <h1 className="font-fraunces text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] font-semibold text-[#1F1F1F] tracking-tight">
                Make a Beautiful Crochet Blanket—Without Starting Another Overwhelming Project
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-[#5B5B5B] leading-relaxed max-w-2xl">
                7 beginner-friendly blanket patterns + a simple system to choose, plan, crochet, customize, and finish with confidence. (Sizing, yarn help, straight edges, borders, and printables included.)
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  id="hero-primary-cta"
                  onClick={handleCtaClick}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#2F4A3A] text-white font-medium text-base sm:text-lg shadow-sm hover:bg-[#263C30] hover:shadow-md active:scale-[0.99] transition-all cursor-pointer group"
                >
                  <span>Get the PDF Guide ($12)</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id="hero-secondary-cta"
                  onClick={() => scrollToSection('whats-inside')}
                  className="inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-[#FFFFFF] border border-[#E9E1D7] text-[#1F1F1F] font-medium text-base hover:bg-[#F4ECE2] hover:border-[#DFD3C3] active:scale-[0.99] transition-all cursor-pointer"
                >
                  See what’s inside
                </button>
              </div>

              {/* Microcopy & Honest Disclaimer */}
              <div className="space-y-1.5 pt-1">
                <p className="text-xs sm:text-sm font-medium text-[#5B5B5B] flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1"><Download className="w-3.5 h-3.5 text-[#2F4A3A]" /> Instant digital download</span>
                  <span className="text-[#DFD3C3]">•</span>
                  <span className="inline-flex items-center gap-1"><Printer className="w-3.5 h-3.5 text-[#2F4A3A]" /> Printable</span>
                  <span className="text-[#DFD3C3]">•</span>
                  <span>US crochet terms</span>
                </p>
                <p className="text-xs text-[#5B5B5B]/80 italic">
                  “7-Day” is a finishable mindset—project time varies by size and crochet speed.
                </p>
              </div>


            </motion.div>

            {/* Hero Right Visual Proof Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative flex justify-center items-center"
            >
              {/* Main Product Showcase Composition */}
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                
                {/* Floating Aesthetic Ambient Glow */}
                <div className="absolute -inset-3 sm:-inset-5 bg-gradient-to-tr from-[#2F4A3A]/15 via-[#DFD3C3]/30 to-[#E4ECE7]/40 rounded-3xl -rotate-1 transform -z-10 blur-xl" />

                {/* Editorial Image Container Frame */}
                <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#FBF7F1]">
                    <img
                      src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788000370/image_cover_ebook_pdf.jpg"
                      alt="The 7-Day Crochet Blanket Collection PDF Guide Cover"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover rounded-xl sm:rounded-2xl shadow-xs transform group-hover:scale-[1.01] transition-transform duration-500"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Floating Physical Printable Badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-5 bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl p-2.5 sm:p-3.5 shadow-lg flex items-center gap-2.5 sm:gap-3 z-10 max-w-[210px]"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#2F4A3A]/10 text-[#2F4A3A] flex items-center justify-center shrink-0">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 text-[#2F4A3A]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1F1F1F] leading-tight">Instant PDF</p>
                    <p className="text-[10px] text-[#5B5B5B]">Includes 7 Patterns</p>
                  </div>
                </motion.div>

                {/* Floating "Straight Edges" Badge */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-[#2F4A3A] text-white rounded-2xl px-3 py-2 sm:p-3 shadow-lg flex items-center gap-2 z-10"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#CCD9D0]" />
                  <span className="text-xs font-medium tracking-tight">Zero Wavy Edges</span>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </header>


      {/* ========================================================================= */}
      {/* 2) TRUST BAR (4 Chips with Icons) */}
      {/* ========================================================================= */}
      <section className="py-6 border-y border-[#E9E1D7] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FBF7F1] border border-[#E9E1D7]/80">
              <div className="w-8 h-8 rounded-lg bg-[#2F4A3A]/10 text-[#2F4A3A] flex items-center justify-center shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#1F1F1F]">
                Finishable system (not just patterns)
              </span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FBF7F1] border border-[#E9E1D7]/80">
              <div className="w-8 h-8 rounded-lg bg-[#2F4A3A]/10 text-[#2F4A3A] flex items-center justify-center shrink-0">
                <Ruler className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#1F1F1F]">
                Yarn + size guidance included
              </span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FBF7F1] border border-[#E9E1D7]/80">
              <div className="w-8 h-8 rounded-lg bg-[#2F4A3A]/10 text-[#2F4A3A] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#1F1F1F]">
                Straight edges + counting help
              </span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FBF7F1] border border-[#E9E1D7]/80">
              <div className="w-8 h-8 rounded-lg bg-[#2F4A3A]/10 text-[#2F4A3A] flex items-center justify-center shrink-0">
                <Scissors className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#1F1F1F]">
                Borders + finishing checklist
              </span>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 3) PROBLEM SECTION (3 Pain Cards) */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FBF7F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 md:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5B5B5B] bg-white border border-[#E9E1D7] px-3.5 py-1 rounded-full">
              The Real Struggle
            </span>
            <h2 className="font-fraunces text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F1F1F] tracking-tight">
              Why blankets get abandoned (even by motivated beginners)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1 */}
            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200/60 flex items-center justify-center mb-6">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="font-fraunces text-xl font-semibold text-[#1F1F1F] mb-3">
                Yarn overwhelm
              </h3>
              <p className="text-sm md:text-base text-[#5B5B5B] leading-relaxed">
                So many choices → wrong yarn, scratchy blanket, regret
              </p>
              <div className="mt-6 pt-4 border-t border-[#E9E1D7]/70 text-xs text-[#5B5B5B]/80 italic">
                Result: Spending $60+ on yarn that splits and frustrates your hands.
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-800 border border-rose-200/60 flex items-center justify-center mb-6">
                <Ruler className="w-6 h-6" />
              </div>
              <h3 className="font-fraunces text-xl font-semibold text-[#1F1F1F] mb-3">
                Sizing confusion
              </h3>
              <p className="text-sm md:text-base text-[#5B5B5B] leading-relaxed">
                Blanket turns out too small or too big
              </p>
              <div className="mt-6 pt-4 border-t border-[#E9E1D7]/70 text-xs text-[#5B5B5B]/80 italic">
                Result: Running out of yarn with 10 rows left, or ending with an odd-shaped square.
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-800 border border-stone-300 flex items-center justify-center mb-6">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="font-fraunces text-xl font-semibold text-[#1F1F1F] mb-3">
                Wavy edges + mistakes
              </h3>
              <p className="text-sm md:text-base text-[#5B5B5B] leading-relaxed">
                Counting issues → frustration and frogging
              </p>
              <div className="mt-6 pt-4 border-t border-[#E9E1D7]/70 text-xs text-[#5B5B5B]/80 italic">
                Result: Sides that taper like a trapezoid, forcing you to unravel weeks of work.
              </div>
            </div>

          </div>

          {/* Close Line */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-[#E4ECE7] border border-[#CCD9D0] rounded-2xl px-6 py-4">
              <p className="font-fraunces text-base sm:text-lg md:text-xl font-medium text-[#2F4A3A]">
                This guide removes the guesswork so you can finish with confidence.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 4) SOLUTION / FRAMEWORK (5-step system) */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFFFFF] border-y border-[#E9E1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 md:mb-20">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-3.5 py-1 rounded-full">
              The Blueprint
            </span>
            <h2 className="font-fraunces text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F1F1F] tracking-tight">
              A simple blanket system you can repeat
            </h2>
            <p className="text-sm sm:text-base text-[#5B5B5B]">
              A predictable 5-step framework that turns confusing pattern PDFs into relaxing, enjoyable crochet time.
            </p>
          </div>

          {/* 5-Step Visual Path */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            
            {[
              {
                step: '01',
                name: 'Choose',
                desc: 'Pick the right blanket for your vibe + time.',
                icon: Heart,
              },
              {
                step: '02',
                name: 'Plan',
                desc: 'Know your yarn, hook, size, and yardage.',
                icon: BookOpen,
              },
              {
                step: '03',
                name: 'Start',
                desc: 'Begin clean with beginner-safe setup.',
                icon: Zap,
              },
              {
                step: '04',
                name: 'Crochet',
                desc: 'Repeat-based rows you can follow easily.',
                icon: Layers,
              },
              {
                step: '05',
                name: 'Finish',
                desc: 'Borders, ends, and care—done neatly.',
                icon: CheckCircle2,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FBF7F1] border border-[#E9E1D7] rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#2F4A3A]/40 transition-colors relative group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-fraunces text-[#2F4A3A] bg-white border border-[#E9E1D7] px-2.5 py-0.5 rounded-full">
                        Step {item.step}
                      </span>
                      <Icon className="w-5 h-5 text-[#2F4A3A]/70 group-hover:text-[#2F4A3A] transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-fraunces text-xl font-semibold text-[#1F1F1F] mb-1.5">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5B5B5B] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {idx < 4 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <div className="w-6 h-6 rounded-full bg-[#FFFFFF] border border-[#E9E1D7] flex items-center justify-center text-[#2F4A3A] shadow-xs">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

          </div>

          {/* Flow indicator bar */}
          <div className="mt-8 text-center hidden md:flex items-center justify-center gap-2 text-xs font-semibold text-[#5B5B5B]">
            <span>Choose</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2F4A3A]" />
            <span>Plan</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2F4A3A]" />
            <span>Start</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2F4A3A]" />
            <span>Crochet</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2F4A3A]" />
            <span className="text-[#2F4A3A] font-bold">Finish</span>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 5) WHAT’S INSIDE (Two-Column Checklist) */}
      {/* ========================================================================= */}
      <section id="whats-inside" className="py-16 md:py-24 bg-[#FBF7F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 md:mb-18">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5B5B5B] bg-white border border-[#E9E1D7] px-3.5 py-1 rounded-full">
              Full Breakdown
            </span>
            <h2 className="font-fraunces text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F1F1F] tracking-tight">
              What you get inside the guide
            </h2>
            <p className="text-sm sm:text-base text-[#5B5B5B]">
              Every page is designed to give you clarity, eliminate second-guessing, and keep your hands moving happily.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Left Column */}
              <div className="space-y-4">
                {[
                  {
                    title: '7 beginner-friendly blanket patterns',
                    desc: 'Clear row-by-row instructions with stitch count anchors and visual turn guides.',
                  },
                  {
                    title: 'Sizing cheat sheet (baby → throw → twin + more)',
                    desc: 'Pre-calculated dimensions, yardage estimators, and starting chain formulas.',
                  },
                  {
                    title: 'Yarn weight + hook quick guide',
                    desc: 'How to substitute fibers and match hooks without losing blanket drape or softness.',
                  },
                  {
                    title: 'Straight edge routine (no more trapezoids)',
                    desc: 'The exact turning chain secret that keeps your blanket edges straight as a ruler.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FBF7F1]/70 border border-[#E9E1D7]/60">
                    <div className="w-6 h-6 rounded-full bg-[#2F4A3A] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-[#1F1F1F]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#5B5B5B] mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {[
                  {
                    title: 'Resizing help (width + length)',
                    desc: 'Simple stitch multiple formulas to make your blanket as wide or long as you want.',
                  },
                  {
                    title: 'Borders that lay flat',
                    desc: 'Never struggle with ruffling or curling edges—3 foolproof border finishes included.',
                  },
                  {
                    title: 'Troubleshooting quick fixes',
                    desc: 'What to do if your row count is off by one, yarn splits, or your tension tightens up.',
                  },
                  {
                    title: 'Printable planner + progress tracker',
                    desc: 'Printable worksheets to track color swatches, row milestones, and daily progress.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FBF7F1]/70 border border-[#E9E1D7]/60">
                    <div className="w-6 h-6 rounded-full bg-[#2F4A3A] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-[#1F1F1F]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#5B5B5B] mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Micro value banner */}
            <div className="mt-8 pt-6 border-t border-[#E9E1D7] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#5B5B5B]">
                <ShieldCheck className="w-4 h-4 text-[#2F4A3A]" />
                <span>Format: <strong>High-Res PDF</strong> (Compatible with iPad, Kindle, Phones, & Home Printing)</span>
              </div>
              <button
                onClick={handleCtaClick}
                className="text-xs sm:text-sm font-semibold text-[#2F4A3A] hover:text-[#263C30] flex items-center gap-1 underline underline-offset-4 cursor-pointer"
              >
                <span>Get all 7 patterns + bonuses for $12</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 6) THE 7 BLANKETS (Grid of 7 Project Cards) */}
      {/* ========================================================================= */}
      <section id="the-blankets" className="py-16 md:py-24 bg-[#FFFFFF] border-y border-[#E9E1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 md:mb-20">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-3.5 py-1 rounded-full">
              The Collection
            </span>
            <h2 className="font-fraunces text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F1F1F] tracking-tight">
              The 7 blanket projects
            </h2>
            <p className="text-sm sm:text-base text-[#5B5B5B]">
              Every blanket has a distinct character, speed rating, and tested stitch anatomy so you can choose the vibe that suits your mood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {BLANKET_PROJECTS.map((project, idx) => {
              const isExpanded = expandedBlanket === project.id;
              return (
                <div
                  key={project.id}
                  className={`bg-[#FFFFFF] border rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between ${
                    isExpanded ? 'border-[#2F4A3A] shadow-md ring-1 ring-[#2F4A3A]/20' : 'border-[#E9E1D7] shadow-sm hover:shadow-md'
                  }`}
                >
                  <div>
                    {/* Visual Card Image Header */}
                    <div className="w-full h-48 sm:h-52 rounded-xl relative overflow-hidden mb-5 bg-[#FBF7F1] border border-[#E9E1D7]/60 group/img">
                      <img
                        src={project.imageUrl}
                        alt={project.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25 pointer-events-none" />
                      
                      {/* Project Index & Skill Tag */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                        <span className="text-[10px] font-bold font-fraunces bg-white/95 backdrop-blur-xs text-[#1F1F1F] px-2.5 py-0.5 rounded-full shadow-xs">
                          0{idx + 1}
                        </span>
                        <span className="text-[10px] font-semibold text-[#2F4A3A] bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded-full shadow-xs">
                          {project.recommendedSkill}
                        </span>
                      </div>

                      {/* Bottom Swatch Label */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 flex items-center justify-between text-[11px] font-medium text-white bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/15">
                        <span>Palette: {project.colorway}</span>
                        <Palette className="w-3 h-3 text-white/90" />
                      </div>
                    </div>

                    {/* Name & Best-For */}
                    <h3 className="font-fraunces text-xl font-semibold text-[#1F1F1F] mb-1">
                      {project.name}
                    </h3>
                    <p className="text-sm font-medium text-[#2F4A3A] mb-4">
                      "{project.bestFor}"
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold bg-[#FBF7F1] border border-[#E9E1D7] text-[#1F1F1F] px-2.5 py-1 rounded-lg">
                        <Ruler className="w-3 h-3 text-[#2F4A3A]" />
                        {project.yarnWeight}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium bg-[#FBF7F1] border border-[#E9E1D7] text-[#5B5B5B] px-2.5 py-1 rounded-lg">
                        {project.styleTag}
                      </span>
                    </div>
                  </div>

                  {/* Expandable "Why it's beginner friendly" accordion */}
                  <div className="pt-3 border-t border-[#E9E1D7]/70">
                    <button
                      onClick={() => setExpandedBlanket(isExpanded ? null : project.id)}
                      className="w-full flex items-center justify-between text-xs font-semibold text-[#2F4A3A] hover:text-[#263C30] py-1 cursor-pointer"
                    >
                      <span>Tap to see why it’s beginner-friendly</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 text-xs text-[#5B5B5B] bg-[#FBF7F1] p-3 rounded-xl border border-[#E9E1D7] mt-2 leading-relaxed">
                            <strong className="text-[#1F1F1F] block mb-1">Beginner Secret:</strong>
                            {project.whyBeginnerFriendly}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Interactive Trigger Callout */}
          <div className="mt-12 text-center">
            <p className="text-sm text-[#5B5B5B] mb-3">
              Unsure which one matches your schedule and yarn stash?
            </p>
            <button
              onClick={() => scrollToSection('picker-selector')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2F4A3A] hover:text-[#263C30] bg-[#E4ECE7] px-5 py-2.5 rounded-full hover:bg-[#CCD9D0] transition-colors cursor-pointer"
            >
              <span>Try the 10-second Blanket Selector below</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 7) INTERACTIVE: “Pick Your Blanket” SELECTOR (Conversion Booster) */}
      {/* ========================================================================= */}
      <section id="picker-selector" className="py-16 md:py-24 bg-[#FBF7F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 md:mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F4A3A] bg-white border border-[#E9E1D7] px-3.5 py-1 rounded-full">
              Quick Match Finder
            </span>
            <h2 className="font-fraunces text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F1F1F] tracking-tight">
              Not sure where to start? Pick your blanket
            </h2>
            <p className="text-sm sm:text-base text-[#5B5B5B]">
              Select what matters most to you right now and get our top pattern recommendation.
            </p>
          </div>

          {/* Interactive Button Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto mb-10">
            {QUIZ_OPTIONS.map((opt, idx) => {
              const isSelected = selectedQuizIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedQuizIdx(idx)}
                  className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#2F4A3A] text-white shadow-sm ring-2 ring-[#2F4A3A]/20 scale-102'
                      : 'bg-white border border-[#E9E1D7] text-[#1F1F1F] hover:bg-[#F4ECE2] hover:border-[#DFD3C3]'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          {/* Recommended Result Card with Smooth Motion Transition */}
          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedQuizIdx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="bg-[#FFFFFF] border-2 border-[#2F4A3A]/30 rounded-2xl p-5 sm:p-7 shadow-md relative overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center mb-6">
                  {/* Photo Preview */}
                  <div className="sm:col-span-5 h-44 sm:h-52 rounded-xl overflow-hidden relative border border-[#E9E1D7] bg-[#FBF7F1] shrink-0">
                    <img
                      src={activeQuiz.project.imageUrl}
                      alt={activeQuiz.project.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="text-[10px] font-semibold text-[#2F4A3A] bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded-full shadow-xs">
                        {activeQuiz.project.recommendedSkill}
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 text-[10px] text-white bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded text-center">
                      {activeQuiz.project.yarnWeight}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="sm:col-span-7 space-y-2">
                    {/* Match Badge */}
                    <div className="inline-flex items-center gap-1.5 bg-[#E4ECE7] text-[#2F4A3A] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" /> Your Recommended Match
                    </div>

                    <h3 className="font-fraunces text-xl sm:text-2xl font-semibold text-[#1F1F1F]">
                      {activeQuiz.project.name}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-[#2F4A3A] font-medium">
                      "{activeQuiz.project.bestFor}"
                    </p>

                    <p className="text-xs sm:text-sm text-[#5B5B5B] leading-relaxed">
                      {activeQuiz.reason}
                    </p>
                  </div>
                </div>

                {/* Yarn & Hook Vibe Note */}
                <div className="bg-[#FBF7F1] p-3.5 rounded-xl border border-[#E9E1D7] text-xs sm:text-sm text-[#1F1F1F] font-medium mb-6 flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-[#2F4A3A] shrink-0" />
                  <span>{activeQuiz.vibeNote}</span>
                </div>

                {/* CTA inside match card */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-[#E9E1D7]">
                  <div className="text-xs text-[#5B5B5B]">
                    Included in the complete <strong>$12 collection</strong>
                  </div>
                  <button
                    onClick={handleCtaClick}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2F4A3A] text-white font-semibold text-sm hover:bg-[#263C30] transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Get the Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 8) BONUSES / PRINTABLES (Value Stack) */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFFFFF] border-y border-[#E9E1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 md:mb-18">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-3.5 py-1 rounded-full">
              Included Extras
            </span>
            <h2 className="font-fraunces text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F1F1F] tracking-tight">
              Printables that make finishing easier
            </h2>
            <p className="text-sm sm:text-base text-[#5B5B5B]">
              These companion worksheets and visual quick-guides solve the little roadblocks that usually derail a project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            
            {[
              {
                title: 'Blanket Size Cheat Sheet',
                desc: 'Standard sizes from Lovey to King with yardage targets and starting chain guide.',
                icon: Ruler,
                badge: 'Reference Sheet',
              },
              {
                title: 'Yarn Weight & Hook Guide',
                desc: 'Never guess what hook to use with worsted, chunky, or sport weight yarn again.',
                icon: BookOpen,
                badge: 'Cheat Sheet',
              },
              {
                title: '20 Crochet Color Palettes',
                desc: 'Pre-curated cozy, modern, and neutral color combinations using popular yarn brands.',
                icon: Palette,
                badge: 'Visual Inspo',
              },
              {
                title: 'Printable Project Planner',
                desc: 'Record yarn lot numbers, hook sizes, start dates, and custom notes in one spot.',
                icon: FileText,
                badge: 'Printable PDF',
              },
              {
                title: '30-Day Progress Tracker',
                desc: 'Daily check-in boxes that keep you motivated row by row without burning out.',
                icon: Calendar,
                badge: 'Motivation Tracker',
              },
            ].map((bonus, idx) => {
              const Icon = bonus.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FBF7F1] border border-[#E9E1D7] rounded-2xl p-5 flex flex-col justify-between hover:border-[#2F4A3A]/40 transition-all hover:shadow-xs group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#E9E1D7] text-[#2F4A3A] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold text-[#5B5B5B] bg-white border border-[#E9E1D7] px-2 py-0.5 rounded-full">
                        {bonus.badge}
                      </span>
                    </div>

                    <h3 className="font-fraunces text-base sm:text-lg font-semibold text-[#1F1F1F] mb-2 leading-snug">
                      {bonus.title}
                    </h3>
                    <p className="text-xs text-[#5B5B5B] leading-relaxed">
                      {bonus.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E9E1D7]/70 flex items-center gap-1.5 text-[11px] font-semibold text-[#2F4A3A]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Included Free</span>
                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 9) PRICING / OFFER (Single High-Converting Offer) */}
      {/* ========================================================================= */}
      <section id="pricing-offer" className="py-16 md:py-24 bg-[#FBF7F1] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto bg-[#FFFFFF] border-2 border-[#2F4A3A] rounded-3xl p-7 sm:p-12 shadow-xl text-center relative overflow-hidden">
            
            {/* Top highlight ribbon */}
            <div className="absolute top-0 inset-x-0 bg-[#2F4A3A] text-white py-1.5 text-xs font-semibold tracking-wider uppercase">
              COMPLETE DIGITAL BUNDLE • INSTANT DOWNLOAD
            </div>

            <div className="pt-4 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5B5B5B] bg-[#FBF7F1] border border-[#E9E1D7] px-3.5 py-1 rounded-full">
                Simple One-Time Purchase
              </span>
              
              <h2 className="font-fraunces text-3xl sm:text-4xl font-semibold text-[#1F1F1F] tracking-tight">
                Get the complete collection
              </h2>

              {/* Price Stack */}
              <div className="py-4">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xs sm:text-sm text-[#5B5B5B] line-through font-medium">$38 Value</span>
                  <span className="font-fraunces text-5xl sm:text-6xl font-bold text-[#1F1F1F] tracking-tight">$12</span>
                </div>
                <p className="text-xs text-[#5B5B5B] mt-1">One-time payment • Lifetime access to files</p>
              </div>
            </div>

            {/* Included Bullets */}
            <div className="max-w-md mx-auto my-6 space-y-3 text-left">
              {[
                'The full PDF guide',
                'All 7 blanket projects',
                'Planning + troubleshooting + finishing system',
                'All printables and bonuses',
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#FBF7F1] border border-[#E9E1D7]">
                  <div className="w-5 h-5 rounded-full bg-[#2F4A3A] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-semibold text-[#1F1F1F]">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Main Checkout CTA Button */}
            <div className="space-y-3 pt-2">
              <button
                id="pricing-primary-cta"
                onClick={handleCtaClick}
                className="w-full py-4 sm:py-5 px-8 rounded-2xl bg-[#2F4A3A] text-white font-semibold text-lg sm:text-xl shadow-md hover:bg-[#263C30] hover:shadow-lg active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-3 group"
              >
                <span>Get the PDF Guide ($12)</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-[#5B5B5B] font-medium">
                Digital product—no physical item shipped.
              </p>
              
              <div className="pt-2 text-[11px] text-[#5B5B5B]/80 flex items-center justify-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#2F4A3A]" />
                <span>Checkout link: set in code as CHECKOUT_URL constant.</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 10) FAQ (Accordion) */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFFFFF] border-y border-[#E9E1D7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-3.5 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="font-fraunces text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F1F1F] tracking-tight">
              FAQ
            </h2>
            <p className="text-sm text-[#5B5B5B]">
              Everything you need to know before getting started.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#E9E1D7] rounded-2xl bg-[#FBF7F1] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-fraunces text-base sm:text-lg font-semibold text-[#1F1F1F]">
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-white border border-[#E9E1D7] flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#2F4A3A] text-white border-[#2F4A3A]' : 'text-[#1F1F1F]'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-[#5B5B5B] leading-relaxed border-t border-[#E9E1D7]/60 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 11) FINAL CTA (Emotional Reward) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FBF7F1] relative text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="inline-flex items-center gap-2 p-2 px-4 rounded-full bg-white border border-[#E9E1D7] shadow-2xs text-xs font-semibold text-[#2F4A3A]">
            <Heart className="w-3.5 h-3.5 fill-[#2F4A3A]" /> Your Next Handmade Heirloom
          </div>

          <h2 className="font-fraunces text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F1F1F] tracking-tight max-w-2xl mx-auto">
            Choose a blanket you’ll be proud to finish.
          </h2>

          <p className="text-base sm:text-lg text-[#5B5B5B] max-w-xl mx-auto leading-relaxed">
            Beautiful crochet projects. Clear guidance. Less overwhelm.
          </p>

          <div className="pt-2">
            <button
              id="final-cta-btn"
              onClick={handleCtaClick}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-[#2F4A3A] text-white font-semibold text-lg sm:text-xl shadow-md hover:bg-[#263C30] hover:shadow-lg active:scale-[0.99] transition-all cursor-pointer group"
            >
              <span>Get the PDF Guide ($12)</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <p className="text-xs text-[#5B5B5B] pt-2">
            Instant digital access • 30-day satisfaction reassurance
          </p>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* FOOTER */}
      {/* ========================================================================= */}
      <footer className="py-10 bg-[#FFFFFF] border-t border-[#E9E1D7] text-xs text-[#5B5B5B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#2F4A3A] text-[#FBF7F1] flex items-center justify-center font-fraunces font-bold text-xs">
              7
            </span>
            <span className="font-fraunces font-semibold text-[#1F1F1F]">
              The 7-Day Crochet Blanket Collection
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#whats-inside" onClick={(e) => { e.preventDefault(); scrollToSection('whats-inside'); }} className="hover:text-[#1F1F1F] transition-colors">
              What's Inside
            </a>
            <a href="#the-blankets" onClick={(e) => { e.preventDefault(); scrollToSection('the-blankets'); }} className="hover:text-[#1F1F1F] transition-colors">
              Patterns
            </a>
            <Link to="/blog" className="hover:text-[#1F1F1F] transition-colors">
              Blog
            </Link>
            <a href="#pricing-offer" onClick={(e) => { e.preventDefault(); scrollToSection('pricing-offer'); }} className="hover:text-[#1F1F1F] transition-colors">
              Get the Guide ($12)
            </a>
          </div>

          <p className="text-[11px] text-[#5B5B5B]/80">
            © {new Date().getFullYear()} All rights reserved. Digital PDF download.
          </p>
        </div>
      </footer>


      {/* ========================================================================= */}
      {/* MOBILE STICKY BOTTOM CTA */}
      {/* ========================================================================= */}
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
              <span>Get the PDF Guide ($12)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
