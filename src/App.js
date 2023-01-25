import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { routes } from "./mock/routes";

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
