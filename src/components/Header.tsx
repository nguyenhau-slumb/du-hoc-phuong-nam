import { Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { Home, GraduationCap, Handshake, Newspaper, PhoneCall, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Trang chủ', path: '/', icon: Home },
    { name: 'Đối tác', path: '/partners', icon: Handshake },
    { name: 'Tin tức', path: '/news', icon: Newspaper },
    { name: 'Liên hệ', path: '/contact', icon: Mail },
  ];

  const serviceLinks = [
    { name: 'Giáo dục phổ thông', path: '/services#k12' },
    { name: 'Giáo dục bậc cao', path: '/services#higher-ed' },
    { name: 'Du học nghề', path: '/services#vocational' },
    { name: 'Chương trình ngắn hạn', path: '/services#short-term' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg transition-all duration-300">
                PN
              </div>
              <span className="font-bold text-xl text-primary tracking-tight">Phương Nam<span className="text-accent">.</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center gap-2 text-sm font-medium transition-all duration-200 group ${
                location.pathname === '/' ? 'text-accent' : 'text-primary hover:text-accent'
              }`}
            >
              <Home className="w-[18px] h-[18px] transition-transform duration-300 group-hover:-translate-y-[2px]" />
              <span>Trang chủ</span>
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-2 text-sm font-medium transition-all duration-200 group ${
                  location.pathname.includes('/services') ? 'text-accent' : 'text-primary hover:text-accent'
                }`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <GraduationCap className="w-[18px] h-[18px] transition-transform duration-300 group-hover:-translate-y-[2px]" />
                <span>Dịch vụ</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 w-56 mt-2 bg-white rounded-xl shadow-xl py-2 transition-all duration-200 origin-top-left ${
                  isServicesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                }`}
              >
                {serviceLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(1).map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 text-sm font-medium transition-all duration-200 group ${
                    location.pathname === link.path
                      ? 'text-accent'
                      : 'text-primary hover:text-accent'
                  }`}
                >
                  <Icon className="w-[18px] h-[18px] transition-transform duration-300 group-hover:-translate-y-[2px]" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Search & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Tìm kiếm..." 
                className="w-48 focus:w-64 pl-10 pr-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all duration-300 text-sm"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-transparent text-sm font-bold rounded-full text-white bg-accent hover:bg-orange-600 shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent group"
            >
              <PhoneCall className="w-[18px] h-[18px] transition-transform duration-300 group-hover:rotate-12" />
              <span>Tư vấn ngay</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-accent hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-slate-100 shadow-lg px-4 pt-2 pb-6 space-y-4">
          
          {/* Mobile Search */}
          <div className="relative mt-2">
            <input 
              type="text" 
              placeholder="Tìm kiếm chương trình..." 
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="space-y-1">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-base font-medium group ${
                location.pathname === '/' ? 'text-accent bg-orange-50' : 'text-primary hover:text-accent hover:bg-slate-50'
              }`}
            >
              <Home className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-[2px]" />
              Trang chủ
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium group ${
                  location.pathname.includes('/services') ? 'text-accent bg-orange-50' : 'text-primary hover:text-accent hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-[2px]" />
                  Dịch vụ
                </div>
                <svg className={`ml-1 w-5 h-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`pl-11 space-y-1 overflow-hidden transition-all duration-200 ${isServicesOpen ? 'max-h-48 mt-1' : 'max-h-0'}`}>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-accent hover:bg-slate-50"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(1).map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-base font-medium group ${
                    location.pathname === link.path
                      ? 'text-accent bg-orange-50'
                      : 'text-primary hover:text-accent hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-[2px]" />
                  {link.name}
                </Link>
              );
            })}
          </div>

          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-5 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-accent hover:bg-orange-600 shadow-md group"
          >
            <PhoneCall className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            Tư vấn ngay
          </Link>
        </div>
      </div>
    </header>
  );
}
