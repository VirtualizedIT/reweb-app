import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FaqItem2Props {
  question: string;
  answer: string;
  className?: string;
}

export function FaqItem2({ question, answer, className }: FaqItem2Props) {
  return (
    <AccordionItem value={question} className={cn("border-b-0 bg-card", className)}>
      <AccordionTrigger className="py-6 text-left text-lg hover:no-underline text-card-foreground">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-lg text-muted-foreground">{answer}</AccordionContent>
    </AccordionItem>
  );
}
