import { useState } from "react";
import type { Page } from "./types";
import { ICECHeader } from "./components/ICECHeader";
import wiseQr from "@/imports/wise-qr.jpg";
import wiseIcon from "@/imports/wise-icon.jpeg";
import imgLogoNobg from "@/imports/Frame_427319345.png";
import imgWeChatQr from "@/imports/HomePageTest2/3484b245a1dff2b03b62d31a87de268183d390c4.png";

interface Props {
  onNavigate: (page: Page) => void;
}

const PAYMENT_ID = "@internationalculturalexchangecenterinc";
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
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-black leading-[1.3] max-w-[200px]">International Cultural Exchange Center</p>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.5]">Preserving cultural heritage,<br />strengthening communities, and<br />inspiring future generations.</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">Quick Links</p>
            {(["About", "Events", "Classes", "Art Foundation", "Volunteer", "Donate", "Contact"] as const).map((l) => (
              <p
                key={l}
                onClick={() => {
                  if (l === "About") onNavigate("about");
                  else if (l === "Events") onNavigate("events");
                  else if (l === "Classes") onNavigate("classes");
                  else if (l === "Art Foundation") onNavigate("artfoundation");
                  else if (l === "Volunteer") onNavigate("volunteer");
                  else if (l === "Donate") onNavigate("donate");
                  else if (l === "Contact") onNavigate("contact");
                }}
                className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] cursor-pointer hover:text-[#E48D62] transition-colors"
              >
                {l}
              </p>
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
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] hover:text-[#3DB0D3] transition-colors no-underline">{name}</a>
            ))}
          </div>
        </div>
        <div className="border-t border-[rgba(0,0,0,0.1)] mt-10 pt-6 text-center">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[rgba(0,0,0,0.4)]">© 2026 International Cultural Exchange Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function DonatePage({ onNavigate }: Props) {
  const [copied, setCopied] = useState(false);

  const copyPaymentId = async () => {
    await navigator.clipboard?.writeText(PAYMENT_ID);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <div className="bg-[#f8f7f5] flex flex-col w-full min-h-screen">
      <ICECHeader onNavigate={onNavigate} activePage="donate" />

      <main className="w-full overflow-x-hidden">
        <section className="w-full py-14 lg:py-[80px]">
          <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-[88px] items-start">
              <div className="pt-2">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#E48D62] tracking-[-0.32px] leading-[1.45] mb-2">
                  Support ICEC
                </p>
                <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[60px] text-black tracking-[-1.2px] leading-[1.15] mb-5">
                  Make a Donation
                </h1>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[18px] text-[rgba(0,0,0,0.65)] leading-[1.65] max-w-[560px]">
                  Your contribution helps ICEC support cultural programs, young artists, and community events.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <div className="bg-white rounded-[20px] p-6 sm:p-8 border border-[rgba(0,0,0,0.08)] flex flex-col gap-4">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-black tracking-[-0.36px]">
                    Payment Information
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://wise.com/pay/r/yCjfL9y57-Ve6AA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 h-[44px] px-4 rounded-[4px] border border-[#E48D62] bg-white shadow-[0px_2px_8px_0px_rgba(233,139,97,0.18)] transition hover:border-[#d97745] hover:shadow-[0px_4px_12px_0px_rgba(233,139,97,0.24)]"
                    >
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[#202020]">Pay with</span>
                      <span className="inline-flex items-center justify-center w-[32px] h-[32px] rounded-[6px] overflow-hidden shrink-0 bg-[#98E872]">
                        <img src={wiseIcon} alt="Wise" className="w-[30px] h-[30px] object-cover" />
                      </span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[#202020]">Wise</span>
                    </a>
                  </div>

                  <div className="rounded-[8px] border border-[rgba(0,0,0,0.1)] bg-white p-4 flex flex-col items-center gap-4">
                    <div className="relative w-[180px] h-[180px] rounded-[6px] border border-[rgba(0,0,0,0.1)] bg-white overflow-hidden">
                      <img src={wiseQr} alt="Wise QR code" className="w-full h-full object-cover" />
                    </div>

                    <div className="flex items-center gap-2 text-[rgba(0,0,0,0.55)]">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <rect x="6" y="5" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M10 9h4M10 13h4M10 17h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px]">Scan with your banking app</p>
                    </div>

                    <div className="flex items-center gap-3 w-full">
                      <div className="h-px bg-[rgba(0,0,0,0.12)] flex-1" />
                      <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[rgba(0,0,0,0.45)]">or</p>
                      <div className="h-px bg-[rgba(0,0,0,0.12)] flex-1" />
                    </div>

                    <div className="w-full flex flex-col gap-2">
                      <label className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[rgba(0,0,0,0.7)]">Wise ID</label>
                      <div className="flex items-center gap-2 bg-[#fbf3ed] rounded-[6px] px-3 h-[46px]">
                        <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[#202020] leading-[1.35] break-all flex-1">{PAYMENT_ID}</p>
                        <button
                          type="button"
                          onClick={copyPaymentId}
                          className="inline-flex items-center gap-1.5 rounded-[4px] px-2 h-[32px] hover:bg-white/65 transition-colors cursor-pointer shrink-0"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <rect x="9" y="9" width="11" height="11" rx="2" stroke="#9b5d47" strokeWidth="1.8" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="#9b5d47" strokeWidth="1.8" strokeLinecap="round" />
                          </svg>
                          <span className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[#9b5d47]">
                            {copied ? "Copied" : "Copy"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection onNavigate={onNavigate} />
    </div>
  );
}
