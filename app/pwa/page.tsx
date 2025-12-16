"use client";

import { motion } from "framer-motion";
import { Download, Info, Smartphone, MonitorSmartphone } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function PwaPage() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const stepsAndroid = [
    isEn
      ? "Open this site with Chrome/Edge/Brave on Android."
      : "Mở trang bằng Chrome/Edge/Brave trên Android.",
    isEn
      ? "If you see the browser banner or three-dot menu, choose “Install app” / “Add to Home screen”."
      : 'Khi thấy banner hoặc menu ba chấm, chọn "Install app" / "Add to Home screen".',
    isEn
      ? "Confirm the install dialog. An icon will appear on your home screen."
      : "Xác nhận hộp thoại cài đặt. Biểu tượng sẽ xuất hiện trên màn hình chính.",
  ];

  const stepsIOS = [
    isEn
      ? "Open this site with Safari on iOS/iPadOS (required for install)."
      : "Mở trang bằng Safari trên iOS/iPadOS (bắt buộc để cài).",
    isEn
      ? "Tap the Share button (square with an up arrow)."
      : "Nhấn nút Chia sẻ (hình vuông có mũi tên lên).",
    isEn
      ? 'Scroll and choose “Add to Home Screen”.'
      : 'Kéo xuống và chọn "Add to Home Screen".',
    isEn
      ? "Confirm. The app icon appears on your home screen."
      : "Xác nhận. Biểu tượng app sẽ xuất hiện trên màn hình chính.",
  ];

  const howItWorks = [
    isEn
      ? "Works like a full-screen app launched from your home screen."
      : "Hoạt động như app toàn màn hình khi mở từ màn hình chính.",
    isEn
      ? "Uses the same data as the website; no extra permissions."
      : "Dùng chung dữ liệu với website; không cần quyền truy cập lạ.",
    isEn
      ? "Can cache pages/assets for faster repeat visits; some pages may work offline if cached."
      : "Có thể lưu cache để vào nhanh hơn; một số trang có thể xem offline nếu đã cache.",
    isEn
      ? "You can remove it anytime like a normal home-screen shortcut/app."
      : "Có thể gỡ bất cứ lúc nào như một shortcut/app bình thường.",
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12 mb-10"
        >
          <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-4">
            <Download className="w-5 h-5 text-gold" />
            <span className="text-gold font-semibold">
              {isEn ? "Install as App" : "Cài ứng dụng (PWA)"}
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl text-white mb-4">
            {isEn ? "Install Gen.G Fandom" : "Cài Gen.G Fandom như ứng dụng"}
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            {isEn
              ? "Follow the steps below to add Gen.G Fandom to your home screen on Android or iOS. Once installed, it opens full-screen like a native app."
              : "Làm theo các bước bên dưới để thêm Gen.G Fandom lên màn hình chính Android hoặc iOS. Sau khi cài, app mở toàn màn hình giống ứng dụng gốc."}
          </p>
        </motion.section>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="card-dark border border-gold/20 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <MonitorSmartphone className="w-6 h-6 text-gold" />
              <h2 className="font-heading text-2xl text-white">
                {isEn ? "Android" : "Android"}
              </h2>
            </div>
            <ol className="list-decimal list-inside text-gray-300 space-y-3 text-sm sm:text-base">
              {stepsAndroid.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-dark border border-gold/20 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="w-6 h-6 text-gold" />
              <h2 className="font-heading text-2xl text-white">
                {isEn ? "iOS / iPadOS (Safari)" : "iOS / iPadOS (Safari)"}
              </h2>
            </div>
            <ol className="list-decimal list-inside text-gray-300 space-y-3 text-sm sm:text-base">
              {stepsIOS.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="card-dark border border-gold/30 p-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <Info className="w-5 h-5 text-gold" />
            <h3 className="font-heading text-xl text-white">
              {isEn ? "How it works" : "Cơ chế hoạt động"}
            </h3>
          </div>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base">
            {howItWorks.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-400 text-sm mt-4">
            {isEn
              ? "Tip: If you don’t see the install option, make sure you’re using Safari on iOS or a Chromium-based browser on Android, and that you’ve visited the site recently."
              : "Mẹo: Nếu không thấy tùy chọn cài, hãy dùng Safari trên iOS hoặc trình duyệt Chromium trên Android và đảm bảo bạn vừa truy cập site gần đây."}
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 btn-outline-gold text-sm sm:text-base"
            >
              {isEn ? "Back to home" : "Về trang chủ"}
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

