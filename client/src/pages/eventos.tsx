import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Presentation, PartyPopper, Heart, Briefcase, Calendar } from "lucide-react";

const eventTypes = [
  {
    id: 1,
    name: "Eventos Corporativos",
    icon: Briefcase,
    description: "Salas equipadas com recursos audiovisuais, internet wi-fi e coffee break. Ideal para reuniões, treinamentos e convenções.",
    capacity: "Até 200 pessoas",
  },
  {
    id: 2,
    name: "Casamentos",
    icon: Heart,
    description: "Realize o casamento dos seus sonhos em um cenário deslumbrante. Oferecemos pacotes completos com decoração e gastronomia.",
    capacity: "Até 300 pessoas",
  },
  {
    id: 3,
    name: "Confraternizações",
    icon: PartyPopper,
    description: "Espaços versáteis para festas de fim de ano, aniversários e celebrações especiais com sua equipe ou família.",
    capacity: "Até 150 pessoas",
  },
  {
    id: 4,
    name: "Congressos e Seminários",
    icon: Presentation,
    description: "Infraestrutura completa para eventos de grande porte com auditório, salas de apoio e área de exposição.",
    capacity: "Até 250 pessoas",
  },
];

export default function Eventos() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground text-center mb-4">
            Eventos
          </h1>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto text-lg">
            O Colonial Plaza Hotel oferece espaços versáteis e completa infraestrutura 
            para realizar seu evento com excelência. Conte com nossa equipe especializada.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {eventTypes.map((event) => (
              <Card key={event.id} data-testid={`card-event-${event.id}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <event.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-serif text-xl text-foreground">{event.name}</h2>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="h-3 w-3" />
                        <span>{event.capacity}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-3xl text-foreground text-center mb-8">
            Estrutura para Eventos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <p className="text-muted-foreground">Salas de Reunião</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">1</div>
              <p className="text-muted-foreground">Auditório</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">300</div>
              <p className="text-muted-foreground">Capacidade Máxima</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">24h</div>
              <p className="text-muted-foreground">Suporte Técnico</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Solicite um Orçamento
          </h2>
          <p className="text-primary-foreground/90 mb-8 text-lg">
            Entre em contato com nossa equipe de eventos para criar o evento perfeito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=5512992578072&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20evento."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" data-testid="button-whatsapp-events">
                Falar pelo WhatsApp
              </Button>
            </a>
            <a href="mailto:reservas@colonialplazapinda.com.br">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" data-testid="button-email-events">
                Enviar E-mail
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
