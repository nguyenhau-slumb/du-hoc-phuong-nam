import React from 'react';

const Filolo = () => {
  return (
    <main className="bg-[#f8fbff] dark:bg-[#0a1118] font-display text-slate-900 dark:text-slate-100 antialiased">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 aspect-[21/9] flex flex-col justify-end p-8 lg:p-16">
            <div className="absolute inset-0 opacity-60">
              <img 
                alt="Swiss Alps landscape" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmntQomY_9kdXybTg3DRcNWJh7Fgsy9rR0HjYoa8SU57a-L4qglXwhGdnjVF8Pu47JCxvY_-zECg5TLCHI1YSFswHXanVnGP1BBg4UMOk3qqWM2M_Mx5T_bBc4Mw0jM9eZayAmHK5QgZDYWKBY1uwr3VgRzIg0YSiURBW-FSP1wknsa49KtkywLPUGbTvmrUqsYOX0wXIyFf3sBdIEN_BlUCqAR8pRDuZ89uTr1vkvWMe48JJoKBkcogifTsaZn5_u6M-Huve_s34" 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
            <div className="relative z-10 max-w-4xl">
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-bold mb-6" 
                style={{ backgroundColor: 'rgba(243, 112, 33, 0.9)', backdropFilter: 'blur(4px)' }}
              >
                <span className="material-symbols-outlined text-sm">school</span>
                Dành cho học sinh từ 17 tuổi
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 uppercase tracking-tight">
                FILOLO 2026: KHÁM PHÁ THUỴ SĨ – KHẲNG ĐỊNH BẢN LĨNH LÃNH ĐẠO
              </h1>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl font-light">
                Không chỉ là một kỳ nghỉ, FILOLO là nơi bạn tôi luyện bản lĩnh để trở thành nhà lãnh đạo tương lai trong môi trường đa văn hóa tại trái tim Châu Âu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Box: JCL Certificate */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 p-8 lg:p-12 shadow-xl shadow-[#1A531B]/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[12rem] text-[#1A531B]">verified_user</span>
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-[#1A531B] mb-6">Tấm vé quyền năng - Chứng chỉ JCL</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                  Nâng tầm hồ sơ du học và phát triển sự nghiệp quốc tế với bộ chứng chỉ chuyên nghiệp được công nhận toàn cầu:
                </p>
                <div className="space-y-4">
                  {[
                    { icon: 'workspace_premium', title: 'Junior Counselor Leadership (JCL)', desc: 'Chứng nhận kỹ năng điều phối và quản lý nhóm trẻ chuyên nghiệp.' },
                    { icon: 'medical_services', title: 'First Aid Certificate', desc: 'Kỹ năng sơ cấp cứu tiêu chuẩn quốc tế từ các chuyên gia.' },
                    { icon: 'language', title: 'Chứng chỉ ESPAS', desc: 'Hệ thống đánh giá kỹ năng mềm chuẩn Thụy Sĩ.' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#1A531B]/5 border border-[#1A531B]/10">
                      <span className="material-symbols-outlined text-[#1A531B]">{item.icon}</span>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border-2 border-dashed border-[#1A531B]/20">
                  <div className="flex items-center gap-3 mb-4 text-[#F37021]">
                    <span className="material-symbols-outlined font-bold">star</span>
                    <span className="font-bold uppercase tracking-wider text-sm">University Profile Boost</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 italic mb-6">
                    "Những chứng chỉ này không chỉ là tờ giấy, nó là minh chứng cho tinh thần trách nhiệm và khả năng thích nghi trong môi trường quốc tế — điểm cộng tuyệt đối cho các học bổng đại học danh giá."
                  </p>
                  <img 
                    alt="Students holding certificates" 
                    className="rounded-xl shadow-lg w-full h-48 object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA99_sfoGt8s5ucXJqpATBgDuCSjn_OZfySMRfkcsxylXKILp6u9bNqGfdh9aspM152E6KNAPQu4R47QeZg-Vc-kTzMGlmMY9s6CV9H2Cp6x2dnsWXb-ul1ep9wvZYzGqkASDr5vo4zk0bcqp3NrJsVjfHQJe50EfN8ZNRu3UnP97FPfgpXsSmMf8IZU5V5ecSs1RkYyz380AwmyNSQWOLZuvWwL6eF5aUtyPsDZkL5lf5eBGxH00aKIpwojPqQ3G_Y18y0o_Knsos" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Môi trường sống & Hoạt động */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A531B]">Môi trường sống & Hoạt động</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Trải nghiệm phong cách sống thượng lưu và năng động tại những địa danh biểu tượng của Thụy Sĩ.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: '61', title: 'Jura & Lake Geneva', desc: 'Sống giữa thiên nhiên hùng vĩ và mặt hồ xanh ngắt.' },
              { img: '62', title: 'Adventure & Discovery', desc: 'City Trips tới Geneva, Hiking xuyên rừng, chinh phục High Rope Park.' },
              { img: '63', title: 'Disco Night & Bonfire', desc: 'Kết nối bạn bè năm châu qua những đêm nhạc sôi động.' }
            ].map((card, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg">
                <img 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src={`http://googleusercontent.com/profile/picture/${card.img}`} 
                  alt={card.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">{card.title}</h3>
                  <p className="text-slate-300 text-sm mt-2">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
          <div className="bg-[#1A531B] px-8 py-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="material-symbols-outlined">event_note</span>
              Lịch trình JCL điển hình
            </h2>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50">
                <th className="p-6 text-sm font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">Khung giờ</th>
                <th className="p-6 text-sm font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">Nội dung hoạt động</th>
                <th className="p-6 text-sm font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">Kỹ năng</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {[
                { time: 'Sáng', task: 'Professional Workshops: Học lý thuyết về lãnh đạo và tâm lý trẻ em.', skill: 'Leadership' },
                { time: 'Chiều', task: 'Field Practice: Trực tiếp điều phối các trò chơi cho học sinh nhỏ tuổi.', skill: 'Management' },
                { time: 'Tối', task: 'Group Connection: Họp tổng kết và phản hồi từ Mentor.', skill: 'Empathy' }
              ].map((row, i) => (
                <tr key={i}>
                  <td className="p-6 font-bold text-[#1A531B]">{row.time}</td>
                  <td className="p-6 text-slate-700 dark:text-slate-300 font-medium">{row.task}</td>
                  <td className="p-6">
                    <span className="inline-flex items-center rounded-md bg-[#1A531B]/10 px-2 py-1 text-xs font-bold text-[#1A531B] ring-1 ring-inset ring-[#1A531B]/20 uppercase">
                      {row.skill}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1A531B] to-[#144015] rounded-[3rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl shadow-[#1A531B]/30 text-center text-white">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">Bạn đã sẵn sàng để dẫn đầu?</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 font-light">
              Số lượng suất JCL có hạn để đảm bảo chất lượng đào tạo tốt nhất. Đăng ký ngay hôm nay để thay đổi bản thân.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-[#F37021] hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:-translate-y-1">
                Nhận lộ trình JCL chi tiết
              </button>
              <button className="bg-[#25D366] hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1">
                <span className="material-symbols-outlined">chat</span>
                Chat qua Zalo
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Filolo;
