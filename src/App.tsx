import { Navbar } from "./components/Navbar";
import { Test } from "./components/test";
import { Avatar } from "./components/Avatar";
import { About } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
function App() {
  return (
    <>
      {/* <h1 className="">Hello App</h1> */}
      <Navbar />
      <Avatar />
      <About />

      <Skills />
      <Projects/>
      <Test />
    </>
  );
}

export default App;
