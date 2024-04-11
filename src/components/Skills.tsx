import { BiLogoReact } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BsBootstrap } from "react-icons/bs";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoFirebase } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { BiLogoNodejs } from "react-icons/bi";
import { HoverEffect } from "./aceternityui/card-hover-effect";
import { Meteors } from "./aceternityui/meteors";
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
];

export const Skills = () => {
  return (
    <>
      {/* <div className="flex flex-col bg-slate-400 h-auto mt-20 ">
        <h1 className="text-3xl  text-white text-center mb-5 ">Skill Set</h1>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 ms-14 gap-4 border-10 border-orange-600 p-4">
          <AiFillHtml5 className="h-14 w-14 mb-2" style={{ color: "white" }} />
          <BiLogoCss3 className="h-14 w-14 mb-2" style={{ color: "white" }} />
          <BiLogoReact className="h-14 w-14 mb-2" style={{ color: "white" }} />
          <BiLogoNodejs className="h-14 w-14 mb-2" style={{ color: "white" }} />
          <BiLogoJavascript
            className="h-14 w-14 mb-2"
            style={{ color: "white" }}
          />
          <BiLogoTypescript
            className="h-14 w-14 mb-2"
            style={{ color: "white" }}
          />
          <BiLogoTailwindCss
            className="h-14 w-14 mb-2"
            style={{ color: "white" }}
          />
          <BsBootstrap className="h-14 w-14 mb-2" style={{ color: "white" }} />
          <BiLogoFirebase
            className="h-14 w-14 mb-2"
            style={{ color: "white" }}
          />
          <BiLogoMongodb
            className="h-14 w-14 mb-2"
            style={{ color: "white" }}
          />
          <DiRedis className="h-14 w-14 mb-2" style={{ color: "white" }} />
          <SiExpress className="h-14 w-14 mb-2" style={{ color: "white" }} />
        </div>
        
      </div> */}

      <div className="w-full ">
        <div className="h-96 w-full flex relative ">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative w-full shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center text-4xl">
            <h5 className="text-2xl m-5 p-0 ">Skills</h5>
            <div className="flex grid gap-16 grid-cols-4 sm:grid-cols-6 ">
              <AiFillHtml5
                className="h-14 w-14 mb-2 hover:bg-orange-600 rounded-lg"
                style={{ color: "white" }}
              />
              <BiLogoCss3
                className="h-14 w-14 mb-2  hover:bg-blue-500 rounded-lg"
                style={{ color: "white" }}
              />
              <BiLogoReact
                className="h-14 w-14 mb-2 hover:bg-blue-700 rounded-lg"
                style={{ color: "white" }}
              />
              <BiLogoNodejs
                className="h-14 w-14 mb-2 hover:bg-green-600 rounded-lg"
                style={{ color: "white" }}
              />
              <BiLogoJavascript
                className="h-14 w-14 mb-2 hover:bg-yellow-400 rounded-lg"
                style={{ color: "white" }}
              />
              <BiLogoTypescript
                className="h-14 w-14 mb-2 hover:bg-blue-600 rounded-lg"
                style={{ color: "white" }}
              />
              <BiLogoTailwindCss
                className="h-14 w-14 mb-2 hover:bg-teal-500 rounded-lg"
                style={{ color: "white" }}
              />
              <BsBootstrap
                className="h-14 w-14 mb-2 hover:bg-purple-600 rounded-xl"
                style={{ color: "white" }}
              />
              <BiLogoFirebase
                className="h-14 w-14 mb-2 hover:bg-yellow-400 rounded-lg"
                style={{ color: "white" }}
              />
              <BiLogoMongodb
                className="h-14 w-14 mb-2 hover:bg-green-400 rounded-lg"
                style={{ color: "white" }}
              />
              <DiRedis className="h-14 w-14 mb-2 hover:bg-red-600 rounded-lg" style={{ color: "white" }} />
              <SiExpress
                className="h-14 w-14 mb-2 hover:bg-slate-500 rounded-lg"
                style={{ color: "white" }}
              />
            </div>
            {/* Meaty part - Meteor effect */}
            <Meteors number={100} />
          </div>
        </div>
      </div>
    </>
  );
};
