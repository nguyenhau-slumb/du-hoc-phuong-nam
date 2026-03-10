import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Danh sách 5 ảnh hoạt động trong thư mục public/images
  const slides = [
    { url: "/images/slide1.jpg", title: "Tư vấn lộ trình du học chuyên sâu" },
    { url: "/images/slide2.jpg", title: "Lớp học tiếng Hàn năng động" },
    { url: "/images/slide3.jpg", title: "Hội thảo định hướng nghề nghiệp" },
    { url: "/images/slide4.jpg", title: "Hoạt động ngoại khóa hè Thụy Sĩ" },
    { url: "/images/slide5.jpg", title: "Lễ chia tay và dặn dò du học sinh" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="overflow-x-hidden bg-white">
      {/* 1. HERO SECTION - HIỆU ỨNG MỜ ẢO */}
      <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-slate-950">
        {/* BACKGROUND LAYERS */}
        <div className="absolute inset-0 z-0">
          {/* Lớp ảnh mờ */}
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dee402?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="University Background" 
            className="w-full h-full object-cover opacity-30 blur-sm scale-110"
          />
          {/* Lớp Gradient phủ mờ ảo */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A531B]/80 via-slate-950/90 to-slate-950"></div>
          
          {/* Các đốm màu nghệ thuật (Orbs) */}
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F37021]/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#1A531B]/30 rounded-full blur-[100px]"></div>
        </div>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 text-center lg:text-left">
          <div className="max-w-3xl mx-auto lg:mx-0">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium mb-8 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[#F37021] mr-3 animate-ping"></span>
              Đơn vị tư vấn du học uy tín hàng đầu
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.05]">
              Kiến tạo tương lai <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] via-orange-400 to-[#F37021] animate-gradient-x">
                vươn tầm thế giới
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-light">
              Phương Nam Education đồng hành cùng học sinh Việt Nam hiện thực hóa giấc mơ du học tại Hàn Quốc, Thụy Sĩ và các quốc gia hàng đầu.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Link to="/contact" className="px-10 py-4 bg-[#F37021] hover:bg-orange-600 text-white text-lg font-bold rounded-2xl shadow-2xl shadow-orange-500/20 transition-all hover:-translate-y-1">
                Nhận tư vấn miễn phí
              </Link>
              <Link to="/services" className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-lg font-bold rounded-2xl border border-white/10 transition-all">
                Tìm hiểu dịch vụ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-12 bg-white border-b border-slate-100 relative -mt-16 z-20 max-w-6xl mx-auto rounded-[2.5rem] shadow-2xl px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
          <div><div className="text-4xl font-black text-[#1A531B] mb-1">15+</div><div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Năm kinh nghiệm</div></div>
          <div><div className="text-4xl font-black text-[#1A531B] mb-1">5000+</div><div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Học viên</div></div>
          <div><div className="text-4xl font-black text-[#1A531B] mb-1">500+</div><div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Trường đối tác</div></div>
          <div><div className="text-4xl font-black text-[#1A531B] mb-1">99%</div><div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Đậu Visa</div></div>
        </div>
      </section>

      {/* 3. SLIDER HOẠT ĐỘNG THỰC TẾ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-[#F37021] font-bold uppercase text-sm tracking-widest mb-3">Thư viện ảnh</h2>
              <h3 className="text-3xl md:text-5xl font-black text-[#1A531B] leading-tight">Hoạt động tiêu biểu tại Phương Nam</h3>
            </div>
            <div className="flex gap-3">
              <button onClick={prevSlide} className="w-12 h-12 border border-slate-200 rounded-full flex items-center justify-center hover:bg-[#1A531B] hover:text-white transition-all shadow-sm">
                <span className="material-symbols-outlined">west</span>
              </button>
              <button onClick={nextSlide} className="w-12 h-12 border border-slate-200 rounded-full flex items-center justify-center hover:bg-[#1A531B] hover:text-white transition-all shadow-sm">
                <span className="material-symbols-outlined">east</span>
              </button>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl h-[450px] md:h-[650px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                <img src={slide.url} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-12 left-12 text-white z-10">
                  <h3 className="text-2xl md:text-4xl font-black max-w-2xl leading-tight">{slide.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES QUICK VIEW */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-all border border-slate-100">
              <span className="material-symbols-outlined text-5xl text-[#F37021] mb-6">language</span>
              <h4 className="text-2xl font-bold text-[#1A531B] mb-4">Du học Hàn Quốc</h4>
              <p className="text-slate-500 mb-8 leading-relaxed">Cập nhật xu hướng tuyển sinh và lộ trình visa 2026 mới nhất cho các kỳ học tiếng và chuyên ngành.</p>
              <Link to="/tuyen-sinh-han-quoc" className="text-[#F37021] font-black text-sm uppercase tracking-wider flex items-center gap-2">
                Xem chi tiết <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-all border border-slate-100">
              <span className="material-symbols-outlined text-5xl text-[#F37021] mb-6">landscape</span>
              <h4 className="text-2xl font-bold text-[#1A531B] mb-4">Trại hè Thụy Sĩ</h4>
              <p className="text-slate-500 mb-8 leading-relaxed">Chương trình Chantemerle & Filolo đẳng cấp quốc tế dành cho học sinh từ 13-17+ tuổi rèn luyện thủ lĩnh.</p>
              <Link to="/trai-he-chantemerle" className="text-[#F37021] font-black text-sm uppercase tracking-wider flex items-center gap-2">
                Xem chi tiết <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="bg-[#1A531B] p-10 rounded-[2.5rem] shadow-xl text-white">
              <h4 className="text-3xl font-black mb-6">Đã sẵn sàng?</h4>
              <p className="text-white/70 mb-10 leading-relaxed">Liên hệ với đội ngũ chuyên gia của chúng tôi để bắt đầu kế hoạch của bạn ngay hôm nay.</p>
              <Link to="/contact" className="inline-block px-8 py-4 bg-[#F37021] rounded-2xl font-black uppercase text-sm tracking-widest shadow-lg">
                Gửi yêu cầu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
