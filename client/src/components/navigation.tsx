import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import logoImage from "@assets/Layout-final-7_1765296531130.png";

const navLinks = [
  { href: "/#hotel", label: "O Hotel" },
  { href: "/acomodacoes", label: "Acomodações" },
  { href: "/gastronomia", label: "Gastronomia" },
  { href: "/areas-de-lazer", label: "Lazer" },
  { href: "/eventos", label: "Eventos" },
  { href: "/programacao", label: "Programação" },
  { href: "/contato", label: "Contato" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-[#2563eb] shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-12 md:h-14 gap-4">
            {/* Left - Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={() => setIsMobileMenuOpen(true)}
                data-testid="button-mobile-menu"
                aria-label="Abrir menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>

            {/* Center - Logo and Nav */}
            <div className="flex items-center gap-4 flex-1 justify-center lg:justify-start">
              <Link
                href="/"
                className="flex items-center"
                data-testid="link-logo"
              >
                <img 
                  src={logoImage} 
                  alt="Colonial Plaza Hotel" 
                  className="h-8 md:h-10 w-auto"
                />
              </Link>

              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium transition-colors rounded-md text-white/90 hover:text-white hover:bg-white/20 whitespace-nowrap"
                    data-testid={`link-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Right - Contact Buttons and Theme Toggle */}
            <div className="hidden lg:flex items-center gap-1">
              <a
                href="https://api.whatsapp.com/send?phone=5512992578072&text=Olá,%20gostaria%20de%20fazer%20uma%20cotação%20de%20reserva."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors rounded-md bg-green-500 hover:bg-green-600 text-white"
                data-testid="link-nav-whatsapp"
              >
                <SiWhatsapp className="h-4 w-4" />
                <span>(12) 99257-8072</span>
              </a>
              <a
                href="tel:551236443644"
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors rounded-md bg-[#1a3a5c] hover:bg-[#0f2540] text-white"
                data-testid="link-nav-phone"
              >
                <Phone className="h-4 w-4" />
                <span>(12) 3644-3644</span>
              </a>
            </div>

            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <img 
                  src={logoImage} 
                  alt="Colonial Plaza Hotel" 
                  className="h-12 w-auto"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid="button-close-menu"
                  aria-label="Fechar menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col p-6 gap-2 overflow-y-auto flex-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left px-4 py-3 text-lg font-medium rounded-md hover-elevate active-elevate-2"
                    data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-3 mt-6 pt-4 border-t border-border">
                  <a
                    href="https://api.whatsapp.com/send?phone=5512992578072&text=Olá,%20gostaria%20de%20fazer%20uma%20cotação%20de%20reserva."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-lg py-4 px-4 font-semibold text-base transition-colors shadow-md"
                    data-testid="link-mobile-whatsapp"
                  >
                    <SiWhatsapp className="h-6 w-6" />
                    <span>WhatsApp (12) 99257-8072</span>
                  </a>
                  <a
                    href="tel:551236443644"
                    className="flex items-center justify-center gap-3 bg-[#1a3a5c] hover:bg-[#0f2540] text-white rounded-lg py-4 px-4 font-semibold text-base transition-colors shadow-md"
                    data-testid="link-mobile-phone"
                  >
                    <Phone className="h-6 w-6" />
                    <span>Ligar (12) 3644-3644</span>
                  </a>
                  <a
                    href="https://book.omnibees.com/hotel/7863"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2"
                  >
                    <Button className="w-full h-14 text-base font-semibold" data-testid="button-reserve-mobile">
                      Reservar Agora
                    </Button>
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
