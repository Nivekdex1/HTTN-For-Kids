import React, { useState } from 'react';
import { motion } from 'motion/react';

interface SignupFormProps {
  onSignup: (data: { username: string; fullname: string; country: string; ageBracket: string }) => Promise<void>;
  onSwitchToLogin: () => void;
}

const ages = Array.from({ length: 12 }, (_, i) => i + 1);

const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
  'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
  'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia',
  'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica',
  'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'DR Congo', 'Ecuador',
  'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France',
  'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau',
  'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
  'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo',
  'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania',
  'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius',
  'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia',
  'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway',
  'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland',
  'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino',
  'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands',
  'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland',
  'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia',
  'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan',
  'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
];

export function SignupForm({ onSignup, onSwitchToLogin }: SignupFormProps) {
  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    country: '',
    ageBracket: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await onSignup(formData);
    } catch (err: any) {
      console.error('Signup form error:', err);
      let errorMessage = 'Signup failed. Please try again.';
      
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
        <h1 className="text-red-600 text-center mb-6 sm:mb-8 text-xl sm:text-2xl md:text-[24px] font-[Varela_Round] font-normal font-bold text-[36px]">
          Create Your Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="username" className="block text-gray-700 mb-1 sm:mb-2 text-base sm:text-lg md:text-xl">
              Username (for logging in) *
            </label>
            <input
              id="username"
              type="text"
              required
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg md:text-xl border-2 sm:border-4 border-gray-300 rounded-xl sm:rounded-2xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="Choose a username"
            />
          </div>

          <div>
            <label htmlFor="fullname" className="block text-gray-700 mb-1 sm:mb-2 text-base sm:text-lg md:text-xl">
              Full Name *
            </label>
            <input
              id="fullname"
              type="text"
              required
              value={formData.fullname}
              onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg md:text-xl border-2 sm:border-4 border-gray-300 rounded-xl sm:rounded-2xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-gray-700 mb-1 sm:mb-2 text-base sm:text-lg md:text-xl">
              Country *
            </label>
            <select
              id="country"
              required
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg md:text-xl border-2 sm:border-4 border-gray-300 rounded-xl sm:rounded-2xl focus:border-red-500 focus:outline-none transition-colors bg-white"
            >
              <option value="">Select your country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="ageBracket" className="block text-gray-700 mb-1 sm:mb-2 text-base sm:text-lg md:text-xl">
              Age *
            </label>
            <select
              id="ageBracket"
              required
              value={formData.ageBracket}
              onChange={(e) => setFormData({ ...formData, ageBracket: e.target.value })}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg md:text-xl border-2 sm:border-4 border-gray-300 rounded-xl sm:rounded-2xl focus:border-red-500 focus:outline-none transition-colors bg-white"
            >
              <option value="">Select your age</option>
              {ages.map((age) => (
                <option key={age} value={age}>
                  {age} {age === 1 ? 'year' : 'years'}
                </option>
              ))}
            </select>
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
            className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl font-bold rounded-full hover:from-orange-600 hover:via-red-600 hover:to-pink-600 transition-all shadow-2xl disabled:opacity-50 border-2 sm:border-4 border-white transform hover:shadow-[0_0_30px_rgba(255,100,0,0.6)] text-center"
          >
            {loading ? '✨ Creating Account...' : '🎨 Create My Account!'}
          </motion.button>
        </form>

        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Already have an account?{' '}
            <button
              onClick={onSwitchToLogin}
              className="text-red-600 hover:text-red-700 no-underline text-base sm:text-lg md:text-xl font-bold hover:scale-105 transition-transform inline-block"
            >
              Login here 📖
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
