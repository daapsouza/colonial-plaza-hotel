import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { ChatWidget } from "@/components/chat-widget";
import Home from "@/pages/home";
import Acomodacoes from "@/pages/acomodacoes";
import Gastronomia from "@/pages/gastronomia";
import Cardapio from "@/pages/cardapio";
import AreasLazer from "@/pages/areas-de-lazer";
import Eventos from "@/pages/eventos";
import Contato from "@/pages/contato";
import Programacao from "@/pages/programacao";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/acomodacoes" component={Acomodacoes} />
      <Route path="/gastronomia" component={Gastronomia} />
      <Route path="/cardapio" component={Cardapio} />
      <Route path="/areas-de-lazer" component={AreasLazer} />
      <Route path="/eventos" component={Eventos} />
      <Route path="/contato" component={Contato} />
      <Route path="/programacao" component={Programacao} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
          <ChatWidget />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
