import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import Main from "./components/Main/Main";
import Around from "./components/Around/Around";
import Gallery from "./components/Gallery/Gallery";
import UserGallery from "./components/Gallery/UserGallery/UserGallery";
import DesignerGallery from "./components/Gallery/DesignerGallery/DesignerGallery";
import Login from "./components/Login/Login";
import PetRegistration from "./components/PetRegistration/PetRegistration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "/around",
        element: <Around />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/petreg",
        element: <PetRegistration />,
      },
      {
        path: "/gallery",
        element: <Gallery key={location.pathname} />,
        children: [
          {
            path: "usergal",
            element: <UserGallery />,
          },
          {
            path: "designergal",
            element: <DesignerGallery />,
          },
        ],
      },
    ],
  },
]);

export default router;
