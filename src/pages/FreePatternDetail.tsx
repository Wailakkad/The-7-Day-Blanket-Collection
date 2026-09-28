import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Download,
  Eye,
  CheckCircle2,
  FileText,
  Printer,
  Clock,
  Sparkles,
} from 'lucide-react';
import { PATTERNS, CATEGORIES, downloadUrl } from './FreePatterns';

const STEPS = [
  {
    icon: Eye,
    title: '1. Preview the details',
    text: 'Check the pattern details below so you know exactly what you are downloading.',
  },
  {
    icon: Download,
    title: '2. Download the PDF',
    text: 'Click the download button — the free PDF opens instantly from Google Drive.',
  },
  {
    icon: Printer,
    title: '3. Print or save it',
    text: 'Save it to your device or print it at home in A4 / US Letter size.',
  },
];

export default function FreePatternDetail() {
  const { slug } = useParams<{ slug: string }>();
  const pattern = PATTERNS.find((p) => p.slug === slug);
  const category = pattern ? CATEGORIES.find((c) => c.id === pattern.category) : undefined;
  const CategoryIcon = category?.icon;

  const related = pattern
    ? PATTERNS.filter((p) => p.slug !== pattern.slug && p.category === pattern.category)
    : [];

  useEffect(() => {
    if (!pattern) return;
    const title = `${pattern.title} — Free Crochet Pattern (PDF)`;
    const description = `${pattern.description} Download this free crochet pattern PDF instantly.`;
    document.title = title;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, [pattern]);

  if (!pattern) {
    return (
      <main className="bg-[#FBF7F1]">
        <section className="py-24 md:py-32">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <h1 className="font-fraunces text-3xl sm:text-4xl font-semibold text-[#1F1F1F] tracking-tight">
              Pattern not found
            </h1>
            <p className="text-base text-[#5B5B5B]">
              This free pattern does not exist or has been moved.
            </p>
            <Link
              to="/free-patterns"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#2F4A3A] text-white font-semibold text-sm hover:bg-[#263C30] transition-colors no-underline shadow-md"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Free Patterns
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-[#FBF7F1]">
      {/* Breadcrumb */}
      <section className="py-4 bg-[#FFFFFF] border-b border-[#E9E1D7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#5B5B5B]">
            <Link to="/free-patterns" className="hover:text-[#2F4A3A] transition-colors no-underline text-[#5B5B5B]">
              Free Patterns
            </Link>
            <span>/</span>
            <span className="text-[#1F1F1F] font-medium">{pattern.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Left — Cover image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative bg-[#FFFFFF] border border-[#E9E1D7] rounded-3xl p-4 shadow-xl">
                {pattern.image ? (
                  <img
                    src={pattern.image}
                    alt={`${pattern.title} free crochet pattern cover`}
                    className="w-full h-80 sm:h-96 md:h-[28rem] object-cover rounded-2xl"
                  />
                ) : (
                  <div className="w-full h-80 sm:h-96 md:h-[28rem] flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#E4ECE7] to-[#FFFFFF] rounded-2xl p-6 text-center">
                    {CategoryIcon && <CategoryIcon className="w-12 h-12 text-[#2F4A3A]/60" />}
                    <span className="font-fraunces text-xl font-semibold text-[#2F4A3A]">
                      {pattern.title}
                    </span>
                  </div>
                )}
                <div className="absolute -top-3 -right-3 bg-[#2F4A3A] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  Free PDF
                </div>
              </div>
            </motion.div>

            {/* Right — Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-6"
            >
              {category && (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-3.5 py-1.5 rounded-full">
                  {CategoryIcon && <CategoryIcon className="w-3.5 h-3.5" />}
                  {category.label}
                </span>
              )}

              <h1 className="font-fraunces text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-[#1F1F1F] tracking-tight leading-[1.1]">
                {pattern.title}
              </h1>

              <p className="text-lg text-[#5B5B5B] leading-relaxed">{pattern.description}</p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: FileText, label: 'Format', value: 'PDF Download' },
                  { icon: Sparkles, label: 'Price', value: '100% Free' },
                  { icon: Clock, label: 'Delivery', value: 'Instant Access' },
                  { icon: Printer, label: 'Printing', value: 'A4 & US Letter' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl px-4 py-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#2F4A3A]/10 text-[#2F4A3A] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider text-[#5B5B5B] font-semibold">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-[#1F1F1F] truncate">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* What's inside */}
              <div className="space-y-3">
                <h2 className="font-fraunces text-lg font-semibold text-[#1F1F1F]">
                  What's inside this pattern
                </h2>
                <ul className="space-y-2.5">
                  {pattern.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2F4A3A] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#1F1F1F] leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={downloadUrl(pattern.driveId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#2F4A3A] text-white font-semibold text-sm hover:bg-[#263C30] transition-colors no-underline shadow-md"
                >
                  <Download className="w-4 h-4" /> Download Free PDF
                </a>
                <Link
                  to="/free-patterns"
                  className="inline-flex flex-1 items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#FFFFFF] border border-[#E9E1D7] text-[#1F1F1F] font-semibold text-sm hover:bg-[#F4ECE2] transition-colors no-underline"
                >
                  <Eye className="w-4 h-4" /> All Free Patterns
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to download */}
      <section className="py-14 md:py-20 bg-[#FFFFFF] border-y border-[#E9E1D7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-3.5 py-1 rounded-full">
              How it works
            </span>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
              Download in 3 simple steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="bg-[#FBF7F1] border border-[#E9E1D7] rounded-2xl p-6 text-center"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#2F4A3A] text-white flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#5B5B5B] leading-relaxed">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related patterns */}
      {related.length > 0 && (
        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-3.5 py-1 rounded-full">
                Keep crocheting
              </span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                More {category?.label} patterns
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => {
                const RelCat = CATEGORIES.find((c) => c.id === rel.category)?.icon;
                return (
                  <article
                    key={rel.slug}
                    className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#2F4A3A]/40 transition-all flex flex-col h-full"
                  >
                    <div className="aspect-[4/5] overflow-hidden bg-[#E4ECE7]">
                      {rel.image ? (
                        <img
                          src={rel.image}
                          alt={`${rel.title} PDF pattern cover`}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          {RelCat && <RelCat className="w-10 h-10 text-[#2F4A3A]/60" />}
                        </div>
                      )}
                    </div>
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <h3 className="font-fraunces text-lg font-semibold text-[#1F1F1F] mb-2 leading-snug">
                        {rel.title}
                      </h3>
                      <p className="text-sm text-[#5B5B5B] leading-relaxed mb-5 flex-1">
                        {rel.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <a
                          href={downloadUrl(rel.driveId)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#2F4A3A] text-white text-sm font-semibold hover:bg-[#263C30] transition-colors no-underline shadow-sm"
                        >
                          <Download className="w-4 h-4" /> Download PDF
                        </a>
                        <Link
                          to={`/free-patterns/${rel.slug}`}
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

            <div className="mt-10 text-center">
              <Link
                to="/free-patterns"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#2F4A3A] text-white font-semibold text-sm hover:bg-[#263C30] transition-colors no-underline shadow-md"
              >
                Browse all free patterns <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
