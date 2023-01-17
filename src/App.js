import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
