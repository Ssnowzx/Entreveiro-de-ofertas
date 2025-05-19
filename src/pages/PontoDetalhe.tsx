import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavigationHeader } from "../components/NavigationHeader";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Star, MapPin, Info, Clock, Ban, Check, ArrowLeft } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";
import { useToast } from "../hooks/use-toast";

// Importando imagens locais
import ParqueEcologicoImg from "../imgs/PontosTuristicos/parque natural joao jose theodoro.jpg";
import ParqueEcologicoGallery1 from "../imgs/PontosTuristicos/mirantes da serra.jpg";
import ParqueEcologicoGallery2 from "../imgs/PontosTuristicos/tanque.jpg";
import ParqueEcologicoGallery3 from "../imgs/PontosTuristicos/vidal ramos.jpg";

import CatedralImg from "../imgs/PontosTuristicos/catedral img.jpg";
import CatedralGallery1 from "../imgs/PontosTuristicos/catedral img.jpg";
import CatedralGallery2 from "../imgs/PontosTuristicos/mirantes da serra.jpg";
import CatedralGallery3 from "../imgs/PontosTuristicos/thiago de castro.jpg";

import MercadoPublicoImg from "../imgs/PontosTuristicos/mercadopublico1.jpg";
import MercadoPublicoGallery1 from "../imgs/PontosTuristicos/mercadopublico2.jpg";
import MercadoPublicoGallery2 from "../imgs/PontosTuristicos/mercadopublico3.jpg";

// Simulando pontos turísticos
const mockPontosTuristicos = [
  {
    id: "mercado-publico-lages",
    title: "Mercado Público de Lages",
    description: "Mercado tradicional com variedade de produtos locais, artesanato e gastronomia típica.",
    longDescription: "O Mercado Público de Lages é um ponto histórico e cultural da cidade, conhecido por sua diversidade de produtos locais, incluindo alimentos frescos, artesanato regional e opções gastronômicas típicas da Serra Catarinense. O mercado é um espaço de convivência e comércio que atrai moradores e turistas, oferecendo uma experiência autêntica da cultura local. Além das bancas de produtos, o mercado conta com eventos culturais e feiras temáticas ao longo do ano.",
    image: MercadoPublicoImg,
    gallery: [
      MercadoPublicoGallery1,
      MercadoPublicoGallery2
    ],
    rating: 4.7,
    categories: ["Mercado", "Artesanato", "Gastronomia"],
    qrCode: false,
    infoAvailable: true,
    address: "Rua Nereu Ramos, Centro, Lages - SC",
    horario: "Segunda a sábado, das 7h às 19h",
    entrada: "Gratuita",
    acessibilidade: true,
    estacionamento: false,
    banheiros: true,
    alimentacao: true,
    tempoSugerido: "2 horas"
  },
  {
    id: "parque-ecologico",
    title: "Parque Ecológico João José Theodoro da Costa Neto",
    description: "Área de preservação ambiental com trilhas, cachoeiras e fauna e flora nativas da região. O parque oferece diversos trilhos ecológicos, centro de visitantes e área para piquenique. Ideal para famílias e amantes da natureza.",
    longDescription: "O Parque Ecológico João José Theodoro da Costa Neto é uma área de preservação ambiental que abrange mais de 234 hectares de mata nativa preservada. Criado em 1997, o parque tem como objetivo conservar a biodiversidade da Mata Atlântica e proporcionar educação ambiental aos visitantes. O local conta com trilhas sinalizadas, centro de visitantes com exposições sobre a fauna e flora local, mirantes com vista panorâmica para a Serra Catarinense e áreas para descanso. É possível observar diversas espécies de pássaros, pequenos mamíferos e uma rica vegetação, incluindo araucárias centenárias. O parque também oferece visitas guiadas mediante agendamento prévio.",
    image: ParqueEcologicoImg,
    gallery: [
      ParqueEcologicoGallery1,
      ParqueEcologicoGallery2,
      ParqueEcologicoGallery3
    ],
    rating: 4.8,
    categories: ["Natureza", "Trilhas", "Aventura"],
    qrCode: true,
    infoAvailable: true,
    address: "Estrada do Parque, s/n - Zona Rural, Lages - SC",
    horario: "Terça a domingo, das 8h às 17h",
    entrada: "R$ 10,00 (inteira) | R$ 5,00 (meia)",
    acessibilidade: true,
    estacionamento: true,
    banheiros: true,
    alimentacao: false,
    tempoSugerido: "3 horas"
  },
  {
    id: "catedral-diocesana",
    title: "Catedral Diocesana de Lages",
    description: "Um dos marcos históricos e religiosos mais importantes da cidade, com arquitetura impressionante.",
    longDescription: "A Catedral Diocesana de Lages, dedicada a Nossa Senhora dos Prazeres, é um importante marco histórico, cultural e religioso da cidade. Sua construção iniciou-se em 1920, sendo concluída em 1954. O edifício apresenta uma arquitetura neogótica imponente, com torres altas, vitrais coloridos e detalhes ornamentais característicos. No interior, destacam-se o altar-mor em mármore, esculturas religiosas e pinturas sacras de artistas regionais. A catedral está localizada no coração da cidade e representa não apenas um local de culto, mas também um patrimônio histórico que conta a história da formação religiosa e cultural de Lages. Visitas guiadas podem ser realizadas mediante agendamento na secretaria paroquial.",
    image: CatedralImg,
    gallery: [
      CatedralGallery1,
      CatedralGallery2,
      CatedralGallery3
    ],
    rating: 4.6,
    categories: ["Histórico", "Religioso", "Arquitetura"],
    qrCode: false,
    infoAvailable: true,
    address: "Praça João Costa, Centro, Lages - SC",
    horario: "Segunda a sexta, das 8h às 18h. Sábado e domingo, das 8h às 12h e das 14h às 18h",
    entrada: "Gratuita",
    acessibilidade: true,
    estacionamento: true,
    banheiros: true,
    alimentacao: false,
    tempoSugerido: "1 hora"
  }
];

const PontoDetalhe = () => {
  const { id } = useParams();
  const [ponto, setPonto] = useState<any>(null);
  const [activeImage, setActiveImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Em um cenário real, faria uma chamada à API
    const pontoEncontrado = mockPontosTuristicos.find(p => p.id === id);
    
    if (pontoEncontrado) {
      setPonto(pontoEncontrado);
      setActiveImage(pontoEncontrado.image);
    }
    
    setIsLoading(false);
  }, [id]);

  const addToCart = () => {
    if (!ponto) return;
    
    // Busca o carrinho atual do localStorage ou cria um novo
    const currentCart = JSON.parse(localStorage.getItem('tourist-cart') || '[]');
    
    // Verifica se o item já está no carrinho
    if (!currentCart.some((item: {id: string}) => item.id === ponto.id)) {
      currentCart.push({
        id: ponto.id,
        title: ponto.title,
        image: ponto.image,
        description: ponto.description.substring(0, 50) + "..."
      });
      
      localStorage.setItem('tourist-cart', JSON.stringify(currentCart));
      
      toast({
        title: "Adicionado ao carrinho",
        description: `${ponto.title} foi adicionado ao seu roteiro`,
        variant: "default"
      });
      
      // Emite evento para atualizar contagem do carrinho
      const event = new CustomEvent('cart-updated', { detail: currentCart.length });
      window.dispatchEvent(event);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavigationHeader />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!ponto) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavigationHeader />
        <div className="flex-1 container py-16 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-center mb-6">Ponto turístico não encontrado</h1>
          <p className="text-muted-foreground text-center mb-8">
            Não foi possível encontrar informações sobre este ponto turístico.
          </p>
          <Button asChild>
            <Link to="/explorar">Voltar para Explorar</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationHeader />

      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="container py-4">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Início</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link to="/explorar" className="text-muted-foreground hover:text-foreground">Explorar</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="font-medium">{ponto.title.substring(0, 20)}...</span>
          </div>
        </div>

        {/* Gallery Section */}
        <section className="bg-muted/30 py-8">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <img 
                    src={activeImage} 
                    alt={ponto.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button 
                    onClick={() => setActiveImage(ponto.image)}
                    className="aspect-video bg-muted rounded-md overflow-hidden border-2"
                    style={{ borderColor: activeImage === ponto.image ? 'var(--primary)' : 'transparent' }}
                  >
                    <img 
                      src={ponto.image} 
                      alt={`${ponto.title} - principal`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                  {ponto.gallery.map((img: string, index: number) => (
                    <button 
                      key={index}
                      onClick={() => setActiveImage(img)}
                      className="aspect-video bg-muted rounded-md overflow-hidden border-2"
                      style={{ borderColor: activeImage === img ? 'var(--primary)' : 'transparent' }}
                    >
                      <img 
                        src={img} 
                        alt={`${ponto.title} - ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  {ponto.categories.map((category: string, index: number) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {category}
                    </Badge>
                  ))}
                </div>
                
                <h1 className="text-3xl font-bold mb-2">{ponto.title}</h1>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-accent text-accent" />
                    <span className="ml-1 font-medium">{ponto.rating.toFixed(1)}</span>
                  </div>
                  <span className="text-muted-foreground">•</span>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{ponto.address.split(' - ')[0]}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{ponto.longDescription}</p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button className="flex-1" onClick={addToCart}>
                    Adicionar ao Roteiro
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link to="/roteiros">Ver Roteiros Sugeridos</Link>
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Info className="w-5 h-5 text-muted-foreground mr-2" />
                    <div>
                      <p className="text-sm font-medium">Entrada</p>
                      <p className="text-sm text-muted-foreground">{ponto.entrada}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-muted-foreground mr-2" />
                    <div>
                      <p className="text-sm font-medium">Horário</p>
                      <p className="text-sm text-muted-foreground">{ponto.horario.split(',')[0]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detalhes e Facilidades */}
        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="info">
              <TabsList className="mb-6">
                <TabsTrigger value="info">Informações</TabsTrigger>
                <TabsTrigger value="facilities">Facilidades</TabsTrigger>
                <TabsTrigger value="location">Localização</TabsTrigger>
              </TabsList>
              
              <TabsContent value="info" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Detalhes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium">Endereço</p>
                        <p className="text-sm text-muted-foreground">{ponto.address}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium">Horário de Funcionamento</p>
                        <p className="text-sm text-muted-foreground">{ponto.horario}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium">Valor da Entrada</p>
                        <p className="text-sm text-muted-foreground">{ponto.entrada}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium">Tempo Sugerido de Visita</p>
                        <p className="text-sm text-muted-foreground">{ponto.tempoSugerido}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {ponto.infoAvailable && (
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-4">Informações Turísticas</h3>
                      <p className="text-muted-foreground">
                        Este ponto turístico conta com informações detalhadas sobre sua história, 
                        importância cultural e curiosidades. Você pode acessar essas informações 
                        através do aplicativo Entreveiro de Ofertas, disponível para download.
                      </p>
                      <div className="mt-4 flex gap-4">
                        <Button variant="outline" size="sm">
                          Download para Android
                        </Button>
                        <Button variant="outline" size="sm">
                          Download para iOS
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="facilities">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Facilidades</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="flex items-center">
                        {ponto.acessibilidade ? 
                          <Check className="w-5 h-5 text-green-500 mr-2" /> : 
                          <Ban className="w-5 h-5 text-red-500 mr-2" />
                        }
                        <span>Acessibilidade</span>
                      </div>
                      
                      <div className="flex items-center">
                        {ponto.estacionamento ? 
                          <Check className="w-5 h-5 text-green-500 mr-2" /> : 
                          <Ban className="w-5 h-5 text-red-500 mr-2" />
                        }
                        <span>Estacionamento</span>
                      </div>
                      
                      <div className="flex items-center">
                        {ponto.banheiros ? 
                          <Check className="w-5 h-5 text-green-500 mr-2" /> : 
                          <Ban className="w-5 h-5 text-red-500 mr-2" />
                        }
                        <span>Banheiros</span>
                      </div>
                      
                      <div className="flex items-center">
                        {ponto.alimentacao ? 
                          <Check className="w-5 h-5 text-green-500 mr-2" /> : 
                          <Ban className="w-5 h-5 text-red-500 mr-2" />
                        }
                        <span>Alimentação</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="location">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Localização</h3>
                    <div className="bg-muted h-[300px] rounded-lg flex items-center justify-center mb-4">
                      <p className="text-muted-foreground">Mapa será carregado aqui</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">{ponto.title}</p>
                        <p className="text-muted-foreground">{ponto.address}</p>
                        <a 
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ponto.title + ' ' + ponto.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm inline-block mt-2"
                        >
                          Ver no Google Maps
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PontoDetalhe;
