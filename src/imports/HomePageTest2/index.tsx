import { motion } from "motion/react";
import type { Page } from "@/app/types";
import { ICECTopBar, ICECHeader } from "@/app/components/ICECHeader";
import svgPaths from "./svg-z0k97qbfpt";
import img03F1C4567E16004E5A226E0Cebd401381 from "./9a32cb53e8ee3e3e85dd9018419462440e69c3d4.png";
import imgMainImage from "./ceb876732bfd8fcca9b7b275f4d75dc7b9bbfba9.png";
import imgCollageImage1 from "./c8fa7c3c4ff319ad9467365787c2806761d48ba3.png";
import imgCollageImage2 from "./840beff7b23fbd7ada94e7e21afb82c1c2895632.png";
import imgCollageImage3 from "./ed925e7b9deb5bcb5a613151266e1ffb1bf8956b.png";
import imgImage from "./f636714e4e3fa3e076d3d3b2e74713a01c278b96.png";
import imgImage1 from "./7df684caa4bc71ee78044bc4729cc6d28122e41d.png";
import imgImage2 from "./60fb78d567502a83f16f388bb9e32fe6d1d345a7.png";
import imgImage3 from "@/imports/Flower_Festival.png";
import imgImage4 from "./bf3af3af0d733be80f23eb35aa412a0022686c3a.png";
import imgImg2 from "./c507a2e479de17b67be9b9b85f4145d8f0f9fbf8.png";
import imgImg3 from "./e7efc3c8a46ab42f918e062007984bf85e22cb9e.png";
import imgImg1 from "./2ad461458467477f417e397896b024f213707698.png";
import imgImg4 from "./bf548cb711af21bde04a7e439ca04075ba148b2a.png";
import imgImg5 from "./702f9592c5038ef2a394c3e9e8470c440724b362.png";
import imgImg6 from "./a3fc6fe1136c26b9b0f389e8e744e75113355e3a.png";
import imgImg7 from "./cdd37f2e2310a3125c4a6335dd21aa109c9b5925.png";
import imgImg8 from "./385fdcf9699d64c97679669a95bc5856b7bd6052.png";
import imgImg9 from "./6e73769b31a32912a503b507f5117f079adfbcf9.png";
import imgImg10 from "./3e3411deea6a03e15090ace674f9b2cdf5248c1c.png";
import imgIcecCtaRightPhotoCrop1 from "./2a3414d693c93e996199ac6511ece760e2e0550e.png";
import imgWeChatQrImage from "./3484b245a1dff2b03b62d31a87de268183d390c4.png";
import imgFestival from "@/imports/Festival.png";
import imgProgram from "@/imports/Program.png";
import imgLogoNobg from "@/imports/Frame_427319345.png";

// ── icon helpers ─────────────────────────────────────────────────

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
      <path d={svgPaths.p32f12c00} stroke="#1EB8E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M16 2V6" stroke="#1EB8E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M8 2V6" stroke="#1EB8E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M3 10H21" stroke="#1EB8E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path d={svgPaths.p3ee62280} stroke="#1EB8E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path d="M20 12V22H4V12" stroke="#F09345" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M22 7H2V12H22V7Z" stroke="#F09345" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 22V7" stroke="#F09345" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p22b4c780} stroke="#F09345" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p2fc89700} stroke="#F09345" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path d={svgPaths.p33705900} stroke="#F09345" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p161d4800} stroke="#F09345" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p2b304d00} stroke="#F09345" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p13e20900} stroke="#F09345" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

// ── Hero ─────────────────────────────────────────────────────────

function HeroSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
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
            Bringing people together through cultural heritage, shared experiences, and lifelong learning.
          </p>
          <div className="flex flex-wrap gap-3 lg:gap-[18px]">
            <button onClick={() => onNavigate("events")} className="bg-[#e5f4fb] flex h-[46px] lg:h-[50px] items-center px-5 rounded-[4px] cursor-pointer hover:bg-[#d0ecf8] transition-colors">
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[#1eb8e7] text-[15px] lg:text-[18px] whitespace-nowrap">Explore Events →</span>
            </button>
            <button onClick={() => document.getElementById("our-work")?.scrollIntoView({ behavior: "smooth" })} className="bg-[#fef2e5] flex h-[46px] lg:h-[50px] items-center px-5 rounded-[4px] cursor-pointer hover:bg-[#fde8d0] transition-colors">
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[#f09345] text-[15px] lg:text-[18px] whitespace-nowrap">Our Programs →</span>
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

function AboutUsSection({ onNavigate }: { onNavigate?: (page: Page) => void }) {
  return (
    <section className="bg-[#f8f7f5] w-full py-14 lg:py-[72px] z-[3]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-[96px]">
        {/* Text */}
        <div className="flex flex-col gap-8 w-full lg:w-[480px] lg:shrink-0">
          <div>
            <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#f09345] tracking-[-0.48px] leading-[1.45]">
              About Us
            </h5>
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[48px] text-black tracking-[-0.48px] leading-[1.25] mt-1">
              International Cultural Exchange Center
            </h2>
          </div>
          <div className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[18px] text-[rgba(0,0,0,0.8)] leading-[1.4] flex flex-col gap-4">
            <p>At the International Cultural Exchange Center (ICEC), we believe culture has the power to connect people across generations and communities.</p>
            <p>Through scholarships, performances, exhibitions, and educational programs, we create opportunities for emerging artists to grow while making cultural experiences more accessible to everyone.</p>
            <p>Our mission is to nurture talent, celebrate cultural heritage, and inspire meaningful connections through the arts.</p>
          </div>
          <button onClick={() => onNavigate?.("about")} className="bg-[#fef2e5] flex h-[46px] lg:h-[50px] items-center px-5 rounded-[4px] self-start cursor-pointer hover:bg-[#fde8d0] transition-colors">
            <span className="font-['Inter:Medium',sans-serif] font-medium text-[#f09345] text-[15px] lg:text-[18px] whitespace-nowrap">Read our Story</span>
          </button>
        </div>

        {/* Collage — desktop staggered, mobile simple grid */}
        <div className="w-full lg:w-auto lg:shrink-0">
          {/* Desktop */}
          <div className="hidden lg:block relative" style={{ width: 680, height: 580 }}>
            <div className="absolute top-0 left-0 w-[410px] h-[420px] overflow-hidden">
              <img src={imgCollageImage1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-[90px] left-[440px] w-[240px] h-[280px] overflow-hidden">
              <img src={imgCollageImage2} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-[450px] left-0 w-full h-[130px] overflow-hidden">
              <img src={imgCollageImage3} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Mobile / iPad */}
          <div className="lg:hidden grid grid-cols-2 gap-3">
            <img src={imgCollageImage1} alt="" className="w-full h-[180px] sm:h-[220px] object-cover rounded-[8px]" />
            <img src={imgCollageImage2} alt="" className="w-full h-[180px] sm:h-[220px] object-cover rounded-[8px]" />
            <img src={imgCollageImage3} alt="" className="col-span-2 w-full h-[120px] sm:h-[140px] object-cover rounded-[8px]" />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

// ── What We Do ───────────────────────────────────────────────────

function WhatWeDoSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const cards = [
    {
      img: imgFestival,
      title: "Events",
      desc: "Celebrate cultural traditions through festivals, performances, and community events that bring people together.",
      linkColor: "#f09345",
      onClick: () => onNavigate("events"),
    },
    {
      img: imgProgram,
      title: "Classes",
      desc: "Discover workshops, educational programs, and hands-on cultural experiences designed for all ages.",
      linkColor: "#1eb8e7",
      onClick: () => onNavigate("classes"),
    },
    {
      img: imgImage2,
      title: "Donation",
      desc: "Help preserve cultural heritage and create more opportunities for communities to learn, connect, and celebrate together.",
      linkColor: "#f09345",
      onClick: undefined,
    },
  ];

  return (
    <section id="our-work" className="bg-[#f8f7f5] w-full py-14 lg:py-[72px] z-[2]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-10 lg:mb-[72px]">
          <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#1eb8e7] tracking-[-0.48px] leading-[1.45]">
            Our Work
          </h5>
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[48px] text-black tracking-[-0.96px] leading-[1.45] mt-1">
            How We Bring Culture to Life
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
                    Learn More →
                  </p>
                ) : (
                  <p
                    className="font-['Inter:Medium',sans-serif] font-medium text-[15px] lg:text-[18px] leading-[1.4] mt-auto"
                    style={{ color: card.linkColor }}
                  >
                    Learn More →
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
          Location Details Coming Soon
        </p>
      </div>
    </div>
  );
}

function EventsSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <section className="bg-[#f8f7f5] w-full py-6 lg:py-0 z-[1]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-4 lg:mb-2">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[48px] text-black tracking-[-0.96px] leading-[1.45]">
            Upcoming Events
          </h2>
        </div>

        {/* Flower Festival */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[96px] py-10 lg:py-[72px]">
          <div className="flex flex-col gap-8 w-full lg:w-[480px] lg:shrink-0">
            <div className="flex flex-col gap-4">
              <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[26px] sm:text-[30px] lg:text-[36px] text-black tracking-[-0.72px] leading-[1.45]">
                Flower Festival
              </h3>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] lg:text-[18px] text-[rgba(0,0,0,0.55)] leading-[1.45]">
                Celebrate spring through traditional Chinese arts, performances, and community celebration. Join us for an immersive cultural experience for all ages.
              </p>
              <EventMeta date="Apr, 2027" coming="Location Details Coming Soon" />
            </div>
            <button onClick={() => onNavigate("flower-festival")} className="bg-[#e5f4fb] flex h-[46px] lg:h-[50px] items-center px-5 rounded-[4px] self-start cursor-pointer hover:bg-[#d0ecf8] transition-colors">
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[#1eb8e7] text-[15px] lg:text-[18px] whitespace-nowrap">View Details →</span>
            </button>
          </div>
          <div className="w-full lg:flex-1 h-[220px] sm:h-[300px] lg:h-[432px] rounded-[16px] overflow-hidden">
            <img src={imgImage3} alt="Flower Festival" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Gallery ──────────────────────────────────────────────────────

function GallerySection({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const imgs = [imgImg2, imgImg3, imgImg1, imgImg4, imgImg5, imgImg6, imgImg7, imgImg8, imgImg9, imgImg10];

  return (
    <section className="bg-[#f8f7f5] w-full pt-14 pb-16 lg:pt-[72px] lg:pb-[72px]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[48px] text-black tracking-[-0.96px] leading-[1.45] text-center mb-10 lg:mb-[72px]">
          Events Gallery
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
        <button onClick={() => onNavigate("events-gallery")} className="bg-[#e5f4fb] flex h-[46px] lg:h-[50px] items-center px-5 rounded-[4px] cursor-pointer hover:bg-[#d0ecf8] transition-colors">
          <span className="font-['Inter:Medium',sans-serif] font-medium text-[#1eb8e7] text-[15px] lg:text-[18px] whitespace-nowrap">View More →</span>
        </button>
      </div>
    </section>
  );
}

// ── Get Involved ─────────────────────────────────────────────────

function GetInvolvedSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <section className="bg-[#f8f7f5] w-full py-14 lg:py-[72px]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[96px]">
        <div className="flex flex-col gap-9 w-full lg:w-[478px] lg:shrink-0">
          <div className="flex flex-col gap-4">
            <div>
              <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#1eb8e7] tracking-[-0.48px] leading-[1.45]">
                Support Us
              </h5>
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[48px] text-black tracking-[-0.96px] leading-[1.25] mt-1">
                Help Keep Culture Alive
              </h2>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[18px] text-[rgba(38,33,29,0.76)] leading-[1.55]">
              Every event, performance, and program is made possible by people who believe in the value of cultural exchange. Whether you volunteer, attend an event, or make a donation, your support helps preserve traditions and bring communities closer together.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap gap-3">
              <button onClick={() => onNavigate("events")} className="flex gap-2 items-center justify-center px-4 py-3 rounded-[4px] border-2 border-[#1eb8e7] cursor-pointer hover:bg-[#e5f4fb] transition-colors">
                <CalendarIcon />
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[#1eb8e7] text-[15px] lg:text-[18px] whitespace-nowrap">Attend an Event</span>
              </button>
              <button onClick={() => onNavigate("volunteer")} className="bg-[#e5f4fb] flex gap-2 items-center justify-center px-4 py-3 rounded-[4px] cursor-pointer hover:bg-[#d0ecf8] transition-colors">
                <HeartIcon />
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[#1eb8e7] text-[15px] lg:text-[18px] whitespace-nowrap">Volunteer</span>
              </button>
              <button className="bg-[#fef2e5] flex gap-2 items-center justify-center px-4 py-3 rounded-[4px] cursor-pointer">
                <GiftIcon />
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[#f09345] text-[15px] lg:text-[18px] whitespace-nowrap">Donate</span>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <UsersIcon />
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[15px] lg:text-[18px] bg-clip-text text-transparent bg-gradient-to-r from-[rgba(240,147,69,0.76)] to-[rgba(30,184,231,0.76)]">
                Together, we keep culture alive.
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

function FooterSection({ onNavigate }: { onNavigate?: (page: Page) => void }) {
  return (
    <footer className="bg-[#f5f0eb] w-full pt-12 pb-8">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src={imgLogoNobg} alt="ICEC logo" className="shrink-0 size-[48px] object-contain" />
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-black leading-[1.3] max-w-[200px]">
              International Cultural Exchange Center
            </p>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.5]">
            Preserving cultural heritage, strengthening communities, and inspiring future generations.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">Quick Links</p>
          {["About", "Events", "Classes", "Art Foundation", "Volunteer", "Contact"].map((l) => (
            <p
              key={l}
              onClick={() => l === "About" ? onNavigate?.("about") : l === "Events" ? onNavigate?.("events") : l === "Classes" ? onNavigate?.("classes") : l === "Art Foundation" ? onNavigate?.("artfoundation") : l === "Volunteer" ? onNavigate?.("volunteer") : l === "Contact" ? onNavigate?.("contact") : undefined}
              className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] cursor-pointer hover:text-[#f09345] transition-colors"
            >
              {l}
            </p>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">Contact</p>
          <a href="mailto:icecnyc@gmail.com" className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] hover:text-[#f09345] transition-colors no-underline">icecnyc@gmail.com</a>
          <a href="tel:+13475643593" className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] hover:text-[#f09345] transition-colors no-underline">+1(347) 564-3593</a>
          <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=gh_898ffa8e98be==&scene=110" target="_blank" rel="noopener noreferrer" className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] hover:text-[#f09345] transition-colors no-underline">WeChat: NY国潮君</a>
          {/* WeChat QR below WeChat handle */}
          <div className="flex items-center gap-4 mt-1">
            <div className="relative rounded-[4px] size-[72px] overflow-hidden shrink-0">
              <img src={imgWeChatQrImage} alt="WeChat QR" className="w-full h-full object-cover" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[rgba(0,0,0,0.68)] leading-[1.4]">Follow us on WeChat!</p>
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-3">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">Social</p>
          {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer"
              className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] cursor-pointer hover:text-[#1eb8e7] transition-colors no-underline">
              {name}
            </a>
          ))}
        </div>

        {/* Stay Connected */}
        <div className="flex flex-col gap-3">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">Stay Connected</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[rgba(0,0,0,0.55)] leading-[1.5]">
            Subscribe for updates on events and programs.
          </p>
          <div className="flex flex-col gap-2 mt-1">
            <input
              type="email"
              placeholder="Email address"
              className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[rgba(0,0,0,0.6)] placeholder:text-[rgba(0,0,0,0.35)] bg-white border border-[rgba(0,0,0,0.18)] rounded-[4px] px-3 h-[36px] w-full outline-none focus:border-[#f09345] transition-colors"
            />
            <button className="bg-[#f09345] flex h-[36px] items-center justify-center rounded-[4px] w-full cursor-pointer hover:bg-[#e0843a] transition-colors">
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-white">Subscribe</span>
            </button>
          </div>
        </div>
      </div>

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
  return (
    <div className="bg-[#f8f7f5] flex flex-col w-full">
      <ICECHeader onNavigate={onNavigate} activePage="home" />
      <div className="flex flex-col w-full overflow-x-hidden">
        <HeroSection onNavigate={onNavigate} />
        <AboutUsSection onNavigate={onNavigate} />
        <WhatWeDoSection onNavigate={onNavigate} />
        <EventsSection onNavigate={onNavigate} />
        <GallerySection onNavigate={onNavigate} />
        <GetInvolvedSection onNavigate={onNavigate} />
        <FooterSection onNavigate={onNavigate} />
      </div>
    </div>
  );
}
