
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Roteiros from "./pages/Roteiros";
import Comercio from "./pages/Comercio";
import Explorar from "./pages/Explorar";
import Associacao from "./pages/Associacao";
import ComercioCadastro from "./pages/ComercioCadastro";
import PontoDetalhe from "./pages/PontoDetalhe";
import Carrinho from "./pages/Carrinho";
import { ChatBot } from "./components/ChatBot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/roteiros" element={<Roteiros />} />
          <Route path="/comercio" element={<Comercio />} />
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/associacao" element={<Associacao />} />
          <Route path="/comercio/cadastro" element={<ComercioCadastro />} />
          <Route path="/ponto/:id" element={<PontoDetalhe />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatBot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
