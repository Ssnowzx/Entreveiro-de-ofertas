
import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const ComercioCadastro = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary py-16">
          <div className="container text-center">
            <h1 className="text-primary-foreground text-4xl font-bold mb-4">Cadastre seu Estabelecimento</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Faça parte da rede de parceiros do Lages360 e amplie sua visibilidade para turistas.
              Oferecemos uma plataforma completa para promover seu negócio.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Por que se cadastrar?</h2>
              <p className="text-muted-foreground">
                Ao se tornar um parceiro do Lages360, seu negócio ganha visibilidade e acesso a uma série de benefícios exclusivos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-md border-none">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Visibilidade</h3>
                  <p className="text-center text-muted-foreground">
                    Seu negócio aparece para turistas que estão procurando por experiências, serviços e produtos na região.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md border-none">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Marketing Inteligente</h3>
                  <p className="text-center text-muted-foreground">
                    Promova ofertas específicas, apareça em roteiros personalizados e incentive o retorno dos clientes.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md border-none">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Análise de Dados</h3>
                  <p className="text-center text-muted-foreground">
                    Acesse relatórios e insights sobre o perfil dos visitantes e fluxo turístico da região.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Formulário de Cadastro</h2>
              <p className="text-muted-foreground mb-8">
                Preencha os dados abaixo para iniciar seu cadastro na plataforma Lages360. 
                Nossa equipe entrará em contato para finalizar o processo.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Informações do Estabelecimento</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="business-name">Nome do Estabelecimento *</Label>
                      <Input id="business-name" placeholder="Ex: Restaurante Sabores da Serra" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business-type">Tipo de Negócio *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo de negócio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="restaurant">Restaurante/Café</SelectItem>
                          <SelectItem value="lodging">Hospedagem</SelectItem>
                          <SelectItem value="craft">Artesanato</SelectItem>
                          <SelectItem value="tourism">Serviços Turísticos</SelectItem>
                          <SelectItem value="commerce">Comércio em Geral</SelectItem>
                          <SelectItem value="other">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="description">Descrição do Negócio *</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Descreva brevemente seu estabelecimento, produtos e serviços oferecidos..." 
                        rows={4} 
                        required 
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Localização</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Endereço Completo *</Label>
                      <Input id="address" placeholder="Ex: Av. Principal, 123" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="neighborhood">Bairro *</Label>
                      <Input id="neighborhood" placeholder="Ex: Centro" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Cidade *</Label>
                      <Input id="city" placeholder="Ex: Lages" required defaultValue="Lages" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postal-code">CEP *</Label>
                      <Input id="postal-code" placeholder="Ex: 00000-000" required />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Informações de Contato</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Nome do Responsável *</Label>
                      <Input id="contact-name" placeholder="Ex: João Silva" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-position">Cargo/Função</Label>
                      <Input id="contact-position" placeholder="Ex: Proprietário" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Telefone de Contato *</Label>
                      <Input id="contact-phone" placeholder="Ex: (49) 99999-9999" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input id="contact-email" type="email" placeholder="Ex: seu@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" placeholder="Ex: https://www.seusite.com.br" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="social-media">Redes Sociais</Label>
                      <Input id="social-media" placeholder="Ex: @seu_instagram" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Plano de Interesse</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="basic-plan" />
                      <Label htmlFor="basic-plan" className="font-normal">Plano Básico - visibilidade na plataforma</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="premium-plan" />
                      <Label htmlFor="premium-plan" className="font-normal">Plano Premium - visibilidade + promoções + relatórios</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="not-sure" />
                      <Label htmlFor="not-sure" className="font-normal">Não tenho certeza, gostaria de mais informações</Label>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="font-normal">
                      Concordo com os Termos de Uso e Política de Privacidade *
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="marketing" />
                    <Label htmlFor="marketing" className="font-normal">
                      Desejo receber informações e novidades da Associação Lages360
                    </Label>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button size="lg" className="w-full md:w-auto">Enviar cadastro</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">O que dizem nossos parceiros</h2>
              <p className="text-muted-foreground">
                Confira os depoimentos de estabelecimentos que já fazem parte da plataforma Lages360.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white shadow-md border-none">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h3 className="font-semibold">Restaurante Sabores da Serra</h3>
                      <p className="text-sm text-muted-foreground">Parceiro desde 2023</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "Desde que nos cadastramos na plataforma, notamos um aumento significativo de turistas em nosso 
                    restaurante. O sistema de selos foi um grande sucesso entre nossos clientes."
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md border-none">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h3 className="font-semibold">Hospedaria Vista da Serra</h3>
                      <p className="text-sm text-muted-foreground">Parceiro desde 2022</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "A parceria com o Lages360 proporcionou uma excelente visibilidade para nossa hospedaria. 
                    Os relatórios de fluxo turístico nos ajudam a planejar melhor nossas estratégias."
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md border-none">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h3 className="font-semibold">Artesanato Serra Viva</h3>
                      <p className="text-sm text-muted-foreground">Parceiro desde 2023</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "Como pequeno artesão, estar na plataforma Lages360 abriu portas para um público que não conseguiríamos 
                    alcançar sozinhos. É uma iniciativa que valoriza a cultura local."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ComercioCadastro;
