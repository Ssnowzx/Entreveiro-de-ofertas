
import { Link } from "react-router-dom";
import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PointOfInterestCard } from "@/components/PointOfInterestCard";
import { CommerceCard } from "@/components/CommerceCard";
import { SealCollectionCard } from "@/components/SealCollectionCard";
import { RouteCard } from "@/components/RouteCard";
import { MapPin, Calendar, Store, Users, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary to-lages360-light-green overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop" 
              alt="Paisagem da Serra Catarinense" 
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
              <Button size="lg" asChild className="bg-accent hover:bg-lages360-dark-tan text-accent-foreground">
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
            <h2 className="text-center text-3xl font-bold mb-12">Como o Lages360 funciona</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Explore a Cidade</h3>
                  <p className="text-muted-foreground text-center">
                    Descubra os melhores pontos turísticos, roteiros personalizados e tours virtuais 360°.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg">
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
              
              <Card className="border-none shadow-lg">
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
              
              <Card className="border-none shadow-lg">
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
            </div>
          </div>
        </section>

        {/* Points of Interest Section */}
        <section className="py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold">Pontos Turísticos</h2>
                <p className="text-muted-foreground mt-2">Descubra os lugares mais incríveis de Lages</p>
              </div>
              <Link to="/explorar" className="flex items-center gap-1 text-primary hover:text-primary/80 mt-4 md:mt-0">
                Ver todos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <PointOfInterestCard 
                image="https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=2069&auto=format&fit=crop"
                title="Parque Ecológico João José Theodoro da Costa Neto"
                description="Área de preservação ambiental com trilhas, cachoeiras e fauna e flora nativas da região."
                rating={4.8}
                categories={["Natureza", "Trilhas", "Aventura"]}
                tourVirtual={true}
                qrCode={true}
              />
              
              <PointOfInterestCard 
                image="https://images.unsplash.com/photo-1580674684089-3cf5e5655ff5?q=80&w=2070&auto=format&fit=crop"
                title="Catedral Diocesana de Lages"
                description="Um dos marcos históricos e religiosos mais importantes da cidade, com arquitetura impressionante."
                rating={4.6}
                categories={["Histórico", "Religioso", "Arquitetura"]}
                tourVirtual={true}
              />
              
              <PointOfInterestCard 
                image="https://images.unsplash.com/photo-1591818043896-44f27bdd0188?q=80&w=1949&auto=format&fit=crop"
                title="Museu Histórico Thiago de Castro"
                description="Acervo que preserva a memória e história da formação de Lages e da cultura serrana."
                rating={4.5}
                categories={["Cultura", "Histórico", "Educativo"]}
                qrCode={true}
              />
            </div>
          </div>
        </section>

        {/* Commercial Partners */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold">Parceiros Comerciais</h2>
                <p className="text-muted-foreground mt-2">Conheça os estabelecimentos parceiros e suas ofertas exclusivas</p>
              </div>
              <Link to="/comercio" className="flex items-center gap-1 text-primary hover:text-primary/80 mt-4 md:mt-0">
                Ver todos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CommerceCard
                image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop"
                name="Restaurante Sabores da Serra"
                description="Culinária típica serrana com os melhores cortes de carne e pratos tradicionais."
                address="Av. Principal, 123 - Centro, Lages"
                rating={4.7}
                categories={["Gastronomia", "Típico Regional"]}
                hasPromotion={true}
                discount={15}
              />
              
              <CommerceCard
                image="https://images.unsplash.com/photo-1551918120-9739cb430c6d?q=80&w=1974&auto=format&fit=crop"
                name="Hospedaria Vista da Serra"
                description="Acomodações aconchegantes com vista panorâmica para as montanhas da região."
                address="Estrada da Serra, km 5 - Zona Rural, Lages"
                rating={4.9}
                categories={["Hospedagem", "Rural"]}
              />
              
              <CommerceCard
                image="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop"
                name="Café & Arte"
                description="Café aconchegante com produtos artesanais e exposições de artistas locais."
                address="Rua das Araucárias, 456 - Centro, Lages"
                rating={4.5}
                categories={["Café", "Artesanato"]}
                hasPromotion={true}
                discount={10}
              />
            </div>
          </div>
        </section>

        {/* Seals Collection */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Coleção de Selos Digitais</h2>
              <p className="text-muted-foreground">
                Acumule selos visitando pontos turísticos e consumindo em estabelecimentos parceiros. 
                Troque por experiências exclusivas e descontos especiais.
              </p>
            </div>
            
            <div className="space-y-6">
              <SealCollectionCard
                title="Expedição Gastronômica Serrana"
                description="Conheça e experimente os sabores tradicionais da gastronomia serrana nos melhores restaurantes da região."
                image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
                progress={60}
                totalSeals={10}
                collectedSeals={6}
                benefit="Refeição gratuita para duas pessoas no restaurante parceiro de sua escolha."
                categories={["Gastronomia", "Cultura"]}
              />
              
              <SealCollectionCard
                title="Rota das Cachoeiras"
                description="Visite as principais cachoeiras da região e colecione selos por cada local visitado."
                image="https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1974&auto=format&fit=crop"
                progress={25}
                totalSeals={8}
                collectedSeals={2}
                benefit="Tour guiado gratuito na cachoeira mais exclusiva da região."
                categories={["Natureza", "Aventura"]}
              />
              
              <SealCollectionCard
                title="Circuito Cultural"
                description="Explore a história e cultura de Lages visitando museus, monumentos e centros culturais."
                image="https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1974&auto=format&fit=crop"
                progress={0}
                totalSeals={5}
                collectedSeals={0}
                benefit="Ingresso VIP para o Festival de Cultura Serrana."
                categories={["Cultura", "História", "Educação"]}
              />
            </div>
          </div>
        </section>

        {/* Routes / Roteiros */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold">Roteiros Turísticos</h2>
                <p className="text-muted-foreground mt-2">Roteiros personalizados para você aproveitar ao máximo sua visita</p>
              </div>
              <Link to="/roteiros" className="flex items-center gap-1 text-primary hover:text-primary/80 mt-4 md:mt-0">
                Ver todos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <RouteCard
                title="Caminhos da História"
                description="Um roteiro pelos principais pontos históricos da cidade de Lages, ideal para conhecer a cultura local."
                image="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=2070&auto=format&fit=crop"
                points={5}
                duration="3 horas"
                distance="2.5 km"
                categories={["Histórico", "Cultural", "Caminhada"]}
                isAccessible={true}
                isOffline={true}
              />
              
              <RouteCard
                title="Aventura nas Montanhas"
                description="Roteiro para amantes de natureza e aventura, com paradas em mirantes e cachoeiras da região."
                image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
                points={8}
                duration="6 horas"
                distance="12 km"
                categories={["Aventura", "Natureza", "Trilha"]}
                isOffline={true}
              />
              
              <RouteCard
                title="Gastronomia Serrana"
                description="Um percurso pelos melhores restaurantes e cafés da cidade, com foco na culinária típica da região."
                image="https://images.unsplash.com/photo-1602273660127-a4154791aef1?q=80&w=2036&auto=format&fit=crop"
                points={6}
                duration="4 horas"
                distance="3 km"
                categories={["Gastronomia", "Cultura", "Caminhada"]}
                isAccessible={true}
              />
            </div>
          </div>
        </section>

        {/* CTA / App Download */}
        <section className="py-20 bg-gradient-to-br from-primary to-lages360-light-green text-white">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Baixe o App Lages360</h2>
                <p className="text-white/90 text-lg mb-6 max-w-md mx-auto lg:mx-0">
                  Acesse todos os recursos da plataforma em seu smartphone, inclusive offline. 
                  Navegue pela cidade mesmo sem internet!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Download para Android
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                    Download para iOS
                  </Button>
                </div>
              </div>
              
              <div className="lg:w-1/2 max-w-sm">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop" 
                    alt="App Lages360" 
                    className="rounded-lg shadow-xl animate-float"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-accent text-white p-3 rounded-full shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 18v-6"/><path d="M10 12l2-2 2 2"/><path d="M8 22H6a2 2 0 0 1-2-2v-1"/><path d="M4 15V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10"/><path d="M18 15v7"/><path d="M12 22v-4"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
