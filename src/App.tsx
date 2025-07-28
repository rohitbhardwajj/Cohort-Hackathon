import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Design from './components/Design';
import Performance from './components/Performance';
import CameraSection from './components/Camera';
import Ecosystem from './components/Ecosystem';
import BuyNow from './components/BuyNow';

function App() {
  useEffect(() => {
  
    document.documentElement.style.scrollBehavior = 'smooth';
    
  
    document.title = 'iPhone 15 Pro - Apple';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">iPhone</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#design" className="text-gray-300 hover:text-white transition-colors">Design</a>
              <a href="#performance" className="text-gray-300 hover:text-white transition-colors">Performance</a>
              <a href="#camera" className="text-gray-300 hover:text-white transition-colors">Camera</a>
              <a href="#ecosystem" className="text-gray-300 hover:text-white transition-colors">Ecosystem</a>
              <a href="#buy" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors">Buy</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <Hero />
      <div id="design">
        <Design />
      </div>
      <div id="performance">
        <Performance />
      </div>
      <div id="camera">
        <CameraSection />
      </div>
      <div id="ecosystem">
        <Ecosystem />
      </div>
      <div id="buy">
        <BuyNow />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">iPhone</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">iPhone 15 Pro</a></li>
                <li><a href="#" className="hover:text-white transition-colors">iPhone 15</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compare</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">AppleCare+</a></li>
                <li><a href="#" className="hover:text-white transition-colors">iPhone Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Apple Store</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Find a Store</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shop Online</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trade In</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">About Apple</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Newsroom</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple Leadership</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Apple Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
