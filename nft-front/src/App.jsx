import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import HLayout from "./components/layout/Layout";
import Art from "./components/pages/Art";

function App() {
  return (
    <>
      <div className="max-width">
        <Routes>
          <Route element={<HLayout />}>
            <Route index element={<Home />} />
            <Route path="/art" element={<Art />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
