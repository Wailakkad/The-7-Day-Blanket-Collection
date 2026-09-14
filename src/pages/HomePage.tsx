import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Layers,
  Ruler,
  Palette,
  FileText,
  Calendar,
  Clock,
  Tag,
} from 'lucide-react';

const CHECKOUT_URL = 'https://payhip.com/b/OPqsZ';

const FEATURED_POSTS = [
  {
    slug: 'crochet-blanket-stitches-guide',
    title: 'Crochet Blanket Stitches: A Handy Guide',
    description: 'Basic, textured, lacy, and fun stitches—plus UK vs US terms.',
    tag: 'Stitch Guide',
    readTime: '8 min',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788183221/Section_Image_Basic_Crochet_Stitches.jpg',
  },
  {
    slug: 'crochet-blanket-sizes-yarn-yardage-chart',
    title: 'Crochet Blanket Sizes + Yarn Yardage Calculator',
    description: 'Size chart + yarn yardage estimates so you don\'t run out of yarn.',
    tag: 'Size Guide',
    readTime: '10 min',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788939225/Folded_crochet_blanket_on_linen_2K_202609090928.jpg',
  },
  {
    slug: 'how-to-read-crochet-blanket-pattern',
    title: 'How to Read ANY Crochet Blanket Pattern',
    description: 'Beginner cheat sheet with stitch multiples and pattern repeats.',
    tag: 'Pattern Guide',
    readTime: '12 min',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788939660/Crochet_pattern_and_yarn_arrange__2K_202609090930.jpg',
  },
  {
    slug: 'baby-blanket-crochet-stitch-patterns',
    title: '25 Baby Blanket Crochet Stitch Patterns',
    description: 'Browse 25 baby blanket stitches with warmth + stretch ratings.',
    tag: 'Baby Blankets',
    readTime: '18 min',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788939227/Folded_handmade_crochet_blankets_2K_202609090929.jpg',
  },
  {
    slug: 'crochet-stitch-patterns',
    title: '27 Textured Stitches That Look Expensive',
    description: 'Discover 27 textured crochet stitches for blankets, scarves, and more.',
    tag: 'Stitch Guide',
    readTime: '20 min',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788183176/Section_Image_Textured_Blanket_Stitches.jpg',
  },
  {
    slug: 'crochet-hats-free-pattern',
    title: '25 Free Beanie Crochet Pattern Ideas',
    description: 'Explore 25 free beanie patterns plus yarn, fit, and texture tips.',
    tag: 'Pattern Guide',
    readTime: '25 min',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789041354/hero_banner_background_image.jpg',
  },
];

const PRODUCT_FEATURES = [
  { icon: Layers, text: '7 beginner-friendly blanket patterns' },
  { icon: Ruler, text: 'Sizing + yarn guidance' },
  { icon: Palette, text: 'Straight edges routine' },
  { icon: FileText, text: 'Borders + finishing checklist' },
  { icon: Calendar, text: 'Printable planner + progress tracker' },
];

export default function HomePage() {
  return (
    <div className="bg-[#FBF7F1]">

      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-3.5 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F4A3A] animate-pulse" />
                Beginner-Friendly Crochet
              </span>
              <h1 className="font-fraunces text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-[#1F1F1F] tracking-tight leading-[1.1]">
                Finish your first blanket with confidence.
              </h1>
              <p className="text-lg text-[#5B5B5B] leading-relaxed max-w-lg">
                7 beginner-friendly crochet blanket patterns with step-by-step guidance on sizing, yarn, straight edges, and finishing.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/store/7-day-blanket-collection"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#2F4A3A] text-white font-semibold text-sm hover:bg-[#263C30] transition-colors no-underline shadow-md"
                >
                  See the Collection <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#FFFFFF] border border-[#E9E1D7] text-[#1F1F1F] font-semibold text-sm hover:bg-[#F4ECE2] transition-colors no-underline"
                >
                  Read the Blog
                </Link>
              </div>
            </motion.div>

            {/* Right — Product Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative"
            >
              <div className="relative bg-[#FFFFFF] border border-[#E9E1D7] rounded-3xl p-4 shadow-xl">
                <img
                  src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788002333/The_Beginner_Classic.jpg"
                  alt="7-Day Crochet Blanket Collection"
                  className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-2xl"
                />
                <div className="absolute -top-3 -right-3 bg-[#2F4A3A] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  PDF Digital Guide
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#E4ECE7] rounded-full blur-2xl opacity-60" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 bg-[#FFFFFF] border-y border-[#E9E1D7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Finishable system (not just patterns)',
              'Yarn + size guidance included',
              'Straight edges + counting help',
              'Borders + finishing checklist',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-[#5B5B5B]">
                <CheckCircle2 className="w-4 h-4 text-[#2F4A3A] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From the Blog — Auto-Scroll Carousel */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-3.5 py-1 rounded-full">
              <BookOpen className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
              From the Blog
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-semibold text-[#1F1F1F] tracking-tight">
              Learn before you crochet
            </h2>
            <p className="text-base text-[#5B5B5B] max-w-xl mx-auto">
              Beginner-friendly guides that help you choose, plan, and finish your blanket.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="blog-carousel group">
          <div className="blog-carousel-track">
            {[...FEATURED_POSTS, ...FEATURED_POSTS].map((post, i) => (
              <Link
                key={`${post.slug}-${i}`}
                to={`/blog/${post.slug}`}
                className="blog-carousel-card"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-2.5 py-1 rounded-full shadow-sm">
                      {post.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col h-full">
                  <h3 className="font-fraunces text-base sm:text-lg font-semibold text-[#1F1F1F] mb-2 group-hover:text-[#2F4A3A] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#5B5B5B] leading-relaxed mb-4 flex-1 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#E9E1D7]/60">
                    <div className="flex items-center gap-2 text-xs text-[#5B5B5B]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F4A3A] group-hover:gap-2.5 transition-all">
                      Read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#2F4A3A] text-white font-semibold text-sm hover:bg-[#263C30] transition-colors no-underline shadow-md"
          >
            See all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-16 md:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Product Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative bg-[#FBF7F1] border border-[#E9E1D7] rounded-3xl p-4 shadow-lg">
                <img
                  src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1788183101/Next_Step_CTA_Section_Image_product_mockup_7_blanket_patterns_included.jpg"
                  alt="7-Day Crochet Blanket Collection — all 7 patterns"
                  className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-2xl"
                />
                <div className="absolute -top-3 -right-3 bg-[#2F4A3A] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  $12 • Instant PDF
                </div>
              </div>
            </motion.div>

            {/* Right — Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-6"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-3.5 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                The Collection
              </span>
              <h2 className="font-fraunces text-3xl sm:text-4xl font-semibold text-[#1F1F1F] tracking-tight leading-tight">
                The 7-Day Crochet Blanket Collection
              </h2>
              <p className="text-base text-[#5B5B5B] leading-relaxed">
                7 beginner-friendly blanket patterns with a simple system to choose, plan, crochet, and finish with confidence.
              </p>
              <div className="space-y-3">
                {PRODUCT_FEATURES.map((feat, i) => {
                  const Icon = feat.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#2F4A3A]/10 text-[#2F4A3A] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-[#1F1F1F] font-medium">{feat.text}</span>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  to="/store/7-day-blanket-collection"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#2F4A3A] text-white font-semibold text-sm hover:bg-[#263C30] transition-colors no-underline shadow-md"
                >
                  View Product Details <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={CHECKOUT_URL}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#FFFFFF] border border-[#E9E1D7] text-[#1F1F1F] font-semibold text-sm hover:bg-[#F4ECE2] transition-colors no-underline"
                >
                  Buy Now — $12
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
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
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/store/7-day-blanket-collection"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-[#2F4A3A] font-semibold text-sm sm:text-base hover:bg-[#FBF7F1] transition-colors no-underline shadow-md"
              >
                Explore the Collection <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/20 transition-colors no-underline"
              >
                Read the Blog
              </Link>
            </div>
            <p className="text-xs text-[#CCD9D0]/70 mt-6">
              Instant digital access • 30-day satisfaction reassurance
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
