import { useState } from "react";
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

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const navigate = (p: Page) => {
    setPage(p);
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
