
import { Calendar, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface RouteCardProps {
  title: string;
  description: string;
  image: string;
  points: number;
  duration: string;
  distance: string;
  categories: string[];
  isAccessible?: boolean;
  isOffline?: boolean;
}

export function RouteCard({
  title,
  description,
  image,
  points,
  duration,
  distance,
  categories,
  isAccessible = false,
  isOffline = false,
}: RouteCardProps) {
  return (
    <div className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          {isAccessible && (
            <Badge variant="secondary" className="bg-secondary/90 backdrop-blur-sm">
              Acessível
            </Badge>
          )}
          {isOffline && (
            <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
              Offline
            </Badge>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1 mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{description}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {categories.map((category, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {category}
            </Badge>
          ))}
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
            <MapPin className="h-4 w-4 mb-1 text-primary" />
            <span className="text-xs font-medium">{points} pontos</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
            <Clock className="h-4 w-4 mb-1 text-primary" />
            <span className="text-xs font-medium">{duration}</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
            <Calendar className="h-4 w-4 mb-1 text-primary" />
            <span className="text-xs font-medium">{distance}</span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="outline" className="flex-1" size="sm">Ver detalhes</Button>
          <Button variant="default" className="flex-1" size="sm">Iniciar</Button>
        </div>
      </div>
    </div>
  );
}
