import React, { useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Camera, Aperture, Zap, Moon } from 'lucide-react';

const CameraSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  
  useScrollAnimation(sectionRef, () => setIsVisible(true));

  const cameraFeatures = [
    {
      icon: Camera,
      title: '48MP Main',
      subtitle: 'f/1.78 aperture',
      description: 'Our most advanced camera system ever',
      color: 'from-blue-600 to-purple-600'
    },
    {
      icon: Aperture,
      title: '13mm Ultra Wide',
      subtitle: 'f/2.2 aperture',
      description: 'Capture 4x more scene',
      color: 'from-green-600 to-blue-600'
    },
    {
      icon: Zap,
      title: '77mm Telephoto',
      subtitle: 'f/2.8 aperture',
      description: '3x optical zoom',
      color: 'from-yellow-600 to-red-600'
    },
    {
      icon: Moon,
      title: 'Night mode',
      subtitle: 'All cameras',
      description: 'Stunning low-light photos',
      color: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-6xl md:text-8xl font-thin mb-6">
            Camera
          </h2>
          <p className="text-2xl text-gray-300 font-light">
            Capture like never before.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Camera system visualization */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main camera module */}
              <div className="relative w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-700">
                {/* Camera lenses */}
                <div className="absolute top-8 left-8 grid grid-cols-2 gap-4">
                  {cameraFeatures.slice(0, 3).map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={index}
                        className={`relative w-24 h-24 bg-gradient-to-br ${feature.color} rounded-2xl border-4 border-gray-600 cursor-pointer transition-all duration-300 hover:scale-110 ${
                          activeFeature === index ? 'ring-4 ring-white ring-opacity-50' : ''
                        }`}
                        onClick={() => setActiveFeature(index)}
                      >
                        <div className="absolute inset-2 bg-black rounded-xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        {/* Lens elements */}
                        <div className="absolute inset-4 border border-gray-400 rounded-full opacity-30" />
                        <div className="absolute inset-6 border border-gray-400 rounded-full opacity-20" />
                      </div>
                    );
                  })}
                </div>

                {/* Flash and sensors */}
                <div className="absolute top-8 right-8 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-yellow-200 rounded-full" />
                </div>

                {/* LiDAR scanner */}
                <div className="absolute bottom-8 right-8 w-8 h-8 bg-red-600 rounded-full animate-pulse" />

                {/* Gloss effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-3xl" />
              </div>

              {/* Floating camera specs */}
              {isVisible && (
                <>
                  <div className="absolute -right-20 top-16 animate-fade-in-left" style={{ animationDelay: '600ms' }}>
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                      <p className="text-xs text-white">48MP</p>
                      <p className="text-xs text-gray-300">ProRAW</p>
                    </div>
                  </div>
                  
                  <div className="absolute -left-20 bottom-16 animate-fade-in-right" style={{ animationDelay: '800ms' }}>
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                      <p className="text-xs text-white">3x Zoom</p>
                      <p className="text-xs text-gray-300">Optical</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Features list */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            {cameraFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center space-x-6 p-6 rounded-2xl transition-all duration-300 cursor-pointer hover:bg-white/5 ${
                    activeFeature === index ? 'bg-white/10 scale-105' : ''
                  }`}
                  onClick={() => setActiveFeature(index)}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                    <p className="text-blue-400 mb-2">{feature.subtitle}</p>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sample photos showcase */}
        <div className={`mt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Portrait Mode', subtitle: 'Depth Control', img: 'https://images.iphonephotographyschool.com/26780/1120/Portrait-Mode.jpg' },
              { title: 'Night Mode', subtitle: 'Low Light', img: 'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?cs=srgb&dl=pexels-pixabay-355465.jpg&fm=jpg' },
              { title: 'Action Mode', subtitle: 'Video Stabilization', img: 'https://i.ytimg.com/vi/VG1VyhNwbts/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA63JZ-7HSxw2VegqvRUH3M3HpqpA' }
            ].map((photo, index) => (
              <div
                key={index}
                className="relative kdkdk h-64 rounded-2xl overflow-hidden group cursor-pointer"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <img src={photo.img} alt="" />
                <div className={`absolute inset-0 bg-gradient-to-br ${photo.gradient} opacity-80 group-hover:opacity-60 transition-opacity duration-300`} />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
                    <p className="text-white/80">{photo.subtitle}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CameraSection;