import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import HLayout from "./components/layout/Layout";
import Category from "./components/pages/Category";
import ItemDetails from "./components/pages/ItemDetails";
import Dashboard from "./auth/Dashboard";
import ALayout from "./components/layout/AuthLayout";

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

          <Route element={<ALayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
