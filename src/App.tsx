import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogIndex from './pages/BlogIndex';
import BlogArticle from './pages/BlogArticle';
import BlogArticleSizes from './pages/BlogArticleSizes';
import BlogArticlePatterns from './pages/BlogArticlePatterns';
import StorePage from './pages/StorePage';
import BlanketCollectionLandingPage from './components/BlanketCollectionLandingPage';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF7F1] text-[#1F1F1F] font-sans antialiased selection:bg-[#2F4A3A]/15 selection:text-[#2F4A3A]">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/crochet-blanket-stitches-guide" element={<BlogArticle />} />
        <Route path="/blog/crochet-blanket-sizes-yarn-yardage-chart" element={<BlogArticleSizes />} />
        <Route path="/blog/how-to-read-crochet-blanket-pattern" element={<BlogArticlePatterns />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/store/:slug" element={<BlanketCollectionLandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
