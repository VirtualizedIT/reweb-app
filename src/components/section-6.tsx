import Link from "next/link";
import { GraduationCap, ServerCog, LayoutTemplate } from "lucide-react";

import { VitHeader } from "@/components/vit-header";
import { VitBreadcrumbs } from "@/components/vit-breadcrumbs";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/feature-card";
import { Accordion } from "@/components/ui/accordion";
import { FaqItem2 } from "@/components/faq-item2";
import { ArticleCard } from "@/components/article-card";
import { VitFooter } from "@/components/vit-footer";

export function Section6() {
  return (
    <main className="p-4 bg-black">
      <VitHeader />
      <VitBreadcrumbs label="Learning" href="/learning" />
      <section className="container flex flex-col items-center gap-8 pb-28 pt-20 sm:gap-10 border rounded-md mb-8 border-border bg-foreground">
        <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl tracking-tight text-background">
          Let us build a complete online coaching system for you!
        </h1>
        <p className="max-w-lg text-center text-lg sm:text-xl text-muted">
          You got into coaching to help others, not learn software. We will develop an end-to-end
          system to create, host, and promote your coaching business.
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
      </section>
      <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7 border rounded-md mb-8 border-border bg-muted">
        <div className="flex flex-col gap-3">
          <span className="font-bold uppercase text-center text-accent">Features</span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center text-foreground">
            WE ARE A FULL-SERVICE COACHING BUSINESS CONSULTANT!
          </h2>
        </div>
        <p className="text-lg text-muted-foreground text-balance max-w-xl text-center">
          It is our mission to help Creators and Educators grow by learning to better integrate and
          utilize today&apos;s wide array of business technology solutions.
        </p>
        <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={GraduationCap}
            title="Why Coaches Need a Coaching Consultant?"
            description="We can get your business to market quickly and engage your clients with a proven system. We understand the coaching sector. We can help clients eliminate unnecessary costs and distractions while focusing on proven methods."
          />
          <FeatureCard
            icon={ServerCog}
            title="What Services are Offered by Our Group?"
            description="We offer one primary service which is a customer engagement system designed specifically for the coaching sector. We offer implementation, training and support packages in support of our platform. We do offer a series of ancillary services designed to assist our clients prepare their business for our onboarding process"
          />
          <FeatureCard
            icon={LayoutTemplate}
            title="Agency Platform"
            description="We have already done the work to develop the platform to run your coaching business with. Optionally, we offer the system in the form of Software as a Service for client's who would rather build and manage their own system."
          />
        </div>
      </section>
      <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7 border rounded-md mb-8 border-border">
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
          <FaqItem2
            answer="Reweb is focused on developers and it's built on top of Next.js, Tailwind CSS and shadcn/ui, the most popular tech stack for building landing pages in the React ecosystem. This means that you can export your Reweb website to a Next.js project and continue building your app with the same tech stack."
            question="How is Reweb different than tools like Framer or Webflow?"
            className="text-background"
          />
          <FaqItem2
            answer="Reweb is built on top of popular technologies that most frontend developers are familiar with. You don't have to learn new mental models or frameworks. If you're familiar with HTML, React & Tailwind, building with Reweb will feel like writing code but visually."
            question="What is the learning curve for Reweb?"
            className="text-background"
          />
          <FaqItem2
            answer="Yes, we care a lot about giving you code that you can easily mantain and customize. If you're familiar with Next.js and Tailwind, the code will be very familiar and you'll be able to customize it with no issues."
            question="Is the generated code high quality?"
            className="text-background"
          />
          <FaqItem2
            answer="Yes! We're planning to add a lot more sections and templates for landing pages & marketing websites. If you have specific requests, feel free to ask in our Discord."
            question="Do you plan to add more sections and templates?"
            className="text-background"
          />
          <FaqItem2
            answer="Yes, the exported website will look exactly like you see in the editor and in the preview."
            question="Will the exported website look exactly like the preview?"
            className="text-background"
          />
        </Accordion>
      </section>
      <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7 border rounded-md mb-8 border-border bg-foreground">
        <div className="flex flex-col gap-3">
          <span className="font-bold uppercase text-center text-accent">Training</span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center text-background">
            Our Courses
          </h2>
        </div>
        <p className="text-lg text-balance max-w-2xl text-center text-muted">
          Explore our series of educational programs
        </p>
        <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <ArticleCard
            date="Jul 16, 2024"
            image="/images/article-1.avif"
            title="How to build a beautiful landing page in minutes"
            category="Coding"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit."
          />
          <ArticleCard
            date="May 10, 2024"
            image="/images/article-2.avif"
            title="How to generate the perfect theme for your website with AI"
            category="Design"
            description="Mauris tincidunt porttitor risus, et posuere erat malesuada eu. Praesent volutpat ut ipsum ac congue."
          />
          <ArticleCard
            date="Apr 27, 2024"
            image="/images/article-3.avif"
            title="How to build at the speed of no-code without customization limits"
            category="Coding"
            description="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut."
          />
          <ArticleCard
            date="Apr 27, 2024"
            image="/images/article-3.avif"
            title="How to build at the speed of no-code without customization limits"
            category="Coding"
            description="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut."
          />
          <ArticleCard
            date="Apr 27, 2024"
            image="/images/article-3.avif"
            title="How to build at the speed of no-code without customization limits"
            category="Coding"
            description="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut."
          />
          <ArticleCard
            date="Apr 27, 2024"
            image="/images/article-3.avif"
            title="How to build at the speed of no-code without customization limits"
            category="Coding"
            description="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut."
          />
          <ArticleCard
            date="Apr 27, 2024"
            image="/images/article-3.avif"
            title="How to build at the speed of no-code without customization limits"
            category="Coding"
            description="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut."
          />
          <ArticleCard
            date="Apr 27, 2024"
            image="/images/article-3.avif"
            title="How to build at the speed of no-code without customization limits"
            category="Coding"
            description="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut."
          />
          <ArticleCard
            date="Apr 27, 2024"
            image="/images/article-3.avif"
            title="How to build at the speed of no-code without customization limits"
            category="Coding"
            description="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut."
          />
        </div>
      </section>
      <section className="container bg-primary border border-border rounded mb-8">
        <div className="flex flex-col items-center gap-6 rounded-xl px-6 py-24 sm:gap-10">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance max-w-xl sm:leading-tight text-center text-primary-foreground">
            THERE&apos;S ALWAYS ROOM FOR GROWTH!
          </h2>
          <p className="max-w-xl text-lg text-primary-foreground/80 text-center">
            Let us help you succeed as a coaching entrepreneur!
          </p>
          <Button
            size="lg"
            asChild
            variant="outline"
            className="cursor-pointer border-border hover:bg-foreground hover:text-background"
          >
            <Link href="#">Contact Us</Link>
          </Button>
        </div>
      </section>
      <VitFooter/>
    </main>
  );
}
