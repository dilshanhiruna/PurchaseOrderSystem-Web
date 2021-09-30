import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Purchase Order",
    path: "/purchaseorder",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Suppliers",
    path: "/suppliers",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Sites",
    path: "/sites",
    icon: <FaIcons.FaMapMarked />,
    cName: "nav-text",
  },
];
