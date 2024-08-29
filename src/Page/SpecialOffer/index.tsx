"use client";
import React from "react";
import { Button, Typography, Row, Col } from "antd";
import styles from "./styles.module.css";

const { Title, Text } = Typography;

const SpecialOffer: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
      <Row justify="center" align="middle" className={styles.card}>
        <Col xs={24} md={12}>
          <img
            src="https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpromo2.b3b05f98.png&w=750&q=75"
            alt="Special offer"
            className={styles.image}
          />
        </Col>
        <Col xs={24} md={12}>
          <div className={styles.textContainer}>
            <img
              src="/path-to-your-logo.png"
              alt="Logo"
              className={styles.logo}
            />{" "}
            <Title level={1} className={styles.title}>
              Special offer <br></br>in kids products
            </Title>
            <Text className={styles.description}>
              Fashion is a form of self-expression and autonomy<br></br> at a
              particular period and place.
            </Text>
            <br></br>
            <Button type="primary" className={styles.button}>
              Discover more
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SpecialOffer;
