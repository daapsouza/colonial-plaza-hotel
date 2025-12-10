import { Users, Bed, Wifi, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import roomImage from "@assets/generated_images/luxury_hotel_room_interior.png";
import standardImage from "@assets/01.jpg_1765297003142.jpeg";
import superiorImage from "@assets/01-2.jpg_1765297489119.jpeg";
import masterImage from "@assets/01-3.jpg_1765297357325.jpeg";

const rooms = [
  {
    id: 1,
    name: "Apartamento Standard",
    description:
      "Conforto essencial com vista para o jardim, ideal para viagens a trabalho ou casais.",
    capacity: "2 hóspedes",
    bed: "1 Cama Casal",
    amenities: ["Wi-Fi", "Ar Condicionado", "TV", "Frigobar"],
    price: "R$ 280",
    image: standardImage,
  },
  {
    id: 2,
    name: "Apartamento Superior",
    description:
      "Espaço amplo com varanda privativa e vista para as montanhas da Serra da Mantiqueira.",
    capacity: "3 hóspedes",
    bed: "1 Cama Casal + 1 Solteiro",
    amenities: ["Wi-Fi", "Ar Condicionado", "Varanda", "Cofre"],
    price: "R$ 380",
    image: superiorImage,
  },
  {
    id: 3,
    name: "Suíte Master",
    description:
      "Nossa acomodação premium com sala de estar separada e banheira de hidromassagem.",
    capacity: "4 hóspedes",
    bed: "1 Cama King + Sofá-Cama",
    amenities: ["Wi-Fi", "Hidromassagem", "Sala Estar", "Vista Panorâmica"],
    price: "R$ 550",
    image: masterImage,
  },
];

export function AccommodationsSection() {
  return (
    <section
      id="acomodacoes"
      className="py-16 md:py-24 lg:py-32 bg-card"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Nossas Acomodações
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-4">
            Conforto e Elegância
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra nossos apartamentos cuidadosamente projetados para
            proporcionar o máximo conforto durante sua estadia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {rooms.map((room) => (
            <Card
              key={room.id}
              className="overflow-hidden group"
              data-testid={`card-room-${room.id}`}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl mb-2">{room.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {room.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {room.capacity}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    {room.bed}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.slice(0, 3).map((amenity, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-muted px-2 py-1 rounded-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground">
                      a partir de
                    </span>
                    <p className="font-semibold text-lg">
                      {room.price}
                      <span className="text-sm font-normal text-muted-foreground">
                        /noite
                      </span>
                    </p>
                  </div>
                  <Link href="/acomodacoes">
                    <Button variant="outline" size="sm" data-testid={`button-room-details-${room.id}`}>
                      Ver Detalhes
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/acomodacoes">
            <Button size="lg" data-testid="button-view-all-rooms">
              Ver Todas as Acomodações
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
