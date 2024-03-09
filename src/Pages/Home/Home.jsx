import Goals from "../../../components/Goals";
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contact from "./Contact";
import Gallery from "./Gallery";
import ProjectOverview from "./ProjectOverview";
import Timeline from "./Timeline";
import LazyLoad from "react-lazy-load";
const Home = () => {
  return (
    <>
      <div className="">
        <Banner />
        <LazyLoad>
          <AboutMe />
        </LazyLoad>
        <LazyLoad>
          <Timeline />
        </LazyLoad>
        <LazyLoad>
          <ProjectOverview />
        </LazyLoad>
        <LazyLoad>
          <Gallery />
        </LazyLoad>
        <LazyLoad>
          <Goals />
        </LazyLoad>
        <LazyLoad>
          <Contact />
        </LazyLoad>
      </div>
    </>
  );
};

export default Home;
