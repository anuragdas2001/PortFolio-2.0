import { ProjectsItem } from "./ProjectItems";
import { BackgroundGradient } from "./aceternityui/background-gradient";

export const Projects = () => {
  const projects = [
    {
      name: "MindSpace",
      url: "https://mindspaceuniverse.netlify.app/",
      img: "https://mindspaceuniverse.netlify.app/StressIcon_CodeBlaze.png",
      repo: "https://github.com/anuragdas2001/MindSpace",
      desc: "An Application to cure mental illness, depression, anxiety and stress",
    },
    {
      name: "Brunel",
      url: "Coming Soon",
      img: "Coming Soon",
      repo: "https://github.com/anuragdas2001/Brunel",
      desc: "Promotes staff augmentation services, with a focus on unicorn companies, prioritizing exceptional user experience.",
    },
    {
      name: "Credit Slider",
      url: "Coming Soon",
      img: "Coming Soon",
      repo: "https://github.com/anuragdas2001/Smartify",
      desc: "Developed a React component featuring top-up functionality and a customizable credit slider, as per the Figma design.",
    },
    {
      name: "VirtuCart",
      url: "https://virtucart.netlify.app/",
      img: "",
      repo: "https://github.com/anuragdas2001/VirtuCart",
      desc: "A small-scale E-commerce application which support checkout ",
    },
    {
      name: "RapidRetail",
      url: "https://rapid-retail.netlify.app/",
      img: "",
      repo: "https://github.com/anuragdas2001/RapidRetail",
      desc: "An Item list application which shows your favourite items",
    },
    {
      name: "SpendSage",
      url: "https://spend-sage.netlify.app/",
      img: "",
      repo: "https://github.com/anuragdas2001/SpendSage",
      desc: "A robust application to track and control over your expenses",
    },
    {
      name: "ReelVerse",
      url: "https://reel-verse.netlify.app/",
      img: "",
      repo: "https://github.com/anuragdas2001/ReelVerse",
      desc: "An application for rating your favourite movies and web shows",
    },
    {
      name: "Coming Soon",
      url: "Coming Soon",
      img: "Coming Soon",
      repo: "Coming Soon",
      desc: "Stay tuned....  Something is cooking.... Can't tell much about it 🤨",
    },
    {
      name: "Coming Soon",
      url: "Coming Soon",
      img: "Coming Soon",
      repo: "Coming Soon",
      desc: "Stay tuned....  Something is cooking.... Can't tell much about it 🤨",
    },
  ];
  console.log(projects);
  console.log(typeof projects);
  return (
    <>
      <div className="bg-black grid grid-cols-1  h-auto my-10 text-white text-3xl text-center">
        <h1>Projects</h1>

        <div className="flex grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3  border-2 border-orange-500 m-5 rounded-md ">
          {projects.map((proj, key) => (
            <div className="m-10 rounded-md">
              <BackgroundGradient className="rounded-[34px] w-auto  p-2 sm:p-10 bg-white dark:bg-zinc-900">
                <ProjectsItem
                  key={key}
                  name={proj.name}
                  url={proj.url}
                  img={proj.img}
                  repo={proj.repo}
                  desc={proj.desc}
                />
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
