import React from 'react';

const gradients = [
  // Sunset & Warm
  { name: 'Sunset Orange', className: 'from-orange-400 to-red-500' },
  { name: 'Golden Hour', className: 'from-yellow-400 to-orange-500' },
  { name: 'Fire', className: 'from-red-400 to-pink-500' },
  { name: 'Warm Coral', className: 'from-pink-400 to-red-400' },
  { name: 'Peach', className: 'from-orange-300 to-pink-400' },

  // Cool Gradients
  { name: 'Ocean Blue', className: 'from-blue-400 to-cyan-500' },
  { name: 'Mint Fresh', className: 'from-green-400 to-blue-500' },
  { name: 'Arctic', className: 'from-cyan-300 to-blue-400' },
  { name: 'Teal Wave', className: 'from-teal-400 to-blue-500' },
  { name: 'Ice', className: 'from-blue-200 to-cyan-300' },

  // Vibrant Multi-Color
  { name: 'Rainbow', className: 'from-purple-400 via-pink-500 to-red-500' },
  { name: 'Tropical', className: 'from-green-400 via-blue-500 to-purple-600' },
  { name: 'Neon', className: 'from-pink-500 via-red-500 to-yellow-500' },
  { name: 'Galaxy', className: 'from-purple-600 via-blue-600 to-cyan-400' },
  { name: 'Aurora', className: 'from-green-300 via-blue-500 to-purple-600' },

  // Dark & Mysterious
  { name: 'Dark Purple', className: 'from-purple-900 to-purple-600' },
  { name: 'Midnight', className: 'from-gray-900 to-purple-900' },
  { name: 'Deep Ocean', className: 'from-blue-900 to-cyan-600' },
  { name: 'Shadow', className: 'from-gray-800 to-blue-800' },
  { name: 'Cosmic', className: 'from-indigo-900 to-purple-800' },

  // Elegant & Professional
  { name: 'Silver', className: 'from-gray-400 to-gray-600' },
  { name: 'Rose Gold', className: 'from-pink-300 to-yellow-300' },
  { name: 'Emerald', className: 'from-emerald-400 to-teal-500' },
  { name: 'Sapphire', className: 'from-blue-600 to-indigo-700' },
  { name: 'Platinum', className: 'from-slate-300 to-slate-500' },

  // Creative & Artistic
  { name: 'Lavender Dreams', className: 'from-purple-300 to-pink-300' },
  { name: 'Forest', className: 'from-green-600 to-emerald-700' },
  { name: 'Sunset Sky', className: 'from-orange-400 via-red-400 to-purple-500' },
  { name: 'Cotton Candy', className: 'from-pink-300 to-blue-300' },
  { name: 'Autumn', className: 'from-yellow-600 to-red-600' },
];

const ColorShowcase = () => {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {gradients.map((gradient, index) => (
        <div
          key={index}
          className={`rounded-xl p-6 h-28 text-white font-semibold flex items-center justify-center text-center bg-gradient-to-r ${gradient.className}`}
        >
          {gradient.name}
        </div>
      ))}
    </div>
  );
};

export default ColorShowcase;
