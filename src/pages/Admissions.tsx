import { motion } from 'motion/react';
import { FadeIn } from '../components/FadeIn';
import { BadgeCheck, Calendar, FileText, Phone, PlaySquare } from 'lucide-react';

export default function Admissions() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Running Background Text */}
      <div className="absolute top-20 left-0 right-0 overflow-hidden whitespace-nowrap -z-10 opacity-[0.03] select-none pointer-events-none">
        <motion.div
          animate={{ x: [-1000, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="text-[12rem] font-display font-black uppercase"
        >
          ADMISSIONS {new Date().getFullYear()} ENROLL NOW FUTURE LEADERS DIGITAL MARKETING ADMISSIONS
        </motion.div>
      </div>
      <section className="mb-20 text-center space-y-6">
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1.5 bg-green-50 text-emerald-600 rounded-full text-sm font-bold tracking-wide uppercase"
        >
          Thông Tin Tuyển Sinh
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight"
        >
          Tuyển Sinh Năm {new Date().getFullYear()}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          Hướng dẫn chi tiết các hình thức ứng tuyển, chỉ tiêu, điểm chuẩn tham khảo và hồ sơ cần thiết cho chuyên ngành Digital Marketing.
        </motion.p>
      </section>

      {/* Methods of Admission */}
      <section className="mb-16 md:mb-24">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8 px-4 md:px-0">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <BadgeCheck className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">Phương thức xét tuyển</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 md:px-0">
          {[
            {
              title: "Dựa vào Điểm thi THPT",
              methods: ["Kết quả kỳ thi tốt nghiệp THPT."],
              combos: "A00, A01, D01, D90",
              percent: "50%"
            },
            {
              title: "Xét tuyển Học bạ",
              methods: ["Dựa vào kết quả học tập lớp 10, 11 và học kỳ 1 lớp 12."],
              combos: "A00, A01, D01, D90",
              percent: "30%"
            },
            {
              title: "Tuyển thẳng & Riêng",
              methods: ["Theo quy định của Bộ GDĐT.", "Xét tuyển của Đại học Đà Nẵng.", "Thí sinh đạt giải học sinh giỏi, chứng chỉ quốc tế."],
              percent: "20%"
            }
          ].map((item, idx) => (
            <FadeIn delay={idx * 0.1} key={idx}>
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] relative overflow-hidden h-full group"
              >
                <div className="absolute top-0 right-0 bg-slate-900 group-hover:bg-primary transition-colors text-white font-bold px-4 py-2 md:px-5 md:py-2.5 rounded-bl-[1.5rem] md:rounded-bl-[2rem] z-10 shadow-sm text-sm md:text-base">
                  Chỉ tiêu: <span className="text-lg md:text-xl">{item.percent}</span>
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold text-slate-900 mb-4 md:mb-6 w-[70%] mt-4 md:mt-6 leading-tight">{item.title}</h3>
                
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {item.methods.map((desc, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <PlaySquare className="w-4 h-4 md:w-5 md:h-5 text-primary/40 group-hover:text-primary transition-colors mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 text-xs md:text-sm leading-relaxed">{desc}</span>
                    </div>
                  ))}
                </div>

                {item.combos && (
                  <div className="pt-4 md:pt-5 border-t border-slate-100 mt-auto">
                    <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Tổ hợp môn xét tuyển</span>
                    <span className="text-slate-900 font-bold bg-slate-50 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg border border-slate-100 inline-block group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors text-xs md:text-sm">{item.combos}</span>
                  </div>
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20 px-4 md:px-0">
        {/* Timeline */}
        <FadeIn>
          <div className="bg-slate-50 p-6 md:p-12 rounded-[1.5rem] md:rounded-3xl h-full border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
              <Calendar className="w-7 h-7 md:w-8 md:h-8 text-rose-500" />
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">Mốc Thời Gian</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-200">
              {[
                { time: "Tháng 4", text: "Tìm hiểu thông tin và Đăng ký tư vấn sớm" },
                { time: "Tháng 5 - 6", text: "Mở cổng đăng ký xét tuyển học bạ" },
                { time: "Tháng 7", text: "Điều chỉnh nguyện vọng THPT Quốc gia" },
                { time: "Tháng 8", text: "Công bố điểm chuẩn và Xác nhận nhập học" }
              ].map((step, i) => (
                <div key={i} className="relative flex items-start gap-8 group">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-slate-50 bg-white group-hover:bg-primary transition-colors shadow-sm shrink-0 z-10">
                    <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-white" />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="font-bold text-slate-900 mb-1">{step.time}</div>
                    <div className="text-sm text-slate-600 leading-relaxed">{step.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Contact/Support */}
        <FadeIn delay={0.2}>
          <div className="bg-slate-900 p-6 md:p-12 rounded-[1.5rem] md:rounded-3xl h-full text-white">
            <div className="flex items-center gap-4 mb-8">
              <Phone className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              <h3 className="text-xl md:text-2xl font-bold text-white">Liên Hệ Tư Vấn</h3>
            </div>
            <p className="text-slate-300 mb-8 text-sm md:text-base leading-relaxed">
              Bạn có câu hỏi về quy trình xét tuyển, học phí hay học bổng? Hãy liên hệ ngay với Ban tuyển sinh trường đại học CNTT & TT Việt - Hàn.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FileText className="w-5 h-5 md:w-6 md:h-6 text-slate-400 mt-1" />
                <div>
                  <h4 className="font-bold mb-1 text-sm md:text-base">Fanpage Tuyển sinh</h4>
                  <a href="#" className="text-primary hover:text-primary-light transition-colors text-sm md:text-base">facebook.com/vku.udn.vn</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-slate-400 mt-1" />
                <div>
                  <h4 className="font-bold mb-1 text-sm md:text-base">Hotline</h4>
                  <p className="text-slate-300 text-sm md:text-base">0236 3667 117</p>
                </div>
              </div>
              
              <div className="pt-6 md:pt-8">
                <button className="w-full bg-primary text-white py-3.5 md:py-4 rounded-xl font-bold hover:bg-primary-dark transition-colors text-sm md:text-base">
                  Gửi câu hỏi cho chúng tôi
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

    </main>
  );
}
