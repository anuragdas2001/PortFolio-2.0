export const Navbar = () => {
  return (
    <>
      <div className="h-16 flex justify-center items-center sm:grid-cols-1 bg-yellow-400">
        <ul className="flex gap-2 ">
          <li className="">
            <a
              href=""
              className="btn btn-ghost rounded-lg p-2 hover:bg-slate-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="btn btn-ghost rounded-lg p-2 hover:bg-slate-500"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href=""
              className="btn btn-ghost rounded-lg p-2 hover:bg-slate-500"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href=""
              className="btn btn-ghost rounded-lg p-2 hover:bg-slate-500"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href=""
              className="btn btn-ghost rounded-lg p-2 hover:bg-slate-500"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
