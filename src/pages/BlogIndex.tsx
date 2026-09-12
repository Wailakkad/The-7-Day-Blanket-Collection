import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Tag, Calculator, Eye, Baby, Heart, Layers, Search, Grid3X3, Scissors, Coffee, ShoppingBag } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Posts', icon: Grid3X3 },
  { id: 'crochet-stitches', label: 'Crochet Stitches', icon: BookOpen },
  { id: 'blanket', label: 'Blanket', icon: Layers },
  { id: 'baby-crochet', label: 'Baby Crochet', icon: Baby },
  { id: 'hats', label: 'Hats', icon: Scissors },
  { id: 'cups', label: 'Cups & Mugs', icon: Coffee },
  { id: 'bags', label: 'Bags & Pouches', icon: ShoppingBag },
] as const;

type CategoryId = typeof CATEGORIES[number]['id'];

const BLOG_POSTS = [
  {
    slug: 'crochet-blanket-stitches-guide',
    icon: BookOpen,
    title: 'Crochet Blanket Stitches: A Handy Guide',
    description: 'Basic, textured, lacy, and fun stitches—plus UK vs US terms and a finishable next step.',
    tag: 'Stitch Guide',
    category: 'crochet-stitches' as CategoryId,
    readTime: '8 min read',
    level: 'Beginner Friendly',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788183221/Section_Image_Basic_Crochet_Stitches.jpg',
  },
  {
    slug: 'crochet-blanket-sizes-yarn-yardage-chart',
    icon: Calculator,
    title: 'Crochet Blanket Sizes + Yarn Yardage Calculator',
    description: 'Use this crochet blanket size chart + yarn yardage estimates by yarn weight so you don\'t run out of yarn. Throw to king sizes included.',
    tag: 'Size Guide',
    category: 'blanket' as CategoryId,
    readTime: '10 min read',
    level: 'Beginner Friendly',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788939225/Folded_crochet_blanket_on_linen_2K_202609090928.jpg',
  },
  {
    slug: 'how-to-read-crochet-blanket-pattern',
    icon: Eye,
    title: 'How to Read ANY Crochet Blanket Pattern',
    description: 'Beginner cheat sheet with stitch multiples, pattern repeats, and stitch count fixes to stop frogging.',
    tag: 'Pattern Guide',
    category: 'blanket' as CategoryId,
    readTime: '12 min read',
    level: 'Beginner Friendly',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788939660/Crochet_pattern_and_yarn_arrange__2K_202609090930.jpg',
  },
  {
    slug: 'baby-blanket-crochet-stitch-patterns',
    icon: Baby,
    title: '25 Baby Blanket Crochet Stitch Patterns',
    description: 'Browse 25 baby blanket crochet stitch patterns with warmth + stretch ratings so you can pick the right stitch fast.',
    tag: 'Baby Blankets',
    category: 'baby-crochet' as CategoryId,
    readTime: '18 min read',
    level: 'Beginner Friendly',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788939227/Folded_handmade_crochet_blankets_2K_202609090929.jpg',
  },
  {
    slug: 'baby-blanket-crochet-complete-guide',
    icon: Heart,
    title: 'Baby Blanket Crochet: The Complete Start-to-Finish Guide',
    description: 'From yarn pick-up to gift-ready finish — supplies, sizing, 7-step build method, 10 border options, and a finishing checklist.',
    tag: 'Baby Blankets',
    category: 'baby-crochet' as CategoryId,
    readTime: '22 min read',
    level: 'Beginner Friendly',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788952216/Featured_Image_hero_banner_image.jpg',
  },
  {
    slug: 'crochet-stitch-patterns',
    icon: Layers,
    title: 'Crochet Stitch Patterns: 27 Textured Stitches That Look Expensive',
    description: 'Discover 27 textured crochet stitches, including easy crochet stitches for beginners and bold statement textures for blankets, scarves, and more.',
    tag: 'Stitch Guide',
    category: 'crochet-stitches' as CategoryId,
    readTime: '20 min read',
    level: 'Beginner Friendly',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788183176/Section_Image_Textured_Blanket_Stitches.jpg',
  },
  {
    slug: 'crochet-hats-free-pattern',
    icon: Scissors,
    title: 'Crochet Hats Free Pattern: 25 Free Beanie Crochet Pattern Ideas',
    description: 'Explore 25 free beanie crochet pattern ideas plus tips to choose the right yarn, fit, and texture.',
    tag: 'Pattern Guide',
    category: 'hats' as CategoryId,
    readTime: '25 min read',
    level: 'Beginner Friendly',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789041354/hero_banner_background_image.jpg',
  },
  {
    slug: 'crochet-cup-cozy-free-pattern',
    icon: Coffee,
    title: 'Crochet Cup Cozy Free Pattern: 21 Coffee Cup Cozy Crochet Pattern Free Ideas',
    description: 'A beginner-friendly roundup of 21 cute mug and cup cozy ideas plus yarn tips and fit tricks.',
    tag: 'Pattern Guide',
    category: 'cups' as CategoryId,
    readTime: '18 min read',
    level: 'Beginner Friendly',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789122089/herobannerimage.jpg',
  },
  {
    slug: 'crochet-phone-pouch-free-pattern',
    icon: ShoppingBag,
    title: 'Crochet Phone Pouch Free Pattern: Easy Crochet Phone Pouch That Fits Any Phone',
    description: 'A beginner-friendly crochet phone pouch free pattern with a simple sizing method, strap options, and easy add-ons like a flap and pocket.',
    tag: 'Pattern Guide',
    category: 'bags' as CategoryId,
    readTime: '15 min read',
    level: 'Beginner Friendly',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1789230980/HERO_top_banner_image_inside_article_hero_media.jpg',
  },
];

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query ||
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.tag.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-[#FBF7F1]">

      {/* Page Header */}
      <section className="py-16 md:py-20 bg-[#FFFFFF] border-b border-[#E9E1D7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-3.5 py-1 rounded-full">
            <BookOpen className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
            Crochet Blog
          </span>
          <h1 className="font-fraunces text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F1F1F] tracking-tight">
            Crochet Blog
          </h1>
          <p className="text-base sm:text-lg text-[#5B5B5B] max-w-xl mx-auto leading-relaxed">
            Beginner-friendly guides that help you choose, plan, crochet, and finish.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 md:py-10 border-b border-[#E9E1D7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-5">

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5B5B5B]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#E9E1D7] text-sm text-[#1F1F1F] placeholder:text-[#5B5B5B]/60 focus:outline-none focus:border-[#2F4A3A]/50 focus:ring-1 focus:ring-[#2F4A3A]/20 transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                const count = cat.id === 'all'
                  ? BLOG_POSTS.length
                  : BLOG_POSTS.filter((p) => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#2F4A3A] text-white shadow-sm'
                        : 'bg-[#FFFFFF] text-[#5B5B5B] border border-[#E9E1D7] hover:border-[#2F4A3A]/40 hover:text-[#2F4A3A]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {cat.label}
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-[#E4ECE7] text-[#2F4A3A]'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-fraunces text-xl font-medium text-[#5B5B5B] mb-2">
                No articles found
              </p>
              <p className="text-sm text-[#5B5B5B]/70">
                Try a different search or category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

              {filteredPosts.map((post) => {
                const Icon = post.icon;
                return (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="block bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#2F4A3A]/40 transition-all no-underline group h-full"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-2.5 py-1 rounded-full shadow-sm">
                          {post.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 sm:p-7 flex flex-col h-full">
                      <h2 className="font-fraunces text-xl sm:text-2xl font-semibold text-[#1F1F1F] mb-3 group-hover:text-[#2F4A3A] transition-colors leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-sm text-[#5B5B5B] leading-relaxed mb-5 flex-1">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-[#E9E1D7]/60">
                        <div className="flex items-center gap-3 text-xs text-[#5B5B5B]">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {post.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Tag className="w-3 h-3" /> {post.level}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F4A3A] group-hover:gap-2.5 transition-all">
                          Read <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}

            </div>
          )}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 md:py-20 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-3xl p-8 sm:p-12">
            <p className="font-fraunces text-xl sm:text-2xl font-semibold text-[#2F4A3A] mb-3">
              Want 7 finishable blanket patterns?
            </p>
            <p className="text-sm text-[#5B5B5B] mb-6 max-w-md mx-auto">
              Put these stitches into practice with our complete collection of beginner-friendly blanket patterns.
            </p>
            <Link
              to="/store/7-day-blanket-collection"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2F4A3A] text-white font-semibold text-sm hover:bg-[#263C30] transition-colors no-underline shadow-sm"
            >
              Discover the Blanket Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
