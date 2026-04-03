import HeroSection from "@/components/Visitors/HeroSection/HeroSection";
import DifferentialsSection from "@/components/Visitors/DifferentialsSection/DifferentialsSection";
import MethodologySection from "@/components/Visitors/MethodologySection/MethodologySection";
import ClassesSection from "@/components/Visitors/ClassesSection/ClassesSection";
import ContactUs from "@/components/Visitors/ContactUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DifferentialsSection />
      <MethodologySection />
      <ClassesSection />
      <ContactUs />
    </>
  );
}
