import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="min-h-screen bg-white font-display flex flex-col">
      {/* 1. HEADER - CÓ HAMBURGER CHO DI ĐỘNG */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 h-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#1A531B] rounded-xl flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-black text-[#1A531B] uppercase leading-none tracking-tighter">Du học Phương Nam</h1>
              <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">International Education</span>
            </div>
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link to="/" className="text-sm font-bold text-slate-600 hover:text-[#1A531B]">Trang chủ</Link>
            <Link to="/news" className="text-sm font-bold text-slate-600 hover:text-[#1A531B]">Tin tức</Link>
            <Link to="/contact" className="text-sm font-bold text-slate-600 hover:text-[#1A531B]">Liên hệ</Link>
          </nav>

          <div className="flex items-center gap-2">
            <a href="tel:0767686133" className="hidden sm:flex items-center gap-2 text-[#1A531B] font-black text-sm mr-2">
              <span className="material-symbols-outlined text-xl text-[#F37021]">call</span>
              0767.686.133
            </a>
            {/* Nút Hamburger */}
            <button onClick={toggleMenu} className="lg:hidden w-10 h-10 flex items-center justify-center text-[#1A531B]">
              <span className="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            <Link onClick={toggleMenu} to="/" className="p-4 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-xl">Trang chủ</Link>
