import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="font-display font-bold text-xl text-primary mb-2">VKU Digital Marketing</div>
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Đại học CNTT & TT Việt - Hàn. All rights reserved.</p>
          </div>
          <div className="flex gap-6 justify-start md:justify-end text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-primary transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-primary transition-colors">Điều khoản dịch vụ</a>
            <a href="#" className="hover:text-primary transition-colors">Liên hệ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
