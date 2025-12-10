import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import cardapioPdf from "@assets/cardapio_1765303705475.pdf";

const menuSections = [
  {
    title: "Entradas",
    items: [
      { name: "Salada Caesar", price: 32 },
      { name: "Salada Colonial", price: 30 },
      { name: "Carpaccio de Abacaxi", price: 25 },
      { name: "Salada Caprese", price: 32 },
      { name: "Carpaccio de Carne", price: 40 },
      { name: "Tábua de Frios", price: 40 },
      { name: "Dadinho de Tapioca", price: 30 },
      { name: "Antepasto de Berinjela", price: 30 },
      { name: "Canja de Galinha", price: 35 },
      { name: "Creme de Palmito", price: 48 },
      { name: "Bruschetta Siciliana", price: 30 },
      { name: "Creme de Queijo com Alho Confit", price: 40 },
      { name: "Couvert (Pães da casa e Ramequinis)", price: 38 },
    ],
  },
  {
    title: "Executivo",
    description: "Acompanham Arroz, Feijão e Salada",
    items: [
      { name: "Contrafilé a Cavalo", price: 48 },
      { name: "Frango com Legumes ou Fritas", price: 45 },
      { name: "Tilápia com Legumes ou Fritas", price: 45 },
      { name: "Penne à Bolonhesa", price: 40 },
      { name: "Espaguete ao Pomodoro", price: 40 },
    ],
  },
  {
    title: "Massas e Risotos",
    items: [
      { name: "Rondelli aos Cinco Formaggios", price: 40 },
      { name: "Talharim Fresco à Carbonara", price: 38 },
      { name: "Risoto de Camarão", price: 65 },
      { name: "Risoto de Mignon ao Vinho Tinto", price: 65 },
      { name: "Lasanha à Bolonhesa", price: 45 },
    ],
  },
  {
    title: "Parmegianas",
    description: "Acompanham Arroz e Fritas",
    items: [
      { name: "Filé de Frango à Parmegiana", price: 45 },
      { name: "Filé Mignon à Parmegiana", price: 65 },
      { name: "Filé de Frango à Pizzaiolo", price: 45 },
      { name: "Filé Mignon à Cordon Bleu", price: 65 },
    ],
  },
  {
    title: "Carnes",
    items: [
      { name: "Mignon Bourguignon com Risoto Dois Queijos", price: 65 },
      { name: "Picanha Grelhada à Osvaldo Aranha", price: 65 },
      { name: "Prime Rib, Musseline de Batata, Brócolis e Molho Gremolata", price: 65 },
      { name: "Contrafilé Au Poivre, Batata Rústica e Bacon", price: 48 },
    ],
  },
  {
    title: "Suínos",
    items: [
      { name: "Torresmos de Rolo, Feijão Tropeiro e Vinagrete", price: 50 },
      { name: "Lombo Crocante, Cous Cous e Molho Agridoce", price: 40 },
      { name: "Medalhão de Mignon Suíno, Molho Mostarda Dijon", price: 45 },
    ],
  },
  {
    title: "Peixes",
    items: [
      { name: "Salmão In Croute, Maionese de Wasabi e Legumes", price: 65 },
      { name: "Truta à Belle Meunière com Arroz à Grega", price: 55 },
      { name: "Pescada Crocante, Arroz Marroquino e Molho Tártaro", price: 50 },
    ],
  },
  {
    title: "Light / Grelhados",
    description: "Acompanham Legumes e/ou Arroz Integral",
    items: [
      { name: "Mignon Grelhado", price: 50 },
      { name: "Filé de Frango Grelhado", price: 35 },
      { name: "Truta Grelhada", price: 40 },
      { name: "Omelete Paris com Folhas Ricas", price: 38 },
      { name: "Omelete com Fritas", price: 30 },
    ],
  },
  {
    title: "Kids",
    items: [
      { name: "Mini Cheeseburger com Batata Smile", price: 25 },
      { name: "Mini Cheese Bacon com Batata Smile", price: 28 },
      { name: "Escalopinho", price: 48 },
      { name: "Franguinho", price: 40 },
      { name: "Peixinho", price: 40 },
    ],
  },
  {
    title: "Sobremesas",
    items: [
      { name: "Pudim", price: 15 },
      { name: "Creme de Papaia", price: 25 },
      { name: "Petit Gateau", price: 28 },
      { name: "Creme Brûlée", price: 25 },
      { name: "Cheesecake de Frutas Vermelhas", price: 25 },
      { name: "Torta Creme de Chocolate", price: 25 },
      { name: "Torta de Limão", price: 20 },
      { name: "Doces Caseiros", price: 15 },
    ],
  },
  {
    title: "Porções",
    items: [
      { name: "Calabresa Acebolada", price: 45 },
      { name: "Pastel", price: 38 },
      { name: "Isca de Tilápia", price: 50 },
      { name: "Picanha Acebolada", price: 110 },
      { name: "Frango à Passarinho", price: 50 },
      { name: "Mandioca Frita", price: 35 },
      { name: "Fritas", price: 35 },
      { name: "Torresmo", price: 38 },
      { name: "Porção Mista", price: 95 },
    ],
  },
  {
    title: "Lanches",
    items: [
      { name: "Sanduíche Plaza", price: 58 },
      { name: "X-Burger", price: 42 },
      { name: "X-Bacon", price: 48 },
      { name: "X-Salada", price: 45 },
      { name: "Misto ou Queijo Quente", price: 35 },
      { name: "Lanche Natural", price: 30 },
    ],
  },
];

export default function Cardapio() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link href="/">
            <Button variant="ghost" className="text-primary-foreground mb-6" data-testid="button-back-home">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground text-center">
            Cardápio
          </h1>
          <p className="text-primary-foreground/80 text-center mt-4 text-lg">
            Gastronomia regional e internacional
          </p>
          <div className="flex justify-center mt-8">
            <a href={cardapioPdf} download="Cardapio-Colonial-Plaza-Hotel.pdf">
              <Button size="lg" variant="secondary" data-testid="button-download-menu">
                <Download className="mr-2 h-5 w-5" />
                Baixar Cardápio em PDF
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuSections.map((section, index) => (
            <Card key={index} data-testid={`menu-section-${index}`}>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-serif text-primary">
                  {section.title}
                </CardTitle>
                {section.description && (
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex justify-between items-start gap-2 text-sm"
                      data-testid={`menu-item-${index}-${itemIndex}`}
                    >
                      <span className="text-foreground">{item.name}</span>
                      <span className="font-semibold text-primary whitespace-nowrap">
                        R$ {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a href={cardapioPdf} download="Cardapio-Colonial-Plaza-Hotel.pdf">
            <Button size="lg" data-testid="button-download-menu-bottom">
              <Download className="mr-2 h-5 w-5" />
              Baixar Cardápio Completo em PDF
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
