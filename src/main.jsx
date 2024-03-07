import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import { Toaster } from "sonner";
import "./styles/global.css";
import Banner from "./Pages/Home/Banner";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import ProjectOverview from "./Pages/Home/ProjectOverview";

import SingleProject from "./Pages/SingleProject";
import Background from "./Pages/Background";
import ContactUs from "./Pages/ContactUs";

const router = createBrowserRouter([
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>
);
