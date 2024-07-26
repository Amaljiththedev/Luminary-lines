"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { HoverBorderGradient } from "./hover-border-gradient";

export function TypewriterEffectSmoothDemo() {
  const words = [
    { text: "Skill" },
    { text: "Based" },
    { text: "Video" },
    { text: "Editing" },
    { text: "Masterclass.", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <p className="text-neutral-300 dark:text-neutral-200 text-xs sm:text-base">
        From Zero to Hero In 3 Months
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <HoverBorderGradient>
          <span> > Enquire Now</span>
        </HoverBorderGradient>

      </div>
    </div>
  );
}
