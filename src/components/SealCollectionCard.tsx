
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface SealCollectionCardProps {
  title: string;
  description: string;
  image: string;
  progress: number;
  totalSeals: number;
  collectedSeals: number;
  benefit: string;
  categories?: string[];
}

export function SealCollectionCard({
  title,
  description,
  image,
  progress,
  totalSeals,
  collectedSeals,
  benefit,
  categories = []
}: SealCollectionCardProps) {
  return (
    <div className="relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 h-36 md:h-auto">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-4 md:p-5 w-full md:w-2/3">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          
          <div className="flex flex-wrap gap-1 mb-2">
            {categories.map((category, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {category}
              </Badge>
            ))}
          </div>
          
          <p className="text-muted-foreground text-sm mb-3">{description}</p>
          
          <div className="mb-2">
            <div className="flex justify-between text-sm">
              <span>Progresso</span>
              <span className="font-medium">{collectedSeals} de {totalSeals} selos</span>
            </div>
            <Progress value={progress} className="h-2 mt-1" />
          </div>
          
          <div className="bg-primary/10 text-primary rounded p-2 text-sm">
            <span className="font-medium">Benefício:</span> {benefit}
          </div>
        </div>
      </div>
    </div>
  );
}
