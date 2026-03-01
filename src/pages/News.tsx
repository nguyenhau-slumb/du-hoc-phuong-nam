import { Link } from 'react-router-dom';

export default function News() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">Tin tức & Sự kiện</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Cập nhật những thông tin mới nhất về du học, học bổng, chính sách visa và các sự kiện giáo dục quốc tế quan trọng.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Featured News" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            </div>
            <div className="relative z-10 p-8 md:p-16 flex flex-col justify-end h-[500px] md:h-[600px]">
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-wider">Tin nổi bật</span>
                <span className="ml-4 text-slate-300 text-sm font-medium">15 Tháng 10, 2023</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
                Chính phủ Úc công bố thay đổi quan trọng về chính sách Visa làm việc sau tốt nghiệp (PSW)
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-3xl line-clamp-2 md:line-clamp-3">
                Những thay đổi mới nhất về thời gian ở lại làm việc sau tốt nghiệp dành cho sinh viên quốc tế tại Úc sẽ ảnh hưởng như thế nào đến kế hoạch du học của bạn? Cùng tìm hiểu chi tiết trong bài viết này.
              </p>
              <div>
                <Link to="/blog-detail" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-slate-900 bg-white hover:bg-slate-50 transition-colors">
                  Đọc tiếp
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-12 border-b border-slate-200 pb-4">
            <button className="text-accent font-semibold border-b-2 border-accent pb-2 px-2">Tất cả</button>
            <button className="text-slate-500 hover:text-slate-900 font-medium pb-2 px-2 transition-colors">Học bổng</button>
            <button className="text-slate-500 hover:text-slate-900 font-medium pb-2 px-2 transition-colors">Góc du học sinh</button>
            <button className="text-slate-500 hover:text-slate-900 font-medium pb-2 px-2 transition-colors">Sự kiện</button>
            <button className="text-slate-500 hover:text-slate-900 font-medium pb-2 px-2 transition-colors">Chính sách Visa</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post 1 */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
              <div className="relative h-60 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="Học bổng" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Học bổng</div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-slate-500 mb-3">
                  <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  10 Tháng 10, 2023
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                  <Link to="/blog-detail">Tổng hợp học bổng du học Canada kỳ Thu 2024 lên đến 100%</Link>
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                  Cơ hội vàng cho các bạn học sinh có thành tích xuất sắc. Danh sách các trường đại học hàng đầu Canada đang mở đơn xét duyệt học bổng cho kỳ nhập học mùa Thu năm tới.
                </p>
                <Link to="/blog-detail" className="inline-flex items-center text-accent font-medium hover:text-orange-600 mt-auto">
                  Đọc tiếp
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>

            {/* Post 2 */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
              <div className="relative h-60 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Sự kiện" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Sự kiện</div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-slate-500 mb-3">
                  <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  05 Tháng 10, 2023
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                  <Link to="/blog-detail">Triển lãm Giáo dục Quốc tế 2023: Gặp gỡ đại diện 50+ trường Đại học</Link>
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                  Sự kiện giáo dục lớn nhất năm do Phương Nam Education tổ chức. Cơ hội phỏng vấn trực tiếp với đại diện trường và nhận ưu đãi phí làm hồ sơ.
                </p>
                <Link to="/blog-detail" className="inline-flex items-center text-accent font-medium hover:text-orange-600 mt-auto">
                  Đọc tiếp
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>

            {/* Post 3 */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
              <div className="relative h-60 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" alt="Góc du học sinh" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Góc du học sinh</div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-slate-500 mb-3">
                  <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  28 Tháng 09, 2023
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                  <Link to="/blog-detail">Kinh nghiệm tìm việc làm thêm tại Mỹ cho sinh viên quốc tế</Link>
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                  Chia sẻ thực tế từ các cựu du học sinh về cách tìm kiếm việc làm on-campus, quy định về số giờ làm việc và những lưu ý quan trọng để không vi phạm luật visa.
                </p>
                <Link to="/blog-detail" className="inline-flex items-center text-accent font-medium hover:text-orange-600 mt-auto">
                  Đọc tiếp
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
            
            {/* Post 4 */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
              <div className="relative h-60 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" alt="Visa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Chính sách Visa</div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-slate-500 mb-3">
                  <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  20 Tháng 09, 2023
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                  <Link to="/blog-detail">Hướng dẫn chi tiết thủ tục chứng minh tài chính du học Anh 2024</Link>
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                  Cập nhật những yêu cầu mới nhất của Đại sứ quán Anh về hồ sơ tài chính. Những lỗi thường gặp khiến hồ sơ bị từ chối và cách khắc phục.
                </p>
                <Link to="/blog-detail" className="inline-flex items-center text-accent font-medium hover:text-orange-600 mt-auto">
                  Đọc tiếp
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>

            {/* Post 5 */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
              <div className="relative h-60 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1049&q=80" alt="Góc du học sinh" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Góc du học sinh</div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-slate-500 mb-3">
                  <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  15 Tháng 09, 2023
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                  <Link to="/blog-detail">Sốc văn hóa khi du học: Làm sao để vượt qua?</Link>
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                  Những khó khăn tâm lý trong thời gian đầu du học là điều không thể tránh khỏi. Bài viết chia sẻ các bí quyết giúp bạn nhanh chóng hòa nhập với môi trường mới.
                </p>
                <Link to="/blog-detail" className="inline-flex items-center text-accent font-medium hover:text-orange-600 mt-auto">
                  Đọc tiếp
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>

            {/* Post 6 */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
              <div className="relative h-60 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="Học bổng" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Học bổng</div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-slate-500 mb-3">
                  <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  02 Tháng 09, 2023
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                  <Link to="/blog-detail">Bí quyết viết Personal Statement chinh phục hội đồng tuyển sinh</Link>
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                  Bài luận cá nhân là yếu tố quyết định giúp hồ sơ của bạn nổi bật giữa hàng ngàn ứng viên. Khám phá cấu trúc và cách kể câu chuyện của riêng bạn.
                </p>
                <Link to="/blog-detail" className="inline-flex items-center text-accent font-medium hover:text-orange-600 mt-auto">
                  Đọc tiếp
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50">
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-current="page" className="z-10 bg-accent/10 border-accent text-accent relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                1
              </a>
              <a href="#" className="bg-white border-slate-300 text-slate-500 hover:bg-slate-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                2
              </a>
              <a href="#" className="bg-white border-slate-300 text-slate-500 hover:bg-slate-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-slate-300 bg-white text-sm font-medium text-slate-700">
                ...
              </span>
              <a href="#" className="bg-white border-slate-300 text-slate-500 hover:bg-slate-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                8
              </a>
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50">
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Đăng ký nhận bản tin</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Không bỏ lỡ bất kỳ thông tin học bổng hay sự kiện giáo dục quan trọng nào. Nhận ngay vào hộp thư của bạn hàng tuần.</p>
          <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-3">
            <input type="email" placeholder="Địa chỉ email của bạn" className="flex-grow px-5 py-3 rounded-full border-0 focus:ring-2 focus:ring-white/50 bg-white/10 text-white placeholder-white/50 outline-none backdrop-blur-sm" required />
            <button type="submit" className="px-8 py-3 rounded-full bg-accent text-white font-bold hover:bg-orange-600 transition-colors shadow-lg">Đăng ký</button>
          </form>
        </div>
      </section>
    </>
  );
}
