import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

export default function Contato() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground text-center mb-4">
            Contato
          </h1>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto text-lg">
            Entre em contato conosco. Estamos prontos para atender você.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-6">
                Informações de Contato
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Endereço</h3>
                        <p className="text-muted-foreground">
                          Av. Dr. Moreira Lima, 425<br />
                          Centro - Pindamonhangaba, SP<br />
                          CEP: 12400-000
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Telefone</h3>
                        <a href="tel:551236443644" className="text-muted-foreground hover:text-foreground transition-colors">
                          (12) 3644-3644
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <SiWhatsapp className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">WhatsApp</h3>
                        <a 
                          href="https://api.whatsapp.com/send?phone=5512992578072&text=Olá,%20Venho%20através%20do%20Site%20e%20gostaria%20de%20fazer%20uma%20cotação%20de%20reserva."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          (12) 99257-8072
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">E-mail</h3>
                        <a href="mailto:reservas@colonialplazapinda.com.br" className="text-muted-foreground hover:text-foreground transition-colors">
                          reservas@colonialplazapinda.com.br
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Horário de Atendimento</h3>
                        <p className="text-muted-foreground">
                          Recepção 24 horas<br />
                          Check-in: 14h | Check-out: 12h
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground mb-6">
                Envie uma Mensagem
              </h2>
              
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          required 
                          data-testid="input-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          required 
                          data-testid="input-email"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        data-testid="input-phone"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        required 
                        data-testid="input-subject"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        rows={5} 
                        required 
                        data-testid="input-message"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                      data-testid="button-submit"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-2xl text-foreground text-center mb-8">
            Como Chegar
          </h2>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8847893!2d-45.4646!3d-22.9293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccf1c9ebc71c53%3A0x52caf72dd3354993!2sColonial%20Plaza%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Colonial Plaza Hotel"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
