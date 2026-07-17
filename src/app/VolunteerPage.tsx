import type { Page } from "./types";
import { ICECHeader } from "./components/ICECHeader";
import heroImg    from "@/imports/HomePageTest2/2a3414d693c93e996199ac6511ece760e2e0550e.png";
import imgLogoNobg from "@/imports/Frame_427319345.png";
import imgWeChatQr from "@/imports/HomePageTest2/3484b245a1dff2b03b62d31a87de268183d390c4.png";

interface Props { onNavigate: (page: Page) => void; }

// ── Hero ──────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[480px] overflow-hidden">
      <img src={heroImg} alt="Volunteer with ICEC" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative flex flex-col justify-end h-full max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12 pb-10 sm:pb-14 lg:pb-16">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] sm:text-[20px] lg:text-[24px] text-[#f09345] tracking-[-0.48px] leading-[1.45] mb-2 lg:mb-3">
          Get Involved
        </p>
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[44px] lg:text-[64px] text-white tracking-[-1.28px] leading-[1.2] max-w-[700px]">
          Volunteer
        </h1>
      </div>
    </div>
  );
}

// ── Intro ─────────────────────────────────────────────────────────
function IntroSection() {
  return (
    <section className="bg-[#f8f7f5] w-full py-14 lg:py-[72px]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-[96px]">

          <div className="flex flex-col gap-8 w-full lg:flex-1">
            <div>
              <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#1eb8e7] tracking-[-0.48px] leading-[1.45]">
                Volunteer with ICEC
              </h5>
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[44px] text-black tracking-[-0.96px] leading-[1.25] mt-1">
                Make a Difference Through Culture
              </h2>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[18px] text-[rgba(0,0,0,0.68)] leading-[1.65]">
              ICEC volunteers support cultural events, educational programs, and community activities. Whether helping behind the scenes or welcoming guests, every contribution helps create a better experience for the community.
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfduDKnOHLXdfV_VVy8cejBnmY4k6OsRcpJMUXhUqe96HMDOg/viewform" target="_blank" rel="noopener noreferrer" className="inline-flex items-center h-[46px] lg:h-[50px] px-6 bg-[#f09345] rounded-[4px] cursor-pointer hover:bg-[#e0843a] transition-colors no-underline self-start">
              <span className="font-['Inter:Medium',sans-serif] font-medium text-white text-[15px] lg:text-[18px] whitespace-nowrap">Become a Volunteer →</span>
            </a>
          </div>

          {/* Certificate callout */}
          <div className="w-full lg:w-[380px] lg:shrink-0 bg-white rounded-[16px] p-7 border border-[rgba(0,0,0,0.08)] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <div className="w-[48px] h-[48px] rounded-[12px] bg-[#fef2e5] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 15l-3.09 1.63.59-3.43L7 10.77l3.45-.5L12 7l1.55 3.27 3.45.5-2.5 2.43.59 3.43L12 15z" stroke="#f09345" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="#f09345" strokeWidth="1.8"/>
              </svg>
            </div>
            <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] lg:text-[20px] text-black tracking-[-0.4px] leading-[1.3]">
              Every Volunteer Contribution Is Recognized
            </h3>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] lg:text-[16px] text-[rgba(0,0,0,0.6)] leading-[1.6]">
              Volunteers who complete their service will receive an official ICEC Certificate of Appreciation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

// ── Roles ─────────────────────────────────────────────────────────
const ROLES = [
  {
    color: "#f09345",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Event Support",
    desc: "Setup, check-in, guest guidance, and on-site assistance.",
  },
  {
    color: "#1eb8e7",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Program Support",
    desc: "Assist with classes, workshops, and cultural activities.",
  },
  {
    color: "#f09345",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="2.18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Media & Promotion",
    desc: "Photography, video, social media, and event promotion.",
  },
  {
    color: "#1eb8e7",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Community Outreach",
    desc: "Communication, translation, and participant support.",
  },
];

function RolesSection() {
  return (
    <section className="bg-[#f8f7f5] w-full py-14 lg:py-[72px] border-t border-[rgba(0,0,0,0.07)]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-10 lg:mb-[56px]">
          <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#1eb8e7] tracking-[-0.48px] leading-[1.45]">
            Volunteer Roles
          </h5>
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[44px] text-black tracking-[-0.96px] leading-[1.25] mt-1">
            Find Your Place in the Team
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {ROLES.map(({ color, icon, title, desc }) => (
            <div key={title} className="bg-white rounded-[16px] p-7 lg:p-8 border border-[rgba(0,0,0,0.08)] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] flex gap-5">
              <div className="w-[52px] h-[52px] rounded-[12px] flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}18`, color }}>
                {icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] lg:text-[20px] text-black tracking-[-0.4px] leading-[1.3]">
                  {title}
                </h3>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] lg:text-[15px] text-[rgba(0,0,0,0.6)] leading-[1.6]">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── What You'll Gain ──────────────────────────────────────────────
const GAINS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="#f09345" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Hands-on experience",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#1eb8e7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="#1eb8e7" strokeWidth="1.8"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#1eb8e7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Community connections",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#f09345" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "New skills",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 15l-3.09 1.63.59-3.43L7 10.77l3.45-.5L12 7l1.55 3.27 3.45.5-2.5 2.43.59 3.43L12 15z" stroke="#1eb8e7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="10" stroke="#1eb8e7" strokeWidth="1.8"/>
      </svg>
    ),
    label: "Certificate of appreciation",
  },
];

function GainsSection() {
  return (
    <section className="bg-[#f8f7f5] w-full py-14 lg:py-[72px] border-t border-[rgba(0,0,0,0.07)]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[96px]">

          <div className="flex flex-col gap-4 w-full lg:w-[400px] lg:shrink-0">
            <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#1eb8e7] tracking-[-0.48px] leading-[1.45]">
              Benefits
            </h5>
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[44px] text-black tracking-[-0.96px] leading-[1.25]">
              What You'll Gain
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[17px] text-[rgba(0,0,0,0.6)] leading-[1.65]">
              Volunteering with ICEC is more than giving back — it's an opportunity to grow, connect, and be recognized for your contribution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
            {GAINS.map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-4 bg-white rounded-[12px] px-5 py-5 border border-[rgba(0,0,0,0.08)]">
                <div className="w-[44px] h-[44px] rounded-[10px] bg-[#f8f7f5] flex items-center justify-center shrink-0">
                  {icon}
                </div>
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] lg:text-[15px] text-[rgba(0,0,0,0.8)] leading-[1.4]">
                  {label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────
function CTASection() {
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
            style={{ background: "#f09345" }} />
          {/* Teal glow */}
          <div className="absolute pointer-events-none rounded-full blur-[60px] opacity-40 z-0
            w-[200px] h-[200px] bottom-0 right-0 translate-x-1/4 translate-y-1/4
            sm:w-[380px] sm:h-[380px] sm:top-1/2 sm:right-0 sm:translate-x-1/2 sm:-translate-y-1/2"
            style={{ background: "#1eb8e7" }} />

          {/* Left rings desktop */}
          <svg className="absolute pointer-events-none hidden sm:block" aria-hidden
            style={{ left: 0, top: "50%", transform: "translate(-80px, -50%)", width: 1, height: 1, overflow: "visible" }}>
            {[80, 130, 180].map((r) => (
              <circle key={r} cx="0" cy="0" r={r} fill="none" stroke="rgba(240,147,69,0.28)" strokeWidth="1" />
            ))}
            <circle cx={Math.cos((-35 * Math.PI) / 180) * 130} cy={Math.sin((-35 * Math.PI) / 180) * 130} r="4.5" fill="rgba(240,147,69,0.6)" />
          </svg>
          {/* Left rings mobile */}
          <svg className="absolute pointer-events-none sm:hidden" aria-hidden
            style={{ left: 0, top: 0, transform: "translate(-30px, -30px)", width: 1, height: 1, overflow: "visible" }}>
            {[60, 100, 140].map((r) => (
              <circle key={r} cx="0" cy="0" r={r} fill="none" stroke="rgba(240,147,69,0.28)" strokeWidth="1" />
            ))}
            <circle cx={Math.cos((315 * Math.PI) / 180) * 140} cy={Math.sin((315 * Math.PI) / 180) * 140} r="4" fill="rgba(240,147,69,0.6)" />
            <circle cx={Math.cos((315 * Math.PI) / 180) * 100} cy={Math.sin((315 * Math.PI) / 180) * 100} r="4" fill="rgba(240,147,69,0.6)" />
          </svg>
          {/* Right rings desktop */}
          <svg className="absolute pointer-events-none hidden sm:block" aria-hidden
            style={{ right: 0, top: "50%", transform: "translate(80px, -50%)", width: 1, height: 1, overflow: "visible" }}>
            {[80, 130, 180].map((r) => (
              <circle key={r} cx="0" cy="0" r={r} fill="none" stroke="rgba(30,184,231,0.28)" strokeWidth="1" />
            ))}
            <circle cx={Math.cos((215 * Math.PI) / 180) * 130} cy={Math.sin((215 * Math.PI) / 180) * 130} r="4.5" fill="rgba(30,184,231,0.6)" />
          </svg>
          {/* Right rings mobile */}
          <svg className="absolute pointer-events-none sm:hidden" aria-hidden
            style={{ right: 0, bottom: 0, transform: "translate(30px, 30px)", width: 1, height: 1, overflow: "visible" }}>
            {[60, 100, 140].map((r) => (
              <circle key={r} cx="0" cy="0" r={r} fill="none" stroke="rgba(30,184,231,0.28)" strokeWidth="1" />
            ))}
            <circle cx={Math.cos((225 * Math.PI) / 180) * 140} cy={Math.sin((225 * Math.PI) / 180) * 140} r="4" fill="rgba(30,184,231,0.6)" />
          </svg>

          <div className="relative z-10 flex flex-col gap-4 max-w-[620px] items-center">
            <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-[#1eb8e7] tracking-[-0.36px]">
              Join Us
            </h5>
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[26px] sm:text-[34px] lg:text-[44px] text-black tracking-[-0.88px] leading-[1.2]">
              Help Bring Culture to Life
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[17px] text-[rgba(0,0,0,0.6)] leading-[1.65] max-w-[500px]">
              We are always building our volunteer community. Submit your information, and we'll contact you when new opportunities become available.
            </p>
          </div>

          <div className="relative z-10">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfduDKnOHLXdfV_VVy8cejBnmY4k6OsRcpJMUXhUqe96HMDOg/viewform" target="_blank" rel="noopener noreferrer" className="inline-flex items-center h-[46px] lg:h-[52px] px-8 bg-[#f09345] rounded-[4px] cursor-pointer hover:bg-[#e0843a] transition-colors no-underline">
              <span className="font-['Inter:Medium',sans-serif] font-medium text-white text-[15px] lg:text-[16px] whitespace-nowrap">Become a Volunteer →</span>
            </a>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">

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

          <div className="flex flex-col gap-3">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">Quick Links</p>
            {(["About", "Events", "Classes", "Art Foundation", "Volunteer", "Donate", "Contact"] as const).map((l) => (
              <p key={l}
                onClick={() => {
                  if (l === "About") onNavigate("about");
                  else if (l === "Events") onNavigate("events");
                  else if (l === "Classes") onNavigate("classes");
                  else if (l === "Art Foundation") onNavigate("artfoundation");
                  else if (l === "Volunteer") onNavigate("volunteer");
                  else if (l === "Donate") onNavigate("donate");
                }}
                className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] cursor-pointer hover:text-[#f09345] transition-colors">
                {l}
              </p>
            ))}
          </div>

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

          <div className="flex flex-col gap-3">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">Social</p>
            {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer"
                className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] hover:text-[#1eb8e7] transition-colors no-underline">
                {name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">Stay Connected</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[rgba(0,0,0,0.55)] leading-[1.5]">
              Subscribe for updates on events and programs.
            </p>
            <div className="flex flex-col gap-2 mt-1">
              <input type="email" placeholder="Email address"
                className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[rgba(0,0,0,0.6)] placeholder:text-[rgba(0,0,0,0.35)] bg-white border border-[rgba(0,0,0,0.18)] rounded-[4px] px-3 h-[36px] w-full outline-none focus:border-[#f09345] transition-colors" />
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

// ── Page ──────────────────────────────────────────────────────────
export default function VolunteerPage({ onNavigate }: Props) {
  return (
    <div className="bg-[#f8f7f5] flex flex-col w-full min-h-screen">
      <ICECHeader onNavigate={onNavigate} activePage="volunteer" />
      <div className="flex flex-col w-full overflow-x-hidden">
        <HeroSection />
        <IntroSection />
        <RolesSection />
        <GainsSection />
        <CTASection />
        <FooterSection onNavigate={onNavigate} />
      </div>
    </div>
  );
}
