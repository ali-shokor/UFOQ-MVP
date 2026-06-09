import Hero from "../components/hero/Hero";
import ProblemSolution from "../components/sections/ProblemSolution";
import WhyUFOQ from "../components/sections/WhyUFOQ";
import YearSelector from "../components/years/YearSelector";
import PackageSection from "../components/packages/PackageSection";
import Testimonials from "../components/sections/Testimonials";
import AboutUs from "../components/sections/AboutUs";
import FAQ from "../components/sections/FAQ";
import ContactSection from "../components/contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <WhyUFOQ />
      <YearSelector />
      <PackageSection />
      <Testimonials />
      <AboutUs />
      <FAQ />
      <ContactSection />
    </>
  );
}
