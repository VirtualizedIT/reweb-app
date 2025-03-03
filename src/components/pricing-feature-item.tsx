import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingFeatureItemProps {
  text: string;
  className?: string;
}

export function PricingFeatureItem({ text, className }: PricingFeatureItemProps) {
  return (
    <li className={cn("flex items-center gap-3", className)}>
      <Check size={24} className="text-primary" />
      <span className="text-muted-foreground">{text}</span>
    </li>
  );
}
