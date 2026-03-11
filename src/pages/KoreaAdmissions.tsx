import React from 'react';
import { Link } from 'react-router-dom';

export default function KoreanAdmissions() {
  return (
    <main className="bg-white text-slate-900 font-display overflow-x-hidden">
      {/* 1. HERO SECTION - TUYỂN SINH HÀN QUỐC */}
      <section className="relative h-[60vh] min-h-[450px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Seoul University" 
            className="w-full h-full object-cover opacity-40 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A531B]/60 to-slate-950"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#F37021] text-white text-xs font-black uppercase tracking-widest mb-6 shadow-lg">
            Thông tin chính xác 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tighter">
            Hướng dẫn Tuyển sinh <br />
            <span className="text-[#F37021]">Du học Hàn Quốc</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
            Lộ trình minh bạch, chi phí rõ ràng và cam kết đồng hành cùng học sinh Phương Nam đến tận khi nhập học tại xứ sở Kim Chi.
          </p>
        </div>
      </section>

      {/* 2. STATS SHOWCASE - CẬP NHẬT TRUNG THỰC & KHÔNG NHẢY DÒNG */}
      <section className="py-12 bg-white border-b border-slate-100 relative z-20 max-w-5xl mx-auto rounded-[2.5rem] shadow-xl px-6 -mt-12 md:-mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-100">
          <div className="px-2">
            <div className="text-xl md:text-2xl font-black text-[#1A531B] mb-1">Am hiểu</div>
            <div className="text-[9px] md:text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-tight">
              Cập nhật xu hướng 2026
            </div>
          </div>
          
          <div className="px-2 border-l border-slate-100">
            <div className="text-xl md:text-2xl font-black text-[#1A531B] mb-1">Trực tiếp</div>
            <div className="text-[9px] md:text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-tight">
              Kết nối trường Top Hàn
            </div>
          </div>
          
          <div className="px-2 border-l border-slate-100">
            <div className="text-xl md:text-2xl font-black text-[#1A531B] mb-1">Tận tâm</div>
            <div className="text-[9px] md:text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-tight">
              Đồng hành 1-1 trọn gói
            </div>
          </div>
          
          <div className="px-2 border-l border-slate-100">
            <div className="text-xl md:text-2xl font-black text-[#1A531B] mb-1">Tối ưu</div>
            <div className="text-[9px] md:text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-tight">
              Tỷ lệ Visa vượt trội
            </div>
          </div>
        </div>
      </section>

      {/* 3. LỘ TRÌNH TUYỂN SINH */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#F37021] font-bold uppercase text-xs tracking-[0.3em] mb-4">Quy trình chuyên nghiệp</h2>
            <h3 className="text-3xl md:text-4xl font-black text-[#1A531B] leading-tight">Các bước chinh phục Visa Hàn Quốc</h3>
            <div className="w-16 h-1 bg-[#F37021] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Tư vấn & Thẩm định", desc: "Đánh giá hồ sơ và chọn trường phù hợp với năng lực tài chính và nguyện vọng." },
              { step: "02", title: "Xử lý hồ sơ", desc: "Hoàn thiện các thủ tục giấy tờ, dịch thuật công chứng và xin thư mời nhập học." },
              { step: "03", title: "Luyện phỏng vấn", desc: "Đào tạo tiếng Hàn cấp tốc và rèn luyện kỹ năng phỏng vấn cùng chuyên gia." },
              { step: "04", title: "Xin Visa & Xuất cảnh", desc: "Nộp hồ sơ vào lãnh sự và chuẩn bị hành trang cất cánh đến Hàn Quốc." }
            ].map((item, idx) => (
              <div key={idx} className="relative p-10 bg-slate-50 rounded-[2rem] hover:bg-[#1A531B] group transition-all duration-300">
                <div className="text-5xl font-black text-[#1A531B]/10 group-hover:text-white/20 absolute top-6 right-8 transition-colors">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-[#1A531B] group-hover:text-white mb-4 relative z-10">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 group-hover:text-white/80 leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center bg-[#1A531B] py-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          <h3 className="text-3xl md:text-4xl font-black text-white mb-6">Bạn cần tư vấn chi tiết hơn?</h3>
          <p className="text-white/70 mb-10 text-lg">Đội ngũ chuyên viên của chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc về hồ sơ và chi phí.</p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-[#F37021] text-white rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-orange-600 transition-all shadow-xl">
            Liên hệ với chuyên gia
          </Link>
        </div>
      </section>
    </main>
  );
}
