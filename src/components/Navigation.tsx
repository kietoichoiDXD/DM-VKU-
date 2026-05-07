import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Chương trình', path: '/chuong-trinh' },
    { name: 'Nghề nghiệp', path: '/nghe-nghiep' },
    { name: 'Tuyển sinh', path: '/tuyen-sinh' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <motion.div 
              className="flex items-center justify-center relative"
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
                className="h-8 sm:h-10 object-contain rounded group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <div className="h-6 sm:h-8 w-[1px] bg-slate-200 mx-0.5 sm:mx-1" />
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img 
                src="/DM.jpg" 
                alt="Digital Marketing Logo" 
                className="h-8 sm:h-10 object-contain rounded group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
          <div className="font-display font-bold text-lg sm:text-xl text-primary hidden sm:block">
            Digital Marketing
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors relative py-1 ${
                  isActive ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            );
          })}
          <Link to="/tuyen-sinh" className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-all active:scale-95 text-sm">
            Đăng ký ngay
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/tuyen-sinh" className="bg-primary text-white px-4 py-2 rounded-lg font-medium text-xs sm:hidden">
            Đăng ký
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for click-away and focus effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40"
            />
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-2xl z-50"
            >
              <div className="px-6 py-8 flex flex-col gap-2">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-4 px-4 rounded-xl text-lg font-bold transition-all active:scale-[0.98] ${
                        location.pathname === item.path 
                          ? 'bg-primary/5 text-primary border-l-4 border-primary' 
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="mt-4 pt-4 border-t border-slate-100"
                >
                  <Link
                    to="/tuyen-sinh"
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-center shadow-xl shadow-primary/20 block active:scale-[0.98] transition-transform"
                  >
                    Đăng ký ngay
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
