import { Navbar } from "./components/Navbar";
import { Test } from "./components/test";
import { Avatar } from "./components/Avatar";
import { Profile } from "./components/Profile";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { ContactUs } from "./components/ContactUs";
import { Blogs } from "./components/Blogs";
import { Certifications } from "./components/Certifications";
import { Achievements } from "./components/Achievements";
function App() {
  return (
    <>
      <Navbar />
      <Avatar />
      <Profile />
      <Skills />
      <Projects />
      <AboutMe />
      <Certifications/>
      <Achievements/>
      <Blogs />
      <ContactUs />
    </>
  );
}

export default App;
