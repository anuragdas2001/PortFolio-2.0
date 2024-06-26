"use client";
import { TypewriterEffect } from "./aceternityui/typewriter-effect";

export function Profile() {
  const words = [
    {
      text: "I",
      className: "text-blue-500 text-3xl dark:text-blue-500",
    },
    {
      text: "CODE,",
      className: "text-blue-500 text-3xl dark:text-blue-500",
    },
    {
      text: "I",
      className: "text-blue-500 text-3xl  dark:text-blue-500",
    },
    {
      text: "WRITE,",
      className: "text-blue-500 text-3xl dark:text-blue-500",
    },
    {
      text: "AND",
      className: "text-blue-500 text-3xl dark:text-blue-500",
    },{
      text: "MAKE",
      className: "text-blue-500 text-3xl dark:text-blue-500",
    },{
      text: "IT",
      className: "text-blue-500 text-3xl dark:text-blue-500",
    },{
      text: "HAPPEN",
      className: "text-blue-500 text-3xl dark:text-blue-500",
    },
  ];
  return (
    <>
      <span className="h-96 w-auto text-xs sm:text-sm md:text-3xl lg:text-5xl grid mt-8 mb-0 ms-7  sm:grid-cols-4 justify-start">
        <TypewriterEffect words={words} />
      </span>
    </>
  );
}