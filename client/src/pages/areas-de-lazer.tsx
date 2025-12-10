import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

import lazer01 from "@assets/lazer/lazer-01.jpg";
import lazer02 from "@assets/lazer/lazer-02.jpg";
import lazer03 from "@assets/lazer/lazer-03.jpg";
import lazer04 from "@assets/lazer/lazer-04.jpg";
import lazer05 from "@assets/lazer/lazer-05.jpg";
import lazer06 from "@assets/lazer/lazer-06.jpg";
import lazer07 from "@assets/lazer/lazer-07.jpg";
import lazer08 from "@assets/lazer/lazer-08.jpg";
import lazer09 from "@assets/lazer/lazer-09.jpg";
import lazer10 from "@assets/lazer/lazer-10.jpg";
import lazer11 from "@assets/lazer/lazer-11.jpg";

const allImages = [lazer01, lazer02, lazer03, lazer04, lazer05, lazer06, lazer07, lazer08, lazer09, lazer10, lazer11];

const kidsActivities = [
  "Reunindo a Galera",
  "Atividades Aquáticas",
  "Almoço com os Tios",
  "Jogos Temáticos",
  "Jantares Temáticos",
];

const adultActivities = [
  "Caminhada",
  "Hidroginástica",
  "Desafios",
  "Tarde Esportiva",
  "Jogos Noturnos",
];

const infrastructure = [
  "Quadra de Tênis, Vôlei de Areia, Beach Tennis e Campo Society",
  "01 Piscina Coberta e Aquecida, 01 Piscina com Tobogã, Cogumelo, Bar Molhado e Quiosque",
  "Sauna",
  "Playground Colonial",
  "Redário",
  "Espaço Colonial Kids com Brinquedoteca",
  "Salão de Jogos",
  "Pista para Caminhada e Corrida",
  "Academia",
  "Jacuzzi (Por motivos de segurança a utilização da jacuzzi é permitida apenas para maiores de 16 anos)",
];

function ImageGallery({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="relative">
      <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
        <img
          src={images[selectedIndex]}
          alt={`Área de Lazer - Foto ${selectedIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
          data-testid="btn-prev"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
          data-testid="btn-next"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1.5 rounded-full">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2 justify-center">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`flex-shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-all ${
              index === selectedIndex ? "border-primary ring-2 ring-primary/30" : "border-transparent opacity-70 hover:opacity-100"
            }`}
            data-testid={`thumb-${index}`}
          >
            <img
              src={img}
              alt={`Miniatura ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function AreasLazer() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground text-center mb-4">
            Áreas de Lazer
          </h1>
          <p className="text-muted-foreground text-center max-w-4xl mx-auto text-lg">
            O Colonial Plaza Hotel possui excelente infraestrutura de lazer para atender toda família e conta com equipe de recreação aos finais de semana na baixa estação (fevereiro a junho e agosto a novembro), feriados e todos os dias nos períodos de férias (janeiro e julho).
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <ImageGallery images={allImages} />
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-3xl text-foreground text-center mb-4">
            Algumas de nossas atividades
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            A recreação ocorre das 9h às 22h
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card data-testid="card-kids">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-foreground mb-4 text-center">
                  Programação Kids (04 a 12 anos)
                </h3>
                <ul className="space-y-3">
                  {kidsActivities.map((activity, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card data-testid="card-adults">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-foreground mb-4 text-center">
                  Programação Adultos
                </h3>
                <ul className="space-y-3">
                  {adultActivities.map((activity, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-3xl text-foreground text-center mb-12">
            Nossa Infraestrutura
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {infrastructure.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border"
                data-testid={`infra-${index}`}
              >
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Reserve sua Estadia
          </h2>
          <p className="text-primary-foreground/90 mb-8 text-lg">
            Aproveite todas as nossas áreas de lazer durante sua hospedagem.
          </p>
          <a
            href="https://book.omnibees.com/hotel/7863"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" data-testid="button-reserve-cta">
              Fazer Reserva
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
