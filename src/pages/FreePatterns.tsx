import React, { useEffect } from 'react';
import { Download } from 'lucide-react';

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
  title: string;
  description: string;
  driveId: string;
  image: string;
}

const PATTERNS: CrochetPattern[] = [
  {
    title: 'Ronnie the Halloween Cat',
    description: 'Cute Halloween cat amigurumi pattern (PDF).',
    driveId: '1d6JgXvtgQHSlFB193YGtFqq7snTCM8M3',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790186628/Ronnie_the_Halloween_Cat.jpg',
  },
  {
    title: 'Little Pumpkin Hat',
    description: 'Cozy pumpkin hat for fall/Halloween (PDF).',
    driveId: '1on2WLREfT_0OqpVZr2DjOJ8vomabUoEY',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790186754/Little_Pumpkin_Hat.jpg',
  },
  {
    title: 'Skulls Pullover (Lion Brand Pound Of Love)',
    description: 'Statement skulls pullover pattern (PDF).',
    driveId: '1bsYSZgOil4JvEXqvypWCy6j45kaC3wqh',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790186751/Skulls_Pullover.jpg',
  },
  {
    title: 'Edward the Cat',
    description: 'Cat amigurumi pattern (PDF).',
    driveId: '1L6a1g4nhNE62iXjGxIrMfZ1OMIDEHyb5',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790186609/Edward_the_Cat.jpg',
  },
  {
    title: 'Pumpkin',
    description: 'Halloween pumpkin crochet pattern (PDF).',
    driveId: '1kArtj9GTJis39sInAgkBYM1vsSMmg6Sn',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790186718/Pumpkin.jpg',
  },
  {
    title: 'Halloween Bats Ornament',
    description: 'Spooky bat ornament pattern for Halloween decor (PDF).',
    driveId: '1dPsItKyGgKNvgvOk59ndjcH-q_oI7f_-',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790186582/Halloween_Bats_Ornament.jpg',
  },
  {
    title: 'Candy Bowl (from scrap yarn)',
    description: 'Scrap-yarn candy bowl crochet pattern (PDF).',
    driveId: '1fv5FQ0pPoXK8NI8qqQDV5XiVWcvPNMjE',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790186656/Candy_Bowl.jpg',
  },
  {
    title: 'Spooky Pumpkin Jar Cozy',
    description: 'Pumpkin jar cozy pattern for spooky fall decor (PDF).',
    driveId: '1OaDLnSm95X2xau4UYNq3bdrR7o15PjvJ',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790186635/Spooky_Pumpkin_Jar_Cozy.jpg',
  },
  {
    title: 'Tomato',
    description: 'Cute tomato crochet pattern (PDF).',
    driveId: '1HdznVA-F6n6Irq9M5qbIvYayRVUBqduv',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790186608/Tomato.jpg',
  },
];

const downloadUrl = (driveId: string) =>
  `https://drive.google.com/uc?export=download&id=${driveId}`;

export default function FreePatterns() {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PATTERNS.map((pattern) => (
              <article
                key={pattern.driveId}
                className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#2F4A3A]/40 transition-all flex flex-col h-full"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={pattern.image}
                    alt={`${pattern.title} PDF pattern cover`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h2 className="font-fraunces text-lg font-semibold text-[#1F1F1F] mb-2 leading-snug">
                    {pattern.title}
                  </h2>
                  <p className="text-sm text-[#5B5B5B] leading-relaxed mb-5 flex-1">
                    {pattern.description}
                  </p>
                  <a
                    href={downloadUrl(pattern.driveId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#2F4A3A] text-white text-sm font-semibold hover:bg-[#263C30] transition-colors no-underline shadow-sm"
                  >
                    <Download className="w-4 h-4" /> Download PDF
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}