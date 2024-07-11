"use client";
import React from "react";
import { Card, Button, Row, Col } from "antd";
import styles from "./styles.module.css";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

const { Meta } = Card;

const CategoryCard: React.FC = () => {
  return (
    <>
      <div className={styles.headertext}>
        <h1>
          Discover more.{" "}
          <span className={styles.newtxt}>Good things are waiting for you</span>
          <LeftCircleOutlined className={styles.righticon} />
          <RightCircleOutlined className={styles.lefticon} />
        </h1>
      </div>
      <div className={styles.main}>
        <Row>
          <Col span={8}>
            {" "}
            <Card hoverable className={styles.card}>
              <div className={styles.content}>
                <div className={styles.text}>
                  <Meta
                    title="Explore new arrivals"
                    description="Shop the latest from top brands"
                  />
                  <Button type="primary" className={styles.button}>
                    Show me all
                  </Button>
                </div>
                <img
                  alt="new arrivals"
                  src="https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.addcba21.png&w=640&q=75"
                  className={styles.cardImage}
                />
              </div>
            </Card>
          </Col>
          <Col span={8}>
            {" "}
            <Card hoverable className={styles.card1}>
              <div className={styles.content}>
                <div className={styles.text}>
                  <Meta
                    title="Explore new arrivals"
                    description="Shop the latest from top brands"
                  />
                  <Button type="primary" className={styles.button}>
                    Show me all
                  </Button>
                </div>
                <img
                  alt="new arrivals"
                  src="https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.addcba21.png&w=640&q=75"
                  className={styles.cardImage}
                />
              </div>
            </Card>
          </Col>

          <Col span={8}>
            {" "}
            <Card hoverable className={styles.card2}>
              <div className={styles.content}>
                <div className={styles.text}>
                  <Meta
                    title="Sale collection"
                    description="Up to 80% Off"
                  />
                  <Button type="primary" className={styles.button}>
                    Show me all
                  </Button>
                </div>
                <img
                  alt="new arrivals"
                  src="https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.addcba21.png&w=640&q=75"
                  className={styles.cardImage}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CategoryCard;
