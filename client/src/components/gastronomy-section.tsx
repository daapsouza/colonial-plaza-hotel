import { Clock, Utensils, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import gastroImage from "@assets/gastronomia/01-2.jpg";
import gastroImage2 from "@assets/gastronomia/02-2.jpg";

export function GastronomySection() {
  return (
    <section id="gastronomia" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <img
              src={gastroImage}
              alt="Restaurante Colonial Plaza"
              className="w-full rounded-md shadow-lg"
            />
            <img
              src={gastroImage2}
              alt="Café da manhã Colonial Plaza"
              className="absolute -bottom-8 -right-8 w-2/3 rounded-md shadow-xl border-4 border-background hidden md:block"
            />
          </div>

          <div className="lg:pl-8">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Gastronomia
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-6">
              Sabores que Encantam
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              Nosso restaurante oferece uma experiência gastronômica única,
              combinando o melhor da culinária regional do Vale do Paraíba com
              toques contemporâneos e ingredientes frescos.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Café da manhã completo com produtos artesanais, almoço com buffet
              variado e jantar à la carte com pratos autorais do nosso chef.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4" data-testid="schedule-breakfast">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Café da Manhã</p>
                  <p className="text-sm text-muted-foreground">
                    06h30 às 10h00
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4" data-testid="schedule-lunch">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Utensils className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Almoço</p>
                  <p className="text-sm text-muted-foreground">
                    12h00 às 15h00
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4" data-testid="schedule-dinner">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wine className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Jantar</p>
                  <p className="text-sm text-muted-foreground">
                    19h00 às 22h00
                  </p>
                </div>
              </div>
            </div>

            <Link href="/cardapio">
              <Button data-testid="button-view-menu">
                Ver Cardápio Completo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
