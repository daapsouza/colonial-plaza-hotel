import { Button } from "@/components/ui/button";
import heroImage from "@assets/02-1_1765302776882.jpg";

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
          Planeje Sua Estadia nas Montanhas
        </h2>
        <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Reserve agora e desfrute de uma experiência única no Vale do Paraíba,
          a menos de 2 horas de São Paulo.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="h-12 px-8 text-base"
            data-testid="button-book-now"
          >
            Fazer Reserva
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 px-8 text-base bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20"
            data-testid="button-contact-us"
          >
            Fale Conosco
          </Button>
        </div>
      </div>
    </section>
  );
}
