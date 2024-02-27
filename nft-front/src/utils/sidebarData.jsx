import React from "react";
import { BsColumnsGap, BsCollection } from "react-icons/bs";
import { TfiHeadphone } from "react-icons/tfi";
import { IoCreateOutline } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { GiSellCard } from "react-icons/gi";
import { FiShoppingBag, FiLogOut } from "react-icons/fi";
import { TbSlideshow } from "react-icons/tb";
import { RiAuctionLine } from "react-icons/ri";
import "../assets/auth/css/dash.css";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <BsColumnsGap />,
    link: "/dashboard",
    exact: "true",
  },

  {
    title: "My Collections",
    icon: <BsCollection />,
    link: "/user-collection",
    exact: "true",
  },

  {
    title: "Create NFT",
    icon: <IoCreateOutline />,
    link: "/create",
    exact: "true",
  },

  {
    title: "Transactions",
    icon: <GrTransaction />,
    link: "/trans-history",
    exact: "true",
  },

  {
    title: "Sales History",
    icon: <GiSellCard />,
    link: "/sales",
    exact: "true",
  },

  {
    title: "Market Place",
    icon: <FiShoppingBag />,
    link: "/market",
    exact: "true",
  },

  {
    title: "Exhibition",
    icon: <TbSlideshow />,
    link: "/exhibition",
    exact: "true",
  },

  {
    title: "Auction",
    icon: <RiAuctionLine />,
    link: "/auction",
    exact: "true",
  },

  {
    title: "Log Out",
    icon: <FiLogOut />,
    link: "/logout",
    exact: "true",
  },
];
