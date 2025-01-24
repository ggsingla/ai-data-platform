import CTA from "./_components/CTA";
import ExpertDomains from "./_components/ExpertDomains";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import HowItWorks from "./_components/HowItWorks";
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <ExpertDomains />
      <CTA />
      <Footer />
    </main>
  );
}
