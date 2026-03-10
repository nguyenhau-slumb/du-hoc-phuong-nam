import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white font-display flex flex-col">
      {/* HEADER - TÍCH HỢP HOTLINE NHANH */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 h-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#1A531B] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-black text-[#1A531B] uppercase leading-none tracking-tighter">Du học Phương Nam</h1>
              <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">International Education</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            <Link to="/" className="text-sm font-bold text-slate-600 hover:text-[#1A531B] transition-colors">Trang chủ</Link>
            
            {/* Dropdown Hàn Quốc */}
            <div className="relative group py-4">
              <button className="text-sm font-bold text-slate-600 hover:text-[#1A531B] flex items-center gap-1">
                Hàn Quốc 2026
                <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">expand_more</span>
              </button>
              <div className="absolute top-full left-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white shadow-2xl rounded-2xl border border-slate-100 overflow-hidden z-50 p-2">
                <Link to="/han-quoc-2026" className="block px-4 py-3 text-sm hover:bg-slate-50 rounded-xl text-slate-700 font-medium">Trải nghiệm "Idol K-Pop"</Link>
                <Link to="/tuyen-sinh-han-quoc" className="block px-4 py-3 text-sm hover:bg-slate-50 rounded-xl text-slate-700 font-medium">Hướng dẫn tuyển sinh</Link>
              </div>
            </div>

            {/* Dropdown Thụy Sĩ */}
            <div className="relative group py-4">
              <button className="text-sm font-bold text-slate-600 hover:text-[#1A531B] flex items-center gap-1">
                Trại hè Thụy Sĩ
                <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">expand_more</span>
              </button>
              <div className="absolute top-full left-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white shadow-2xl rounded-2xl border border-slate-100 overflow-hidden z-50 p-2">
                <Link to="/trai-he-chantemerle" className="block px-4 py-3 text-sm hover:bg-slate-50 rounded-xl text-slate-
