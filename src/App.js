import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { routes } from "./mock/routes";

function App() {
  const products = useSelector((state) => state.products);
  console.log(products);
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
