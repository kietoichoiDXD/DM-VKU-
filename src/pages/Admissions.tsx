import { motion } from 'motion/react';
import { FadeIn } from '../components/FadeIn';
import { BadgeCheck, Calendar, FileText, Phone, PlaySquare } from 'lucide-react';

export default function Admissions() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
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
      <section className="mb-24">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <BadgeCheck className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-display font-bold text-slate-900">Phương thức xét tuyển</h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              title: "Dựa vào Điểm thi THPT",
              methods: ["Xét tuyển theo kết quả kỳ thi tốt nghiệp THPT."],
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
              methods: ["Theo quy định của Bộ GDĐT.", "Xét tuyển của Đại học Đà Nẵng.", "Thí sinh đạt giải học sinh giỏi, chứng chỉ ngoại ngữ quốc tế."],
              percent: "20%"
            }
          ].map((item, idx) => (
            <FadeIn delay={idx * 0.1} key={idx}>
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] relative overflow-hidden h-full group"
              >
                <div className="absolute top-0 right-0 bg-slate-900 group-hover:bg-primary transition-colors text-white font-bold px-5 py-2.5 rounded-bl-[2rem] z-10 shadow-sm">
                  Chỉ tiêu: <span className="text-xl">{item.percent}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-6 w-[80%] mt-6 leading-tight">{item.title}</h3>
                
                <div className="space-y-4 mb-8">
                  {item.methods.map((desc, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <PlaySquare className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 text-sm leading-relaxed">{desc}</span>
                    </div>
                  ))}
                </div>

                {item.combos && (
                  <div className="pt-5 border-t border-slate-100 mt-auto">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Tổ hợp môn xét tuyển</span>
                    <span className="text-slate-900 font-bold bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 inline-block group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors">{item.combos}</span>
                  </div>
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Timeline */}
        <FadeIn>
          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl h-full border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
              <Calendar className="w-8 h-8 text-rose-500" />
              <h3 className="text-2xl font-bold text-slate-900">Mốc Thời Gian</h3>
            </div>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {[
                { time: "Tháng 4", text: "Tìm hiểu thông tin và Đăng ký tư vấn sớm" },
                { time: "Tháng 5 - 6", text: "Mở cổng đăng ký xét tuyển học bạ" },
                { time: "Tháng 7", text: "Điều chỉnh nguyện vọng THPT Quốc gia" },
                { time: "Tháng 8", text: "Công bố điểm chuẩn và Xác nhận nhập học" }
              ].map((step, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                    <div className="font-bold text-slate-900 mb-1">{step.time}</div>
                    <div className="text-sm text-slate-600">{step.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Contact/Support */}
        <FadeIn delay={0.2}>
          <div className="bg-slate-900 p-8 md:p-12 rounded-3xl h-full text-white">
            <div className="flex items-center gap-4 mb-8">
              <Phone className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-white">Liên Hệ Tư Vấn</h3>
            </div>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Bạn có câu hỏi về quy trình xét tuyển, học phí hay học bổng? Hãy liên hệ ngay với Ban tuyển sinh trường đại học CNTT & TT Việt - Hàn.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-slate-400 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Fanpage Tuyển sinh</h4>
                  <a href="#" className="text-primary hover:text-primary-light transition-colors">facebook.com/vku.udn.vn</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-slate-400 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Hotline</h4>
                  <p className="text-slate-300">0236 3667 117</p>
                </div>
              </div>
              
              <div className="pt-8">
                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-dark transition-colors">
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
