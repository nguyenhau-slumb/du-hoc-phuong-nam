import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src="https://picsum.photos/seed/university/1920/1080" alt="Students on campus" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
              Hơn 10 năm kinh nghiệm tư vấn du học
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
              Kiến tạo tương lai <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">vươn tầm thế giới</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
              Phương Nam Education tự hào là người bạn đồng hành tin cậy, giúp hàng ngàn học sinh Việt Nam hiện thực hóa giấc mơ du học tại các quốc gia hàng đầu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-white bg-accent hover:bg-orange-600 shadow-lg hover:shadow-accent/30 transition-all duration-300">
                Nhận tư vấn miễn phí
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link to="/services" className="inline-flex justify-center items-center px-8 py-4 border border-slate-300/30 text-base font-semibold rounded-full text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                Tìm hiểu dịch vụ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-100 relative -mt-16 z-20 max-w-6xl mx-auto rounded-2xl shadow-xl mx-4 sm:mx-6 lg:mx-auto">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <div className="px-4">
              <div className="text-4xl font-extrabold text-primary mb-2">10+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Năm kinh nghiệm</div>
            </div>
            <div className="px-4">
              <div className="text-4xl font-extrabold text-primary mb-2">5000+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Học viên thành công</div>
            </div>
            <div className="px-4">
              <div className="text-4xl font-extrabold text-primary mb-2">500+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Trường đối tác</div>
            </div>
            <div className="px-4">
              <div className="text-4xl font-extrabold text-primary mb-2">98%</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Tỷ lệ đậu Visa</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">Dịch vụ của chúng tôi</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Giải pháp toàn diện cho hành trình du học</h3>
            <p className="text-lg text-slate-600">Chúng tôi cung cấp các dịch vụ chuyên nghiệp, hỗ trợ bạn từ những bước đầu tiên cho đến khi ổn định cuộc sống tại nước ngoài.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <svg className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">Tư vấn chọn trường & ngành</h4>
              <p className="text-slate-600 mb-6 line-clamp-3">Đánh giá năng lực, sở thích và tài chính để đưa ra lộ trình học tập phù hợp nhất với từng học sinh.</p>
              <Link to="/services" className="text-accent font-medium hover:text-orange-600 inline-flex items-center">
                Tìm hiểu thêm
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <svg className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">Hỗ trợ hồ sơ Visa</h4>
              <p className="text-slate-600 mb-6 line-clamp-3">Hướng dẫn chuẩn bị hồ sơ tài chính, luyện phỏng vấn visa với tỷ lệ đậu lên đến 98%.</p>
              <Link to="/services" className="text-accent font-medium hover:text-orange-600 inline-flex items-center">
                Tìm hiểu thêm
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <svg className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">Săn học bổng</h4>
              <p className="text-slate-600 mb-6 line-clamp-3">Cập nhật thông tin học bổng mới nhất và hỗ trợ viết bài luận, chuẩn bị hồ sơ xin học bổng hiệu quả.</p>
              <Link to="/services" className="text-accent font-medium hover:text-orange-600 inline-flex items-center">
                Tìm hiểu thêm
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-accent/10 rounded-3xl transform -rotate-3 scale-105 -z-10"></div>
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" alt="Team working" className="rounded-3xl shadow-2xl object-cover h-[500px] w-full" referrerPolicy="no-referrer" />
              
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex -space-x-3">
                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Student" referrerPolicy="no-referrer" />
                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Student" referrerPolicy="no-referrer" />
                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Student" referrerPolicy="no-referrer" />
                  </div>
                  <div className="text-sm font-bold text-slate-900">5000+ Học viên</div>
                </div>
                <p className="text-xs text-slate-500">Đã tin tưởng và thành công cùng Phương Nam Education.</p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">Tại sao chọn chúng tôi</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Khác biệt tạo nên sự thành công</h3>
              <p className="text-lg text-slate-600 mb-8">Chúng tôi không chỉ là trung tâm tư vấn, chúng tôi là người đồng hành cùng bạn trên mỗi bước đường chinh phục tri thức.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-primary">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">Đội ngũ chuyên gia giàu kinh nghiệm</h4>
                    <p className="text-slate-600">Các tư vấn viên đều từng là du học sinh, am hiểu sâu sắc về hệ thống giáo dục và văn hóa các nước.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-primary">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">Minh bạch & Tận tâm</h4>
                    <p className="text-slate-600">Cam kết cung cấp thông tin chính xác, minh bạch về chi phí và lộ trình. Luôn đặt lợi ích của học sinh lên hàng đầu.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-primary">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">Mạng lưới đối tác rộng khắp</h4>
                    <p className="text-slate-600">Hợp tác trực tiếp với hơn 500 trường đại học, cao đẳng uy tín trên toàn thế giới.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">Câu chuyện thành công</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Học viên nói gì về chúng tôi</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 relative">
              <svg className="absolute top-6 right-6 w-10 h-10 text-slate-700" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <div className="flex items-center mb-6">
                <img className="w-14 h-14 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-lg">Nguyễn Mai Anh</h4>
                  <p className="text-accent text-sm">Du học sinh Úc - Monash University</p>
                </div>
              </div>
              <p className="text-slate-300 italic leading-relaxed">"Nhờ sự hỗ trợ nhiệt tình của các anh chị tại Phương Nam, mình đã xin được học bổng 50% và hoàn thành hồ sơ visa vô cùng nhanh chóng. Thực sự biết ơn trung tâm rất nhiều."</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 relative">
              <svg className="absolute top-6 right-6 w-10 h-10 text-slate-700" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <div className="flex items-center mb-6">
                <img className="w-14 h-14 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-lg">Trần Hoàng Minh</h4>
                  <p className="text-accent text-sm">Du học sinh Canada - Seneca College</p>
                </div>
              </div>
              <p className="text-slate-300 italic leading-relaxed">"Lúc đầu mình rất mông lung không biết chọn ngành nào. Sau khi được tư vấn định hướng, mình đã tìm được con đường phù hợp. Hiện tại mình rất hài lòng với cuộc sống tại Canada."</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 relative">
              <svg className="absolute top-6 right-6 w-10 h-10 text-slate-700" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <div className="flex items-center mb-6">
                <img className="w-14 h-14 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-lg">Lê Phương Thảo</h4>
                  <p className="text-accent text-sm">Du học sinh Mỹ - UCLA</p>
                </div>
              </div>
              <p className="text-slate-300 italic leading-relaxed">"Quá trình làm hồ sơ đi Mỹ khá phức tạp nhưng các chuyên viên đã hướng dẫn mình từng bước một rất chi tiết. Luyện phỏng vấn visa cũng rất sát với thực tế."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full text-white" xmlns="http://www.w3.org/2000/svg" id="patternId" width="100%" height="100%">
            <defs>
              <pattern id="a" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="scale(2) rotate(0)">
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path d="M3.25 10h13.5M10 3.25v13.5" strokeLinecap="square" strokeWidth="0.5" stroke="currentColor" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" transform="translate(0,0)" fill="url(#a)" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sẵn sàng bắt đầu hành trình của bạn?</h2>
          <p className="text-xl text-white/80 mb-10">Đừng để ước mơ du học chỉ là mơ ước. Hãy để chúng tôi giúp bạn biến nó thành hiện thực ngay hôm nay.</p>
          <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-accent hover:bg-orange-600 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            Đăng ký tư vấn ngay
          </Link>
        </div>
      </section>
    </>
  );
}
