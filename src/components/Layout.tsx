import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State cho Popup Giấy phép

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="min-h-screen bg-white font-display flex flex-col">
      {/* HEADER */}
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
      </header>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <Link onClick={toggleMenu} to="/" className="p-4 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-xl">Trang chủ</Link>
          <Link onClick={toggleMenu} to="/contact" className="p-4 text-base font-bold text-[#F37021] hover:bg-slate-50 rounded-xl">Liên hệ tư vấn</Link>
        </div>
      )}

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0f172a] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16 mb-10">
            
            {/* Cột 1: Thông tin pháp lý & Nút Popup */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#F37021] rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">verified</span>
                </div>
                <h4 className="text-lg font-black uppercase tracking-tight">Thông tin pháp lý</h4>
              </div>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed max-w-lg">
                <p className="font-black text-white text-base uppercase">Công ty TNHH Giáo dục Quốc tế Phương Nam</p>
                <div className="flex items-start gap-3 text-xs md:text-sm">
                  <span className="material-symbols-outlined text-base text-[#F37021] mt-0.5">location_on</span>
                  <p>607-609 Nguyễn Kiệm, Phường 9, Quận Phú Nhuận, TP. Hồ Chí Minh</p>
                </div>
                <div className="flex items-start gap-3 text-xs md:text-sm">
                  <span className="material-symbols-outlined text-base text-[#F37021] mt-0.5">description</span>
                  <p>Số: 2220/GCN-SGDĐT do Sở GD&ĐT TP.HCM cấp ngày 11/09/2025</p>
                </div>

                {/* NÚT MINH BẠCH PHÁP LÝ */}
                <button 
                  onClick={toggleModal}
                  className="mt-4 flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-[#F37021] text-white rounded-full text-xs font-bold border border-white/20 transition-all group"
                >
                  <span className="material-symbols-outlined text-sm group-hover:animate-pulse">visibility</span>
                  MINH BẠCH PHÁP LÝ
                </button>
              </div>
            </div>

            {/* Cột 3: Liên kết nhanh */}
            <div className="space-y-6">
              <h4 className="text-[#F37021] font-black uppercase tracking-widest text-xs">Hỗ trợ</h4>
              <nav className="flex flex-col gap-4 text-sm text-slate-400 font-medium">
                <Link to="/contact" className="hover:text-white">Liên hệ ngay</Link>
                <Link to="/news" className="hover:text-white">Tin tức</Link>
                <a href="https://zalo.me/0907916566" target="_blank" className="hover:text-white">Chat Zalo</a>
              </nav>
            </div>

            {/* Cột 4: Hotline */}
            <div className="space-y-4 bg-white/5 p-6 rounded-3xl border border-white/10 h-fit">
              <p className="text-[10px] text-[#F37021] font-black uppercase tracking-[0.2em]">Hotline 24/7</p>
              <a href="tel:0767686133" className="block text-xl font-black hover:text-[#F37021] transition-colors">0767.686.133</a>
            </div>
          </div>
          <div className="text-center text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2026 PHUONG NAM INTERNATIONAL EDUCATION.
          </div>
        </div>
      </footer>

      {/* --- POPUP (MODAL) GIẤY PHÉP --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-all">
          <div className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            {/* Header của Popup */}
            <div className="p-4 md:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <h3 className="font-black text-[#1A531B] text-sm md:text-base uppercase tracking-tight">Giấy phép hoạt động dịch vụ tư vấn du học</h3>
              <button 
                onClick={toggleModal}
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white shadow-md text-slate-500 hover:bg-red-500 hover:text-white transition-all"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            {/* Nội dung: Ảnh giấy phép */}
            <div className="overflow-y-auto p-4 bg-white flex justify-center">
              <img 
                src="/images/GiayPhepKinhDoanh.jpg" 
                alt="Giấy phép kinh doanh Phương Nam" 
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>

            {/* Footer của Popup */}
            <div className="p-4 text-center bg-slate-50 border-t border-slate-100">
              <p className="text-[10px] text-slate-400 font-bold uppercase">Xác nhận bởi Sở Giáo dục và Đào tạo TP. Hồ Chí Minh</p>
            </div>
          </div>
          
          {/* Nhấn ra ngoài để đóng */}
          <div className="absolute inset-0 -z-10" onClick={toggleModal}></div>
        </div>
      )}
    </div>
  );
}
