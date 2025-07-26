import React, { useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Smartphone, Watch, Headphones, Laptop, Tv, Home } from 'lucide-react';

const Ecosystem = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeDevice, setActiveDevice] = useState(0);
  
  useScrollAnimation(sectionRef, () => setIsVisible(true));

  const devices = [
    { icon: Smartphone, name: 'iPhone', color: 'from-blue-600 to-purple-600', position: { x: 0, y: 0 } },
    { icon: Watch, name: 'Apple Watch', color: 'from-red-600 to-pink-600', position: { x: -120, y: -80 } },
    { icon: Headphones, name: 'AirPods', color: 'from-green-600 to-teal-600', position: { x: 120, y: -80 } },
    { icon: Laptop, name: 'MacBook', color: 'from-gray-600 to-gray-800', position: { x: -120, y: 80 } },
    { icon: Tv, name: 'Apple TV', color: 'from-purple-600 to-indigo-600', position: { x: 120, y: 80 } },
    { icon: Home, name: 'HomePod', color: 'from-yellow-600 to-orange-600', position: { x: 0, y: 120 } }
  ];

  const connections = [
    { from: 0, to: 1 }, { from: 0, to: 2 }, { from: 0, to: 3 }, 
    { from: 0, to: 4 }, { from: 0, to: 5 }, { from: 1, to: 2 }
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-6xl md:text-8xl font-thin mb-6">
            Ecosystem
          </h2>
          <p className="text-2xl text-gray-300 font-light">
            Works seamlessly with all your Apple devices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Ecosystem visualization */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative w-full max-w-lg mx-auto h-96">
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                {connections.map((connection, index) => {
                  const fromDevice = devices[connection.from];
                  const toDevice = devices[connection.to];
                  const fromX = 200 + fromDevice.position.x;
                  const fromY = 200 + fromDevice.position.y;
                  const toX = 200 + toDevice.position.x;
                  const toY = 200 + toDevice.position.y;
                  
                  return (
                    <line
                      key={index}
                      x1={fromX}
                      y1={fromY}
                      x2={toX}
                      y2={toY}
                      stroke="url(#connectionGradient)"
                      strokeWidth="2"
                      className={`transition-all duration-700 ${isVisible ? 'opacity-40' : 'opacity-0'}`}
                      style={{ 
                        transitionDelay: `${index * 200 + 800}ms`,
                        strokeDasharray: isVisible ? 'none' : '10,10',
                        animation: isVisible ? 'pulse 2s infinite' : 'none'
                      }}
                    />
                  );
                })}
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Device nodes */}
              {devices.map((device, index) => {
                const Icon = device.icon;
                const isActive = activeDevice === index;
                
                return (
                  <div
                    key={index}
                    className={`absolute transition-all duration-700 cursor-pointer ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    } ${isActive ? 'z-10' : 'z-0'}`}
                    style={{
                      left: `calc(50% + ${device.position.x}px)`,
                      top: `calc(50% + ${device.position.y}px)`,
                      transform: 'translate(-50%, -50%)',
                      transitionDelay: `${index * 200}ms`
                    }}
                    onClick={() => setActiveDevice(index)}
                    onMouseEnter={() => setActiveDevice(index)}
                  >
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${device.color} rounded-2xl shadow-2xl transition-all duration-300 ${
                      isActive ? 'scale-125 shadow-blue-500/50' : 'hover:scale-110'
                    }`}>
                      <div className="absolute inset-2 bg-black rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Pulse effect for active device */}
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl animate-ping opacity-30" />
                      )}
                    </div>

                    {/* Device label */}
                    <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 transition-all duration-300 ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                      <div className="bg-white/10 backdrop-blur-md rounded-lg px-3 py-1 border border-white/20">
                        <p className="text-xs text-white whitespace-nowrap">{device.name}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Central connectivity indicator */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className={`w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full transition-all duration-1000 ${
                  isVisible ? 'animate-pulse scale-100' : 'scale-0'
                }`} />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="space-y-6">
              {[
                {
                  title: 'Handoff',
                  description: 'Start something on iPhone and finish it on Mac',
                  icon: '🔄'
                },
                {
                  title: 'AirDrop',
                  description: 'Share files wirelessly between devices',
                  icon: '📤'
                },
                {
                  title: 'Universal Clipboard',
                  description: 'Copy on one device, paste on another',
                  icon: '📋'
                },
                {
                  title: 'Continuity Camera',
                  description: 'Use iPhone camera with your Mac',
                  icon: '📸'
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-6 p-6 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integration showcase */}
        <div className={`mt-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'iCloud', subtitle: 'Seamless sync', color: 'from-blue-500 to-cyan-500' },
              { title: 'HomeKit', subtitle: 'Smart home control', color: 'from-green-500 to-emerald-500' },
              { title: 'App Store', subtitle: 'Universal apps', color: 'from-purple-500 to-pink-500' }
            ].map((service, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${service.color} group cursor-pointer transition-all duration-300 hover:scale-105`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/80">{service.subtitle}</p>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;