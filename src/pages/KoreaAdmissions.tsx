import React from 'react';

export default function KoreanAdmissions() {
  return (
    <div className="bg-white font-display">
      {/* HERO SECTION TRANG TUYỂN SINH */}
      <section className="bg-[#1A531B] py-20 text-white text-center">
        <h1 className="text-3xl md:text-5xl font-black uppercase mb-4">Tuyển sinh du học Hàn Quốc 2026</h1>
        <p className="text-white/70 max-w-2xl mx-auto px-4">Lộ trình rõ ràng - Chi phí minh bạch - Hỗ trợ tận tâm từ Phương Nam Education.</p>
      </section>

      {/* STATS SECTION - ĐÃ FIX: TRUNG THỰC & SIZE CHỮ CHUẨN */}
      <section className="py-12 bg-white border-b border-slate-100 relative -mt-12 z-20 max-w-5xl mx-auto rounded-[2.5rem] shadow-xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-100">
          <div className="px-2">
            <div className="text-xl md:text-2xl font-black text-[#1A531B] mb-1">Am hiểu</div>
            <div className="text-[9px] md:text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-tight">Cập nhật xu hướng 2026</div>
          </div>
          
          <div className="px-2 border-l border-slate-100">
            <div className="text-xl md:text-2xl font-black text-[#1A531B] mb-1">Trực tiếp</div>
            <div className="text-[9px] md:text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-tight">Kết nối trường Top Hàn</div>
          </div>
          
          <div className="px-2 border-l border-slate-100">
            <div className="text-xl md:text-2xl font-black text-[#1A531B] mb-1">Tận tâm</div>
            <div className="text-[9px] md:text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-tight">Đồng hành 1-1 trọn gói</div>
          </div>
          
          <div className="px-2 border-l border-slate-100">
            <div className="text-xl md:text-2xl font-black text-[#1A531B] mb-1">Tối ưu</div>
            <div className="text-[9px] md:text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-tight">Tỷ lệ Visa vượt trội</div>
          </div>
        </div>
      </section>

      {/* Các nội dung khác phía dưới giữ nguyên... */}
    </div>
  );
}
