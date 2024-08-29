// pages/index.tsx
"use client";
import { Button, Col, Input, Row, Tag } from "antd";
import styles from "./styles.module.css";
import { ArrowRightOutlined } from "@ant-design/icons";

const DontMiss = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Row>
          <Col span={12}>
            <h1>Don't miss out on special offers</h1>
            <p>
              Register to receive news about the latest, savings combos,
              discount codes...
            </p>
            <ul className={styles.offerList}>
              <li>
                <Tag color="#55acee">01</Tag> Savings combos
              </li>
              <li>
                <Tag color="#55acee">02</Tag> Freeship
              </li>
              <li>
                <Tag color="#55acee">03</Tag> Premium magazines
              </li>
            </ul>
            <div className={styles.emailInput}>
              <Input.Group compact>
                <Input
                  style={{ width: "calc(100% - 55px)" }}
                  placeholder="Enter your email"
                />
                <Button
                  className={styles.button}
                  icon={<ArrowRightOutlined />}
                />
              </Input.Group>
            </div>
          </Col>
          <Col span={12}>
            <div className={styles.image}>
              <img
                src="https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpromo3.4210c497.png&w=750&q=75"
                alt="Special Offers"
                className={styles.innerimage}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DontMiss;
