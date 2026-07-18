import { useState, useEffect, useRef, useCallback } from "react";
import type { Page } from "../types";
import logoImg from "@/imports/Frame_427319345-1.png";

interface ICECHeaderProps {
  onNavigate: (page: Page) => void;
  activePage?: Page;
}

const NAV_LINKS: Array<{ label: string; page?: Page; children?: string[] }> = [
  { label: "Home",      page: "home"  },
  { label: "About",     page: "about" },
  { label: "Programs",  children: ["Events", "Classes", "Art Foundation"] },
  { label: "Volunteer", page: "volunteer" },
  { label: "Contact", page: "contact" },
];

const LANGUAGES = ["English", "简体中文", "繁体中文"];

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Kept for backwards compatibility
export function ICECTopBar() { return null; }

export function ICECHeader({ onNavigate, activePage }: ICECHeaderProps) {
  const [open, setOpen] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [lang, setLang] = useState("English");
  const [langOpen, setLangOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobilePrograms, setMobilePrograms] = useState(false);
  const langBtnRef = useRef<HTMLButtonElement>(null);
  const mobileLangBtnRef = useRef<HTMLButtonElement>(null);
  const programsBtnRef = useRef<HTMLDivElement>(null);
  const [dropdownPos, setDropdownPos] = useState<{ top: number; right: number } | null>(null);

  const close = () => { setOpen(false); setMobilePrograms(false); };

  useEffect(() => {
    const onScroll = () => setTopBarVisible(window.scrollY < 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openLangDropdown = useCallback((btnRef: React.RefObject<HTMLButtonElement | null>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    setDropdownPos({
      top: rect.bottom + 4,
      right: window.innerWidth - rect.right,
    });
    setLangOpen(true);
  }, []);

  // Close language dropdown on outside click or scroll
  useEffect(() => {
    if (!langOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      const clickedBtn = langBtnRef.current?.contains(target) || mobileLangBtnRef.current?.contains(target);
      if (!clickedBtn) setLangOpen(false);
    };
    const onScroll = () => setLangOpen(false);
    document.addEventListener("mousedown", handler);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handler);
      window.removeEventListener("scroll", onScroll);
    };
  }, [langOpen]);

  // Fixed-position dropdown — renders outside any overflow:hidden ancestor
  const langDropdown = langOpen && dropdownPos ? (
    <div
      className="fixed bg-white rounded-[6px] shadow-xl overflow-hidden min-w-[120px]"
      style={{ top: dropdownPos.top, right: dropdownPos.right, zIndex: 9999 }}
    >
      {LANGUAGES.map((l) => (
        <button
          key={l}
          onClick={() => { setLang(l); setLangOpen(false); }}
          className={[
            "w-full text-left px-[14px] py-[9px] font-['Inter',sans-serif] font-medium text-[14px] leading-[1.2] transition-colors hover:bg-gray-50",
            l === lang ? "text-[#E48D62]" : "text-[#333]",
          ].join(" ")}
        >
          {l}
        </button>
      ))}
    </div>
  ) : null;

  return (
    <div className="sticky top-0 w-full" style={{ zIndex: 100 }}>
      {/* ── top bar ───────────────────────────────────────────────── */}
      <div
        className="bg-gradient-to-r from-[#e8a876] to-[#6cc8e8] w-full overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: topBarVisible ? 32 : 0 }}
      >
        <div className="flex items-center justify-center h-[32px] px-4 sm:px-6 lg:px-12">
          <div className="flex flex-1 items-center justify-between max-w-full">
            <div className="hidden sm:block w-[81px]" />

            <p className="font-['Inter',sans-serif] font-medium text-[13px] sm:text-[15px] text-white text-center leading-[1.2] truncate flex-1 sm:flex-none">
              Flower Festival 2027 · Apr
            </p>

            {/* Desktop language switcher */}
            <div className="hidden sm:flex items-center">
              <button
                ref={langBtnRef}
                onClick={() => langOpen ? setLangOpen(false) : openLangDropdown(langBtnRef)}
                className="flex items-center gap-[6px] hover:opacity-80 transition-opacity"
              >
                <p className="font-['Inter',sans-serif] font-medium text-[15px] text-white leading-[1.2]">{lang}</p>
                <svg
                  width="18" height="18" viewBox="0 0 20 20" fill="none"
                  className={`transition-transform duration-150 ${langOpen ? "rotate-180" : ""}`}
                >
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Mobile language switcher */}
            <div className="sm:hidden flex items-center">
              <button
                ref={mobileLangBtnRef}
                onClick={() => langOpen ? setLangOpen(false) : openLangDropdown(mobileLangBtnRef)}
                className="flex items-center justify-center w-[40px] h-[32px] hover:opacity-80 transition-opacity -mr-[4px]"
                aria-label={`Language: ${lang}`}
              >
                <GlobeIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── main header bar ─────────────────────────────────────────── */}
      <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.8)] w-full">
        <div className="px-4 sm:px-6 lg:px-12 py-3 sm:py-4">
          <div className="flex items-center justify-between w-full">

            <button
              onClick={() => { onNavigate("home"); close(); }}
              className="flex items-center gap-1 lg:gap-[18px] cursor-pointer min-w-0 group"
            >
              <img alt="ICEC logo" src={logoImg} className="shrink-0 size-9 lg:size-[48px] object-contain" />
              <p className="font-['Inter',sans-serif] font-medium text-[15px] lg:text-[23px] text-black tracking-[-0.2px] leading-[1.2] whitespace-nowrap">
                International Cultural Exchange Center
              </p>
            </button>

            <nav className="hidden lg:flex items-center gap-[18px] xl:gap-[22px]">
              {NAV_LINKS.map(({ label, page, children }) =>
                children ? (
                  <div
                    key={label}
                    ref={programsBtnRef}
                    className="relative"
                    onMouseEnter={() => setProgramsOpen(true)}
                    onMouseLeave={() => setProgramsOpen(false)}
                  >
                    <button
                      className="flex items-center gap-[4px] font-['Inter',sans-serif] font-medium text-[15px] xl:text-[16px] leading-[1.2] whitespace-nowrap cursor-pointer transition-colors text-[rgba(72,72,72,0.76)] hover:text-black"
                    >
                      {label}
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className={`transition-transform duration-150 ${programsOpen ? "rotate-180" : ""}`}>
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {programsOpen && (
                      <div className="absolute top-full left-0 pt-2 min-w-[160px]" style={{ zIndex: 200 }}>
                      <div className="bg-white rounded-[8px] shadow-lg overflow-hidden">
                        {children.map((sub) => {
                          const subPage = sub === "Classes" ? "classes" as const : sub === "Art Foundation" ? "artfoundation" as const : sub === "Events" ? "events" as const : undefined;
                          return (
                            <button key={sub} onClick={() => { if (subPage) { onNavigate(subPage); setProgramsOpen(false); } }} className="w-full text-left px-[16px] py-[10px] font-['Inter',sans-serif] font-medium text-[14px] text-[#333] hover:bg-gray-50 hover:text-black transition-colors whitespace-nowrap">
                              {sub}
                            </button>
                          );
                        })}
                      </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={label}
                    onClick={() => page && onNavigate(page)}
                    className={[
                      "font-['Inter',sans-serif] font-medium text-[15px] xl:text-[16px] leading-[1.2] whitespace-nowrap cursor-pointer transition-colors",
                      activePage === page ? "text-black" : "text-[rgba(72,72,72,0.76)] hover:text-black",
                    ].join(" ")}
                  >
                    {label}
                  </button>
                )
              )}
              <div onClick={() => onNavigate("donate")} className="bg-[#fef2e5] flex h-[38px] items-center justify-center px-[14px] rounded-[4px] cursor-pointer hover:bg-[#fde8d0] transition-colors shrink-0">
                <span className="font-['Inter',sans-serif] font-medium text-[15px] xl:text-[16px] text-[#E48D62] leading-[1.2]">
                  Donate
                </span>
              </div>
            </nav>

            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-black/5 active:bg-black/10 transition-colors shrink-0"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 4L18 18M4 18L18 4" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M3 6H19M3 11H19M3 16H19" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-black/10 bg-white/95 backdrop-blur-[15px]">
            <div className="px-4 sm:px-6 py-2 flex flex-col">
              {NAV_LINKS.map(({ label, page, children }) =>
                children ? (
                  <div key={label} className="border-b border-black/[0.06]">
                    <button
                      onClick={() => setMobilePrograms(!mobilePrograms)}
                      className="w-full flex items-center justify-between text-left font-['Inter',sans-serif] font-medium text-[17px] py-[14px] text-[rgba(50,50,50,0.8)] hover:text-black transition-colors"
                    >
                      {label}
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className={`transition-transform duration-150 ${mobilePrograms ? "rotate-180" : ""}`}>
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {mobilePrograms && (
                      <div className="flex flex-col pb-2 pl-4">
                        {children.map((sub) => {
                          const subPage = sub === "Classes" ? "classes" as const : sub === "Art Foundation" ? "artfoundation" as const : sub === "Events" ? "events" as const : undefined;
                          return (
                            <button key={sub} onClick={() => { if (subPage) { onNavigate(subPage); close(); } }} className="text-left font-['Inter',sans-serif] font-medium text-[15px] py-[10px] text-[rgba(50,50,50,0.7)] hover:text-black transition-colors">
                              {sub}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={label}
                    onClick={() => { if (page) { onNavigate(page); close(); } }}
                    className={[
                      "text-left font-['Inter',sans-serif] font-medium text-[17px] py-[14px] border-b border-black/[0.06] last:border-0 transition-colors",
                      activePage === page ? "text-[#E48D62] font-semibold" : "text-[rgba(50,50,50,0.8)] hover:text-black",
                    ].join(" ")}
                  >
                    {label}
                  </button>
                )
              )}
              <div
                onClick={() => { onNavigate("donate"); close(); }}
                className="mt-3 mb-4 bg-[#fef2e5] flex h-[46px] items-center justify-center rounded-[4px] cursor-pointer hover:bg-[#fde8d0] transition-colors"
              >
                <span className="font-['Inter',sans-serif] font-medium text-[17px] text-[#E48D62]">Donate</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fixed-position dropdown — outside all overflow:hidden/stacking-context ancestors */}
      {langDropdown}
    </div>
  );
}
