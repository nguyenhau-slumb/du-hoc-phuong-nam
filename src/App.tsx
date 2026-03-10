import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Partners from './pages/Partners';
import News from './pages/News';
import Contact from './pages/Contact';
import BlogDetail from './pages/BlogDetail';
import Korea2026 from './pages/Korea2026';
import KoreaAdmissions from './pages/KoreaAdmissions';
import Chantemerle from './pages/Chantemerle'; // <--- Dòng mới thêm

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="partners" element={<Partners />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog-detail" element={<BlogDetail />} />
          <Route path="han-quoc-2026" element={<Korea2026 />} />
          <Route path="tuyen-sinh-han-quoc" element={<KoreaAdmissions />} />
          {/* Đường dẫn mới cho trại hè Chantemerle bên dưới */}
          <Route path="trai-he-chantemerle" element={<Chantemerle />} />
        <Route path="trai-he-filolo" element={<Filolo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
