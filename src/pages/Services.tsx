import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="University campus" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">Dịch vụ của chúng tôi</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-light">
            Giải pháp toàn diện và chuyên nghiệp cho hành trình du học của bạn, từ những bước chuẩn bị đầu tiên cho đến khi bạn hoàn toàn hòa nhập tại môi trường mới.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Service 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" alt="Tư vấn chọn trường" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary shadow-sm">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Tư vấn chọn trường & ngành học</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Mỗi học sinh là một cá thể riêng biệt với năng lực, sở thích và điều kiện tài chính khác nhau. Chúng tôi cung cấp dịch vụ tư vấn cá nhân hóa 1-1 để giúp bạn tìm ra lộ trình tối ưu nhất.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Đánh giá năng lực học tập và sở thích cá nhân</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Phân tích xu hướng nghề nghiệp và cơ hội việc làm</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Lựa chọn quốc gia, trường và ngành học phù hợp với tài chính</span>
                </li>
              </ul>
              <Link to="/contact" className="inline-flex items-center text-accent font-semibold hover:text-orange-600 transition-colors">
                Đăng ký tư vấn ngay
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-24">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" alt="Hỗ trợ hồ sơ Visa" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary shadow-sm">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Hỗ trợ hồ sơ xin Visa</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Xin visa là một trong những bước quan trọng và khó khăn nhất. Với kinh nghiệm xử lý hàng ngàn bộ hồ sơ, chúng tôi tự hào duy trì tỷ lệ đậu visa lên đến 98%.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Hướng dẫn chuẩn bị hồ sơ tài chính minh bạch, logic</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Hỗ trợ dịch thuật và công chứng giấy tờ</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Luyện phỏng vấn visa 1-1 với chuyên gia</span>
                </li>
              </ul>
              <Link to="/contact" className="inline-flex items-center text-accent font-semibold hover:text-orange-600 transition-colors">
                Đăng ký tư vấn ngay
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="Săn học bổng" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary shadow-sm">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Chiến lược săn học bổng</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Tối ưu hóa hồ sơ của bạn để giành được những suất học bổng giá trị từ các trường đại học hàng đầu thế giới, giúp giảm bớt gánh nặng tài chính.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Cập nhật danh sách học bổng mới nhất (10% - 100%)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Hướng dẫn viết bài luận (Personal Statement) ấn tượng</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Hỗ trợ xin thư giới thiệu từ giáo viên/người quản lý</span>
                </li>
              </ul>
              <Link to="/contact" className="inline-flex items-center text-accent font-semibold hover:text-orange-600 transition-colors">
                Đăng ký tư vấn ngay
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Các chương trình du học</h2>
            <p className="text-lg text-slate-600">Lộ trình học tập đa dạng, phù hợp với mọi độ tuổi và định hướng nghề nghiệp.</p>
          </div>

          <div className="space-y-16">
            {/* K-12 */}
            <div id="k12" className="scroll-mt-24 flex flex-col md:flex-row gap-8 items-center bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="md:w-1/3">
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Giáo dục phổ thông" className="w-full h-64 object-cover rounded-2xl shadow-md" referrerPolicy="no-referrer" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-primary mb-4">Giáo dục phổ thông (K-12)</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">Chương trình du học dành cho học sinh từ cấp tiểu học đến trung học phổ thông. Giúp các em tiếp cận nền giáo dục tiên tiến từ sớm, phát triển toàn diện kỹ năng mềm và khả năng ngoại ngữ, tạo bước đệm vững chắc cho cánh cửa đại học.</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="flex items-center text-slate-700"><svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Giao lưu văn hóa quốc tế</li>
                  <li className="flex items-center text-slate-700"><svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Trung học công lập & tư thục</li>
                  <li className="flex items-center text-slate-700"><svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Chương trình IB, AP, A-Level</li>
                </ul>
              </div>
            </div>

            {/* Higher Ed */}
            <div id="higher-ed" className="scroll-mt-24 flex flex-col md:flex-row-reverse gap-8 items-center bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="md:w-1/3">
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Giáo dục bậc cao" className="w-full h-64 object-cover rounded-2xl shadow-md" referrerPolicy="no-referrer" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-primary mb-4">Giáo dục bậc cao</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">Chương trình Cử nhân, Thạc sĩ và Tiến sĩ tại các trường Đại học hàng đầu thế giới. Mở ra cơ hội học tập chuyên sâu, nghiên cứu khoa học và xây dựng mạng lưới quan hệ quốc tế, chuẩn bị hành trang vững chắc cho sự nghiệp tương lai.</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="flex items-center text-slate-700"><svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Cao đẳng cộng đồng (2 năm)</li>
                  <li className="flex items-center text-slate-700"><svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Đại học (Cử nhân 3-4 năm)</li>
                  <li className="flex items-center text-slate-700"><svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Sau Đại học (Thạc sĩ, Tiến sĩ)</li>
                </ul>
              </div>
            </div>

            {/* Vocational */}
            <div id="vocational" className="scroll-mt-24 flex flex-col md:flex-row gap-8 items-center bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="md:w-1/3">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Du học nghề" className="w-full h-64 object-cover rounded-2xl shadow-md" referrerPolicy="no-referrer" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-primary mb-4">Du học nghề</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">Lộ trình học tập chú trọng thực hành, thời gian đào tạo ngắn và cơ hội việc làm cao sau khi tốt nghiệp. Phù hợp với những bạn muốn nhanh chóng tham gia thị trường lao động với kỹ năng tay nghề vững chắc.</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="flex items-center text-slate-700"><svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Chương trình TAFE (Úc)</li>
                  <li className="flex items-center text-slate-700"><svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Du học nghề kép (Đức)</li>
                  <li className="flex items-center text-slate-700"><svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Chứng chỉ nghề & Diploma</li>
                </ul>
              </div>
            </div>

            {/* Short-term */}
            <div id="short-term" className="scroll-mt-24 flex flex-col md:flex-row-reverse gap-8 items-center bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="md:w-1/3">
                <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Chương trình ngắn hạn" className="w-full h-64 object-cover rounded-2xl shadow-md" referrerPolicy="no-referrer" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-primary mb-4">Chương trình ngắn hạn</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">Các khóa học tiếng Anh, trại hè quốc tế, hoặc chương trình trao đổi văn hóa kéo dài từ vài tuần đến 1 năm. Trải nghiệm môi trường quốc tế, nâng cao ngoại ngữ và làm đẹp hồ sơ du học dài hạn sau này.</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="flex items-center text-slate-700"><svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Trại hè/Trại đông quốc tế</li>
                  <li className="flex items-center text-slate-700"><svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Khóa học tiếng Anh ngắn hạn</li>
                  <li className="flex items-center text-slate-700"><svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Chương trình trao đổi sinh viên</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Các dịch vụ hỗ trợ khác</h2>
            <p className="text-lg text-slate-600">Chúng tôi đồng hành cùng bạn trên mọi phương diện của hành trình du học.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-slate-100 rounded-2xl hover:shadow-lg transition-shadow duration-300 bg-slate-50">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 text-primary shadow-sm">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Tìm kiếm chỗ ở</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Hỗ trợ tìm kiếm ký túc xá, homestay hoặc căn hộ thuê ngoài an toàn, thuận tiện và phù hợp với ngân sách.</p>
            </div>

            <div className="p-6 border border-slate-100 rounded-2xl hover:shadow-lg transition-shadow duration-300 bg-slate-50">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 text-primary shadow-sm">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Đặt vé máy bay</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Hỗ trợ đặt vé máy bay giá tốt, tư vấn hành lý và các thủ tục nhập cảnh tại sân bay quốc tế.</p>
            </div>

            <div className="p-6 border border-slate-100 rounded-2xl hover:shadow-lg transition-shadow duration-300 bg-slate-50">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 text-primary shadow-sm">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Kết nối cộng đồng</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Giới thiệu và kết nối với cộng đồng du học sinh Việt Nam tại trường và khu vực sinh sống.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Bạn cần tư vấn lộ trình riêng?</h2>
          <p className="text-xl text-white/80 mb-10">Hãy để lại thông tin, chuyên viên của chúng tôi sẽ liên hệ lại trong vòng 24h.</p>
          <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-accent hover:bg-orange-600 shadow-xl transition-all duration-300">
            Liên hệ chuyên viên
          </Link>
        </div>
      </section>
    </>
  );
}
