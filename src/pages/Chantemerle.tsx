import React from 'react';

const Chantemerle = () => {
  return (
    <main className="bg-white text-slate-900 font-display">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 z-10" 
            style={{ background: 'linear-gradient(rgba(26, 83, 27, 0.7), rgba(26, 83, 27, 0.4))' }}
          ></div>
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3FsadVhXozSS2rk_I5FompdCX3mfqTY69ckhvSGJjWUj2ynEK1OZQhhfswqc1RV2AwZMh-bcnTZVh5CJFqqNDmQoWpmFCjKhcDKpLEbC_UFPhR9P4caG8Z-KkHnWHORMHkVcDSBsY2N25gUXFNTi4QROXJqJO-kFOGWmtHKHWFifoN9l6Tk5l3nvfzUZ3_yJDHM1IJY1_-tW1Vb2pMrP1ZyGIEuAZyDbvfEQLs-XETy5bFRMQCmhQlS4tT1l85fK27sv3VyFWQ2s" 
            alt="Swiss Alps landscape"
          />
        </div>
        <div className="relative z-20 max-w-4xl px-6 text-center text-white">
          <span className="inline-block bg-[#F37021] px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
            SUMMER CAMP 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
            CHANTEMERLE 2026: <br /> MAKE IT COUNT – MÙA HÈ KHỞI NGUỒN THỦ LĨNH
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Khám phá thiên nhiên hùng vĩ của Thụy Sĩ và khơi dậy tiềm năng lãnh đạo trong con thông qua chương trình giáo dục đẳng cấp quốc tế.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#F37021] text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl hover:scale-105 transition-transform uppercase tracking-widest">
              Khám phá ngay
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all">
              Xem video giới thiệu
            </button>
          </div>
        </div>
      </section>

      {/* Học tập sáng tạo Section */}
      <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A531B]">Học tập sáng tạo</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Chương trình học tập đa dạng, kết hợp giữa lý thuyết và thực hành thực tế.</p>
          <div className="w-24 h-1 bg-[#F37021] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-1 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-slate-100 overflow-hidden group">
            <div className="aspect-video overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTndhteEbJIyxhlzAg3au2DS7GCu4GclfpeoBqK-vFsMjmojNlrLHpZIuQXFpDoCQHduRrKbRgg0ediTaPHZTxPYhJjVdmEFSmip6I6ViKcJRn5mhdK4ajTH_KLZ_boFDjiuQEVWYVXNhjJ4091VFNSXvqeCbzIhBjygf6hVe1bnM_bjRSPDBkkYOskA8NSO16bvZuAZUDQncRJNtY7hCMtccMwT8Tc_KcuxKIc4Jcm_5PIo6gB08vutscDoZS7FVQra-EQENZ-W8" alt="Language Class" />
            </div>
            <div className="p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#1A531B] text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#1A531B]/20">
                <span className="material-symbols-outlined text-3xl">translate</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A531B] mb-4">SpeakUp (Ngôn ngữ)</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Phát triển khả năng giao tiếp tự tin thông qua các lớp học tiếng Anh, Pháp hoặc Đức với giáo viên bản ngữ.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-1 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-slate-100 overflow-hidden group">
            <div className="aspect-video overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTAp58BKKzDXYmAJrNu_k0cuW0FkVff30_FF-iuumXz13h1SgVN7x5Up7ZftKlEoMHr0Ds5K8GrnKvVLnb16ZHmLrA-IMLTy3t7Qua9bqG341f2kxVbN-lVuhCpSjjC7c45cSPR2vfMhb6dzr8nueQm1EerYgp4rtxQExfahsJIC01ztCaPBeOeMQz0sVCZdRQonGPUJYhM4c6kJKEFc8LaxxEBvihdFi7vpC-wjJadIJH3Op5qsB9F9g-ZpljWJue78GqFymJfTY" alt="Engineering" />
            </div>
            <div className="p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#1A531B] text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#1A531B]/20">
                <span className="material-symbols-outlined text-3xl">architecture</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A531B] mb-4">Engineering (Toán & Lý)</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Ứng dụng thực tiễn của Toán học và Vật lý vào các mô hình kỹ thuật, giúp trẻ tư duy logic và sáng tạo.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-1 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-slate-100 overflow-hidden group">
            <div className="aspect-video overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq8zbM8uvclgWY2BOPYKRqbKLR0xWNOGpoFaMPbn8ikGlhd6A73nrtxr776hzzqmVvqWYs28rGfb8KxuRBZPB3JHCrOw5QgGRwUPTYP5U1bY04-vnsqLVmIEw9oOCsZO3_3Hv99EKeWs5JvgrsU_JJ-SvkvQ1IbrG_HMeDKeVWJBXRvvN_JA2bvUKjpPFF8mKamGf3x_K70RugYpMh7wKy7PHk7_Sw89Cil5i_0Nq8limAbZeHgw87S7K5CIeM9CQlH2THk2vjNB8" alt="Skills" />
            </div>
            <div className="p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#1A531B] text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#1A531B]/20">
                <span className="material-symbols-outlined text-3xl">star</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A531B] mb-4">Make It Count (Kỹ năng)</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Rèn luyện kỹ năng lãnh đạo, làm việc nhóm và tư duy giải quyết vấn đề trong môi trường quốc tế.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hành trình khám phá Section */}
      <section className="text-white py-24 px-4 md:px-10 bg-[#1A531B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight">Hành trình khám phá</h2>
                <p className="text-white/70 text-xl font-light">Hơn cả một trại hè, đây là chuyến du ngoạn văn hóa và giải trí tầm cỡ Châu Âu.</p>
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="p-4 rounded-2xl bg-[#F37021] shadow-lg group-hover:rotate-12 transition-transform">
                    <span className="material-symbols-outlined text-white text-2xl">location_on</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Europa Park (Đức)</h4>
                    <p className="text-white/60 leading-relaxed">Chuyến đi 2 ngày bùng nổ tại công viên giải trí hàng đầu thế giới với các trò chơi mạo hiểm và trình diễn nghệ thuật.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="p-4 rounded-2xl bg-[#F37021] shadow-lg group-hover:rotate-12 transition-transform">
                    <span className="material-symbols-outlined text-white text-2xl">museum</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Geneva & Lausanne (Thụy Sĩ)</h4>
                    <p className="text-white/60 leading-relaxed">Thăm quan Bảo tàng Olympic, trụ sở Liên Hợp Quốc và khám phá vẻ đẹp cổ kính của các thành phố ven hồ Leman.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="grid grid-cols-2 gap-6">
                <img className="rounded-[2rem] w-full h-full object-cover shadow-2xl border-4 border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSwFBc_XyhILAy-jznSfkXohpR8Hghuc_ExcoJ9N2jER0-q_E3R0syl1sCnNxPkRxUsRTpKspcIyp-7WlfUuEvhIIiEtxn54pt4HQXRoV1dopmMk6raee7Bnkdi6LYmUJfRDHs7TEQPszLOTsY0ckLkKGExIpuIl1tajJzAU0rLeZz1bstPDIrCZ-6CoMgQ_PpYYlKYCO1GlTY-dZ1GJLjc6yh7laUkedDktvivMVUywuQXI6D0WON7t_KrASQI3l1Q4Ijz16lKLg" alt="Europa Park" />
                <div className="space-y-6">
                  <img className="rounded-[2rem] w-full h-56 object-cover shadow-2xl border-4 border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAosTcs7YrijAw5D0Uc1aOabFg2Hr5dSkVfRnKbgGtnMH2DWElY9qBIAsDqekaCu8cPHyIlfztbU9E-W_nW_2CrBjp0w2cBHI7u7fhIHkEfKHTBLa46qQcZEgBKUp1jilksrTtFfi230nTzQ5XUrc2HYTv3uLkQpuS_G056m1cXkLrCEzDf1dH-oG-8IUBqeJx0bg_OAv_7wzk3vM8f_sfmhqy0fqZViaXeKoq6kwMC5T-A-aT0zK_CUxilKcGPyHK49nFW39itAGE" alt="Geneva" />
                  <img className="rounded-[2rem] w-full h-56 object-cover shadow-2xl border-4 border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMjG2nwsyzhABbek4QtCECu-p3VOPBPoiN_ut0Q4X_mf_rXM8cJ7I7KkkowmqqMBJEGVf0OMVDOcyP5RGbnHKHsoLycF5I7K1CVoydi5SPcxjPIdgeKmk_AJCmfentabYdwvW9y0kytmX7FRo79lvbYbCtvZG-7UYyS7HiYaXY658ppaPiyJYnu2zenjp4BAr7pHMQG7JPKsIUI_JisBjjFe8GTacKw3L_8tbLmhrGHt7Eu_pp9GgQ3iWu8QwAy8Ij0bFLM2-z00o" alt="Lausanne" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lịch trình Section */}
      <section className="py-24 px-4 md:px-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black text-[#1A531B]">Lịch trình sinh hoạt khoa học</h2>
          <p className="text-slate-600">Sự cân bằng hoàn hảo giữa học tập, thể thao và thư giãn.</p>
        </div>
        <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-slate-100">
          <table className="w-full text-left border-collapse">
            <thead className="text-white bg-[#1A531B]">
              <tr>
                <th className="p-6 md:p-8 text-sm md:text-base font-bold uppercase tracking-wider">Thời gian</th>
                <th className="p-6 md:p-8 text-sm md:text-base font-bold uppercase tracking-wider">Hoạt động</th>
                <th className="p-6 md:p-8 text-sm md:text-base font-bold uppercase tracking-wider">Mục tiêu</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {[
                { time: '09:00 - 12:00', task: 'Học tập chuyên sâu (Ngôn ngữ/STEM)', goal: 'Tiếp thu kiến thức mới' },
                { time: '12:00 - 13:30', task: 'Ăn trưa & Nghỉ ngơi', goal: 'Nạp năng lượng' },
                { time: '13:30 - 16:30', task: 'Thể thao & Câu lạc bộ kỹ năng', goal: 'Phát triển thể chất' },
                { time: '17:00 - 19:00', task: 'Hoạt động tự do & Hồ bơi', goal: 'Giao lưu quốc tế' },
                { time: '19:00 - 20:30', task: 'Ăn tối chủ đề', goal: 'Trải nghiệm văn hóa' },
                { time: '21:00 - 22:00', task: 'Night Game & Sinh hoạt chung', goal: 'Kết nối cảm xúc' }
              ].map((row, i) => (
                <tr key={i} className={`border-b border-slate-50 ${i % 2 === 0 ? '' : 'bg-slate-50/30'}`}>
                  <td className="p-6 md:p-8 font-bold text-[#1A531B]">{row.time}</td>
                  <td className="p-6 md:p-8 text-slate-800">{row.task}</td>
                  <td className="p-6 md:p-8 italic text-slate-500">{row.goal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1A531B] to-[#246e25] rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-[#1A531B]/30">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F37021]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">Món quà mùa hè ý nghĩa nhất cho con</h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Đừng bỏ lỡ cơ hội để con trở thành một phần của cộng đồng thủ lĩnh nhí tại Thụy Sĩ mùa hè 2026. Số lượng chỗ có hạn!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <button className="w-full sm:w-auto bg-[#F37021] hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3">
                <span className="material-symbols-outlined">download</span>
                TẢI BROCHURE 2026
              </button>
              <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3">
                <span className="material-symbols-outlined">chat</span>
                LIÊN HỆ ZALO TƯ VẤN
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Chantemerle;
