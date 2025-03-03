import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface VitFeatureCardProps {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  letter1: string;
  letter2: string;
  className?: string;
}

export function VitFeatureCard({
  title,
  description,
  icon: Icon,
  letter1,
  letter2,
  className,
}: VitFeatureCardProps) {
  return (
    <Card className={cn("bg-card", className)}>
      <CardContent className="flex flex-col items-start gap-5 p-7">
        <div className="inline-flex items-center justify-center rounded-md border border-border p-2 text-center h-14 w-14 bg-muted-foreground/30">
          <h2 className="text-muted-foreground text-3xl">{letter1}</h2>
          <h2 classname="text-primary" className="text-3xl text-accent">
            {letter2}
          </h2>
        </div>
        <div>
          <h4 className="mb-2 text-lg font-semibold text-card-foreground">{title}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
