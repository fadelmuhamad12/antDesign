import {
  AppstoreAddOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="AppSidebar">
      <Menu
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          {
            label: "Dashboard",
            key: "/",
            icon: <AppstoreAddOutlined />,
          },
          {
            label: "Inventory",
            key: "/Inventory",
            icon: <ShopOutlined />,
          },
          {
            label: "Orders",
            key: "/Orders",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Customers",
            key: "/Customers",
            icon: <UserOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
};

export default Sidebar;
