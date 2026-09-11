import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, X, ZoomIn, Scissors, Clock, Star } from 'lucide-react';

/* ─── SVG Image Components ─── */

function HeroCupCozy() {
  return (
    <svg viewBox="0 0 800 400" className="w-full" style={{ background: '#F5F0E8' }}>
      <defs>
        <linearGradient id="hc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E9E1D7" />
          <stop offset="100%" stopColor="#FBF7F1" />
        </linearGradient>
      </defs>
      <rect width="800" height="400" fill="url(#hc-bg)" />
      {/* Cup */}
      <path d="M280,80 L260,320 Q260,340 290,340 L510,340 Q540,340 540,320 L520,80 Z" fill="#D4C5B0" />
      <ellipse cx="400" cy="80" rx="120" ry="25" fill="#B8A898" />
      <ellipse cx="400" cy="80" rx="100" ry="18" fill="#FFFFFF" opacity="0.25" />
      {/* Cozy */}
      <path d="M270,110 L255,300 Q255,310 275,310 L525,310 Q545,310 545,300 L530,110 Z" fill="#2F4A3A" opacity="0.85" />
      {/* Stitch texture */}
      {[0,1,2,3,4,5,6,7,8,9,10,11,12,13].map(row => [0,1,2,3,4,5,6,7,8,9,10,11].map(col => (
        <rect key={`st-${row}-${col}`} x={272+col*22} y={115+row*14} width={18} height={10} rx={3} fill="#4A7A5E" opacity={0.5 + (row+col)%2*0.2} />
      )))}
      {/* Button */}
      <circle cx="540" cy="210" r="14" fill="#2F4A3A" stroke="#FBF7F1" strokeWidth="3" />
      <circle cx="540" cy="210" r="4" fill="#FBF7F1" />
      {/* Steam */}
      <path d="M350,60 Q340,30 355,10" stroke="#B8A898" strokeWidth="3" fill="none" opacity="0.5" />
      <path d="M400,55 Q390,25 405,5" stroke="#B8A898" strokeWidth="3" fill="none" opacity="0.5" />
      <path d="M450,60 Q440,30 455,10" stroke="#B8A898" strokeWidth="3" fill="none" opacity="0.5" />
      {/* Title text area */}
      <text x="400" y="390" textAnchor="middle" fill="#2F4A3A" fontSize="14" fontFamily="sans-serif" opacity="0.6">Crochet Cup Cozy Free Pattern — 21 Ideas</text>
    </svg>
  );
}

function FitGuideIllustration() {
  return (
    <svg viewBox="0 0 600 300" className="w-full" style={{ background: '#F5F0E8' }}>
      <rect width="600" height="300" fill="#FBF7F1" rx="16" />
      {/* Cup outline */}
      <path d="M180,50 L165,250 Q165,270 190,270 L310,270 Q335,270 335,250 L320,50 Z" fill="none" stroke="#2F4A3A" strokeWidth="2" strokeDasharray="6,4" />
      <text x="250" y="290" textAnchor="middle" fill="#5B5B5B" fontSize="12" fontFamily="sans-serif">Cup</text>
      {/* Cozy outline */}
      <path d="M172,80 L160,230 Q160,240 180,240 L320,240 Q340,240 340,230 L328,80 Z" fill="#2F4A3A" opacity="0.15" stroke="#2F4A3A" strokeWidth="2" />
      <text x="250" y="260" textAnchor="middle" fill="#2F4A3A" fontSize="11" fontFamily="sans-serif" fontWeight="600">Cozy</text>
      {/* Circumference arrow */}
      <line x1="145" y1="80" x2="145" y2="240" stroke="#E07A5F" strokeWidth="2" />
      <polygon points="145,75 140,85 150,85" fill="#E07A5F" />
      <polygon points="145,245 140,235 150,235" fill="#E07A5F" />
      <text x="130" y="165" textAnchor="middle" fill="#E07A5F" fontSize="10" fontFamily="sans-serif" fontWeight="600" transform="rotate(-90,130,165)">Height</text>
      {/* Width arrow */}
      <line x1="172" y1="30" x2="328" y2="30" stroke="#E07A5F" strokeWidth="2" />
      <polygon points="167,30 177,25 177,35" fill="#E07A5F" />
      <polygon points="333,30 323,25 323,35" fill="#E07A5F" />
      <text x="250" y="22" textAnchor="middle" fill="#E07A5F" fontSize="10" fontFamily="sans-serif" fontWeight="600">Circumference</text>
      {/* Negative ease note */}
      <rect x="370" y="60" width="200" height="80" rx="10" fill="#E4ECE7" />
      <text x="470" y="85" textAnchor="middle" fill="#2F4A3A" fontSize="11" fontFamily="sans-serif" fontWeight="600">Negative Ease</text>
      <text x="470" y="105" textAnchor="middle" fill="#5B5B5B" fontSize="10" fontFamily="sans-serif">Cozy should be 1–2"</text>
      <text x="470" y="120" textAnchor="middle" fill="#5B5B5B" fontSize="10" fontFamily="sans-serif">smaller than cup</text>
      {/* Closure types */}
      <rect x="370" y="160" width="200" height="100" rx="10" fill="#E4ECE7" />
      <text x="470" y="185" textAnchor="middle" fill="#2F4A3A" fontSize="11" fontFamily="sans-serif" fontWeight="600">Closure Types</text>
      <text x="470" y="205" textAnchor="middle" fill="#5B5B5B" fontSize="10" fontFamily="sans-serif">• Button tab</text>
      <text x="470" y="220" textAnchor="middle" fill="#5B5B5B" fontSize="10" fontFamily="sans-serif">• Tie strings</text>
      <text x="470" y="235" textAnchor="middle" fill="#5B5B5B" fontSize="10" fontFamily="sans-serif">• Seamless sleeve</text>
      <text x="470" y="250" textAnchor="middle" fill="#5B5B5B" fontSize="10" fontFamily="sans-serif">• Snap closure</text>
    </svg>
  );
}

function CozyGridImage({ colors, pattern, label }: { colors: string[]; pattern: 'sc' | 'rib' | 'waffle' | 'moss' | 'shell' | 'stripe' | 'granny' | 'bobble' | 'vstitch' | 'chevron' | 'cable' | 'mesh' | 'twist' | 'puff' | 'seed' | 'half' | 'lemon' | 'bow' | 'button' | 'colorblock' | 'handle'; label: string }) {
  const bg = '#F5F0E8';
  const cupBody = (
    <g>
      <path d="M20,15 L17,85 Q17,90 24,90 L76,90 Q83,90 83,85 L80,15 Z" fill="#D4C5B0" />
      <ellipse cx="50" cy="15" rx="30" ry="8" fill="#B8A898" />
      <ellipse cx="50" cy="15" rx="24" ry="5" fill="#FFFFFF" opacity="0.3" />
    </g>
  );
  const c0 = colors[0];
  const c1 = colors[1] || colors[0];

  const scEls: React.ReactElement[] = [];
  for (let r = 0; r < 9; r++) for (let c = 0; c < 8; c++) scEls.push(<rect key={`${r}-${c}`} x={22+c*7.5} y={22+r*7} width={6} height={6} rx={1.5} fill={c0} opacity={0.75} />);

  const ribEls: React.ReactElement[] = [];
  for (let i = 0; i < 11; i++) ribEls.push(<line key={i} x1={22+i*5.5} y1="22" x2={22+i*5.5} y2="88" stroke={i%2===0?c0:c1} strokeWidth="3.5" opacity={0.7} />);

  const waffleEls: React.ReactElement[] = [];
  for (let r = 0; r < 6; r++) for (let c = 0; c < 4; c++) waffleEls.push(<g key={`${r}-${c}`}><rect x={23+c*14} y={22+r*11} width={12} height={9} rx={2} fill={c0} opacity={0.7} /><rect x={25+c*14} y={23+r*11} width={8} height={6} rx={1} fill={c1} opacity={0.4} /></g>);

  const mossEls: React.ReactElement[] = [];
  for (let r = 0; r < 8; r++) { const off = r%2===0?0:3.5; for (let c = 0; c < 8; c++) mossEls.push(<rect key={`${r}-${c}`} x={22+c*7.5+off} y={22+r*8} width={5.5} height={7} rx={1} fill={c%2===r%2?c0:c1} opacity={0.7} />); }

  const shellEls: React.ReactElement[] = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) { const x = c*14+(r%2===0?0:7); shellEls.push(<path key={`${r}-${c}`} d={`M${22+x},88 Q${29+x},76 ${29+x},68 Q${29+x},76 ${36+x},88`} fill={c0} opacity={0.7} />); }

  const stripeEls: React.ReactElement[] = [];
  for (let i = 0; i < 6; i++) stripeEls.push(<rect key={i} x="18" y={22+i*11} width="64" height="10" fill={i%2===0?c0:c1} opacity={0.65} />);

  const grannyEls: React.ReactElement[] = [];
  for (let r = 0; r < 5; r++) for (let c = 0; c < 6; c++) grannyEls.push(<g key={`${r}-${c}`}><circle cx={24+c*11} cy={26+r*13} r={3} fill={c0} opacity={0.8} /><circle cx={30+c*11} cy={26+r*13} r={3} fill={c0} opacity={0.8} /><circle cx={27+c*11} cy={32+r*13} r={3} fill={c1} opacity={0.6} /></g>);

  const bobbleEls: React.ReactElement[] = [];
  for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) bobbleEls.push(<circle key={`${r}-${c}`} cx={27+c*13} cy={28+r*13} r={5.5} fill={c0} opacity={0.8} />);

  const vstitchEls: React.ReactElement[] = [];
  for (let r = 0; r < 6; r++) for (let c = 0; c < 6; c++) vstitchEls.push(<g key={`${r}-${c}`}><line x1={23+c*10} y1={33+r*10} x2={29+c*10} y2={24+r*10} stroke={c0} strokeWidth="2.5" opacity={0.8} /><line x1={35+c*10} y1={33+r*10} x2={29+c*10} y2={24+r*10} stroke={c0} strokeWidth="2.5" opacity={0.8} /></g>);

  const chevronEls: React.ReactElement[] = [];
  for (let r = 0; r < 5; r++) { const pts: string[] = []; for (let c = 0; c < 10; c++) pts.push(`${22+c*6.5},${22+r*13+(c%2===0?0:6)}`); chevronEls.push(<polyline key={r} points={pts.join(' ')} fill="none" stroke={r%2===0?c0:c1} strokeWidth="3" opacity={0.75} />); }

  const cableEls: React.ReactElement[] = [];
  for (let i = 0; i < 4; i++) cableEls.push(<g key={i}><path d={`M${27+i*16},22 Q${35+i*16},55 ${27+i*16},88`} stroke={c0} strokeWidth="4" fill="none" opacity={0.8} /><path d={`M${35+i*16},22 Q${27+i*16},55 ${35+i*16},88`} stroke={c1} strokeWidth="4" fill="none" opacity={0.6} /></g>);

  const meshEls: React.ReactElement[] = [];
  for (let r = 0; r < 8; r++) for (let c = 0; c < 9; c++) meshEls.push(<rect key={`${r}-${c}`} x={22+c*7.5} y={22+r*8} width={6} height={7} rx={1} fill="none" stroke={c0} strokeWidth="2" opacity={0.7} />);

  const twistEl = <path d="M24,30 Q50,18 76,30 Q50,42 24,54 Q50,42 76,54 Q50,66 24,78 Q50,66 76,78 Q50,90 24,90" stroke={c0} strokeWidth="5" fill="none" opacity={0.7} />;

  const puffEls: React.ReactElement[] = [];
  for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) puffEls.push(<ellipse key={`${r}-${c}`} cx={27+c*13} cy={28+r*13} rx={6} ry={6} fill={c0} opacity={0.7} />);

  const seedEls: React.ReactElement[] = [];
  for (let r = 0; r < 9; r++) for (let c = 0; c < 8; c++) seedEls.push(<circle key={`${r}-${c}`} cx={25+c*7.5} cy={26+r*7} r={(r+c)%2===0?3:2} fill={(r+c)%2===0?c0:c1} opacity={0.7} />);

  const halfEls: React.ReactElement[] = [];
  for (let r = 0; r < 8; r++) for (let c = 0; c < 9; c++) halfEls.push(<rect key={`${r}-${c}`} x={22+c*7} y={22+r*8} width={6} height={7} rx={1} fill={c0} opacity={0.7} />);

  const lemonEls: React.ReactElement[] = [];
  for (let r = 0; r < 7; r++) for (let c = 0; c < 7; c++) { const bump = (r+c)%2===0; lemonEls.push(<circle key={`${r}-${c}`} cx={24+c*8.5} cy={26+r*10} r={bump?4:2.5} fill={bump?c0:c1} opacity={0.7} />); }

  const bowGridEls: React.ReactElement[] = [];
  for (let r = 0; r < 9; r++) for (let c = 0; c < 8; c++) bowGridEls.push(<rect key={`${r}-${c}`} x={22+c*7.5} y={22+r*7} width={6} height={6} rx={1.5} fill={c0} opacity={0.65} />);
  const bowEl = (<g>{bowGridEls}<ellipse cx="50" cy="55" rx="16" ry="8" fill={c1} opacity={0.9} /><circle cx="50" cy="55" r="4" fill={c0} opacity={0.8} /></g>);

  const btnGridEls: React.ReactElement[] = [];
  for (let r = 0; r < 9; r++) for (let c = 0; c < 8; c++) btnGridEls.push(<rect key={`${r}-${c}`} x={22+c*7.5} y={22+r*7} width={6} height={6} rx={1.5} fill={c0} opacity={0.7} />);
  const btnEl = (<g>{btnGridEls}<circle cx="80" cy="55" r="6" fill={c0} stroke="#FBF7F1" strokeWidth="2" /><circle cx="80" cy="55" r="2" fill="#FBF7F1" /></g>);

  const cbId = label.replace(/\s/g,'');
  const colorblockEl = (<g><clipPath id={`cb-${cbId}`}><path d="M20,15 L17,85 Q17,90 24,90 L76,90 Q83,90 83,85 L80,15 Z" /></clipPath><rect x="17" y="15" width="33" height="75" fill={c0} clipPath={`url(#cb-${cbId})`} opacity="0.75" /><rect x="50" y="15" width="33" height="75" fill={c1} clipPath={`url(#cb-${cbId})`} opacity={0.65} /></g>);

  const handleGridEls: React.ReactElement[] = [];
  for (let r = 0; r < 8; r++) for (let c = 0; c < 7; c++) handleGridEls.push(<rect key={`${r}-${c}`} x={22+c*8} y={22+r*8} width={7} height={7} rx={1.5} fill={c0} opacity={0.7} />);
  const handleEl = (<g><path d="M80,30 Q100,30 100,55 Q100,80 80,80" stroke="#B8A898" strokeWidth="5" fill="none" />{handleGridEls}</g>);

  let patternEl: React.ReactElement | null = null;
  switch (pattern) {
    case 'sc': patternEl = <>{scEls}</>; break;
    case 'rib': patternEl = <>{ribEls}</>; break;
    case 'waffle': patternEl = <>{waffleEls}</>; break;
    case 'moss': patternEl = <>{mossEls}</>; break;
    case 'shell': patternEl = <>{shellEls}</>; break;
    case 'stripe': patternEl = <>{stripeEls}</>; break;
    case 'granny': patternEl = <>{grannyEls}</>; break;
    case 'bobble': patternEl = <>{bobbleEls}</>; break;
    case 'vstitch': patternEl = <>{vstitchEls}</>; break;
    case 'chevron': patternEl = <>{chevronEls}</>; break;
    case 'cable': patternEl = <>{cableEls}</>; break;
    case 'mesh': patternEl = <>{meshEls}</>; break;
    case 'twist': patternEl = twistEl; break;
    case 'puff': patternEl = <>{puffEls}</>; break;
    case 'seed': patternEl = <>{seedEls}</>; break;
    case 'half': patternEl = <>{halfEls}</>; break;
    case 'lemon': patternEl = <>{lemonEls}</>; break;
    case 'bow': patternEl = bowEl; break;
    case 'button': patternEl = btnEl; break;
    case 'colorblock': patternEl = colorblockEl; break;
    case 'handle': patternEl = handleEl; break;
  }

  return (
    <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
      <svg viewBox="0 0 100 95" className="w-full" style={{ background: bg }}>
        {cupBody}
        <clipPath id={`cozy-${cbId}`}><path d="M20,15 L17,85 Q17,90 24,90 L76,90 Q83,90 83,85 L80,15 Z" /></clipPath>
        <g clipPath={`url(#cozy-${cbId})`}>
          {patternEl}
        </g>
      </svg>
      <div className="px-3 py-2.5 text-center">
        <p className="text-xs font-semibold text-[#1F1F1F] leading-tight">{label}</p>
      </div>
    </div>
  );
}

/* ─── Data ─── */

interface CupCozyIdea {
  name: string;
  level: string;
  yarn: string;
  bestFor: string;
  why: string;
  tip: string;
  pattern: 'sc' | 'rib' | 'waffle' | 'moss' | 'shell' | 'stripe' | 'granny' | 'bobble' | 'vstitch' | 'chevron' | 'cable' | 'mesh' | 'twist' | 'puff' | 'seed' | 'half' | 'lemon' | 'bow' | 'button' | 'colorblock' | 'handle';
  colors: string[];
}

const EASY_COZIES: CupCozyIdea[] = [
  { name: 'Classic Single Crochet Sleeve', level: 'Beginner', yarn: '#4 cotton', bestFor: 'Standard paper cups', why: 'The simplest cozy you can make — a flat rectangle seamed into a tube. Works up in 20 minutes.', tip: 'Chain to match cup circumference minus 1" for negative ease. Seam with whip stitch for a clean edge.', pattern: 'sc', colors: ['#2F4A3A'] },
  { name: 'Ribbed BLO Cozy', level: 'Beginner', yarn: '#4 cotton', bestFor: 'Travel cups + tumblers', why: 'BLO ribbing stretches to fit snugly on any cup — the most forgiving pattern for beginners.', tip: 'Work in BLO HDC rows. The ribbing stretches horizontally, so make it 1" shorter than circumference.', pattern: 'rib', colors: ['#2F4A3A', '#4A7A5E'] },
  { name: 'Half Double Crochet Wrap', level: 'Beginner', yarn: '#4 cotton', bestFor: 'Paper + plastic cups', why: 'Slightly faster than SC with a softer drape — the goldilocks of cozy stitches.', tip: 'HDC naturally creates a subtle ridge. Use that texture on the brim for a polished look.', pattern: 'half', colors: ['#2F4A3A'] },
  { name: 'Color Block Sleeve', level: 'Beginner', yarn: '#4 cotton', bestFor: 'Gift sets + party favors', why: 'Two-tone color blocking looks modern with zero complex stitches — great for using scrap yarn.', tip: 'Switch colors at the halfway point. Carry the unused yarn inside instead of cutting.', pattern: 'colorblock', colors: ['#2F4A3A', '#E07A5F'] },
  { name: 'Stripe Stack Cozy', level: 'Beginner', yarn: '#4 cotton', bestFor: 'Iced coffee cups', why: 'Horizontal stripes make a basic pattern look custom — use 2-3 coordinating colors.', tip: 'Carry the unused color up the inside instead of cutting — saves weaving in ends.', pattern: 'stripe', colors: ['#2F4A3A', '#E9E1D7'] },
];

const TEXTURED_COZIES: CupCozyIdea[] = [
  { name: 'Waffle Stitch Cozy', level: 'Easy', yarn: '#4 cotton', bestFor: 'Ceramic mugs', why: 'Deep waffle texture that looks store-bought — squishy, warm, and tactile.', tip: 'Front-post DC creates the raised ridges. The pattern repeats every 2 rows — count carefully.', pattern: 'waffle', colors: ['#2F4A3A', '#4A7A5E'] },
  { name: 'Moss Stitch Cozy', level: 'Easy', yarn: '#4 cotton', bestFor: 'Any cup type', why: 'Woven-look texture that\'s modern, clean, and reversible — hides small tension changes.', tip: 'The SC+CH1 skip 1 repeat is very forgiving. Great first textured project.', pattern: 'moss', colors: ['#2F4A3A', '#4A7A5E'] },
  { name: 'Seed Stitch Cozy', level: 'Easy', yarn: '#4 cotton', bestFor: 'Ceramic mugs + gift sets', why: 'Subtle nubby texture that looks elegant in solid colors — perfect for gifting.', tip: 'Alternate SC and DC, offsetting each row. The texture builds naturally.', pattern: 'seed', colors: ['#2F4A3A', '#4A7A5E'] },
  { name: 'Shell Stitch Cozy', level: 'Easy', yarn: '#3 DK cotton', bestFor: 'Iced coffee + smoothies', why: 'Scalloped edge adds a feminine, boutique touch — looks more complex than it is.', tip: 'Work shells into the foundation chain for a decorative bottom edge.', pattern: 'shell', colors: ['#2F4A3A'] },
  { name: 'V-Stitch Cozy', level: 'Easy', yarn: '#4 cotton', bestFor: 'Travel cups', why: 'Open V-stitch creates a lacy, breathable fabric — great for iced drinks where condensation forms.', tip: 'The V-stitch pattern repeats every 2 stitches — easy to adjust for any cup size.', pattern: 'vstitch', colors: ['#2F4A3A'] },
  { name: 'Lemon Peel Stitch Cozy', level: 'Easy', yarn: '#4 cotton', bestFor: 'Ceramic mugs + gifting', why: 'Overlapping bumps create a magical, textured surface — eye-catching in any color.', tip: 'Alternate SC and DC in the same stitch, then skip one. The texture builds with each row.', pattern: 'lemon', colors: ['#2F4A3A', '#4A7A5E'] },
];

const HANDLE_COZIES: CupCozyIdea[] = [
  { name: 'Button Tab Handle Cozy', level: 'Easy', yarn: '#4 cotton', bestFor: 'Mugs with handles', why: 'The button tab wraps around the handle for a secure, adjustable fit — no sliding.', tip: 'Add the button tab 2 rows before finishing. Position it where the handle meets the cup.', pattern: 'button', colors: ['#2F4A3A'] },
  { name: 'Handle Cutout Sleeve', level: 'Easy', yarn: '#4 cotton', bestFor: 'Mugs with handles', why: 'A strategic opening lets the handle poke through — snug fit that stays put.', tip: 'Leave a 1.5" gap in the center of the cozy for the handle. Reinforce edges with SC.', pattern: 'handle', colors: ['#2F4A3A'] },
  { name: 'Tie-String Wrap', level: 'Beginner', yarn: '#3 DK cotton', bestFor: 'Any cup with handle', why: 'Tie strings secure the cozy around the handle — adjustable and decorative.', tip: 'Add chain-50 ties at each end. Wrap around the handle and tie in a bow.', pattern: 'sc', colors: ['#2F4A3A'] },
  { name: 'Moss Stitch Handle Cozy', level: 'Easy', yarn: '#4 cotton', bestFor: 'Ceramic mugs', why: 'Modern woven texture with a handle opening — looks clean and stays in place.', tip: 'Work the moss stitch flat, leave a handle gap, then seam the bottom.', pattern: 'moss', colors: ['#2F4A3A', '#4A7A5E'] },
];

const MODERN_COZIES: CupCozyIdea[] = [
  { name: 'Mesh Sleeve', level: 'Easy', yarn: '#3 DK cotton', bestFor: 'Iced coffee + cold brew', why: 'Open mesh looks minimal and modern — breathable for cold drinks with condensation.', tip: 'Chain multiples of 2 for the foundation. The mesh pattern is just chains and SC.', pattern: 'mesh', colors: ['#2F4A3A'] },
  { name: 'Twist Stitch Cozy', level: 'Intermediate', yarn: '#4 cotton', bestFor: 'Ceramic mugs + gift sets', why: 'Continuous twist creates a sculptural, modern look — people will ask where you bought it.', tip: 'The twist is just front-post and back-post DC alternating. Practice on a swatch first.', pattern: 'twist', colors: ['#2F4A3A'] },
  { name: 'Chevron Stripe Cozy', level: 'Easy', yarn: '#4 cotton', bestFor: 'Travel cups + tumblers', why: 'Wavy chevron stripes look modern and playful — great for matching sets.', tip: 'The chevron pattern repeats every 12 stitches. Use stitch markers to track the peaks.', pattern: 'chevron', colors: ['#2F4A3A', '#E9E1D7'] },
  { name: 'Bobble Dot Cozy', level: 'Intermediate', yarn: '#4 cotton', bestFor: 'Ceramic mugs + gifting', why: 'Raised bobbles in a grid pattern — tactile, playful, and surprisingly easy.', tip: 'Push each bobble to the front as you make it. Space them evenly with SC between.', pattern: 'bobble', colors: ['#2F4A3A'] },
];

const GIFTABLE_COZIES: CupCozyIdea[] = [
  { name: 'Granny Square Cozy', level: 'Easy', yarn: '#4 cotton', bestFor: 'Gift sets + craft fairs', why: 'Classic granny clusters in a tube — nostalgic, colorful, and instantly recognizable.', tip: 'Use 3 DC clusters. The granny pattern is forgiving and works with any color combo.', pattern: 'granny', colors: ['#2F4A3A', '#E07A5F'] },
  { name: 'Puff Stitch Cozy', level: 'Easy', yarn: '#4 cotton', bestFor: 'Ceramic mugs + gift sets', why: 'Puffy texture feels luxurious — looks like a high-end boutique cozy.', tip: 'Yarn over and pull up 3 times per puff. The puffier the yarn, the fewer puffs you need.', pattern: 'puff', colors: ['#2F4A3A'] },
  { name: 'Bow Accent Cozy', level: 'Easy', yarn: '#4 cotton', bestFor: 'Gift sets + parties', why: 'A cute bow on the front makes this instantly Instagram-worthy — perfect for gifting.', tip: 'Crochet the bow separately and sew it on. Easier than trying to work it into the cozy.', pattern: 'bow', colors: ['#2F4A3A', '#E07A5F'] },
  { name: 'Cable Knit Look Cozy', level: 'Intermediate', yarn: '#4 cotton', bestFor: 'Ceramic mugs + men\'s gifts', why: 'Aran-style cables without a cable hook — looks complicated but uses basic stitches.', tip: 'Skip 2, DC in next 2, go back and DC in the skipped stitches — instant faux cable.', pattern: 'cable', colors: ['#2F4A3A', '#4A7A5E'] },
];

/* ─── Main Component ─── */

export default function BlogArticleCrochetCupCozyFreePattern() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt });
  const closeLightbox = () => setLightbox(null);

  return (
    <article className="bg-[#FBF7F1]">

      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[320px] md:min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <HeroCupCozy />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center w-full">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#CCD9D0] hover:text-white mb-6 no-underline transition-colors"
          >
            ← Back to Blog
          </Link>
          <h1 className="font-fraunces text-3xl sm:text-4xl md:text-5xl leading-[1.15] font-semibold text-white tracking-tight mb-5">
            Crochet Cup Cozy Free Pattern:<br className="hidden sm:block" /> 21 Coffee Cup Cozy Crochet Pattern Free Ideas
          </h1>
          <p className="text-base sm:text-lg text-[#CCD9D0] max-w-2xl mx-auto leading-relaxed mb-2">
            Easy + Cute Ideas for Every Cup
          </p>
          <p className="text-sm text-[#CCD9D0]/70 max-w-xl mx-auto leading-relaxed">
            A beginner-friendly roundup of 21 cute mug and cup cozy ideas plus yarn tips and fit tricks.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Article Meta */}
        <div className="flex items-center gap-3 text-xs text-[#5B5B5B] mb-10 pb-6 border-b border-[#E9E1D7]">
          <span className="inline-flex items-center gap-1.5 bg-[#E4ECE7] text-[#2F4A3A] px-2.5 py-1 rounded-full font-semibold">
            <BookOpen className="w-3 h-3" /> Pattern Guide
          </span>
          <span>·</span>
          <span>Beginner Friendly</span>
          <span>·</span>
          <span>18 min read</span>
        </div>

        {/* Article Body */}
        <div className="prose-custom space-y-10">

          {/* Intro */}
          <div className="space-y-5">
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              A <strong>crochet cup cozy free pattern</strong> is one of the fastest, most satisfying projects you can make. It's small enough to finish in one sitting, practical enough that people actually use it, and customizable enough to match anyone's style — from minimalist mugs to colorful iced coffee cups.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              You'll find <strong>21 coffee cup cozy crochet pattern free ideas</strong> organized by style and skill level — from dead-simple beginner wraps to textured designs that look like they came from a boutique. Each idea includes yarn suggestions, best-use cases, and a technique tip so your result looks polished.
            </p>
            <p className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed">
              These are perfect for <strong>scrap yarn projects</strong> and <strong>quick gifts</strong>. Save this post for later — you'll want to come back when you need a <strong>crochet coffee cozy</strong> idea.
            </p>
          </div>

          {/* Hero Image */}
          <button
            type="button"
            onClick={() => openLightbox('hero-cup-cozy', 'Collection of crocheted cup cozies in various styles and colors')}
            className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
          >
            <HeroCupCozy />
            <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
            </span>
          </button>

          {/* Quick Picks */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">★</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Quick Picks (Start Here)
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">Can't browse all 21? Start with these five — each one is great for a different reason.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { name: 'Classic SC Sleeve', why: 'Easiest cozy on the list — a rectangle plus a seam. 20 minutes, done.', color: 'bg-[#E4ECE7]' },
                { name: 'Ribbed BLO Cozy', why: 'Stretches to fit any cup — the most forgiving pattern for beginners.', color: 'bg-[#E4ECE7]' },
                { name: 'Waffle Stitch Cozy', why: 'Looks store-bought — the texture is incredible on a mug.', color: 'bg-[#E4ECE7]' },
                { name: 'Button Tab Handle Cozy', why: 'Stays put on mugs with handles — no sliding, no fuss.', color: 'bg-[#E4ECE7]' },
                { name: 'Bow Accent Cozy', why: 'Cute, gift-ready, and Instagram-worthy in under an hour.', color: 'bg-[#E4ECE7]' },
              ].map((p) => (
                <div key={p.name} className={`${p.color} border border-[#CCD9D0] rounded-xl p-4`}>
                  <p className="font-fraunces text-sm font-semibold text-[#2F4A3A] mb-1">{p.name}</p>
                  <p className="text-xs text-[#5B5B5B] leading-relaxed">{p.why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Picks Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <CozyGridImage pattern="sc" colors={['#2F4A3A']} label="Classic SC" />
            <CozyGridImage pattern="rib" colors={['#2F4A3A', '#4A7A5E']} label="Ribbed BLO" />
            <CozyGridImage pattern="waffle" colors={['#2F4A3A', '#4A7A5E']} label="Waffle" />
            <CozyGridImage pattern="button" colors={['#2F4A3A']} label="Button Tab" />
            <CozyGridImage pattern="bow" colors={['#2F4A3A', '#E07A5F']} label="Bow Accent" />
            <CozyGridImage pattern="moss" colors={['#2F4A3A', '#4A7A5E']} label="Moss Stitch" />
          </div>

          {/* Yarn Guide */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Before You Start — How to Choose Yarn for a Crochet Cup Cozy
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">The right yarn makes the difference between a cozy that feels premium and one that pills after two washes.</p>

            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Cotton vs Acrylic (Heat + Washability)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed"><strong>Cotton</strong> is the best choice for cup cozies — it handles heat, absorbs condensation, and is machine washable. <strong>Acrylic</strong> works in a pinch but can melt near hot drinks and holds odors. For everyday use, always choose cotton.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">DK vs Worsted vs Bulky</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed"><strong>#3 DK</strong> creates a lighter, more refined cozy — great for iced drinks. <strong>#4 worsted</strong> is the most versatile — works for almost every pattern. <strong>#5 bulky</strong> works up faster but can feel thick on smaller cups. Match the yarn to the season and the cup size.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Stitch Definition and Stretch</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Smooth, solid-color cotton shows texture best. Highly variegated or fuzzy yarns hide detailed stitches. For textured <strong>crochet cup cozy</strong> patterns (waffle, cable, bobble), choose a yarn with good stitch definition and minimal stretch.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">How Much Yarn Do You Need?</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Most cup cozies use <strong>30–60 yards</strong> of worsted weight yarn. That's less than one skein — making these perfect scrap yarn projects. DK weight uses slightly more (40–70 yards) due to the thinner strand. Always buy one extra skein if you're making a matching set.</p>
              </div>
            </div>
          </section>

          {/* Fit Guide */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                How to Make a Cup Cozy Fit (So It Doesn't Slide)
              </h2>
            </div>
            <p className="text-sm text-[#5B5B5B] mb-5">A cozy that slides around is worse than no cozy at all. Here's how to get a snug, secure fit every time.</p>

            <button
              type="button"
              onClick={() => openLightbox('fit-guide', 'Illustration showing how to measure cup circumference and height for a cozy fit guide')}
              className="block w-full cursor-pointer bg-transparent border-0 p-0 mb-5 relative group"
            >
              <FitGuideIllustration />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
              </span>
            </button>

            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Measuring Cup Circumference + Height</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Wrap a flexible tape measure around the widest part of the cup (usually the middle). Note the circumference. Then measure from the bottom of the cup to where you want the cozy to end — typically 3–4" tall for paper cups, 4–5" for travel cups and mugs.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Negative Ease (Slightly Smaller)</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">Your <strong>crochet coffee cozy</strong> should be <strong>1–2 inches smaller</strong> than the cup circumference. The natural stretch of crochet fabric fills the gap and holds the cozy in place. If it's the same size or larger, it will slide right off.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Closure Types</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed"><strong>Button tab:</strong> Most secure — sew a button on one end, make a chain loop on the other. <strong>Tie strings:</strong> Decorative and adjustable — wrap around the handle. <strong>Seamless sleeve:</strong> Simplest — just seam a tube that fits snugly. <strong>Snap closure:</strong> Quick on and off — great for daily use.</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                <h3 className="font-fraunces text-base font-semibold text-[#1F1F1F] mb-2">Handle Opening Tips for Mugs</h3>
                <p className="text-sm text-[#5B5B5B] leading-relaxed">For mugs with handles, you have two options: <strong>leave a gap</strong> in the cozy (1.5" wide, centered on the handle) or <strong>wrap around</strong> the handle with ties. The gap method looks cleaner; the tie method is more adjustable. Either way, reinforce the edges with SC to prevent stretching.</p>
              </div>
            </div>
          </section>

          {/* 21 Ideas */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-2">
              21 Coffee Cup Cozy Crochet Pattern Free Ideas
            </h2>
            <p className="text-sm text-[#5B5B5B] mb-8">Each idea includes skill level, yarn suggestion, best use case, and a technique tip.</p>

            {/* Easy Category */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Easy Crochet Cup Cozy (Beginner-Friendly)
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">Simple construction, basic stitches, and guaranteed results. Perfect for your first <strong>crochet cup cozy</strong>.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {EASY_COZIES.map((p) => (
                <div key={p.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => openLightbox(`easy-${p.name}`, `${p.name} crochet cup cozy`)}
                    className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
                  >
                    <CozyGridImage pattern={p.pattern} colors={p.colors} label={p.name} />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </span>
                  </button>
                  <div className="px-3 py-2.5 text-center">
                    <p className="text-xs font-semibold text-[#1F1F1F] leading-tight">{p.name}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-10">
              {EASY_COZIES.map((p) => (
                <div key={p.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h4 className="font-fraunces text-base font-semibold text-[#1F1F1F]">{p.name}</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-2 py-0.5 rounded-full w-fit">{p.level}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-[#5B5B5B] mb-2">
                    <span>Yarn: {p.yarn}</span>
                    <span>·</span>
                    <span>Best for: {p.bestFor}</span>
                  </div>
                  <p className="text-sm text-[#2F4A3A] font-medium mb-1">{p.why}</p>
                  <p className="text-xs text-[#5B5B5B] leading-relaxed">Tip: {p.tip}</p>
                </div>
              ))}
            </div>

            {/* Textured Category */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Textured Crochet Coffee Cozy (Looks Expensive)
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">Advanced-looking stitches that create boutique-quality texture — people will ask where you bought it.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {TEXTURED_COZIES.map((p) => (
                <div key={p.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => openLightbox(`textured-${p.name}`, `${p.name} crochet coffee cozy`)}
                    className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
                  >
                    <CozyGridImage pattern={p.pattern} colors={p.colors} label={p.name} />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </span>
                  </button>
                  <div className="px-3 py-2.5 text-center">
                    <p className="text-xs font-semibold text-[#1F1F1F] leading-tight">{p.name}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-10">
              {TEXTURED_COZIES.map((p) => (
                <div key={p.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h4 className="font-fraunces text-base font-semibold text-[#1F1F1F]">{p.name}</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-2 py-0.5 rounded-full w-fit">{p.level}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-[#5B5B5B] mb-2">
                    <span>Yarn: {p.yarn}</span>
                    <span>·</span>
                    <span>Best for: {p.bestFor}</span>
                  </div>
                  <p className="text-sm text-[#2F4A3A] font-medium mb-1">{p.why}</p>
                  <p className="text-xs text-[#5B5B5B] leading-relaxed">Tip: {p.tip}</p>
                </div>
              ))}
            </div>

            {/* CTA Block Mid */}
            <div className="bg-gradient-to-br from-[#2F4A3A] to-[#263C30] rounded-2xl p-6 sm:p-8 text-center shadow-lg my-10">
              <p className="font-fraunces text-lg sm:text-xl font-medium text-white mb-4">
                Love these stitches? Try them in a blanket.
              </p>
              <Link
                to="/store/7-day-blanket-collection"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2F4A3A] font-semibold text-sm hover:bg-[#FBF7F1] transition-colors no-underline shadow-sm"
              >
                Discover the Blanket Collection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Handle Options Category */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Crochet Mug Cozy Free Pattern Styles (With Handle Options)
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">Designed specifically for mugs with handles — these stay put without sliding.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {HANDLE_COZIES.map((p) => (
                <div key={p.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => openLightbox(`handle-${p.name}`, `${p.name} crochet mug cozy with handle`)}
                    className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
                  >
                    <CozyGridImage pattern={p.pattern} colors={p.colors} label={p.name} />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </span>
                  </button>
                  <div className="px-3 py-2.5 text-center">
                    <p className="text-xs font-semibold text-[#1F1F1F] leading-tight">{p.name}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-10">
              {HANDLE_COZIES.map((p) => (
                <div key={p.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h4 className="font-fraunces text-base font-semibold text-[#1F1F1F]">{p.name}</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-2 py-0.5 rounded-full w-fit">{p.level}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-[#5B5B5B] mb-2">
                    <span>Yarn: {p.yarn}</span>
                    <span>·</span>
                    <span>Best for: {p.bestFor}</span>
                  </div>
                  <p className="text-sm text-[#2F4A3A] font-medium mb-1">{p.why}</p>
                  <p className="text-xs text-[#5B5B5B] leading-relaxed">Tip: {p.tip}</p>
                </div>
              ))}
            </div>

            {/* Modern Category */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Minimal + Modern Cup Cozies
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">Clean lines, open textures, and contemporary designs — perfect for the minimalist in your life.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {MODERN_COZIES.map((p) => (
                <div key={p.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => openLightbox(`modern-${p.name}`, `${p.name} modern crochet cup cozy`)}
                    className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
                  >
                    <CozyGridImage pattern={p.pattern} colors={p.colors} label={p.name} />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </span>
                  </button>
                  <div className="px-3 py-2.5 text-center">
                    <p className="text-xs font-semibold text-[#1F1F1F] leading-tight">{p.name}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-10">
              {MODERN_COZIES.map((p) => (
                <div key={p.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h4 className="font-fraunces text-base font-semibold text-[#1F1F1F]">{p.name}</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-2 py-0.5 rounded-full w-fit">{p.level}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-[#5B5B5B] mb-2">
                    <span>Yarn: {p.yarn}</span>
                    <span>·</span>
                    <span>Best for: {p.bestFor}</span>
                  </div>
                  <p className="text-sm text-[#2F4A3A] font-medium mb-1">{p.why}</p>
                  <p className="text-xs text-[#5B5B5B] leading-relaxed">Tip: {p.tip}</p>
                </div>
              ))}
            </div>

            {/* Giftable Category */}
            <h3 className="font-fraunces text-xl font-semibold text-[#2F4A3A] mb-4">
              Cute Giftable Cup Cozy Ideas
            </h3>
            <p className="text-sm text-[#5B5B5B] mb-5">Gift-ready designs that look impressive — pair with a mug and a bag of coffee for the perfect present.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {GIFTABLE_COZIES.map((p) => (
                <div key={p.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => openLightbox(`gift-${p.name}`, `${p.name} giftable crochet cup cozy`)}
                    className="block w-full cursor-pointer bg-transparent border-0 p-0 relative group"
                  >
                    <CozyGridImage pattern={p.pattern} colors={p.colors} label={p.name} />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </span>
                  </button>
                  <div className="px-3 py-2.5 text-center">
                    <p className="text-xs font-semibold text-[#1F1F1F] leading-tight">{p.name}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-10">
              {GIFTABLE_COZIES.map((p) => (
                <div key={p.name} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h4 className="font-fraunces text-base font-semibold text-[#1F1F1F]">{p.name}</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F4A3A] bg-[#E4ECE7] px-2 py-0.5 rounded-full w-fit">{p.level}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-[#5B5B5B] mb-2">
                    <span>Yarn: {p.yarn}</span>
                    <span>·</span>
                    <span>Best for: {p.bestFor}</span>
                  </div>
                  <p className="text-sm text-[#2F4A3A] font-medium mb-1">{p.why}</p>
                  <p className="text-xs text-[#5B5B5B] leading-relaxed">Tip: {p.tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#2F4A3A] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight">
                Common Cup Cozy Mistakes (And Easy Fixes)
              </h2>
            </div>
            <div className="space-y-4">
              {[
                { mistake: 'Too Loose / Slips Off', fix: 'Your cozy needs negative ease — make it 1-2" smaller than the cup circumference. If it\'s still loose, go down a hook size or add a button tab for a secure closure.' },
                { mistake: 'Too Tight / Can\'t Get It On', fix: 'You went too small. Frog back and add 2-3 stitches to the width. The cozy should stretch slightly to fit, not fight you.' },
                { mistake: 'Wrong Yarn (Too Fuzzy or Stretchy)', fix: 'Fuzzy yarn pills and hides texture. Stretchy acrylic slides off. Use smooth cotton for the best results — it grips the cup, handles heat, and is machine washable.' },
                { mistake: 'Button Gap Placement', fix: 'The button tab should sit where the handle meets the cup — not on the opposite side. Mark the position before sewing the button to avoid repositioning.' },
                { mistake: 'Handle Opening Misalignment', fix: 'Measure the handle position before you start crocheting. The gap should be centered on the handle, not offset. Mark it with a stitch marker as you work.' },
              ].map((item, i) => (
                <div key={i} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <p className="text-sm font-semibold text-[#1F1F1F] mb-1">{item.mistake}</p>
                  <p className="text-sm text-[#5B5B5B] leading-relaxed">{item.fix}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[#1F1F1F] tracking-tight mb-5">
              FAQ: Crochet Cup Cozy Free Pattern
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'How much yarn do I need for a crochet cup cozy?',
                  a: 'Most cup cozies use 30–60 yards of worsted weight cotton yarn. That\'s less than one standard skein — making these perfect scrap yarn projects. DK weight uses slightly more (40–70 yards) due to the thinner strand.',
                },
                {
                  q: 'Can I use acrylic yarn for a coffee cozy?',
                  a: 'You can, but cotton is better. Cotton handles heat, absorbs condensation, and is machine washable. Acrylic can melt near hot drinks and holds odors over time. For everyday use, always choose cotton.',
                },
                {
                  q: 'What\'s the best stitch for a stretchy cozy?',
                  a: 'BLO (back loop only) ribbing is the stretchiest — it stretches horizontally to fit any cup. Moss stitch and seed stitch also have natural give. For the least stretch, use plain single crochet.',
                },
                {
                  q: 'How do I make it fit a bigger mug?',
                  a: 'Measure the mug circumference and add 2-3 inches to your chain. Remember: the cozy should be 1-2" smaller than the cup for negative ease. For very large mugs, use bulky yarn and a bigger hook.',
                },
                {
                  q: 'Are cup cozies machine washable?',
                  a: 'If you use cotton yarn, yes! Machine wash cold, lay flat to dry. Acrylic yarn is also machine washable but can pill. Always check your yarn label for care instructions.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl p-5">
                  <p className="text-sm font-semibold text-[#1F1F1F] mb-2">{item.q}</p>
                  <p className="text-sm text-[#5B5B5B] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-2xl p-5 sm:p-6">
            <p className="text-sm font-semibold text-[#2F4A3A] mb-3">Related Guides:</p>
            <div className="space-y-2">
              <Link to="/blog/crochet-blanket-stitches-guide" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Blanket Stitches: A Handy Guide
              </Link>
              <Link to="/blog/crochet-stitch-patterns" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Stitch Patterns: 27 Textured Stitches That Look Expensive
              </Link>
              <Link to="/blog/crochet-blanket-sizes-yarn-yardage-chart" className="block text-sm text-[#2F4A3A] hover:text-[#263C30] no-underline font-medium">
                → Crochet Blanket Sizes + Yarn Yardage Calculator
              </Link>
            </div>
          </div>

          {/* Closing CTA */}
          <div className="bg-[#E4ECE7] border border-[#CCD9D0] rounded-2xl p-6 sm:p-8 text-center">
            <p className="font-fraunces text-lg sm:text-xl font-semibold text-[#2F4A3A] mb-3">
              Ready to try these stitches in a blanket?
            </p>
            <p className="text-sm text-[#5B5B5B] mb-5 max-w-md mx-auto">
              Our beginner-friendly blanket patterns include sizing help, yarn guidance, and straight-edge tips — so you can finish with confidence.
            </p>
            <Link
              to="/store/7-day-blanket-collection"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2F4A3A] text-white font-semibold text-sm hover:bg-[#263C30] transition-colors no-underline shadow-sm"
            >
              Browse Blanket Patterns <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer z-10"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="w-full">
              {lightbox.src.startsWith('http') ? (
                <img src={lightbox.src} alt={lightbox.alt} className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl" />
              ) : (
                <div className="w-full max-h-[85vh] overflow-auto rounded-2xl shadow-2xl bg-[#F5F0E8] p-4">
                  <p className="text-center text-[#5B5B5B] text-sm italic">{lightbox.alt}</p>
                </div>
              )}
            </div>
            <p className="text-center text-white/80 text-sm mt-3">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </article>
  );
}
