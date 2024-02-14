import AboutMe from "./AboutMe";
import Banner from "./Banner";
import ContactMe from "./ContactMe";
import Timeline from "./Timeline";

const Home = () => {
  return (
    <div className="bg-primary">
      <Banner />
      <AboutMe/>
      <Timeline />
      <ContactMe />
    </div>
  );
};

export default Home;
