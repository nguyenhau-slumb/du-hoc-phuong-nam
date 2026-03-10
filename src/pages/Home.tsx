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

  // Tự động chuyển slide sau 5 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 overflow-hidden min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1523050853063-bd80e27433fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Students on campus" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#F37021]/20 border border-[#F37021]/30 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#F37021] mr-2 animate-pulse"></span>
              Hơn 10 năm kinh nghiệm tư vấn du học
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
              Kiến tạo tương lai <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-orange-400">vươn tầm thế giới</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
              Phương Nam Education tự hào là người bạn đồng hành tin cậy, giúp hàng ngàn học sinh Việt Nam hiện thực hóa giấc mơ du học tại các quốc gia hàng đầu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-white bg-[#F37021] hover:bg-orange-600 shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
                Nhận tư vấn miễn phí
              </Link>
              <Link to="/services" className="inline-flex justify-center items-center px-8 py-4 border border-slate-300/30 text-base font-semibold rounded-full text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                Tìm hiểu dịch vụ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-12 bg-white border-b border-slate-100 relative -mt-16 z-20 max-w-6xl mx-auto rounded-2xl shadow-xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
          <div className="px-4">
            <div className="text-4xl font-extrabold text-[#1A531B] mb-2">10+</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Năm kinh nghiệm</div>
          </div>
          <div className="px-4">
            <div className="text-4xl font-extrabold text-[#1A531B] mb-2">5000+</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Học viên thành công</div>
          </div>
          <div className="px-4">
            <div className="text-4xl font-extrabold text-[#1A531B] mb-2">500+</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Trường đối tác</div>
          </div>
          <div className="px-4">
            <div className="text-4xl font-extrabold text-[#1A531B] mb-2">98%</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Tỷ lệ đậu Visa</div>
          </div>
        </div>
      </section>

      {/* 3. SLIDER HOẠT ĐỘNG THỰC TẾ */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#F37021] font-semibold tracking-wide uppercase text-sm mb-3">Hình ảnh thực tế</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A531B]">Hoạt động tiêu biểu tại Phương Nam</h3>
          </div>

          <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl h-[400px] md:h-[600px] bg-slate-100">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                  index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                <img src={slide.url} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-12 left-12 text-white z-10">
                  <p className="text-[#F37021] font-bold uppercase tracking-widest mb-2 text-sm">Highlights</p>
                  <h3 className="text-2xl md:text-4xl font-black">{slide.title}</h3>
                </div>
              </div>
            ))}

            <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-[#F37021] backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center z-20">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-[#F37021] backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center z-20">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? "w-12 bg-[#F37021]" : "w-3 bg-white/50"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#F37021] font-semibold tracking-wide uppercase text-sm mb-3">Dịch vụ của chúng tôi</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A531B] mb-6">Giải pháp toàn diện cho hành trình du học</h3>
            <p className="text-lg text-slate-600">Hỗ trợ bạn từ những bước đầu tiên cho đến khi ổn định cuộc sống tại nước ngoài.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group text-center">
              <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1A531B] transition-colors duration-300 mx-auto">
                <span className="material-symbols-outlined text-[#1A531B] group-hover:text-white text-3xl">school</span>
              </div>
              <h4 className="text-xl font-bold text-[#1A531B] mb-3">Tư vấn chọn trường</h4>
              <p className="text-slate-600 mb-6">Đánh giá năng lực và tài chính để đưa ra lộ trình phù hợp nhất.</p>
              <Link to="/services" className="text-[#F37021] font-medium hover:text-orange-600 inline-flex items-center">
                Tìm hiểu thêm <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group text-center">
              <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1A531B] transition-colors duration-300 mx-auto">
                <span className="material-symbols-outlined text-[#1A531B] group-hover:text-white text-3xl">verified_user</span>
              </div>
              <h4 className="text-xl font-bold text-[#1A531B] mb-3">Hỗ trợ hồ sơ Visa</h4>
              <p className="text-slate-600 mb-6">Hướng dẫn chuẩn bị hồ sơ tài chính và luyện phỏng vấn chuyên nghiệp.</p>
              <Link to="/services" className="text-[#F37021] font-medium hover:text-orange-600 inline-flex items-center">
                Tìm hiểu thêm <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group text-center">
              <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1A531B] transition-colors duration-300 mx-auto">
                <span className="material-symbols-outlined text-[#1A531B] group-hover:text-white text-3xl">military_tech</span>
              </div>
              <h4 className="text-xl font-bold text-[#1A531B] mb-3">Săn học bổng</h4>
              <p className="text-slate-600 mb-6">Cập nhật thông tin học bổng mới nhất và hỗ trợ viết bài luận ấn tượng.</p>
              <Link to="/services" className="text-[#F37021] font-medium hover:text-orange-600 inline-flex items-center">
                Tìm hiểu thêm <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" alt="Team working" className="rounded-3xl shadow-2xl object-cover h-[500px] w-full" />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block border border-slate-100">
                <p className="text-sm font-bold text-slate-900 mb-2">5000+ Học viên</p>
                <p className="text-xs text-slate-500">Đã tin tưởng và thành công cùng Phương Nam Education.</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-[#F37021] font-semibold tracking-wide uppercase text-sm mb-3">Tại sao chọn chúng tôi</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1A531B] mb-6">Khác biệt tạo nên sự thành công</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-[#1A531B] bg-green-50 p-2 rounded-lg">verified</span>
                  <div>
                    <h4 className="text-xl font-bold text-[#1A531B]">Đội ngũ chuyên gia</h4>
                    <p className="text-slate-600">Am hiểu sâu sắc về hệ thống giáo dục quốc tế.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-[#1A531B] bg-green-50 p-2 rounded-lg">visibility</span>
                  <div>
                    <h4 className="text-xl font-bold text-[#1A531B]">Minh bạch & Tận tâm</h4>
                    <p className="text-slate-600">Thông tin rõ ràng về chi phí và lộ trình du học.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-20 bg-[#1A531B] relative overflow-hidden text-center text-white">
        <div className="relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sẵn sàng bắt đầu hành trình của bạn?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Hãy để chúng tôi giúp bạn biến ước mơ thành hiện thực ngay hôm nay.</p>
          <Link to="/contact" className="inline-flex items-center px-10 py-4 bg-[#F37021] hover:bg-orange-600 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105">
            Đăng ký tư vấn ngay
          </Link>
        </div>
      </section>
    </div>
  );
}
