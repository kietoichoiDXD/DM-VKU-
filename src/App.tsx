import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Careers from './pages/Careers';
import Admissions from './pages/Admissions';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-primary/20 selection:text-primary flex flex-col">
        <Navigation />
        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chuong-trinh" element={<Programs />} />
            <Route path="/nghe-nghiep" element={<Careers />} />
            <Route path="/tuyen-sinh" element={<Admissions />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
