import Header from "@/components/Visitors/Header";
import HeroSection from "@/components/Visitors/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col bg-zinc-50 font-sans w-screen h-screen">
      <Header />
      <HeroSection />
    </div>
  );
}
