"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export function SparklesPreview() {
  return (
    <div className=" max-w-full h-screen">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={1}
        maxSize={2}
        particleDensity={25}
        className="absolute inset-0"
        particleColor="#00bfff"
      />
    </div>
  );
}

