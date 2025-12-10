import { MapPin, Mountain, Utensils, Users, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import hotelImage from "@assets/01_1765290461030.jpg";

const features = [
  {
    icon: Mountain,
    title: "40 km",
    description: "de Campos do Jordão",
  },
  {
    icon: MapPin,
    title: "33 km",
    description: "da Catedral Aparecida",
  },
  {
    icon: Utensils,
    title: "Gastronomia",
    description: "Regional e Internacional",
  },
  {
    icon: Users,
    title: "Recreação",
    description: "Para toda família",
  },
];

export function AboutSection() {
  return (
    <section id="hotel" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Bem-vindo ao
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-2 mb-6">
              Colonial Plaza Hotel
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              Entre a Serra da Mantiqueira e Serra do Mar, o Colonial Plaza
              Hotel está localizado na região do Vale do Paraíba na cidade de
              Pindamonhangaba, interior do Estado de São Paulo.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Possuímos excelente infraestrutura de lazer para atender toda
              família e contamos com equipe de recreação aos finais de semana,
              feriados e todos os dias nos períodos de férias.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-md bg-card"
                  data-testid={`feature-${index}`}
                >
                  <feature.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">{feature.title}</p>
                    <p className="text-muted-foreground text-xs">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button data-testid="button-video-institucional">
                  <Play className="mr-2 h-4 w-4" />
                  Vídeo Institucional
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-4xl p-0 bg-black border-none">
                <div className="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/cGVRYHW4h58?autoplay=1"
                    title="Vídeo Institucional Colonial Plaza Hotel"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-md"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={hotelImage}
                alt="Vista aérea do Colonial Plaza Hotel"
                className="w-full rounded-md shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-md hidden md:block">
                <p className="font-serif text-3xl font-semibold">25+</p>
                <p className="text-sm opacity-90">Anos de Tradição</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
