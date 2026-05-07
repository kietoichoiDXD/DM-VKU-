import { motion } from 'motion/react';
import { FadeIn } from '../components/FadeIn';
import { Book, CheckCircle2, LayoutTemplate, MessageSquare, PieChart, Video } from 'lucide-react';

export default function Programs() {
  const semesters = [
    {
      name: "Kiến thức đại cương & cơ sở ngành",
      courses: [
        "Tin học đại cương",
        "Kinh tế vi mô / vĩ mô",
        "Nguyên lý Marketing",
        "Thương mại điện tử căn bản",
        "Hành vi người tiêu dùng"
      ]
    },
    {
      name: "Kiến thức chuyên ngành lõi",
      courses: [
        "Marketing Kỹ Thuật Số (Digital Marketing)",
        "Social Media Marketing",
        "SEO & SEM",
        "Marketing Nội Dung (Content Marketing)",
        "Thiết kế Web và Landing Page"
      ]
    },
    {
      name: "Phân tích & Tối ưu hóa",
      courses: [
        "Phân tích dữ liệu Web (Web Analytics)",
        "Quản trị truyền thông trực tuyến",
        "Nghiên cứu thị trường trên Internet",
        "Tối ưu hóa Trải nghiệm người dùng (UX/UI)"
      ]
    },
    {
      name: "Thực hành dự án & Tốt nghiệp",
      courses: [
        "Quản trị Chiến lược Marketing",
        "Thực tập doanh nghiệp",
        "Đồ án chuyên ngành",
        "Khóa luận tốt nghiệp"
      ]
    }
  ];

  return (
    <main className="pt-24 pb-24 px-6 max-w-7xl mx-auto relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-100/40 blur-[120px] -z-10 rounded-full pointer-events-none" />
      
      {/* Running Background Text */}
      <div className="absolute top-40 left-0 right-0 overflow-hidden whitespace-nowrap -z-10 opacity-[0.03] select-none pointer-events-none">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="text-[12rem] font-display font-black uppercase"
        >
          Curriculum Digital Marketing Strategy Analytics Creative Content Curriclum Digital Marketing
        </motion.div>
      </div>

      {/* Intro */}
      <section className="mb-16 md:mb-24 pt-8 md:pt-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-xs md:text-sm font-bold tracking-wide text-primary uppercase shadow-sm">
              <Book className="w-4 h-4" />
              Chương Trình Đào Tạo
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-7xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.15] md:leading-[1.1]"
          >
            Cấu Trúc Chương Trình <br className="hidden sm:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Digital Marketing</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light px-4 md:px-0"
          >
            Chương trình được thiết kế đan xen giữa lý thuyết hàn lâm và kỹ năng thực hành, đáp ứng nhu cầu tuyển dụng thực tế của doanh nghiệp trên toàn cầu.
          </motion.p>
        </div>
      </section>

      {/* Curriculum breakdown */}
      <section className="mb-20 md:mb-32 relative">
        {/* Connection line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent -translate-x-1/2" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 md:gap-y-12 relative z-10">
          {semesters.map((sem, index) => (
            <FadeIn delay={index * 0.1} key={index} className={index % 2 === 1 ? 'md:mt-24' : ''}>
              <motion.div 
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all h-full group relative overflow-hidden"
              >
                {/* Decorative numbering background - adjusted for mobile */}
                <div className="absolute -right-4 -top-4 md:-right-8 md:-top-8 text-[80px] md:text-[150px] font-display font-black text-slate-50/50 group-hover:text-primary/[0.03] transition-colors duration-500 z-0 pointer-events-none leading-none select-none">
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white flex items-center justify-center font-display font-bold text-lg md:text-xl shadow-lg group-hover:from-primary group-hover:to-blue-600 transition-colors">
                      {index + 1}
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 leading-tight flex-1">{sem.name}</h3>
                  </div>
                  
                  <ul className="space-y-3 md:space-y-4">
                    {sem.courses.map((course, i) => (
                      <li key={i} className="flex items-start gap-3 md:gap-4 group/item">
                        <div className="mt-1">
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-slate-300 group-hover/item:text-primary transition-colors" />
                        </div>
                        <span className="text-sm md:text-base text-slate-600 group-hover/item:text-slate-900 font-medium transition-colors">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Key Subject Areas focus */}
      <section className="mb-12 md:mb-20">
        <FadeIn>
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900 mb-4 md:mb-6 tracking-tight px-4">Các Nhóm Kiến Thức Trọng Tâm</h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto font-light px-4">Được thiết kế toàn diện để bạn làm chủ từ phân tích dữ liệu, sáng tạo nội dung đến quản trị chiến dịch.</p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {[
            {
              icon: <LayoutTemplate className="w-6 h-6" />,
              title: "Owned Media / Web",
              desc: "Xây dựng và quản trị website, UX/UI nền tảng tối ưu hóa chuyển đổi.",
              color: "text-blue-600",
              bgColor: "bg-blue-50"
            },
            {
              icon: <MessageSquare className="w-6 h-6" />,
              title: "Social Media",
              desc: "Quản trị nội dung và phân phối trên Facebook, TikTok, Instagram.",
              color: "text-rose-500",
              bgColor: "bg-rose-50"
            },
            {
              icon: <PieChart className="w-6 h-6" />,
              title: "Data & Analytics",
              desc: "Thu thập, đọc hiểu báo cáo, ứng dụng dữ liệu để đưa ra các quyết định chiến lược.",
              color: "text-amber-500",
              bgColor: "bg-amber-50"
            },
            {
              icon: <Video className="w-6 h-6" />,
              title: "Creative Content",
              desc: "Tư duy sáng tạo, thiết kế thông điệp truyền thông đa phương tiện trực quan.",
              color: "text-emerald-500",
              bgColor: "bg-emerald-50"
            }
          ].map((item, i) => (
            <FadeIn delay={0.2 + (i * 0.1)} key={i}>
              <motion.div 
                whileHover={{ y: -8 }}
                className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 h-full group"
              >
                <div className={`mb-4 md:mb-6 ${item.color} ${item.bgColor} w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{item.title}</h4>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
