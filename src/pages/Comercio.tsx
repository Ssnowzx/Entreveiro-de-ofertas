
import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { CommerceCard } from "@/components/CommerceCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Comercio = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary py-16">
          <div className="container text-center">
            <h1 className="text-primary-foreground text-4xl font-bold mb-4">Comércio Local</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Conheça os estabelecimentos parceiros que oferecem descontos exclusivos e experiências únicas para os turistas.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-accent hover:bg-lages360-dark-tan text-accent-foreground">
                <Link to="/comercio/cadastro">Cadastre seu negócio</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Input placeholder="Buscar estabelecimentos..." className="w-full" />
              </div>
              
              <div>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as categorias</SelectItem>
                    <SelectItem value="gastronomia">Gastronomia</SelectItem>
                    <SelectItem value="hospedagem">Hospedagem</SelectItem>
                    <SelectItem value="artesanato">Artesanato</SelectItem>
                    <SelectItem value="servicos">Serviços Turísticos</SelectItem>
                    <SelectItem value="comercio">Comércio em Geral</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select defaultValue="distance">
                  <SelectTrigger>
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="distance">Distância</SelectItem>
                    <SelectItem value="rating">Avaliação</SelectItem>
                    <SelectItem value="discount">Maior desconto</SelectItem>
                    <SelectItem value="alphabetical">Ordem alfabética</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Partners */}
        <section className="py-12">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Parceiros em Destaque</h2>
              <Badge className="bg-accent">Selo Exclusivo</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                hasPromotion={true}
                discount={20}
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

        {/* All Partners List */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <Tabs defaultValue="all">
              <TabsList className="mb-8">
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="restaurant">Restaurantes</TabsTrigger>
                <TabsTrigger value="lodging">Hospedagem</TabsTrigger>
                <TabsTrigger value="craft">Artesanato</TabsTrigger>
                <TabsTrigger value="services">Serviços</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-8">
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
                    hasPromotion={true}
                    discount={20}
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
                  
                  <CommerceCard
                    image="https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b?q=80&w=2070&auto=format&fit=crop"
                    name="Artesanato Serra Viva"
                    description="Loja de artesanato local com peças exclusivas em madeira, lã e cerâmica."
                    address="Rua do Artesão, 78 - Centro, Lages"
                    rating={4.4}
                    categories={["Artesanato", "Souvenirs"]}
                  />
                  
                  <CommerceCard
                    image="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1931&auto=format&fit=crop"
                    name="Serra Aventuras"
                    description="Agência especializada em passeios e atividades de aventura na região serrana."
                    address="Av. das Araucárias, 1001 - Coral, Lages"
                    rating={4.8}
                    categories={["Turismo", "Aventura"]}
                    hasPromotion={true}
                    discount={5}
                  />
                  
                  <CommerceCard
                    image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
                    name="Mercado Serrano"
                    description="Produtos locais, orgânicos e artesanais diretamente dos produtores da região."
                    address="Rua dos Produtores, 45 - São Cristóvão, Lages"
                    rating={4.6}
                    categories={["Alimentação", "Orgânicos"]}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="restaurant">
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
                    image="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop"
                    name="Café & Arte"
                    description="Café aconchegante com produtos artesanais e exposições de artistas locais."
                    address="Rua das Araucárias, 456 - Centro, Lages"
                    rating={4.5}
                    categories={["Café", "Artesanato"]}
                    hasPromotion={true}
                    discount={10}
                  />
                  
                  <CommerceCard
                    image="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop"
                    name="Pizzaria Lenha & Sabor"
                    description="Pizzas artesanais em forno a lenha com ingredientes da região serrana."
                    address="Rua das Flores, 234 - Centro, Lages"
                    rating={4.3}
                    categories={["Gastronomia", "Pizzaria"]}
                    hasPromotion={true}
                    discount={12}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="lodging">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <CommerceCard
                    image="https://images.unsplash.com/photo-1551918120-9739cb430c6d?q=80&w=1974&auto=format&fit=crop"
                    name="Hospedaria Vista da Serra"
                    description="Acomodações aconchegantes com vista panorâmica para as montanhas da região."
                    address="Estrada da Serra, km 5 - Zona Rural, Lages"
                    rating={4.9}
                    categories={["Hospedagem", "Rural"]}
                    hasPromotion={true}
                    discount={20}
                  />
                  
                  <CommerceCard
                    image="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
                    name="Hotel Central Lages"
                    description="Localização privilegiada no centro da cidade com ótima infraestrutura."
                    address="Av. Central, 500 - Centro, Lages"
                    rating={4.2}
                    categories={["Hospedagem", "Urbano"]}
                  />
                  
                  <CommerceCard
                    image="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1974&auto=format&fit=crop"
                    name="Chalés da Montanha"
                    description="Chalés privativos em meio à natureza da Serra Catarinense."
                    address="Rodovia SC-114, km 15 - Interior, Lages"
                    rating={4.7}
                    categories={["Hospedagem", "Rural", "Chalés"]}
                    hasPromotion={true}
                    discount={15}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="craft">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <CommerceCard
                    image="https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b?q=80&w=2070&auto=format&fit=crop"
                    name="Artesanato Serra Viva"
                    description="Loja de artesanato local com peças exclusivas em madeira, lã e cerâmica."
                    address="Rua do Artesão, 78 - Centro, Lages"
                    rating={4.4}
                    categories={["Artesanato", "Souvenirs"]}
                  />
                  
                  <CommerceCard
                    image="https://images.unsplash.com/photo-1489274495757-95c7c837b101?q=80&w=2075&auto=format&fit=crop"
                    name="Ateliê Arte da Serra"
                    description="Ateliê com artesanato em lã feito por artesãs locais mantendo tradições serranas."
                    address="Rua das Tradições, 55 - Santa Helena, Lages"
                    rating={4.8}
                    categories={["Artesanato", "Vestuário"]}
                    hasPromotion={true}
                    discount={8}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="services">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <CommerceCard
                    image="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1931&auto=format&fit=crop"
                    name="Serra Aventuras"
                    description="Agência especializada em passeios e atividades de aventura na região serrana."
                    address="Av. das Araucárias, 1001 - Coral, Lages"
                    rating={4.8}
                    categories={["Turismo", "Aventura"]}
                    hasPromotion={true}
                    discount={5}
                  />
                  
                  <CommerceCard
                    image="https://images.unsplash.com/photo-1565778097122-ef84fbedde7d?q=80&w=1974&auto=format&fit=crop"
                    name="Guia Turístico Lages360"
                    description="Serviço de guias locais especializados em roteiros históricos e culturais."
                    address="Rua dos Guias, 120 - Centro, Lages"
                    rating={4.9}
                    categories={["Turismo", "Cultural"]}
                    hasPromotion={true}
                    discount={10}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Be a Partner */}
        <section className="py-16 bg-gradient-to-br from-primary to-lages360-light-green text-white">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Seja um Parceiro Lages360</h2>
                <p className="text-white/90 text-lg mb-6 max-w-lg mx-auto lg:mx-0">
                  Cadastre seu estabelecimento e faça parte da maior rede de turismo integrado da Serra Catarinense. 
                  Atraia mais clientes e participe das ações promocionais.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-1.5 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span>Maior visibilidade para turistas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-1.5 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span>Participação no sistema de selos promocionais</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-1.5 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span>Análise de dados sobre os visitantes</span>
                  </div>
                </div>
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/comercio/cadastro">Cadastrar meu estabelecimento</Link>
                </Button>
              </div>
              
              <div className="lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1974&auto=format&fit=crop" 
                  alt="Parceiros Lages360" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Comercio;
