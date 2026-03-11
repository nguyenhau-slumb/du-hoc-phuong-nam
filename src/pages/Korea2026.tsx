/**
 * Trang: Hàn Quốc 2026 - Hóa thân thành Idol
 * Được cập nhật thông số trung thực và tối ưu hiển thị
 */
import React from 'react';

const Korea2026 = () => {
  return (
    <main className="bg-white text-slate-900 font-display overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-end overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <div className="inline-flex items-center gap-2 bg-[#F37021] text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-bounce">
            <span className="material-symbols-outlined text-lg">verified</span>
            Trải nghiệm độc bản 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-4xl drop-shadow-2xl tracking-tighter">
            Hàn Quốc 2026: Hóa thân thành Idol K-Pop và Khám phá Xứ sở Kim Chi
          </h2>
        </div>
      </section>

      {/* 2. Sapo Section */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-2xl md:text-3xl text-slate-700 font-medium italic leading-relaxed">
          "Khởi đầu giấc mơ nghệ thuật với hành trình 7 ngày 6 đêm rực rỡ. Không chỉ là du lịch, đây là nơi bạn thực sự chạm tay vào ánh hào quang của một ngôi sao thực thụ."
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <div className="h-1 w-12 bg-[#1A531B] rounded-full"></div>
          <div className="h-1 w-12 bg-[#F37021] rounded-full"></div>
          <div className="h-1 w-12 bg-[#1A531B] rounded-full"></div>
        </div>
      </section>

      {/* 3. STATS SECTION - ĐÃ CẬP NHẬT: AM HIỂU, TRỰC TIẾP, TẬN TÂM, TỐI ƯU */}
      <section className="py-12 bg-white border-b border-slate-100 relative z-20 max-w-5xl mx-auto rounded-[2.5rem] shadow-xl px-6 -mt-10 md:-mt-14">
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

      {/* 4. Nội dung chi tiết - KPOP ART SCHOOL */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="flex items-center gap-3 text-[#1A531B]">
                <span className="material-symbols-outlined text-4xl">music_note</span>
                <span className="text-sm font-black uppercase tracking-[0.3em]">Idol Experience</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                KPOP ART SCHOOL (KAS)
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Tham gia các khóa đào tạo vũ đạo chuyên nghiệp tại học viện hàng đầu Seoul. Bạn sẽ được hướng dẫn bởi các biên đạo đã từng làm việc trực tiếp với các nhóm nhạc hàng đầu K-Pop.
              </p>
              <button className="px-8 py-4 bg-[#1A531B] text-white rounded-2xl font-bold hover:bg-green-800 transition-all shadow-lg">
                Tìm hiểu về học viện KAS
              </button>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-4 bg-[#F37021]/10 rounded-[2rem] blur-xl group-hover:bg-[#F37021]/20 transition-all"></div>
              <img 
                alt="K-Pop Art School" 
                className="relative rounded-[2rem] shadow-2xl object-cover w-full h-[450px] transition-transform duration-500 group-hover:scale-[1.02]" 
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Korea2026;
