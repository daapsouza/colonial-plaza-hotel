import { Users, Mic, Camera, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import eventImage from "@assets/eventos/DSC01967.jpg";

const eventSpaces = [
  {
    icon: Users,
    title: "Eventos Corporativos",
    capacity: "Até 300 pessoas",
    description: "Salas de reunião e auditório com equipamentos audiovisuais",
  },
  {
    icon: Camera,
    title: "Casamentos",
    capacity: "Até 500 pessoas",
    description: "Espaços internos e externos com vista para as montanhas",
  },
  {
    icon: Mic,
    title: "Confraternizações",
    capacity: "Até 200 pessoas",
    description: "Salões climatizados com estrutura completa",
  },
  {
    icon: Utensils,
    title: "Buffet Exclusivo",
    capacity: "Cardápios personalizados",
    description: "Gastronomia de alta qualidade para seu evento",
  },
];

export function EventsSection() {
  return (
    <section id="eventos" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Eventos
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-6">
              Celebre Momentos Especiais
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Realizamos eventos corporativos, casamentos, aniversários e
              confraternizações com toda a estrutura que você precisa. Nossa
              equipe especializada cuida de cada detalhe para tornar seu evento
              inesquecível.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {eventSpaces.map((space, index) => (
                <Card key={index} className="p-4" data-testid={`event-space-${index}`}>
                  <space.icon className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-medium mb-1">{space.title}</h3>
                  <p className="text-xs text-primary mb-1">{space.capacity}</p>
                  <p className="text-muted-foreground text-xs">
                    {space.description}
                  </p>
                </Card>
              ))}
            </div>

            <a 
              href="https://api.whatsapp.com/send?phone=5512992578072&text=Ol%C3%A1,%20Venho%20atrav%C3%A9s%20do%20Site%20e%20gostaria%20de%20fazer%20uma%20cota%C3%A7%C3%A3o%20de%20reserva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button data-testid="button-request-quote">
                Solicitar Orçamento
              </Button>
            </a>
          </div>

          <div className="relative">
            <img
              src={eventImage}
              alt="Espaço de eventos decorado para casamento"
              className="w-full rounded-md shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-md" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-serif text-2xl mb-2">
                Cenário Perfeito
              </p>
              <p className="text-sm text-white/80">
                Vista privilegiada para as montanhas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
