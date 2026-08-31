import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import BlanketCollectionLandingPage from './components/BlanketCollectionLandingPage';
import BlogIndex from './pages/BlogIndex';
import BlogArticle from './pages/BlogArticle';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<BlanketCollectionLandingPage />} />
      <Route
        path="/blog"
        element={
          <Layout>
            <BlogIndex />
          </Layout>
        }
      />
      <Route
        path="/blog/crochet-blanket-stitches-guide"
        element={
          <Layout>
            <BlogArticle />
          </Layout>
        }
      />
      </Routes>
    </>
  );
}
