import BranchInfo from "../components/BranchInfo/BranchInfo";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import Branches from "../components/Branchs/Branchs";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    childs: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "branches",
        element: <Branches />,
      },
      {
        path: "branches/:id",
        element: <BranchInfo />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contacts",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];
