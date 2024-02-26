import AboutMe from "./AboutMe";
import Banner from "./Banner";
import ContactMe from "./ContactMe";
import Projects from "./Projects";
import Timeline from "./Timeline";

const Home = () => {
  return (
    <div className="bg-primary">
      <Banner />
      <AboutMe />
      <Timeline />
      <Projects />
      <div className="pt-20">
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
