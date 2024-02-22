import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import HLayout from "./components/layout/Layout";
import Category from "./components/pages/Category";
import ItemDetails from "./components/pages/ItemDetails";

function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route element={<HLayout />}>
            <Route index element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/details" element={<ItemDetails />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
