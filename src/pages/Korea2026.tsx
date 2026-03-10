/**
 * Trang: Hàn Quốc 2026 - Hóa thân thành Idol
 * Được chuyển đổi từ thiết kế Stitch
 */
import React from 'react';

const Korea2026 = () => {
  return (
    <main className="bg-background-light text-slate-900 font-display">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-end overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuALn6HseQYSqk5EDb3CjKsNOevLkEdme2JCpaK-NT56ZD0kwCpzp1G233IPf355gsHFdsDWfniKcveCIDAQCEUyQmXNOP56YVrGFMK58Szmx4wxwprEU_SYGzud8FIM2L-KYpaLZtoT-90xbLrDYtHG8q9Jp_34kNQEKy_p8OUnjEbFah7Q6bsgjYrpNF1MJ58s_eic83ZL6zl_dlegzPsWuDyAalO6Ijkou_LhhdrY2EYbGOfSB0IXjqI5m3_HPxpFEGDonhnPqas')" }}
        ></div>
        <div className="absolute inset-0 hero-gradient bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <div className="inline-flex items-center gap-2 bg-[#F37021] text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-bounce">
            <span className="material-symbols-outlined text-lg">verified</span>
            Trải nghiệm độc bản 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-4xl drop-shadow-2xl">
            Hàn Quốc 2026: Hóa thân thành Idol K-Pop và Khám phá Xứ sở Kim Chi
          </h2>
        </div>
      </section>

      {/* Sapo Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-2xl md:text-3xl text-slate-700 font-medium italic leading-relaxed">
          "Khởi đầu giấc mơ nghệ thuật với hành trình 7 ngày 6 đêm rực rỡ. Không chỉ là du lịch, đây là nơi bạn thực sự chạm tay vào ánh hào quang của một ngôi sao thực thụ."
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <div className="h-1 w-12 bg-[#1A531B] rounded-full"></div>
          <div className="h-1 w-12 bg-[#F37021] rounded-full"></div>
          <div className="h-1 w-12 bg-[#1A531B] rounded-full"></div>
        </div>
      </section>

      {/* Nội dung chi tiết - KPOP ART SCHOOL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#1A531B]">
                <span className="material-symbols-outlined text-4xl">music_note</span>
                <span className="text-xl font-bold uppercase tracking-widest">Idol Experience</span>
              </div>
              <h3 className="text-4xl font-extrabold text-slate-900">KPOP ART SCHOOL (KAS)</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Tham gia các khóa đào tạo vũ đạo chuyên nghiệp tại học viện hàng đầu Seoul. Bạn sẽ được hướng dẫn bởi các biên đạo đã từng làm việc với những nhóm nhạc hàng đầu.
              </p>
            </div>
            <div className="relative group">
              <img 
                alt="K-Pop Art School" 
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXAezi8vudvWSCNw6Az22LFT-C9OWz0ft7CnMA68Re2rSUFfxFCUK2K55lB-qwsU9bFs9XUhsGscQcw24lFhJBCtbOJYXNK5Xm9wyiXT1620o_W7c7UKKQwj4P_-1JrGO_FvA9G2IhAQJs7ROFInUH6DYgF0IGySds6vPIvyV9miX6-1-L3zyKrT9aKsg2ufksCYbjO9FRLKWI-VL3bHIQVXbA-ACwZ8FvPd_ewVFJJXksb8HgR-aHEdTTjsiWDW9CPe6FLPjhr6Q" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Bạn có thể copy thêm các Section khác từ HTML vào đây tương tự */}
    </main>
  );
};

export default Korea2026;
