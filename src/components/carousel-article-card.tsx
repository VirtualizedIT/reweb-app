import Link from "next/link";
import Image from "next/image";

import { CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CarouselArticleCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
  className?: string;
}

export function CarouselArticleCard({
  title,
  description,
  category,
  image,
  date,
  className,
}: CarouselArticleCardProps) {
  return (
    <CarouselItem className={cn("md:basis-1/2 lg:basis-1/3", className)}>
      <div className="h-full p-1">
        <Link href="#">
          <Card className="h-full text-card-foreground bg-card">
            <CardContent className="flex h-full flex-col items-start gap-5 p-5">
              <div className="relative h-52 w-full">
                <Image alt={title} src={image} fill className="object-cover rounded-lg" />
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <h4 className="text-lg font-semibold">{title}</h4>
                <p className="mb-auto text-muted-foreground">{description}</p>
                <div className="flex items-center gap-3">
                  <span className="rounded-full border bg-accent px-3 py-0.5 text-sm text-accent-foreground">
                    {category}
                  </span>
                  <span className="text-sm text-muted-foreground">{date}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </CarouselItem>
  );
}
