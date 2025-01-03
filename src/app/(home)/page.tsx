import EventSection from "@/app/(home)/components/EventSection";
import HeroSection from "@/app/(home)/components/HeroSection";
import WelcomeSection from "@/app/(home)/components/WelcomeSection";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      <WelcomeSection />
      <EventSection />
    </div>
  );
}
