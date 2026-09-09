import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Tag, Calculator, Eye } from 'lucide-react';

const BLOG_POSTS = [
  {
    slug: 'crochet-blanket-stitches-guide',
    icon: BookOpen,
    title: 'Crochet Blanket Stitches: A Handy Guide',
    description: 'Basic, textured, lacy, and fun stitches—plus UK vs US terms and a finishable next step.',
    tag: 'Stitch Guide',
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
    readTime: '10 min read',
    level: 'Beginner Friendly',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788796123/1.jpg',
  },
  {
    slug: 'how-to-read-crochet-blanket-pattern',
    icon: Eye,
    title: 'How to Read ANY Crochet Blanket Pattern',
    description: 'Beginner cheat sheet with stitch multiples, pattern repeats, and stitch count fixes to stop frogging.',
    tag: 'Pattern Guide',
    readTime: '12 min read',
    level: 'Beginner Friendly',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788796123/20.jpg',
  },
];

export default function BlogIndex() {
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

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

            {BLOG_POSTS.map((post) => {
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

            {/* Placeholder for future posts */}
            <div className="flex items-center justify-center bg-[#E4ECE7]/50 border border-dashed border-[#CCD9D0] rounded-2xl p-6 min-h-[280px]">
              <div className="text-center">
                <p className="font-fraunces text-lg font-medium text-[#5B5B5B] mb-2">
                  More guides coming soon
                </p>
                <p className="text-sm text-[#5B5B5B]/70">
                  Yarn selection, sizing, borders, and more.
                </p>
              </div>
            </div>

          </div>
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
