import React, { useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Cpu, Zap, Gamepad2, Video } from 'lucide-react';

const Performance = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useScrollAnimation(sectionRef, () => setIsVisible(true));

  const performanceMetrics = [
    { icon: Cpu, label: 'CPU Performance', value: '20%', desc: 'faster than A16 Bionic' },
    { icon: Zap, label: 'GPU Performance', value: '10%', desc: 'faster graphics' },
    { icon: Gamepad2, label: 'Gaming', value: '4x', desc: 'ray tracing performance' },
    { icon: Video, label: 'Video', value: '2x', desc: 'faster video encoding' }
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-6xl md:text-8xl font-thin mb-6">
            A17 Pro
          </h2>
          <p className="text-2xl text-gray-300 font-light">
            Game‑changing chip. Groundbreaking performance.
          </p>
        </div>

        {/* Chip visualization */}
        <div className={`relative mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="relative w-80 h-80 mx-auto">
            {/* Chip base */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl shadow-2xl border border-blue-700">
              {/* Circuit patterns */}
              <div className="absolute inset-4 bg-gradient-to-br from-blue-800 to-purple-800 rounded-2xl">
                {/* Animated circuits */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 280">
                  {[...Array(12)].map((_, i) => (
                    <g key={i}>
                      <circle
                        cx={40 + (i % 4) * 60}
                        cy={40 + Math.floor(i / 4) * 60}
                        r="3"
                        fill="#60A5FA"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 200}ms` }}
                      />
                      <path
                        d={`M${40 + (i % 4) * 60},${40 + Math.floor(i / 4) * 60} L${100 + (i % 4) * 60},${40 + Math.floor(i / 4) * 60}`}
                        stroke="#3B82F6"
                        strokeWidth="1"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 200}ms` }}
                      />
                    </g>
                  ))}
                </svg>
              </div>
              
              {/* Central processor */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center animate-pulse">
                <span className="text-black font-bold text-lg">A17</span>
              </div>
            </div>

            {/* Performance indicators */}
            {isVisible && performanceMetrics.map((metric, index) => {
              const Icon = metric.icon;
              const angle = (index * 90) * (Math.PI / 180);
              const radius = 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={metric.label}
                  className="absolute animate-fade-in-scale"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${index * 300}ms`
                  }}
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center min-w-32">
                    <Icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-xs text-gray-300">{metric.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Performance comparison */}
        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {[
            { title: 'Neural Engine', subtitle: '16-core', description: 'Up to 35 trillion operations per second' },
            { title: 'GPU', subtitle: '6-core', description: 'Hardware-accelerated ray tracing' },
            { title: 'CPU', subtitle: '6-core', description: '2 performance + 4 efficiency cores' }
          ].map((item, index) => (
            <div
              key={item.title}
              className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-blue-400 text-lg font-medium mb-4">{item.subtitle}</p>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performance;