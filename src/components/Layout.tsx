import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="min-h-screen bg-white font-display flex flex-col">
      {/* 1. HEADER - FULL MENU */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 h-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#1A531B] rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-105">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <div className="flex flex-col text-left">
              <h1 className="text-lg font-black text-[#1A531B] uppercase leading-none tracking-tighter">Du học Phương Nam</h1>
              <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">International Education</span>
            </div>
          </Link>

          {/* MENU TRÊN MÁY TÍNH */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link to="/" className="text-sm font-bold text-slate-600 hover:text-[#1A531B]">Trang chủ</Link>
            
            <div className="relative group py-4">
              <button className="text-sm font-bold text-slate-600 hover:text-[#1A531B] flex items-center gap-1">
                Hàn Quốc 2026 <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">expand_more</span>
              </button>
              <div className="absolute top-full left-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white shadow-2xl rounded-2xl border border-slate-100 p-2 z-50">
                <Link to="/han-quoc-2026" className="block px-4 py-3 text-sm hover:bg-slate-50 rounded-xl text-slate-700">Trải nghiệm "Idol K-Pop"</Link>
                <Link to="/tuyen-sinh-han-quoc" className="block px-4 py-3 text-sm hover:bg-slate-50 rounded-xl text-slate-700">Hướng dẫn tuyển sinh</Link>
              </div>
            </div>

            <div className="relative group py-4">
              <button className="text-sm font-bold text-slate-600 hover:text-[#1A531B] flex items-center gap-1">
                Trại hè Thụy Sĩ <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">expand_more</span>
              </button>
              <div className="absolute top-full left-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white shadow-2xl rounded-2xl border border-slate-100 p-2 z-50">
                <Link to="/trai-he-chantemerle" className="block px-4 py-3 text-sm hover:bg-slate-50 rounded-xl text-slate-700">Chantemerle (13-16 tuổi)</Link>
                <Link to="/trai-he-filolo" className="block px-4 py-3 text-sm hover:bg-slate-50 rounded-xl text-slate-700">Filolo (17+ tuổi & JCL)</Link>
              </div>
            </div>

            <Link to="/partners" className="text-sm font-bold text-slate-600 hover:text-[#1A531B]">Đối tác</Link>
            <Link to="/news" className="text-sm font-bold text-slate-600 hover:text-[#1A531B]">Tin tức</Link>
            <Link to="/contact" className="text-sm font-bold text-slate-600 hover:text-[#1A531B]">Liên hệ</Link>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:0767686133" className="hidden md:flex items-center gap-2 text-[#1A531B] font-black text-sm">
              <span className="material-symbols-outlined text-xl text-[#F37021]">call</span>
              0767.686.133
            </a>
            <button onClick={toggleMenu} className="lg:hidden w-10 h-10 flex items-center justify-center text-[#1A531B]">
              <span className="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* MENU TRÊN ĐIỆN THOẠI */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 p-6 flex flex-col gap-2 shadow-2xl overflow-y-auto">
            <Link onClick={toggleMenu} to="/" className="p-4 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-xl">Trang chủ</Link>
            <Link onClick={toggleMenu} to="/news" className="p-4 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-xl">Tin tức</Link>
            <Link onClick={toggleMenu} to="/contact" className="p-4 text-base font-bold text-[#F37021] hover:bg-slate-50 rounded-xl">Liên hệ tư vấn</Link>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* 2. FOOTER & NÚT MINH BẠCH PHÁP LÝ */}
      <footer className="bg-[#0f172a] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16 mb-10">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#F37021] rounded-lg flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-xl">verified</span>
                </div>
                <h4 className="text-lg font-black uppercase tracking-tight">Thông tin pháp lý</h4>
              </div>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed max-w-lg">
                <p className="font-black text-white text-base uppercase">Công ty TNHH Giáo dục Quốc tế Phương Nam</p>
                <p className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-base text-[#F37021] mt-0.5">location_on</span>
                  607-609 Nguyễn Kiệm, Phường 9, Quận Phú Nhuận, TP. Hồ Chí Minh
                </p>
                
                {/* NÚT KÍCH HOẠT POPUP */}
                <button 
                  onClick={toggleModal}
                  className="mt-6 flex items-center gap-3 px-8 py-3.5 bg-[#1A531B] hover:bg-[#256f27] text-white rounded-2xl text-xs font-black tracking-widest transition-all shadow-xl shadow-green-900/20 group"
                >
                  <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">visibility</span>
                  MINH BẠCH PHÁP LÝ
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[#F37021] font-black uppercase tracking-widest text-xs">Kết nối nhanh</h4>
              <nav className="flex flex-col gap-4 text-sm text-slate-400">
                <Link to="/contact" className="hover:text-white transition-colors">Liên hệ tư vấn</Link>
                <a href="https://zalo.me/0767686133" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Hỗ trợ qua Zalo</a>
              </nav>
            </div>

            <div className="space-y-4 bg-white/5 p-6 rounded-3xl border border-white/10 h-fit">
              <p className="text
