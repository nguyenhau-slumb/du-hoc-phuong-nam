import React from 'react';

export default function Korean2026() {
  return (
    <div className="bg-white font-display">
      <section className="bg-slate-900 py-20 text-white text-center">
        <h1 className="text-3xl md:text-5xl font-black uppercase mb-4">Trải nghiệm Hàn Quốc 2026</h1>
        <p className="text-orange-400 font-bold tracking-widest uppercase text-sm">Cơ hội thực hiện giấc mơ Idol</p>
      </section>

      {/* STATS SECTION - ĐÃ FIX NỘI DUNG MỚI */}
      <section className="py-12 bg-white border-b border-slate-100 relative -mt-12 z-20 max-w-5xl mx-auto rounded-[2.5rem] shadow-xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4">
            <div className="text-2xl font-black text-[#F37021] mb-1">Chiến lược</div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Đối tác giáo dục uy tín</p>
          </div>
          <div className="p-4 border-l border-slate-100">
            <div className="text-2xl font-black text-[#F37021] mb-1">Chuyên sâu</div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Lộ trình học tập 2026</p>
          </div>
          <div className="p-4 border-l border-slate-100">
            <div className="text-2xl font-black text-[#F37021] mb-1">Đồng hành</div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Hỗ trợ 24/7 mọi lúc</p>
          </div>
          <div className="p-4 border-l border-slate-100">
            <div className="text-2xl font-black text-[#F37021] mb-1">Minh bạch</div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Pháp lý & Chứng nhận</p>
          </div>
        </div>
      </section>
    </div>
  );
}
