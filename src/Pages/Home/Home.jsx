import AboutMe from "./AboutMe";
import Banner from "./Banner";
import ContactMe from "./ContactMe";
import Timeline from "./Timeline";

const Home = () => {
  return (
    <div>
          <Banner />
          <AboutMe/>
      <Timeline />
      <ContactMe />
    </div>
  );
};

export default Home;
