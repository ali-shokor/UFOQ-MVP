import { lazy, Suspense } from "react";
import Hero from "../components/hero/Hero";
import Marquee from "../components/sections/Marquee";

const ProblemSolution = lazy(() => import("../components/sections/ProblemSolution"));
const WhyUFOQ = lazy(() => import("../components/sections/WhyUFOQ"));
const YearSelector = lazy(() => import("../components/years/YearSelector"));
const PackageSection = lazy(() => import("../components/packages/PackageSection"));
const Testimonials = lazy(() => import("../components/sections/Testimonials"));
const AboutUs = lazy(() => import("../components/sections/AboutUs"));
const FAQ = lazy(() => import("../components/sections/FAQ"));
const ContactSection = lazy(() => import("../components/contact/ContactSection"));

function SectionSkeleton() {
  return (
    <div style={{
      minHeight: "40vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{
        width: 40,
        height: 40,
        border: "3px solid rgba(120, 170, 242, 0.15)",
        borderTopColor: "#b4a1ff",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Suspense fallback={<SectionSkeleton />}>
        <ProblemSolution />
        <div className="home-section-gap" />
        <WhyUFOQ />
        <div className="home-section-gap" />
        <YearSelector />
        <div className="home-section-gap" />
        <PackageSection />
        <div className="home-section-gap" />
        <Testimonials />
        <div className="home-section-gap" />
        <AboutUs />
        <div className="home-section-gap" />
        <FAQ />
        <div className="home-section-gap" />
        <ContactSection />
      </Suspense>
    </>
  );
}
