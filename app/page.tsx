import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { AppHighlights } from "@/components/AppHighlights";
import { SocialProof } from "@/components/SocialProof";
import { MentorShowcase } from "@/components/MentorShowcase";
import { Features } from "@/components/Features";
import { ForMentors } from "@/components/ForMentors";
import { ForSchools } from "@/components/ForSchools";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <AppHighlights />
        <SocialProof />
        <MentorShowcase />
        <Features />
        <ForMentors />
        <ForSchools />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
