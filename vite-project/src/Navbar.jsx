import { useState } from 'react';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(); // Example cart item count

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="https://img.freepik.com/premium-vector/initial-monogram-logo-with-letter-style-design_1190297-41666.jpg?ga=GA1.1.334027385.1744396701&semt=ais_hybrid&w=740"
              alt=""
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-gray-900 ml-2">MANU DA THEKA</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="#" className="text-gray-900 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">HOME</a>
            <a href="#" className="text-gray-900 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">BRANDS</a>
            <a href="#" className="text-gray-900 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">SERVICES</a>
            <a href="#" className="text-gray-900 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">CONTACT</a>
            
            {/* Search Bar */}
            <div className="relative ml-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search here..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md leading-5 bg-white placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 sm:text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Cart Icon */}
            <div className="ml-4 cursor-pointer relative">
              <FiShoppingCart className="w-5 h-5 text-gray-800 hover:text-blue-600" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                {cartCount}
              </span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4 border-t border-gray-200">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50">About Us</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50">Services</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50">Blog</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50">Contact</a>

            {/* Mobile Search Bar */}
            <div className="mt-4 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search here..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Cart Icon for Mobile */}
            <div className="mt-4 flex items-center space-x-2">
              <FiShoppingCart className="w-5 h-5 text-gray-800" />
              <span className="text-sm text-gray-800">Cart ({cartCount})</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

