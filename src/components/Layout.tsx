import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="min-h-screen bg-white font-display flex flex-col">
      {/* 1. HEADER & MOBILE MENU */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 h-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1A531B] rounded-xl flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <div className="flex flex-col text-left">
              <h1 className="text-lg font-black text-[#1A531B] uppercase leading-none tracking-tighter">Du học Phương Nam</h1>
              <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">International Education</span>
            </div>
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link to="/" className="text-sm font-bold text-slate-600 hover:text-[#1A531B]">Trang chủ</Link>
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

        {/* MOBILE MENU - ÉP ĐỘ CAO 70% MÀN HÌNH */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-20 h-[70vh] bg-white z-40 p-8 shadow-2xl border-t border-slate-100 flex flex-col gap-4 overflow-y-auto rounded-b-[3rem] animate-in slide-in-from-top duration-500">
            <Link onClick={toggleMenu} to="/" className="p-4 text-lg font-bold text-slate-700 hover:bg-slate-50 rounded-2xl flex items-center justify-between">
              Trang chủ <span className="material-symbols-outlined">chevron_right</span>
            </Link>
            <Link onClick={toggleMenu} to="/partners" className="p-4 text-lg font-bold text-slate-700 hover:bg-slate-50 rounded-2xl flex items-center justify-between">
              Đối tác <span className="material-symbols-outlined">chevron_right</span>
            </Link>
            <Link onClick={toggleMenu} to="/news" className="p-4 text-lg font-bold text-slate-700 hover:bg-slate-50 rounded-2xl flex items-center justify-between">
              Tin tức <span className="material-symbols-outlined">chevron_right</span>
            </Link>
            <Link onClick={toggleMenu} to="/contact" className="p-4 text-lg font-bold text-[#F37021] hover:bg-orange-50 rounded-2xl flex items-center justify-between">
              Liên hệ tư vấn <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <div className="mt-auto p-6 bg-slate-50 rounded-3xl text-center">
               <p className="text-xs font-black text-slate-400 uppercase mb-2">Hotline hỗ trợ</p>
               <a href="tel:0767686133" className="text-xl font-black text-[#1A531B]">0767.686.133</a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* 2. FOOTER */}
      <footer className="bg-[#0f172a] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16 mb-10">
            <div className="lg:col-span-2 space-y-6 text-left">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#F37021] rounded-lg flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-xl">verified</span>
                </div>
                <h4 className="text-lg font-black uppercase tracking-tight">Thông tin pháp lý</h4>
              </div>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed max-w-lg">
                <p className="font-black text-white text-base uppercase">Công ty TNHH Giáo dục Quốc tế Phương Nam</p>
                <p>607-609 Nguyễn Kiệm, Phường 9, Quận Phú Nhuận, TP. Hồ Chí Minh</p>
                <p>Số: 2220/GCN-SGDĐT do Sở GD&ĐT TP.HCM cấp ngày 11/09/2025</p>

                <button 
                  onClick={toggleModal}
                  className="mt-6 flex items-center gap-3 px-8 py-3.5 bg-[#1A531B] hover:bg-green-700 text-white rounded-2xl text-xs font-black tracking-widest transition-all shadow-xl"
                >
                  <span className="material-symbols-outlined text-sm">visibility</span>
                  MINH BẠCH PHÁP LÝ
                </button>
              </div>
            </div>
            {/* ... giữ nguyên các cột Footer khác ... */}
          </div>
        </div>
      </footer>

      {/* 3. POPUP PHÁP LÝ - ÉP CỨNG 90% CHIỀU RỘNG & CAO */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-10 bg-black/95 backdrop-blur-md">
          <div className="relative bg-white w-[95vw] md:w-[90vw] h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
            
            {/* Header Popup */}
            <div className="p-5 md:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#1A531B] text-2xl">verified_user</span>
                <h3 className="font-black text-[#1A531B] text-sm md:text-lg uppercase">Hồ sơ pháp lý chính thức</h3>
              </div>
              <button 
                onClick={toggleModal}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-slate-400 hover:bg-red-500 hover:text-white transition-all"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>
            
            {/* Ảnh Giấy Phép - Có thanh cuộn dọc */}
            <div className="flex-1 overflow-y-auto p-4 md:p-10 bg-slate-200/50">
              <div className="max-w-4xl mx-auto bg-white p-2 md:p-4 rounded-xl shadow-xl">
                <img 
                  src="/images/GiayPhepKinhDoanh.jpg" 
                  alt="Giấy phép kinh doanh Phương Nam" 
                  className="w-full h-auto block"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/1000x1500?text=Vui+long+up+file+GiayPhepKinhDoanh.jpg+vao+public/images";
                  }}
                />
              </div>
              <p className="py-10 text-center text-slate-400 text-xs font-bold uppercase tracking-widest italic">-- Bản scan gốc từ Sở GD&ĐT --</p>
            </div>
          </div>
          <div className="absolute inset-0 -z-10" onClick={toggleModal}></div>
        </div>
      )}
    </div>
  );
}
