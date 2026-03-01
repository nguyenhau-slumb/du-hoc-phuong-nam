export default function Contact() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">Liên hệ với chúng tôi</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Đội ngũ chuyên viên tư vấn của Phương Nam Education luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc về hành trình du học của bạn.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Thông tin liên hệ</h2>
              <p className="text-lg text-slate-600 mb-12">
                Hãy ghé thăm văn phòng của chúng tôi để được tư vấn trực tiếp, hoặc liên hệ qua điện thoại, email. Chúng tôi sẽ phản hồi bạn trong thời gian sớm nhất.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mt-1">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Trụ sở chính</h3>
                    <p className="text-slate-600 leading-relaxed">
                      123 Đường Nguyễn Văn Linh, Phường Tân Phú<br />
                      Quận 7, TP. Hồ Chí Minh, Việt Nam
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mt-1">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Điện thoại</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Hotline: <a href="tel:+84123456789" className="text-accent font-medium hover:underline">+84 123 456 789</a><br />
                      CSKH: <a href="tel:+84987654321" className="text-accent font-medium hover:underline">+84 987 654 321</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mt-1">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Tư vấn: <a href="mailto:tuvan@phuongnam.edu.vn" className="text-accent font-medium hover:underline">tuvan@phuongnam.edu.vn</a><br />
                      Hỗ trợ: <a href="mailto:support@phuongnam.edu.vn" className="text-accent font-medium hover:underline">support@phuongnam.edu.vn</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mt-1">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Giờ làm việc</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Thứ 2 - Thứ 6: 08:00 - 17:30<br />
                      Thứ 7: 08:00 - 12:00<br />
                      Chủ nhật & Ngày lễ: Nghỉ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-100 relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Gửi tin nhắn cho chúng tôi</h3>
              <form action="#" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-slate-700 mb-2">Họ và tên đệm</label>
                    <input type="text" name="first-name" id="first-name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors bg-slate-50 focus:bg-white" placeholder="Nguyễn Văn" required />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-slate-700 mb-2">Tên</label>
                    <input type="text" name="last-name" id="last-name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors bg-slate-50 focus:bg-white" placeholder="A" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input type="email" name="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors bg-slate-50 focus:bg-white" placeholder="nguyenvana@example.com" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Số điện thoại</label>
                    <input type="tel" name="phone" id="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors bg-slate-50 focus:bg-white" placeholder="0987 654 321" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-2">Quốc gia quan tâm</label>
                  <select id="country" name="country" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors bg-slate-50 focus:bg-white text-slate-700">
                    <option value="">Chọn quốc gia</option>
                    <option value="us">Hoa Kỳ</option>
                    <option value="ca">Canada</option>
                    <option value="au">Úc</option>
                    <option value="uk">Vương quốc Anh</option>
                    <option value="sg">Singapore</option>
                    <option value="other">Khác</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Nội dung cần tư vấn</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors bg-slate-50 focus:bg-white resize-none" placeholder="Hãy cho chúng tôi biết bạn đang quan tâm đến chương trình học nào, hoặc những thắc mắc của bạn..." required></textarea>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="privacy" name="privacy" type="checkbox" className="focus:ring-accent h-4 w-4 text-accent border-slate-300 rounded" required />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy" className="font-medium text-slate-700">Tôi đồng ý với <a href="#" className="text-accent hover:underline">Chính sách bảo mật</a> của Phương Nam Education.</label>
                  </div>
                </div>

                <div>
                  <button type="submit" className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-md text-lg font-bold text-white bg-accent hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors">
                    Gửi yêu cầu tư vấn
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-slate-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.023525255475!2d106.70014731533418!3d10.73266889235123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f70b2861c8b%3A0x6b4c10c8c1e2b8b0!2zMTIzIMSQxrDhu51uZyBOZ3V54buFbiBWxINuIExpbmgsIFTDom4gUGjDuiwgUXXhuq1uIDcsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1625555555555!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Bản đồ Google Maps - Phương Nam Education"
        ></iframe>
      </section>
    </>
  );
}
