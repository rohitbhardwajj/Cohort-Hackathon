import React, { useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Check, Star, Shield, Truck, CreditCard } from 'lucide-react';

const BuyNow = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedModel, setSelectedModel] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(1);
  
  useScrollAnimation(sectionRef, () => setIsVisible(true));

  const models = [
    { name: 'iPhone 15 Pro', price: 999, colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'] },
    { name: 'iPhone 15 Pro Max', price: 1199, colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'] }
  ];

  const storageOptions = [
    { size: '128GB', price: 0 },
    { size: '256GB', price: 100 },
    { size: '512GB', price: 300 },
    { size: '1TB', price: 500 }
  ];

  const features = [
    { icon: Shield, text: 'AppleCare+ available' },
    { icon: Truck, text: 'Free delivery' },
    { icon: CreditCard, text: 'Monthly payments available' },
    { icon: Star, text: '14-day return policy' }
  ];

  const currentPrice = models[selectedModel].price + storageOptions[selectedStorage].price;

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-6xl md:text-8xl font-thin mb-6">
            Buy iPhone 15 Pro
          </h2>
          <p className="text-2xl text-gray-300 font-light">
            From ${models[0].price}. Available now.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Product configurator */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            {/* Model selection */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">Choose your model</h3>
              <div className="grid gap-4">
                {models.map((model, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedModel === index 
                        ? 'border-blue-500 bg-blue-500/10' 
                        : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                    }`}
                    onClick={() => setSelectedModel(index)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-xl font-semibold">{model.name}</h4>
                        <p className="text-gray-400">From ${model.price}</p>
                      </div>
                      {selectedModel === index && (
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Storage selection */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">Choose storage</h3>
              <div className="grid grid-cols-2 gap-4">
                {storageOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedStorage === index 
                        ? 'border-blue-500 bg-blue-500/10' 
                        : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                    }`}
                    onClick={() => setSelectedStorage(index)}
                  >
                    <div className="text-center">
                      <div className="text-lg font-semibold">{option.size}</div>
                      <div className="text-sm text-gray-400">
                        {option.price > 0 ? `+$${option.price}` : 'Base price'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Color selection */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">Choose finish</h3>
              <div className="grid grid-cols-2 gap-4">
                {models[selectedModel].colors.map((color, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-gray-700 bg-gray-800/50 hover:border-gray-600 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full ${
                        color.includes('Natural') ? 'bg-gray-400' :
                        color.includes('Blue') ? 'bg-blue-600' :
                        color.includes('White') ? 'bg-gray-200' : 'bg-gray-900'
                      }`} />
                      <span className="text-sm">{color}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Purchase summary */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="sticky top-8">
              {/* Product image placeholder */}
              <div className="relative mb-8">
                <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl flex items-center justify-center border border-gray-700">
                  <div className="text-center">
                    <div className="w-32 h-40 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl mx-auto mb-4 relative">
                      <div className="absolute inset-2 bg-black rounded-xl" />
                    </div>
                    <p className="text-gray-400">{models[selectedModel].name}</p>
                    <p className="text-sm text-gray-500">{storageOptions[selectedStorage].size}</p>
                  </div>
                </div>
              </div>

              {/* Price summary */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl font-semibold">Total</span>
                  <span className="text-3xl font-bold">${currentPrice.toLocaleString()}</span>
                </div>
                
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">{models[selectedModel].name}</span>
                    <span>${models[selectedModel].price}</span>
                  </div>
                  {storageOptions[selectedStorage].price > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">{storageOptions[selectedStorage].size} upgrade</span>
                      <span>+${storageOptions[selectedStorage].price}</span>
                    </div>
                  )}
                </div>

                <div className="text-center text-sm text-gray-400 mb-6">
                  Or ${(currentPrice / 24).toFixed(0)}/mo. for 24 mo.*
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    Add to Bag
                  </button>
                  <button className="w-full bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300">
                    Buy with Apple Pay
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <Icon className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyNow;