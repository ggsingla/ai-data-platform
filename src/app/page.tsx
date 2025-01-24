import CTA from "@/components/landing/CTA";
import ExpertDomains from "@/components/landing/ExpertDomains";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Navbar from "@/components/landing/Navbar";

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
