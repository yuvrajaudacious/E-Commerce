"use client";
import React from "react";
import { Card, Col, Row, Rate, Badge } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";

const products = [
  {
    name: "Travel Pet Carrier",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/2/d/z/m-tts-682-thalasi-original-imagymtjpgfybrfv.jpeg?q=70",
    price: 28,
    rating: 4.9,
    reviews: 98,
    colors: ["#FF69B4", "#FFD700", "#1E90FF", "#3CB371"],
    status: "BestSellers",
  },
  {
    name: "Leather Gloves",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/2/d/z/m-tts-682-thalasi-original-imagymtjpgfybrfv.jpeg?q=70",
    price: 42,
    rating: 4.9,
    reviews: 98,
    colors: ["#000", "#1E90FF", "#A9A9A9", "#696969"],
    status: "BestSellers",
  },
  {
    name: "Hoodie Sweatshirt",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/2/d/z/m-tts-682-thalasi-original-imagymtjpgfybrfv.jpeg?q=70",
    price: 30,
    rating: 4.9,
    reviews: 98,
    colors: ["#8A2BE2", "#FF69B4", "#FFD700", "#1E90FF"],
    status: "BestSellers",
  },
  {
    name: "Wool Cashmere Jacket",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/2/d/z/m-tts-682-thalasi-original-imagymtjpgfybrfv.jpeg?q=70",
    price: 12,
    rating: 4.9,
    reviews: 98,
    colors: ["#000", "#1E90FF", "#A9A9A9", "#696969"],
    status: "BestSellers",
  },
];

const BestSellers: React.FC = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.headerText}>
        Best Sellers.{" "}
        <span className={styles.text}>Best selling of the month</span>
      </h2>
      <Row gutter={16}>
        {products.map((product, index) => (
          <Col key={index} span={6}>
            <Badge.Ribbon
              text={product.status}
              color={product.status === "Sold Out" ? "red" : "green"}
            >
              <Card
                className={styles.productCard}
                cover={
                  <div className={styles.imageContainer}>
                    <img alt={product.name} src={product.image} />
                    <div className={styles.productHoverDetails}>
                      <div className={styles.detailsContent}>
                        <Card.Meta title={product.name} />
                        <div>Price: ${product.price}</div>
                        <Rate disabled defaultValue={product.rating} />{" "}
                        {product.rating} ({product.reviews} reviews)
                        <div>
                          {product.colors.map((color, i) => (
                            <span
                              key={i}
                              className={styles.colorCircle}
                              style={{ backgroundColor: color }}
                            ></span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                }
                actions={[
                  <HeartOutlined key="favorite" />,
                  <ShoppingCartOutlined key="cart" />,
                ]}
              />
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BestSellers;
