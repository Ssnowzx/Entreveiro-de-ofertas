import { Link } from "react-router-dom";
import { NavigationHeader } from "../components/NavigationHeader";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { PointOfInterestCard } from "../components/PointOfInterestCard";
import { CommerceCard } from "../components/CommerceCard";
import { SealCollectionCard } from "../components/SealCollectionCard";
import { RouteCard } from "../components/RouteCard";
import { MapPin, Calendar, Store, Users, ArrowRight } from "lucide-react";

// Importando imagens locais
import BannerPrincipalImg from "../imgs/BannerPrincipal/Banner principal (Hero Section).jpg";
import ParqueEcologicoImg from "../imgs/PontosTuristicos/parque natural joao jose theodoro.jpg";
import CatedralImg from "../imgs/PontosTuristicos/catedral img.jpg";
import MuseuHistoricoImg from "../imgs/PontosTuristicos/thiago de castro.jpg";

import MercadoSerranoImg from "../imgs/Parceiros Comerciais/Mercado serrano.jpeg";
import SerraAventurasImg from "../imgs/Parceiros Comerciais/Serra Aventuras.jpg";

import RestauranteSaboresImg from "../imgs/imgs/centro cultural vidal ramos.jpg"; // substituindo imagem do restaurante
import HospedariaVistaImg from "../imgs/imgs/tanque lages.jpg"; // substituindo imagem da hospedaria
import CafeArteImg from "../imgs/imgs/centro cultural vidal ramos.jpg"; // substituindo imagem do café

import ExpedicaoGastronomicaImg from "../imgs/Roteiros/gastronomia serrana.jpeg";
import RotaCachoeirasImg from "../imgs/Roteiros/Aventuras na montanha.jpg";
import CircuitoCulturalImg from "../imgs/Roteiros/caminhos da historia.jpg";

import CaminhosHistoriaImg from "../imgs/Roteiros/caminhos da historia.jpg";
import AventuraMontanhasImg from "../imgs/Roteiros/Aventuras na montanha.jpg";
import GastronomiaSerranaImg from "../imgs/Roteiros/gastronomia serrana.jpeg";

const Index = () => {
  const openChat = () => {
    const event = new CustomEvent('open-chat');
    window.dispatchEvent(event);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary to-Entreveiro de Ofertas-light-green overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={BannerPrincipalImg} 
              alt="Araucárias na Serra Catarinense" 
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="container relative z-10 text-center px-4">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Descubra Lages como nunca antes
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Tudo o que a Serra Catarinense tem para oferecer em um só lugar. Roteiros, comércios e experiências únicas através do turismo inteligente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-accent hover:bg-Entreveiro de Ofertas-dark-tan text-accent-foreground">
                <Link to="/explorar">Explorar Agora</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-background/20 backdrop-blur-sm text-white border-white hover:bg-background/30">
                <Link to="/comercio/cadastro">Para Empresas</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-center text-3xl font-bold mb-12">Como o Entreveiro de Ofertas funciona</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link to="/explorar" className="block transition-transform hover:scale-105">
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">Explore a Cidade</h3>
                    <p className="text-muted-foreground text-center">
                      Descubra os melhores pontos turísticos, roteiros personalizados e informações turísticas detalhadas.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              
              <div onClick={openChat} className="block cursor-pointer transition-transform hover:scale-105">
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">Roteiros Inteligentes</h3>
                    <p className="text-muted-foreground text-center">
                      Acesse roteiros para qualquer perfil de turista, inclusive com recursos de acessibilidade.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <Link to="/comercio" className="block transition-transform hover:scale-105">
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                      <Store className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">Comércio Local</h3>
                    <p className="text-muted-foreground text-center">
                      Conheça e aproveite descontos exclusivos em restaurantes, hotéis e lojas parceiras.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/associacao" className="block transition-transform hover:scale-105">
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">Associação Turística</h3>
                    <p className="text-muted-foreground text-center">
                      Uma rede que conecta turistas, estabelecimentos comerciais e pontos turísticos.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Points of Interest Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-center text-3xl font-bold mb-12">Pontos de Interesse</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PointOfInterestCard
                id="parque-ecologico"
                title="Parque Ecológico João José Theodoro da Costa Neto"
                description="Área de preservação ambiental com trilhas, cachoeiras e fauna e flora nativas da região."
                image={ParqueEcologicoImg}
                rating={4.8}
                categories={["Natureza", "Trilhas", "Aventura"]}
                qrCode={true}
                infoAvailable={true}
              />
              <PointOfInterestCard
                id="catedral-diocesana"
                title="Catedral Diocesana de Lages"
                description="Um dos marcos históricos e religiosos mais importantes da cidade, com arquitetura impressionante."
                image={CatedralImg}
                rating={4.6}
                categories={["Histórico", "Religioso", "Arquitetura"]}
                qrCode={false}
                infoAvailable={true}
              />
              <PointOfInterestCard
                id="museu-thiago-de-castro"
                title="Museu Thiago de Castro"
                description="Museu histórico com exposições sobre a cultura e história local."
                image={MuseuHistoricoImg}
                rating={4.5}
                categories={["Histórico", "Cultural"]}
                qrCode={false}
                infoAvailable={false}
              />
            </div>
          </div>
        </section>

        {/* Commerce Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-center text-3xl font-bold mb-12">Comércio Local</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <CommerceCard
                name="Mercado Serrano"
                description="Mercado tradicional com produtos locais e artesanato."
                image={MercadoSerranoImg}
                address="Rua Principal, 123"
                rating={4.7}
                categories={["Mercado", "Artesanato"]}
                hasPromotion={true}
                discount={10}
              />
              <CommerceCard
                name="Serra Aventuras"
                description="Empresa de turismo de aventura com diversas opções de passeios."
                image={SerraAventurasImg}
                address="Av. das Montanhas, 456"
                rating={4.9}
                categories={["Turismo", "Aventura"]}
              />
              <CommerceCard
                name="Restaurante Sabores da Serra"
                description="Restaurante com culinária típica da região."
                image={RestauranteSaboresImg}
                address="Praça Central, 789"
                rating={4.5}
                categories={["Restaurante", "Culinária"]}
              />
            </div>
          </div>
        </section>

        {/* Seal Collection Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-center text-3xl font-bold mb-12">Coleção de Selos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SealCollectionCard
                title="Roteiro Gastronômico"
                description="Explore os sabores da Serra Catarinense."
                image={ExpedicaoGastronomicaImg}
                progress={70}
                totalSeals={10}
                collectedSeals={7}
                benefit="Descontos em restaurantes parceiros"
                categories={["Gastronomia", "Culinária"]}
              />
              <SealCollectionCard
                title="Rota das Cachoeiras"
                description="Aventuras na natureza com belas cachoeiras."
                image={RotaCachoeirasImg}
                progress={50}
                totalSeals={8}
                collectedSeals={4}
                benefit="Passeios guiados gratuitos"
                categories={["Natureza", "Aventura"]}
              />
              <SealCollectionCard
                title="Circuito Cultural"
                description="Descubra a história e cultura local."
                image={CircuitoCulturalImg}
                progress={90}
                totalSeals={12}
                collectedSeals={11}
                benefit="Entrada gratuita em museus"
                categories={["Cultura", "História"]}
              />
            </div>
          </div>
        </section>

        {/* Routes Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-center text-3xl font-bold mb-12">Roteiros</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <RouteCard
                title="Caminhos da História"
                description="Explore os caminhos históricos da região."
                image={CaminhosHistoriaImg}
                points={15}
                duration="3h"
                distance="10km"
                categories={["História", "Cultura"]}
                isAccessible={true}
                isOffline={false}
              />
              <RouteCard
                title="Aventura nas Montanhas"
                description="Roteiros para os amantes da aventura e natureza."
                image={AventuraMontanhasImg}
                points={20}
                duration="5h"
                distance="15km"
                categories={["Aventura", "Natureza"]}
                isAccessible={false}
                isOffline={true}
              />
              <RouteCard
                title="Gastronomia Serrana"
                description="Descubra os sabores típicos da Serra Catarinense."
                image={GastronomiaSerranaImg}
                points={10}
                duration="2h"
                distance="8km"
                categories={["Gastronomia", "Culinária"]}
                isAccessible={true}
                isOffline={false}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
