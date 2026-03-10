"use client";

import React from "react";
import Image from "next/image";
import { IconButton } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/outline";


export function VideoIntro() {
  return (
    <div className="p-8">
      <div className="w-full container px-5 overflow-hidden rounded-xl relative mx-auto max-w-6xl ">
        <div className="bg-black/25 z-10 absolute w-full h-full inset-0 rounded-xl" />
        <video
          className="w-full h-[500px] object-cover object-top scale-110 rounded-xl"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Aboutvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10">
          <IconButton color="white" className="rounded-full" size="lg">
            <PlayIcon className="h-6 w-6" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default VideoIntro;