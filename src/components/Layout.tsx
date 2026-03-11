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
            <button onClick={toggleMenu} className="lg:hidden w-10 h-10 flex items-center justify-center text-[#1A531B]">
              <span className="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            <Link onClick={toggleMenu} to="/" className="p-4 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-xl">Trang chủ</Link>
            <Link onClick={toggleMenu} to="/news" className="p-4 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-xl">Tin tức</Link>
            <Link onClick={toggleMenu} to="/contact" className="p-4 text-base font-bold text-[#F37021] hover:bg-slate-50 rounded-xl">Liên hệ tư vấn</Link>
          </div>
        )}
      </header>

      {/* 2. NỘI DUNG CHÍNH */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* 3. FOOTER - CHỨA NÚT MINH BẠCH PHÁP LÝ */}
      <footer className="bg-[#0f172a] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16 mb-10">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#F37021] rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">verified</span>
                </div>
                <h4 className="text-lg font-black uppercase tracking-tight text-white">Thông tin pháp lý</h4>
              </div>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed max-w-lg">
                <p className="font-black text-white text-base uppercase">Công ty TNHH Giáo dục Quốc tế Phương Nam</p>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-base text-[#F37021] mt-0.5">location_on</span>
                  <p>607-609 Nguyễn Kiệm, Phường 9, Quận Phú Nhuận, TP. Hồ Chí Minh</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-base text-[#F37021] mt-0.5">description</span>
                  <p>Số: 2220/GCN-SGDĐT do Sở GD&ĐT TP.HCM cấp ngày 11/09/2025</p>
                </div>

                {/* NÚT MINH BẠCH PHÁP LÝ Ở ĐÂY */}
                <button 
                  onClick={toggleModal}
                  className="mt-6 flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-[#F37021] text-white rounded-full text-xs font-bold border border-white/10 transition-all group"
                >
                  <span className="material-symbols-outlined text-sm group-hover:scale-125 transition-transform">visibility</span>
                  MINH BẠCH PHÁP LÝ
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[#F37021] font-black uppercase tracking-widest text-xs">Kết nối</h4>
              <nav className="flex flex-col gap-4 text-sm text-slate-400">
                <Link to="/contact" className="hover:text-white transition-colors font-bold">Liên hệ</Link>
                <a href="https://zalo.me/0907916566" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Hỗ trợ Zalo</a>
              </nav>
            </div>

            <div className="space-y-4 bg-white/5 p-6 rounded-3xl border border-white/10 h-fit">
              <p className="text-[10px] text-[#F37021] font-black uppercase tracking-[0.2em]">Hotline hỗ trợ</p>
              <a href="tel:0767686133" className="block text-xl font-black hover:text-[#F37021] transition-colors">0767.686.133</a>
            </div>
          </div>
          <div className="text-center text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2026 PHUONG NAM INTERNATIONAL EDUCATION.
          </div>
        </div>
      </footer>

      {/* 4. POPUP GIẤY PHÉP */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="p-4 md:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <h3 className="font-black text-[#1A531B] text-sm md:text-base uppercase tracking-tight">Hồ sơ pháp lý hoạt động</h3>
              <button 
                onClick={toggleModal}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-slate-400 hover:bg-red-500 hover:text-white transition-all"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="overflow-y-auto p-4 bg-white flex justify-center">
              <img 
                src="/images/GiayPhepKinhDoanh.jpg" 
                alt="Bản scan giấy phép" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          <div className="absolute inset-0 -z-10" onClick={toggleModal}></div>
        </div>
      )}
    </div>
  );
}
