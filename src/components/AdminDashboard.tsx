import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface Analytics {
  totalUsers: number;
  totalVisits: number;
  users: Array<{
    username: string;
    fullname: string;
    country: string;
    ageBracket: string;
    visitCount: number;
    createdAt: string;
    lastLogin: string;
  }>;
  byCountry: Record<string, number>;
  byAge: Record<string, number>;
  visitsByMonth: Record<string, number>;
}

interface AdminDashboardProps {
  accessToken: string;
  onClose: () => void;
}

// Helper function to get country flag emoji
const getCountryFlag = (countryName: string): string => {
  const countryFlags: Record<string, string> = {
    // Africa
    'Nigeria': '🇳🇬',
    'South Africa': '🇿🇦',
    'Kenya': '🇰🇪',
    'Ghana': '🇬🇭',
    'Uganda': '🇺🇬',
    'Tanzania': '🇹🇿',
    'Ethiopia': '🇪🇹',
    'Egypt': '🇪🇬',
    'Morocco': '🇲🇦',
    'Angola': '🇦🇴',
    'Zimbabwe': '🇿🇼',
    'Cameroon': '🇨🇲',
    'Rwanda': '🇷🇼',
    // North America
    'United States': '🇺🇸',
    'USA': '🇺🇸',
    'Canada': '🇨🇦',
    'Mexico': '🇲🇽',
    // South America
    'Brazil': '🇧🇷',
    'Argentina': '🇦🇷',
    'Colombia': '🇨🇴',
    'Chile': '🇨🇱',
    'Peru': '🇵🇪',
    // Europe
    'United Kingdom': '🇬🇧',
    'UK': '🇬🇧',
    'Germany': '🇩🇪',
    'France': '🇫🇷',
    'Italy': '🇮🇹',
    'Spain': '🇪🇸',
    'Netherlands': '🇳🇱',
    'Belgium': '🇧🇪',
    'Switzerland': '🇨🇭',
    'Sweden': '🇸🇪',
    'Norway': '🇳🇴',
    'Denmark': '🇩🇰',
    'Finland': '🇫🇮',
    'Poland': '🇵🇱',
    'Portugal': '🇵🇹',
    'Ireland': '🇮🇪',
    'Austria': '🇦🇹',
    'Greece': '🇬🇷',
    'Romania': '🇷🇴',
    // Asia
    'China': '🇨🇳',
    'India': '🇮🇳',
    'Japan': '🇯🇵',
    'South Korea': '🇰🇷',
    'Philippines': '🇵🇭',
    'Indonesia': '🇮🇩',
    'Thailand': '🇹🇭',
    'Vietnam': '🇻🇳',
    'Malaysia': '🇲🇾',
    'Singapore': '🇸🇬',
    'Pakistan': '🇵🇰',
    'Bangladesh': '🇧🇩',
    'Sri Lanka': '🇱🇰',
    'Myanmar': '🇲🇲',
    'Nepal': '🇳🇵',
    // Middle East
    'UAE': '🇦🇪',
    'Saudi Arabia': '🇸🇦',
    'Israel': '🇮🇱',
    'Turkey': '🇹🇷',
    'Iran': '🇮🇷',
    'Iraq': '🇮🇶',
    // Oceania
    'Australia': '🇦🇺',
    'New Zealand': '🇳🇿',
    // Caribbean
    'Jamaica': '🇯🇲',
    'Trinidad and Tobago': '🇹🇹',
    'Barbados': '🇧🇧',
  };
  
  return countryFlags[countryName] || '🌍';
};

// Helper to get month name
const getMonthName = (monthKey: string): string => {
  const [year, month] = monthKey.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

export function AdminDashboard({ accessToken, onClose }: AdminDashboardProps) {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState<string>('all');
  const usersPerPage = 10;

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        console.log('Fetching analytics for admin...');
        
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-3669e37f/admin/analytics`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
              'X-Admin-Key': 'HTTNADMIN_ACCESS_KEY',
            },
          }
        );

        console.log('Analytics response status:', response.status);

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Analytics error:', errorData);
          throw new Error(errorData.error || 'Failed to fetch analytics');
        }

        const data = await response.json();
        console.log('Analytics data:', data);
        setAnalytics(data);
      } catch (err: any) {
        console.error('Error fetching analytics:', err);
        setError(err.message || 'Failed to load analytics');
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, [accessToken]);

  // Prepare chart data
  const chartData = useMemo(() => {
    if (!analytics?.visitsByMonth) return [];
    
    return Object.entries(analytics.visitsByMonth)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([month, visits]) => ({
        month: getMonthName(month),
        visits: visits as number,
      }));
  }, [analytics]);

  // Filter visits by selected month
  const filteredVisits = useMemo(() => {
    if (!analytics || selectedMonth === 'all') {
      return analytics?.totalVisits || 0;
    }
    return analytics.visitsByMonth?.[selectedMonth] || 0;
  }, [analytics, selectedMonth]);

  // Pagination logic
  const { paginatedUsers, totalPages } = useMemo(() => {
    const users = analytics?.users || [];
    const total = Math.ceil(users.length / usersPerPage);
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    
    return {
      paginatedUsers: users.slice(startIndex, endIndex),
      totalPages: total,
    };
  }, [analytics, currentPage, usersPerPage]);

  // Reset to page 1 when analytics changes
  useEffect(() => {
    setCurrentPage(1);
  }, [analytics]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center max-w-md w-full">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">📊</div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600">Loading analytics...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-2xl w-full">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 md:mb-6 text-center">❌</div>
          <p className="text-lg sm:text-xl md:text-2xl text-red-600 text-center mb-4 sm:mb-6">{error}</p>
          <button
            onClick={onClose}
            className="w-full bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-red-700 transition-colors text-base sm:text-lg min-h-[44px]"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 max-w-7xl w-full m-2 sm:m-4 md:m-8"
      >
        <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-red-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Admin Dashboard
          </h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl sm:text-4xl min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-white">
            <div className="text-3xl sm:text-4xl md:text-5xl mb-1 sm:mb-2">👥</div>
            <div className="text-2xl sm:text-3xl mb-1">{analytics?.totalUsers || 0}</div>
            <div className="text-base sm:text-lg md:text-xl opacity-90">Total Users</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-white">
            <div className="text-3xl sm:text-4xl md:text-5xl mb-1 sm:mb-2">📖</div>
            <div className="text-2xl sm:text-3xl mb-1">{filteredVisits}</div>
            <div className="text-base sm:text-lg md:text-xl opacity-90">
              {selectedMonth === 'all' ? 'Total Visits' : `Visits in ${getMonthName(selectedMonth)}`}
            </div>
          </div>
        </div>

        {/* Monthly Visits Chart */}
        {chartData.length > 0 && (
          <div className="bg-white border-2 sm:border-4 border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 mb-6 sm:mb-8 md:mb-12">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800">
                Visits by Month
              </h3>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-base border-2 border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 min-h-[44px]"
              >
                <option value="all">All Months</option>
                {Object.keys(analytics?.visitsByMonth || {})
                  .sort((a, b) => b.localeCompare(a))
                  .map((month) => (
                    <option key={month} value={month}>
                      {getMonthName(month)}
                    </option>
                  ))}
              </select>
            </div>
            <div className="w-full overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
              <div className="min-w-[300px]">
                <ResponsiveContainer width="100%" height={250} minWidth={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="month" 
                      tick={{ fontSize: 12 }}
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Legend wrapperStyle={{ fontSize: '14px' }} />
                    <Bar dataKey="visits" fill="#8b5cf6" name="Visits" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Demographics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12">
          <div className="bg-white border-2 sm:border-4 border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
            <h3 className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-gray-800">
              Users by Age
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {Object.entries(analytics?.byAge || {}).map(([age, count]) => (
                <div key={age} className="flex justify-between items-center">
                  <span className="text-gray-700 text-sm sm:text-base md:text-lg">{age}</span>
                  <span className="bg-red-100 text-red-600 px-3 sm:px-4 py-1 rounded-full text-sm sm:text-base">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 sm:border-4 border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
            <h3 className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-gray-800">
              Users by Country
            </h3>
            <div className="space-y-2 sm:space-y-3 max-h-48 sm:max-h-64 overflow-y-auto">
              {Object.entries(analytics?.byCountry || {})
                .sort(([, a], [, b]) => (b as number) - (a as number))
                .map(([country, count]) => (
                  <div key={country} className="flex justify-between items-center">
                    <span className="text-gray-700 text-sm sm:text-base md:text-lg flex items-center gap-1 sm:gap-2">
                      <span className="text-xl sm:text-2xl">{getCountryFlag(country)}</span>
                      <span className="truncate">{country}</span>
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-3 sm:px-4 py-1 rounded-full text-sm sm:text-base flex-shrink-0 ml-2">
                      {count}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* User List with Pagination */}
        <div className="bg-white border-2 sm:border-4 border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3 sm:mb-4">
            <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800">
              All Users
            </h3>
            <span className="text-sm sm:text-base text-gray-600">
              Total: {analytics?.users.length || 0}
            </span>
          </div>
          
          {/* Mobile Card View */}
          <div className="block md:hidden space-y-3">
            {paginatedUsers.map((user, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-xl p-3 bg-gray-50">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-semibold text-gray-800">{user.username}</div>
                    <div className="text-sm text-gray-600">{user.fullname}</div>
                  </div>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    {user.visitCount} visits
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                  <span className="text-lg">{getCountryFlag(user.country)}</span>
                  <span>{user.country}</span>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Age: {user.ageBracket}</span>
                  <span>Last: {new Date(user.lastLogin).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base text-gray-700">Username</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base text-gray-700">Full Name</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base text-gray-700">Country</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base text-gray-700">Age</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base text-gray-700">Visits</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base text-gray-700">Last Login</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((user, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base">{user.username}</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base">{user.fullname}</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                      <span className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                        <span className="text-lg sm:text-xl">{getCountryFlag(user.country)}</span>
                        <span className="truncate max-w-[120px] sm:max-w-none">{user.country}</span>
                      </span>
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base">{user.ageBracket}</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                      <span className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                        {user.visitCount}
                      </span>
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-600">
                      {new Date(user.lastLogin).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 sm:py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base min-h-[44px]"
              >
                <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
                <span>Previous</span>
              </button>
              
              <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto max-w-full pb-2 sm:pb-0">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current
                  const showPage = page === 1 || 
                                   page === totalPages || 
                                   Math.abs(page - currentPage) <= 1;
                  
                  if (!showPage && page === 2 && currentPage > 3) {
                    return <span key={page} className="px-1 text-gray-500">...</span>;
                  }
                  if (!showPage && page === totalPages - 1 && currentPage < totalPages - 2) {
                    return <span key={page} className="px-1 text-gray-500">...</span>;
                  }
                  if (!showPage) return null;
                  
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`min-w-[44px] w-10 sm:w-10 h-10 sm:h-10 rounded-lg transition-colors text-sm sm:text-base flex items-center justify-center ${
                        currentPage === page
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 sm:py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base min-h-[44px]"
              >
                <span>Next</span>
                <ChevronRight size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
