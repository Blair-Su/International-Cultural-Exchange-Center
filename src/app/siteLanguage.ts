export const LANGUAGES = ["English", "简体中文", "繁體中文"] as const;

export type SiteLanguage = (typeof LANGUAGES)[number];

export const LANGUAGE_STORAGE_KEY = "icec-language";
export const LANGUAGE_CHANGE_EVENT = "icec-language-change";

export function isSiteLanguage(value: string | null): value is SiteLanguage {
  return value === "English" || value === "简体中文" || value === "繁體中文";
}

export function getStoredLanguage(): SiteLanguage {
  if (typeof window === "undefined") return "English";

  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return isSiteLanguage(stored) ? stored : "English";
}

export function setStoredLanguage(language: SiteLanguage) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  window.dispatchEvent(new CustomEvent<SiteLanguage>(LANGUAGE_CHANGE_EVENT, { detail: language }));
}
