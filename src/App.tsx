import { Navbar } from "./components/Navbar";
import { Test } from "./components/test";
import { Avatar } from "./components/Avatar";
import { Profile } from "./components/Profile";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { ContactUs } from "./components/ContactUs";
import { Blogs } from "./components/Blogs";
function App() {
  return (
    <>
      {/* <h1 className="">Hello App</h1> */}
      <Navbar />
      <Avatar />
      <Profile />

      <Skills />
      <Projects />
      <AboutMe />
      <Blogs/>
      <ContactUs/>
      {/* <Test /> */}
    </>
  );
}

export default App;
