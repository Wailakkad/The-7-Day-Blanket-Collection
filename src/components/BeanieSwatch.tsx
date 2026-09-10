interface BeanieSwatchProps {
  variant: 'classic' | 'ribbed' | 'chunky' | 'slouchy' | 'textured' | 'pom' | 'striped' | 'cat-ear' | 'waffle' | 'seed' | 'cable' | 'moss' | 'bobble' | 'twist' | 'colorblock' | 'man' | 'kid' | 'mermaid' | 'bow' | 'fold' | 'leaf' | 'gts' | 'halo' | 'sunset' | 'ocean';
  label: string;
}

const C = {
  bg: '#F5F0E8',
  yarn: '#2F4A3A',
  yarnLight: '#4A7A5E',
  accent: '#E9E1D7',
  dark: '#1F1F1F',
};

export default function BeanieSwatch({ variant, label }: BeanieSwatchProps) {
  const renderBeanie = () => {
    switch (variant) {
      case 'classic':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="30" ry="8" fill={C.yarn} opacity={0.3} />
            <path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" fill={C.yarn} />
            <rect x="22" y="58" width="56" height="10" rx="3" fill={C.yarnLight} />
            {[0,1,2,3,4,5,6,7].map(i => <line key={i} x1={26+i*7} y1="20" x2={26+i*7} y2="58" stroke={C.yarnLight} strokeWidth="1.5" opacity="0.4" />)}
          </g>
        );
      case 'ribbed':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="30" ry="8" fill={C.yarn} opacity={0.3} />
            <path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" fill={C.yarn} />
            {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => <line key={i} x1={24+i*5} y1="18" x2={24+i*5} y2="68" stroke={i%2===0?C.yarn:C.yarnLight} strokeWidth="3" opacity="0.7" />)}
          </g>
        );
      case 'chunky':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="32" ry="9" fill={C.yarn} opacity={0.3} />
            <path d="M18,55 Q18,18 50,12 Q82,18 82,55 L80,65 Q80,69 76,69 L24,69 Q20,69 20,65 Z" fill={C.yarn} />
            {[0,1,2,3,4].map(i => <rect key={i} x={22+i*12} y="22" width="10" height="42" rx="4" fill={C.yarnLight} opacity="0.6" />)}
          </g>
        );
      case 'slouchy':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="28" ry="7" fill={C.yarn} opacity={0.3} />
            <path d="M22,58 Q15,30 30,15 Q50,5 75,18 Q85,35 78,58 L76,65 Q76,68 73,68 L27,68 Q24,68 24,65 Z" fill={C.yarn} />
            <path d="M24,50 Q30,45 50,43 Q70,45 76,50" fill="none" stroke={C.yarnLight} strokeWidth="2" opacity="0.5" />
          </g>
        );
      case 'textured':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="30" ry="8" fill={C.yarn} opacity={0.3} />
            <path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" fill={C.yarn} />
            {[0,1,2,3,4,5].map(row => [0,1,2,3,4].map(col => <circle key={`${row}-${col}`} cx={28+col*11} cy={20+row*8} r={3} fill={C.yarnLight} opacity="0.5" />))}
          </g>
        );
      case 'pom':
        return (
          <g>
            <circle cx="50" cy="12" r="10" fill={C.yarnLight} />
            {[0,1,2,3,4,5,6,7].map(i => <line key={i} x1="50" y1="12" x2={50+Math.cos(i*Math.PI/4)*9} y2={12+Math.sin(i*Math.PI/4)*9} stroke={C.yarn} strokeWidth="1.5" opacity="0.4" />)}
            <ellipse cx="50" cy="72" rx="30" ry="8" fill={C.yarn} opacity={0.3} />
            <path d="M20,55 Q20,22 50,18 Q80,22 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" fill={C.yarn} />
            <rect x="22" y="58" width="56" height="10" rx="3" fill={C.yarnLight} />
          </g>
        );
      case 'striped':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="30" ry="8" fill={C.yarn} opacity={0.3} />
            <path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" fill={C.yarn} />
            {[0,1,2,3,4,5].map(i => <rect key={i} x="22" y={20+i*7} width="56" height="6" fill={i%2===0?C.yarnLight:C.accent} opacity="0.7" rx="1" />)}
          </g>
        );
      case 'cat-ear':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="30" ry="8" fill={C.yarn} opacity={0.3} />
            <path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" fill={C.yarn} />
            <polygon points="22,35 15,8 35,28" fill={C.yarn} />
            <polygon points="78,35 85,8 65,28" fill={C.yarn} />
            <polygon points="24,33 19,14 33,29" fill={C.yarnLight} opacity="0.5" />
            <polygon points="76,33 81,14 67,29" fill={C.yarnLight} opacity="0.5" />
          </g>
        );
      case 'waffle':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="30" ry="8" fill={C.yarn} opacity={0.3} />
            <path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" fill={C.yarn} />
            {[0,1,2,3,4].map(row => [0,1,2,3].map(col => <g key={`${row}-${col}`}><rect x={24+col*13} y={18+row*10} width="11" height="8" rx="1" fill={C.yarnLight} opacity="0.5" /><rect x={26+col*13} y={19+row*10} width="7" height="5" rx="1" fill={C.yarn} opacity="0.3" /></g>))}
          </g>
        );
      case 'seed':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="30" ry="8" fill={C.yarn} opacity={0.3} />
            <path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" fill={C.yarn} />
            {[0,1,2,3,4,5,6].map(row => [0,1,2,3,4,5,6,7].map(col => <circle key={`${row}-${col}`} cx={26+col*8} cy={20+row*6} r={(row+col)%2===0?3:2} fill={(row+col)%2===0?C.yarnLight:C.yarn} opacity="0.6" />))}
          </g>
        );
      case 'cable':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="30" ry="8" fill={C.yarn} opacity={0.3} />
            <path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" fill={C.yarn} />
            {[0,1,2,3].map(i => <g key={i}><path d={`M${30+i*12},18 Q${34+i*12},35 ${30+i*12},55`} stroke={C.yarnLight} strokeWidth="4" fill="none" opacity="0.7" /><path d={`M${36+i*12},18 Q${32+i*12},35 ${36+i*12},55`} stroke={C.yarnLight} strokeWidth="4" fill="none" opacity="0.7" /></g>)}
          </g>
        );
      case 'moss':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="30" ry="8" fill={C.yarn} opacity={0.3} />
            <path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" fill={C.yarn} />
            {[0,1,2,3,4,5].map(row => [0,1,2,3,4,5,6].map(col => {const off=row%2===0?0:4;return <rect key={`${row}-${col}`} x={24+col*8+off} y={19+row*7} width="6" height="5" rx="1" fill={col%2===row%2?C.yarn:C.yarnLight} opacity="0.6" />;}))}
          </g>
        );
      case 'bobble':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="30" ry="8" fill={C.yarn} opacity={0.3} />
            <path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" fill={C.yarn} />
            {[0,1,2,3].map(row => [0,1,2,3,4].map(col => <circle key={`${row}-${col}`} cx={28+col*11} cy={24+row*10} r={4} fill={C.yarnLight} opacity="0.7" />))}
          </g>
        );
      case 'twist':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="30" ry="8" fill={C.yarn} opacity={0.3} />
            <path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" fill={C.yarn} />
            <path d="M30,50 Q40,30 50,50 Q60,30 70,50" stroke={C.yarnLight} strokeWidth="5" fill="none" opacity="0.7" />
            <path d="M30,40 Q40,20 50,40 Q60,20 70,40" stroke={C.yarnLight} strokeWidth="5" fill="none" opacity="0.5" />
          </g>
        );
      case 'colorblock':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="30" ry="8" fill={C.yarn} opacity={0.3} />
            <path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" fill={C.yarn} />
            <clipPath id="cb"><path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" /></clipPath>
            <rect x="20" y="15" width="30" height="55" fill={C.yarn} clipPath="url(#cb)" />
            <rect x="50" y="15" width="30" height="55" fill={C.yarnLight} clipPath="url(#cb)" />
          </g>
        );
      case 'man':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="32" ry="8" fill={C.yarn} opacity={0.3} />
            <path d="M18,52 Q18,18 50,12 Q82,18 82,52 L80,62 Q80,66 76,66 L24,66 Q20,66 20,62 Z" fill={C.dark} />
            <rect x="20" y="54" width="60" height="12" rx="3" fill="#3a3a3a" />
          </g>
        );
      case 'kid':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="26" ry="7" fill={C.yarn} opacity={0.3} />
            <path d="M24,55 Q24,22 50,18 Q76,22 76,55 L74,63 Q74,66 71,66 L29,66 Q26,66 26,63 Z" fill="#E88BA5" />
            <rect x="26" y="56" width="48" height="10" rx="3" fill="#D4738D" />
            <circle cx="50" cy="14" r="6" fill="#F2C4D0" />
          </g>
        );
      case 'mermaid':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="30" ry="8" fill={C.yarn} opacity={0.3} />
            <path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" fill="#7EC8C8" />
            {[0,1,2,3,4,5].map(row => [0,1,2,3,4,5,6].map(col => <path key={`${row}-${col}`} d={`M${24+col*8},${20+row*7} Q${28+col*8},${17+row*7} ${32+col*8},${20+row*7} Q${28+col*8},${23+row*7} ${24+col*8},${20+row*7}`} fill={row%2===0?"#5FB8B8":"#9ED8D8"} opacity="0.5" />))}
          </g>
        );
      case 'bow':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="30" ry="8" fill={C.yarn} opacity={0.3} />
            <path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" fill="#D4A5C7" />
            <path d="M38,30 Q30,20 38,15 Q46,20 38,30 Z" fill="#C08DB5" />
            <path d="M62,30 Q70,20 62,15 Q54,20 62,30 Z" fill="#C08DB5" />
            <circle cx="50" cy="22" r="4" fill="#B07DAA" />
          </g>
        );
      case 'fold':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="30" ry="8" fill={C.yarn} opacity={0.3} />
            <path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" fill={C.yarn} />
            <rect x="20" y="50" width="60" height="18" rx="4" fill={C.yarnLight} />
            <line x1="20" y1="59" x2="80" y2="59" stroke={C.yarn} strokeWidth="1" opacity="0.4" />
          </g>
        );
      case 'leaf':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="30" ry="8" fill={C.yarn} opacity={0.3} />
            <path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" fill="#6B8E5A" />
            <path d="M40,25 Q50,10 60,25 Q50,35 40,25 Z" fill="#5A7D4A" opacity="0.6" />
            <line x1="50" y1="15" x2="50" y2="30" stroke="#4A6D3A" strokeWidth="1.5" opacity="0.5" />
          </g>
        );
      case 'gts':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="30" ry="8" fill={C.yarn} opacity={0.3} />
            <path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" fill={C.dark} />
            <text x="50" y="45" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">GIRL</text>
            <text x="50" y="55" textAnchor="middle" fontSize="8" fill="#ccc">TEXT</text>
          </g>
        );
      case 'halo':
        return (
          <g>
            <circle cx="50" cy="12" r="8" fill={C.accent} opacity="0.6" />
            <ellipse cx="50" cy="72" rx="28" ry="7" fill={C.yarn} opacity={0.3} />
            <path d="M22,55 Q22,22 50,17 Q78,22 78,55 L76,64 Q76,67 73,67 L27,67 Q24,67 24,64 Z" fill="#E8D5B5" />
          </g>
        );
      case 'sunset':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="30" ry="8" fill={C.yarn} opacity={0.3} />
            <path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" fill="#E88B6A" />
            <clipPath id="sunset"><path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" /></clipPath>
            <rect x="20" y="15" width="60" height="18" fill="#D47A5A" clipPath="url(#sunset)" />
            <rect x="20" y="33" width="60" height="18" fill="#E8A67A" clipPath="url(#sunset)" />
            <rect x="20" y="51" width="60" height="18" fill="#E8C49A" clipPath="url(#sunset)" />
          </g>
        );
      case 'ocean':
        return (
          <g>
            <ellipse cx="50" cy="72" rx="30" ry="8" fill={C.yarn} opacity={0.3} />
            <path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" fill="#5B8FA8" />
            <clipPath id="ocean"><path d="M20,55 Q20,20 50,15 Q80,20 80,55 L78,65 Q78,68 75,68 L25,68 Q22,68 22,65 Z" /></clipPath>
            <rect x="20" y="15" width="60" height="18" fill="#4A7E98" clipPath="url(#ocean)" />
            <rect x="20" y="33" width="60" height="18" fill="#6BA0B8" clipPath="url(#ocean)" />
            <rect x="20" y="51" width="60" height="18" fill="#8BC0D0" clipPath="url(#ocean)" />
          </g>
        );
      default:
        return <rect x="20" y="15" width="60" height="55" rx="8" fill={C.yarn} opacity="0.3" />;
    }
  };

  return (
    <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
      <svg viewBox="0 0 100 80" className="w-full" style={{ background: C.bg }}>
        {renderBeanie()}
      </svg>
      <div className="px-3 py-2.5 text-center">
        <p className="text-xs font-semibold text-[#1F1F1F] leading-tight">{label}</p>
      </div>
    </div>
  );
}
