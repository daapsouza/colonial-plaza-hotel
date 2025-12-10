import {
  Waves,
  TreePine,
  Dumbbell,
  Users,
  Gamepad2,
  Baby,
  Sun,
  Mountain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import poolImage from "@assets/galeria/01-1.jpg";

const amenities = [
  {
    icon: Waves,
    title: "Piscinas",
    description: "Piscina adulto e infantil aquecidas",
  },
  {
    icon: TreePine,
    title: "Trilhas",
    description: "Trilhas ecológicas na propriedade",
  },
  {
    icon: Dumbbell,
    title: "Academia",
    description: "Equipamentos modernos 24h",
  },
  {
    icon: Users,
    title: "Recreação",
    description: "Equipe de monitores nos fins de semana",
  },
  {
    icon: Gamepad2,
    title: "Salão de Jogos",
    description: "Sinuca, ping pong e jogos de mesa",
  },
  {
    icon: Baby,
    title: "Playground",
    description: "Área kids com brinquedos seguros",
  },
  {
    icon: Sun,
    title: "Solário",
    description: "Área de descanso ao ar livre",
  },
  {
    icon: Mountain,
    title: "Mirante",
    description: "Vista panorâmica das montanhas",
  },
];

export function LeisureSection() {
  return (
    <section id="lazer" className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Áreas de Lazer
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-4">
            Diversão Para Toda Família
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aproveite nossa completa infraestrutura de lazer, pensada para todas
            as idades e momentos da sua estadia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={poolImage}
              alt="Piscina do hotel com vista para as montanhas"
              className="w-full rounded-md shadow-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="p-4 rounded-md bg-background hover-elevate transition-all cursor-pointer"
                data-testid={`amenity-${index}`}
              >
                <amenity.icon className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-medium text-sm mb-1">{amenity.title}</h3>
                <p className="text-muted-foreground text-xs">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/areas-de-lazer">
            <Button size="lg" data-testid="button-view-structure">
              Conheça Toda Estrutura
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
