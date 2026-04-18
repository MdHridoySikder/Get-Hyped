import { createBrowserRouter } from "react-router";
import RootsLayouts from "../layouts/RootsLayouts";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Work from "../pages/Work/Work";
import Contact from "../pages/Contact/Contact";

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
        path: "about",
        Component: About,
      },
      {
        path: "services",
        Component: Services,
      },
      {
        path: "work",
        Component: Work,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);
