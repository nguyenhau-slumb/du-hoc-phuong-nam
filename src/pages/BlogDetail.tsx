import { Link } from 'react-router-dom';

export default function BlogDetail() {
  return (
    <>
      {/* Article Header */}
      <section className="bg-slate-50 pt-24 pb-12 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-4 text-sm">
            <Link to="/news" className="text-accent font-medium hover:underline flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Trở về Tin tức
            </Link>
            <span className="text-slate-300">|</span>
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold uppercase tracking-wider text-xs">Học bổng</span>
            <span className="text-slate-500 flex items-center">
              <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              10 Tháng 10, 2023
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
            Tổng hợp học bổng du học Canada kỳ Thu 2024 lên đến 100%
          </h1>
          
          <div className="flex items-center justify-between border-t border-slate-200 pt-6">
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Author" referrerPolicy="no-referrer" />
              <div className="ml-4">
                <p className="text-sm font-bold text-slate-900">Nguyễn Mai Anh</p>
                <p className="text-xs text-slate-500">Chuyên viên tư vấn du học Canada</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-accent/10 hover:text-accent transition-colors" title="Chia sẻ Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-sky-50 hover:text-sky-500 transition-colors" title="Chia sẻ Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors" title="Sao chép liên kết">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Featured Image */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="Học bổng Canada" className="w-full h-[500px] object-cover" referrerPolicy="no-referrer" />
            <div className="bg-slate-100 p-3 text-center text-sm text-slate-500 italic">
              Đại học Toronto - Một trong những ngôi trường danh giá nhất Canada
            </div>
          </div>

          {/* Content Body */}
          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-a:text-accent hover:prose-a:text-orange-600 prose-img:rounded-2xl">
            <p className="lead text-xl text-slate-600 font-medium leading-relaxed mb-8">
              Cơ hội vàng cho các bạn học sinh có thành tích xuất sắc. Danh sách các trường đại học hàng đầu Canada đang mở đơn xét duyệt học bổng cho kỳ nhập học mùa Thu năm tới. Hãy cùng Phương Nam Education điểm qua những học bổng giá trị nhất.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">1. Tại sao nên chọn Canada làm điểm đến du học?</h2>
            <p className="mb-6 text-slate-700 leading-relaxed">
              Canada luôn nằm trong top các quốc gia có nền giáo dục hàng đầu thế giới. Không chỉ nổi tiếng với chất lượng đào tạo, xứ sở lá phong còn thu hút du học sinh bởi môi trường sống an toàn, đa văn hóa và đặc biệt là chính sách định cư vô cùng cởi mở sau khi tốt nghiệp.
            </p>
            <p className="mb-6 text-slate-700 leading-relaxed">
              Tuy nhiên, chi phí du học luôn là bài toán khó đối với nhiều gia đình. Việc săn được một suất học bổng giá trị không chỉ giúp giảm bớt gánh nặng tài chính mà còn là minh chứng cho năng lực xuất sắc của bản thân.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">2. Danh sách học bổng nổi bật kỳ Thu 2024</h2>
            
            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-2xl mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3 mt-0">University of Toronto (UofT)</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-0">
                <li><strong>Tên học bổng:</strong> Lester B. Pearson International Scholarship</li>
                <li><strong>Giá trị:</strong> 100% học phí, chi phí sách vở, sinh hoạt phí và bảo hiểm trong 4 năm.</li>
                <li><strong>Điều kiện:</strong> Học sinh quốc tế có thành tích học tập xuất sắc, có tố chất lãnh đạo và được trường THPT đề cử.</li>
                <li><strong>Hạn chót đề cử:</strong> 30/11/2023</li>
              </ul>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-2xl mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3 mt-0">University of British Columbia (UBC)</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-0">
                <li><strong>Tên học bổng:</strong> International Major Entrance Scholarship (IMES)</li>
                <li><strong>Giá trị:</strong> Lên đến 40,000 CAD/năm (có thể gia hạn trong 3 năm tiếp theo).</li>
                <li><strong>Điều kiện:</strong> Dành cho tân sinh viên quốc tế có thành tích học tập xuất sắc và tham gia tích cực các hoạt động ngoại khóa.</li>
                <li><strong>Hạn chót nộp hồ sơ:</strong> 15/01/2024</li>
              </ul>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-2xl mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3 mt-0">York University</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-0">
                <li><strong>Tên học bổng:</strong> Tentanda Via Award</li>
                <li><strong>Giá trị:</strong> 30,000 CAD/năm (tổng cộng 120,000 CAD cho 4 năm).</li>
                <li><strong>Điều kiện:</strong> Học sinh có thành tích học tập tốt (GPA {'>'} 8.5) và chứng minh được khả năng vượt qua nghịch cảnh hoặc có đóng góp tích cực cho cộng đồng.</li>
                <li><strong>Hạn chót nộp hồ sơ:</strong> 15/02/2024</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">3. Bí quyết săn học bổng thành công</h2>
            <p className="mb-6 text-slate-700 leading-relaxed">
              Để tăng cơ hội nhận được những suất học bổng danh giá này, bạn cần chuẩn bị hồ sơ thật kỹ lưỡng:
            </p>
            <ul className="list-disc pl-5 space-y-3 text-slate-700 mb-8">
              <li><strong>Duy trì điểm số (GPA) cao:</strong> Đây là điều kiện tiên quyết. Hầu hết các học bổng lớn đều yêu cầu GPA từ 9.0 trở lên.</li>
              <li><strong>Đầu tư cho bài luận (Personal Statement):</strong> Bài luận là nơi bạn thể hiện cá tính, khát vọng và lý do tại sao bạn xứng đáng nhận học bổng. Hãy kể một câu chuyện chân thực và truyền cảm hứng.</li>
              <li><strong>Tham gia hoạt động ngoại khóa:</strong> Các trường đại học Bắc Mỹ rất coi trọng kỹ năng mềm và khả năng lãnh đạo. Đừng chỉ tập trung vào sách vở.</li>
              <li><strong>Chuẩn bị sớm:</strong> Quá trình săn học bổng đòi hỏi sự kiên nhẫn. Hãy bắt đầu tìm hiểu và chuẩn bị hồ sơ ít nhất 1 năm trước kỳ nhập học.</li>
            </ul>

            <div className="bg-slate-100 p-8 rounded-2xl text-center mt-12 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-0">Bạn cần hỗ trợ làm hồ sơ học bổng?</h3>
              <p className="text-slate-600 mb-6">Đội ngũ chuyên gia của Phương Nam Education đã giúp hàng trăm học sinh giành được các suất học bổng giá trị tại Canada. Hãy để chúng tôi đồng hành cùng bạn!</p>
              <Link to="/contact" className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-white bg-accent hover:bg-orange-600 transition-colors no-underline">
                Đăng ký tư vấn học bổng miễn phí
              </Link>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap gap-2">
            <span className="text-sm font-bold text-slate-900 mr-2 py-1">Tags:</span>
            <a href="#" className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full hover:bg-slate-200 transition-colors">Du học Canada</a>
            <a href="#" className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full hover:bg-slate-200 transition-colors">Học bổng 100%</a>
            <a href="#" className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full hover:bg-slate-200 transition-colors">Kỳ Thu 2024</a>
            <a href="#" className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full hover:bg-slate-200 transition-colors">University of Toronto</a>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Bài viết liên quan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Post 1 */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="Học bổng" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Học bổng</div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                  <a href="#">Bí quyết viết Personal Statement chinh phục hội đồng tuyển sinh</a>
                </h3>
                <div className="mt-auto flex items-center text-sm text-slate-500">
                  <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  02 Tháng 09, 2023
                </div>
              </div>
            </article>

            {/* Post 2 */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" alt="Visa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Chính sách Visa</div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                  <a href="#">Hướng dẫn chi tiết thủ tục chứng minh tài chính du học Anh 2024</a>
                </h3>
                <div className="mt-auto flex items-center text-sm text-slate-500">
                  <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  20 Tháng 09, 2023
                </div>
              </div>
            </article>

            {/* Post 3 */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1049&q=80" alt="Góc du học sinh" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Góc du học sinh</div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                  <a href="#">Sốc văn hóa khi du học: Làm sao để vượt qua?</a>
                </h3>
                <div className="mt-auto flex items-center text-sm text-slate-500">
                  <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  15 Tháng 09, 2023
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
