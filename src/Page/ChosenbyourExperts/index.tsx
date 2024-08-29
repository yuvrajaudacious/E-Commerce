"use client";
import React from "react";
import { Card, Row, Col, Rate, Typography } from "antd";
import styles from "./styles.module.css";

const { Title, Text } = Typography;

const products = [
  {
    id: 1,
    name: "Suede Bomber Jacket",
    images: [
      "https://www.snitch.co.in/cdn/shop/files/4MST2233-01-M48.jpg?v=1715149572&width=1800",
      "https://www.snitch.co.in/cdn/shop/files/4MST2233-01-M13.jpg?v=1715149844&width=1800",
      "https://www.snitch.co.in/cdn/shop/files/4MST2233-01-M33.jpg?v=1715149844&width=1800",
    ],
    price: 52,
    reviews: 269,
    rating: 4.9,
    color: "Orange",
  },
  {
    id: 2,
    name: "Downtown Pet Tote",
    images: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQMHNar4OYr9tgK5PmAsd2fVJRwlB6DoAz0FNt-3GjWnzdYyosb9sp8Leeihq0MpN60ygoBcoh2gPGJWo4UyLSmfW17CCfMhefCQN9s3Bpfu740szZYEtbInQ",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTmkRkXATOeNln67G19eHbtdGO9BufGtZdbGokgfxWU3B0FLowtzk87XjZxOsP7842qJepTBbB6AGIwu5RbwUY2STufxCV_ShUkm0fWdJqtXW4wz4W3bsGYMoE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQXYiBUxmtt7v-C5Kmmxu6kj9ErqiyAYCcUXvTKYjTqqLASh1YkRLYZc52cgPLXMmENEIf1IjRIwWVgUZv9Zs25gK-oMIrCS4yssJ9YS-Pnm_cLDxxYdcs5UwQr",
    ],
    price: 88,
    reviews: 269,
    rating: 4.9,
    color: "Black and Orange",
  },
  {
    id: 3,
    name: "Coder Leather Sneakers",
    images: [
      "https://cdn.shopify.com/s/files/1/0585/9603/2554/files/resistback_f41f2a37-a855-4e56-a739-a761973a60c4.jpg?v=1720355130&width=360",
      "https://cdn.shopify.com/s/files/1/0585/9603/2554/files/FREESPIRITmoc2k.jpg?v=1720346263&width=360",
      "https://cdn.shopify.com/s/files/1/0585/9603/2554/files/laviemock.jpg?v=1720327097&width=360",
    ],
    price: 60,
    reviews: 269,
    rating: 4.9,
    color: "3 Sizes Available",
  },
];

const ProductShowcase = () => {
  return (
    <>
      <Title className={styles.Headertext} level={2}>
        Chosen by our <span className={styles.Etext}>Experts</span>
      </Title>
      <div className={styles.main}>
        <Row gutter={[16, 16]}>
          {products.map((product) => (
            <Col
              xs={{ span: 5, offset: 1 }}
              lg={{ span: 6, offset: 2 }}
              key={product.id}
            >
              <div className={styles.card}>
                <img
                  alt={product.name}
                  src={product.images[0]}
                  className={styles.productImage}
                />
                <div className={styles.productDetails}>
                  <div className={styles.productThumbnails}>
                    {product.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${product.name} ${idx}`}
                        className={styles.thumbnail}
                      />
                    ))}
                  </div>
                  
                  <p className={styles.productTitle}>{product.name}</p>
                  <p  className={styles.productColor}>
                    {product.color}
                  </p>
                  <div className={styles.rating}>
                    <Rate allowHalf disabled defaultValue={product.rating} />
                    <Text type="secondary"> ({product.reviews} reviews)</Text>
                  </div>
                  <div className={styles.priceTag}>${product.price}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default ProductShowcase;
