import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface VitFooterProps {
  facebookLink: string;
  instagramLink: string;
  xLink: string;
  linkedInLink: string;
  youTubeLink: string;
  className?: string;
}

export function VitFooter({
  facebookLink,
  instagramLink,
  xLink,
  linkedInLink,
  youTubeLink,
  className,
}: VitFooterProps) {
  return (
    <footer className={cn("p-2", className)}>
      <div className="container block border rounded-md bg-foreground border-border">
        <div className="flex flex-col mb-2.5 items-center sm:items-start">
          <p className="font-medium text-[clamp(1.5rem,4vw,2rem)] text-accent">
            Let&apos;s get to know each other
          </p>
          <Link href="#" className="font-medium text-[clamp(1.5rem,4vw,2rem)] text-background">
            hello@virtualizedit.com
          </Link>
        </div>
        <div className="grid p-2 grid-cols-1 grid-rows-3 gap-2 sm:grid-cols-3 sm:grid-rows-1">
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-sm md:mb-2 sm:mb-1 text-background">Social Media</p>
            <div className="flex gap-2.5">
              <a href={facebookLink} className="text-background hover:text-accent">
                <svg width={100} height={100} viewBox="0 0 24 24" className="size-6">
                  <path
                    d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href={instagramLink} className="text-background hover:text-accent">
                <svg width={100} height={100} viewBox="0 0 24 24" className="size-6">
                  <path
                    d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a className="text-background hover:text-accent">
                <svg width={100} height={100} viewBox="0 0 24 24" className="size-6">
                  <path
                    d="M10.053,7.988l5.631,8.024h-1.497L8.566,7.988H10.053z M21,6v12	c0,1.657-1.343,3-3,3H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12C19.657,3,21,4.343,21,6z M17.538,17l-4.186-5.99L16.774,7	h-1.311l-2.704,3.16L10.552,7H6.702l3.941,5.633L6.906,17h1.333l3.001-3.516L13.698,17H17.538z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a className="text-background hover:text-accent">
                <svg width={100} height={100} viewBox="0 0 24 24" className="size-6">
                  <path
                    d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a className="text-background hover:text-accent">
                <svg
                  width={100}
                  height={100}
                  viewBox="0 0 30 20
"
                  className="size-6"
                >
                  <path
                    d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
                    fill="currentColor"
                    className="text-foreground"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-sm sm:mb-2 text-background">Phone</p>
            <p className="text-left text-base font-medium text-background">1 (727) 353-8080</p>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-sm text-left sm:mb-2 text-background">Email Sales</p>
            <Link
              href="mailto:sales@virtualizedit.com"
              className="text-base font-medium text-left text-background hover:text-accent"
            >
              sales@virtualizedit.com
            </Link>
          </div>
        </div>
        <Separator orientation="horizontal" className="my-4 text-border" />
        <div className="grid gap-0.5 mt-4 p-[8px] sm:grid-cols-2">
          <div>
            <p className="text-center text-xs sm:text-left text-background">
              © 2025 VirtualizedIT, LLC All rights reserved.
            </p>
          </div>
          <div className="grid-cols-5 hidden sm:grid">
            <Link
              href="/terms"
              className="text-xs sm:text-center text-background hover:text-accent"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-xs sm:text-center text-background hover:text-accent"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie"
              className="text-xs sm:text-center text-background hover:text-accent"
            >
              Cookie Policy&lt;br&gt;
            </Link>
            <Link
              href="/disclaimer"
              className="text-xs sm:text-center text-background hover:text-accent"
            >
              Disclaimer
            </Link>
            <Link href="/eula" className="text-xs sm:text-center text-background hover:text-accent">
              EULA&lt;br&gt;&lt;br&gt;
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
