// Services Page section-4.tsx //

import Link from "next/link";
import Image from "next/image";

import { VitHeader } from "@/components/vit-header";
import { VitBreadcrumbs } from "@/components/vit-breadcrumbs";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { FaqItem } from "@/components/faq-item";
import { VitFooter } from "@/components/vit-footer";

export function Section4() {
  return (
    <main className="p-4 bg-black">
      <VitHeader />
      <VitBreadcrumbs label="Services" href="/services" />
      <section className="container flex flex-col items-center gap-8 pb-28 pt-20 sm:gap-10 border rounded-md border-border mb-8 bg-foreground">
        <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl tracking-tight text-background">
          And this is what we do
        </h1>
        <p className="max-w-lg text-center text-lg sm:text-xl text-muted">
          We offer a wide array of services designed to help your business grow.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Button size="lg" asChild variant="outline" className="cursor-pointer border-border">
            <Link href="#">Learn More</Link>
          </Button>
          <Button
            size="lg"
            asChild
            className="cursor-pointer border-border hover:bg-background hover:text-foreground"
          >
            <Link href="#">Get Started</Link>
          </Button>
        </div>
        <div className="relative sm:mt-8">
          <Image
            alt="SaaS Dashboard"
            src="/images/services-page-1.webp"
            width={1000}
            height={698}
            priority
            className="border border-border rounded-md"
          />
          <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
        </div>
      </section>
      <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7 border rounded-md border-border mb-8">
        <div className="flex flex-col gap-3">
          <span className="font-bold uppercase text-center text-accent">Faq</span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center text-foreground">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-lg text-muted-foreground text-balance max-w-lg text-center">
          For any other questions, please feel free to contact us.
        </p>
        <Accordion type="single" collapsible className="mt-6 w-full divide-y max-w-3xl">
          <FaqItem
            letter1="F"
            letter2="Q"
            answer="Collaboratively develop customized learning management solutions that optimize student engagement, establish student accountability and evaluate student performance."
            question="Learning Management Solutions"
          />
          <FaqItem
            letter1="R"
            letter2="W"
            answer="Reweb is built on top of popular technologies that most frontend developers are familiar with. You don't have to learn new mental models or frameworks. If you're familiar with HTML, React & Tailwind, building with Reweb will feel like writing code but visually."
            question="What is the learning curve for Reweb?"
          />
          <FaqItem
            letter1="I"
            letter2="H"
            answer="Yes, we care a lot about giving you code that you can easily mantain and customize. If you're familiar with Next.js and Tailwind, the code will be very familiar and you'll be able to customize it with no issues."
            question="Is the generated code high quality?"
          />
          <FaqItem
            letter1="D"
            letter2="Y"
            answer="Yes! We're planning to add a lot more sections and templates for landing pages & marketing websites. If you have specific requests, feel free to ask in our Discord."
            question="Do you plan to add more sections and templates?"
          />
          <FaqItem
            letter1="W"
            letter2="E"
            answer="Yes, the exported website will look exactly like you see in the editor and in the preview."
            question="Will the exported website look exactly like the preview?"
          />
        </Accordion>
      </section>
      <VitFooter/>
    </main>
  );
}
