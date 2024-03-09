import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Background from "../Pages/Background";
import ContactUs from "../Pages/ContactUs";
import Banner from "../Pages/Home/Banner";
import ProjectOverview from "../Pages/Home/ProjectOverview";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import SingleProject from "../Pages/SingleProject";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/background",
        element: <Background />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/banner",
        element: <Banner />,
      },
      {
        path: "/about",
        element: <ProjectOverview />,
      },
      {
        path: "/projects",
        element: <ProjectDetails />,
      },
      {
        path: "/project/:id",
        element: <SingleProject />,
      },
    ],
  },
]);
