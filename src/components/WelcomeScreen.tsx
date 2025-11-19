import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import imgLogo from 'figma:asset/2f881615ac1cd9aa71d59f5da7d7ee06972ab3f1.png';

interface WelcomeScreenProps {
  onContinue: () => void;
}

export function WelcomeScreen({ onContinue }: WelcomeScreenProps) {
  const [serverStatus, setServerStatus] = useState<'checking' | 'online' | 'offline'>('checking');

  useEffect(() => {
    const checkServer = async () => {
      try {
        console.log('Checking server health...');
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-3669e37f/health`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
            },
          }
        );
        
        if (response.ok) {
          const data = await response.json();
          console.log('Server health check response:', data);
          setServerStatus('online');
        } else {
          console.error('Server health check failed with status:', response.status);
          setServerStatus('offline');
        }
      } catch (error) {
        console.error('Server health check error:', error);
        setServerStatus('offline');
      }
    };

    checkServer();
  }, []);

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 md:p-12 lg:p-16 max-w-3xl w-full text-center my-4 sm:my-8"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 3, -3, 0] 
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6 sm:mb-8 flex justify-center"
        >
          <img src={imgLogo} alt="Healing to the Nations" className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain" />
        </motion.div>
        
        <h1 className="text-[rgb(231,0,192)] mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl lg:text-[24px] font-[Rounded_Mplus_1c_Bold] font-[Varela_Round] font-normal font-bold px-2">
          Welcome to Healing to the Nations Magazine for Kids!
        </h1>
        
        <div className="bg-yellow-50 border-2 sm:border-4 border-yellow-400 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8">
          <p className="text-gray-800 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4">
            ⚠️ <strong>Before you start...</strong>
          </p>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl">
            Please ask an adult (parent, minister, or pastor) to help you create your account.
          </p>
        </div>

        {serverStatus === 'offline' && (
          <div className="bg-red-100 border-2 sm:border-4 border-red-400 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
            <p className="text-red-700 text-sm sm:text-base md:text-lg">
              ⚠️ Server connection issue. The app may not work properly. Please refresh the page.
            </p>
          </div>
        )}

        {serverStatus === 'checking' && (
          <div className="bg-blue-100 border-2 sm:border-4 border-blue-400 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
            <p className="text-blue-700 text-sm sm:text-base md:text-lg">
              🔄 Checking server connection...
            </p>
          </div>
        )}



        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          disabled={serverStatus !== 'online'}
          className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white px-6 sm:px-10 md:px-16 py-4 sm:py-6 md:py-8 rounded-full text-base sm:text-lg md:text-xl lg:text-2xl font-bold hover:from-red-600 hover:via-pink-600 hover:to-purple-600 transition-all shadow-2xl disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed border-2 sm:border-4 border-white transform hover:shadow-[0_0_30px_rgba(255,0,127,0.6)] w-full sm:w-auto"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="flex items-center justify-center gap-2 sm:gap-3 font-[Rounded_Mplus_1c] font-bold font-normal font-[Varela_Round] text-center">
            🎉 I have an adult with me - Let's Go! 🚀
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
}
