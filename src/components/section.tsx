import Link from "next/link";
import Image from "next/image";
import { VitHeader } from "@/components/vit-header";
import { VitBreadcrumbs } from "@/components/vit-breadcrumbs";
import { Button } from "@/components/ui/button";
import { VitFeatureCard } from "@/components/vit-feature-card";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { CarouselFeatureCard } from "@/components/carousel-feature-card";
import { VitFooter } from "@/components/vit-footer";
import { Bot, LayoutPanelLeft, Download, Sparkles, Frame, Globe, BrainCircuit } from "lucide-react";

export function Section() {
  return (
    <main className="p-4 bg-black">
      <VitHeader />
      <VitBreadcrumbs label="Home" href="/" />
      <section className="mb-8">
        <div className="flex flex-col items-center container gap-8 sm:gap-10 pt-20 pb-10 border rounded-md border-border bg-foreground">
          <div className="flex flex-col gap-3 items-center">
            <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl tracking-tight text-background">
              We are a Digital Presence Management Agency&nbsp;
            </h1>
            <p className="max-w-lg text-center text-lg sm:text-xl text-muted">
              We focus on building long term relationships with clients looking for a more
              service-oriented solution.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button size="lg" asChild variant="outline" className="cursor-pointer border-border">
              <Link href="#">Learn More</Link>
            </Button>
            <Button size="lg" asChild className="cursor-pointer border-border hover:bg-background">
              <Link href="#">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="p-2 mb-8">
        <div className="container flex flex-col items-center gap-6 py-24 sm:gap-7 border rounded-md bg-background border-border">
          <div className="flex flex-col gap-3 items-center">
            <span className="font-bold uppercase text-center text-accent">our core Services</span>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center text-foreground">
              Build fast and stay flexible
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg text-muted-foreground text-balance max-w-xl text-center">
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
      <section className="p-2 mb-8">
        <div className="container bg-primary border rounded-md border-border">
          <div className="flex flex-col items-center gap-6 px-6 py-24 sm:gap-10">
            <Image alt="Image" src="/images/Agency-Artboard-1.svg" width={500} height={500} />
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance max-w-xl sm:leading-tight text-center text-primary-foreground">
              Customer Relationship Management Platform
            </h2>
            <p className="max-w-xl text-lg text-center text-accent-foreground/80">
              Our Platform Includes Learning Management - Community Hosting - Client Management and
              Engagement - Marketing Management including Email, Text, and Social - Workflow
              Automation - Payment Processing and so much more
            </p>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="cursor-pointer border-border hover:bg-foreground hover:text-background"
            >
              <Link href="#">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="p-2 mb-8">
        <div className="container flex flex-col items-center gap-6 py-24 sm:gap-7 border rounded-md border-border bg-muted">
          <div className="flex flex-col gap-3 items-center">
            <span className="font-bold uppercase text-center text-accent">PROCESS</span>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center flex items-center flex-col text-foreground">
              Our process for delivering success
            </h2>
            <p className="text-lg text-muted-foreground text-balance max-w-xl text-center flex flex-col items-center">
              VirtualizedIT brings our knowledge of today&apos;s most innovative platforms to tailor
              custom solutions for our clients.
            </p>
          </div>
          <Carousel
            opts={{ loop: true, align: "start" }}
            className="mt-6 w-full px-4 xl:px-0 block"
          >
            <CarouselContent className="pb-4 flex flex-col lg:flex-row">
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
      <section className="p-2 mb-8">
        <div className="container border bg-primary rounded-md border-border">
          <div className="flex flex-col items-center gap-6 px-6 py-24 sm:gap-10">
            <Image
              alt="VirtualizedIT Learning Logo"
              src="/images/Learning-Artboard-1.svg"
              width={350}
              height={180}
            />
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance max-w-xl sm:leading-tight text-center text-primary-foreground">
              Crafting Seamless <br/> E-Learning Experiences
            </h2>
            <p className="max-w-xl text-lg text-primary-foreground/80 text-center">
              Designing and Implementing fully integrated E-Learning management solutions for
              passion-driven educators.
            </p>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="cursor-pointer border-border hover:bg-foreground hover:text-background"
            >
              <Link href="#">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      <VitFooter
        className="p-2"
      />
    </main>
  );
}
