import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Promotions from "@/components/Promotions";
import Financing from "@/components/Financing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatCTA from "@/components/FloatCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Promotions />
        <Services />
        <WhyUs />
        <Process />
        <Testimonials />
        <Financing />
        <Contact />
      </main>
      <Footer />
      <FloatCTA />
    </>
  );
}
