"use client";
import { TypewriterEffect } from "../components/aceternityui/typewriter-effect";

export function About() {
  const words = [
    {
      text: "Hi,",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "I'm",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Anurag Das",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "and",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "make it happen.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      <span className="h-60 grid mt-8 ms-7 sm:grid-cols-3  justify-start">
        {/* <h1 className="text-yellow-600 text-3xl dark:text-neutral-200 text-base  mb-10">
          I code, write, and make it happen.
        </h1> */}
        <TypewriterEffect words={words} />
      </span>
    </>
  );
}