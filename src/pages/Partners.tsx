import { Link } from 'react-router-dom';

export default function Partners() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">Đối tác chiến lược</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Mạng lưới hơn 500 trường đại học, cao đẳng và tổ chức giáo dục uy tín trên toàn cầu, mang đến cho bạn vô vàn lựa chọn học tập chất lượng.
          </p>
        </div>
      </section>

      {/* Global Network Map (Conceptual) */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">Mạng lưới toàn cầu</h2>
            <h3 className="text-3xl font-bold text-primary mb-6">Kết nối giáo dục không biên giới</h3>
            <p className="text-lg text-slate-600">Chúng tôi tự hào là đại diện tuyển sinh chính thức của các trường đại học hàng đầu tại các quốc gia phát triển.</p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center overflow-hidden">
            {/* Abstract Map Representation */}
            <svg className="absolute inset-0 w-full h-full text-slate-200" fill="currentColor" viewBox="0 0 1000 600">
              <path d="M150 200 Q 200 150 250 200 T 350 200 T 450 150 T 550 250 T 650 200 T 750 250 T 850 200" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" className="text-accent/30" />
              <path d="M200 300 Q 300 250 400 350 T 600 300 T 800 400" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" className="text-primary/30" />
              
              {/* Nodes */}
              <circle cx="250" cy="200" r="8" className="text-accent" />
              <circle cx="450" cy="150" r="12" className="text-primary" />
              <circle cx="650" cy="200" r="6" className="text-accent" />
              <circle cx="850" cy="200" r="10" className="text-accent" />
              <circle cx="400" cy="350" r="14" className="text-primary" />
              <circle cx="600" cy="300" r="8" className="text-primary" />
            </svg>

            {/* Region Labels */}
            <div className="absolute top-[20%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="bg-white px-4 py-2 rounded-full shadow-md border border-slate-100 text-sm font-bold text-slate-800">Bắc Mỹ</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">200+ Đối tác</div>
            </div>
            <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="bg-white px-4 py-2 rounded-full shadow-md border border-slate-100 text-sm font-bold text-slate-800">Châu Âu</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">150+ Đối tác</div>
            </div>
            <div className="absolute top-[60%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="bg-white px-4 py-2 rounded-full shadow-md border border-slate-100 text-sm font-bold text-slate-800">Châu Úc</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">100+ Đối tác</div>
            </div>
            <div className="absolute top-[50%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="bg-white px-4 py-2 rounded-full shadow-md border border-slate-100 text-sm font-bold text-slate-800">Châu Á</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">50+ Đối tác</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Grid */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter/Tabs (Visual only for template) */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="px-6 py-2 rounded-full bg-accent text-white font-medium shadow-md">Tất cả</button>
            <button className="px-6 py-2 rounded-full bg-white text-slate-600 font-medium border border-slate-200 hover:bg-slate-50 transition-colors">Mỹ</button>
            <button className="px-6 py-2 rounded-full bg-white text-slate-600 font-medium border border-slate-200 hover:bg-slate-50 transition-colors">Canada</button>
            <button className="px-6 py-2 rounded-full bg-white text-slate-600 font-medium border border-slate-200 hover:bg-slate-50 transition-colors">Úc</button>
            <button className="px-6 py-2 rounded-full bg-white text-slate-600 font-medium border border-slate-200 hover:bg-slate-50 transition-colors">Anh</button>
            <button className="px-6 py-2 rounded-full bg-white text-slate-600 font-medium border border-slate-200 hover:bg-slate-50 transition-colors">Châu Á</button>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Partner 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group">
              <div className="w-24 h-24 bg-slate-50 rounded-full mb-4 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <span className="text-2xl font-bold text-slate-400 group-hover:text-accent">MIT</span>
              </div>
              <h4 className="text-center font-bold text-primary">Massachusetts Institute of Technology</h4>
              <p className="text-sm text-slate-500 mt-2">Hoa Kỳ</p>
            </div>

            {/* Partner 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group">
              <div className="w-24 h-24 bg-slate-50 rounded-full mb-4 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                <span className="text-2xl font-bold text-slate-400 group-hover:text-indigo-600">UofT</span>
              </div>
              <h4 className="text-center font-bold text-slate-900">University of Toronto</h4>
              <p className="text-sm text-slate-500 mt-2">Canada</p>
            </div>

            {/* Partner 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group">
              <div className="w-24 h-24 bg-slate-50 rounded-full mb-4 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                <span className="text-2xl font-bold text-slate-400 group-hover:text-emerald-600">USYD</span>
              </div>
              <h4 className="text-center font-bold text-slate-900">The University of Sydney</h4>
              <p className="text-sm text-slate-500 mt-2">Úc</p>
            </div>

            {/* Partner 4 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group">
              <div className="w-24 h-24 bg-slate-50 rounded-full mb-4 flex items-center justify-center group-hover:bg-red-50 transition-colors">
                <span className="text-2xl font-bold text-slate-400 group-hover:text-red-600">UCL</span>
              </div>
              <h4 className="text-center font-bold text-slate-900">University College London</h4>
              <p className="text-sm text-slate-500 mt-2">Vương quốc Anh</p>
            </div>

            {/* Partner 5 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group">
              <div className="w-24 h-24 bg-slate-50 rounded-full mb-4 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                <span className="text-2xl font-bold text-slate-400 group-hover:text-orange-600">NUS</span>
              </div>
              <h4 className="text-center font-bold text-slate-900">National University of Singapore</h4>
              <p className="text-sm text-slate-500 mt-2">Singapore</p>
            </div>

            {/* Partner 6 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group">
              <div className="w-24 h-24 bg-slate-50 rounded-full mb-4 flex items-center justify-center group-hover:bg-purple-50 transition-colors">
                <span className="text-2xl font-bold text-slate-400 group-hover:text-purple-600">UBC</span>
              </div>
              <h4 className="text-center font-bold text-slate-900">University of British Columbia</h4>
              <p className="text-sm text-slate-500 mt-2">Canada</p>
            </div>

            {/* Partner 7 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group">
              <div className="w-24 h-24 bg-slate-50 rounded-full mb-4 flex items-center justify-center group-hover:bg-teal-50 transition-colors">
                <span className="text-2xl font-bold text-slate-400 group-hover:text-teal-600">UNSW</span>
              </div>
              <h4 className="text-center font-bold text-slate-900">UNSW Sydney</h4>
              <p className="text-sm text-slate-500 mt-2">Úc</p>
            </div>

            {/* Partner 8 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group">
              <div className="w-24 h-24 bg-slate-50 rounded-full mb-4 flex items-center justify-center group-hover:bg-sky-50 transition-colors">
                <span className="text-2xl font-bold text-slate-400 group-hover:text-sky-600">NYU</span>
              </div>
              <h4 className="text-center font-bold text-slate-900">New York University</h4>
              <p className="text-sm text-slate-500 mt-2">Hoa Kỳ</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-colors">
              Xem thêm danh sách
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Bạn muốn tìm hiểu trường nào?</h2>
          <p className="text-xl text-white/80 mb-10">Liên hệ với chúng tôi để nhận thông tin chi tiết về điều kiện đầu vào, học phí và học bổng của trường bạn quan tâm.</p>
          <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-accent hover:bg-orange-600 shadow-xl transition-all duration-300">
            Nhận tư vấn chọn trường
          </Link>
        </div>
      </section>
    </>
  );
}
