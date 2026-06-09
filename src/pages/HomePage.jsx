import Hero from "../components/hero/Hero";
import ProblemSolution from "../components/sections/ProblemSolution";
import YearSelector from "../components/years/YearSelector";
import PackageSection from "../components/packages/PackageSection";
import WhyUFOQ from "../components/sections/WhyUFOQ";
import AboutUs from "../components/sections/AboutUs";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import ContactSection from "../components/contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <YearSelector />
      <PackageSection />
      <WhyUFOQ />
      <AboutUs />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
