import { useState } from "react";
import type { Page } from "./types";
import { ICECHeader } from "./components/ICECHeader";
import imgLogoNobg from "@/imports/Frame_427319345.png";
import imgWeChatQr from "@/imports/HomePageTest2/3484b245a1dff2b03b62d31a87de268183d390c4.png";
import xiaohongshuLogo from "@/imports/Xiaohongshu-___-Logo.png";
import wechatLogo from "@/imports/wechat-logo-vectorized.svg";

interface Props { onNavigate: (page: Page) => void; }

const SOCIAL_LINKS: Record<string, string> = {
  TikTok: "https://www.tiktok.com/@icec_nyc?is_from_webapp=1&sender_device=pc",
  Instagram: "https://www.instagram.com/icec.nyc/",
  Facebook: "https://www.facebook.com/profile.php?id=100080679697204",
  Youtube: "https://www.youtube.com/@internationculturalexchang5195",
  RedNote: "https://xhslink.com/m/3eY9zNarCmq",
};

const REASONS = ["General Inquiry", "Event Question", "Partnership or Sponsorship", "Volunteer Inquiry", "Media or Press", "Other"];

const SOCIAL_ITEMS = [
  {
    name: "TikTok", url: SOCIAL_LINKS.TikTok, bg: "bg-black", hover: "group-hover:opacity-80",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>,
  },
  {
    name: "Instagram", url: SOCIAL_LINKS.Instagram, bg: "bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888]", hover: "group-hover:opacity-80",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="white" strokeWidth="2" fill="none"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="white" strokeWidth="2" fill="none"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>,
  },
  {
    name: "Facebook", url: SOCIAL_LINKS.Facebook, bg: "bg-[#1877f2]", hover: "group-hover:opacity-80",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    name: "YouTube", url: SOCIAL_LINKS.Youtube, bg: "bg-[#ff0000]", hover: "group-hover:opacity-80",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="red"/></svg>,
  },
  {
    name: "RedNote", url: SOCIAL_LINKS.RedNote, bg: "bg-[#ff2442]", hover: "group-hover:opacity-80",
    icon: <img src={xiaohongshuLogo} alt="RedNote" className="w-[28px] h-[28px] object-contain rounded-[4px]" />,
  },
];

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
                className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] cursor-pointer hover:text-[#f09345] transition-colors">{l}</p>
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
                className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] leading-[1.7] hover:text-[#1eb8e7] transition-colors no-underline">{name}</a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[rgba(0,0,0,0.92)] mb-1">Stay Connected</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[rgba(0,0,0,0.55)] leading-[1.5]">Subscribe for updates on events and programs.</p>
            <div className="flex flex-col gap-2 mt-1">
              <input type="email" placeholder="Email address" className="font-['Inter:Regular',sans-serif] font-normal text-[13px] placeholder:text-[rgba(0,0,0,0.35)] bg-white border border-[rgba(0,0,0,0.18)] rounded-[4px] px-3 h-[36px] w-full outline-none focus:border-[#f09345] transition-colors" />
              <button className="bg-[#f09345] flex h-[36px] items-center justify-center rounded-[4px] w-full cursor-pointer hover:bg-[#e0843a] transition-colors">
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

export default function ContactPage({ onNavigate }: Props) {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", organization: "", reason: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const inputCls = "font-['Inter:Regular',sans-serif] font-normal text-[14px] text-black placeholder:text-[rgba(0,0,0,0.35)] bg-white border border-[rgba(0,0,0,0.15)] rounded-[6px] px-4 h-[46px] w-full outline-none focus:border-[#f09345] transition-colors";

  return (
    <div className="bg-[#f8f7f5] flex flex-col w-full min-h-screen">
      <ICECHeader onNavigate={onNavigate} activePage="contact" />
      <div className="flex flex-col w-full overflow-x-hidden">

        <section className="w-full py-14 lg:py-[80px]">
          <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12">

            {/* Heading */}
            <div className="mb-12">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#f09345] tracking-[-0.32px] leading-[1.45] mb-2">Contact ICEC</p>
              <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[60px] text-black tracking-[-1.2px] leading-[1.15] mb-4">{"Let's Connect"}</h1>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] lg:text-[18px] text-[rgba(0,0,0,0.65)] leading-[1.65] max-w-[560px]">{"Have a question, partnership idea, or interest in supporting our programs? We'd love to hear from you."}</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-[80px] items-start">

              {/* Form */}
              <div className="w-full lg:flex-1">
                {submitted ? (
                  <div className="bg-white rounded-[20px] p-10 border border-[rgba(0,0,0,0.08)] text-center">
                    <div className="w-[56px] h-[56px] rounded-full bg-[#e5f4fb] flex items-center justify-center mx-auto mb-5">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#1eb8e7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[22px] text-black tracking-[-0.44px] mb-2">Message Sent!</h3>
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] text-[rgba(0,0,0,0.6)] leading-[1.6]">Thank you for reaching out. We will get back to you as soon as possible.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-6 inline-flex items-center h-[44px] px-6 bg-[#fef2e5] rounded-[4px] hover:bg-[#fde8d0] transition-colors cursor-pointer">
                      <span className="font-['Inter:Medium',sans-serif] font-medium text-[#f09345] text-[14px]">Send Another Message</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white rounded-[20px] p-6 sm:p-8 border border-[rgba(0,0,0,0.08)] flex flex-col gap-5">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-black tracking-[-0.36px]">Send Us a Message</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-[6px]">
                        <label className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[rgba(0,0,0,0.7)]">First Name <span className="text-[#f09345]">*</span></label>
                        <input required type="text" placeholder="First name" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className={inputCls} />
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <label className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[rgba(0,0,0,0.7)]">Last Name <span className="text-[#f09345]">*</span></label>
                        <input required type="text" placeholder="Last name" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className={inputCls} />
                      </div>
                    </div>

                    <div className="flex flex-col gap-[6px]">
                      <label className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[rgba(0,0,0,0.7)]">Email <span className="text-[#f09345]">*</span></label>
                      <input required type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
                    </div>

                    <div className="flex flex-col gap-[6px]">
                      <label className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[rgba(0,0,0,0.7)]">Organization <span className="font-['Inter:Regular',sans-serif] text-[rgba(0,0,0,0.4)]">(Optional)</span></label>
                      <input type="text" placeholder="Your organization" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} className={inputCls} />
                    </div>

                    <div className="flex flex-col gap-[6px]">
                      <label className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[rgba(0,0,0,0.7)]">Reason for Contact <span className="text-[#f09345]">*</span></label>
                      <select required value={form.reason} onChange={(e) => setForm({ ...form, reason: e.target.value })}
                        className={`${inputCls} appearance-none`} style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23999' strokeWidth='1.5' fill='none' strokeLinecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}>
                        <option value="">Select a reason...</option>
                        {REASONS.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>

                    <div className="flex flex-col gap-[6px]">
                      <label className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[rgba(0,0,0,0.7)]">Message <span className="text-[#f09345]">*</span></label>
                      <textarea required rows={5} placeholder="Your message..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-black placeholder:text-[rgba(0,0,0,0.35)] bg-white border border-[rgba(0,0,0,0.15)] rounded-[6px] px-4 py-3 w-full outline-none focus:border-[#f09345] transition-colors resize-none" />
                    </div>

                    <button type="submit" className="inline-flex items-center justify-center h-[50px] px-8 bg-[#f09345] rounded-[4px] hover:bg-[#e0843a] transition-colors cursor-pointer mt-1">
                      <span className="font-['Inter:Medium',sans-serif] font-medium text-white text-[15px] lg:text-[16px]">Submit</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info sidebar */}
              <div className="w-full lg:w-[340px] lg:shrink-0 flex flex-col gap-5">

                <div className="bg-white rounded-[20px] p-6 border border-[rgba(0,0,0,0.08)] flex flex-col gap-5">
                  <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-black tracking-[-0.36px]">Contact Information</h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-[36px] h-[36px] rounded-full bg-[#fef2e5] flex items-center justify-center shrink-0 mt-[1px]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#f09345" strokeWidth="1.8"/><path d="M22 6l-10 7L2 6" stroke="#f09345" strokeWidth="1.8" strokeLinecap="round"/></svg>
                      </div>
                      <div>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[rgba(0,0,0,0.4)] uppercase tracking-[0.6px] mb-[2px]">Email</p>
                        <a href="mailto:info@icecnyc.org" className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black hover:opacity-75 transition-opacity no-underline">info@icecnyc.org</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-[36px] h-[36px] rounded-full bg-[#e5f4fb] flex items-center justify-center shrink-0 mt-[1px]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.89.66 2.78a2 2 0 0 1-.45 2.11L8.05 9.88a16 16 0 0 0 6.07 6.07l1.27-1.27a2 2 0 0 1 2.11-.45c.89.31 1.82.53 2.78.66A2 2 0 0 1 22 16.92Z" stroke="#1eb8e7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <div>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[rgba(0,0,0,0.4)] uppercase tracking-[0.6px] mb-[2px]">Phone</p>
                        <a href="tel:+13475643593" className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black hover:opacity-75 transition-opacity no-underline">+1(347) 564-3593</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-[36px] h-[36px] rounded-full bg-[#fef2e5] flex items-center justify-center shrink-0 mt-[1px]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" stroke="#f09345" strokeWidth="1.8"/><circle cx="12" cy="10" r="3" stroke="#f09345" strokeWidth="1.8"/></svg>
                      </div>
                      <div>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[rgba(0,0,0,0.4)] uppercase tracking-[0.6px] mb-[2px]">Location</p>
                        <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">New York, NY</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-[36px] h-[36px] rounded-full bg-[#f5f4f2] flex items-center justify-center shrink-0 mt-[1px]">
                        <img src={wechatLogo} alt="WeChat" className="w-[24px] h-[22px] object-contain" />
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[rgba(0,0,0,0.4)] uppercase tracking-[0.6px]">WeChat</p>
                        <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=gh_898ffa8e98be==&scene=110" target="_blank" rel="noopener noreferrer" className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black hover:opacity-75 transition-opacity no-underline">NY国潮君</a>
                        <div className="flex items-center gap-3 mt-1">
                          <img src={imgWeChatQr} alt="WeChat QR code" className="w-[72px] h-[72px] rounded-[6px] object-cover shrink-0" />
                          <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[rgba(0,0,0,0.5)] leading-[1.4]">Scan to follow us on WeChat</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-[20px] p-6 border border-[rgba(0,0,0,0.08)] flex flex-col gap-4">
                  <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-black tracking-[-0.36px]">Social Media</h3>
                  <div className="flex flex-col gap-3">
                    {SOCIAL_ITEMS.map(({ name, url, icon, bg, hover }) => (
                      <a key={name} href={url} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-3 group no-underline">
                        <div className={`w-[32px] h-[32px] rounded-full flex items-center justify-center shrink-0 transition-colors ${bg} ${hover}`}>
                          {icon}
                        </div>
                        <span className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.68)] group-hover:text-[#333] transition-colors">{name}</span>
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* We Look Forward */}
<FooterSection onNavigate={onNavigate} />
      </div>
    </div>
  );
}
