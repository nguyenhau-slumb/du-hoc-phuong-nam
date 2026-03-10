import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white font-display">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 h-20">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1A531B] rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <h1 className="text-xl font-extrabold text-[#1A531B] uppercase tracking-tighter">Du học Phương Nam</h1>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-bold text-slate-700 hover:text-[#1A531B]">Trang chủ</Link>
            
            {/* Dropdown Hàn Quốc */}
            <div className="relative group py-4">
              <button className="text-sm font-bold text-slate-700 hover:text-[#1A531B] flex items-center gap-1">
                Hàn Quốc 2026
                <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">expand_more</span>
              </button>
              <div className="absolute top-full left-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white shadow-xl rounded-xl border border-primary/5 overflow-hidden z-50">
                <Link to="/han-quoc-2026" className="block px-5 py-3 text-sm hover:bg-primary/5 text-slate-700">Trải nghiệm "Idol K-Pop"</Link>
                <Link to="/tuyen-sinh-han-quoc" className="block px-5 py-3 text-sm hover:bg-primary/5 text-slate-700">Hướng dẫn tuyển sinh</Link>
              </div>
            </div>

            {/* Dropdown Thụy Sĩ (MỚI THÊM) */}
            <div className="relative group py-4">
              <button className="text-sm font-bold text-slate-700 hover:text-[#1A531B] flex items-center gap-1">
                Trại hè Thụy Sĩ
                <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">expand_more</span>
              </button>
              <div className="absolute top-full left-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white shadow-xl rounded-xl border border-primary/5 overflow-hidden z-50">
                <Link to="/trai-he-chantemerle" className="block px-5 py-3 text-sm hover:bg-primary/5 text-slate-700">Chantemerle (13-16 tuổi)</Link>
                <Link to="/trai-he-filolo" className="block px-5 py-3 text-sm hover:bg-primary/5 text-slate-700">Filolo (17+ tuổi & JCL)</Link>
              </div>
            </div>

            <Link to="/partners" className="text-sm font-bold text-slate-700 hover:text-[#1A531B]">Đối tác</Link>
            <Link to="/news" className="text-sm font-bold text-slate-700 hover:text-[#1A531B]">Tin tức</Link>
            <Link to="/contact" className="text-sm font-bold text-slate-700 hover:text-[#1A531B]">Liên hệ</Link>
          </nav>

          <button className="bg-[#F37021] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg hover:scale-105 transition-all">
            Đăng ký
          </button>
        </div>
      </header>

      <main><Outlet /></main>

      <footer className="bg-[#1A1A1A] text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2026 Du học Phương Nam. Nâng tầm tri thức Việt.</p>
        </div>
      </footer>
    </div>
  );
}
