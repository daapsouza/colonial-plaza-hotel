import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Users, Bed, PawPrint, ChevronLeft, ChevronRight } from "lucide-react";

import colonial01 from "@assets/rooms/colonial-01.jpg";
import colonial02 from "@assets/rooms/colonial-02.jpg";
import colonial03 from "@assets/rooms/colonial-03.jpg";
import colonial04 from "@assets/rooms/colonial-04.jpg";
import colonial05 from "@assets/rooms/colonial-05.jpg";
import luxo01 from "@assets/rooms/luxo-01.jpg";
import luxo02 from "@assets/rooms/luxo-02.jpg";
import luxo03 from "@assets/rooms/luxo-03.jpg";
import luxo04 from "@assets/rooms/luxo-04.jpg";
import luxo05 from "@assets/rooms/luxo-05.jpg";
import superior01 from "@assets/rooms/superior-01.jpg";
import superior02 from "@assets/rooms/superior-02.jpg";
import superior03 from "@assets/rooms/superior-03.jpg";
import superior04 from "@assets/rooms/superior-04.jpg";
import superior05 from "@assets/rooms/superior-05.jpg";
import familia01 from "@assets/rooms/familia-01.jpg";
import familia02 from "@assets/rooms/familia-02.jpg";

const colonialImages = [colonial01, colonial02, colonial03, colonial04, colonial05];
const luxoImages = [luxo01, luxo02, luxo03, luxo04, luxo05];
const superiorImages = [superior01, superior02, superior03, superior04, superior05];
const familiaImages = [familia01, familia02];

function ImageGallery({ images, name, roomId }: { images: string[]; name: string; roomId: number }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt={name}
        className="w-full h-full object-cover"
        data-testid={`img-room-${roomId}`}
      />
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="relative flex-1 min-h-[200px]">
        <img
          src={images[selectedIndex]}
          alt={`${name} - Foto ${selectedIndex + 1}`}
          className="w-full h-full object-cover"
          data-testid={`img-room-${roomId}`}
        />
        <button
          onClick={() => setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
          data-testid={`btn-prev-${roomId}`}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
          data-testid={`btn-next-${roomId}`}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>
      <div className="flex gap-1 p-2 bg-muted/50 overflow-x-auto">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-colors ${
              index === selectedIndex ? "border-primary" : "border-transparent"
            }`}
            data-testid={`thumb-${roomId}-${index}`}
          >
            <img
              src={img}
              alt={`${name} - Miniatura ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

const accommodations = [
  {
    id: 1,
    name: "Colonial Clássico",
    images: colonialImages,
    capacity: "Até 03 pessoas",
    beds: "01 cama de casal e 01 cama de solteiro, 01 cama de casal ou 02 camas de solteiro",
    size: "25m²",
    description: "Apartamentos localizados na ala Clássica (200 e 300) com estilo Clássico Colonial. Possui sacada com vista para área interna do hotel ou vista para serra (04 unidades não possuem sacada). Equipado com TV a cabo, ar condicionado, frigobar, internet wi-fi, telefone, banheiro privativo com ducha de alta pressão, armário/guarda-roupa e mesa de trabalho.",
    amenities: ["TV a cabo", "Ar condicionado", "Frigobar", "Wi-Fi", "Telefone", "Ducha de alta pressão", "Armário/guarda-roupa", "Mesa de trabalho"],
    petFriendly: false,
    petNote: "Este apartamento não é Pet Friendly, pois possui piso de madeira.",
  },
  {
    id: 2,
    name: "Luxo",
    images: luxoImages,
    capacity: "Até 03 pessoas",
    beds: "01 cama de casal e 01 cama de solteiro, 01 cama de casal ou 02 camas de solteiro",
    size: "30m²",
    description: "Apartamentos localizados na ala Clássica com estilo moderno, garantem muito conforto e contam com sacada com vista para área interna do hotel ou vista para serra. Equipado com TV a cabo, ar condicionado, frigobar, internet wi-fi, telefone, banheiro privativo com ducha de alta pressão, armário/guarda-roupa e mesa de trabalho. Acesso por elevador.",
    amenities: ["TV a cabo", "Ar condicionado", "Frigobar", "Wi-Fi", "Telefone", "Ducha de alta pressão", "Armário/guarda-roupa", "Mesa de trabalho"],
    petFriendly: false,
    petNote: "Este apartamento não é Pet Friendly, pois possui piso de madeira.",
  },
  {
    id: 3,
    name: "Superior Luxo",
    images: superiorImages,
    capacity: "Até 03 pessoas",
    beds: "01 cama de casal e 01 cama de solteiro, 01 cama de casal ou 02 camas de solteiro",
    size: "32m²",
    description: "Apartamentos localizados nas alas Clássica e Luxo (100, 200, 400, 500 e 600) com estilo moderno, garantem muito conforto e contam com sacada com vista para área interna do hotel ou vista para serra, algumas unidades podem ser conjugadas. Equipado com TV a cabo, ar condicionado, frigobar, internet wi-fi, telefone, banheiro privativo com ducha de alta pressão, armário/guarda-roupa e mesa de trabalho. Acesso por elevador.",
    amenities: ["TV a cabo", "Ar condicionado", "Frigobar", "Wi-Fi", "Telefone", "Ducha de alta pressão", "Armário/guarda-roupa", "Mesa de trabalho"],
    petFriendly: true,
    petNote: "Os apartamentos das alas 400, 500 e 600 são Pet Friendly, pois possuem piso frio.",
  },
  {
    id: 4,
    name: "Superior Luxo Família",
    images: familiaImages,
    capacity: "Até 04 pessoas",
    beds: "01 cama de casal e 02 camas de solteiro",
    size: "38m²",
    description: "Apartamentos localizados na ala Luxo (400 e 500) com estilo moderno, garantem muito conforto e contam com sacada com vista para área interna do hotel ou vista para serra. Equipado com TV a cabo, ar condicionado, frigobar, internet wi-fi, telefone, banheiro privativo com ducha de alta pressão, armário/guarda-roupa e mesa de trabalho. Acesso por elevador.",
    amenities: ["TV a cabo", "Ar condicionado", "Frigobar", "Wi-Fi", "Telefone", "Ducha de alta pressão", "Armário/guarda-roupa", "Mesa de trabalho"],
    petFriendly: true,
    petNote: "Estes apartamentos são Pet Friendly, pois possuem piso frio.",
  },
  {
    id: 5,
    name: "Suíte Master",
    images: [superior03],
    capacity: "Até 02 pessoas",
    beds: "01 cama de casal",
    size: "45m²",
    description: "Suíte Master Colonial está localizada no 3º andar, ampla e elegante, possui banheira de hidromassagem e conta com sacada com vista para área interna do hotel ou vista para serra. Equipada com Smart TV com canais a cabo, ar condicionado, frigobar, internet wi-fi, telefone, banheiro privativo com ducha de alta pressão e banheira de hidromassagem, armário/guarda-roupa, poltrona e mesa de trabalho. Acesso por elevador.",
    amenities: ["Smart TV com canais a cabo", "Ar condicionado", "Frigobar", "Wi-Fi", "Telefone", "Ducha de alta pressão", "Banheira de hidromassagem", "Armário/guarda-roupa", "Poltrona", "Mesa de trabalho"],
    petFriendly: true,
    petNote: "As suítes são Pet Friendly, pois possuem piso frio.",
  },
  {
    id: 6,
    name: "Suíte Premium",
    images: [superior04],
    capacity: "Até 02 pessoas",
    beds: "01 cama de casal",
    size: "50m²",
    description: "Suíte Premium está localizada no 3º andar, ampla e decoração moderna, possui banheira de hidromassagem e conta com sacada com vista para área interna do hotel ou vista para serra. Equipada com Smart TV com canais a cabo, ar condicionado, frigobar, internet wi-fi, telefone, banheiro privativo com ducha de alta pressão e banheira de hidromassagem, armário/guarda-roupa, poltrona e mesa de trabalho. Acesso por elevador.",
    amenities: ["Smart TV com canais a cabo", "Ar condicionado", "Frigobar", "Wi-Fi", "Telefone", "Ducha de alta pressão", "Banheira de hidromassagem", "Armário/guarda-roupa", "Poltrona", "Mesa de trabalho"],
    petFriendly: true,
    petNote: "As suítes são Pet Friendly, pois possuem piso frio.",
  },
];

export default function Acomodacoes() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground text-center mb-4">
            Acomodações
          </h1>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto text-lg">
            Conheça nossas acomodações, temos 6 categorias divididas em Colonial Clássico, Luxo, Superior Luxo, Superior Luxo Família, Suíte Master e Suíte Premium. Desde hospedagem corporativa, em família ou a dois, aproveite e venha viver momentos inesquecíveis no Colonial Plaza.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid gap-8">
            {accommodations.map((room) => (
              <Card key={room.id} className="overflow-hidden" data-testid={`card-room-${room.id}`}>
                <div className="md:flex">
                  <div className="md:w-1/3 min-h-[256px]">
                    <ImageGallery images={room.images} name={room.name} roomId={room.id} />
                  </div>
                  <CardContent className="p-6 md:p-8 md:w-2/3">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                          {room.name}
                        </h2>
                        <div className="flex flex-wrap items-center gap-3">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {room.capacity}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            {room.size}
                          </Badge>
                          {room.petFriendly && (
                            <Badge className="flex items-center gap-1 bg-green-600">
                              <PawPrint className="h-3 w-3" />
                              Pet Friendly
                            </Badge>
                          )}
                        </div>
                      </div>
                      <a
                        href="https://book.omnibees.com/hotel/7863"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-blue-600 hover:bg-blue-700" data-testid={`button-reserve-${room.id}`}>
                          Reservar
                        </Button>
                      </a>
                    </div>

                    <div className="flex items-start gap-2 mb-4 text-muted-foreground">
                      <Bed className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>{room.beds}</span>
                    </div>

                    <p className="text-foreground mb-6">
                      {room.description}
                    </p>

                    <div className="mb-4">
                      <h3 className="font-medium text-foreground mb-3">Comodidades:</h3>
                      <div className="flex flex-wrap gap-2">
                        {room.amenities.map((amenity, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {room.petNote && (
                      <p className="text-sm text-muted-foreground italic flex items-center gap-2">
                        <PawPrint className="h-4 w-4" />
                        {room.petNote}
                      </p>
                    )}
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Reserve Agora
          </h2>
          <p className="text-primary-foreground/90 mb-8 text-lg">
            Garanta a melhor tarifa reservando diretamente conosco. Atendimento 24h.
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
