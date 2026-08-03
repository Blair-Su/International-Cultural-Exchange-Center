import { useEffect, useState } from "react";
import type { Page } from "./types";
import { ICECHeader } from "./components/ICECHeader";
import { ICECFooter } from "./components/ICECFooter";
import { LANGUAGE_CHANGE_EVENT, type SiteLanguage, getStoredLanguage } from "./siteLanguage";
import DanceIcon from "@/imports/Icon/index";
import heroImg   from "@/imports/Art_Foundation___.webp";
import juniorImg from "@/imports/Art_Foundation_Junior_1-1.webp";
import youthImg  from "@/imports/Art_Foundation_Youth_2.webp";
import imgLogoNobg from "@/imports/Frame_427319345.webp";
import imgWeChatQr from "@/imports/HomePageTest2/3484b245a1dff2b03b62d31a87de268183d390c4.webp";

interface Props { onNavigate: (page: Page) => void; }

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

// ── Hero ──────────────────────────────────────────────────────────
function HeroSection({ isSimplified }: { isSimplified: boolean }) {
  return (
    <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[520px] overflow-hidden">
      <img src={heroImg} alt="ICEC Art Foundation" className="absolute inset-0 w-full h-full object-cover object-[center_18%]" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative flex flex-col justify-end h-full max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12 pb-10 sm:pb-14 lg:pb-16">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] sm:text-[20px] lg:text-[24px] text-[#3DB0D3] tracking-[-0.48px] leading-[1.45] mb-2 lg:mb-3">
          {isSimplified ? "体验项目" : "Programs"}
        </p>
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[44px] lg:text-[60px] text-white tracking-[-1.28px] leading-[1.15] max-w-[700px]">
          {isSimplified ? "艺术基金" : "Art Foundation"}
        </h1>
      </div>
    </div>
  );
}

// ── Mission ───────────────────────────────────────────────────────
function MissionSection({ isSimplified }: { isSimplified: boolean }) {
  return (
    <section className="bg-[#f8f7f5] w-full py-14 lg:py-[72px]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-[760px]">
          <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#E48D62] tracking-[-0.48px] leading-[1.45]">
            {isSimplified ? "我们的使命" : "Mission"}
          </h5>
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[44px] text-black tracking-[-0.96px] leading-[1.25] mt-1 mb-6 lg:mb-8">
            {isSimplified ? (
              <>
                支持青年艺术家，<br />
                支持真正有价值的文化创作。
              </>
            ) : (
              "Preserving tradition by investing in young artists."
            )}
          </h2>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[18px] text-[rgba(0,0,0,0.68)] leading-[1.65]">
            {isSimplified ? (
              <>
                通过奖项、资助与公共文化项目，<br />
                让更多优秀作品被看见，<br />
                让更多年轻人与文化相遇。
              </>
            ) : (
              "The ICEC Art Foundation supports emerging artists who create and present work rooted in traditional Chinese culture. Through awards, funding, and public programs, we help cultural traditions reach new generations and broader audiences."
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Award Categories ──────────────────────────────────────────────
const AWARD_CATEGORIES = [
  {
    icon: (
      // Music note icon
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M9 18V5l12-2v13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    category: "Music",
    color: "#E48D62",
    items: ["Traditional-style song creation", "Traditional-style Instrument Performance"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    category: "Visual Arts",
    color: "#3DB0D3",
    items: ["Traditional Painting", "Photography", "Sculpture"],
  },
  {
    icon: <div className="size-7"><DanceIcon /></div>,
    category: "Dance",
    color: "#E48D62",
    items: ["Traditional Dance Performance", "Creative Choreography"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 7h8M8 11h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    category: "Literature",
    color: "#3DB0D3",
    items: ["Poetry Creation", "Prose", "Novels", "Drama Scripts"],
  },
];

function AwardCategoriesSection({ isSimplified }: { isSimplified: boolean }) {
  const awardCategories = isSimplified
    ? AWARD_CATEGORIES.map((category, index) => {
        const translated = [
          { category: "音乐", items: ["歌曲创作", "器乐演奏"] },
          { category: "视觉艺术", items: ["国画", "摄影", "雕塑"] },
          { category: "舞蹈", items: ["传统舞蹈", "原创编舞"] },
          { category: "文学", items: ["诗歌", "散文", "小说", "戏剧"] },
        ][index];
        return { ...category, ...translated };
      })
    : AWARD_CATEGORIES;

  return (
    <section className="bg-[#f8f7f5] w-full py-14 lg:py-[72px] border-t border-[rgba(0,0,0,0.07)]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-10 lg:mb-[56px]">
          <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#3DB0D3] tracking-[-0.48px] leading-[1.45]">
            {isSimplified ? "奖项类别" : "Award Categories"}
          </h5>
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[44px] text-black tracking-[-0.96px] leading-[1.25] mt-1 max-w-[680px] mx-auto">
            {isSimplified ? "不同的艺术表达，共通的传统文化。" : "Celebrating Chinese Art Across Four Fields"}
          </h2>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[17px] text-[rgba(0,0,0,0.55)] leading-[1.6] mt-3 max-w-[540px] mx-auto">
            {isSimplified ? (
              <>
                基金会设立四大奖项类别，<br />
                支持音乐、视觉艺术、舞蹈与文学等不同领域的创作。<br />
                艺术表达可以不同。<br />
                文化始终相通。
              </>
            ) : (
              "The foundation has established four major award categories to cover various fields of traditional Chinese-style art comprehensively."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {awardCategories.map(({ icon, category, color, items }) => (
            <div key={category} className="bg-white rounded-[16px] p-7 lg:p-8 border border-[rgba(0,0,0,0.08)] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-[52px] h-[52px] rounded-[12px] flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}18`, color }}>
                  {icon}
                </div>
                <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[22px] lg:text-[26px] text-black tracking-[-0.52px] leading-[1.2]">
                  {category}
                </h3>
              </div>
              <div className="flex flex-col gap-[10px]">
                {items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-[6px] h-[6px] rounded-full mt-[7px] shrink-0" style={{ backgroundColor: color }} />
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] lg:text-[15px] text-[rgba(0,0,0,0.68)] leading-[1.6]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Award Groups ──────────────────────────────────────────────────
function AwardGroupSection({ isSimplified }: { isSimplified: boolean }) {
  return (
    <section className="bg-[#f8f7f5] w-full py-14 lg:py-[72px] border-t border-[rgba(0,0,0,0.07)]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-10 lg:mb-[56px]">
          <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#E48D62] tracking-[-0.48px] leading-[1.45]">
            {isSimplified ? "参赛组别" : "Award Group"}
          </h5>
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[44px] text-black tracking-[-0.96px] leading-[1.25] mt-1 max-w-[560px]">
            {isSimplified ? "支持不同年龄阶段的青年艺术家" : "Supporting artists at every stage"}
          </h2>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[17px] text-[rgba(0,0,0,0.55)] leading-[1.6] mt-3 max-w-[500px]">
            {isSimplified ? (
              <>
                基金会设立两个参赛组别，<br />
                为不同年龄阶段的青年艺术家提供展示与交流的平台。
              </>
            ) : (
              "To better motivate and support young artists of different age groups, the foundation divides the awards into two groups."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Junior */}
          <div className="rounded-[16px] overflow-hidden bg-white border border-[rgba(0,0,0,0.08)] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] flex flex-col">
            <div className="h-[240px] sm:h-[280px] lg:h-[320px] overflow-hidden">
              <img src={juniorImg} alt="Junior Award Group" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 lg:p-7 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-3 py-[4px] rounded-full text-[12px] font-['Inter:Medium',sans-serif] font-medium bg-[#fef2e5] text-[#E48D62]">{isSimplified ? "未满18岁" : "Under 18"}</span>
                <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] lg:text-[28px] text-black tracking-[-0.56px] leading-[1.2]">{isSimplified ? "青少年组" : "Junior"}</h3>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] lg:text-[16px] text-[rgba(0,0,0,0.6)] leading-[1.6]">
                {isSimplified ? "面向未满18岁的参赛者。" : "For individuals under 18 years old."}
              </p>
            </div>
          </div>

          {/* Youth */}
          <div className="rounded-[16px] overflow-hidden bg-white border border-[rgba(0,0,0,0.08)] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] flex flex-col">
            <div className="h-[240px] sm:h-[280px] lg:h-[320px] overflow-hidden">
              <img src={youthImg} alt="Youth Award Group" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 lg:p-7 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-3 py-[4px] rounded-full text-[12px] font-['Inter:Medium',sans-serif] font-medium bg-[#e5f4fb] text-[#3DB0D3]">{isSimplified ? "18岁以上" : "18 & above"}</span>
                <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] lg:text-[28px] text-black tracking-[-0.56px] leading-[1.2]">{isSimplified ? "青年组" : "Youth"}</h3>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] lg:text-[16px] text-[rgba(0,0,0,0.6)] leading-[1.6]">
                {isSimplified ? "面向18岁及以上的参赛者。" : "For individuals aged 18 and above."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Support ───────────────────────────────────────────────────────
function SupportSection({ isSimplified }: { isSimplified: boolean }) {
  const supportItems = isSimplified
    ? ["艺术家奖项与奖金", "公益项目推广与传播", "基金会日常运营"]
    : [
        "Artist Awards and Prizes",
        "Foundation's Promotional and Advertising Expenses",
        "Daily Operations and Management Costs",
      ];

  return (
    <section className="bg-[#f8f7f5] w-full py-14 lg:py-[72px] border-t border-[rgba(0,0,0,0.07)]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
        <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#3DB0D3] tracking-[-0.48px] leading-[1.45]">
          {isSimplified ? "每一份支持，都是一份不可辜负的信任。" : "How the Foundation Supports Artists"}
        </h5>
        <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[44px] text-black tracking-[-0.96px] leading-[1.25] mt-1 mb-10 lg:mb-[56px]">
          {isSimplified ? "公开&透明" : "Funding and Transparency"}
        </h2>

        <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[16px] text-[rgba(0,0,0,0.55)] mb-8 leading-[1.65]">
          {isSimplified ? (
            <>
              你的支持，<br />
              将帮助更多优秀作品被看见，<br />
              也让文化交流持续发生。<br /><br />
              资金主要用于：
            </>
          ) : (
            "The main use of the funds includes:"
          )}
        </p>
        <div className="flex flex-col gap-3 max-w-[760px]">
          {[
            {
              label: supportItems[0],
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M8 4h8v3.5a4 4 0 0 1-8 0V4Z" stroke="#3DB0D3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 6H5.5A2.5 2.5 0 0 0 8 8.5M16 6h2.5A2.5 2.5 0 0 1 16 8.5M12 12v4M9 20h6M10 16h4" stroke="#3DB0D3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
            {
              label: supportItems[1],
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M4 14h3l8 4V6L7 10H4v4Z" stroke="#3DB0D3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 14l1.4 4H11M18 9.5c.8.6 1.2 1.5 1.2 2.5s-.4 1.9-1.2 2.5" stroke="#3DB0D3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
            {
              label: supportItems[2],
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <rect x="6" y="4" width="12" height="17" rx="2" stroke="#3DB0D3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.5 4.5A2.5 2.5 0 0 1 12 2a2.5 2.5 0 0 1 2.5 2.5V6h-5V4.5Z" stroke="#3DB0D3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.5 11.5l1.4 1.4 3.6-3.8M9.5 17h5" stroke="#3DB0D3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-5 bg-white rounded-[16px] px-5 py-5 border border-[rgba(0,0,0,0.07)] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)]">
              <div className="w-[52px] h-[52px] rounded-[12px] bg-[#e5f4fb] flex items-center justify-center shrink-0">
                {icon}
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[16px] text-[rgba(0,0,0,0.75)] leading-[1.5]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA — same background as About's NextChapterSection ──────────
function CTASection({ onNavigate, isSimplified }: { onNavigate: (page: Page) => void; isSimplified: boolean }) {
  return (
    <section className="bg-[#f8f7f5] w-full py-14 lg:py-[72px] border-t border-[rgba(0,0,0,0.07)]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
        <div
          className="relative flex flex-col items-center gap-8 text-center rounded-[24px] px-8 py-12 lg:px-16 lg:py-16 border border-[rgba(0,0,0,0.06)] overflow-hidden"
          style={{ background: "#f8f7f5" }}
        >
          {/* Orange glow */}
          <div className="absolute pointer-events-none rounded-full blur-[60px] opacity-40 z-0
            w-[200px] h-[200px] top-0 left-0 -translate-x-1/4 -translate-y-1/4
            sm:w-[380px] sm:h-[380px] sm:top-1/2 sm:left-0 sm:-translate-x-1/2 sm:-translate-y-1/2"
            style={{ background: "#E48D62" }} />
          {/* Teal glow */}
          <div className="absolute pointer-events-none rounded-full blur-[60px] opacity-40 z-0
            w-[200px] h-[200px] bottom-0 right-0 translate-x-1/4 translate-y-1/4
            sm:w-[380px] sm:h-[380px] sm:top-1/2 sm:right-0 sm:translate-x-1/2 sm:-translate-y-1/2"
            style={{ background: "#3DB0D3" }} />

          {/* Left rings — desktop */}
          <svg className="absolute pointer-events-none hidden sm:block" aria-hidden
            style={{ left: 0, top: "50%", transform: "translate(-80px, -50%)", width: 1, height: 1, overflow: "visible" }}>
            {[80, 130, 180].map((r) => (
              <circle key={r} cx="0" cy="0" r={r} fill="none" stroke="rgba(240,147,69,0.28)" strokeWidth="1" />
            ))}
            <circle cx={Math.cos((-35 * Math.PI) / 180) * 130} cy={Math.sin((-35 * Math.PI) / 180) * 130} r="4.5" fill="rgba(240,147,69,0.6)" />
          </svg>
          {/* Left rings — mobile */}
          <svg className="absolute pointer-events-none sm:hidden" aria-hidden
            style={{ left: 0, top: 0, transform: "translate(-30px, -30px)", width: 1, height: 1, overflow: "visible" }}>
            {[60, 100, 140].map((r) => (
              <circle key={r} cx="0" cy="0" r={r} fill="none" stroke="rgba(240,147,69,0.28)" strokeWidth="1" />
            ))}
            <circle cx={Math.cos((315 * Math.PI) / 180) * 140} cy={Math.sin((315 * Math.PI) / 180) * 140} r="4" fill="rgba(240,147,69,0.6)" />
            <circle cx={Math.cos((315 * Math.PI) / 180) * 100} cy={Math.sin((315 * Math.PI) / 180) * 100} r="4" fill="rgba(240,147,69,0.6)" />
            <circle cx={Math.cos((49 * Math.PI) / 180) * 100} cy={Math.sin((49 * Math.PI) / 180) * 100} r="4" fill="rgba(240,147,69,0.6)" />
          </svg>

          {/* Right rings — desktop */}
          <svg className="absolute pointer-events-none hidden sm:block" aria-hidden
            style={{ right: 0, top: "50%", transform: "translate(80px, -50%)", width: 1, height: 1, overflow: "visible" }}>
            {[80, 130, 180].map((r) => (
              <circle key={r} cx="0" cy="0" r={r} fill="none" stroke="rgba(30,184,231,0.28)" strokeWidth="1" />
            ))}
            <circle cx={Math.cos((215 * Math.PI) / 180) * 130} cy={Math.sin((215 * Math.PI) / 180) * 130} r="4.5" fill="rgba(30,184,231,0.6)" />
          </svg>
          {/* Right rings — mobile */}
          <svg className="absolute pointer-events-none sm:hidden" aria-hidden
            style={{ right: 0, bottom: 0, transform: "translate(30px, 30px)", width: 1, height: 1, overflow: "visible" }}>
            {[60, 100, 140].map((r) => (
              <circle key={r} cx="0" cy="0" r={r} fill="none" stroke="rgba(30,184,231,0.28)" strokeWidth="1" />
            ))}
            <circle cx={Math.cos((225 * Math.PI) / 180) * 140} cy={Math.sin((225 * Math.PI) / 180) * 140} r="4" fill="rgba(30,184,231,0.6)" />
          </svg>

          <div className="relative z-10 flex flex-col gap-4 max-w-[640px] items-center">
            <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-[#3DB0D3] tracking-[-0.36px]">
              {isSimplified ? "与我们一起" : "Get Involved"}
            </h5>
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[26px] sm:text-[34px] lg:text-[44px] text-black tracking-[-0.88px] leading-[1.2]">
              {isSimplified ? "让文化，因你我而生生不息。" : "Help the Next Generation Carry Tradition Forward"}
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[17px] text-[rgba(0,0,0,0.6)] leading-[1.65] max-w-[500px]">
              {isSimplified ? (
                <>
                  每一次支持，都有意义。<br />
                  无论是捐赠、合作，<br />
                  还是分享与参与，<br />
                  都将帮助更多青年艺术家继续创作，<br />
                  也让文化拥有更多相遇的机会。
                </>
              ) : (
                "Partner with ICEC to create opportunities for young artists and bring Chinese cultural heritage to wider audiences."
              )}
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap justify-center gap-3">
            <button onClick={() => onNavigate("donate")} className="inline-flex items-center h-[46px] lg:h-[52px] px-7 icec-blue-gradient-button rounded-[4px] cursor-pointer transition-colors">
              <span className="font-['Inter:Medium',sans-serif] font-medium text-white text-[15px] lg:text-[18px] whitespace-nowrap">{isSimplified ? "支持捐赠" : "Donate for Us"}</span>
            </button>
            <button onClick={() => onNavigate("contact")} className="inline-flex items-center h-[46px] lg:h-[52px] px-7 icec-orange-gradient-button rounded-[4px] cursor-pointer transition-colors">
              <span className="font-['Inter:Medium',sans-serif] font-medium text-white text-[15px] lg:text-[18px] whitespace-nowrap">{isSimplified ? "联系我们" : "Contact Our Team"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────
const SOCIAL_LINKS: Record<string, string> = {
  TikTok: "https://www.tiktok.com/@icec_nyc?is_from_webapp=1&sender_device=pc",
  Instagram: "https://www.instagram.com/icec.nyc/",
  Facebook: "https://www.facebook.com/profile.php?id=100080679697204",
  Youtube: "https://www.youtube.com/@internationculturalexchang5195",
  RedNote: "https://xhslink.com/m/3eY9zNarCmq",
};

function FooterSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <footer className="bg-[#f5f0eb] w-full pt-12 pb-8">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src={imgLogoNobg} alt="ICEC logo" className="shrink-0 size-[48px] object-contain" />
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-black leading-[1.3] max-w-[200px]">
                International Cultural Exchange Center
              </p>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.5]">
              Preserving cultural heritage,<br />strengthening communities, and<br />inspiring future generations.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">Quick Links</p>
            {(["About", "Events", "Classes", "Art Foundation", "Volunteer", "Donate", "Contact"] as const).map((l) => (
              <p key={l}
                onClick={() => { if (l === "About") onNavigate("about"); else if (l === "Events") onNavigate("events"); else if (l === "Classes") onNavigate("classes"); else if (l === "Art Foundation") onNavigate("artfoundation"); else if (l === "Volunteer") onNavigate("volunteer"); else if (l === "Donate") onNavigate("donate"); else if (l === "Contact") onNavigate("contact"); }}
                className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] cursor-pointer hover:text-[#3DB0D3] transition-colors">
                {l}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">Contact</p>
            <a href="mailto:event@icecnyc.org" className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] hover:text-[#E48D62] transition-colors no-underline">event@icecnyc.org</a>
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
                className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] hover:text-[#3DB0D3] transition-colors no-underline">
                {name}
              </a>
            ))}
          </div>

        </div>
        <div className="border-t border-[rgba(0,0,0,0.1)] mt-10 pt-6 text-center">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[rgba(0,0,0,0.4)]">
            © 2026 International Cultural Exchange Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────
export default function ArtFoundationPage({ onNavigate }: Props) {
  const language = useSiteLanguage();
  const isSimplified = language === "简体中文";

  return (
    <div className="bg-[#f8f7f5] flex flex-col w-full min-h-screen">
      <ICECHeader onNavigate={onNavigate} activePage="artfoundation" />
      <div className="flex flex-col w-full overflow-x-hidden">
        <HeroSection isSimplified={isSimplified} />
        <MissionSection isSimplified={isSimplified} />
        <AwardCategoriesSection isSimplified={isSimplified} />
        <AwardGroupSection isSimplified={isSimplified} />
        <SupportSection isSimplified={isSimplified} />
        <CTASection onNavigate={onNavigate} isSimplified={isSimplified} />
        <ICECFooter onNavigate={onNavigate} />
      </div>
    </div>
  );
}
