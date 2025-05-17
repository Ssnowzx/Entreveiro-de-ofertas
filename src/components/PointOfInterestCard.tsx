
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PointOfInterestCardProps {
  image: string;
  title: string;
  description: string;
  rating: number;
  categories: string[];
  qrCode?: boolean;
  tourVirtual?: boolean;
}

export function PointOfInterestCard({
  image,
  title,
  description,
  rating,
  categories,
  qrCode = false,
  tourVirtual = false,
}: PointOfInterestCardProps) {
  return (
    <div className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {(qrCode || tourVirtual) && (
          <div className="absolute top-3 right-3 flex space-x-2">
            {tourVirtual && (
              <Badge variant="secondary" className="bg-secondary/90 backdrop-blur-sm">
                Tour 360°
              </Badge>
            )}
            {qrCode && (
              <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
                QR Code
              </Badge>
            )}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-accent text-accent mr-1" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {categories.map((category, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {category}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-between">
          <Button variant="outline" size="sm">Ver detalhes</Button>
          {tourVirtual && (
            <Button variant="default" size="sm">Tour Virtual</Button>
          )}
        </div>
      </div>
    </div>
  );
}
