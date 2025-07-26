import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Zap, Camera, Smartphone } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX - innerWidth / 2) / 50,
        y: (clientY - innerHeight / 2) / 50,
      });
    };

    const handleScroll = () => {
      if (phoneRef.current) {
        const scrollY = window.scrollY;
        const rotation = Math.min(scrollY / 10, 45);
        phoneRef.current.style.transform = `
          perspective(1000px) 
          rotateX(${rotation}deg) 
          rotateY(${mousePosition.x}deg)
          translateZ(0)
        `;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mousePosition.x]);

  return (
    <section ref={heroRef} className="relative min-h-screen bg-black text-white overflow-hidden mb-3">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-black animate-pulse" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Header text */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-thin tracking-tight my-[80px]">
            iPhone 15 Pro
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl">
            Forged in titanium. Built for Apple Intelligence.
          </p>
        </div>

        {/* 3D iPhone visualization */}
        <div className="relative mb-16">
          <div
            ref={phoneRef}
            className="relative w-80 h-96 md:w-96 md:h-[480px] transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(15deg) rotateY(${mousePosition.x}deg) translateZ(0)`
            }}
          >
            {/* Phone body */}
            <img src="https://www.apple.com/v/iphone/home/cc/images/overview/select/iphone_16pro__erw9alves2qa_large_2x.png" alt="" />

            {/* Floating specs */}
            <div className="absolute -right-20 top-10 animate-float">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                <Zap className="w-6 h-6 text-yellow-400 mb-2" />
                <p className="text-xs text-white">A17 Pro</p>
              </div>
            </div>

            <div className="absolute -left-20 top-32 animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                <Camera className="w-6 h-6 text-blue-400 mb-2" />
                <p className="text-xs text-white">48MP</p>
              </div>
            </div>

            <div className="absolute -right-16 bottom-20 animate-float" style={{ animationDelay: '2s' }}>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                <Smartphone className="w-6 h-6 text-purple-400 mb-2" />
                <p className="text-xs text-white">Titanium</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <span className="relative z-10">Explore iPhone 15 Pro</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;