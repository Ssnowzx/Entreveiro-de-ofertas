
import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { RouteCard } from "@/components/RouteCard";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Roteiros = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary py-16">
          <div className="container text-center">
            <h1 className="text-primary-foreground text-4xl font-bold mb-4">Roteiros Turísticos</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Descubra roteiros personalizados para explorar Lages e região. 
              Filtros para todos os tipos de visitantes e interesses.
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Input placeholder="Buscar roteiros..." className="w-full" />
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
                    <SelectItem value="gastronomia">Gastronomia</SelectItem>
                    <SelectItem value="aventura">Aventura</SelectItem>
                    <SelectItem value="historico">Histórico</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select defaultValue="recent">
                  <SelectTrigger>
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Mais recentes</SelectItem>
                    <SelectItem value="popular">Mais populares</SelectItem>
                    <SelectItem value="duration-asc">Menor duração</SelectItem>
                    <SelectItem value="duration-desc">Maior duração</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center mt-4">
              <div className="flex items-center gap-2">
                <Switch id="accessible" />
                <Label htmlFor="accessible">Acessível</Label>
              </div>
              
              <div className="flex items-center gap-2">
                <Switch id="offline" />
                <Label htmlFor="offline">Disponível offline</Label>
              </div>
              
              <div className="flex items-center gap-2">
                <Switch id="family" />
                <Label htmlFor="family">Para família</Label>
              </div>
              
              <div className="flex items-center gap-2">
                <Switch id="free" />
                <Label htmlFor="free">Gratuito</Label>
              </div>
            </div>
          </div>
        </section>

        {/* Routes List */}
        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="all">
              <TabsList className="mb-8">
                <TabsTrigger value="all">Todos os Roteiros</TabsTrigger>
                <TabsTrigger value="featured">Destaques</TabsTrigger>
                <TabsTrigger value="custom">Personalizados</TabsTrigger>
                <TabsTrigger value="nearby">Próximos a você</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-8">
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
                  
                  <RouteCard
                    title="Rota das Artes"
                    description="Conheça ateliês, galerias e espaços culturais no centro histórico de Lages."
                    image="https://images.unsplash.com/photo-1594536717222-b83ef316e26c?q=80&w=2069&auto=format&fit=crop"
                    points={4}
                    duration="2 horas"
                    distance="1.5 km"
                    categories={["Cultura", "Arte", "Urbano"]}
                    isAccessible={true}
                  />
                  
                  <RouteCard
                    title="Mirantes da Serra"
                    description="Visite os principais mirantes da região com vistas deslumbrantes das montanhas e vales."
                    image="https://images.unsplash.com/photo-1490121737011-c8b90bc7c8b3?q=80&w=2070&auto=format&fit=crop"
                    points={5}
                    duration="4 horas"
                    distance="25 km"
                    categories={["Paisagem", "Natureza", "Fotografia"]}
                  />
                  
                  <RouteCard
                    title="Lages Religiosa"
                    description="Conheça os principais templos religiosos e pontos de fé da cidade serrana."
                    image="https://images.unsplash.com/photo-1548625149-fc4a29cf7092?q=80&w=1974&auto=format&fit=crop"
                    points={6}
                    duration="3 horas"
                    distance="3 km"
                    categories={["Religioso", "Histórico", "Arquitetura"]}
                    isAccessible={true}
                    isOffline={true}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="featured">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <RouteCard
                    title="Fazendas Históricas"
                    description="Visite fazendas centenárias que preservam a tradicional hospitalidade serrana e a cultura tropeira."
                    image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2232&auto=format&fit=crop"
                    points={7}
                    duration="8 horas"
                    distance="45 km"
                    categories={["Rural", "Histórico", "Cultural"]}
                  />
                  
                  <RouteCard
                    title="Festa do Pinhão"
                    description="Roteiro especial durante a tradicional festa que celebra o pinhão e a cultura serrana."
                    image="https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=2070&auto=format&fit=crop"
                    points={10}
                    duration="5 horas"
                    distance="2 km"
                    categories={["Evento", "Gastronomia", "Cultural"]}
                    isAccessible={true}
                  />
                  
                  <RouteCard
                    title="Ecoturismo na Serra"
                    description="Experiência imersiva na natureza com visitas a parques ecológicos e reservas naturais."
                    image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop"
                    points={8}
                    duration="7 horas"
                    distance="30 km"
                    categories={["Ecológico", "Natureza", "Aventura"]}
                    isOffline={true}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="custom">
                <div className="text-center py-8">
                  <h3 className="text-xl font-semibold mb-2">Crie seu roteiro personalizado</h3>
                  <p className="text-muted-foreground mb-6">
                    Selecione pontos de interesse, tempo disponível e preferências para gerar um roteiro único.
                  </p>
                  <div className="max-w-md mx-auto">
                    <Label htmlFor="days">Quantos dias você tem disponível?</Label>
                    <Select defaultValue="1">
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 dia</SelectItem>
                        <SelectItem value="2">2 dias</SelectItem>
                        <SelectItem value="3">3 dias</SelectItem>
                        <SelectItem value="more">Mais de 3 dias</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="nearby">
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    Ative sua localização para ver roteiros perto de você
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Roteiros;
