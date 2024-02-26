import React from "react";
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
        path: "/banner",
        element: <Banner />,
      },
      {
        path: "/about",
        element: <ProjectOverview />,
      },
      {
        path: "/details",
        element: <ProjectDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
