import { BackgroundBeams } from "./aceternityui/background-beams";
("use client");
("use client");
import {  Toaster } from "sonner";


export function Blogs() {

  return (
    <>
      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="m-10">
          <h1 className="relative text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Developer by day, blogger by night.
          </h1>
        </div>
        <BackgroundBeams />
        <div className="w-full flex justify-center ">
          <Toaster position="top-center" />
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              <a href="https://anuragdas2001.hashnode.dev/" target="_blank">👀</a>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
