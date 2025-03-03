import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
  className?: string;
}

export function ArticleCard({
  title,
  description,
  category,
  image,
  date,
  className,
}: ArticleCardProps) {
  return (
    <Link href="#" className={className}>
      <Card className="h-full bg-card">
        <CardContent className="flex h-full flex-col items-start gap-5 px-0">
          <div className="relative h-52 w-full">
            <Image alt={title} src={image} fill className="object-cover rounded-t-lg" />
          </div>
          <div className="flex flex-1 flex-col gap-4 px-5">
            <h4 className="text-lg font-semibold text-card-foreground">{title}</h4>
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
  );
}
