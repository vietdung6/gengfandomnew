"use client";

import { motion } from "framer-motion";
import { Users, Heart, ShoppingBag, ExternalLink, Facebook } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function CommunityPage() {
  const { language } = useLanguage();

  // Cộng đồng fan theo từng tuyển thủ
  const playerSupport: Array<{ name: string; link: string; description: string }> = [
    // Kiin
    {
      name: language === "en" ? "Kim Kiin da nau mi chua?" : "Kim Kiin đã nấu mì chưa?",
      link: "https://www.facebook.com/kiindanaumychua",
      description:
        language === "en"
          ? "Fan-run page for Kiin with casual updates and memes."
          : "Fanpage do fan lập cho Kiin, cập nhật đời thường và meme.",
    },
    // Canyon
    {
      name: language === "en" ? "Big White Bear Canyon" : "Hẻm núi Gấu trắng của Kim Canyon",
      link: "https://www.facebook.com/bigwhitebearcanyon",
      description:
        language === "en"
          ? "Vietnamese fanpage for Canyon; highlights and memes."
          : "Fanpage Canyon cho fan Việt, tổng hợp highlight và meme.",
    },
    // Chovy
    {
      name: language === "en" ? "Anchovy Shark" : "Cá mập Anchovy",
      link: "https://www.facebook.com/cacomChovy",
      description:
        language === "en"
          ? "Fanpage for Chovy with memes and match reactions."
          : "Fanpage Chovy, nhiều meme và reaction trận đấu.",
    },
    {
      name: language === "en" ? "Singer Jihun (Chovy)" : "Ca sĩ Jihun - Singer Chovy",
      link: "https://www.facebook.com/profile.php?id=61557548111539",
      description:
        language === "en"
          ? "Fun fanpage imagining Chovy as singer Jihun."
          : "Fanpage vui về Chovy dưới vai ca sĩ Jihun.",
    },
    {
      name: language === "en" ? "Chovy’s Journey" : "Hành trình của tuyển thủ Chovy",
      link: "https://www.facebook.com/chobimine",
      description:
        language === "en"
          ? "Timeline-style fanpage for Chovy’s career moments."
          : "Fanpage kiểu timeline, theo hành trình sự nghiệp của Chovy.",
    },
    {
      name: "Chovywings",
      link: "https://www.facebook.com/profile.php?id=61560270600529",
      description:
        language === "en"
          ? "Fan-run Chovy page with edits and updates."
          : "Fanpage Chovy do fan quản lý, có nhiều edit và cập nhật.",
    },
    {
      name: language === "en" ? "Chovy Esport - VN Fanpage" : "Chovy esport - Fan Vietnam Fanpage",
      link: "https://www.facebook.com/profile.php?id=100069287362906",
      description:
        language === "en"
          ? "Vietnam-based Chovy fanpage sharing news and memes."
          : "Fanpage Chovy tại Việt Nam, chia sẻ tin và meme.",
    },
    // Ruler
    {
      name: language === "en" ? "Ruler’s Pentagram" : "Pentagram của Ruler",
      link: "https://www.facebook.com/profile.php?id=61578654754957",
      description:
        language === "en"
          ? "Fanpage for Ruler with highlights and community posts."
          : "Fanpage Ruler, chia sẻ highlight và bài cộng đồng.",
    },
    {
      name: language === "en" ? "Ruler & Lehends" : "Ruler ơi, Lehends à",
      link: "https://www.facebook.com/ruler.lehends",
      description:
        language === "en"
          ? "Fan-run duo page for Ruler x Lehends moments."
          : "Fanpage do fan lập, lưu giữ khoảnh khắc Ruler x Lehends.",
    },
    // Duro
    {
      name: language === "en" ? "Study With Duro" : "ôn thi đại học cùng duro.",
      link: "https://www.facebook.com/profile.php?id=61568895128172",
      description:
        language === "en"
          ? "Lighthearted fanpage about Duro with study/meme theme."
          : "Fanpage vui về Duro với concept ôn thi + meme.",
    },
    {
      name: "Duro Duro Duroro",
      link: "https://www.facebook.com/profile.php?id=61569849747863",
      description:
        language === "en"
          ? "Fanpage for Duro with clips and playful edits."
          : "Fanpage Duro, đăng clip và edit vui.",
    },
    {
      name: language === "en" ? "Introvert with Joo Minkyu" : "Hướng nội cùng Joo Minkyu",
      link: "https://www.facebook.com/profile.php?id=61569427462200",
      description:
        language === "en"
          ? "Fan-run page for Duro (Joo Minkyu) with daily content."
          : "Fanpage do fan lập cho Duro (Joo Minkyu), nội dung đời thường.",
    },
  ];
  
  // Cộng đồng fan đội tuyển (Facebook fanpages / communities)
  const teamSupport: Array<{ name: string; link: string; description: string }> = [
    {
      name: language === "en" ? "Lien Meme Huyen Thoai" : "Liên meme huyền thoại",
      link: "https://www.facebook.com/lienmemehuyenthoai",
      description:
        language === "en"
          ? "Vietnamese meme community about League of Legends and Gen.G"
          : "Cộng đồng meme LMHT, nơi thường xuyên có content về Gen.G.",
    },
    {
      name: language === "en" ? "Biet Doi Vang Den" : "Biệt đội vàng đen",
      link: "https://www.facebook.com/bietdoivangden",
      description:
        language === "en"
          ? "Vietnamese Gen.G fan community (black & gold squad)"
          : "Cộng đồng fan Gen.G Việt Nam – Biệt đội vàng đen.",
    },
    {
      name: "Gencon LOL",
      link: "https://www.facebook.com/GenconLOL",
      description:
        language === "en"
          ? "Gen.G Vietnamese fan community"
          : "Fanpage cộng đồng Gen.G dành cho fan Việt.",
    },
    {
      name: language === "en" ? "Gen.G Esports LOL Vietnam" : "Gen.G Esports LOL Việt Nam",
      link: "https://www.facebook.com/GenGLOLVN",
      description:
        language === "en"
          ? "Page sharing news and content about Gen.G for Vietnamese fans"
          : "Trang chia sẻ tin tức, nội dung về Gen.G cho fan Việt.",
    },
    {
      name:
        language === "en"
          ? "Gen.G Pro-Game LOL Team Vietnam Fanpage"
          : "Gen.G Pro-Game LOL Team Vietnam Fanpage",
      link: "https://www.facebook.com/GenGVNFP",
      description:
        language === "en"
          ? "Vietnamese fanpage following Gen.G pro team"
          : "Fanpage theo dõi đội tuyển Gen.G dành cho fan Việt Nam.",
    },
  ];

  const otherCommunities: Array<{ name: string; link: string; description: string }> = [
    {
      name: language === "en" ? "1021kwt - Chenchi gau gau gau" : "1021kwt - Chenchi gâu gâu gâu",
      link: "https://www.facebook.com/profile.php?id=61562086325683",
      description:
        language === "en"
          ? "Fan-run page with Genrang memes and Valorant/Gen.G updates."
          : "Fanpage do fan quản lý, meme Genrang và cập nhật Gen.G/Valorant.",
    },
  ];

  const officialMerch: Array<{ name: string; link: string; description: string }> = [
    {
      name: language === "en" ? "Gen.G Official Shop" : "Shop chính thức Gen.G",
      link: "https://en.gengshop.com/",
      description:
        language === "en"
          ? "Official global Gen.G store (international shipping)."
          : "Shop chính thức toàn cầu của Gen.G (có ship quốc tế).",
    },
    {
      name:
        language === "en"
          ? "Gen.G Buy/Sell/Exchange Group"
          : "Nhóm mua, trao đổi, mọi thứ về Gen.G",
      link: "https://www.facebook.com/groups/435113395569129",
      description:
        language === "en"
          ? "Vietnamese fan-run group for buying/selling/exchanging Gen.G merch (not official)."
          : "Group fan Việt tự phát để mua/bán/trao đổi đồ Gen.G (không phải shop chính thức).",
    },
    {
      name:
        language === "en"
          ? "Chovy the Nyangnyangie"
          : "Chovy the nyangnyangie",
      link: "https://www.facebook.com/chovythenyangnyangie",
      description:
        language === "en"
          ? "Fan-run Chovy page; sometimes shares merch info (not official store)."
          : "Fanpage do fan quản lý, đôi khi chia sẻ merch (không phải shop chính thức).",
    },
    {
      name:
        language === "en"
          ? "Chovy Thang Thi Moi Vui"
          : "chovy thắng thì mới vui",
      link: "https://www.facebook.com/profile.php?id=61575035294975",
      description:
        language === "en"
          ? "This is a personal vietnamese blog supporting Chovy and GenG. It accepts orders for GenG products and The MAU - Chovy's shop (not the official shop)."
          : "Blog cá nhân support Chovy & GenG. Có nhận order merch GenG, The MAU - shop của Chovy (không phải shop chính thức).",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16 mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-24 bg-gradient-radial-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-12 h-12 text-gold" />
            </div>
          </motion.div>

          <h1 className="font-heading text-5xl sm:text-6xl mb-4">
            <span className="text-gradient-gold">
              {language === "en" ? "COMMUNITY" : "CỘNG ĐỒNG"}
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            {language === "en"
              ? "Join the Gen.G community. Connect with fellow fans, support players, and get official merchandise."
              : "Tham gia cộng đồng Gen.G. Kết nối với các fan, hỗ trợ tuyển thủ và mua merch chính hãng."}
          </p>
        </motion.section>

        {/* Support Players Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 mb-12"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-4">
              <Heart className="w-5 h-5 text-gold" />
              <span className="text-gold font-semibold">
                {language === "en" ? "SUPPORT PLAYERS" : "HỖ TRỢ TUYỂN THỦ"}
              </span>
            </div>
            <h2 className="font-heading text-3xl text-white mb-2">
              {language === "en"
                ? "Player Fan Pages"
                : "Trang Fan Của Tuyển Thủ"}
            </h2>
            <p className="text-gray-400">
              {language === "en"
                ? "Follow and support your favorite players on Facebook"
                : "Theo dõi và hỗ trợ các tuyển thủ yêu thích trên Facebook"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {playerSupport.length > 0 ? (
              playerSupport.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="card-dark group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                        <Facebook className="w-6 h-6 text-blue-400" />
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 ml-auto group-hover:text-gold transition-colors" />
                    </div>
                    <h3 className="font-heading text-xl text-white mb-2 group-hover:text-gold transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.a>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                <p>{language === "en" ? "Links coming soon..." : "Liên kết sắp có..."}</p>
              </div>
            )}
          </div>
        </motion.section>

        {/* Support Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 mb-12"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-4">
              <Users className="w-5 h-5 text-gold" />
              <span className="text-gold font-semibold">
                {language === "en" ? "SUPPORT TEAM" : "HỖ TRỢ ĐỘI TUYỂN"}
              </span>
            </div>
            <h2 className="font-heading text-3xl text-white mb-2">
              {language === "en"
                ? "Team Fan Communities"
                : "Cộng Đồng Fan Đội Tuyển"}
            </h2>
            <p className="text-gray-400">
              {language === "en"
                ? "Join Gen.G fan communities on Facebook"
                : "Tham gia các cộng đồng fan Gen.G trên Facebook"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teamSupport.length > 0 ? (
              teamSupport.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="card-dark group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                        <Facebook className="w-6 h-6 text-green-400" />
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 ml-auto group-hover:text-gold transition-colors" />
                    </div>
                    <h3 className="font-heading text-xl text-white mb-2 group-hover:text-gold transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.a>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                <p>{language === "en" ? "Links coming soon..." : "Liên kết sắp có..."}</p>
              </div>
            )}
          </div>
        </motion.section>

        {/* Other Communities Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 mb-12"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-4">
              <Users className="w-5 h-5 text-gold" />
              <span className="text-gold font-semibold">
                {language === "en" ? "OTHER COMMUNITIES" : "CỘNG ĐỒNG KHÁC"}
              </span>
            </div>
            <h2 className="font-heading text-3xl text-white mb-2">
              {language === "en"
                ? "Other Fan Communities"
                : "Các cộng đồng fan khác"}
            </h2>
            <p className="text-gray-400">
              {language === "en"
                ? "More Gen.G fan spaces managed by the community"
                : "Các không gian fan Gen.G do cộng đồng quản lý"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {otherCommunities.length > 0 ? (
              otherCommunities.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="card-dark group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                        <Facebook className="w-6 h-6 text-blue-400" />
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 ml-auto group-hover:text-gold transition-colors" />
                    </div>
                    <h3 className="font-heading text-xl text-white mb-2 group-hover:text-gold transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.a>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                <p>{language === "en" ? "Links coming soon..." : "Liên kết sắp có..."}</p>
              </div>
            )}
          </div>
        </motion.section>

        {/* Official Merchandise Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-4">
              <ShoppingBag className="w-5 h-5 text-gold" />
              <span className="text-gold font-semibold">
                {language === "en" ? "OFFICIAL MERCHANDISE" : "MERCH CHÍNH HÃNG"}
              </span>
            </div>
            <h2 className="font-heading text-3xl text-white mb-2">
              {language === "en"
                ? "Official Gen.G Stores"
                : "Cửa Hàng Chính Hãng Gen.G"}
            </h2>
            <p className="text-gray-400">
              {language === "en"
                ? "Purchase official Gen.G merchandise and support the team"
                : "Mua merch chính hãng Gen.G và hỗ trợ đội tuyển"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {officialMerch.length > 0 ? (
              officialMerch.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="card-dark group cursor-pointer relative overflow-hidden border-2 border-gold/20 group-hover:border-gold/50 transition-colors"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                        <ShoppingBag className="w-6 h-6 text-gold" />
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 ml-auto group-hover:text-gold transition-colors" />
                    </div>
                    <h3 className="font-heading text-xl text-white mb-2 group-hover:text-gold transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.a>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                <p>{language === "en" ? "Links coming soon..." : "Liên kết sắp có..."}</p>
              </div>
            )}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

