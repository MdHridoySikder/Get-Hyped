import { createBrowserRouter } from "react-router";
import RootsLayouts from "../layouts/RootsLayouts";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootsLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/",
        Component: Home,
      },
    ],
  },
]);
