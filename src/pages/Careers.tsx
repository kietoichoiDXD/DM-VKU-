import { motion } from 'motion/react';
import {
  Megaphone,
  LineChart,
  Search,
  PenTool,
  Users,
  Briefcase,
  GraduationCap,
  Globe,
  MonitorSmartphone,
  BookOpen
} from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export default function Careers() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Running Background Text */}
      <div className="absolute top-40 left-0 right-0 overflow-hidden whitespace-nowrap -z-10 opacity-[0.03] select-none pointer-events-none">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="text-[12rem] font-display font-black uppercase"
        >
          CAREER OPPORTUNITIES GROWTH SCALE FUTURE SUCCESS DIGITAL MARKETING CAREERS
        </motion.div>
      </div>
      {/* Hero Section */}
      <section className="mb-16 md:mb-24 mt-4 md:mt-8 flex flex-col lg:flex-row items-center gap-8 md:gap-12 px-4 md:px-0">
        <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 bg-red-50 text-primary rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase"
          >
            Cơ hội nghề nghiệp
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-slate-900 leading-[1.2] md:leading-[1.1]"
          >
            Kiến tạo tương lai <br className="hidden md:block"/>
            <span className="text-primary">Kỷ Nguyên Số.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Sinh viên tốt nghiệp từ chương trình đào tạo ngành Marketing - chuyên ngành Digital Marketing được trang bị bộ kỹ năng toàn diện, sẵn sàng cho những vị trí chiến lược tại các tập đoàn và startups công nghệ.
          </motion.p>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1 w-full max-w-2xl"
        >
          <div className="relative aspect-video sm:aspect-[4/3] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
              alt="Digital Marketing Team" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply" />
          </div>
        </motion.div>
      </section>

      {/* Capabilities Section */}
      <section className="mb-16 md:mb-24 pt-8 md:pt-12 px-4 md:px-0">
        <FadeIn>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">Năng Lực Cốt Lõi</h2>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto px-4">Bộ kỹ năng chuyên sâu giúp bạn tự tin làm chủ các chiến dịch truyền thông đa nền tảng.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Megaphone className="w-6 h-6" />,
              title: "Triển khai chiến dịch",
              desc: "Quản lý và thực thi các chiến dịch quảng bá, xây dựng thương hiệu mạnh mẽ qua các công cụ Digital Marketing hiện đại."
            },
            {
              icon: <LineChart className="w-6 h-6" />,
              title: "Chiến lược Marketing",
              desc: "Xây dựng chiến lược toàn diện cho sản phẩm và lĩnh vực của công ty trên các phương tiện truyền thông kỹ thuật số."
            },
            {
              icon: <PenTool className="w-6 h-6" />,
              title: "Content Marketing",
              desc: "Lập kế hoạch, điều phối và phát triển nội dung đa kênh để đảm bảo đạt được các mục tiêu kinh doanh."
            },
            {
              icon: <Search className="w-6 h-6" />,
              title: "Tối ưu hóa SEO/SEM",
              desc: "Thực thi SEO, SEM, Google Ads hiệu quả; tối ưu hóa thứ hạng website trên các công cụ tìm kiếm hàng đầu."
            },
            {
              icon: <Globe className="w-6 h-6" />,
              title: "Nghiên cứu thị trường",
              desc: "Thu thập, phân tích thông tin từ Social Media và thị trường số để đánh giá hiệu quả chiến dịch."
            },
            {
              icon: <MonitorSmartphone className="w-6 h-6" />,
              title: "Phát triển đa kênh",
              desc: "Làm chủ hệ sinh thái số, kết nối liền mạch hành trình trải nghiệm người dùng trên mọi điểm chạm."
            }
          ].map((item, idx) => (
            <FadeIn delay={idx * 0.1} key={idx}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-6 md:p-8 rounded-2xl h-full shadow-sm hover:shadow-xl border border-slate-100 transition-shadow duration-300 group"
              >
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 + (idx * 0.05) }}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 md:mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">{item.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Job Roles Section - Bento Grid */}
      <section className="mb-16 md:mb-24 pt-8 md:pt-12 px-4 md:px-0">
        <FadeIn>
          <div className="mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">Lộ Trình Nghề Nghiệp</h2>
            <p className="text-slate-600 text-base md:text-lg">Khám phá những vị trí chuyên sâu mở ra sau khi tốt nghiệp tại VKU.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          {/* Management & Strategy */}
          <FadeIn className="md:col-span-2">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 md:p-8 rounded-2xl h-full bg-gradient-to-br from-white to-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Briefcase className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:drop-shadow-md transition-all duration-300" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900">Chiến Lược & Quản Trị</h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  "Chuyên viên / Nhà quản trị Marketing số",
                  "Nhà quản lý & Tư vấn doanh nghiệp",
                  "Nhà phân tích chiến dịch Marketing",
                  "Chuyên viên / Nhà quản trị thương hiệu",
                  "Nhà quản trị quan hệ khách hàng"
                ].map((job, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-slate-700 font-medium text-sm md:text-base">{job}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </FadeIn>

          {/* Content & Social */}
          <FadeIn delay={0.1}>
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 md:p-8 rounded-2xl h-full bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Users className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:drop-shadow-md transition-all duration-300" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-display font-bold text-slate-900">Nội Dung & MXH</h3>
              </div>
              <ul className="space-y-3 md:space-y-4">
                {[
                  "Nhà quản trị Marketing nội dung số",
                  "Chuyên gia Social Media Marketing",
                  "Nhà quản trị truyền thông số"
                ].map((job, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                    <span className="text-slate-700 text-sm md:text-base">{job}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </FadeIn>

          {/* Performance & Execution */}
          <FadeIn delay={0.2} className="md:col-span-1">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 md:p-8 rounded-2xl h-full bg-white border border-slate-100 shadow-sm hover:shadow-xl border-b-4 hover:border-b-[6px] border-b-primary transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <LineChart className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:drop-shadow-md transition-all duration-300" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-display font-bold text-slate-900">Thực Thi Chiến Dịch</h3>
              </div>
              <ul className="space-y-3 md:space-y-4">
                {[
                  "Chuyên viên phát triển SEO, SEM",
                  "Nhân viên Sales & Marketing Online",
                  "Nhà nghiên cứu thị trường số"
                ].map((job, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                    <span className="text-slate-700 text-sm md:text-base">{job}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </FadeIn>

          {/* Academic & Research */}
          <FadeIn delay={0.3} className="md:col-span-2">
            <motion.div 
              whileHover={{ y: -5, scale: 1.01 }}
              className="p-6 md:p-8 rounded-2xl h-full flex flex-col justify-center relative overflow-hidden bg-primary shadow-lg hover:shadow-primary/30 transition-all duration-300 text-white border-none group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4 group-hover:opacity-20 transition-opacity duration-300"
              >
                <BookOpen className="w-48 h-48 md:w-64 md:h-64" />
              </motion.div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-3 md:mb-4">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GraduationCap className="w-7 h-7 md:w-8 md:h-8 text-white/80 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-display font-bold">Giảng Dạy & Nghiên Cứu</h3>
                </div>
                <p className="text-white/90 text-base md:text-lg max-w-xl group-hover:text-white transition-colors duration-300">
                  Tham gia công tác giảng dạy, nghiên cứu chuyên sâu về Marketing kỹ thuật số tại các trường đại học, cao đẳng và viện nghiên cứu.
                </p>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Future / Post-grad Section */}
      <section className="mb-12 px-4 md:px-0">
        <FadeIn>
          <div className="bg-slate-900 rounded-[1.5rem] md:rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-primary/20 to-transparent blur-3xl opacity-50" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-6 md:space-y-8">
              <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-xs md:text-sm font-semibold tracking-wide">
                Phát Triển Tương Lai
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold leading-tight">
                Khả năng học tập <br className="hidden md:block"/>
                sau đại học & Khởi nghiệp
              </h2>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light">
                Sinh viên được trang bị kiến thức nền tảng vững chắc để tự khởi nghiệp hoặc tiếp tục theo đuổi các bậc học cao hơn tại các trường danh tiếng.
              </p>
              
              <div className="pt-6 md:pt-8 flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                <button className="bg-white text-slate-900 px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors text-sm md:text-base">
                  Chương trình Đào tạo
                </button>
                <button className="bg-slate-800 border border-slate-700 text-white px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-bold hover:bg-slate-700 transition-colors text-sm md:text-base">
                  Liên hệ tư vấn
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
