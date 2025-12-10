import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import restaurante01 from "@assets/gastronomia/restaurante-01.jpg";
import restaurante02 from "@assets/gastronomia/restaurante-02.jpg";
import restaurante03 from "@assets/gastronomia/restaurante-03.jpg";
import quiosque01 from "@assets/gastronomia/quiosque-01.jpg";
import quiosque02 from "@assets/gastronomia/quiosque-02.jpg";
import quiosque03 from "@assets/gastronomia/quiosque-03.jpg";
import americanBar01 from "@assets/gastronomia/american-bar-01.png";
import americanBar02 from "@assets/gastronomia/american-bar-02.png";
import americanBar03 from "@assets/gastronomia/american-bar-03.png";
import barMolhado01 from "@assets/gastronomia/bar-molhado-01.jpg";
import barMolhado02 from "@assets/gastronomia/bar-molhado-02.jpg";
import barMolhado03 from "@assets/gastronomia/bar-molhado-03.png";
import copa01 from "@assets/gastronomia/copa-01.jpg";
import copa02 from "@assets/gastronomia/copa-02.jpg";
import copa03 from "@assets/gastronomia/copa-03.jpg";

const restauranteImages = [restaurante01, restaurante02, restaurante03];
const quiosqueImages = [quiosque01, quiosque02, quiosque03];
const americanBarImages = [americanBar03, americanBar02, americanBar01];
const barMolhadoImages = [barMolhado03, barMolhado02, barMolhado01];
const copaImages = [copa01, copa02, copa03];

function ImageGallery({ images, name }: { images: string[]; name: string }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="relative">
      <div className="relative aspect-[3/2] rounded-lg overflow-hidden">
        <img
          src={images[selectedIndex]}
          alt={`${name} - Foto ${selectedIndex + 1}`}
          className="w-full h-full object-cover"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={() => setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-1 rounded">
              {selectedIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 mt-3 justify-center">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-16 h-12 rounded overflow-hidden border-2 transition-colors ${
                index === selectedIndex ? "border-primary" : "border-transparent"
              }`}
            >
              <img
                src={img}
                alt={`${name} - Miniatura ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const spaces = [
  {
    id: 1,
    name: "Restaurante Plaza",
    images: restauranteImages,
    description: "Ambiente agradável, amplo e arejado com capacidade para 200 lugares, aberto ao público para café da manhã, almoço e jantar.",
  },
  {
    id: 2,
    name: "Espaço Gourmet / Quiosque da Piscina",
    images: quiosqueImages,
    description: "Um espaço amplo que pode ser integrado com o entorno possibilitando inúmeras combinações de ambientes para jantares, festas, churrascos, coquetéis, shows, festas dançantes e atividades de recreação.",
  },
  {
    id: 3,
    name: "American Bar",
    images: americanBarImages,
    description: "Serve drinks e porções, aberto toda sexta-feira e sábado.",
  },
  {
    id: 4,
    name: "Bar Molhado",
    images: barMolhadoImages,
    description: "Serve drinks, lanches e porções à beira da piscina.",
  },
  {
    id: 5,
    name: "Copa Baby 24h",
    images: copaImages,
    description: "Espaço para o preparo de mamadeiras para os bebês, a qualquer hora do dia.",
  },
];

export default function Gastronomia() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground text-center mb-4">
            Gastronomia
          </h1>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto text-lg">
            O Restaurante Plaza apresenta gastronomia nacional e internacional, do café da manhã ao jantar sempre com opções deliciosas. As hortaliças 100% orgânicas cultivadas no hotel e nossos pratos são preparados e servidos com todo carinho pela nossa equipe.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-3xl text-foreground text-center mb-12">
            Espaços
          </h2>
          
          <div className="space-y-16">
            {spaces.map((space, index) => (
              <div 
                key={space.id} 
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                data-testid={`space-${space.id}`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <ImageGallery images={space.images} name={space.name} />
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="font-serif text-2xl text-foreground mb-4">
                    {space.name}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {space.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Reserve sua Mesa
          </h2>
          <p className="text-primary-foreground/90 mb-8 text-lg">
            Entre em contato para reservar sua mesa ou solicitar cardápio especial.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5512992578072&text=Olá,%20gostaria%20de%20fazer%20uma%20reserva%20no%20restaurante."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" data-testid="button-reserve-table">
              Falar pelo WhatsApp
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
