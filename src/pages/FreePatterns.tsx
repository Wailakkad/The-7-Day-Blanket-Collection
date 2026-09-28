import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Ghost, Snowflake, LayoutGrid, Eye } from 'lucide-react';

export const metadata = {
  title: 'Free Crochet Patterns Library | The 7-Day Crochet Blanket Collection',
  description: 'Download free crochet PDF patterns including Halloween amigurumi, ornaments, wearables, and cozy projects.',
  openGraph: {
    title: 'Free Crochet Patterns Library | The 7-Day Crochet Blanket Collection',
    description: 'Download free crochet PDF patterns including Halloween amigurumi, ornaments, wearables, and cozy projects.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Crochet Patterns Library | The 7-Day Crochet Blanket Collection',
    description: 'Download free crochet PDF patterns including Halloween amigurumi, ornaments, wearables, and cozy projects.',
  },
};

interface CrochetPattern {
  slug: string;
  title: string;
  description: string;
  driveId: string;
  image?: string;
  category: CategoryId;
  details: string[];
}

export type CategoryId = 'halloween' | 'winter';

interface Category {
  id: CategoryId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const CATEGORIES: Category[] = [
  { id: 'halloween', label: 'Halloween Crochet', icon: Ghost },
  { id: 'winter', label: 'Winter Crochet', icon: Snowflake },
];

export const PATTERNS: CrochetPattern[] = [
  {
    slug: 'ronnie-the-halloween-cat',
    title: 'Ronnie the Halloween Cat',
    description: 'Cute Halloween cat amigurumi pattern (PDF).',
    driveId: '1d6JgXvtgQHSlFB193YGtFqq7snTCM8M3',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790186628/Ronnie_the_Halloween_Cat.jpg',
    category: 'halloween',
    details: [
      'Amigurumi-style Halloween cat you can crochet in one sitting',
      'Great stash-busting project for spooky season decor and gifting',
      'Written in US crochet terms with a free PDF download',
      'Instant access — no sign-up or payment needed',
    ],
  },
  {
    slug: 'little-pumpkin-hat',
    title: 'Little Pumpkin Hat',
    description: 'Cozy pumpkin hat for fall/Halloween (PDF).',
    driveId: '1on2WLREfT_0OqpVZr2DjOJ8vomabUoEY',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790186754/Little_Pumpkin_Hat.jpg',
    category: 'halloween',
    details: [
      'Playful pumpkin-inspired hat for fall and Halloween wear',
      'A quick make that works great as a photo prop or costume piece',
      'Written in US crochet terms with a free PDF download',
      'Instant access — no sign-up or payment needed',
    ],
  },
  {
    slug: 'skulls-pullover',
    title: 'Skulls Pullover (Lion Brand Pound Of Love)',
    description: 'Statement skulls pullover pattern (PDF).',
    driveId: '1bsYSZgOil4JvEXqvypWCy6j45kaC3wqh',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790186751/Skulls_Pullover.jpg',
    category: 'halloween',
    details: [
      'Bold statement pullover designed for Lion Brand Pound of Love yarn',
      'A wearable Halloween piece you can style all season long',
      'Written in US crochet terms with a free PDF download',
      'Instant access — no sign-up or payment needed',
    ],
  },
  {
    slug: 'edward-the-cat',
    title: 'Edward the Cat',
    description: 'Cat amigurumi pattern (PDF).',
    driveId: '1L6a1g4nhNE62iXjGxIrMfZ1OMIDEHyb5',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790186609/Edward_the_Cat.jpg',
    category: 'halloween',
    details: [
      'Classic cat amigurumi with plenty of character',
      'Perfect first amigurumi project for confident beginners',
      'Written in US crochet terms with a free PDF download',
      'Instant access — no sign-up or payment needed',
    ],
  },
  {
    slug: 'pumpkin',
    title: 'Pumpkin',
    description: 'Halloween pumpkin crochet pattern (PDF).',
    driveId: '1kArtj9GTJis39sInAgkBYM1vsSMmg6Sn',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790186718/Pumpkin.jpg',
    category: 'halloween',
    details: [
      'Stuffed crochet pumpkin for effortless autumn and Halloween decor',
      'Works beautifully as a table centerpiece or shelf accent',
      'Written in US crochet terms with a free PDF download',
      'Instant access — no sign-up or payment needed',
    ],
  },
  {
    slug: 'halloween-bats-ornament',
    title: 'Halloween Bats Ornament',
    description: 'Spooky bat ornament pattern for Halloween decor (PDF).',
    driveId: '1dPsItKyGgKNvgvOk59ndjcH-q_oI7f_-',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790186582/Halloween_Bats_Ornament.jpg',
    category: 'halloween',
    details: [
      'Spooky bat ornaments for garlands, trees, and party decor',
      'Small and fast — make a whole swarm from scrap yarn',
      'Written in US crochet terms with a free PDF download',
      'Instant access — no sign-up or payment needed',
    ],
  },
  {
    slug: 'candy-bowl',
    title: 'Candy Bowl (from scrap yarn)',
    description: 'Scrap-yarn candy bowl crochet pattern (PDF).',
    driveId: '1fv5FQ0pPoXK8NI8qqQDV5XiVWcvPNMjE',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790186656/Candy_Bowl.jpg',
    category: 'halloween',
    details: [
      'Use up leftover scrap yarn in one practical project',
      'A cute bowl for candy, keys, or small Halloween treats',
      'Written in US crochet terms with a free PDF download',
      'Instant access — no sign-up or payment needed',
    ],
  },
  {
    slug: 'spooky-pumpkin-jar-cozy',
    title: 'Spooky Pumpkin Jar Cozy',
    description: 'Pumpkin jar cozy pattern for spooky fall decor (PDF).',
    driveId: '1OaDLnSm95X2xau4UYNq3bdrR7o15PjvJ',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790186635/Spooky_Pumpkin_Jar_Cozy.jpg',
    category: 'halloween',
    details: [
      'Turns an ordinary jar into a spooky pumpkin candle holder',
      'A quick upcycle project for fall tables and mantels',
      'Written in US crochet terms with a free PDF download',
      'Instant access — no sign-up or payment needed',
    ],
  },
  {
    slug: 'tomato',
    title: 'Tomato',
    description: 'Cute tomato crochet pattern (PDF).',
    driveId: '1HdznVA-F6n6Irq9M5qbIvYayRVUBqduv',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790186608/Tomato.jpg',
    category: 'halloween',
    details: [
      'Cute amigurumi tomato — a fun kitchen or market bag charm',
      'Small, quick, and beginner-friendly amigurumi',
      'Written in US crochet terms with a free PDF download',
      'Instant access — no sign-up or payment needed',
    ],
  },
  {
    slug: 'newborn-bennett-beanie',
    title: 'Newborn Bennett Beanie',
    description: 'Sweet newborn beanie crochet pattern for winter (PDF).',
    driveId: '1J3X99qIMwxL2rIO9MQHBLeeCQBSr-pU_',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790591096/Newborn_crochet_beanie_cover_img.jpg',
    category: 'winter',
    details: [
      'Sweet winter beanie sized for newborns',
      'A fast, thoughtful handmade gift for baby showers',
      'Written in US crochet terms with a free PDF download',
      'Instant access — no sign-up or payment needed',
    ],
  },
  {
    slug: 'fingerless-gloves',
    title: 'Fingerless Gloves',
    description: 'Cozy fingerless gloves crochet free pattern for winter (PDF).',
    driveId: '18H3mzHDcBzBoPkU-AQ1pMZOrl5zWkx-4',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790591107/Crochet_fingerless_gloves_cover_image.jpg',
    category: 'winter',
    details: [
      'Cozy fingerless gloves that keep your hands warm and free',
      'Practical winter make for commuting, office, and gifting',
      'Written in US crochet terms with a free PDF download',
      'Instant access — no sign-up or payment needed',
    ],
  },
];

export const downloadUrl = (driveId: string) =>
  `https://drive.google.com/uc?export=download&id=${driveId}`;

export default function FreePatterns() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all'>('all');

  useEffect(() => {
    document.title = metadata.title;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', metadata.description);
  }, []);

  const filteredPatterns =
    activeCategory === 'all'
      ? PATTERNS
      : PATTERNS.filter((pattern) => pattern.category === activeCategory);

  const categoryCount = (id: CategoryId | 'all') =>
    id === 'all'
      ? PATTERNS.length
      : PATTERNS.filter((pattern) => pattern.category === id).length;

  const FILTERS: { id: CategoryId | 'all'; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'all', label: 'All Patterns', icon: LayoutGrid },
    ...CATEGORIES.map((cat) => ({ id: cat.id, label: cat.label, icon: cat.icon })),
  ];

  return (
    <main className="bg-[#FBF7F1]">
      {/* Page Header */}
      <section className="py-16 md:py-20 bg-[#FFFFFF] border-b border-[#E9E1D7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-3.5 py-1 rounded-full">
            <Download className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
            Free Library
          </span>
          <h1 className="font-fraunces text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F1F1F] tracking-tight">
            Free Crochet Patterns
          </h1>
          <p className="text-base sm:text-lg text-[#5B5B5B] max-w-xl mx-auto leading-relaxed">
            Browse the free pattern library and download the PDF instantly.
          </p>
        </div>
      </section>

      {/* Patterns Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
            {FILTERS.map((filter) => {
              const Icon = filter.icon;
              const isActive = activeCategory === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveCategory(filter.id)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#2F4A3A] border-[#2F4A3A] text-white shadow-md'
                      : 'bg-[#FFFFFF] border-[#E9E1D7] text-[#5B5B5B] hover:text-[#2F4A3A] hover:border-[#2F4A3A]/40'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {filter.label}
                  <span
                    className={`text-[11px] font-bold px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-[#E4ECE7] text-[#2F4A3A]'
                    }`}
                  >
                    {categoryCount(filter.id)}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPatterns.map((pattern) => {
              const category = CATEGORIES.find((cat) => cat.id === pattern.category);
              const CategoryIcon = category?.icon;
              return (
                <article
                  key={pattern.driveId}
                  className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#2F4A3A]/40 transition-all flex flex-col h-full"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-[#E4ECE7]">
                    {pattern.image ? (
                      <img
                        src={pattern.image}
                        alt={`${pattern.title} PDF pattern cover`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#E4ECE7] to-[#FFFFFF] p-6 text-center">
                        {CategoryIcon && <CategoryIcon className="w-10 h-10 text-[#2F4A3A]/60" />}
                        <span className="font-fraunces text-lg font-semibold text-[#2F4A3A] leading-snug">
                          {pattern.title}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    {category && (
                      <span className="inline-flex items-center gap-1.5 self-start text-[10px] font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-2.5 py-1 rounded-full mb-3">
                        {CategoryIcon && <CategoryIcon className="w-3 h-3" />}
                        {category.label}
                      </span>
                    )}
                    <h2 className="font-fraunces text-lg font-semibold text-[#1F1F1F] mb-2 leading-snug">
                      {pattern.title}
                    </h2>
                    <p className="text-sm text-[#5B5B5B] leading-relaxed mb-5 flex-1">
                      {pattern.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <a
                        href={downloadUrl(pattern.driveId)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#2F4A3A] text-white text-sm font-semibold hover:bg-[#263C30] transition-colors no-underline shadow-sm"
                      >
                        <Download className="w-4 h-4" /> Download PDF
                      </a>
                      <Link
                        to={`/free-patterns/${pattern.slug}`}
                        className="inline-flex flex-1 items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E9E1D7] text-[#2F4A3A] text-sm font-semibold hover:bg-[#F4ECE2] hover:border-[#2F4A3A]/40 transition-colors no-underline"
                      >
                        <Eye className="w-4 h-4" /> Details
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredPatterns.length === 0 && (
            <div className="text-center py-16">
              <p className="text-sm text-[#5B5B5B]">No patterns in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}