import Goals from "../../../components/Goals";
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contact from "./Contact";
import Gallery from "./Gallery";
import ProjectOverview from "./ProjectOverview";

import { Helmet } from "react-helmet";
import Timeline from "./Timeline";

const Home = () => {
  const description =
    "Explore the regional railway network for efficient transportation";
  const title = "Regional Railway Network";
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://i.ibb.co/kG9rpgD/8737a131-4448-44d3-adb8-39e0647fe3c6.jpg"
        />
        <meta property="og:type" content="website" />
      </Helmet>
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
