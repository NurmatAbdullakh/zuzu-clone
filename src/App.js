import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./components/About/About";
import Branches from "./components/Branchs/Branchs";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
const routes = [
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

function App() {
  return (
    <Routes>
      {routes.map((v) => (
        <Route path={v.path} element={v.element}>
          {v.childs.map((e) =>
            e.path === v.path ? (
              <Route index element={e.element} />
            ) : (
              <Route path={e.path} element={e.element} />
            )
          )}
        </Route>
      ))}
    </Routes>
  );
}

export default App;
