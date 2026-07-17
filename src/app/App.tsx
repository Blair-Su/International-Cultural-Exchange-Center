import { useEffect, useState } from "react";
import HomePageTest2 from "@/imports/HomePageTest2/index";
import AboutPage from "./AboutPage";
import ClassesPage from "./ClassesPage";
import ArtFoundationPage from "./ArtFoundationPage";
import VolunteerPage from "./VolunteerPage";
import EventsPage from "./EventsPage";
import ContactPage from "./ContactPage";
import DonatePage from "./DonatePage";
import type { Page } from "./types";

export type { Page };

const PAGES: Page[] = [
  "home",
  "about",
  "classes",
  "artfoundation",
  "volunteer",
  "events",
  "events-gallery",
  "flower-festival",
  "contact",
  "donate",
];

const pageFromHash = (): Page => {
  const hashPage = window.location.hash.replace("#", "") as Page;
  return PAGES.includes(hashPage) ? hashPage : "home";
};

export default function App() {
  const [page, setPage] = useState<Page>(() => pageFromHash());

  useEffect(() => {
    const currentPage = pageFromHash();
    window.history.replaceState({ page: currentPage }, "", currentPage === "home" ? window.location.pathname : `#${currentPage}`);

    const handlePopState = (event: PopStateEvent) => {
      const historyPage = event.state?.page as Page | undefined;
      const nextPage = historyPage && PAGES.includes(historyPage) ? historyPage : pageFromHash();
      setPage(nextPage);
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (p: Page) => {
    setPage(p);
    window.history.pushState({ page: p }, "", p === "home" ? window.location.pathname : `#${p}`);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  if (page === "about") return <AboutPage onNavigate={navigate} />;
  if (page === "classes") return <ClassesPage onNavigate={navigate} />;
  if (page === "artfoundation") return <ArtFoundationPage onNavigate={navigate} />;
  if (page === "volunteer") return <VolunteerPage onNavigate={navigate} />;
  if (page === "events") return <EventsPage onNavigate={navigate} />;
  if (page === "events-gallery") return <EventsPage onNavigate={navigate} initialSection="past-events" />;
  if (page === "flower-festival") return <EventsPage onNavigate={navigate} initialView="detail" />;
  if (page === "contact") return <ContactPage onNavigate={navigate} />;
  if (page === "donate") return <DonatePage onNavigate={navigate} />;

  return <HomePageTest2 onNavigate={navigate} />;
}
