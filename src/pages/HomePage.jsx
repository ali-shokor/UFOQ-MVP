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

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Suspense fallback={null}>
        <ProblemSolution />
        <WhyUFOQ />
        <YearSelector />
        <PackageSection />
        <Testimonials />
        <AboutUs />
        <FAQ />
        <ContactSection />
      </Suspense>
    </>
  );
}
