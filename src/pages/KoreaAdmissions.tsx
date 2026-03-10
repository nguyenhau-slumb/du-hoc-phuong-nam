import React from 'react';

const KoreaAdmissions = () => {
  return (
    <div className="bg-background-light text-slate-900 font-display">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A531B] via-[#1A531B]/80 to-transparent z-10"></div>
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOw8XpSagqb1_YNCMr8Wnlcmdk4AWvGC1AQJ9SEGmCaM_zmpQysU2fNfcU6S61AnxamRRgF7-bqknghZG4bi9kqCzZXtLZQwgC2j8ETAoFDqdCbAAonWKnuLPGfcsYgn49fhHCtesA-DMRop4IpF7ZR-23_vcTZVFkKeCQuU_klJw3Or4xaz6rQ4B7TIPRcZHOaX4M4LwK1ZrzBPdn3oplpqHvgiGtAOV4e5uRKyn-CSHLjZiQTwBBk6N308UU2ehmo7E7RvMvzcI" 
            alt="Tuyển sinh Hàn Quốc 2026"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#F37021]/20 border border-[#F37021]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="material-symbols-outlined text-[#F37021] text-sm">verified</span>
              <span className="text-[#F37021] font-bold text-sm tracking-wider uppercase">Tuyển sinh kỳ 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6">
              HƯỚNG DẪN TUYỂN SINH <br/>
              <span className="text-[#F37021]">DU HỌC HÀN QUỐC 2026</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Khởi đầu hành trình tương lai cùng SOS International và Du học Phương Nam. Chuyên nghiệp - Tận tâm - Uy tín.
            </p>
          </div>
        </div>
      </section>

      {/* Điều kiện & Thủ tục */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#1A531B] mb-4">Điều Kiện & Thủ Tục</h2>
            <div className="w-24 h-1.5 bg-[#F37021] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl hover:border-[#F37021] transition-all group">
              <div className="w-14 h-14 bg-[#F37021]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F37021] transition-colors">
                <span className="material-symbols-outlined text-[#F37021] group-hover:text-white text-3xl">cake</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A531B] mb-4">Độ tuổi & Học vấn</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#F37021] text-sm">check</span> Từ 18 - 25 tuổi</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#F37021] text-sm">check</span> Tốt nghiệp THPT trở lên</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#F37021] text-sm">check</span> GPA từ 6.5 trở lên</li>
              </ul>
            </div>
            {/* Thêm các mục khác tương tự cho Năng lực ngoại ngữ và Tài chính */}
          </div>
        </div>
      </section>

      {/* Học bổng */}
      <section className="py-20 bg-[#1A531B] relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">Huy Chương Vàng Học Bổng 2026</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
              <p className="text-[#F37021] font-black text-5xl mb-2">80%</p>
              <p className="font-bold text-lg mb-4">Học bổng học phí</p>
              <p className="text-sm text-slate-300">Yêu cầu: TOPIK 5 - 6. Áp dụng cho kỳ đầu tiên.</p>
            </div>
            {/* Các mức học bổng khác */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KoreaAdmissions;
