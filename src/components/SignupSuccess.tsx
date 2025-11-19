import React, { useEffect } from 'react';
import { motion } from 'motion/react';

interface SignupSuccessProps {
  username: string;
  onContinue: () => void;
}

export function SignupSuccess({ username, onContinue }: SignupSuccessProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onContinue();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onContinue]);

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 md:p-12 lg:p-16 max-w-3xl w-full text-center my-4 sm:my-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 sm:mb-8"
        >
          🎉
        </motion.div>

        <h1 className="text-green-600 mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl font-bold">
          Account Created Successfully!
        </h1>

        <div className="bg-yellow-50 border-2 sm:border-4 border-yellow-400 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <p className="text-gray-800 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4">
            📝 <strong>Important!</strong>
          </p>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-2">
            Remember your username for logging in next time:
          </p>
          <p className="text-red-600 text-xl sm:text-2xl md:text-3xl mt-2 sm:mt-4 break-all">
            <strong>{username}</strong>
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white px-8 sm:px-12 md:px-16 py-4 sm:py-6 md:py-8 rounded-full text-lg sm:text-xl md:text-2xl font-bold hover:from-green-600 hover:via-blue-600 hover:to-purple-600 transition-all shadow-2xl border-2 sm:border-4 border-white transform hover:shadow-[0_0_30px_rgba(0,200,100,0.6)] text-center w-full sm:w-auto"
        >
          🚀 Start Reading Now! 📖
        </motion.button>

        <p className="text-gray-500 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg">
          (Automatically starting in 5 seconds...)
        </p>
      </motion.div>
    </div>
  );
}
