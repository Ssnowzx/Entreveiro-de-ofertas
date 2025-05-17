
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
                <span className="text-primary-foreground font-bold text-xl">L</span>
              </div>
              <span className="font-bold text-xl text-primary">Lages360</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Revolucionando o turismo em Lages e região através da integração digital de experiências.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-sm">Navegação</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/explorar" className="text-muted-foreground hover:text-foreground">Explorar</Link></li>
              <li><Link to="/roteiros" className="text-muted-foreground hover:text-foreground">Roteiros</Link></li>
              <li><Link to="/comercio" className="text-muted-foreground hover:text-foreground">Comércio</Link></li>
              <li><Link to="/associacao" className="text-muted-foreground hover:text-foreground">Associação</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm">Para Empresas</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/comercio/cadastro" className="text-muted-foreground hover:text-foreground">Cadastre seu negócio</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground">Vantagens para parceiros</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground">Como funciona</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground">Contato comercial</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm">Contato</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="mailto:contato@lages360.com.br" className="text-muted-foreground hover:text-foreground">contato@lages360.com.br</a></li>
              <li><a href="tel:+5549999999999" className="text-muted-foreground hover:text-foreground">(49) 99999-9999</a></li>
              <li className="text-muted-foreground">Lages - Santa Catarina</li>
            </ul>
            <div className="mt-4 flex space-x-2">
              {/* Futuramente, ícones de redes sociais */}
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Lages360. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">Termos de Uso</Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
