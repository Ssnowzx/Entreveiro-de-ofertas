
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Calendar, Store, Users } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function NavigationHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
              <span className="text-primary-foreground font-bold text-xl">L</span>
            </div>
            <span className="font-bold text-xl text-primary hidden sm:inline-block">
              Lages360
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
          <Button variant="secondary" size="sm" className="hidden sm:flex">Entrar</Button>
          <Button variant="default" size="sm" className="hidden sm:flex">Cadastrar</Button>
          
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
            
            <div className="border-t mt-2 pt-4 flex flex-col gap-3">
              <Button className="w-full" variant="secondary">Entrar</Button>
              <Button className="w-full">Cadastrar</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
