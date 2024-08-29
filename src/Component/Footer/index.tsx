// components/Footer.tsx
"use client";
import React from "react";
import { Layout, Row, Col } from "antd";
import {
  FacebookOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.css";

const { Footer } = Layout;

const CustomFooter: React.FC = () => {
  return (
    <Footer className={styles.footer}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <h4 className={styles.sectionTitle}>About</h4>
          <p className={styles.aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <h4 className={styles.sectionTitle}>Categories</h4>
          <ul className={styles.linkList}>
            <li>
              <a href="#">Clothing</a>
            </li>
            <li>
              <a href="#">Laptops</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
            <li>
              <a href="#">Furniture</a>
            </li>
            <li>
              <a href="#">Shoes</a>
            </li>
          </ul>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <h4 className={styles.sectionTitle}>Information</h4>
          <ul className={styles.linkList}>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Returns & Exchange</a>
            </li>
            <li>
              <a href="#">Shipping & Delivery</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <h4 className={styles.sectionTitle}>Contact</h4>
          <address className={styles.contactInfo}>
            Address: XYZ, New Delhi, India
            <br />
            <PhoneOutlined /> Phone: +91-1234567890
            <br />
            <MailOutlined /> Email: contact@example.com
          </address>
          <div className={styles.socialIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookOutlined className={styles.icon} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeOutlined className={styles.icon} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramOutlined className={styles.icon} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterOutlined className={styles.icon} />
            </a>
          </div>
        </Col>
      </Row>
      {/* <Row justify="center" className={styles.copyright}>
        <Col>
          <p>
            Copyright © 2019 All rights reserved | Designed with love by{" "}
            <a href="#">Your Company</a>
          </p>
        </Col>
      </Row> */}
    </Footer>
  );
};

export default CustomFooter;
