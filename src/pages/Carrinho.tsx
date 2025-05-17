
import { useState, useEffect } from "react";
import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, MapPin, Calendar, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: string;
  title: string;
  image: string;
  description: string;
}

const Carrinho = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Carregar itens do localStorage
    const items = JSON.parse(localStorage.getItem('tourist-cart') || '[]');
    setCartItems(items);
    setIsLoading(false);
    
    // Adicionar listener para atualizar o carrinho se houver mudanças
    const handleCartUpdated = () => {
      const updatedItems = JSON.parse(localStorage.getItem('tourist-cart') || '[]');
      setCartItems(updatedItems);
    };
    
    window.addEventListener('cart-updated', handleCartUpdated);
    
    return () => {
      window.removeEventListener('cart-updated', handleCartUpdated);
    };
  }, []);

  const removeFromCart = (id: string) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    localStorage.setItem('tourist-cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    
    toast({
      title: "Item removido",
      description: "O ponto turístico foi removido do seu roteiro",
      variant: "default"
    });
    
    // Emite evento para atualizar contagem do carrinho
    const event = new CustomEvent('cart-updated', { detail: updatedCart.length });
    window.dispatchEvent(event);
  };

  const clearCart = () => {
    localStorage.setItem('tourist-cart', JSON.stringify([]));
    setCartItems([]);
    
    toast({
      title: "Roteiro limpo",
      description: "Todos os pontos turísticos foram removidos do seu roteiro",
      variant: "default"
    });
    
    // Emite evento para atualizar contagem do carrinho
    const event = new CustomEvent('cart-updated', { detail: 0 });
    window.dispatchEvent(event);
  };

  const shareRoteiro = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Meu Roteiro em Lages',
        text: `Confira meu roteiro turístico em Lages: ${cartItems.map(item => item.title).join(', ')}`,
        url: window.location.href
      })
      .then(() => {
        toast({
          title: "Roteiro compartilhado!",
          variant: "default"
        });
      })
      .catch((error) => {
        console.error('Erro ao compartilhar:', error);
      });
    } else {
      // Fallback para navegadores que não suportam a API Web Share
      toast({
        title: "Compartilhamento não suportado",
        description: "Seu navegador não suporta compartilhamento direto.",
        variant: "default"
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationHeader />

      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Meu Roteiro</h1>
              <p className="text-muted-foreground">
                {cartItems.length > 0 
                  ? `${cartItems.length} ${cartItems.length === 1 ? 'ponto turístico' : 'pontos turísticos'} em seu roteiro` 
                  : 'Seu roteiro está vazio'}
              </p>
            </div>
            
            <div className="flex gap-3 mt-4 md:mt-0">
              <Button 
                variant="outline" 
                size="sm"
                onClick={shareRoteiro}
                disabled={cartItems.length === 0}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </Button>
              <Button 
                variant="destructive" 
                size="sm"
                onClick={clearCart}
                disabled={cartItems.length === 0}
              >
                <X className="w-4 h-4 mr-2" />
                Limpar Roteiro
              </Button>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : cartItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-48 h-40 sm:h-auto bg-muted">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                      <div className="mt-auto flex justify-between items-center">
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/ponto/${item.id}`}>Ver detalhes</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
              
              <div className="bg-muted/30 p-6 rounded-lg mt-4">
                <h3 className="font-medium text-lg mb-4">Informações do Roteiro</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-primary mr-2" />
                    <div>
                      <p className="font-medium text-sm">Distância Total</p>
                      <p className="text-muted-foreground">Aproximadamente 12 km</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-primary mr-2" />
                    <div>
                      <p className="font-medium text-sm">Tempo Estimado</p>
                      <p className="text-muted-foreground">8 horas (1 dia)</p>
                    </div>
                  </div>
                  
                  <div>
                    <Button className="w-full">Gerar Roteiro Otimizado</Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-muted inline-flex rounded-full p-6 mb-6">
                <MapPin className="w-10 h-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Seu roteiro está vazio</h2>
              <p className="text-muted-foreground mb-6">
                Adicione pontos turísticos ao seu roteiro para planear sua visita a Lages.
              </p>
              <Button asChild>
                <Link to="/explorar">Explorar Pontos Turísticos</Link>
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Carrinho;
