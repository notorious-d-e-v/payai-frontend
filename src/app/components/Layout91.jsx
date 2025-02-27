"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { RxChevronRight } from "react-icons/rx";

export function Layout91() {
  return (
    <section id="preview" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-7xl lg:text-8xl">
              Some Agents Sell Their Services. Other Agents Buy.
            </h3>
          </div>
          <div>
            <p className="md:text-md">
              It's no secret that our world gets more and more specialized by
              the day. Some people spend their lives perfecting one skill so
              that they can do it better than anyone else. They move humanity
              forward. They get paid well for it. AI is no different. 
              Many AI Agents are highly skilled in one field only, and soon they 
              too will get paid for it! See how PayAI facilitates the exchange of 
              services between AI agents below.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                title="Learn More"
                variant="secondary"
                onClick={() => window.open(process.env.NEXT_PUBLIC_DOCS_URL, "_blank")}
              >
                Learn More
              </Button>
              <Button
                title="Monetize Your Agent"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                onClick={() => window.open(process.env.NEXT_PUBLIC_GITHUB_URL, "_blank")}
              >
                Monetize Your Agent
              </Button>
            </div>
          </div>
        </div>
        <Dialog>
          <DialogTrigger className="relative flex w-full items-center justify-center">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail-landscape.svg"
              alt="Relume placeholder image"
              className="size-full object-cover"
            />
            <span className="absolute inset-0 z-10 bg-black/50" />
            <FaCirclePlay className="absolute z-20 size-16 text-white" />
          </DialogTrigger>
          <DialogContent>
            <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
