interface StitchSwatchProps {
  pattern: 'sc' | 'hdc' | 'dc' | 'moss' | 'lemon' | 'suzette' | 'alpine' | 'seed' | 'bobble' | 'puff' | 'popcorn' | 'waffle' | 'basketweave' | 'cable' | 'honeycomb' | 'granite' | 'ribbing' | 'thermal' | 'crocodile' | 'herringbone' | 'granny' | 'vstitch' | 'shell' | 'chevron' | 'mesh' | 'eyelet' | 'ladder';
  label: string;
}

const COLORS = {
  bg: '#F5F0E8',
  yarn: '#2F4A3A',
  yarnLight: '#4A7A5E',
  shadow: '#E9E1D7',
};

export default function StitchSwatch({ pattern, label }: StitchSwatchProps) {
  const renderPattern = () => {
    switch (pattern) {
      case 'sc':
        return (
          <g>
            {[0,1,2,3,4,5,6,7].map(row => 
              [0,1,2,3,4,5,6,7,8,9].map(col => (
                <rect key={`${row}-${col}`} x={col*10+2} y={row*12+2} width={8} height={10} rx={2} fill={COLORS.yarn} opacity={0.85} />
              ))
            )}
          </g>
        );
      case 'hdc':
        return (
          <g>
            {[0,1,2,3,4,5,6].map(row => 
              [0,1,2,3,4,5,6,7,8].map(col => (
                <rect key={`${row}-${col}`} x={col*11+1} y={row*14+1} width={9} height={12} rx={2} fill={COLORS.yarn} opacity={0.85} />
              ))
            )}
          </g>
        );
      case 'dc':
        return (
          <g>
            {[0,1,2,3,4,5].map(row => 
              [0,1,2,3,4,5,6,7].map(col => (
                <rect key={`${row}-${col}`} x={col*12+1} y={row*16+1} width={10} height={14} rx={2} fill={COLORS.yarn} opacity={0.8} />
              ))
            )}
          </g>
        );
      case 'moss':
        return (
          <g>
            {[0,1,2,3,4,5,6,7].map(row => 
              [0,1,2,3,4,5,6,7,8,9].map(col => {
                const offset = row % 2 === 0 ? 0 : 5;
                return <rect key={`${row}-${col}`} x={col*10+offset+1} y={row*12+1} width={7} height={10} rx={1.5} fill={col % 2 === row % 2 ? COLORS.yarn : COLORS.yarnLight} opacity={0.85} />;
              })
            )}
          </g>
        );
      case 'lemon':
        return (
          <g>
            {[0,1,2,3,4,5,6].map(row => 
              [0,1,2,3,4,5,6,7,8].map(col => {
                const bump = (row + col) % 2 === 0;
                return <circle key={`${row}-${col}`} cx={col*12+6} cy={row*14+7} r={bump ? 5 : 3.5} fill={bump ? COLORS.yarn : COLORS.yarnLight} opacity={0.85} />;
              })
            )}
          </g>
        );
      case 'suzette':
        return (
          <g>
            {[0,1,2,3,4,5].map(row => 
              [0,1,2,3,4,5,6,7].map(col => {
                const scallop = col % 2 === 0;
                return <ellipse key={`${row}-${col}`} cx={col*12+6} cy={row*16+8} rx={scallop ? 6 : 4} ry={scallop ? 7 : 5} fill={scallop ? COLORS.yarn : COLORS.yarnLight} opacity={0.85} />;
              })
            )}
          </g>
        );
      case 'alpine':
        return (
          <g>
            {[0,1,2,3,4,5,6].map(row => 
              [0,1,2,3,4,5,6,7].map(col => {
                const diamond = (row + col) % 3 === 0;
                return <polygon key={`${row}-${col}`} points={`${col*13+6},${row*15} ${col*13+12},${row*15+8} ${col*13+6},${row*15+15} ${col*13},${row*15+8}`} fill={diamond ? COLORS.yarn : COLORS.yarnLight} opacity={diamond ? 0.9 : 0.5} />;
              })
            )}
          </g>
        );
      case 'seed':
        return (
          <g>
            {[0,1,2,3,4,5,6,7].map(row => 
              [0,1,2,3,4,5,6,7,8,9].map(col => {
                const dot = (row + col) % 2 === 0;
                return <circle key={`${row}-${col}`} cx={col*10+5} cy={row*12+6} r={dot ? 4 : 2.5} fill={dot ? COLORS.yarn : COLORS.yarnLight} opacity={0.85} />;
              })
            )}
          </g>
        );
      case 'bobble':
        return (
          <g>
            {[0,1,2,3,4].map(row => 
              [0,1,2,3,4,5,6].map(col => (
                <circle key={`${row}-${col}`} cx={col*14+7} cy={row*20+10} r={7} fill={COLORS.yarn} opacity={0.9} />
              ))
            )}
          </g>
        );
      case 'puff':
        return (
          <g>
            {[0,1,2,3,4].map(row => 
              [0,1,2,3,4,5,6].map(col => (
                <ellipse key={`${row}-${col}`} cx={col*14+7} cy={row*20+10} rx={6} ry={8} fill={COLORS.yarn} opacity={0.85} />
              ))
            )}
          </g>
        );
      case 'popcorn':
        return (
          <g>
            {[0,1,2,3,4].map(row => 
              [0,1,2,3,4,5].map(col => (
                <g key={`${row}-${col}`}>
                  <circle cx={col*16+8} cy={row*20+10} r={8} fill={COLORS.yarn} opacity={0.9} />
                  <circle cx={col*16+8} cy={row*20+10} r={4} fill={COLORS.yarnLight} opacity={0.6} />
                </g>
              ))
            )}
          </g>
        );
      case 'waffle':
        return (
          <g>
            {[0,1,2,3,4,5].map(row => 
              [0,1,2,3,4,5,6].map(col => (
                <g key={`${row}-${col}`}>
                  <rect x={col*14+1} y={row*16+1} width={12} height={14} rx={2} fill={COLORS.yarn} opacity={0.9} />
                  <rect x={col*14+4} y={row*16+4} width={6} height={8} rx={1} fill={COLORS.yarnLight} opacity={0.5} />
                </g>
              ))
            )}
          </g>
        );
      case 'basketweave':
        return (
          <g>
            {[0,1,2,3,4].map(row => 
              [0,1,2,3,4,5].map(col => {
                const weave = (Math.floor(row/2) + col) % 2 === 0;
                return <rect key={`${row}-${col}`} x={col*16+1} y={row*18+1} width={14} height={16} rx={2} fill={weave ? COLORS.yarn : COLORS.yarnLight} opacity={0.85} />;
              })
            )}
          </g>
        );
      case 'cable':
        return (
          <g>
            {[0,1,2,3,4,5].map(row => 
              <g key={row}>
                <path d={`M${10},${row*16} Q${20},${row*16+8} ${10},${row*16+16}`} stroke={COLORS.yarn} strokeWidth={4} fill="none" opacity={0.9} />
                <path d={`M${30},${row*16} Q${40},${row*16+8} ${30},${row*16+16}`} stroke={COLORS.yarnLight} strokeWidth={4} fill="none" opacity={0.8} />
                <path d={`M${50},${row*16} Q${60},${row*16+8} ${50},${row*16+16}`} stroke={COLORS.yarn} strokeWidth={4} fill="none" opacity={0.9} />
                <path d={`M${70},${row*16} Q${80},${row*16+8} ${70},${row*16+16}`} stroke={COLORS.yarnLight} strokeWidth={4} fill="none" opacity={0.8} />
              </g>
            )}
          </g>
        );
      case 'honeycomb':
        return (
          <g>
            {[0,1,2,3,4].map(row => 
              [0,1,2,3,4,5].map(col => {
                const x = col * 18 + (row % 2 === 0 ? 0 : 9);
                return <polygon key={`${row}-${col}`} points={`${x+9},${row*16} ${x+18},${row*16+8} ${x+18},${row*16+24} ${x+9},${row*16+32} ${x},${row*16+24} ${x},${row*16+8}`} fill="none" stroke={COLORS.yarn} strokeWidth={2.5} opacity={0.85} />;
              })
            )}
          </g>
        );
      case 'granite':
        return (
          <g>
            {[0,1,2,3,4,5,6].map(row => 
              [0,1,2,3,4,5,6,7].map(col => {
                const dot = (row * 3 + col * 7) % 5 < 2;
                return <circle key={`${row}-${col}`} cx={col*12+6} cy={row*14+7} r={dot ? 4.5 : 2} fill={dot ? COLORS.yarn : COLORS.yarnLight} opacity={0.85} />;
              })
            )}
          </g>
        );
      case 'ribbing':
        return (
          <g>
            {[0,1,2,3,4,5,6,7].map(row => 
              [0,1,2,3,4,5,6,7,8,9].map(col => (
                <rect key={`${row}-${col}`} x={col*10+1} y={row*12+1} width={8} height={10} rx={1} fill={col % 2 === 0 ? COLORS.yarn : COLORS.yarnLight} opacity={0.85} />
              ))
            )}
          </g>
        );
      case 'thermal':
        return (
          <g>
            {[0,1,2,3,4,5].map(row => 
              [0,1,2,3,4,5,6].map(col => (
                <g key={`${row}-${col}`}>
                  <rect x={col*14+1} y={row*18+1} width={12} height={16} rx={2} fill={COLORS.yarn} opacity={0.85} />
                  <rect x={col*14+4} y={row*18+5} width={6} height={8} rx={1} fill={COLORS.yarnLight} opacity={0.4} />
                </g>
              ))
            )}
          </g>
        );
      case 'crocodile':
        return (
          <g>
            {[0,1,2,3].map(row => 
              [0,1,2,3,4,5].map(col => {
                const x = col * 16 + (row % 2 === 0 ? 0 : 8);
                return <path key={`${row}-${col}`} d={`M${x+8},${row*24} L${x+16},${row*24+12} L${x+8},${row*24+24} L${x},${row*24+12} Z`} fill={COLORS.yarn} opacity={0.85} />;
              })
            )}
          </g>
        );
      case 'herringbone':
        return (
          <g>
            {[0,1,2,3,4,5,6].map(row => 
              [0,1,2,3,4,5,6,7].map(col => (
                <g key={`${row}-${col}`}>
                  <line x1={col*12+2} y1={row*14+12} x2={col*12+10} y2={row*14+2} stroke={COLORS.yarn} strokeWidth={3} opacity={0.85} />
                  <line x1={col*12+2} y1={row*14+2} x2={col*12+10} y2={row*14+12} stroke={COLORS.yarnLight} strokeWidth={2} opacity={0.5} />
                </g>
              ))
            )}
          </g>
        );
      case 'granny':
        return (
          <g>
            {[0,1,2,3,4].map(row => 
              [0,1,2,3,4,5].map(col => (
                <g key={`${row}-${col}`}>
                  <circle cx={col*16+5} cy={row*20+6} r={3} fill={COLORS.yarn} opacity={0.9} />
                  <circle cx={col*16+11} cy={row*20+6} r={3} fill={COLORS.yarn} opacity={0.9} />
                  <circle cx={col*16+8} cy={row*20+14} r={3} fill={COLORS.yarnLight} opacity={0.7} />
                </g>
              ))
            )}
          </g>
        );
      case 'vstitch':
        return (
          <g>
            {[0,1,2,3,4,5].map(row => 
              [0,1,2,3,4,5,6].map(col => (
                <g key={`${row}-${col}`}>
                  <line x1={col*14+3} y1={row*16+14} x2={col*14+7} y2={row*16+2} stroke={COLORS.yarn} strokeWidth={2.5} opacity={0.85} />
                  <line x1={col*14+11} y1={row*16+14} x2={col*14+7} y2={row*16+2} stroke={COLORS.yarn} strokeWidth={2.5} opacity={0.85} />
                </g>
              ))
            )}
          </g>
        );
      case 'shell':
        return (
          <g>
            {[0,1,2,3,4].map(row => 
              [0,1,2,3,4,5].map(col => {
                const x = col * 18 + (row % 2 === 0 ? 0 : 9);
                return (
                  <g key={`${row}-${col}`}>
                    <path d={`M${x+9},${row*20+18} Q${x+2},${row*20+8} ${x+9},${row*20+2} Q${x+16},${row*20+8} ${x+9},${row*20+18}`} fill={COLORS.yarn} opacity={0.85} />
                  </g>
                );
              })
            )}
          </g>
        );
      case 'chevron':
        return (
          <g>
            {[0,1,2,3,4,5].map(row => 
              <polyline key={row} points={[0,1,2,3,4,5,6,7,8,9,10].map(col => `${col*9},${row*16 + (col % 2 === 0 ? 0 : 8)}`).join(' ')} fill="none" stroke={row % 2 === 0 ? COLORS.yarn : COLORS.yarnLight} strokeWidth={3.5} opacity={0.85} />
            )}
          </g>
        );
      case 'mesh':
        return (
          <g>
            {[0,1,2,3,4,5,6].map(row => 
              [0,1,2,3,4,5,6,7,8].map(col => (
                <g key={`${row}-${col}`}>
                  <rect x={col*11+1} y={row*14+1} width={9} height={12} rx={1} fill="none" stroke={COLORS.yarn} strokeWidth={2} opacity={0.85} />
                </g>
              ))
            )}
          </g>
        );
      case 'eyelet':
        return (
          <g>
            {[0,1,2,3,4,5,6].map(row => 
              [0,1,2,3,4,5,6,7].map(col => {
                const hole = (row + col) % 3 === 0;
                return hole 
                  ? <circle key={`${row}-${col}`} cx={col*12+6} cy={row*14+7} r={3.5} fill="none" stroke={COLORS.yarn} strokeWidth={2} opacity={0.85} />
                  : <rect key={`${row}-${col}`} x={col*12+1} y={row*14+1} width={10} height={12} rx={2} fill={COLORS.yarn} opacity={0.7} />;
              })
            )}
          </g>
        );
      case 'ladder':
        return (
          <g>
            {[0,1,2,3,4,5,6].map(row => 
              <g key={row}>
                {[0,1,2,3,4,5,6,7].map(col => (
                  <g key={`${row}-${col}`}>
                    <line x1={col*12+2} y1={row*14+2} x2={col*12+2} y2={row*14+12} stroke={COLORS.yarn} strokeWidth={2.5} opacity={0.85} />
                    {col % 2 === 0 && <line x1={col*12+2} y1={row*14+7} x2={col*12+14} y2={row*14+7} stroke={COLORS.yarnLight} strokeWidth={2} opacity={0.6} />}
                  </g>
                ))}
              </g>
            )}
          </g>
        );
      default:
        return <rect x={5} y={5} width={90} height={90} rx={4} fill={COLORS.yarn} opacity={0.3} />;
    }
  };

  return (
    <div className="bg-[#FFFFFF] border border-[#E9E1D7] rounded-xl overflow-hidden shadow-sm">
      <svg viewBox="0 0 100 100" className="w-full aspect-square" style={{ background: COLORS.bg }}>
        {renderPattern()}
      </svg>
      <div className="px-3 py-2.5 text-center">
        <p className="text-xs font-semibold text-[#1F1F1F] leading-tight">{label}</p>
      </div>
    </div>
  );
}
