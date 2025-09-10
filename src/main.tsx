import { router } from "App";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "styles/styles.scss";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
