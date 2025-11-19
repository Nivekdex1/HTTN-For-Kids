import React, { useState } from 'react';
import { motion } from 'motion/react';

interface LoginFormProps {
  onLogin: (username: string) => Promise<void>;
  onSwitchToSignup: () => void;
}

export function LoginForm({ onLogin, onSwitchToSignup }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await onLogin(username);
    } catch (err: any) {
      console.error('Login form error:', err);
      let errorMessage = 'Login failed. Please check your username.';
      
      if (err.message) {
        errorMessage = err.message;
      }
      
      // Add more context for network errors
      if (err.message && err.message.includes('Failed to fetch')) {
        errorMessage = 'Unable to connect to the server. Please check your internet connection and try again.';
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-2xl w-full my-4 sm:my-8"
      >
        <div className="text-center mb-6 sm:mb-8">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">📖</div>
          <h1 className="text-red-600 text-xl sm:text-2xl md:text-[24px] font-[Varela_Round] font-bold text-[36px]">
            Welcome Back!
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-2">
            Enter your username to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="username" className="block text-gray-700 mb-1 sm:mb-2 text-base sm:text-lg md:text-xl">
              Username
            </label>
            <input
              id="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg md:text-xl border-2 sm:border-4 border-gray-300 rounded-xl sm:rounded-2xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="Enter your username"
              autoFocus
            />
          </div>

          {error && (
            <div className="bg-red-100 border-2 sm:border-4 border-red-400 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-red-700 text-sm sm:text-base">
              {error}
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl font-bold rounded-full hover:from-green-600 hover:via-blue-600 hover:to-purple-600 transition-all shadow-2xl disabled:opacity-50 border-2 sm:border-4 border-white transform hover:shadow-[0_0_30px_rgba(0,150,255,0.6)] text-center"
          >
            {loading ? '🔄 Logging in...' : '🎉 Login & Start Reading!'}
          </motion.button>
        </form>

        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Don't have an account?{' '}
            <button
              onClick={onSwitchToSignup}
              className="text-red-600 hover:text-red-700 no-underline text-base sm:text-lg md:text-xl font-bold hover:scale-105 transition-transform inline-block"
            >
              Sign up here 🚀
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
