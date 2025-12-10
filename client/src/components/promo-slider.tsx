import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import heroPoolImage from "@assets/03_1765290235859.jpg";
import hotelExteriorImage from "@assets/01_1765290461030.jpg";
import breakfastImage from "@assets/generated_images/brazilian_breakfast_buffet.png";
import eventVenueImage from "@assets/generated_images/hotel_event_venue.png";
import roomImage from "@assets/generated_images/luxury_hotel_room_interior.png";
import poolImage from "@assets/generated_images/pool_with_mountain_views.png";
import restaurantImage from "@assets/generated_images/gourmet_restaurant_dish.png";

const promoSlides = [
  {
    id: 1,
    title: "Piscinas",
    subtitle: "Área de lazer completa",
    image: heroPoolImage,
    link: "#lazer",
  },
  {
    id: 2,
    title: "Acomodações",
    subtitle: "Quartos confortáveis",
    image: roomImage,
    link: "#acomodacoes",
  },
  {
    id: 3,
    title: "Gastronomia",
    subtitle: "Sabores únicos",
    image: restaurantImage,
    link: "#gastronomia",
  },
  {
    id: 4,
    title: "Café da Manhã",
    subtitle: "Buffet completo",
    image: breakfastImage,
    link: "#gastronomia",
  },
  {
    id: 5,
    title: "Eventos",
    subtitle: "Espaços especiais",
    image: eventVenueImage,
    link: "#eventos",
  },
  {
    id: 6,
    title: "Lazer",
    subtitle: "Piscina com vista",
    image: poolImage,
    link: "#lazer",
  },
  {
    id: 7,
    title: "Estrutura",
    subtitle: "Hotel completo",
    image: hotelExteriorImage,
    link: "#hotel",
  },
];

export function PromoSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollToSection = (link: string) => {
    const el = document.querySelector(link);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-20 pb-6 bg-background">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-4">
            {promoSlides.map((slide) => (
              <div
                key={slide.id}
                className="embla__slide flex-[0_0_280px] md:flex-[0_0_320px] min-w-0"
              >
                <button
                  onClick={() => scrollToSection(slide.link)}
                  className="relative w-full h-48 md:h-56 rounded-md overflow-hidden group"
                  data-testid={`promo-slide-${slide.id}`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                    <h3 className="text-white font-serif text-xl md:text-2xl font-medium">
                      {slide.title}
                    </h3>
                    <p className="text-white/80 text-sm">{slide.subtitle}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Slide anterior"
          data-testid="promo-prev"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Próximo slide"
          data-testid="promo-next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {promoSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                selectedIndex === index
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
              data-testid={`promo-dot-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
