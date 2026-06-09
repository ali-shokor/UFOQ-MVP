import Hero from "../components/hero/Hero";
import YearSelector from "../components/years/YearSelector";
import PackageSection from "../components/packages/PackageSection";
import ContactSection from "../components/contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <YearSelector />
      <PackageSection />
      <ContactSection />
    </>
  );
}
