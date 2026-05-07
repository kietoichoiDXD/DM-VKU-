import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src="/vku.jpg" alt="VKU Logo" className="h-10 object-contain" />
              <div className="h-6 w-[1px] bg-slate-200" />
              <img src="/DM.jpg" alt="DM Logo" className="h-10 object-contain" />
              <div className="font-display font-bold text-xl text-primary ml-2">Digital Marketing</div>
            </div>
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Đại học CNTT & TT Việt - Hàn. All rights reserved.</p>
          </div>
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
