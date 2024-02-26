import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contact from "./Contact";
import ProjectOverview from "./ProjectOverview";
import Projects from "./Projects";
import Timeline from "./Timeline";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <AboutMe />
      <Timeline />
      <ProjectOverview />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
