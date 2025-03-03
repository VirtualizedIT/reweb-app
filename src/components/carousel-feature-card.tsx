import { LucideProps } from "lucide-react";

import { CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CarouselFeatureCardProps {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  className?: string;
}

export function CarouselFeatureCard({
  title,
  description,
  icon: Icon,
  className,
}: CarouselFeatureCardProps) {
  return (
    <CarouselItem className={cn("md:basis-1/2 lg:basis-1/3", className)}>
      <div className="h-full p-1">
        <Card className="h-full shadow-md bg-card">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="inline-flex items-center justify-center rounded-md border p-2 border-muted-foreground bg-muted-foreground/30">
              <Icon size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-card-foreground">{title}</h4>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
}
