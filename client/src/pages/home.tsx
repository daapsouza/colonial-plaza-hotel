import { Navigation } from "@/components/navigation";
import { BookingEngine } from "@/components/booking-engine";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { AccommodationsSection } from "@/components/accommodations-section";
import { GastronomySection } from "@/components/gastronomy-section";
import { LeisureSection } from "@/components/leisure-section";
import { EventsSection } from "@/components/events-section";
import { GallerySection } from "@/components/gallery-section";
import { ContactSection } from "@/components/contact-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <BookingEngine />
      <main>
        <HeroSection />
        <AboutSection />
        <AccommodationsSection />
        <GastronomySection />
        <LeisureSection />
        <EventsSection />
        <GallerySection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
