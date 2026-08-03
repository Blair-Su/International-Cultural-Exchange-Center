import { useEffect, useState } from "react";
import type { Page } from "./types";
import { ICECHeader } from "./components/ICECHeader";
import { ICECFooter } from "./components/ICECFooter";
import { LANGUAGE_CHANGE_EVENT, type SiteLanguage, getStoredLanguage } from "./siteLanguage";
import heroImg     from "@/imports/Program.webp";
import danceImg    from "@/imports/Dance.webp";
import songsImg    from "@/imports/Music.webp";
import hanfuImg    from "@/imports/HomePageTest2/840beff7b23fbd7ada94e7e21afb82c1c2895632.webp";
import imgLogoNobg from "@/imports/Frame_427319345.webp";
import imgWeChatQr from "@/imports/HomePageTest2/3484b245a1dff2b03b62d31a87de268183d390c4.webp";

interface Props {
  onNavigate: (page: Page) => void;
}

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

// ── Hero ─────────────────────────────────────────────────────────
function HeroSection({ isSimplified }: { isSimplified: boolean }) {
  return (
    <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[480px] overflow-hidden">
      <img src={heroImg} alt="ICEC Cultural Classes" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative flex flex-col justify-end h-full max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12 pb-10 sm:pb-14 lg:pb-16">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] sm:text-[20px] lg:text-[24px] text-[#3DB0D3] tracking-[-0.48px] leading-[1.45] mb-2 lg:mb-3">
          {isSimplified ? "体验项目" : "Programs"}
        </p>
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[44px] lg:text-[64px] text-white tracking-[-1.28px] leading-[1.2] max-w-[700px]">
          {isSimplified ? "文化课程" : "Cultural Classes"}
        </h1>
      </div>
    </div>
  );
}

// ── Shared contact button ─────────────────────────────────────────
function ContactButton({ onNavigate, isSimplified }: { onNavigate: (page: Page) => void; isSimplified: boolean }) {
  return (
    <button
      onClick={() => onNavigate("contact")}
      className="inline-flex items-center h-[46px] lg:h-[50px] px-6 icec-orange-gradient-button rounded-[4px] cursor-pointer transition-colors self-start"
    >
      <span className="font-['Inter:Medium',sans-serif] font-medium text-white text-[15px] lg:text-[18px] whitespace-nowrap">
        {isSimplified ? "咨询详情" : "Contact for Details"} →
      </span>
    </button>
  );
}

// ── Overview ─────────────────────────────────────────────────────
function OverviewSection({ isSimplified }: { isSimplified: boolean }) {
  return (
    <section className="bg-[#f8f7f5] w-full py-14 lg:py-[72px]">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[80px]">

          {/* Text */}
          <div className="flex flex-col gap-8 w-full lg:flex-1">
            <div>
              <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#E48D62] tracking-[-0.48px] leading-[1.45]">
                {isSimplified ? "参与课程" : "Cultural Classes"}
              </h5>
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[44px] text-black tracking-[-0.96px] leading-[1.25] mt-1">
                {isSimplified ? "从一次体验开始，走近文化。" : "Immerse Yourself in Culture"}
              </h2>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[18px] text-[rgba(0,0,0,0.68)] leading-[1.6]">
              {isSimplified ? (
                <>
                  文化，<br />
                  可以听见。<br />
                  可以看见。<br />
                  也可以亲身体验。<br />
                  从传统舞蹈、古风歌曲，到汉服文化与礼仪课程，<br />
                  邀请不同年龄、不同文化背景的人们，<br />
                  一起学习、分享，理解。
                </>
              ) : (
                "Immerse yourself in a vibrant cultural journey at the International Cultural Exchange Center (ICEC)! Discover our diverse offerings including dance classes, traditional Chinese songs, Hanfu attire, Hanfu Knowledge Dissemination, and runway shows. Our programs are crafted to offer enriching educational experiences, develop new skills, foster an appreciation for cultural heritage, and connect you with our vibrant community."
              )}
            </p>
          </div>

          {/* Offering pills */}
          

        </div>
      </div>
    </section>
  );
}

// ── Individual class card ─────────────────────────────────────────
interface ClassCardProps {
  eyebrow: string;
  title: string;
  body: React.ReactNode;
  img: string;
  imgAlt: string;
  reverse?: boolean;
  onNavigate: (page: Page) => void;
  isSimplified: boolean;
}

function ClassCard({ eyebrow, title, body, img, imgAlt, reverse, onNavigate, isSimplified }: ClassCardProps) {
  return (
    <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-[72px] py-14 lg:py-[72px] border-t border-[rgba(0,0,0,0.08)]`}>
      {/* Text */}
      <div className="flex flex-col gap-6 w-full lg:flex-1">
        <div>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[#3DB0D3] tracking-[-0.3px] leading-[1.45] uppercase">
            {eyebrow}
          </p>
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[26px] sm:text-[32px] lg:text-[38px] text-black tracking-[-0.76px] leading-[1.25] mt-1">
            {title}
          </h3>
        </div>
        <div className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[17px] text-[rgba(0,0,0,0.68)] leading-[1.65]">
          {body}
        </div>
        <ContactButton onNavigate={onNavigate} isSimplified={isSimplified} />
      </div>

      {/* Image */}
      <div className="w-full lg:w-[420px] lg:shrink-0 h-[240px] sm:h-[300px] lg:h-[380px] rounded-[16px] overflow-hidden">
        <img src={img} alt={imgAlt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

// ── Classes ──────────────────────────────────────────────────────
function ClassesSection({ onNavigate, isSimplified }: { onNavigate: (page: Page) => void; isSimplified: boolean }) {
  return (
    <section className="bg-[#f8f7f5] w-full">
      <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">

        <ClassCard
          eyebrow={isSimplified ? "从舞蹈认识文化" : "Dance"}
          title={isSimplified ? "民族舞课程" : "Dance Class"}
          img={danceImg}
          imgAlt="Dance class"
          onNavigate={onNavigate}
          isSimplified={isSimplified}
          body={
            isSimplified ? (
              <p>
                舞蹈，<br />
                也是一种文化语言。<br />
                从传统到当代，<br />
                在身体的律动中感受文化，<br />
                在学习与交流中发现更多可能。<br />
                无论是否拥有舞蹈基础，<br />
                都欢迎从这里开始。
              </p>
            ) : (
              <p>
                Discover the joy of movement and the beauty of traditional dance with our classes. Experience the rich tapestry of Chinese dance, blending historical and contemporary techniques. Perfect for all skill levels, our classes offer a fun and fitness-filled journey through this vibrant art form!
              </p>
            )
          }
        />

        <ClassCard
          eyebrow={isSimplified ? "从音乐认识文化" : "Music"}
          title={isSimplified ? "古风声乐课程" : "Traditional Chinese Songs Class"}
          img={songsImg}
          imgAlt="Traditional Chinese songs class"
          reverse
          onNavigate={onNavigate}
          isSimplified={isSimplified}
          body={
            isSimplified ? (
              <p>
                歌声，<br />
                承载着文化，<br />
                也记录着时代。<br />
                通过学习经典歌曲，<br />
                走近作品背后的故事、情感与文化意蕴。<br />
                让旋律成为交流的语言，<br />
                也让文化在歌声中继续传唱。
              </p>
            ) : (
              <p>
                Immerse yourself in the melodious world of traditional Chinese songs. Learn to sing timeless classics while exploring the stories and emotions behind each piece. This class offers a delightful way to connect with Chinese culture through the power of music.
              </p>
            )
          }
        />

        <ClassCard
          eyebrow={isSimplified ? "从服饰认识文化" : "Hanfu"}
          title={isSimplified ? "汉服课程" : "Hanfu Class"}
          img={hanfuImg}
          imgAlt="Hanfu class"
          onNavigate={onNavigate}
          isSimplified={isSimplified}
          body={
            isSimplified ? (
              <p>
                一袭衣裳，<br />
                承载着千年的文化。<br />
                从历史、形制到礼仪，<br />
                了解汉服背后的文化内涵，<br />
                学习正确的穿着方式，<br />
                感受传统服饰之美。
              </p>
            ) : (
              <>
                <p className="mb-4">
                  Step into the elegance of Hanfu, the traditional clothing of the Han Chinese. In this class, you'll explore its historical significance, cultural symbolism, and proper wearing techniques. Embrace the beauty of ancient fashion with:
                </p>
                <ul className="flex flex-col gap-2">
                  {["Hanfu Knowledge Dissemination", "Runway Shows"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#E48D62] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )
          }
        />

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

function FooterSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
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
              Preserving cultural heritage,<br />strengthening communities, and<br />inspiring future generations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">Quick Links</p>
            {(["About", "Events", "Classes", "Art Foundation", "Volunteer", "Donate", "Contact"] as const).map((l) => (
              <p
                key={l}
                onClick={() => { if (l === "About") onNavigate("about"); else if (l === "Events") onNavigate("events"); else if (l === "Classes") onNavigate("classes"); else if (l === "Art Foundation") onNavigate("artfoundation"); else if (l === "Volunteer") onNavigate("volunteer"); else if (l === "Donate") onNavigate("donate"); else if (l === "Contact") onNavigate("contact"); }}
                className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] cursor-pointer hover:text-[#3DB0D3] transition-colors"
              >
                {l}
              </p>
            ))}
          </div>

          {/* Contact */}
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

          {/* Social */}
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

// ── Page ─────────────────────────────────────────────────────────
export default function ClassesPage({ onNavigate }: Props) {
  const language = useSiteLanguage();
  const isSimplified = language === "简体中文";

  return (
    <div className="bg-[#f8f7f5] flex flex-col w-full min-h-screen">
      <ICECHeader onNavigate={onNavigate} activePage="classes" />
      <div className="flex flex-col w-full overflow-x-hidden">
        <HeroSection isSimplified={isSimplified} />
        <OverviewSection isSimplified={isSimplified} />
        <ClassesSection onNavigate={onNavigate} isSimplified={isSimplified} />
        <ICECFooter onNavigate={onNavigate} />
      </div>
    </div>
  );
}
