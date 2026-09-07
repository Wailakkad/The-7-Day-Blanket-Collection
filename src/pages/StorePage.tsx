import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';

const PRODUCTS = [
  {
    slug: '7-day-blanket-collection',
    name: 'The 7-Day Crochet Blanket Collection',
    tagline: '7 beginner-friendly blanket patterns + a simple system to finish with confidence.',
    price: '$12',
    originalPrice: '$38',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1788183101/Next_Step_CTA_Section_Image_product_mockup_7_blanket_patterns_included.jpg',
    features: [
      '7 beginner-friendly blanket patterns',
      'Sizing + yarn guidance',
      'Straight edges routine',
      'Borders + finishing checklist',
      'Printable planner + progress tracker',
    ],
    badge: 'PDF Digital Guide',
    tag: 'Complete Bundle',
  },
];

export default function StorePage() {
  return (
    <div className="bg-[#FBF7F1]">

      {/* Page Header */}
      <section className="py-16 md:py-20 bg-[#FFFFFF] border-b border-[#E9E1D7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-3.5 py-1 rounded-full">
            <ShoppingBag className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
            Store
          </span>
          <h1 className="font-fraunces text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F1F1F] tracking-tight">
            Our Products
          </h1>
          <p className="text-base sm:text-lg text-[#5B5B5B] max-w-xl mx-auto leading-relaxed">
            Digital guides and patterns to help you crochet beautiful blankets with confidence.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, i) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  to={`/store/${product.slug}`}
                  className="block bg-[#FFFFFF] border border-[#E9E1D7] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:border-[#2F4A3A]/40 transition-all no-underline group h-full"
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 sm:h-64 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-[#2F4A3A] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                        {product.badge}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 backdrop-blur-sm text-[#2F4A3A] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md border border-[#E9E1D7]">
                        {product.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7">
                    <h2 className="font-fraunces text-xl sm:text-2xl font-semibold text-[#1F1F1F] mb-2 group-hover:text-[#2F4A3A] transition-colors leading-snug">
                      {product.name}
                    </h2>
                    <p className="text-sm text-[#5B5B5B] leading-relaxed mb-5">
                      {product.tagline}
                    </p>

                    {/* Features */}
                    <div className="space-y-2.5 mb-6">
                      {product.features.map((feat, j) => (
                        <div key={j} className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#2F4A3A] shrink-0" />
                          <span className="text-sm text-[#1F1F1F]">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price + CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#E9E1D7]/60">
                      <div className="flex items-baseline gap-2">
                        <span className="font-fraunces text-2xl font-bold text-[#2F4A3A]">
                          {product.price}
                        </span>
                        <span className="text-sm text-[#5B5B5B] line-through">
                          {product.originalPrice}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F4A3A] group-hover:gap-2.5 transition-all">
                        View Details <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog CTA */}
      <section className="py-16 md:py-20 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-3xl p-8 sm:p-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F4A3A] bg-white/60 px-3.5 py-1 rounded-full inline-block mb-4">
              <BookOpen className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
              From the Blog
            </span>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-3">
              Want to learn before you buy?
            </h2>
            <p className="text-base text-[#5B5B5B] mb-6 max-w-lg mx-auto">
              Read our beginner-friendly guides on stitches, sizing, and finishing techniques.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2F4A3A] text-white font-semibold text-sm hover:bg-[#263C30] transition-colors no-underline shadow-sm"
            >
              Visit the Blog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
