
import { MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CommerceCardProps {
  image: string;
  name: string;
  description: string;
  address: string;
  rating: number;
  categories: string[];
  hasPromotion?: boolean;
  discount?: number;
}

export function CommerceCard({
  image,
  name,
  description,
  address,
  rating,
  categories,
  hasPromotion = false,
  discount,
}: CommerceCardProps) {
  return (
    <div className="relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {hasPromotion && (
          <div className="absolute -right-8 top-5 bg-accent text-accent-foreground px-10 py-1 transform rotate-45 text-xs font-bold">
            {discount ? `${discount}% OFF` : 'PROMOÇÃO'}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-accent text-accent mr-1" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-2">{description}</p>
        
        <div className="flex items-center text-xs text-muted-foreground mb-3">
          <MapPin className="w-3.5 h-3.5 mr-1" />
          <span className="line-clamp-1">{address}</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {categories.map((category, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {category}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-between">
          <Button variant="outline" size="sm">Ver detalhes</Button>
          {hasPromotion && (
            <Button variant="default" size="sm">Ver oferta</Button>
          )}
        </div>
      </div>
    </div>
  );
}
