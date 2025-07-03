import React from 'react';

interface ConcentrationItem {
  concentration: string;
  name: string;
  fillPercentage: number;
  fillColor: string;
}

const FragranceConcentrations: React.FC = () => {
  const concentrations: ConcentrationItem[] = [
    { concentration: '1-3%', name: 'Eau Fraîche', fillPercentage: 3, fillColor: '#FFEDC5' },
    { concentration: '2-4%', name: 'Eau de Cologne (EDC)', fillPercentage: 4, fillColor: '#FFE0B5' },
    { concentration: '2-7%', name: 'Body Mist', fillPercentage: 7, fillColor: '#FFD4A3' },
    { concentration: '2-7%', name: 'Hair Mist', fillPercentage: 7, fillColor: '#FFD4A3' },
    { concentration: '5-15%', name: 'Eau de Toilette (EDT)', fillPercentage: 15, fillColor: '#FFC891' },
    { concentration: '8-10%', name: 'Candles', fillPercentage: 10, fillColor: '#FFBC7F' },
    { concentration: '15-25%', name: 'Eau de Parfum (EDP)', fillPercentage: 25, fillColor: '#FFB06D' },
    { concentration: '15-30%', name: 'Diffusers', fillPercentage: 30, fillColor: '#FFA45B' },
    { concentration: '25-35%', name: 'Parfum', fillPercentage: 35, fillColor: '#FF9849' },
    { concentration: '35-45%', name: 'Extrait de Parfum', fillPercentage: 45, fillColor: '#FF8C37' },
  ];

  const DiffuserSVG = ({ fillPercentage, fillColor }: { fillPercentage: number; fillColor: string }) => {
    const liquidHeight = (fillPercentage / 100) * 80;
    const liquidY = 140 - liquidHeight;

    return (
      <svg className="w-full h-full" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`diffuser-liquid-${fillPercentage}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: fillColor, stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: fillColor, stopOpacity: 0.9 }} />
          </linearGradient>
          <clipPath id={`diffuserClip-${fillPercentage}`}>
            <rect x="25" y="60" width="50" height="80" rx="2" />
          </clipPath>
        </defs>
        
        {/* Liquid fill */}
        <rect 
          x="25" 
          y={liquidY} 
          width="50" 
          height={liquidHeight} 
          fill={`url(#diffuser-liquid-${fillPercentage})`} 
          clipPath={`url(#diffuserClip-${fillPercentage})`} 
        />
        
        {/* Reed sticks */}
        <path d="M 50 50 L 30 5 M 50 50 L 50 5 M 50 50 L 70 5" 
              stroke="#8B4A8C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        
        {/* Neck/collar */}
        <rect x="42" y="48" width="16" height="12" 
              fill="none" stroke="#8B4A8C" strokeWidth="2"/>
        
        {/* Container */}
        <rect x="25" y="60" width="50" height="80" rx="2" 
              fill="none" stroke="#8B4A8C" strokeWidth="2"/>
        
        {/* Label band */}
        <rect x="25" y="85" width="50" height="30" 
              fill="none" stroke="#8B4A8C" strokeWidth="2" strokeDasharray="2 2" opacity="0.5"/>
      </svg>
    );
  };

  const CandleSVG = ({ fillPercentage, fillColor }: { fillPercentage: number; fillColor: string }) => {
    const liquidHeight = (fillPercentage / 100) * 85;
    const liquidY = 125 - liquidHeight;

    return (
      <svg className="w-full h-full" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`candle-liquid-${fillPercentage}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: fillColor, stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: fillColor, stopOpacity: 0.9 }} />
          </linearGradient>
          <clipPath id={`candleClip-${fillPercentage}`}>
            <path d="M 20 40 L 20 120 Q 20 130 30 130 L 70 130 Q 80 130 80 120 L 80 40" />
          </clipPath>
        </defs>
        
        {/* Wax fill */}
        <rect 
          x="20" 
          y={liquidY} 
          width="60" 
          height={liquidHeight} 
          fill={`url(#candle-liquid-${fillPercentage})`} 
          clipPath={`url(#candleClip-${fillPercentage})`} 
        />
        
        {/* Flame */}
        <path d="M 50 15 Q 45 20 45 25 Q 45 30 50 30 Q 55 30 55 25 Q 55 20 50 15" 
              fill="none" stroke="#8B4A8C" strokeWidth="2"/>
        
        {/* Wick */}
        <line x1="50" y1="30" x2="50" y2="40" 
              stroke="#8B4A8C" strokeWidth="2"/>
        
        {/* Candle jar top */}
        <ellipse cx="50" cy="40" rx="30" ry="5" 
                 fill="none" stroke="#8B4A8C" strokeWidth="2"/>
        
        {/* Jar body */}
        <path d="M 20 40 L 20 120 Q 20 130 30 130 L 70 130 Q 80 130 80 120 L 80 40" 
              fill="none" stroke="#8B4A8C" strokeWidth="2"/>
        
        {/* Jar bottom */}
        <ellipse cx="50" cy="125" rx="30" ry="5" 
                 fill="none" stroke="#8B4A8C" strokeWidth="2"/>
        
        {/* Label band */}
        <rect x="20" y="70" width="60" height="30" 
              fill="none" stroke="#8B4A8C" strokeWidth="2" strokeDasharray="2 2" opacity="0.5"/>
      </svg>
    );
  };

  const HairMistSVG = ({ fillPercentage, fillColor }: { fillPercentage: number; fillColor: string }) => {
    const liquidHeight = (fillPercentage / 100) * 95;
    const liquidY = 135 - liquidHeight;

    return (
      <svg className="w-full h-full" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`hairmist-liquid-${fillPercentage}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: fillColor, stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: fillColor, stopOpacity: 0.9 }} />
          </linearGradient>
          <clipPath id={`hairmistClip-${fillPercentage}`}>
            <rect x="38" y="40" width="24" height="95" rx="2" />
          </clipPath>
        </defs>
        
        {/* Liquid fill */}
        <rect 
          x="38" 
          y={liquidY} 
          width="24" 
          height={liquidHeight} 
          fill={`url(#hairmist-liquid-${fillPercentage})`} 
          clipPath={`url(#hairmistClip-${fillPercentage})`} 
        />
        
        {/* Spray button/nozzle */}
        <rect x="47" y="10" width="6" height="8" 
              fill="none" stroke="#8B4A8C" strokeWidth="2"/>
        
        {/* Cap */}
        <rect x="44" y="18" width="12" height="15" 
              fill="none" stroke="#8B4A8C" strokeWidth="2"/>
        
        {/* Bottle neck */}
        <rect x="46" y="33" width="8" height="7" 
              fill="none" stroke="#8B4A8C" strokeWidth="2"/>
        
        {/* Bottle body */}
        <rect x="38" y="40" width="24" height="95" rx="2" 
              fill="none" stroke="#8B4A8C" strokeWidth="2"/>
        
        {/* Label area */}
        <rect x="38" y="65" width="24" height="35" 
              fill="none" stroke="#8B4A8C" strokeWidth="2" strokeDasharray="2 2" opacity="0.5"/>
      </svg>
    );
  };

  const BottleSVG = ({ fillPercentage, fillColor }: { fillPercentage: number; fillColor: string }) => {
    const liquidHeight = (fillPercentage / 100) * 266.854;
    const liquidY = 389.704 - liquidHeight;

    return (
      <svg className="w-full h-full" viewBox="0 0 398.479 398.479" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`liquid-${fillPercentage}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: fillColor, stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: fillColor, stopOpacity: 0.9 }} />
          </linearGradient>
          <clipPath id={`bottleClip-${fillPercentage}`}>
            <rect x="118.92" y="122.85" width="186.1" height="266.854" rx="4" />
          </clipPath>
        </defs>
        
        {/* Liquid fill */}
        <rect 
          x="118.92" 
          y={liquidY} 
          width="186.1" 
          height={liquidHeight} 
          fill={`url(#liquid-${fillPercentage})`} 
          clipPath={`url(#bottleClip-${fillPercentage})`} 
        />
        
        {/* Bottle outline */}
        <g fill="none" stroke="#8B4A8C" strokeWidth="8">
          <path d="M296.239,114.074H127.695c-4.826,0-8.775,3.95-8.775,8.776v266.854c0,4.826,3.949,8.774,8.775,8.774h168.544 c4.828,0,8.776-3.948,8.776-8.774V122.85C305.017,118.023,301.067,114.074,296.239,114.074z M275.96,251.889 c0,2.413-1.975,4.39-4.389,4.39H152.363c-2.414,0-4.389-1.977-4.389-4.39v-17.06c0-2.413,1.975-4.388,4.389-4.388h119.208 c2.414,0,4.389,1.975,4.389,4.388V251.889L275.96,251.889z"/>
          <path d="M247.847,20.604h-71.758c-3.3,0-6,2.699-6,6v71.688c0,3.3,2.7,6,6,6h71.758c3.301,0,6-2.7,6-6V26.604 C253.847,23.302,251.147,20.604,247.847,20.604z M203.47,72.482c0,1.603-1.312,2.913-2.914,2.913h-17.419 c-1.602,0-2.912-1.312-2.912-2.913V37.677c0-1.603,1.311-2.913,2.912-2.913h17.419c1.604,0,2.914,1.311,2.914,2.913V72.482z"/>
        </g>
      </svg>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-semibold text-brand-plum mb-8 text-center">
        Fragrance Concentrations Guide
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 lg:gap-6">
        {concentrations.map((item, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <div className="text-base md:text-lg font-semibold mb-3 text-brand-plum">
              {item.concentration}
            </div>
            <div className="w-16 h-20 md:w-20 md:h-24 mb-3">
              {item.name === 'Hair Mist' ? (
                <HairMistSVG fillPercentage={item.fillPercentage} fillColor={item.fillColor} />
              ) : item.name === 'Candles' ? (
                <CandleSVG fillPercentage={item.fillPercentage} fillColor={item.fillColor} />
              ) : item.name === 'Diffusers' ? (
                <DiffuserSVG fillPercentage={item.fillPercentage} fillColor={item.fillColor} />
              ) : (
                <BottleSVG fillPercentage={item.fillPercentage} fillColor={item.fillColor} />
              )}
            </div>
            <div className="text-xs md:text-sm font-medium leading-tight text-brand-mauve min-h-[3rem] flex items-center justify-center text-center">
              {item.name.split(' ').map((word, i) => (
                <React.Fragment key={i}>
                  {word}
                  {i < item.name.split(' ').length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-brand-peach/30 rounded-lg">
        <p className="text-sm text-gray-700 text-center">
          <span className="font-semibold">Note:</span> These are typical industry ranges. Actual concentrations may vary based on fragrance profile, regional regulations, and market preferences.
        </p>
      </div>
    </div>
  );
};

export default FragranceConcentrations;