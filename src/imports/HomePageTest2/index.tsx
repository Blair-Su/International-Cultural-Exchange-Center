import { useEffect, useState } from "react";
import { motion } from "motion/react";
import type { Page } from "@/app/types";
import { ICECTopBar, ICECHeader } from "@/app/components/ICECHeader";
import { LANGUAGE_CHANGE_EVENT, type SiteLanguage, getStoredLanguage } from "@/app/siteLanguage";
import svgPaths from "./svg-z0k97qbfpt";
import img03F1C4567E16004E5A226E0Cebd401381 from "./9a32cb53e8ee3e3e85dd9018419462440e69c3d4.webp";
import imgMainImage from "./ceb876732bfd8fcca9b7b275f4d75dc7b9bbfba9.webp";
import imgCollageImage1 from "./c8fa7c3c4ff319ad9467365787c2806761d48ba3.webp";
import imgCollageImage2 from "./840beff7b23fbd7ada94e7e21afb82c1c2895632.webp";
import imgCollageImage3 from "./ed925e7b9deb5bcb5a613151266e1ffb1bf8956b.webp";
import imgImage from "./f636714e4e3fa3e076d3d3b2e74713a01c278b96.webp";
import imgImage1 from "./7df684caa4bc71ee78044bc4729cc6d28122e41d.webp";
import imgImage2 from "./60fb78d567502a83f16f388bb9e32fe6d1d345a7.webp";
import imgImage3 from "./flower-festival-home-poster.webp";
import imgImage4 from "./bf3af3af0d733be80f23eb35aa412a0022686c3a.webp";
import imgImg2 from "./c507a2e479de17b67be9b9b85f4145d8f0f9fbf8.webp";
import imgImg3 from "./e7efc3c8a46ab42f918e062007984bf85e22cb9e.webp";
import imgImg1 from "./2ad461458467477f417e397896b024f213707698.webp";
import imgImg4 from "./bf548cb711af21bde04a7e439ca04075ba148b2a.webp";
import imgImg5 from "./702f9592c5038ef2a394c3e9e8470c440724b362.webp";
import imgImg6 from "./a3fc6fe1136c26b9b0f389e8e744e75113355e3a.webp";
import imgImg7 from "./cdd37f2e2310a3125c4a6335dd21aa109c9b5925.webp";
import imgImg8 from "./385fdcf9699d64c97679669a95bc5856b7bd6052.webp";
import imgImg9 from "./6e73769b31a32912a503b507f5117f079adfbcf9.webp";
import imgImg10 from "./3e3411deea6a03e15090ace674f9b2cdf5248c1c.webp";
import imgIcecCtaRightPhotoCrop1 from "./2a3414d693c93e996199ac6511ece760e2e0550e.webp";
import imgWeChatQrImage from "./3484b245a1dff2b03b62d31a87de268183d390c4.webp";
import imgFestival from "@/imports/Festival.webp";
import imgProgram from "@/imports/Program.webp";
import imgLogoNobg from "@/imports/Frame_427319345.webp";

// ── icon helpers ─────────────────────────────────────────────────

function useSiteLanguage() {
  const [language, setLanguage] = useState<SiteLanguage>(getStoredLanguage);

  useEffect(() => {
    const onLanguageChange = (event: Event) => {
      const nextLanguage = (event as CustomEvent<SiteLanguage>).detail;
      if (nextLanguage) setLanguage(nextLanguage);
    };

    window.addEventListener(LANGUAGE_CHANGE_EVENT, onLanguageChange);
    return () => window.removeEventListener(LANGUAGE_CHANGE_EVENT, onLanguageChange);
  }, []);

  return language;
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" className="shrink-0 mt-[1px]">
      <path d={svgPaths.pb60700} stroke="rgba(0,0,0,0.55)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M11 5V11L15 13" stroke="rgba(0,0,0,0.55)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[1px]">
      <path d={svgPaths.pf087300} stroke="rgba(0,0,0,0.55)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p2d59bff0} stroke="rgba(0,0,0,0.55)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path d={svgPaths.p32f12c00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M16 2V6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M8 2V6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M3 10H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path d={svgPaths.p3ee62280} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path d="M20 12V22H4V12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M22 7H2V12H22V7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 22V7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p22b4c780} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p2fc89700} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path d={svgPaths.p33705900} stroke="#E48D62" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p161d4800} stroke="#E48D62" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p2b304d00} stroke="#E48D62" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p13e20900} stroke="#E48D62" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

// ── Hero ─────────────────────────────────────────────────────────

function HeroSection({ onNavigate, isSimplified }: { onNavigate: (page: Page) => void; isSimplified: boolean }) {
  return (
    <section className="w-full bg-[#f8f7f5] py-10 md:py-14 lg:py-16 z-[4]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[96px]">
        {/* Text */}
        <div className="flex flex-col gap-7 lg:gap-9 w-full lg:w-[480px] lg:shrink-0">
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[34px] sm:text-[40px] lg:text-[48px] text-black tracking-[-0.96px] leading-[1.2]">
            International Cultural Exchange Center
          </h1>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] lg:text-[21px] text-[rgba(0,0,0,0.68)] leading-[1.5]">
            {isSimplified ? (
              <>
                扎根华夏文明，连接世界文化。<br />
                在交流中终身学习，在理解中共同成长。
              </>
            ) : (
              "Bringing people together through cultural heritage, shared experiences, and lifelong learning."
            )}
          </p>
          <div className="flex flex-wrap gap-3 lg:gap-[18px]">
            <button onClick={() => onNavigate("events")} className="icec-blue-gradient-button flex h-[46px] lg:h-[50px] items-center px-5 rounded-[4px] cursor-pointer transition-colors">
              <span className="font-['Inter:Medium',sans-serif] font-medium text-white text-[15px] lg:text-[18px] whitespace-nowrap">{isSimplified ? "发现活动" : "Explore Events"} →</span>
            </button>
            <button onClick={() => document.getElementById("our-work")?.scrollIntoView({ behavior: "smooth" })} className="icec-orange-gradient-button flex h-[46px] lg:h-[50px] items-center px-5 rounded-[4px] cursor-pointer transition-colors">
              <span className="font-['Inter:Medium',sans-serif] font-medium text-white text-[15px] lg:text-[18px] whitespace-nowrap">{isSimplified ? "探索项目" : "Our Programs"} →</span>
            </button>
          </div>
        </div>
        {/* Main image */}
        <div className="w-full lg:flex-1 h-[240px] sm:h-[340px] md:h-[420px] lg:h-[560px] rounded-[12px] overflow-hidden">
          <img src={imgMainImage} alt="Cultural Exchange event" className="w-full h-full object-cover" />
        </div>
      </div>
      </div>
    </section>
  );
}

// ── About Us ─────────────────────────────────────────────────────

function AboutUsSection({ onNavigate, isSimplified }: { onNavigate?: (page: Page) => void; isSimplified: boolean }) {
  return (
    <section className="bg-[#f8f7f5] w-full py-14 lg:py-[72px] z-[3]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-[96px]">
        {/* Text */}
        <div className="flex flex-col gap-8 w-full lg:w-[480px] lg:shrink-0">
          <div>
            <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#E48D62] tracking-[-0.48px] leading-[1.45]">
              {isSimplified ? "一点关于我们" : "About Us"}
            </h5>
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[48px] text-black tracking-[-0.48px] leading-[1.25] mt-1">
              {isSimplified ? "走近 ICEC" : "International Cultural Exchange Center"}
            </h2>
          </div>
          <div className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[18px] text-[rgba(0,0,0,0.8)] leading-[1.4] flex flex-col gap-4">
            {isSimplified ? (
              <p>
                文化，<br />
                连接历史，<br />
                也连接人与人。<br />
                以华夏文明为起点，<br />
                不同文化背景的人们在这里相遇、交流、学习与分享。<br />
                通过文化、艺术、教育与社区活动，<br />
                让每一次体验，<br />
                都带来新的理解。<br />
                文化可以不同。<br />
                理解可以相通。
              </p>
            ) : (
              <>
                <p>At the International Cultural Exchange Center (ICEC), we believe culture has the power to connect people across generations and communities.</p>
                <p>Through scholarships, performances, exhibitions, and educational programs, we create opportunities for emerging artists to grow while making cultural experiences more accessible to everyone.</p>
                <p>Our mission is to nurture talent, celebrate cultural heritage, and inspire meaningful connections through the arts.</p>
              </>
            )}
          </div>
          <button onClick={() => onNavigate?.("about")} className="icec-orange-gradient-button flex h-[46px] lg:h-[50px] items-center px-5 rounded-[4px] self-start cursor-pointer transition-colors">
            <span className="font-['Inter:Medium',sans-serif] font-medium text-white text-[15px] lg:text-[18px] whitespace-nowrap">{isSimplified ? "我们的故事" : "Read our Story"}</span>
          </button>
        </div>

        {/* Collage — desktop staggered, mobile simple grid */}
        <div className="w-full lg:flex-1 lg:min-w-0">
          {/* Desktop */}
          <div className="hidden lg:block relative w-full h-[580px]">
            <div className="absolute top-0 left-0 w-[60.3%] h-[420px] overflow-hidden rounded-[12px]">
              <img src={imgCollageImage1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-[90px] left-[64.7%] w-[35.3%] h-[280px] overflow-hidden rounded-[12px]">
              <img src={imgCollageImage2} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-[450px] left-0 w-full h-[130px] overflow-hidden rounded-[12px]">
              <img src={imgCollageImage3} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Mobile / iPad */}
          <div className="lg:hidden grid grid-cols-2 gap-3">
            <img src={imgCollageImage1} alt="" className="w-full h-[180px] sm:h-[220px] object-cover rounded-[12px]" />
            <img src={imgCollageImage2} alt="" className="w-full h-[180px] sm:h-[220px] object-cover rounded-[12px]" />
            <img src={imgCollageImage3} alt="" className="col-span-2 w-full h-[120px] sm:h-[140px] object-cover rounded-[12px]" />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

// ── What We Do ───────────────────────────────────────────────────

function WhatWeDoSection({ onNavigate, isSimplified }: { onNavigate: (page: Page) => void; isSimplified: boolean }) {
  const cards = [
    {
      img: imgFestival,
      title: isSimplified ? "体验活动" : "Events",
      desc: isSimplified ? "中华民族传统节庆的现代演绎。华夏非遗走进社区的文化体验。" : "Celebrate cultural traditions through festivals, performances, and community events that bring people together.",
      linkColor: "#E48D62",
      onClick: () => onNavigate("events"),
    },
    {
      img: imgProgram,
      title: isSimplified ? "参与课程" : "Classes",
      desc: isSimplified ? "为不同年龄设计的沉浸式文化课程。" : "Discover workshops, educational programs, and hands-on cultural experiences designed for all ages.",
      linkColor: "#3DB0D3",
      onClick: () => onNavigate("classes"),
    },
    {
      img: imgImage2,
      title: isSimplified ? "支持捐赠" : "Donation",
      desc: isSimplified ? "支持ICEC，持续推动文化交流，让更多人走近文化、感受文化。" : "Help preserve cultural heritage and create more opportunities for communities to learn, connect, and celebrate together.",
      linkColor: "#E48D62",
      onClick: () => onNavigate("donate"),
    },
  ];

  return (
    <section id="our-work" className="bg-[#f8f7f5] w-full py-14 lg:py-[72px] z-[2]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-10 lg:mb-[72px]">
          <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#3DB0D3] tracking-[-0.48px] leading-[1.45]">
            {isSimplified ? "我们的实践" : "Our Work"}
          </h5>
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[48px] text-black tracking-[-0.96px] leading-[1.45] mt-1">
            {isSimplified ? "让文化走进生活" : "How We Bring Culture to Life"}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <article
              key={card.title}
              className="bg-white rounded-[16px] overflow-hidden border border-[rgba(0,0,0,0.1)] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)] flex flex-col"
            >
              <div className="h-[200px] sm:h-[220px] lg:h-[240px] overflow-hidden shrink-0">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] lg:text-[24px] text-black tracking-[-0.48px] leading-[1.45]">
                  {card.title}
                </h5>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[18px] text-[rgba(0,0,0,0.55)] leading-[1.4]">
                  {card.desc}
                </p>
                {card.onClick ? (
                  <p
                    onClick={card.onClick}
                    className="font-['Inter:Medium',sans-serif] font-medium text-[15px] lg:text-[18px] leading-[1.4] mt-auto cursor-pointer hover:opacity-75 transition-opacity"
                    style={{ color: card.linkColor }}
                  >
                    {isSimplified ? "了解更多" : "Learn More"} →
                  </p>
                ) : (
                  <p
                    className="font-['Inter:Medium',sans-serif] font-medium text-[15px] lg:text-[18px] leading-[1.4] mt-auto"
                    style={{ color: card.linkColor }}
                  >
                    {isSimplified ? "了解更多" : "Learn More"} →
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Events ───────────────────────────────────────────────────────

function EventMeta({ date, coming }: { date: string; coming: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start gap-3">
        <ClockIcon />
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] lg:text-[18px] text-[rgba(0,0,0,0.55)] leading-[1.45]">
          {date}
        </p>
      </div>
      <div className="flex items-start gap-3">
        <PinIcon />
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] lg:text-[18px] text-[rgba(0,0,0,0.55)] leading-[1.45]">
          {coming}
        </p>
      </div>
    </div>
  );
}

function EventsSection({ onNavigate, isSimplified }: { onNavigate: (page: Page) => void; isSimplified: boolean }) {
  return (
    <section className="bg-[#f8f7f5] w-full pt-12 pb-6 lg:pt-[72px] lg:pb-0 z-[1]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-4 lg:mb-2">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[48px] text-black tracking-[-0.96px] leading-[1.45]">
            {isSimplified ? "让我们相约" : "Upcoming Events"}
          </h2>
        </div>

        {/* Flower Festival */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[96px] py-10 lg:py-[72px]">
          <div className="flex flex-col gap-8 w-full lg:w-[480px] lg:shrink-0">
            <div className="flex flex-col gap-4">
              <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[26px] sm:text-[30px] lg:text-[36px] text-black tracking-[-0.72px] leading-[1.45]">
                {isSimplified ? "花朝节" : "Flower Festival"}
              </h3>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] lg:text-[18px] text-[rgba(0,0,0,0.55)] leading-[1.45]">
                {isSimplified ? "通过中华传统艺术、表演与社区庆典迎接春天。欢迎大家加入这场适合各年龄段的沉浸式文化体验。" : "Celebrate spring through traditional Chinese arts, performances, and community celebration. Join us for an immersive cultural experience for all ages."}
              </p>
              <EventMeta date={isSimplified ? "2027年四月" : "Apr, 2027"} coming={isSimplified ? "地点详情即将公布" : "Location Details Coming Soon"} />
            </div>
            <button onClick={() => onNavigate("flower-festival")} className="icec-blue-gradient-button flex h-[46px] lg:h-[50px] items-center px-5 rounded-[4px] self-start cursor-pointer transition-colors">
              <span className="font-['Inter:Medium',sans-serif] font-medium text-white text-[15px] lg:text-[18px] whitespace-nowrap">{isSimplified ? "了解详情" : "View Details"} →</span>
            </button>
          </div>
          <div className="w-full lg:flex-1 h-[220px] sm:h-[300px] lg:h-[432px] rounded-[16px] overflow-hidden">
            <img src={imgImage3} alt="Flower Festival" className="w-full h-full object-cover object-[42%_center]" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Gallery ──────────────────────────────────────────────────────

function GallerySection({ onNavigate, isSimplified }: { onNavigate: (page: Page) => void; isSimplified: boolean }) {
  const imgs = [imgImg2, imgImg3, imgImg1, imgImg4, imgImg5, imgImg6, imgImg7, imgImg8, imgImg9, imgImg10];

  return (
    <section className="bg-[#f8f7f5] w-full pt-14 pb-16 lg:pt-[72px] lg:pb-[72px]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[48px] text-black tracking-[-0.96px] leading-[1.45] text-center mb-10 lg:mb-[72px]">
          {isSimplified ? "相遇瞬间" : "Events Gallery"}
        </h2>
      </div>
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-[60px] items-center"
            animate={{ x: [0, -2692] }}
            transition={{ duration: 12, ease: "linear", repeat: Infinity }}
            style={{ willChange: "transform" }}
          >
            {imgs.map((src, i) => (
              <div key={i} className="relative shrink-0 size-[280px] sm:size-[310px] lg:size-[340px]">
                <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center mt-10 lg:mt-[72px]">
        <button onClick={() => onNavigate("events-gallery")} className="icec-blue-gradient-button flex h-[46px] lg:h-[50px] items-center px-5 rounded-[4px] cursor-pointer transition-colors">
          <span className="font-['Inter:Medium',sans-serif] font-medium text-white text-[15px] lg:text-[18px] whitespace-nowrap">{isSimplified ? "更多精彩" : "View More"} →</span>
        </button>
      </div>
    </section>
  );
}

// ── Get Involved ─────────────────────────────────────────────────

function GetInvolvedSection({ onNavigate, isSimplified }: { onNavigate: (page: Page) => void; isSimplified: boolean }) {
  return (
    <section className="bg-[#f8f7f5] w-full py-14 lg:py-[72px]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[96px]">
        <div className="flex flex-col gap-9 w-full lg:w-[478px] lg:shrink-0">
          <div className="flex flex-col gap-4">
            <div>
              <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#3DB0D3] tracking-[-0.48px] leading-[1.45]">
                {isSimplified ? "支持我们" : "Support Us"}
              </h5>
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[48px] text-black tracking-[-0.96px] leading-[1.25] mt-1">
                {isSimplified ? "让文化生生不息" : "Help Keep Culture Alive"}
              </h2>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[18px] text-[rgba(38,33,29,0.76)] leading-[1.55]">
              {isSimplified ? (
                <>
                  参与 ICEC。<br />
                  无论来自哪里。<br />
                  无论拥有怎样的文化背景。<br />
                  这里，<br />
                  都有属于你的位置。<br />
                  邀请你和我们一起，<br />
                  相遇、学习、理解。
                </>
              ) : (
                "Every event, performance, and program is made possible by people who believe in the value of cultural exchange. Whether you volunteer, attend an event, or make a donation, your support helps preserve traditions and bring communities closer together."
              )}
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap gap-3">
              <button onClick={() => onNavigate("events")} className="icec-blue-gradient-button flex gap-2 items-center justify-center px-4 py-3 rounded-[4px] cursor-pointer transition-colors text-white">
                <CalendarIcon />
                <span className="font-['Inter:Medium',sans-serif] font-medium text-white text-[15px] lg:text-[18px] whitespace-nowrap">{isSimplified ? "参加活动" : "Attend an Event"}</span>
              </button>
              <button onClick={() => onNavigate("volunteer")} className="icec-blue-gradient-button flex gap-2 items-center justify-center px-4 py-3 rounded-[4px] cursor-pointer transition-colors text-white">
                <HeartIcon />
                <span className="font-['Inter:Medium',sans-serif] font-medium text-white text-[15px] lg:text-[18px] whitespace-nowrap">{isSimplified ? "成为志愿者" : "Volunteer"}</span>
              </button>
              <button onClick={() => onNavigate("donate")} className="icec-orange-gradient-button flex gap-2 items-center justify-center px-4 py-3 rounded-[4px] cursor-pointer text-white">
                <GiftIcon />
                <span className="font-['Inter:Medium',sans-serif] font-medium text-white text-[15px] lg:text-[18px] whitespace-nowrap">{isSimplified ? "捐款" : "Donate"}</span>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <UsersIcon />
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[15px] lg:text-[18px] bg-clip-text text-transparent bg-gradient-to-r from-[rgba(240,147,69,0.76)] to-[rgba(30,184,231,0.76)]">
                {isSimplified ? "“让文化，因你我而生生不息。”" : "Together, we keep culture alive."}
              </p>
            </div>
          </div>
        </div>
        {/* CTA image — hidden on mobile/iPad */}
        <div className="hidden lg:block lg:flex-1 h-[500px] xl:h-[580px] overflow-hidden rounded-[8px]">
          <img src={imgIcecCtaRightPhotoCrop1} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      </div>
    </section>
  );
}

// ── Footer ───────────────────────────────────────────────────────

const SOCIAL_LINKS: Record<string, string> = {
  TikTok: "https://www.tiktok.com/@icec_nyc?is_from_webapp=1&sender_device=pc",
  Instagram: "https://www.instagram.com/icec.nyc/",
  Facebook: "https://www.facebook.com/profile.php?id=100080679697204",
  Youtube: "https://www.youtube.com/@internationculturalexchang5195",
  RedNote: "https://xhslink.com/m/3eY9zNarCmq",
};

function FooterSection({ onNavigate, isSimplified }: { onNavigate?: (page: Page) => void; isSimplified: boolean }) {
  const quickLinks = isSimplified
    ? [
        { label: "关于我们", page: "about" as const },
        { label: "社区活动", page: "events" as const },
        { label: "文化课程", page: "classes" as const },
        { label: "艺术基金", page: "artfoundation" as const },
        { label: "志愿服务", page: "volunteer" as const },
        { label: "捐款支持", page: "donate" as const },
        { label: "联系我们", page: "contact" as const },
      ]
    : [
        { label: "About", page: "about" as const },
        { label: "Events", page: "events" as const },
        { label: "Classes", page: "classes" as const },
        { label: "Art Foundation", page: "artfoundation" as const },
        { label: "Volunteer", page: "volunteer" as const },
        { label: "Contact", page: "contact" as const },
      ];

  return (
    <footer className="bg-[#f5f0eb] w-full pt-12 pb-8">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src={imgLogoNobg} alt="ICEC logo" className="shrink-0 size-[48px] object-contain" />
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-black leading-[1.3] max-w-[200px]">
              International Cultural Exchange Center
            </p>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.5]">
            {isSimplified ? (
              "让文化，因你我而生生不息。"
            ) : (
              <>
                Preserving cultural heritage,<br />strengthening communities, and<br />inspiring future generations.
              </>
            )}
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">{isSimplified ? "链接" : "Quick Links"}</p>
          {quickLinks.map((link) => (
            <p
              key={link.label}
              onClick={() => onNavigate?.(link.page)}
              className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] cursor-pointer hover:text-[#3DB0D3] transition-colors"
            >
              {link.label}
            </p>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">{isSimplified ? "联系我们" : "Contact"}</p>
          <a href="mailto:event@icecnyc.org" className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] hover:text-[#E48D62] transition-colors no-underline">{isSimplified ? "电子邮箱：" : ""}event@icecnyc.org</a>
          <a href="tel:+13475643593" className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] hover:text-[#E48D62] transition-colors no-underline">{isSimplified ? "电话：" : ""}+1 (347) 564-3593</a>
          <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=gh_898ffa8e98be==&scene=110" target="_blank" rel="noopener noreferrer" className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] hover:text-[#E48D62] transition-colors no-underline">{isSimplified ? "微信：" : "WeChat: "}NY国潮君</a>
          {/* WeChat QR below WeChat handle */}
          <div className="flex items-center gap-4 mt-1">
            <div className="relative rounded-[4px] size-[72px] overflow-hidden shrink-0">
              <img src={imgWeChatQrImage} alt="WeChat QR" className="w-full h-full object-cover" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[rgba(0,0,0,0.68)] leading-[1.4]">{isSimplified ? "微信二维码" : "Follow us on WeChat!"}</p>
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-3">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">{isSimplified ? "社交媒体" : "Social"}</p>
          {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer"
              className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] cursor-pointer hover:text-[#3DB0D3] transition-colors no-underline">
              {name}
            </a>
          ))}
        </div>      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(0,0,0,0.1)] mt-10 pt-6 text-center">
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[rgba(0,0,0,0.4)]">
          © 2026 International Cultural Exchange Center. All rights reserved.
        </p>
      </div>
      </div>
    </footer>
  );
}

// ── Export ───────────────────────────────────────────────────────

interface HomePageProps {
  onNavigate?: (page: Page) => void;
}

export default function HomePageTest({ onNavigate = () => {} }: HomePageProps) {
  const language = useSiteLanguage();
  const isSimplified = language === "简体中文";

  return (
    <div className="bg-[#f8f7f5] flex flex-col w-full">
      <ICECHeader onNavigate={onNavigate} activePage="home" />
      <div className="flex flex-col w-full overflow-x-hidden">
        <HeroSection onNavigate={onNavigate} isSimplified={isSimplified} />
        <AboutUsSection onNavigate={onNavigate} isSimplified={isSimplified} />
        <WhatWeDoSection onNavigate={onNavigate} isSimplified={isSimplified} />
        <EventsSection onNavigate={onNavigate} isSimplified={isSimplified} />
        <GallerySection onNavigate={onNavigate} isSimplified={isSimplified} />
        <GetInvolvedSection onNavigate={onNavigate} isSimplified={isSimplified} />
        <FooterSection onNavigate={onNavigate} isSimplified={isSimplified} />
      </div>
    </div>
  );
}
