import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { PricingCard } from "@/components/pricing-card";
import { cn } from "@/lib/utils";

interface FaqItemProps {
  letter1: string;
  letter2: string;
  question: string;
  answer: string;
  className?: string;
}

export function FaqItem({ letter1, letter2, question, answer, className }: FaqItemProps) {
  return (
    <AccordionItem value={question} className={cn("border-b-0", className)}>
      <div className="flex gap-8 items-center">
        <div className="flex items-center gap-0 p-4 w-16 max-h-16">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-muted-foreground">
            {letter1}
          </h2>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-accent">
            {letter2}
          </h2>
        </div>
        <div className="flex flex-col ml-8">
          <AccordionTrigger className="py-6 text-lg hover:no-underline flex flex-row text-card-foreground">
            {question}
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            {answer}
            <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
              <div className="grid w-full grid-cols-1 lg:grid-cols-3 m-0 gap-8">
                <PricingCard
                  name="Engagement"
                  price={9}
                  feature1="Unlimited projects"
                  feature2="Unlimited storage"
                  feature3="24/7 support"
                  feature4="API access"
                  feature5="Custom branding"
                  description="Our solutions boost student engagement through interactive content and collaborative tools, making learning both enjoyable and impactful"
                  isMostPopular={false}
                />
                <PricingCard
                  name="Accountability"
                  price={19}
                  feature1="Everything in Basic"
                  feature2="Priority support"
                  feature3="Advanced analytics"
                  feature4="Unlimited users"
                  feature5="Custom domain"
                  description="We enhance student accountability with features for progress tracking and transparent feedback, encouraging a responsible approach to learning."
                  isMostPopular={false}
                />
                <PricingCard
                  name="Performance"
                  price={49}
                  feature1="Everything in Pro"
                  feature2="Single sign-on"
                  feature3="Custom SLA"
                  feature4="Custom integrations"
                  feature5="Custom reporting"
                  description="Our systems evaluate student performance using advanced analytics, providing educators with actionable insights to tailor their teaching strategies effectively."
                  isMostPopular={false}
                />
              </div>
            </section>
          </AccordionContent>
        </div>
      </div>
    </AccordionItem>
  );
}
