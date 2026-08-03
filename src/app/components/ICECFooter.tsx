import { useEffect, useState } from "react";
import type { Page } from "../types";
import { LANGUAGE_CHANGE_EVENT, type SiteLanguage, getStoredLanguage } from "../siteLanguage";
import imgLogoNobg from "@/imports/Frame_427319345.webp";
import imgWeChatQr from "@/imports/HomePageTest2/3484b245a1dff2b03b62d31a87de268183d390c4.webp";

const SOCIAL_LINKS: Record<string, string> = {
  TikTok: "https://www.tiktok.com/@icec_nyc?is_from_webapp=1&sender_device=pc",
  Instagram: "https://www.instagram.com/icec.nyc/",
  Facebook: "https://www.facebook.com/profile.php?id=100080679697204",
  Youtube: "https://www.youtube.com/@internationculturalexchang5195",
  RedNote: "https://xhslink.com/m/3eY9zNarCmq",
};

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

export function ICECFooter({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const isSimplified = useSiteLanguage() === "简体中文";
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
        { label: "Donate", page: "donate" as const },
        { label: "Contact", page: "contact" as const },
      ];

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
              {isSimplified ? (
                "让文化，因你我而生生不息。"
              ) : (
                <>
                  Preserving cultural heritage,<br />strengthening communities, and<br />inspiring future generations.
                </>
              )}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">{isSimplified ? "链接" : "Quick Links"}</p>
            {quickLinks.map((link) => (
              <p
                key={link.label}
                onClick={() => onNavigate(link.page)}
                className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] cursor-pointer hover:text-[#3DB0D3] transition-colors"
              >
                {link.label}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">{isSimplified ? "联系我们" : "Contact"}</p>
            <a href="mailto:event@icecnyc.org" className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] hover:text-[#E48D62] transition-colors no-underline">{isSimplified ? "电子邮箱：" : ""}event@icecnyc.org</a>
            <a href="tel:+13475643593" className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] hover:text-[#E48D62] transition-colors no-underline">{isSimplified ? "电话：" : ""}+1 (347) 564-3593</a>
            <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=gh_898ffa8e98be==&scene=110" target="_blank" rel="noopener noreferrer" className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] hover:text-[#E48D62] transition-colors no-underline">{isSimplified ? "微信：" : "WeChat: "}NY国潮君</a>
            <div className="flex items-center gap-4 mt-1">
              <div className="relative rounded-[4px] size-[72px] overflow-hidden shrink-0">
                <img src={imgWeChatQr} alt="WeChat QR" className="w-full h-full object-cover" />
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[rgba(0,0,0,0.68)] leading-[1.4]">{isSimplified ? "微信二维码" : "Follow us on WeChat!"}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">{isSimplified ? "社交媒体" : "Social"}</p>
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
