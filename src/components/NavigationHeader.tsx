
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Calendar, Store, Users, ShoppingCart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";

export function NavigationHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const isMobile = useIsMobile();

  // Carrega o contador do carrinho quando o componente é montado
  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem('tourist-cart') || '[]');
      setCartCount(cartItems.length);
    };

    // Atualiza ao carregar o componente
    updateCartCount();

    // Adiciona listener para o evento de atualização do carrinho
    window.addEventListener('cart-updated', updateCartCount);
    
    // Cleanup
    return () => {
      window.removeEventListener('cart-updated', updateCartCount);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
              <span className="text-primary-foreground font-bold text-xl">L</span>
            </div>
            <span className="font-bold text-xl text-primary hidden sm:inline-block">
              Entreveiro de Ofertas
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/explorar" className="flex items-center gap-1.5 text-foreground/70 hover:text-foreground">
            <MapPin size={18} />
            <span>Explorar</span>
          </Link>
          <Link to="/roteiros" className="flex items-center gap-1.5 text-foreground/70 hover:text-foreground">
            <Calendar size={18} />
            <span>Roteiros</span>
          </Link>
          <Link to="/comercio" className="flex items-center gap-1.5 text-foreground/70 hover:text-foreground">
            <Store size={18} />
            <span>Comércio</span>
          </Link>
          <Link to="/associacao" className="flex items-center gap-1.5 text-foreground/70 hover:text-foreground">
            <Users size={18} />
            <span>Associação</span>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* Ícone do carrinho com contador */}
          <Link to="/carrinho" className="relative mr-2">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </Link>
          
          <Button variant="secondary" size="sm" className="hidden sm:flex" asChild>
            <Link to="/login">Entrar</Link>
          </Button>
          <Button variant="default" size="sm" className="hidden sm:flex" asChild>
            <Link to="/cadastro">Cadastrar</Link>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isMenuOpen && isMobile && (
        <div className="fixed inset-0 top-16 bg-background z-40 p-4">
          <div className="flex flex-col gap-4 pt-4">
            <Link 
              to="/explorar" 
              className="flex items-center gap-2 p-3 rounded-md hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              <MapPin size={18} />
              <span className="font-medium">Explorar</span>
            </Link>
            <Link 
              to="/roteiros" 
              className="flex items-center gap-2 p-3 rounded-md hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar size={18} />
              <span className="font-medium">Roteiros</span>
            </Link>
            <Link 
              to="/comercio" 
              className="flex items-center gap-2 p-3 rounded-md hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              <Store size={18} />
              <span className="font-medium">Comércio</span>
            </Link>
            <Link 
              to="/associacao" 
              className="flex items-center gap-2 p-3 rounded-md hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              <Users size={18} />
              <span className="font-medium">Associação</span>
            </Link>
            
            <Link
              to="/carrinho"
              className="flex items-center gap-2 p-3 rounded-md hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart size={18} />
              <span className="font-medium">Meu Roteiro</span>
              {cartCount > 0 && (
                <Badge variant="destructive" className="ml-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartCount}
                </Badge>
              )}
            </Link>
            
            <div className="border-t mt-2 pt-4 flex flex-col gap-3">
              <Button className="w-full" variant="secondary" asChild>
                <Link to="/login">Entrar</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link to="/cadastro">Cadastrar</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
