import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-display flex flex-col">
      {/* 1. HEADER - FULL MENU & HOTLINE */}
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
            
            {/* Dropdown Hàn Quốc */}
            <div className="relative group py-4">
              <button className="text-sm font-bold text-slate-600 hover:text-[#1A531B] flex items-center gap-1">
                Hàn Quốc 2026 <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              <div className="absolute top-full left-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white shadow-2xl rounded-2xl border border-slate-100 p-2 z-50">
                <Link to="/han-quoc-2026" className="block px-4 py-3 text-sm hover:bg-slate-50 rounded-xl">Trải nghiệm "Idol K-Pop"</Link>
                <Link to="/tuyen-sinh-han-quoc" className="block px-4 py-3 text-sm hover:bg-slate-50 rounded-xl">Hướng dẫn tuyển sinh</Link>
              </div>
            </div>

            {/* Dropdown Thụy Sĩ */}
            <div className="relative group py-4">
              <button className="text-sm font-bold text-slate-600 hover:text-[#1A531B] flex items-center gap-1">
                Trại hè Thụy Sĩ <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              <div className="absolute top-full left-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white shadow-2xl rounded-2xl border border-slate-100 p-2 z-50">
                <Link to="/trai-he-chantemerle" className="block px-4 py-3 text-sm hover:bg-slate-50 rounded-xl">Chantemerle (13-16 tuổi)</Link>
                <Link to="/trai-he-filolo" className="block px-4 py-3 text-sm hover:bg-slate-50 rounded-xl">Filolo (17+ tuổi & JCL)</Link>
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

        {/* MOBILE MENU (70VH) */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-20 h-[70vh] bg-white z-40 p-8 shadow-2xl border-t border-slate-100 flex flex-col gap-2 overflow-y-auto rounded-b-[3rem] animate-in slide-in-from-top duration-500">
            <Link onClick={toggleMenu} to="/" className="p-4 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-xl">Trang chủ</Link>
            <div className="p-4 bg-slate-50 rounded-xl space-y-2">
               <p className="text-[10px] font-black text-slate-400 uppercase">Chương trình du học</p>
               <Link onClick={toggleMenu} to="/han-quoc-2026" className="block text-sm font-bold text-[#1A531B]">Hàn Quốc 2026</Link>
               <Link onClick={toggleMenu} to="/trai-he-chantemerle" className="block text-sm font-bold text-[#F37021]">Trại hè Thụy Sĩ</Link>
            </div>
            <Link onClick={toggleMenu} to="/partners" className="p-4 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-xl">Đối tác</Link>
            <Link onClick={toggleMenu} to="/news" className="p-4 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-xl">Tin tức</Link>
            <Link onClick={toggleMenu} to="/contact" className="p-4 text-base font-bold text-[#F37021] hover:bg-slate-50 rounded-xl">Liên hệ tư vấn</Link>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* 2. FOOTER - 4 CỘT ĐẦY ĐỦ */}
      <footer className="bg-[#0f172a] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16 mb-10 text-left">
            
            {/* Cột 1 & 2: Pháp lý */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#F37021] rounded-lg flex items-center justify-center text-white"><span className="material-symbols-outlined text-xl">verified</span></div>
                <h4 className="text-lg font-black uppercase tracking-tight text-white">Thông tin pháp lý</h4>
              </div>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed max-w-lg">
                <p className="font-black text-white text-base uppercase">Công ty TNHH Giáo dục Quốc tế Phương Nam</p>
                <p className="flex items-start gap-3"><span className="material-symbols-outlined text-[#F37021] text-base mt-0.5">location_on</span> 607-609 Nguyễn Kiệm, Phường 9, Quận Phú Nhuận, TP. HCM</p>
                <p className="flex items-start gap-3"><span className="material-symbols-outlined text-[#F37021] text-base mt-0.5">description</span> Giấy phép: 2220/GCN-SGDĐT cấp ngày 11/09/2025</p>
                <button onClick={toggleModal} className="mt-6 flex items-center gap-3 px-8 py-3.5 bg-[#1A531B] hover:bg-green-700 text-white rounded-2xl text-xs font-black tracking-widest transition-all shadow-xl shadow-green-900/40">
                  <span className="material-symbols-outlined text-sm">visibility</span> MINH BẠCH PHÁP LÝ
                </button>
              </div>
            </div>

            {/* Cột 3: Liên kết nhanh */}
            <div className="space-y-6">
              <h4 className="text-[#F37021] font-black uppercase tracking-widest text-xs">Danh mục</h4>
              <nav className="flex flex-col gap-4 text-sm text-slate-400 font-medium">
                <Link to="/partners" className="hover:text-white transition-colors">Hệ thống đối tác</Link>
                <Link to="/news" className="hover:text-white transition-colors">Tin tức học bổng</Link>
                <Link to="/contact" className="hover:text-white transition-colors font-bold text-white">Liên hệ ngay</Link>
              </nav>
            </div>

            {/* Cột 4: Hotline */}
            <div className="space-y-4 bg-white/5 p-6 rounded-3xl border border-white/10 h-fit">
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">Hotline hỗ trợ</p>
              <a href="tel:0767686133" className="block text-xl font-black text-white hover:text-[#F37021] transition-colors">0767.686.133</a>
              <a href="https://zalo.me/0767686133" target="_blank" rel="noreferrer" className="block text-center bg-[#25D366] text-white py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all">Chat Zalo</a>
            </div>
          </div>
          <div className="text-center text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">© 2026 PHUONG NAM INTERNATIONAL EDUCATION.</div>
        </div>
      </footer>

      {/* 3. POPUP PHÁP LÝ 90% */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-10 bg-black/95 backdrop-blur-md">
          <div className="relative bg-white w-[95vw] md:w-[90vw] h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
            <div className="p-5 md:p-7 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#1A531B] text-2xl font-bold">verified_user</span>
                <h3 className="font-black text-[#1A531B] text-sm md:text-lg uppercase">Hồ sơ pháp lý chính thức</h3>
              </div>
              <button onClick={toggleModal} className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-slate-400 hover:bg-red-500 hover:text-white transition-all"><span className="material-symbols-outlined text-2xl">close</span></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 md:p-10 bg-slate-100">
              <div className="max-w-4xl mx-auto bg-white p-2 md:p-4 rounded-xl shadow-2xl">
                <img 
                  src="/images/GiayPhepKinhDoanh.jpg" 
                  alt="Giấy phép kinh doanh" 
                  className="w-full h-auto block rounded-lg"
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/1000x1500?text=Vui+long+kiem+tra+lai+file+anh+trong+thu+muc+public/images"; }}
                />
              </div>
              <p className="py-10 text-center text-slate-400 text-[10px] font-black uppercase tracking-widest">-- Bản scan chính thức từ Sở GD&ĐT TP.HCM --</p>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 cursor-pointer" onClick={toggleModal}></div>
        </div>
      )}
    </div>
  );
}
