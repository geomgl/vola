import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { Challenge } from "@/components/challenge";
import { Solution } from "@/components/solution";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden w-screen">
      <Navbar />
      <main>
        <Hero />
        {/* <LogoCloud /> */}
        <Challenge />
        <Solution />
        <Features />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
