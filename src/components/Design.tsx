import React, { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Design = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useScrollAnimation(sectionRef, () => setIsVisible(true));

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h2 className="text-5xl md:text-7xl font-thin mb-8">
              Titanium.
              <br />
              <span className="text-gray-400">So strong.</span>
              <br />
              <span className="text-gray-400">So light.</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Grade 5 titanium, the same alloy used in spacecraft, delivers an exceptional strength-to-weight ratio.
            </p>

            {/* Feature highlights */}
            <div className="space-y-6">
              {[
                { label: 'Weight', value: '187g', desc: '19g lighter than iPhone 14 Pro' },
                { label: 'Strength', value: '5x', desc: 'stronger than aluminum' },
                { label: 'Durability', value: '100%', desc: 'aerospace-grade titanium' }
              ].map((item, index) => (
                <div 
                  key={item.label}
                  className={`flex items-center space-x-6 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold">{item.value}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.label}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Phone visualization */}
          <div ref={phoneRef} className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
         <video src="https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome3/large_2x.mp4" autoPlay loop muted className="w-full h-auto rounded-[3rem] shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;