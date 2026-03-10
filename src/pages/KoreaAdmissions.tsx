import React from 'react';

const KoreaAdmissions = () => {
  return (
    <div className="bg-[#f8f6f6] dark:bg-[#122b13] text-slate-900 dark:text-slate-100 font-display">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A531B] via-[#1A531B]/80 to-transparent z-10"></div>
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOw8XpSagqb1_YNCMr8Wnlcmdk4AWvGC1AQJ9SEGmCaM_zmpQysU2fNfcU6S61AnxamRRgF7-bqknghZG4bi9kqCzZXtLZQwgC2j8ETAoFDqdCbAAonWKnuLPGfcsYgn49fhHCtesA-DMRop4IpF7ZR-23_vcTZVFkKeCQuU_klJw3Or4xaz6rQ4B7TIPRcZHOaX4M4LwK1ZrzBPdn3oplpqHvgiGtAOV4e5uRKyn-CSHLjZiQTwBBk6N308UU2ehmo7E7RvMvzcI" 
            alt="Korean university campus"
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
            <p className="text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
              Khởi đầu hành trình tương lai cùng SOS International và Phương Nam Education. Chuyên nghiệp - Tận tâm - Uy tín. Cam kết lộ trình Visa minh bạch.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#F37021] hover:bg-[#F37021]/90 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-transform hover:scale-105">
                Khám phá ngay <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-colors">
                Tải Brochure 2026
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Authority */}
      <section className="py-20 bg-white dark:bg-[#1A531B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#1A531B] dark:text-white mb-4">Mạng Lưới Toàn Cầu SOS International</h2>
            <div className="w-24 h-1.5 bg-[#F37021] mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-navy">
              <img className="w-full h-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5K2vexzjDmTxF_CvX_wQ9eCsEDefFwZ4c3GtOZ35DRz8N5qiQIQ_ZM8TXXPCpg3SyAn5VIl_v6Eyk2AeV80_nMLOzfwawi7q5lE7NzF4mDxS26Yk42Mfq-inukvBLvoNqavIDQulrsHuN9sOa-zRvFrnmHEWtz0thln5Zx_QR-9wtABMkM6BjIisdXljPsJLWViuUZtnMehbHEuAQt2DFXdSAxtz2AB627RxxuOQywztbKGbP7pyL6rAuI-QLwDPXHOZY5PzYeiE" alt="Global Offices" />
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-4">
                <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg">
                  <p className="text-[#F37021] font-black text-2xl">8</p>
                  <p className="text-[#122b13] text-sm font-bold">Văn phòng toàn cầu</p>
                </div>
                <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg">
                  <p className="text-[#F37021] font-black text-2xl">15+</p>
                  <p className="text-[#122b13] text-sm font-bold">Năm kinh nghiệm</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#1A531B] dark:text-[#F37021]">Kết nối không giới hạn</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Với hơn 15 năm kinh nghiệm, SOS International tự hào là đối tác chiến lược của hàng trăm trường Đại học hàng đầu tại Hàn Quốc, Canada và Việt Nam.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#F37021]">check_circle</span>
                  <div>
                    <h4 className="font-bold text-[#1A531B] dark:text-white">Tỷ lệ đỗ Visa 99%</h4>
                    <p className="text-sm text-slate-500">Xử lý hồ sơ chuyên nghiệp</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#F37021]">check_circle</span>
                  <div>
                    <h4 className="font-bold text-[#1A531B] dark:text-white">Hỗ trợ 24/7</h4>
                    <p className="text-sm text-slate-500">Đồng hành tại Hàn Quốc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-[#f8f6f6] dark:bg-[#122b13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#1A531B] dark:text-white mb-12">Điều Kiện & Thủ Tục Tuyển Sinh</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#1A531B] p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-white/10 hover:border-[#F37021] transition-all group">
              <div className="w-14 h-14 bg-[#F37021]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F37021] transition-colors">
                <span className="material-symbols-outlined text-[#F37021] group-hover:text-white text-3xl">cake</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Độ tuổi & Học vấn</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#F37021] text-sm">check</span> Từ 18 - 25 tuổi</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#F37021] text-sm">check</span> Tốt nghiệp THPT trở lên</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#F37021] text-sm">check</span> GPA từ 6.5 trở lên</li>
              </ul>
            </div>
            {/* Tiếp tục tương tự cho Năng lực ngoại ngữ và Tài chính */}
            <div className="bg-white dark:bg-[#1A531B] p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-white/10 hover:border-[#F37021] transition-all group">
              <div className="w-14 h-14 bg-[#F37021]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F37021] transition-colors">
                <span className="material-symbols-outlined text-[#F37021] group-hover:text-white text-3xl">translate</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Năng lực ngoại ngữ</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#F37021] text-sm">check</span> Hệ tiếng: Không cần TOPIK</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#F37021] text-sm">check</span> Chuyên ngành: TOPIK 3+</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#F37021] text-sm">check</span> IELTS 5.5+ (Hệ tiếng Anh)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-[#1A531B] p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-white/10 hover:border-[#F37021] transition-all group">
              <div className="w-14 h-14 bg-[#F37021]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F37021] transition-colors">
                <span className="material-symbols-outlined text-[#F37021] group-hover:text-white text-3xl">account_balance</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Tài chính & Sức khỏe</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#F37021] text-sm">check</span> Tiết kiệm: $10k - $20k</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#F37021] text-sm">check</span> Sức khỏe tốt</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#F37021] text-sm">check</span> Không tiền án tiền sự</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="py-20 bg-[#1A531B] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-12">Huy Chương Vàng Học Bổng 2026</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl relative group hover:bg-white/20 transition-all">
              <div className="absolute -top-4 -right-4 bg-[#F37021] text-white font-black px-4 py-2 rounded-lg shadow-lg rotate-12">TOP</div>
              <p className="text-[#F37021] font-black text-5xl mb-2">80%</p>
              <p className="font-bold text-lg mb-4">Học bổng học phí</p>
              <p className="text-sm text-slate-300">Yêu cầu: TOPIK 5 - 6</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-all">
              <p className="text-[#F37021] font-black text-5xl mb-2">70%</p>
              <p className="font-bold text-lg mb-4">Học bổng học phí</p>
              <p className="text-sm text-slate-300">Yêu cầu: TOPIK 4</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-all">
              <p className="text-[#F37021] font-black text-5xl mb-2">50%</p>
              <p className="font-bold text-lg mb-4">Học bổng học phí</p>
              <p className="text-sm text-slate-300">Yêu cầu: TOPIK 3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center bg-white dark:bg-[#122b13]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black text-[#1A531B] dark:text-white mb-6">
            Sẵn sàng bắt đầu hành trình của bạn?
          </h2>
          <p className="text-xl text-slate-500 mb-10">Hãy để chúng tôi tư vấn lộ trình tối ưu nhất cho hồ sơ của bạn.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#F37021] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:-translate-y-1 transition-all">
              Đăng ký tư vấn ngay
            </button>
            <button className="bg-[#0068FF] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSZA-xeqMljA9Bse7nZED7Rd6xgGpym0t759X0L3GjHDHDAe22BSgjHDZiYitjqLglvm3tFpMI-TpqCJlx5X2y3ne0YFUYWf3BS_YiiHovVLcxTFJoryvMyVPdDm3vFBmB1wgTy978p93a0XrwaGo7-ak2m3rH4UK3S7NhftK6Uo6a9p2f_kWZ65ThaCpkUaIXy0MmieuV4V4Lg7euDCMSGeR0Jr76X20IoVkZt6Y-uiue-yhVysWAVOUKiS_Lwq2po4n9_mu0y9Y" className="w-6 h-6" alt="Zalo" /> Chat Zalo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KoreaAdmissions;
