
import { Link } from "react-router-dom";
import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { PointOfInterestCard } from "@/components/PointOfInterestCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Explorar = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary py-16">
          <div className="container text-center">
            <h1 className="text-primary-foreground text-4xl font-bold mb-4">Explore Lages</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Descubra os pontos turísticos, atrações e experiências imperdíveis da capital do turismo na Serra Catarinense.
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Input placeholder="Buscar pontos turísticos..." className="w-full" />
              </div>
              
              <div>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as categorias</SelectItem>
                    <SelectItem value="natureza">Natureza</SelectItem>
                    <SelectItem value="cultura">Cultura</SelectItem>
                    <SelectItem value="historico">Histórico</SelectItem>
                    <SelectItem value="religioso">Religioso</SelectItem>
                    <SelectItem value="lazer">Lazer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select defaultValue="rating">
                  <SelectTrigger>
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Melhor avaliados</SelectItem>
                    <SelectItem value="distance">Mais próximos</SelectItem>
                    <SelectItem value="popular">Mais visitados</SelectItem>
                    <SelectItem value="alphabetical">Ordem alfabética</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex justify-end mt-4">
              <Link to="/carrinho">
                <Button variant="outline" className="flex items-center gap-2">
                  Meu Roteiro
                  <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Informações Turísticas Featured */}
        <section className="py-12">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Informações Turísticas Detalhadas</h2>
              <Badge variant="outline" className="bg-secondary text-secondary-foreground">Destaque</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <PointOfInterestCard
                id="parque-ecologico"
                image="https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=2069&auto=format&fit=crop"
                title="Parque Ecológico João José Theodoro da Costa Neto"
                description="Área de preservação ambiental com trilhas, cachoeiras e fauna e flora nativas da região."
                rating={4.8}
                categories={["Natureza", "Trilhas", "Aventura"]}
                infoAvailable={true}
                qrCode={true}
              />
              
              <PointOfInterestCard 
                id="catedral-diocesana"
                image="https://images.unsplash.com/photo-1580674684089-3cf5e5655ff5?q=80&w=2070&auto=format&fit=crop"
                title="Catedral Diocesana de Lages"
                description="Um dos marcos históricos e religiosos mais importantes da cidade, com arquitetura impressionante."
                rating={4.6}
                categories={["Histórico", "Religioso", "Arquitetura"]}
                infoAvailable={true}
              />
              
              <PointOfInterestCard
                id="centro-cultural"
                image="https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1974&auto=format&fit=crop"
                title="Centro Cultural Vidal Ramos"
                description="Espaço cultural que abriga exposições, eventos e atividades artísticas em um casarão histórico."
                rating={4.5}
                categories={["Cultura", "História", "Arte"]}
                infoAvailable={true}
                qrCode={true}
              />
            </div>
          </div>
        </section>

        {/* All Points of Interest */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <Tabs defaultValue="all">
              <TabsList className="mb-8">
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="nature">Natureza</TabsTrigger>
                <TabsTrigger value="historical">Históricos</TabsTrigger>
                <TabsTrigger value="cultural">Culturais</TabsTrigger>
                <TabsTrigger value="religion">Religiosos</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PointOfInterestCard 
                    id="parque-ecologico"
                    image="https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=2069&auto=format&fit=crop"
                    title="Parque Ecológico João José Theodoro da Costa Neto"
                    description="Área de preservação ambiental com trilhas, cachoeiras e fauna e flora nativas da região."
                    rating={4.8}
                    categories={["Natureza", "Trilhas", "Aventura"]}
                    infoAvailable={true}
                    qrCode={true}
                  />
                  
                  <PointOfInterestCard 
                    id="catedral-diocesana"
                    image="https://images.unsplash.com/photo-1580674684089-3cf5e5655ff5?q=80&w=2070&auto=format&fit=crop"
                    title="Catedral Diocesana de Lages"
                    description="Um dos marcos históricos e religiosos mais importantes da cidade, com arquitetura impressionante."
                    rating={4.6}
                    categories={["Histórico", "Religioso", "Arquitetura"]}
                    infoAvailable={true}
                  />
                  
                  <PointOfInterestCard 
                    id="museu-historico"
                    image="https://images.unsplash.com/photo-1591818043896-44f27bdd0188?q=80&w=1949&auto=format&fit=crop"
                    title="Museu Histórico Thiago de Castro"
                    description="Acervo que preserva a memória e história da formação de Lages e da cultura serrana."
                    rating={4.5}
                    categories={["Cultura", "Histórico", "Educativo"]}
                    qrCode={true}
                  />
                  
                  <PointOfInterestCard 
                    id="parque-jonas-ramos"
                    image="https://images.unsplash.com/photo-1533646775097-a67f6dad2bc0?q=80&w=1974&auto=format&fit=crop"
                    title="Parque Jonas Ramos (Tanque)"
                    description="Área de lazer no centro da cidade com lago, espaços para caminhada e atividades ao ar livre."
                    rating={4.3}
                    categories={["Lazer", "Urbano"]}
                    qrCode={true}
                  />
                  
                  <PointOfInterestCard 
                    id="centro-cultural"
                    image="https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1974&auto=format&fit=crop"
                    title="Centro Cultural Vidal Ramos"
                    description="Espaço cultural que abriga exposições, eventos e atividades artísticas em um casarão histórico."
                    rating={4.5}
                    categories={["Cultura", "História", "Arte"]}
                    infoAvailable={true}
                    qrCode={true}
                  />
                  
                  <PointOfInterestCard 
                    id="mirante-serra"
                    image="https://images.unsplash.com/photo-1518128958364-65859d70aa41?q=80&w=2069&auto=format&fit=crop"
                    title="Mirante da Serra do Rio do Rastro"
                    description="Vista panorâmica deslumbrante da famosa Serra do Rio do Rastro, próximo a Lages."
                    rating={4.9}
                    categories={["Natureza", "Paisagem", "Fotografia"]}
                    infoAvailable={true}
                  />
                </div>
                
                <div className="flex justify-center">
                  <Button variant="outline">Carregar mais</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="nature">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PointOfInterestCard 
                    id="parque-ecologico"
                    image="https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=2069&auto=format&fit=crop"
                    title="Parque Ecológico João José Theodoro da Costa Neto"
                    description="Área de preservação ambiental com trilhas, cachoeiras e fauna e flora nativas da região."
                    rating={4.8}
                    categories={["Natureza", "Trilhas", "Aventura"]}
                    infoAvailable={true}
                    qrCode={true}
                  />
                  
                  <PointOfInterestCard 
                    id="mirante-serra"
                    image="https://images.unsplash.com/photo-1518128958364-65859d70aa41?q=80&w=2069&auto=format&fit=crop"
                    title="Mirante da Serra do Rio do Rastro"
                    description="Vista panorâmica deslumbrante da famosa Serra do Rio do Rastro, próximo a Lages."
                    rating={4.9}
                    categories={["Natureza", "Paisagem", "Fotografia"]}
                    infoAvailable={true}
                  />
                  
                  <PointOfInterestCard 
                    id="cachoeira-avencal"
                    image="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=2070&auto=format&fit=crop"
                    title="Cachoeira do Avencal"
                    description="Impressionante queda d'água com mais de 100 metros de altura, localizada na região."
                    rating={4.7}
                    categories={["Natureza", "Cachoeira", "Aventura"]}
                    qrCode={true}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="historical">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PointOfInterestCard 
                    id="museu-historico"
                    image="https://images.unsplash.com/photo-1591818043896-44f27bdd0188?q=80&w=1949&auto=format&fit=crop"
                    title="Museu Histórico Thiago de Castro"
                    description="Acervo que preserva a memória e história da formação de Lages e da cultura serrana."
                    rating={4.5}
                    categories={["Cultura", "Histórico", "Educativo"]}
                    qrCode={true}
                  />
                  
                  <PointOfInterestCard 
                    id="centro-cultural"
                    image="https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1974&auto=format&fit=crop"
                    title="Centro Cultural Vidal Ramos"
                    description="Espaço cultural que abriga exposições, eventos e atividades artísticas em um casarão histórico."
                    rating={4.5}
                    categories={["Cultura", "História", "Arte"]}
                    infoAvailable={true}
                    qrCode={true}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="cultural">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PointOfInterestCard 
                    id="centro-cultural"
                    image="https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1974&auto=format&fit=crop"
                    title="Centro Cultural Vidal Ramos"
                    description="Espaço cultural que abriga exposições, eventos e atividades artísticas em um casarão histórico."
                    rating={4.5}
                    categories={["Cultura", "História", "Arte"]}
                    infoAvailable={true}
                    qrCode={true}
                  />
                  
                  <PointOfInterestCard 
                    id="museu-historico"
                    image="https://images.unsplash.com/photo-1591818043896-44f27bdd0188?q=80&w=1949&auto=format&fit=crop"
                    title="Museu Histórico Thiago de Castro"
                    description="Acervo que preserva a memória e história da formação de Lages e da cultura serrana."
                    rating={4.5}
                    categories={["Cultura", "Histórico", "Educativo"]}
                    qrCode={true}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="religion">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PointOfInterestCard 
                    id="catedral-diocesana"
                    image="https://images.unsplash.com/photo-1580674684089-3cf5e5655ff5?q=80&w=2070&auto=format&fit=crop"
                    title="Catedral Diocesana de Lages"
                    description="Um dos marcos históricos e religiosos mais importantes da cidade, com arquitetura impressionante."
                    rating={4.6}
                    categories={["Histórico", "Religioso", "Arquitetura"]}
                    infoAvailable={true}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Interactive Map */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Mapa Interativo</h2>
              <p className="text-muted-foreground">
                Explore todos os pontos turísticos de Lages em nosso mapa interativo. 
                Visualize rotas, distâncias e informações detalhadas.
              </p>
            </div>
            
            <div className="bg-muted rounded-lg h-[500px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">Mapa interativo será carregado aqui</p>
                <Button>Ver mapa completo</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Explorar;
