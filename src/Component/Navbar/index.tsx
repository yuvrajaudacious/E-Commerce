"use client";
import { Button, Menu } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Logo.</div>
      <Menu mode="horizontal" className={styles.menu}>
        <Menu.Item key="men">Men</Menu.Item>
        <Menu.Item key="women">Women</Menu.Item>
        <Menu.Item key="beauty">Beauty</Menu.Item>
        <Menu.Item key="sport">Sport</Menu.Item>
        <Menu.SubMenu key="templates" title="Templates">
          <Menu.Item key="template1">Template 1</Menu.Item>
          <Menu.Item key="template2">Template 2</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="explore" title="Explore">
          <Menu.Item key="explore1">Explore 1</Menu.Item>
          <Menu.Item key="explore2">Explore 2</Menu.Item>
        </Menu.SubMenu>
      </Menu>
      <div className={styles.icons}>
        <SearchOutlined className={styles.icon} />
        <UserOutlined className={styles.icon} />
        <div className={styles.cart}>
          <ShoppingCartOutlined className={styles.icon} />
          <span className={styles.badge}>3</span>
        </div>
      </div>
      <Button className={styles.cabutton}>Create Account</Button>
    </div>
  );
};

export default Header;
