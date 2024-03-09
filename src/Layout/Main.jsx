import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-141px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
