import { HoverEffect } from "./aceternityui/card-hover-effect";

export const cp = [
  {
    title: "Leetcode",
    description: "Top 30%",
    link: "https://leetcode.com/anuragdas12921/",
  },
  {
    title: "Codeforces",
    description: "Pupil , 1283 Rating",
    link: "https://codeforces.com/profile/Anurag_Das",
  },
  {
    title: "Codechef",
    description: "2⭐ , 1457 Rating",
    link: "https://www.codechef.com/users/anuragdas12921",
  },
];
export const Achievements = () => {
  return (
    <>
      <h1 className="text-center text-3xl">Achievements</h1>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={cp} />
      </div>
    </>
  );
};
