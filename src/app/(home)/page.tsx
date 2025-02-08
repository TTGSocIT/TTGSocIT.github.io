import EventSection from "@/app/(home)/components/EventSection";
import HeroSection from "@/app/(home)/components/HeroSection";
import WelcomeSection from "@/app/(home)/components/WelcomeSection";
import ValueSection from "@/app/(home)/components/ValueSection";
import TeamSection from "@/app/(home)/components/TeamSection";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      <WelcomeSection />
      <EventSection />
      <ValueSection />
      
    </div>
  );
}
