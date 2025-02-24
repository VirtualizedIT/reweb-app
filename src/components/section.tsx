import Link from "next/link";
import { Bot, LayoutPanelLeft, Download, Sparkles, Frame, Globe, BrainCircuit } from "lucide-react";
import Image from "next/image";

import { VitHeader } from "@/components/vit-header";
import { Button } from "@/components/ui/button";
import { VitFeatureCard } from "@/components/vit-feature-card";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { CarouselFeatureCard } from "@/components/carousel-feature-card";
import { VitFooter } from "@/components/vit-footer";

export function Section() {
  return (
    <main className="bg-current p-4">
      <VitHeader />
      <section className="p-2">
        <div className="container flex flex-col items-center gap-8 rounded-lg border border-muted-foreground bg-white pb-10 pt-20 sm:gap-10">
          <div className="flex flex-col items-center gap-3">
            <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              We are a Digital Presence Management Agency&nbsp;
            </h1>
            <p className="max-w-lg text-center text-lg text-muted-foreground sm:text-xl">
              We focus on building long term relationships with clients looking for a more
              service-oriented solution.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button size="lg" asChild variant="outline" className="cursor-pointer border-border">
              <Link href="#">Learn More</Link>
            </Button>
            <Button size="lg" asChild className="cursor-pointer">
              <Link href="#">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="p-2">
        <div className="container flex flex-col items-center gap-6 rounded-lg border border-muted-foreground bg-current py-24 sm:gap-7">
          <div className="flex flex-col items-center gap-3">
            <span className="text-center font-bold uppercase text-primary">our core Services</span>
            <h2 className="text-balance text-center font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Build fast and stay flexible
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <p className="max-w-xl text-balance text-center text-lg text-muted-foreground">
              Reweb brings the best of two worlds together: the speed of development of no-code
              tools, and the flexibility of code.
            </p>
          </div>
          <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            <VitFeatureCard
              icon={Bot}
              title="Artificial Intelligence"
              letter1="A"
              letter2="I"
              description="AI  Integration and Automation"
            />
            <VitFeatureCard
              icon={LayoutPanelLeft}
              title="Customer Relationship "
              letter1="C"
              letter2="R"
              description="Customer Relationship Management Systems"
            />
            <VitFeatureCard
              icon={Download}
              title="Digital Presence"
              letter1="D"
              letter2="P"
              description="Digital Marketing Solutions"
            />
            <VitFeatureCard
              icon={Sparkles}
              title="Learning Management"
              letter1="L"
              letter2="M"
              description="Learning Management Solutions"
            />
            <VitFeatureCard
              icon={Frame}
              title="Social Media"
              letter1="S"
              letter2="M"
              description="Social Media and Search"
            />
            <VitFeatureCard
              icon={Globe}
              title="Web Design"
              letter1="W"
              letter2="D"
              description="Web Design"
            />
          </div>
        </div>
      </section>
      <section className="p-2">
        <div className="container rounded-lg border border-muted-foreground bg-primary">
          <div className="flex flex-col items-center gap-6 px-6 py-24 sm:gap-10">
            <Image alt="Image" src="/images/Agency-Artboard-1.svg" width={500} height={500} />
            <h2 className="max-w-xl text-balance text-center font-heading text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl sm:leading-tight">
              Customer Relationship Management Platform
            </h2>
            <p className="max-w-xl text-center text-lg text-primary-foreground/80">
              Our Platform Includes Learning Management - Community Hosting - Client Management and
              Engagement - Marketing Management including Email, Text, and Social - Workflow
              Automation - Payment Processing and so much more
            </p>
            <Button size="lg" asChild variant="outline" className="cursor-pointer border-border">
              <Link href="#">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="p-2">
        <div className="container flex flex-col items-center gap-6 rounded-lg border border-muted-foreground bg-current py-24 sm:gap-7">
          <div className="flex flex-col items-center gap-3">
            <span className="text-center font-bold uppercase text-primary">PROCESS</span>
            <h2 className="flex flex-col items-center text-balance text-center font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Our process for delivering success
            </h2>
            <p className="flex max-w-xl flex-col items-center text-balance text-center text-lg text-muted-foreground">
              VirtualizedIT brings our knowledge of today&apos;s most innovative platforms to tailor
              custom solutions for our clients.
            </p>
          </div>
          <Carousel
            opts={{ loop: true, align: "start" }}
            className="mt-6 block w-full px-4 xl:px-0"
          >
            <CarouselContent className="flex flex-col pb-4 lg:flex-row">
              <CarouselFeatureCard
                icon={Download}
                title="Understand"
                description="Everything begins with understanding our client and their needs."
              />
              <CarouselFeatureCard
                icon={BrainCircuit}
                title="Strategize"
                description="Together we will develop a strategy to over deliver solutions for our clients."
              />
              <CarouselFeatureCard
                icon={Globe}
                title="Implement"
                description="This is where our systems and careful planning make it happen."
              />
            </CarouselContent>
          </Carousel>
        </div>
      </section>
      <section className="p-2">
        <div className="container rounded-lg border border-muted-foreground bg-primary">
          <div className="flex flex-col items-center gap-6 px-6 py-24 sm:gap-10">
            <Image
              alt="VirtualizedIT Learning Logo"
              src="/images/Learning-Artboard-1.svg"
              width={350}
              height={180}
            />
            <h2 className="max-w-xl text-balance text-center font-heading text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl sm:leading-tight">
              Crafting Seamless <br /> E-Learning Experiences
            </h2>
            <p className="max-w-xl text-center text-lg text-primary-foreground/80">
              Designing and Implementing fully integrated E-Learning management solutions for
              passion-driven educators.
            </p>
            <Button size="lg" asChild variant="outline" className="cursor-pointer border-border">
              <Link href="#">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      <VitFooter className="p-2" />
    </main>
  );
}
