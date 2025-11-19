import React from 'react';
import { motion } from 'motion/react';

export function SamplePage() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 p-16">
      {/* Floating elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 text-8xl"
      >
        📖
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute bottom-20 left-20 text-8xl"
      >
        ✨
      </motion.div>
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="h-full flex flex-col items-center justify-center"
      >
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-16 shadow-2xl border-4 border-green-500 max-w-4xl"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.h1 
            className="text-green-600 text-center mb-8"
            animate={{ 
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            More Pages Coming Soon!
          </motion.h1>
          
          <motion.div 
            className="text-center text-6xl mb-8"
            animate={{ 
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            📖✨🎨
          </motion.div>

          <motion.p 
            className="text-gray-700 text-2xl text-center mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            This is a placeholder for additional magazine content.
          </motion.p>

          <motion.div 
            className="bg-yellow-50 border-4 border-yellow-400 rounded-2xl p-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-gray-800 text-xl text-center">
              You can add more pages by importing additional Figma designs
              or creating custom content pages!
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
