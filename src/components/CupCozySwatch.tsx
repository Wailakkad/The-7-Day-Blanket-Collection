interface CupCozySwatchProps {
  variant: 'sc' | 'ribbed' | 'waffle' | 'moss' | 'shell' | 'puff' | 'stripe' | 'granny' | 'bobble' | 'seed' | 'vstitch' | 'chevron' | 'half' | 'lemon' | 'cable' | 'mesh' | 'twist' | 'bow' | 'button' | 'handle' | 'colorblock';
  label: string;
}

const C = {
  bg: '#F5F0E8',
  yarn: '#2F4A3A',
  yarnLight: '#4A7A5E',
  cup: '#D4C5B0',
  cupDark: '#B8A898',
  white: '#FFFFFF',
};

export default function CupCozySwatch({ variant, label }: CupCozySwatchProps) {
  const renderCozy = () => {
    const cupBody = (
      <g>
        <path d="M25,25 L22,85 Q22,90 28,90 L72,90 Q78,90 78,85 L75,25 Z" fill={C.cup} />
        <ellipse cx="50" cy="25" rx="25" ry="6" fill={C.cupDark} />
        <ellipse cx="50" cy="25" rx="22" ry="4" fill={C.white} opacity="0.3" />
      </g>
    );

    switch (variant) {
      case 'sc':
        return (
          <g>
            {cupBody}
            {[0,1,2,3,4,5,6,7,8].map(row => [0,1,2,3,4,5,6,7].map(col => (
              <rect key={`${row}-${col}`} x={27+col*6} y={30+row*6} width={5} height={5} rx={1} fill={C.yarn} opacity={0.75} />
            )))}
          </g>
        );
      case 'ribbed':
        return (
          <g>
            {cupBody}
            {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => (
              <line key={i} x1={27+i*4.5} y1="30" x2={27+i*4.5} y2="88" stroke={i%2===0?C.yarn:C.yarnLight} strokeWidth="3" opacity="0.7" />
            ))}
          </g>
        );
      case 'waffle':
        return (
          <g>
            {cupBody}
            {[0,1,2,3,4,5].map(row => [0,1,2,3].map(col => (
              <g key={`${row}-${col}`}>
                <rect x={28+col*12} y={30+row*10} width={10} height={8} rx={1} fill={C.yarn} opacity={0.7} />
                <rect x={30+col*12} y={31+row*10} width={6} height={5} rx={0.5} fill={C.yarnLight} opacity={0.4} />
              </g>
            )))}
          </g>
        );
      case 'moss':
        return (
          <g>
            {cupBody}
            {[0,1,2,3,4,5,6,7,8].map(row => [0,1,2,3,4,5,6,7].map(col => {
              const off = row%2===0?0:3;
              return <rect key={`${row}-${col}`} x={27+col*6+off} y={30+row*6} width={4} height={5} rx={0.5} fill={col%2===row%2?C.yarn:C.yarnLight} opacity={0.7} />;
            }))}
          </g>
        );
      case 'shell':
        return (
          <g>
            {cupBody}
            {[0,1,2,3,4].map(row => [0,1,2,3,4,5].map(col => {
              const x = col*13+(row%2===0?0:6);
              return <path key={`${row}-${col}`} d={`M${28+x},88 Q${34+x},78 ${34+x},72 Q${34+x},78 ${40+x},88`} fill={C.yarn} opacity={0.7} />;
            }))}
          </g>
        );
      case 'puff':
        return (
          <g>
            {cupBody}
            {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
              <ellipse key={`${row}-${col}`} cx={32+col*11} cy={35+row*12} rx={5} ry={5} fill={C.yarn} opacity={0.7} />
            )))}
          </g>
        );
      case 'stripe':
        return (
          <g>
            {cupBody}
            {[0,1,2,3,4,5].map(i => (
              <rect key={i} x="25" y={30+i*10} width="50" height="9" fill={i%2===0?C.yarn:C.yarnLight} opacity={0.6} />
            ))}
          </g>
        );
      case 'granny':
        return (
          <g>
            {cupBody}
            {[0,1,2,3,4].map(row => [0,1,2,3,4,5].map(col => (
              <g key={`${row}-${col}`}>
                <circle cx={29+col*9} cy={33+row*11} r={2.5} fill={C.yarn} opacity={0.8} />
                <circle cx={34+col*9} cy={33+row*11} r={2.5} fill={C.yarn} opacity={0.8} />
                <circle cx={31.5+col*9} cy={38+row*11} r={2.5} fill={C.yarnLight} opacity={0.6} />
              </g>
            )))}
          </g>
        );
      case 'bobble':
        return (
          <g>
            {cupBody}
            {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
              <circle key={`${row}-${col}`} cx={32+col*11} cy={35+row*12} r={4.5} fill={C.yarn} opacity={0.8} />
            )))}
          </g>
        );
      case 'seed':
        return (
          <g>
            {cupBody}
            {[0,1,2,3,4,5,6,7,8].map(row => [0,1,2,3,4,5,6,7].map(col => (
              <circle key={`${row}-${col}`} cx={29+col*6} cy={33+row*6} r={(row+col)%2===0?2.5:1.5} fill={(row+col)%2===0?C.yarn:C.yarnLight} opacity={0.7} />
            )))}
          </g>
        );
      case 'vstitch':
        return (
          <g>
            {cupBody}
            {[0,1,2,3,4,5].map(row => [0,1,2,3,4,5].map(col => (
              <g key={`${row}-${col}`}>
                <line x1={28+col*9} y1={38+row*9} x2={33+col*9} y2={30+row*9} stroke={C.yarn} strokeWidth="2" opacity={0.8} />
                <line x1={38+col*9} y1={38+row*9} x2={33+col*9} y2={30+row*9} stroke={C.yarn} strokeWidth="2" opacity={0.8} />
              </g>
            )))}
          </g>
        );
      case 'chevron':
        return (
          <g>
            {cupBody}
            {[0,1,2,3,4,5].map(row => (
              <polyline key={row} points={[0,1,2,3,4,5,6,7,8].map(col => `${27+col*6},${30+row*10+(col%2===0?0:5)}`).join(' ')} fill="none" stroke={row%2===0?C.yarn:C.yarnLight} strokeWidth="2.5" opacity={0.75} />
            ))}
          </g>
        );
      case 'half':
        return (
          <g>
            {cupBody}
            {[0,1,2,3,4,5,6,7].map(row => [0,1,2,3,4,5,6,7,8].map(col => (
              <rect key={`${row}-${col}`} x={27+col*5.5} y={30+row*7} width={5} height={6} rx={1} fill={C.yarn} opacity={0.7} />
            )))}
          </g>
        );
      case 'lemon':
        return (
          <g>
            {cupBody}
            {[0,1,2,3,4,5,6].map(row => [0,1,2,3,4,5,6].map(col => {
              const bump = (row+col)%2===0;
              return <circle key={`${row}-${col}`} cx={29+col*7} cy={33+row*8} r={bump?3.5:2} fill={bump?C.yarn:C.yarnLight} opacity={0.7} />;
            }))}
          </g>
        );
      case 'cable':
        return (
          <g>
            {cupBody}
            {[0,1,2,3,4].map(i => (
              <g key={i}>
                <path d={`M${32+i*10},30 Q${36+i*10},55 ${32+i*10},88`} stroke={C.yarn} strokeWidth="3" fill="none" opacity={0.8} />
                <path d={`M${38+i*10},30 Q${34+i*10},55 ${38+i*10},88`} stroke={C.yarnLight} strokeWidth="3" fill="none" opacity={0.6} />
              </g>
            ))}
          </g>
        );
      case 'mesh':
        return (
          <g>
            {cupBody}
            {[0,1,2,3,4,5,6,7].map(row => [0,1,2,3,4,5,6,7,8].map(col => (
              <rect key={`${row}-${col}`} x={27+col*5.5} y={30+row*7} width={4.5} height={6} rx={0.5} fill="none" stroke={C.yarn} strokeWidth="1.5" opacity={0.7} />
            )))}
          </g>
        );
      case 'twist':
        return (
          <g>
            {cupBody}
            <path d="M30,35 Q50,25 70,35 Q50,45 30,55 Q50,45 70,55 Q50,65 30,75 Q50,65 70,75 Q50,85 30,90" stroke={C.yarn} strokeWidth="4" fill="none" opacity={0.7} />
          </g>
        );
      case 'bow':
        return (
          <g>
            {cupBody}
            {[0,1,2,3,4,5,6,7,8].map(row => [0,1,2,3,4,5,6,7].map(col => (
              <rect key={`${row}-${col}`} x={27+col*6} y={30+row*6} width={5} height={5} rx={1} fill={C.yarn} opacity={0.65} />
            )))}
            <ellipse cx="50" cy="55" rx="12" ry="6" fill={C.yarnLight} opacity="0.9" />
            <circle cx="50" cy="55" r="3" fill={C.yarn} opacity="0.8" />
          </g>
        );
      case 'button':
        return (
          <g>
            {cupBody}
            {[0,1,2,3,4,5,6,7,8].map(row => [0,1,2,3,4,5,6,7].map(col => (
              <rect key={`${row}-${col}`} x={27+col*6} y={30+row*6} width={5} height={5} rx={1} fill={C.yarn} opacity={0.7} />
            )))}
            <circle cx="72" cy="55" r="5" fill={C.yarn} stroke={C.white} strokeWidth="1.5" />
            <circle cx="72" cy="55" r="1.5" fill={C.white} />
          </g>
        );
      case 'handle':
        return (
          <g>
            {cupBody}
            <path d="M75,35 Q92,35 92,55 Q92,75 75,75" stroke={C.cupDark} strokeWidth="4" fill="none" />
            {[0,1,2,3,4,5,6,7].map(row => [0,1,2,3,4,5,6].map(col => (
              <rect key={`${row}-${col}`} x={27+col*6.5} y={30+row*7} width={5.5} height={6} rx={1} fill={C.yarn} opacity={0.7} />
            )))}
          </g>
        );
      case 'colorblock':
        return (
          <g>
            {cupBody}
            <clipPath id="cb-cozy"><path d="M25,25 L22,85 Q22,90 28,90 L72,90 Q78,90 78,85 L75,25 Z" /></clipPath>
            <rect x="22" y="25" width="28" height="65" fill={C.yarn} clipPath="url(#cb-cozy)" opacity="0.7" />
            <rect x="50" y="25" width="28" height="65" fill={C.yarnLight} clipPath="url(#cb-cozy)" opacity={0.6} />
          </g>
        );
      default:
        return <g>{cupBody}</g>;
    }
  };

  return (
    <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
      <svg viewBox="0 0 100 95" className="w-full" style={{ background: C.bg }}>
        {renderCozy()}
      </svg>
      <div className="px-3 py-2.5 text-center">
        <p className="text-xs font-semibold text-[#1F1F1F] leading-tight">{label}</p>
      </div>
    </div>
  );
}
