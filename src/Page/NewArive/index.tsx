"use client";
import React, { useState } from "react";
import { Card, Typography, Row, Col, Button, Badge, Space, Tag } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  StarFilled,
  FullscreenOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.css";

const { Meta } = Card;

interface Product {
  name: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  badge: string;
}

const productData: Product[] = [
  {
    name: "Leather Gloves",
    description: "Perfect mint green",
    price: "$42",
    rating: 4.9,
    reviews: 98,
    image:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.addcba21.png&w=640&q=75",
    badge: "50% Discount",
  },
  {
    name: "Manhattan Toy WRT",
    description: "New design 2023",
    price: "$30",
    rating: 4.9,
    reviews: 98,
    image:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.addcba21.png&w=640&q=75",
    badge: "limited edition",
  },
  {
    name: "Ella Leather Tote",
    description: "Cream pink",
    price: "$145",
    rating: 4.9,
    reviews: 98,
    image:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.addcba21.png&w=640&q=75",
    badge: "50% Discount",
  },
  {
    name: "Jump Rope Kids",
    description: "Classic green",
    price: "$68",
    rating: 4.9,
    reviews: 98,
    image:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.addcba21.png&w=640&q=75",
    badge: "limited edition",
  },
];

const NewArrivals: React.FC = () => {
  const [favorites, setFavorites] = useState<boolean[]>(
    new Array(productData.length).fill(false)
  );

  const handleFavoriteClick = (index: number) => {
    setFavorites((prev) => prev.map((fav, i) => (i === index ? !fav : fav)));
  };

  return (
    <div className={styles.main}>
      <Typography.Title level={2} className={styles.title}>
        New Arrivals.{" "}
        <span className={styles.subtitle}>REY backpacks & bags</span>
      </Typography.Title>
      <Row gutter={[16, 16]}>
        {productData.map((product, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Badge.Ribbon
              style={{ marginRight: "28px" }}
              text={product.badge}
              color={product.badge === "50% Discount" ? "pink" : "blue"}
            >
              <Card
                hoverable
                cover={
                  <div className={styles.cardImageWrapper}>
                    <img
                      alt={product.name}
                      src={product.image}
                      className={styles.cardImage}
                    />
                    <div className={styles.overlay}>
                      <Button className={styles.overlayButton}>
                        <ShoppingOutlined />
                        ADD TO BAG
                      </Button>
                      <Button className={styles.overlayButton}>
                        <FullscreenOutlined />
                        QUICK VIEW
                      </Button>
                    </div>
                  </div>
                }
                className={styles.card}
              >
                <Button
                  type="text"
                  icon={
                    favorites[index] ? (
                      <HeartFilled style={{ color: "red" }} />
                    ) : (
                      <HeartOutlined />
                    )
                  }
                  onClick={() => handleFavoriteClick(index)}
                  className={styles.favoriteIcon}
                />
                <Meta
                  title={
                    <Typography.Title level={5} className={styles.productName}>
                      {product.name}
                    </Typography.Title>
                  }
                  description={
                    <>
                      <Typography.Text className={styles.description}>
                        {product.description}
                      </Typography.Text>
                      <Space align="center" className={styles.priceRating}>
                        <Tag color="green" className={styles.priceBadge}>
                          {product.price}
                        </Tag>
                        <Space className={styles.rating}>
                          <StarFilled style={{ color: "#faad14" }} />
                          <Typography.Text>
                            {product.rating} ({product.reviews} reviews)
                          </Typography.Text>
                        </Space>
                      </Space>
                    </>
                  }
                />
              </Card>
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NewArrivals;
