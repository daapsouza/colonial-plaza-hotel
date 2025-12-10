import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

import image01 from "@assets/galeria/01-1.jpg";
import image02 from "@assets/galeria/02-1.jpg";
import image04 from "@assets/galeria/04-1.jpg";
import image05 from "@assets/galeria/05-1.jpg";
import image07 from "@assets/galeria/07-1.jpg";
import image08 from "@assets/galeria/08.jpg";
import image09 from "@assets/galeria/09.jpg";
import image10 from "@assets/galeria/10.jpg";
import image11 from "@assets/galeria/11.jpg";

const images = [
  { src: image01, alt: "Piscina do Hotel", category: "Lazer" },
  { src: image02, alt: "Piscina com Tobogã", category: "Lazer" },
  { src: image04, alt: "Ofuró", category: "Lazer" },
  { src: image05, alt: "Área de Lazer", category: "Lazer" },
  { src: image07, alt: "Brinquedoteca", category: "Kids" },
  { src: image08, alt: "Cozinha Baby", category: "Kids" },
  { src: image09, alt: "Academia", category: "Lazer" },
  { src: image10, alt: "Eventos", category: "Eventos" },
  { src: image11, alt: "Área de Convivência", category: "Lazer" },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? images.length - 1 : selectedImage - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === images.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <section id="galeria" className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Galeria
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-4">
            Conheça Nossos Espaços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore as imagens do nosso hotel e se encante com cada detalhe da
            nossa estrutura.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-[4/3] overflow-hidden rounded-md group cursor-pointer"
              data-testid={`gallery-image-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm">{image.alt}</p>
                <p className="text-white/70 text-xs">{image.category}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/areas-de-lazer">
            <Button variant="outline" size="lg" data-testid="button-view-gallery">
              Conheça Toda Estrutura
            </Button>
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/10"
              onClick={closeLightbox}
              data-testid="button-lightbox-close"
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              data-testid="button-lightbox-prev"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-md"
              onClick={(e) => e.stopPropagation()}
            />

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              data-testid="button-lightbox-next"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
              <p className="text-lg">{images[selectedImage].alt}</p>
              <p className="text-sm text-white/60">
                {selectedImage + 1} / {images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
