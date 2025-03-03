import { CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface EmployeeFeatureCardProps {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  className?: string;
}

export function EmployeeFeatureCard({
  title,
  description,
  icon: Icon,
  className,
}: EmployeeFeatureCardProps) {
  return (
    <CarouselItem className={cn("md:basis-1/2 lg:basis-1/3", className)}>
      <div className="h-full p-1">
        <Card className="h-full shadow-md text-card">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="inline-flex items-center justify-center rounded-md border border-border p-2">
              <img
                alt="Image of Employee"
                src="/images/company-page-geoff.webp"
                height={0}
                width={300}
              />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">{title}</h4>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
}
