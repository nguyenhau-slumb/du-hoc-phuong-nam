import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white font-display flex flex-col">
      {/* 1. HEADER - GIỮ NGUYÊN MENU VÀ THÊM HOTLINE */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 h-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#1A531B] rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-105">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-black text-[#1A531B] uppercase leading-none tracking-tighter">Du học Phương Nam</h1>
              <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">International Education</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            <Link to="/" className="text-sm font-bold text-slate-600 hover:text-[#1A531B]">Trang chủ</Link>
            
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

            <div className="relative group py-4">
              <button className="text-sm font-bold text-slate-600 hover:text-[#1A531B] flex items-center gap-1">
                Trại hè Thụy Sĩ
                <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">expand_more</span>
              </button>
              <div className="absolute top-full left-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white shadow-2xl rounded-2xl border border-slate-100 overflow-hidden z-50 p-2">
                <Link to="/trai-he-chantemerle" className="block px-4 py-3 text-sm hover:bg-slate-50 rounded-xl text-slate-700 font-medium">Chantemerle (13-16 tuổi)</Link>
                <Link to="/trai-he-filolo" className="block px-4 py-3 text-sm hover:bg-slate-50 rounded-xl text-slate-700 font-medium">Filolo (17+ tuổi & JCL)</Link>
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
            <button className="bg-[#F37021] text-white px-6 py-2.5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-orange-500/20 hover:scale-105 transition-all">
              Tư vấn
            </button>
          </div>
        </div>
      </header>

      {/* 2. CONTENT AREA */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* 3. FOOTER - CẬP NHẬT CHUẨN GIẤY PHÉP KINH DOANH */}
      <footer className="bg-[#0f172a] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16 mb-10">
            
            {/* Cột 1 & 2: Thông tin pháp lý (Rộng hơn) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#F37021] rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">verified</span>
                </div>
                <h4 className="text-lg font-black uppercase tracking-tight">Thông tin pháp lý</h4>
              </div>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed max-w-lg">
                <p className="font-black text-white text-base">CÔNG TY TNHH GIÁO DỤC QUỐC TẾ PHƯƠNG NAM</p>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-base text-[#F37021] mt-0.5">location_on</span>
                  <p>607-609 Nguyễn Kiệm, Phường 9, Quận Phú Nhuận, TP. Hồ Chí Minh</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-base text-[#F37021] mt-0.5">description</span>
                  <p>Số: 2220/GCN-SGDĐT do Sở Giáo dục và Đào tạo TP.HCM cấp ngày 11/09/2025</p>
                </div>
              </div>
            </div>

            {/* Cột 3: Liên kết nhanh */}
            <div className="space-y-6">
              <h4 className="text-[#F37021] font-black uppercase tracking-widest text-xs">Danh mục</h4>
              <nav className="flex flex-col gap-4 text-sm text-slate-400 font-medium">
                <Link to="/partners" className="hover:text-white transition-colors">Đối tác toàn cầu</Link>
                <Link to="/news" className="hover:text-white transition-colors">Tin tức học bổng</Link>
                <Link to="/contact" className="hover:text-white transition-colors">Liên hệ tư vấn</Link>
                <Link to="/services" className="hover:text-white transition-colors">Dịch vụ du học</Link>
              </nav>
            </div>

            {/* Cột 4: Liên hệ & Zalo */}
            <div className="space-y-6 bg-white/5 p-6 rounded-3xl border border-white/10">
              <h4 className="text-[#F37021] font-black uppercase tracking-widest text-xs">Hotline 24/7</h4>
              <div className="space-y-4">
                <a href="tel:0767686133" className="flex items-center gap-3 text-white font-bold hover:text-[#F37021] transition-colors">
                  <span className="material-symbols-outlined">call</span>
                  0767.686.133
                </a>
                <a 
                  href="https://zalo.me/0767686133" 
                  target="_blank" 
                  rel="noreferrer"
                  className="block text-center bg-[#25D366] text-white py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-green-500/20"
                >
                  Chat qua Zalo
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            <p>© 2026 PHUONG NAM INTERNATIONAL EDUCATION. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
