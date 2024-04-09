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
export const Skills = () => {
  return (
    <>
      <div className="flex flex-col bg-sky-600 h-auto mt-20 ">
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
      </div>
    </>
  );
};
