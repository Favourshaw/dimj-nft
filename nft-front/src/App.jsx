import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import HLayout from "./components/layout/Layout";
import Category from "./components/pages/Category";
import ItemDetails from "./components/pages/ItemDetails";
import Dashboard from "./auth/dasboard/Dashboard";
import ALayout from "./components/layout/AuthLayout";
import UserCollection from "./auth/collection/Collection";
import Create from "./auth/create/Create";
import History from "./auth/history/History";
import Sales from "./auth/sales/Sales";
import Exhibition from "./auth/exhibition/Exhibition";
import Auction from "./auth/auction/Auction";
import Marketplace from "./components/pages/Marketplace";
import Login from "./auth/authentication/Login";
import Signup from "./auth/authentication/Signup";
import DashLayout from "./components/layout/DashLayout";
import ForgotPassword from "./auth/authentication/ForgotPassword";

function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route element={<HLayout />}>
            <Route index element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/details" element={<ItemDetails />} />
            <Route path="/market" element={<Marketplace />} />
          </Route>

          <Route element={<DashLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-collection" element={<UserCollection />} />
            <Route path="/create" element={<Create />} />
            <Route path="/trans-history" element={<History />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/exhibition" element={<Exhibition />} />
            <Route path="/auction" element={<Auction />} />
            <Route path="/auction" element={<Auction />} />
          </Route>

          <Route element={<ALayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />{" "}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
