import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contact from "./Contact";
import Projects from "./Projects";
import Timeline from "./Timeline";

const Home = () => {
  return (
    <div className="bg-primary">
      <Banner />
      <AboutMe />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
