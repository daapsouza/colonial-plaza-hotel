import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import heroPoolImage from "@assets/03_1765302684930.jpg";
import slide01 from "@assets/01_1765294579590.png";
import slide02 from "@assets/02_1765294579590.png";
import slide03 from "@assets/03_1765294579589.png";
import slide04 from "@assets/04_1765294579588.png";

const promoSlides = [
  { id: 1, title: "Natal", image: slide01, link: "https://book.omnibees.com/hotel/7863/package/461861?lang=pt-BR&currencyId=16&CheckIn=24122025&CheckOut=25122025&ad=1" },
  { id: 2, title: "Ano Novo", image: slide02, link: "https://book.omnibees.com/hotel/7863/package/461865?lang=pt-BR&currencyId=16&CheckIn=30122025&CheckOut=31122025&ad=1" },
  { id: 3, title: "Eventos", image: slide03, link: null },
  { id: 4, title: "Day Use", image: slide04, link: null },
];

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollToContent = () => {
    const element = document.querySelector("#hotel");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
        style={{ backgroundImage: `url(${heroPoolImage})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 pt-16 md:pt-16 pb-4">
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
          <div className="embla overflow-hidden rounded-lg" ref={emblaRef}>
            <div className="embla__container flex">
              {promoSlides.map((slide) => (
                <div
                  key={slide.id}
                  className="embla__slide flex-[0_0_100%]"
                  data-testid={`promo-slide-${slide.id}`}
                >
                  {slide.link ? (
                    <a href={slide.link} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="relative w-full aspect-[3/1] md:aspect-[4/1] overflow-hidden cursor-pointer">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    </a>
                  ) : (
                    <div className="relative w-full aspect-[3/1] md:aspect-[4/1] overflow-hidden">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
            aria-label="Slide anterior"
            data-testid="promo-prev"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
            aria-label="Próximo slide"
            data-testid="promo-next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex items-start justify-center px-4 pt-4 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white font-bold leading-tight mb-2" style={{ textShadow: '0 0 10px rgba(0,0,0,1), 0 2px 12px rgba(0,0,0,1), 0 4px 20px rgba(0,0,0,0.9)' }}>
            Colonial Plaza Hotel
          </h1>
          <span className="text-white text-sm md:text-base uppercase tracking-[0.3em] mb-6 block font-bold" style={{ textShadow: '0 0 8px rgba(0,0,0,1), 0 2px 10px rgba(0,0,0,1), 0 4px 16px rgba(0,0,0,0.9)' }}>
            Pindamonhangaba - SP
          </span>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8 font-semibold" style={{ textShadow: '0 0 6px rgba(0,0,0,1), 0 2px 8px rgba(0,0,0,1), 0 4px 12px rgba(0,0,0,0.9)' }}>
            Entre a Serra da Mantiqueira e Serra do Mar, descubra seu destino de tranquilidade e conforto.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://book.omnibees.com/hotel/7863"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="h-12 px-8 text-base bg-primary"
                data-testid="button-hero-reserve"
              >
                Faça sua Reserva
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20"
              onClick={scrollToContent}
              data-testid="button-hero-explore"
            >
              Explorar
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 30s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}
