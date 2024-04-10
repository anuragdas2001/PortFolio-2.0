import { motion } from "framer-motion";
import { LampContainer } from "./aceternityui/lamp";

export const AboutMe = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center  ">
        <div className="text-2xl sm:text-3xl md:text-4xl text-center mb-0  ">
          <h1 className="">Allow me to shed some light on myself 😉</h1>
        </div>
        <div className="mt-0  w-full ">
          <LampContainer className="w-full mt-12  ">
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className=" bg-gradient-to-br from-slate-400 to-slate-50 py-4 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-2xl lg:text-4xl"
            >
              <div className="mt-0">
                <p className="text-sm sm:text-4xl">
                  Hello, I'm Anurag Das, a final year student at Sur Institute
                  of Technology in India, specializing in Computer Science &
                  Engineering. Alongside my studies, I'm a self-taught software
                  developer passionate about coding and problem-solving. Outside
                  of tech, I enjoy photography, home workouts, and exploring
                  diverse music genres. On weekends, I unwind with movies, web
                  series, and anime, all while juggling side projects to fuel my
                  curiosity and growth. Although I'm not a great chef, I can
                  whip up some meals for myself.
                </p>
              </div>
            </motion.h1>
          </LampContainer>
        </div>
      </div>
    </>
  );
};
