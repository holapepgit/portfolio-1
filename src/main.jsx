import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import { Toaster } from "sonner";
import "./styles/global.css";
import { router } from "./routes/router";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <StrictMode>
      <RouterProvider router={router} />
      <Toaster />
    </StrictMode>
  </>
);
