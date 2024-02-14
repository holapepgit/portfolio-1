import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import ContactMe from "./ContactMe";
import Timeline from "./Timeline";

const Home = () => {
  return (
    <div className="bg-primary">
      <Navbar />
      <Banner />
      <Timeline />
      <ContactMe />
    </div>
  );
};

export default Home;
