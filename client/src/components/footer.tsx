import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiInstagram, SiFacebook, SiWhatsapp, SiTripadvisor, SiWaze } from "react-icons/si";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/Layout-final-7_1765300861529.png";

const quickLinks = [
  { label: "O Hotel", href: "/#hotel" },
  { label: "Acomodações", href: "/acomodacoes" },
  { label: "Gastronomia", href: "/gastronomia" },
  { label: "Áreas de Lazer", href: "/areas-de-lazer" },
  { label: "Eventos", href: "/eventos" },
  { label: "Contato", href: "/contato" },
];

const socialLinks = [
  { icon: SiInstagram, href: "https://www.instagram.com/hotelcolonialplaza/", label: "Instagram", color: "hover:text-pink-500" },
  { icon: SiFacebook, href: "https://www.facebook.com/hotelcolonialplaza", label: "Facebook", color: "hover:text-blue-600" },
  { icon: SiWhatsapp, href: "https://api.whatsapp.com/send?phone=5512992578072&text=Olá,%20Venho%20através%20do%20Site%20e%20gostaria%20de%20fazer%20uma%20cotação%20de%20reserva.", label: "WhatsApp", color: "hover:text-green-500" },
  { icon: SiTripadvisor, href: "https://www.tripadvisor.com.br/Hotel_Review-g675030-d1841771-Reviews-Colonial_Plaza_Hotel-Pindamonhangaba_State_of_Sao_Paulo.html", label: "TripAdvisor", color: "hover:text-green-600" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a3a5c] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="lg:col-span-1">
            <img 
              src={logoImage} 
              alt="Colonial Plaza Hotel" 
              className="h-12 w-auto mb-2"
            />
            <p className="text-white/70 text-xs mb-4 leading-relaxed">
              Seu refúgio nas montanhas do Vale do Paraíba. Tradição, conforto e
              hospitalidade há mais de 25 anos.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all hover:bg-white/20 ${social.color}`}
                  aria-label={social.label}
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3 text-white">Links Rápidos</h4>
            <ul className="space-y-1">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 text-xs hover:text-white transition-colors inline-flex items-center gap-2"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3 text-white">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-xs">
                <MapPin className="h-4 w-4 flex-shrink-0 text-blue-400 mt-0.5" />
                <a 
                  href="https://www.google.com/maps/place/Colonial+Plaza+Hotel/@-22.9241667,-45.4619444,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  data-testid="link-google-maps"
                >
                  <span className="block">Av. Nossa Senhora do Bom Sucesso, 4201</span>
                  <span className="block">Pindamonhangaba - SP</span>
                  <span className="block">12420-010 - Brasil</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs">
                <Phone className="h-4 w-4 flex-shrink-0 text-blue-400" />
                <a href="tel:551236443644" className="text-white/70 hover:text-white transition-colors">
                  (12) 3644-3644
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs">
                <SiWhatsapp className="h-4 w-4 flex-shrink-0 text-green-400" />
                <a 
                  href="https://api.whatsapp.com/send?phone=5512992578072&text=Olá,%20Venho%20através%20do%20Site%20e%20gostaria%20de%20fazer%20uma%20cotação%20de%20reserva."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  (12) 99257-8072
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs">
                <Mail className="h-4 w-4 flex-shrink-0 text-blue-400" />
                <a href="mailto:reservas@colonialplazapinda.com.br" className="text-white/70 hover:text-white transition-colors break-all">
                  reservas@colonialplazapinda.com.br
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3 text-white">Horários</h4>
            <ul className="space-y-1 mb-4">
              <li className="flex items-center gap-2 text-xs">
                <Clock className="h-4 w-4 flex-shrink-0 text-blue-400" />
                <span className="font-medium text-white">Recepção 24h</span>
              </li>
              <li className="text-xs text-white/70">
                Check-in: 14h
              </li>
              <li className="text-xs text-white/70">
                Check-out: 12h
              </li>
            </ul>
            <a
              href="https://book.omnibees.com/hotel/7863"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" data-testid="footer-button-reserve">
                Reservar Agora
              </Button>
            </a>
            <a
              href="https://waze.com/ul?ll=-22.9241,-45.4619&navigate=yes&z=10"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block"
            >
              <Button className="w-full bg-[#33ccff] hover:bg-[#29b8e8] text-[#1a3a5c] font-semibold" data-testid="footer-button-waze">
                <SiWaze className="mr-2 h-5 w-5" />
                Traçar Rota no Waze
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Colonial Plaza Hotel. Todos os direitos reservados.
          </p>
          <p className="text-white/50 text-xs">
            CNPJ: 00.813.309/0001-09
          </p>
        </div>
      </div>
    </footer>
  );
}
