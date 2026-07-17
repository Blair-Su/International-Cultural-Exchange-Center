import image_About_us_3_1 from '@/imports/About_us-3-1.JPG'
import type { Page } from "./types";
import { ICECHeader } from "./components/ICECHeader";
import mainImg     from "@/imports/HomePageTest2/ceb876732bfd8fcca9b7b275f4d75dc7b9bbfba9.png";
import collage1    from "@/imports/HomePageTest2/c8fa7c3c4ff319ad9467365787c2806761d48ba3.png";
import collage2    from "@/imports/HomePageTest2/840beff7b23fbd7ada94e7e21afb82c1c2895632.png";
import collage3    from "@/imports/HomePageTest2/ed925e7b9deb5bcb5a613151266e1ffb1bf8956b.png";
import missionImg  from "@/imports/HomePageTest2/59be390b3a075be5c5d5fb384b41edfba0b518ff.png";
import imgLogoNobg from "@/imports/Frame_427319345.png";
import imgWeChatQr from "@/imports/HomePageTest2/3484b245a1dff2b03b62d31a87de268183d390c4.png";

interface Props {
  onNavigate: (page: Page) => void;
}

// ── About Us (full-bleed hero) ───────────────────────────────────
function AboutUsSection() {
  return (
    <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[480px] overflow-hidden">
      <img src={mainImg} alt="ICEC community gathering" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative flex flex-col justify-end h-full max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12 pb-10 sm:pb-14 lg:pb-16">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] sm:text-[20px] lg:text-[24px] text-[#f09345] tracking-[-0.48px] leading-[1.45] mb-2 lg:mb-3">
          About Us
        </p>
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[44px] lg:text-[64px] text-white tracking-[-1.28px] leading-[1.2] max-w-[700px]">
          International Cultural Exchange Center
        </h1>
      </div>
    </div>
  );
}

// ── Introduction ─────────────────────────────────────────────────
function IntroductionSection() {
  return (
    <section className="bg-[#f8f7f5] w-full py-14 lg:py-[72px]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-[96px]">

          {/* Text */}
          <div className="flex flex-col gap-8 w-full lg:w-[480px] lg:shrink-0 lg:pt-16">
            <div>
              <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#1eb8e7] tracking-[-0.48px] leading-[1.45]">
                Introduction
              </h5>
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[48px] text-black tracking-[-0.48px] leading-[1.25] mt-1">
                Who We Are
              </h2>
            </div>
            <div className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[18px] text-[rgba(0,0,0,0.8)] leading-[1.4] flex flex-col gap-4">
              <p>At the International Cultural Exchange Center (ICEC), we believe culture has the power to connect people across generations and communities.</p>
              <p>Through scholarships, performances, exhibitions, and educational programs, we create opportunities for emerging artists to grow while making cultural experiences more accessible to everyone.</p>
              <p>Our mission is to nurture talent, celebrate cultural heritage, and inspire meaningful connections through the arts.</p>
            </div>
            
          </div>

          {/* Collage — desktop staggered, mobile grid */}
          <div className="w-full lg:w-auto lg:shrink-0">
            <div className="hidden lg:block relative" style={{ width: 680, height: 580 }}>
              <div className="absolute top-0 left-0 w-[410px] h-[420px] overflow-hidden">
                <img src={collage1} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-[90px] left-[440px] w-[240px] h-[280px] overflow-hidden">
                <img src={collage2} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-[450px] left-0 w-full h-[130px] overflow-hidden">
                <img src={collage3} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:hidden grid grid-cols-2 gap-3">
              <img src={collage1} alt="" className="w-full h-[180px] sm:h-[220px] object-cover rounded-[8px]" />
              <img src={collage2} alt="" className="w-full h-[180px] sm:h-[220px] object-cover rounded-[8px]" />
              <img src={collage3} alt="" className="col-span-2 w-full h-[120px] sm:h-[140px] object-cover rounded-[8px]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ── Our Mission ──────────────────────────────────────────────────
function OurMissionSection() {
  return (
    <section className="bg-[#f8f7f5] w-full py-14 lg:py-[72px]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Centered heading */}
        <div className="text-center mb-10 lg:mb-[72px]">
          <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#1eb8e7] tracking-[-0.48px] leading-[1.45]">
            Our Mission
          </h5>
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[48px] text-black tracking-[-0.96px] leading-[1.45] mt-1">
            A World Where Cultures Connect
          </h2>
        </div>

        {/* Text left + image right */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[96px]">

          <div className="flex flex-col gap-8 w-full lg:w-[480px] lg:shrink-0">
            <div className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[18px] text-[rgba(0,0,0,0.68)] leading-[1.55] flex flex-col gap-4">
              <p>
                Founded to foster mutual understanding among people of diverse backgrounds, ICEC believes that direct human connection across cultural boundaries is the most powerful force for peace and cooperation.
              </p>
              <p>
                Our programs reach students, educators, professionals, and artists — creating a growing alumni network committed to intercultural dialogue and community leadership.
              </p>
            </div>

            {/* Pull quote */}
            <div className="flex items-center gap-4">
              <div className="w-[32px] h-[2px] bg-[#f09345] shrink-0" />
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[17px] text-[rgba(0,0,0,0.45)] italic leading-[1.5]">
                "Exchange transforms strangers into neighbors."
              </p>
            </div>

            
          </div>

          {/* Image with floating badge */}
          <div className="relative w-full lg:flex-1 h-[260px] sm:h-[360px] lg:h-[460px] rounded-[16px] overflow-hidden">
            <img src={image_About_us_3_1} alt="ICEC mission" className="w-full h-full object-cover" />
            <div className="absolute bottom-5 left-5 bg-[#f09345] rounded-[12px] px-5 py-4 shadow-lg">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] text-white leading-none">15+</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-white/85 mt-1">Years bridging cultures worldwide</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ── Our Impact ───────────────────────────────────────────────────
const STATS = [
  { number: "15",     suffix: "+", label: "Years of Impact"          },
  { number: "80",     suffix: "+", label: "Events Hosted"             },
  { number: "50",     suffix: "+", label: "Partner Organizations"     },
  { number: "10,000", suffix: "+", label: "Participants Engaged"      },
];

const BARS = [
  { label: "Participants from diverse backgrounds", pct: 90, color: "#f09345" },
  { label: "Would recommend ICEC events to others",   pct: 95, color: "#1eb8e7" },
  { label: "Returning participants and partners",   pct: 70, color: "#c08848" },
];

function OurImpactSection() {
  return (
    <section className="bg-[#f8f7f5] w-full py-14 lg:py-[72px]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">

        <div className="text-center mb-10 lg:mb-[64px]">
          <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#1eb8e7] tracking-[-0.48px] leading-[1.45]">
            Our Impact
          </h5>
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[48px] text-black tracking-[-0.96px] leading-[1.45] mt-1">
            Numbers That Tell Our Story
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[48px] mb-12 lg:mb-[64px]">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 text-center">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[44px] sm:text-[56px] lg:text-[64px] text-[#f09345] tracking-[-1.28px] leading-none">
                {s.number}{s.suffix}
              </p>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] sm:text-[13px] text-[rgba(0,0,0,0.5)] uppercase tracking-[0.08em] leading-[1.4]">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Progress bars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
          {BARS.map((bar) => (
            <div key={bar.label} className="bg-white rounded-[12px] p-5 border border-[rgba(0,0,0,0.08)] flex flex-col">
              <div className="flex justify-between items-start gap-3 mb-3 flex-1 min-h-[56px]">
                <span className="font-['Inter:Regular',sans-serif] font-normal text-[14px] lg:text-[15px] text-[rgba(0,0,0,0.68)] leading-[1.4]">
                  {bar.label}
                </span>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[22px] text-black leading-none shrink-0">
                  {bar.pct}%
                </span>
              </div>
              <div className="h-[5px] bg-[rgba(0,0,0,0.08)] rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${bar.pct}%`, background: bar.color }} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ── Be Part of Our Next Chapter ──────────────────────────────────
function NextChapterSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <section className="bg-[#f8f7f5] w-full py-14 lg:py-[72px]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
        <div
          className="relative flex flex-col items-center gap-8 text-center rounded-[24px] px-8 py-12 lg:px-16 lg:py-16 border border-[rgba(0,0,0,0.06)] overflow-hidden"
          style={{ background: "#f8f7f5" }}
        >
          {/* Orange glow — mobile: top-left, desktop: left-center */}
          <div className="absolute pointer-events-none rounded-full blur-[60px] opacity-40 z-0
            w-[200px] h-[200px] top-0 left-0 -translate-x-1/4 -translate-y-1/4
            sm:w-[380px] sm:h-[380px] sm:top-1/2 sm:left-0 sm:-translate-x-1/2 sm:-translate-y-1/2"
            style={{ background: "#f09345" }} />
          {/* Teal glow — mobile: bottom-right, desktop: right-center */}
          <div className="absolute pointer-events-none rounded-full blur-[60px] opacity-40 z-0
            w-[200px] h-[200px] bottom-0 right-0 translate-x-1/4 translate-y-1/4
            sm:w-[380px] sm:h-[380px] sm:top-1/2 sm:right-0 sm:translate-x-1/2 sm:-translate-y-1/2"
            style={{ background: "#1eb8e7" }} />

          {/* Left concentric rings — desktop: center-left, mobile: top-left */}
          <svg className="absolute pointer-events-none hidden sm:block" aria-hidden
            style={{ left: 0, top: "50%", transform: "translate(-80px, -50%)", width: 1, height: 1, overflow: "visible" }}>
            {[80, 130, 180].map((r) => (
              <circle key={r} cx="0" cy="0" r={r} fill="none" stroke="rgba(240,147,69,0.28)" strokeWidth="1" />
            ))}
            {/* Dot on middle ring (r=130) at -35° — lower-right of left center, inside card */}
            <circle
              cx={Math.cos((-35 * Math.PI) / 180) * 130}
              cy={Math.sin((-35 * Math.PI) / 180) * 130}
              r="4.5"
              fill="rgba(240,147,69,0.6)"
            />
          </svg>
          {/* Left rings mobile — anchored top-left corner */}
          <svg className="absolute pointer-events-none sm:hidden" aria-hidden
            style={{ left: 0, top: 0, transform: "translate(-30px, -30px)", width: 1, height: 1, overflow: "visible" }}>
            {[60, 100, 140].map((r) => (
              <circle key={r} cx="0" cy="0" r={r} fill="none" stroke="rgba(240,147,69,0.28)" strokeWidth="1" />
            ))}
            <circle
              cx={Math.cos((315 * Math.PI) / 180) * 140}
              cy={Math.sin((315 * Math.PI) / 180) * 140}
              r="4"
              fill="rgba(240,147,69,0.6)"
            />
            <circle
              cx={Math.cos((315 * Math.PI) / 180) * 100}
              cy={Math.sin((315 * Math.PI) / 180) * 100}
              r="4"
              fill="rgba(240,147,69,0.6)"
            />
            <circle
              cx={Math.cos((49 * Math.PI) / 180) * 100}
              cy={Math.sin((49 * Math.PI) / 180) * 100}
              r="4"
              fill="rgba(240,147,69,0.6)"
            />
          </svg>

          {/* Right concentric rings — desktop: center-right, mobile: top-right */}
          <svg className="absolute pointer-events-none hidden sm:block" aria-hidden
            style={{ right: 0, top: "50%", transform: "translate(80px, -50%)", width: 1, height: 1, overflow: "visible" }}>
            {[80, 130, 180].map((r) => (
              <circle key={r} cx="0" cy="0" r={r} fill="none" stroke="rgba(30,184,231,0.28)" strokeWidth="1" />
            ))}
            {/* Dot on middle ring (r=130) at 215° — upper-right area inside card */}
            <circle
              cx={Math.cos((215 * Math.PI) / 180) * 130}
              cy={Math.sin((215 * Math.PI) / 180) * 130}
              r="4.5"
              fill="rgba(30,184,231,0.6)"
            />
          </svg>
          {/* Right rings mobile — anchored bottom-right corner */}
          <svg className="absolute pointer-events-none sm:hidden" aria-hidden
            style={{ right: 0, bottom: 0, transform: "translate(30px, 30px)", width: 1, height: 1, overflow: "visible" }}>
            {[60, 100, 140].map((r) => (
              <circle key={r} cx="0" cy="0" r={r} fill="none" stroke="rgba(30,184,231,0.28)" strokeWidth="1" />
            ))}
            <circle
              cx={Math.cos((225 * Math.PI) / 180) * 140}
              cy={Math.sin((225 * Math.PI) / 180) * 140}
              r="4"
              fill="rgba(30,184,231,0.6)"
            />
          </svg>
          <div className="relative z-10 flex flex-col gap-4 max-w-[640px] items-center">
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[48px] text-black tracking-[-0.96px] leading-[1.2]">
              Be Part of Our <br className="sm:hidden" />Next Chapter
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[18px] text-[rgba(0,0,0,0.68)] leading-[1.55]">
              Every connection creates new possibilities. Join ICEC through our events, programs, and partnerships, and help shape the impact ahead.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-[15px] items-center justify-center">
            {/* Explore Upcoming Events — teal outline */}
            <button onClick={() => onNavigate("events")} className="flex gap-[8px] items-center justify-center px-[16px] py-[12px] rounded-[4px] border-2 border-[#1eb8e7] cursor-pointer hover:bg-[#e5f4fb] transition-colors shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#1EB8E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 2V6" stroke="#1EB8E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 2V6" stroke="#1EB8E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 10H21" stroke="#1EB8E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[#1eb8e7] text-[18px] tracking-[-0.09px] leading-[1.45] whitespace-nowrap">Explore Upcoming Events</span>
            </button>

            {/* Partner With Us — teal filled */}
            <button onClick={() => onNavigate("contact")} className="bg-[#e5f4fb] flex gap-[8px] items-center justify-center px-[16px] py-[12px] rounded-[4px] cursor-pointer hover:bg-[#d0ecf8] transition-colors shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69365 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69365 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.90831 3.57831 8.50903 2.99871 7.05 2.99871C5.59097 2.99871 4.19169 3.57831 3.16 4.61C2.12831 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.12831 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.9379 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7564 5.72719 21.351 5.12076 20.84 4.61Z" stroke="#1EB8E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[#1eb8e7] text-[18px] tracking-[-0.09px] leading-[1.45] whitespace-nowrap">Partner With Us</span>
            </button>

            {/* Donate — orange filled */}
            <button className="bg-[#fef2e5] flex gap-[8px] items-center justify-center px-[16px] py-[12px] rounded-[4px] cursor-pointer hover:bg-[#fde8d0] transition-colors shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 12V22H4V12" stroke="#F09345" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 7H2V12H22V7Z" stroke="#F09345" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 22V7" stroke="#F09345" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="#F09345" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="#F09345" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[#f09345] text-[18px] tracking-[-0.09px] leading-[1.45] whitespace-nowrap">Donate</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer (matches homepage exactly) ────────────────────────────
function Footer({ onNavigate }: { onNavigate: (p: Page) => void }) {
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
            {(["About", "Events", "Classes", "Art Foundation", "Volunteer", "Donate", "Contact"] as const).map((l) => (
              <p
                key={l}
                onClick={() => { if (l === "About") onNavigate("about"); else if (l === "Events") onNavigate("events"); else if (l === "Classes") onNavigate("classes"); else if (l === "Art Foundation") onNavigate("artfoundation"); else if (l === "Volunteer") onNavigate("volunteer"); else if (l === "Donate") onNavigate("donate"); else if (l === "Contact") onNavigate("contact"); }}
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
            <div className="flex items-center gap-4 mt-1">
              <div className="relative rounded-[4px] size-[72px] overflow-hidden shrink-0">
                <img src={imgWeChatQr} alt="WeChat QR" className="w-full h-full object-cover" />
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[rgba(0,0,0,0.68)] leading-[1.4]">Follow us on WeChat!</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">Social</p>
            {["TikTok", "Instagram", "Facebook", "Youtube", "RedNote"].map((l) => (
              <p key={l} className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] cursor-pointer hover:text-[#1eb8e7] transition-colors">
                {l}
              </p>
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
                className="font-['Inter:Regular',sans-serif] font-normal text-[13px] placeholder:text-[rgba(0,0,0,0.35)] bg-white border border-[rgba(0,0,0,0.18)] rounded-[4px] px-3 h-[36px] w-full outline-none focus:border-[#f09345] transition-colors"
              />
              <button className="bg-[#f09345] flex h-[36px] items-center justify-center rounded-[4px] w-full cursor-pointer hover:bg-[#e0843a] transition-colors">
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-white">Subscribe</span>
              </button>
            </div>
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

// ── Page assembly ─────────────────────────────────────────────────
export default function AboutPage({ onNavigate }: Props) {
  return (
    <div className="bg-[#f8f7f5] flex flex-col w-full min-h-screen">
      <ICECHeader onNavigate={onNavigate} activePage="about" />
      <div className="flex flex-col w-full overflow-x-hidden">
        <AboutUsSection />
        <IntroductionSection />
        <OurMissionSection />
        <OurImpactSection />
        <NextChapterSection onNavigate={onNavigate} />
        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  );
}
