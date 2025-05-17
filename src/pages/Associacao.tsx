
import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Associacao = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary py-16">
          <div className="container text-center">
            <h1 className="text-primary-foreground text-4xl font-bold mb-4">Associação Lages360</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Associação Lages360 de Promoção Turística Integrada: unindo empresas, instituições e cidadãos 
              para valorizar o turismo na Serra Catarinense.
            </p>
          </div>
        </section>

        {/* About Association */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Quem Somos</h2>
                <p className="text-muted-foreground mb-4">
                  A Associação Lages360 de Promoção Turística Integrada é uma organização sem fins lucrativos 
                  criada para revolucionar o turismo em Lages e região através da integração digital de experiências.
                </p>
                <p className="text-muted-foreground mb-4">
                  Reunimos empresários do comércio local, prestadores de serviços turísticos, entidades culturais 
                  e representantes do poder público em torno de um objetivo comum: fortalecer o turismo da Serra 
                  Catarinense de forma colaborativa e inovadora.
                </p>
                <p className="text-muted-foreground mb-6">
                  Nossa missão é integrar os diversos setores relacionados ao turismo, criando uma experiência 
                  mais completa e acessível para os visitantes, enquanto geramos desenvolvimento econômico local.
                </p>
                <Button size="lg">Saiba mais</Button>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop" 
                  alt="Membros da Associação Lages360" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Nossos Objetivos</h2>
              <p className="text-muted-foreground">
                Trabalhamos com metas claras para o desenvolvimento do turismo integrado na região de Lages.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white shadow-lg border-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Integração</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Reunir empresas, instituições e cidadãos com interesse na valorização do turismo em Lages.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg border-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Economia Local</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Incentivar a economia através de programas de engajamento com turistas, como selos e promoções.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg border-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Inovação Digital</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Desenvolver, manter e evoluir a plataforma digital Lages360 para uma experiência turística completa.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg border-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Acessibilidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Promover o turismo inclusivo, com foco em acessibilidade e experiências para todos os públicos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Member Types */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Categorias de Associados</h2>
              <p className="text-muted-foreground">
                A Associação Lages360 oferece diferentes categorias de associação para atender às necessidades de cada parceiro.
              </p>
            </div>
            
            <Tabs defaultValue="contribuintes">
              <TabsList className="mb-8 mx-auto flex justify-center">
                <TabsTrigger value="fundadores">Fundadores</TabsTrigger>
                <TabsTrigger value="contribuintes">Contribuintes</TabsTrigger>
                <TabsTrigger value="institucionais">Institucionais</TabsTrigger>
                <TabsTrigger value="colaboradores">Colaboradores</TabsTrigger>
              </TabsList>
              
              <TabsContent value="fundadores">
                <Card className="border-none shadow-lg max-w-3xl mx-auto">
                  <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                    <CardTitle>Membros Fundadores</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      Criadores do projeto Lages360
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">
                      Os membros fundadores são os idealizadores e responsáveis pela criação do projeto Lages360. 
                      Participam ativamente das decisões estratégicas e da gestão da associação.
                    </p>
                    <div className="space-y-2 mt-6">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span>Participação nas decisões estratégicas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span>Direito a voto nas assembleias</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span>Destaque especial na plataforma</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="contribuintes">
                <Card className="border-none shadow-lg max-w-3xl mx-auto">
                  <CardHeader className="bg-accent text-accent-foreground rounded-t-lg">
                    <CardTitle>Membros Contribuintes</CardTitle>
                    <CardDescription className="text-accent-foreground/80">
                      Comércios e prestadores de serviços
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">
                      Os membros contribuintes são estabelecimentos comerciais e prestadores de serviços que 
                      participam ativamente do ecossistema turístico de Lages, contribuindo financeiramente com 
                      a associação e participando das ações promocionais.
                    </p>
                    <div className="space-y-2 mt-6">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-accent/10 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span>Destaque no app Lages360</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-accent/10 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span>Participação no programa de selos e benefícios</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-accent/10 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span>Acesso a relatórios de consumo turístico</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="institucionais">
                <Card className="border-none shadow-lg max-w-3xl mx-auto">
                  <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                    <CardTitle>Membros Institucionais</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      Entidades públicas ou educacionais
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">
                      Os membros institucionais são entidades públicas, educacionais ou culturais que apoiam a 
                      missão da Associação Lages360, contribuindo com recursos, conhecimento e legitimidade institucional.
                    </p>
                    <div className="space-y-2 mt-6">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span>Participação em eventos e decisões estratégicas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span>Acesso aos dados de fluxo turístico</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span>Selo institucional na plataforma</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="colaboradores">
                <Card className="border-none shadow-lg max-w-3xl mx-auto">
                  <CardHeader className="bg-accent text-accent-foreground rounded-t-lg">
                    <CardTitle>Membros Colaboradores</CardTitle>
                    <CardDescription className="text-accent-foreground/80">
                      Voluntários e apoiadores culturais
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">
                      Os membros colaboradores são pessoas físicas, voluntários e apoiadores culturais que contribuem 
                      com trabalho, conhecimento e divulgação das ações da Associação Lages360.
                    </p>
                    <div className="space-y-2 mt-6">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-accent/10 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span>Participação em projetos culturais</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-accent/10 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span>Benefícios em eventos e promoções</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-accent/10 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span>Reconhecimento na plataforma</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-16 bg-gradient-to-br from-primary to-lages360-light-green text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Junte-se à Associação Lages360</h2>
              <p className="text-white/90 text-lg mb-8">
                Faça parte do movimento que está transformando o turismo na Serra Catarinense. 
                Juntos, podemos criar uma experiência turística mais integrada, inclusiva e benéfica para todos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Associe-se agora
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Entre em contato
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Associacao;
