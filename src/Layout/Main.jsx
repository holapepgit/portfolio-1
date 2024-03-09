import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-141px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Helmet>
        <meta property="og:title" content="Your Website Title" />
        <meta
          property="og:description"
          content="Description of your website."
        />
        <meta
          property="og:image"
          content="URL to the image you want to display"
        />
        <meta property="og:url" content="URL of the current page" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Your Website Name" />
      </Helmet>
    </div>
  );
};

export default Main;
