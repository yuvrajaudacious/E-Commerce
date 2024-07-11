"use client";
import React from "react";
import { Card, Menu } from "antd";
import {
  WomanOutlined,
  ManOutlined,
  SkinOutlined,
  CrownOutlined,
  SmileOutlined,
  MehOutlined,
  MedicineBoxOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.css";

const NavBar2: React.FC = () => {
  return (
      <Card  className={styles.navbar}>
        <Menu mode="horizontal" className={styles.menu}>
          <Menu.Item
            key="women"
            icon={<WomanOutlined />}
            className={styles.menuItem}
          >
            Women
          </Menu.Item>
          <Menu.Item
            key="men"
            icon={<ManOutlined />}
            className={styles.menuItem}
          >
            Men
          </Menu.Item>
          <Menu.Item
            key="kids"
            icon={<SmileOutlined />}
            className={styles.menuItem}
          >
            Kids
          </Menu.Item>
          <Menu.Item
            key="sports"
            icon={<MedicineBoxOutlined />}
            className={styles.menuItem}
          >
            Sports
          </Menu.Item>
          <Menu.Item
            key="beauty"
            icon={<SkinOutlined />}
            className={styles.menuItem}
          >
            Beauty
          </Menu.Item>
          <Menu.Item
            key="jewelry"
            icon={<CrownOutlined />}
            className={styles.menuItem}
          >
            Jewelry
          </Menu.Item>
        </Menu>
      </Card>
  );
};

export default NavBar2;
