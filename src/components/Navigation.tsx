import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Chương trình', path: '/chuong-trinh' },
    { name: 'Nghề nghiệp', path: '/nghe-nghiep' },
    { name: 'Tuyển sinh', path: '/tuyen-sinh' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div 
            className="flex items-center justify-center relative rounded"
            animate={{ 
              boxShadow: ["0px 0px 0px rgba(8, 112, 184, 0)", "0px 0px 15px rgba(8, 112, 184, 0.3)", "0px 0px 0px rgba(8, 112, 184, 0)"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src="/vku.jpg" 
              alt="VKU Logo" 
              className="h-10 object-contain rounded group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.querySelector('.fallback-vku')?.classList.remove('hidden');
              }}
            />
            <span className="fallback-vku hidden w-10 h-10 rounded bg-primary text-white flex items-center justify-center text-sm font-bold">VKU</span>
          </motion.div>
          <div className="font-display font-bold text-xl text-primary">
            Digital Marketing
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${
                  isActive 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-colors active:scale-95 text-sm">
          Đăng ký ngay
        </button>
      </div>
    </nav>
  );
}
