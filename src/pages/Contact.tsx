import React from 'react';

export default function Contact() {
  return (
    <div className="bg-white font-display">
      {/* 1. PAGE HEADER - HIỆU ỨNG HIỆN ĐẠI */}
      <section className="bg-slate-50 py-24 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
          <span className="material-symbols-outlined text-[15rem] text-[#1A531B]">contact_support</span>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-[#1A531B] tracking-tighter mb-6 uppercase">Liên hệ với chúng tôi</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Đội ngũ chuyên viên tư vấn của <span className="font-bold text-[#1A531B]">Phương Nam Education</span> luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc về hành trình du học của bạn.
          </p>
        </div>
      </section>

      {/* 2. CONTACT INFO & FORM */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* CỘT TRÁI: THÔNG TIN LIÊN HỆ CHÍNH THỨC */}
            <div>
              <h2 className="text-3xl font-black text-[#1A531B] mb-8 uppercase tracking-tight">Thông tin trụ sở</h2>
              <p className="text-lg text-slate-600 mb-12">
                Quý khách có thể đến trực tiếp văn phòng hoặc liên hệ qua các kênh trực tuyến để được hỗ trợ chuyên sâu về hồ sơ và thủ tục.
              </p>

              <div className="space-y-10">
                {/* Địa chỉ theo Giấy phép */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-[#1A531B] group-hover:bg-[#1A531B] group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl">location_on</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Văn phòng đại diện</h3>
                    <p className="text-lg text-slate-800 font-bold leading-snug">
                      607-609 Nguyễn Kiệm, Phường 9<br />
                      Quận Phú Nhuận, TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>

                {/* Hotline chính thức */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-[#1A531B] group-hover:bg-[#F37021] group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl">call</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Hotline tư vấn</h3>
                    <p className="text-xl text-[#1A531B] font-black tracking-tight">
                      <a href="tel:0767686133">0767.686.133</a>
                    </p>
                    <p className="text-sm text-slate-500 font-medium">Zalo: 0907.916.566 (Hỗ trợ 24/7)</p>
                  </div>
                </div>

                {/* Email chuẩn */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-[#1A531B] group-hover:bg-[#1A531B] group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl">mail</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Email liên hệ</h3>
                    <p className="text-lg text-slate-800 font-bold">
                      <a href="mailto:phuongnamgdqt@gmail.com" className="hover:text-[#F37021] transition-colors">phuongnamgdqt@gmail.com</a>
                    </p>
                  </div>
                </div>

                {/* Khối Chứng nhận pháp lý */}
                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 mt-12 relative overflow-hidden">
                   <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl text-slate-200 opacity-50">verified_user</span>
                   <h4 className="font-black text-[#1A531B] mb-4 text-sm uppercase tracking-widest">Giấy phép hoạt động</h4>
                   <p className="text-xs text-slate-500 leading-relaxed font-medium">
                     CÔNG TY TNHH GIÁO DỤC QUỐC TẾ PHƯƠNG NAM<br />
                     Mã số giấy phép: <span className="text-slate-900 font-bold">2220/GCN-SGDĐT</span><br />
                     Cấp bởi Sở Giáo dục và Đào tạo TP.HCM ngày 11/09/2025.
                   </p>
                </div>
              </div>
            </div>

            {/* CỘT PHẢI: FORM ĐĂNG KÝ TƯ VẤN (CẬP NHẬT MÀU CAM) */}
            <div className="bg-white rounded-[3rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50 relative">
              <h3 className="text-2xl font-black text-[#1A531B] mb-8">Gửi yêu cầu tư vấn</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 ml-2 tracking-widest">Họ và tên</label>
                    <input type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-[#F37021] focus:ring-0 transition-all text-sm font-medium" placeholder="Nguyễn Văn A" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 ml-2 tracking-widest">Số điện thoại</label>
                    <input type="tel" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-[#F37021] focus:ring-0 transition-all text-sm font-medium" placeholder="09xx xxx xxx" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 ml-2 tracking-widest">Chương trình quan tâm</label>
                  <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-[#F37021] focus:ring-0 transition-all text-sm font-medium text-slate-700">
                    <option>Du học Hàn Quốc 2026</option>
                    <option>Trại hè Thụy Sĩ Chantemerle</option>
                    <option>Trại hè Thụy Sĩ Filolo (JCL)</option>
                    <option>Tư vấn định hướng học bổng</option>
                    <option>Khác</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 ml-2 tracking-widest">Nội dung tin nhắn</label>
                  <textarea rows={4} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-[#F37021] focus:ring-0 transition-all text-sm font-medium resize-none" placeholder="Hãy cho chúng tôi biết nhu cầu của bạn..."></textarea>
                </div>

                <button type="submit" className="w-full py-5 bg-[#F37021] hover:bg-orange-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl shadow-orange-500/20 transition-all hover:scale-[1.02]">
                  Gửi yêu cầu ngay
                </button>
                <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest mt-4">
                  Chúng tôi bảo mật 100% thông tin cá nhân của bạn
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAP SECTION - GHIM CHUẨN NGUYỄN KIỆM */}
      <section className="h-[600px] w-full bg-slate-100 relative grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe
          src="http://googleusercontent.com/maps.google.com/19"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Bản đồ Du học Phương Nam - Nguyễn Kiệm"
        ></iframe>
        {/* Overlay trang trí cho bản đồ */}
        <div className="absolute top-10 left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden md:block max-w-xs z-10">
          <p className="text-[#1A531B] font-black text-sm uppercase mb-2">Văn phòng mở cửa</p>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Thứ 2 - Thứ 6: 08:00 - 17:30<br />
            Thứ 7: 08:00 - 12:00
          </p>
        </div>
      </section>
    </div>
  );
}
