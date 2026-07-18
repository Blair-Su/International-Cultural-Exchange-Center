import { useState, useRef, useEffect } from "react";
import type { Page } from "./types";
import { ICECHeader } from "./components/ICECHeader";
import eventsHeroImg from "@/imports/Events-1.png";
import flowerPosterImg from "@/imports/_____.JPG";
import imgLogoNobg from "@/imports/Frame_427319345.png";
import imgWeChatQr from "@/imports/HomePageTest2/3484b245a1dff2b03b62d31a87de268183d390c4.png";

import g3  from "@/imports/HomePageTest2/60fb78d567502a83f16f388bb9e32fe6d1d345a7.png";
import g4  from "@/imports/HomePageTest2/074cba722191fabf2f00b521be282e9d18bf197f.png";
import g6  from "@/imports/HomePageTest2/702f9592c5038ef2a394c3e9e8470c440724b362.png";
import g7  from "@/imports/HomePageTest2/c507a2e479de17b67be9b9b85f4145d8f0f9fbf8.png";
import g8  from "@/imports/HomePageTest2/385fdcf9699d64c97679669a95bc5856b7bd6052.png";
import g9  from "@/imports/HomePageTest2/6e73769b31a32912a503b507f5117f079adfbcf9.png";
import g10 from "@/imports/HomePageTest2/a3fc6fe1136c26b9b0f389e8e744e75113355e3a.png";
import g11 from "@/imports/HomePageTest2/bf548cb711af21bde04a7e439ca04075ba148b2a.png";
import g12 from "@/imports/HomePageTest2/e7efc3c8a46ab42f918e062007984bf85e22cb9e.png";
import g13 from "@/imports/HomePageTest2/2ad461458467477f417e397896b024f213707698.png";
import g14 from "@/imports/HomePageTest2/cdd37f2e2310a3125c4a6335dd21aa109c9b5925.png";
import g15 from "@/imports/HomePageTest2/3e3411deea6a03e15090ace674f9b2cdf5248c1c.png";
import gNew1 from "@/imports/ab1b2b9f413c35649918af4005736f52.png";
import gNew2 from "@/imports/d01a9115c13d5bf6677652a6e001505d.png";
import gNew3 from "@/imports/Hero_Section.JPG";

interface Props { onNavigate: (page: Page) => void; initialView?: "main" | "detail"; initialSection?: string; }

const SOCIAL_LINKS: Record<string, string> = {
  TikTok: "https://www.tiktok.com/@icec_nyc?is_from_webapp=1&sender_device=pc",
  Instagram: "https://www.instagram.com/icec.nyc/",
  Facebook: "https://www.facebook.com/profile.php?id=100080679697204",
  Youtube: "https://www.youtube.com/@internationculturalexchang5195",
  RedNote: "https://xhslink.com/m/3eY9zNarCmq",
};

const GALLERY_GROUPS = [
  [g7, g8, g9, g10, g11, g12],
  [g3, g4, g6, gNew1, gNew2, gNew3],
  [g13, g14, g15],
];

const MOBILE_GALLERY_GROUPS = [
  [g7, g8, g9, g10],
  [g11, g12, g3, g4],
  [g6, gNew1, gNew2, gNew3],
  [g13, g14, g15],
];

// ── Shared footer ────────────────────────────────────────────────
function FooterSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <footer className="bg-[#f5f0eb] w-full pt-12 pb-8">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">

          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src={imgLogoNobg} alt="ICEC logo" className="shrink-0 size-[48px] object-contain" />
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-black leading-[1.3] max-w-[200px]">International Cultural Exchange Center</p>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.5]">Preserving cultural heritage, strengthening communities, and inspiring future generations.</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">Quick Links</p>
            {(["About", "Events", "Classes", "Art Foundation", "Volunteer", "Donate", "Contact"] as const).map((l) => (
              <p key={l}
                onClick={() => { if (l === "About") onNavigate("about"); else if (l === "Events") onNavigate("events"); else if (l === "Classes") onNavigate("classes"); else if (l === "Art Foundation") onNavigate("artfoundation"); else if (l === "Volunteer") onNavigate("volunteer"); else if (l === "Donate") onNavigate("donate"); else if (l === "Contact") onNavigate("contact"); }}
                className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] cursor-pointer hover:text-[#E48D62] transition-colors">{l}</p>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">Contact</p>
            <a href="mailto:icecnyc@gmail.com" className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] hover:text-[#E48D62] transition-colors no-underline">icecnyc@gmail.com</a>
            <a href="tel:+13475643593" className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] hover:text-[#E48D62] transition-colors no-underline">+1(347) 564-3593</a>
            <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=gh_898ffa8e98be==&scene=110" target="_blank" rel="noopener noreferrer" className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] hover:text-[#E48D62] transition-colors no-underline">WeChat: NY国潮君</a>
            <div className="flex items-center gap-4 mt-1">
              <div className="relative rounded-[4px] size-[72px] overflow-hidden shrink-0">
                <img src={imgWeChatQr} alt="WeChat QR" className="w-full h-full object-cover" />
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[rgba(0,0,0,0.68)] leading-[1.4]">Follow us on WeChat!</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">Social</p>
            {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer"
                className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] hover:text-[#3DB0D3] transition-colors no-underline">{name}</a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">Stay Connected</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[rgba(0,0,0,0.55)] leading-[1.5]">Subscribe for updates on events and programs.</p>
            <div className="flex flex-col gap-2 mt-1">
              <input type="email" placeholder="Email address" className="font-['Inter:Regular',sans-serif] font-normal text-[13px] placeholder:text-[rgba(0,0,0,0.35)] bg-white border border-[rgba(0,0,0,0.18)] rounded-[4px] px-3 h-[36px] w-full outline-none focus:border-[#E48D62] transition-colors" />
              <button className="bg-[#E48D62] flex h-[36px] items-center justify-center rounded-[4px] w-full cursor-pointer hover:bg-[#D87B52] transition-colors">
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-white">Subscribe</span>
              </button>
            </div>
          </div>

        </div>
        <div className="border-t border-[rgba(0,0,0,0.1)] mt-10 pt-6 text-center">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[rgba(0,0,0,0.4)]">© 2026 International Cultural Exchange Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// ── Past Events Carousel ─────────────────────────────────────────
function Carousel({ groups, cols }: { groups: string[][]; cols: string }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number>(0);
  const total = groups.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
  };

  const imgs = groups[current];

  return (
    <div className="flex flex-col gap-6">
      <div className={`grid ${cols} gap-3 lg:gap-4`} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {imgs.map((src, i) => (
          <div key={i} className="rounded-[12px] overflow-hidden">
            <img src={src} alt="" className="w-full h-[160px] sm:h-[200px] lg:h-[220px] object-cover" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4">
        <button onClick={prev} className="flex w-[40px] h-[40px] items-center justify-center rounded-full border border-[rgba(0,0,0,0.15)] hover:bg-white hover:border-[rgba(0,0,0,0.3)] transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="flex items-center gap-2">
          {groups.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${i === current ? "w-6 h-2 bg-[#E48D62]" : "w-2 h-2 bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.4)]"}`} />
          ))}
        </div>
        <button onClick={next} className="flex w-[40px] h-[40px] items-center justify-center rounded-full border border-[rgba(0,0,0,0.15)] hover:bg-white hover:border-[rgba(0,0,0,0.3)] transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}

function PastEventsCarousel() {
  return (
    <>
      {/* Mobile: 4 photos per group in 2-col grid */}
      <div className="sm:hidden">
        <Carousel groups={MOBILE_GALLERY_GROUPS} cols="grid-cols-2" />
      </div>
      {/* Desktop: 6 photos per group in 3-col grid */}
      <div className="hidden sm:block">
        <Carousel groups={GALLERY_GROUPS} cols="grid-cols-3" />
      </div>
    </>
  );
}

// ── Flower Festival Detail ───────────────────────────────────────
function FlowerFestivalDetail({ onBack, onNavigate }: { onBack: () => void; onNavigate: (page: Page) => void }) {
  return (
    <div className="bg-[#f8f7f5] flex flex-col w-full min-h-screen">
      <ICECHeader onNavigate={onNavigate} activePage="events" />
      <div className="flex flex-col w-full overflow-x-hidden">

        {/* Back button */}
        <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12 pt-8 w-full">
          <button onClick={onBack} className="flex items-center gap-2 text-[#3DB0D3] font-['Inter:Medium',sans-serif] font-medium text-[14px] hover:opacity-75 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to Events
          </button>
        </div>

        {/* Main event content */}
        <section className="w-full py-10 lg:py-[56px]">
          <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-[72px] items-start">

              {/* Left — info */}
              <div className="flex flex-col gap-8 w-full lg:flex-1">
                <div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#E48D62] tracking-[-0.32px] leading-[1.45] mb-2">Upcoming Event</p>
                  <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[32px] sm:text-[44px] lg:text-[52px] text-black tracking-[-1.04px] leading-[1.15] mb-3">Flower Festival</h1>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] lg:text-[18px] text-[rgba(0,0,0,0.68)] leading-[1.6]">Celebrate spring through culture, creativity, and community.</p>
                </div>

                {/* Info cards */}
                <div className="flex flex-col gap-3">
                  {[
                    {
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="4" width="18" height="18" rx="2" stroke="#3DB0D3" strokeWidth="1.8"/>
                          <path d="M16 2v4M8 2v4M3 10h18" stroke="#3DB0D3" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                      ),
                      label: "Date", value: "April 2027",
                    },
                    {
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#3DB0D3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="9" r="2.5" stroke="#3DB0D3" strokeWidth="1.8"/>
                        </svg>
                      ),
                      label: "Location", value: "Location to Be Announced",
                    },
                    {
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M2 9V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" stroke="#3DB0D3" strokeWidth="1.8" strokeLinecap="round"/>
                          <path d="M2 9a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0 2-2" stroke="#3DB0D3" strokeWidth="1.8" strokeLinecap="round"/>
                          <path d="M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6" stroke="#3DB0D3" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                      ),
                      label: "Admission", value: "Free",
                    },
                  ].map(({ icon, label, value }) => (
                    <div key={label} className="flex items-center gap-4 bg-white rounded-[12px] px-5 py-4 border border-[rgba(0,0,0,0.08)]">
                      <div className="w-[36px] h-[36px] rounded-[8px] bg-[#e5f4fb] flex items-center justify-center shrink-0">
                        {icon}
                      </div>
                      <div>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[rgba(0,0,0,0.4)] uppercase tracking-[0.6px]">{label}</p>
                        <p className="font-['Inter:Medium',sans-serif] font-medium text-[15px] text-black leading-[1.4]">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* About */}
                <div>
                  <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] lg:text-[24px] text-black tracking-[-0.48px] leading-[1.3] mb-3">About the Event</h2>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[17px] text-[rgba(0,0,0,0.68)] leading-[1.65]">The ICEC Flower Festival brings together traditional Chinese arts, spring celebrations, cultural performances, and interactive community activities. Guests of all ages are invited to experience the beauty of seasonal traditions in a welcoming and engaging setting.</p>
                </div>

                {/* Join */}
                <div className="bg-white rounded-[16px] p-6 border border-[rgba(0,0,0,0.08)]">
                  <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] lg:text-[20px] text-black tracking-[-0.4px] mb-2">Join Us at the Flower Festival</h3>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] lg:text-[16px] text-[rgba(0,0,0,0.6)] leading-[1.6] mb-5">Experience spring through traditional arts, performances, and community celebration. Registration, venue, and schedule details will be announced soon.</p>
                  <div className="inline-flex items-center h-[44px] px-6 bg-[rgba(0,0,0,0.06)] rounded-[4px] cursor-default select-none">
                    <span className="font-['Inter:Medium',sans-serif] font-medium text-[rgba(0,0,0,0.38)] text-[14px] lg:text-[15px] whitespace-nowrap">Registration Coming Soon</span>
                  </div>
                </div>

                {/* Share */}
                <div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[rgba(0,0,0,0.5)] uppercase tracking-[0.6px] mb-3">Share this Event</p>
                  <div className="flex items-center gap-3">
                    <a href="https://www.facebook.com/share_channel/#" target="_blank" rel="noopener noreferrer"
                      className="w-[40px] h-[40px] rounded-full bg-white border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:border-[#1877f2] hover:bg-[#f0f4ff] transition-colors no-underline">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877f2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href="https://x.com/intent/tweet?url=https://www.icecnyc.org/event-details-registration/flower-festival-hua-chao-jie?lang=en&text=Check%20out%20this%20event.%20Hope%20to%20see%20you%20there!" target="_blank" rel="noopener noreferrer"
                      className="w-[40px] h-[40px] rounded-full bg-white border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:border-black hover:bg-gray-50 transition-colors no-underline">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#000"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/feed/?shareActive=true&url=https%3A%2F%2Fwww.icecnyc.org%2Fevent-details-registration%2Fflower-festival-hua-chao-jie%3Flang%3Den&shareUrl=https%3A%2F%2Fwww.icecnyc.org%2Fevent-details-registration%2Fflower-festival-hua-chao-jie%3Flang%3Den&linkOrigin=LI_BADGE" target="_blank" rel="noopener noreferrer"
                      className="w-[40px] h-[40px] rounded-full bg-white border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:border-[#0077b5] hover:bg-[#f0f7ff] transition-colors no-underline">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#0077b5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right — poster */}
              <div className="w-full lg:w-[400px] xl:w-[440px] lg:shrink-0">
                <div className="rounded-[16px] overflow-hidden shadow-[0px_8px_32px_0px_rgba(0,0,0,0.12)]">
                  <img src={flowerPosterImg} alt="Flower Festival poster" className="w-full object-contain" />
                </div>
              </div>

            </div>
          </div>
        </section>

        <FooterSection onNavigate={onNavigate} />
      </div>
    </div>
  );
}

// ── Events Main Page ─────────────────────────────────────────────
function EventsMain({ onNavigate, onViewFlowerFestival }: { onNavigate: (page: Page) => void; onViewFlowerFestival: () => void }) {
  return (
    <div className="bg-[#f8f7f5] flex flex-col w-full min-h-screen">
      <ICECHeader onNavigate={onNavigate} activePage="events" />
      <div className="flex flex-col w-full overflow-x-hidden">

        {/* Hero */}
        <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[480px] overflow-hidden">
          <img src={eventsHeroImg} alt="ICEC Events" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative flex flex-col justify-end h-full max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12 pb-10 sm:pb-14 lg:pb-16">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] sm:text-[20px] lg:text-[24px] text-[#E48D62] tracking-[-0.48px] leading-[1.45] mb-2 lg:mb-3">Programs</p>
            <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[44px] lg:text-[64px] text-white tracking-[-1.28px] leading-[1.2]">Events</h1>
          </div>
        </div>

        {/* Intro */}
        <section className="w-full py-14 lg:py-[72px]">
          <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-[720px]">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[44px] text-black tracking-[-0.96px] leading-[1.25] mb-4">
                Experience Culture.<br />Connect Through Community.
              </h2>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[18px] text-[rgba(0,0,0,0.68)] leading-[1.65] mb-8">Discover upcoming ICEC festivals, performances, workshops, and cultural programs.</p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => document.getElementById("upcoming-events")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center h-[46px] lg:h-[50px] px-6 bg-[#E48D62] rounded-[4px] hover:bg-[#D87B52] transition-colors cursor-pointer">
                  <span className="font-['Inter:Medium',sans-serif] font-medium text-white text-[15px] lg:text-[16px] whitespace-nowrap">Explore Upcoming Events</span>
                </button>
                <button onClick={() => document.getElementById("past-events")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center h-[46px] lg:h-[50px] px-6 bg-[#e5f4fb] rounded-[4px] hover:bg-[#d0ecf8] transition-colors cursor-pointer">
                  <span className="font-['Inter:Medium',sans-serif] font-medium text-white text-[15px] lg:text-[16px] whitespace-nowrap">View Past Events</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Event */}
        <section id="upcoming-events" className="w-full py-14 lg:py-[72px] border-t border-[rgba(0,0,0,0.07)]">
          <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
            <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#3DB0D3] tracking-[-0.48px] leading-[1.45] mb-1">Upcoming Event</h5>
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[32px] lg:text-[40px] text-black tracking-[-0.8px] leading-[1.25] mb-8">{"What's Coming Next"}</h2>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[64px] bg-white rounded-[20px] p-6 lg:p-10 border border-[rgba(0,0,0,0.08)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.05)]">
              {/* Info */}
              <div className="flex flex-col gap-6 w-full lg:flex-1">
                <div>
                  <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] lg:text-[32px] text-black tracking-[-0.64px] leading-[1.2]">Flower Festival</h3>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-[rgba(0,0,0,0.6)]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                    <span className="font-['Inter:Regular',sans-serif] font-normal text-[14px] lg:text-[15px]">April 2027</span>
                  </div>
                  <div className="flex items-center gap-3 text-[rgba(0,0,0,0.6)]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8"/></svg>
                    <span className="font-['Inter:Regular',sans-serif] font-normal text-[14px] lg:text-[15px]">Location Details Coming Soon</span>
                  </div>
                </div>
                <button onClick={onViewFlowerFestival}
                  className="inline-flex items-center gap-2 h-[46px] px-6 bg-[#e5f4fb] rounded-[4px] hover:bg-[#d0ecf8] transition-colors cursor-pointer self-start">
                  <span className="font-['Inter:Medium',sans-serif] font-medium text-[#3DB0D3] text-[15px] whitespace-nowrap">View Details →</span>
                </button>
              </div>
              {/* Poster */}
              <div className="w-full lg:w-[300px] xl:w-[340px] lg:shrink-0 rounded-[12px] overflow-hidden shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)]">
                <img src={flowerPosterImg} alt="Flower Festival poster" className="w-full object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section id="past-events" className="w-full py-14 lg:py-[72px] border-t border-[rgba(0,0,0,0.07)]">
          <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
            <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#3DB0D3] tracking-[-0.48px] leading-[1.45] mb-1">Past Events</h5>
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[32px] lg:text-[40px] text-black tracking-[-0.8px] leading-[1.25] mb-8">Moments We've Shared</h2>
            <PastEventsCarousel />
          </div>
        </section>

        <FooterSection onNavigate={onNavigate} />
      </div>
    </div>
  );
}

// ── Page entry — handles sub-view state ──────────────────────────
export default function EventsPage({ onNavigate, initialView = "main", initialSection }: Props) {
  const [view, setView] = useState<"main" | "detail">(initialView);

  useEffect(() => {
    if (initialSection) {
      setTimeout(() => {
        const el = document.getElementById(initialSection);
        const header = document.querySelector("header") as HTMLElement | null;
        if (el) {
          const headerH = header ? header.offsetHeight : 0;
          const top = el.getBoundingClientRect().top + window.scrollY - headerH;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 50);
    }
  }, [initialSection]);

  if (view === "detail") {
    return <FlowerFestivalDetail onBack={() => setView("main")} onNavigate={onNavigate} />;
  }
  return <EventsMain onNavigate={onNavigate} onViewFlowerFestival={() => setView("detail")} />;
}
