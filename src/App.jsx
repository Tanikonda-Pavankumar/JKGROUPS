import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Catalogue from './pages/Catalogue';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import WhyJKGroup from './pages/WhyJKGroup';
import FAQs from './pages/FAQs';
import './App.css';

function App() {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Show loader only on first visit per session
    const hasVisited = sessionStorage.getItem('jk_visited');
    if (!hasVisited) {
      setShowLoader(true);
      sessionStorage.setItem('jk_visited', 'true');
    }
  }, []);

  return (
    <>
      {showLoader && (
        <LoadingScreen onComplete={() => setShowLoader(false)} />
      )}
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 80px)' }}>
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-jk-group" element={<WhyJKGroup />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default App;
