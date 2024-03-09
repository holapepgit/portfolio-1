import Goals from "../../../components/Goals";
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contact from "./Contact";
import Gallery from "./Gallery";
import ProjectOverview from "./ProjectOverview";
import Timeline from "./Timeline";
const Home = () => {
  return (
    <>
      <div className="">
        <Banner />

        <AboutMe />

        <Timeline />

        <ProjectOverview />

        <Gallery />

        <Goals />

        <Contact />
      </div>
    </>
  );
};

export default Home;
