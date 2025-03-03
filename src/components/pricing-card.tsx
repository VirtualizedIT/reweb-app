import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  description: string;
  price: number;
  isMostPopular: boolean;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
  className?: string;
}

export function PricingCard({
  name,
  description,
  price,
  isMostPopular,
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  className,
}: PricingCardProps) {
  return (
    <Card className={cn("relative bg-card", className)}>
      <CardContent className="divide-y p-0">
        <div className="flex flex-col items-center px-7 py-10">
          <h4 className="font-heading text-2xl font-semibold text-card-foreground">{name}</h4>
          <p className="mt-2 text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
