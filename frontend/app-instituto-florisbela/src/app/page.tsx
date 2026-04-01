import Header from "@/components/Visitors/Header";
import HeroSection from "@/components/Visitors/HeroSection/HeroSection";
import DifferentialsSection from "@/components/Visitors/DifferentialsSection/DifferentialsSection";
import MethodologySection from "@/components/Visitors/MethodologySection/MethodologySection";
import ClassesSection from "@/components/Visitors/ClassesSection/ClassesSection";
import ContactUs from "@/components/Visitors/ContactUs";
import Footer from "@/components/Visitors/Footer";

export default function Home() {
  return (
    <div className="flex flex-col bg-zinc-50 font-sans w-screen h-screen">
      <Header />
      <HeroSection />
      <DifferentialsSection />
      <MethodologySection />
      <ClassesSection />
      <ContactUs />
      <Footer />
    </div>
  );
}
