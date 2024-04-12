import { ProjectsItem } from "./ProjectItems";
import { BackgroundGradient } from "./aceternityui/background-gradient";

export const Projects = () => {
  const projects = [
    { name: "MindSpace", url: "https://mindspaceuniverse.netlify.app/", img: "https://mindspaceuniverse.netlify.app/StressIcon_CodeBlaze.png" },
    { name: "MindSpace", url: "", img: "" },
    { name: "MindSpace", url: "", img: "" },
    { name: "MindSpace", url: "", img: "" },
    { name: "MindSpace", url: "", img: "" },
    { name: "MindSpace", url: "", img: "" },
  ];
  console.log(projects);
  console.log(typeof projects);
  return (
    <>
      <div className="bg-black grid grid-cols-1  h-auto my-10 text-white text-3xl text-center">
        <h1>Projects</h1>

        <div className="flex grid grid-cols-1 sm:grid-cols-1 md:grid-cols- lg:grid-cols-2 xl:grid-cols-3  border-2 border-orange-500 m-10 rounded-md ">
          {projects.map((proj, key) => (
            <div className="m-10 rounded-md">
              <BackgroundGradient className="rounded-[22px] w-auto p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <ProjectsItem key={key} name={proj.name} url={proj.url} img={proj.img} />
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
