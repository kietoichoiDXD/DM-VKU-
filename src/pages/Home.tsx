import { motion } from 'motion/react';
import { ArrowRight, Globe, TrendingUp, Zap, BarChart3, Users, Star } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { Link } from 'react-router-dom';

const Marquee = () => (
  <div className="w-full overflow-hidden bg-slate-900 py-10 border-y border-slate-800">
    <div className="flex w-full">
      <motion.div 
        className="flex space-x-16 px-8 whitespace-nowrap items-center"
        animate={{ x: [0, -1000] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 20 
        }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex space-x-16 items-center">
            {["Google Partner", "Meta Business", "TikTok FOR BUSINESS", "Shopee", "Lazada", "HubSpot", "Salesforce"].map((brand, idx) => (
              <span key={idx} className="text-xl font-display font-bold text-slate-400 uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">
                {brand}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="pt-20 pb-0">
      {/* Hero - Split Layout with Atmospheric touches */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-50 to-transparent pointer-events-none" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10 py-20">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold tracking-wide text-slate-700 uppercase shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              Tuyển sinh năm {new Date().getFullYear()}
            </span>
            
            <motion.h1 
              className="text-6xl lg:text-7xl xl:text-[80px] font-display font-extrabold text-slate-900 tracking-tight leading-[1.05]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              Định Hình <br />
              <span className="relative inline-block">
                <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary via-rose-500 to-orange-500 opacity-20 blur-xl"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-orange-500">
                  Thương Hiệu Số.
                </span>
              </span>
            </motion.h1>
            
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-light">
              Chương trình đào tạo Cử nhân Digital Marketing tại VKU. Trải nghiệm môi trường thực chiến năng động, kiến tạo giải pháp truyền thông đột phá.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Link to="/tuyen-sinh" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-xl shadow-slate-900/20">
                Đăng ký ngay
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/chuong-trinh" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
                Khám phá chương trình
              </Link>
            </div>
            
            <div className="pt-8 flex items-center gap-4 border-t border-slate-200/60">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                ))}
              </div>
              <div className="text-sm font-medium text-slate-600">
                Hơn <strong className="text-slate-900">500+</strong> sinh viên <br/> đang theo học
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* Main Image */}
            <motion.div 
              className="absolute inset-0 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border-4 border-white transition-all duration-700 ease-out z-10"
              whileHover={{ rotate: 1, scale: 1.02 }}
              initial={{ rotate: -2 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Digital Marketing Analytics" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 to-transparent mix-blend-multiply" />
            </motion.div>

            {/* Floating Card 1 - Analytics */}
            <motion.div 
              drag
              dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
              whileDrag={{ scale: 1.05, cursor: "grabbing" }}
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -left-12 top-20 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/50 w-64 z-20 cursor-grab"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Tăng trưởng</div>
                  <div className="font-bold text-slate-900">+124%</div>
                </div>
              </div>
              <div className="h-10 flex items-end gap-1">
                {[40, 70, 45, 90, 65, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-blue-500 rounded-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </motion.div>

            {/* Floating Card 2 - Engagement */}
            <motion.div 
              drag
              dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
              whileDrag={{ scale: 1.05, cursor: "grabbing" }}
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 bottom-32 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,_0,_0,_0.1)] border border-white w-56 z-20 cursor-grab"
            >
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-bold text-slate-900">Tương tác</span>
              </div>
              <div className="text-3xl font-display font-bold text-slate-900 mb-1">24.5K</div>
              <div className="text-sm font-medium text-emerald-500 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" /> +15.3% tuần này
              </div>
            </motion.div>

            {/* Floating Element 3 - Review */}
            <motion.div 
              drag
              dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
              animate={{ x: [0, 10, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
              className="absolute left-10 -bottom-6 bg-white p-4 rounded-full shadow-[0_10px_30px_rgba(0,_0,_0,_0.08)] border border-slate-100 flex items-center gap-3 pr-6 z-20 cursor-grab"
            >
              <div className="bg-amber-100 p-2 rounded-full text-amber-500">
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="font-bold text-sm text-slate-700">Chất lượng đào tạo số 1</span>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee />

      {/* Highlights Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 tracking-tight">Vì sao chọn <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-500">VKU?</span></h2>
                <p className="text-slate-600 max-w-xl text-lg font-light">Môi trường định hướng thực hành toàn diện, đồng hành cùng mạng lưới doanh nghiệp sâu rộng.</p>
              </div>
              <Link to="/chuong-trinh" className="flex items-center gap-2 font-bold text-primary hover:text-primary-dark transition-colors group">
                Xem chi tiết chương trình
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-amber-500" />,
                title: "Thực Chiến & Sáng Tạo",
                desc: "100% học qua dự án (Project-Based Learning). Trực tiếp lập kế hoạch và chạy chiến dịch Marketing thực tế ngay trên ghế nhà trường.",
                bg: "bg-amber-50"
              },
              {
                icon: <Globe className="w-8 h-8 text-blue-500" />,
                title: "Mạng Lưới Rộng Mở",
                desc: "Cam kết hỗ trợ thực tập và việc làm tại hệ sinh thái hàng trăm đối tác công nghệ và truyền thông số hàng đầu miền Trung và cả nước.",
                bg: "bg-blue-50"
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-emerald-500" />,
                title: "Đi Đầu Xu Hướng",
                desc: "Chương trình chuyên sâu về Performance Marketing, Data Analytics, tự động hóa và ứng dụng AI/Machine Learning trong truyền thông.",
                bg: "bg-emerald-50"
              }
            ].map((feature, idx) => (
              <FadeIn delay={idx * 0.15} key={idx}>
                <motion.div 
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group h-full flex flex-col z-10"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 ${feature.bg} rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-[2.5]`} />
                  
                  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-8 border border-slate-50 group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-2">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-light flex-1">{feature.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Brutalist Inspired CTA */}
      <section className="px-6 pb-32 bg-white">
        <FadeIn>
          <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Deco background */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent opacity-50" />
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Sẵn sàng dẫn dắt <br/>
                <span className="text-primary-200">thế hệ số tiếp theo?</span>
              </h2>
              <p className="text-xl text-slate-400 font-light mb-8 max-w-lg">
                Chỉ còn vài bước để hoàn tất hồ sơ ứng tuyển vào chuyên ngành Digital Marketing tại VKU.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/tuyen-sinh" className="px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary-light transition-all text-center">
                  Bắt đầu ứng tuyển ngay
                </Link>
                <a href="#" className="px-8 py-4 bg-white/10 text-white backdrop-blur-md rounded-2xl font-bold text-lg hover:bg-white/20 transition-all text-center">
                  Tải Brochure
                </a>
              </div>
            </div>
            
            <div className="relative z-10 hidden lg:block">
              <div className="w-64 h-64 border border-white/20 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 border border-white/30 rounded-full animate-[spin_10s_linear_infinite] border-t-transparent" />
                <div className="text-white text-center">
                  <div className="font-display text-6xl font-bold">2026</div>
                  <div className="text-sm font-bold tracking-widest uppercase text-slate-400 mt-2">Năm Học Mới</div>
                </div>
              </div>
            </div>

          </div>
        </FadeIn>
      </section>
    </main>
  );
}
