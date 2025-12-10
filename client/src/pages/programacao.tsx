import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import natalImg from "@assets/Natal-1-r7qo8j441244a5yecuwbmjx788yzvdz05irnz0p9c8.png";
import anoNovoImg from "@assets/Ano-Novo-1-r7qo8tgc48i9tvjdohd7vzb9rhk18241uxy0929xfs.png";
import diaMulherImg from "@assets/1-Banners-verticaisDia-das-mulheres-recyx57cggohl3cpsyd5h7vxo2busp1h11bgmxi93c.png";
import pascoaImg from "@assets/2-Banners-verticaisPascoa-recyxjaxaz7sf8s8imgk0mbukued05lg2z3qu2xci0.png";
import tiradentesImg from "@assets/3-Banners-verticaisTiradentes-recyxwgnynpsxs94ds5bzj0aw8lhzx1oss8jjydu2w.png";
import trabalhadorImg from "@assets/4-Banners-verticaisTrabalhador-recyylub36ojn9899l49culqxn4erqufw9unifc7ew.png";
import maesImg from "@assets/5-Banners-verticaisMaes-recyz6ir9jguqoe7wu21vpdw04ahh34jb47c2ihjm0.png";

const programas = [
  { id: 1, title: "Natal", image: natalImg, link: "https://book.omnibees.com/hotel/7863/package/461861?lang=pt-BR&currencyId=16&CheckIn=24122025&CheckOut=25122025&ad=1" },
  { id: 2, title: "Ano Novo", image: anoNovoImg, link: "https://book.omnibees.com/hotel/7863/package/461865?lang=pt-BR&currencyId=16&CheckIn=30122025&CheckOut=31122025&ad=1" },
  { id: 3, title: "Dia da Mulher", image: diaMulherImg, link: "https://book.omnibees.com/hotel/7863" },
  { id: 4, title: "Páscoa", image: pascoaImg, link: "https://book.omnibees.com/hotel/7863" },
  { id: 5, title: "Tiradentes", image: tiradentesImg, link: "https://book.omnibees.com/hotel/7863" },
  { id: 6, title: "Dia do Trabalhador", image: trabalhadorImg, link: "https://book.omnibees.com/hotel/7863" },
  { id: 7, title: "Dia das Mães", image: maesImg, link: "https://book.omnibees.com/hotel/7863" },
];

export default function Programacao() {
  return (
    <div className="min-h-screen bg-[hsl(210,50%,96%)]">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-serif text-4xl md:text-5xl text-[#1a3a5c] mb-4">
              Programação
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Confira nossos pacotes especiais para datas comemorativas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {programas.map((programa, index) => (
              <motion.div
                key={programa.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-white">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={programa.image}
                      alt={programa.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-serif text-xl text-[#1a3a5c] mb-3">
                      {programa.title}
                    </h3>
                    <a
                      href={programa.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-[#2563eb] hover:bg-[#1d4ed8]">
                        Saiba Mais
                      </Button>
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
