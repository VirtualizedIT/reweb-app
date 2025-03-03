import Link from "next/link";
import { cn } from "@/lib/utils";

interface VitBreadcrumbsProps {
  label: string;
  href: string;
  className?: string;
}

export function VitBreadcrumbs({ label, href, className }: VitBreadcrumbsProps) {
  return (
    <section
      className={cn("border mb-4 container rounded-md p-2 bg-muted border-border", className)}
    >
      <div className="flex cursor-pointer items-center pl-3" />
      <Link href={href} className="text-primary">
        {label}
      </Link>
    </section>
  );
}
