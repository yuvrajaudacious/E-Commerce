import React from "react";
import { Row, Col, Button, Badge, Tag } from "antd";
import styles from "./styles.module.css";

const steps = [
  {
    title: "Filter & Discover",
    description: "Smart filtering and suggestions make it easy to find",
    image:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW1img.5d05ab6a.png&w=256&q=75",
    titleBackgroundColor: "#e0e8ef",
  },
  {
    title: "Add to bag",
    description: "Easily select the correct items and add them to the cart",
    image:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW2img.4553ec6b.png&w=256&q=75",
    titleBackgroundColor: "#f8d7da",
  },
  {
    title: "Fast shipping",
    description: "The carrier will confirm and ship quickly to you",
    image:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW3img.63a41796.png&w=256&q=75",
    titleBackgroundColor: "#d4edda",
  },
  {
    title: "Enjoy the product",
    description: "Have fun and enjoy your 5-star quality products",
    image:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW4img.10d25987.png&w=256&q=75",
    titleBackgroundColor: "#fff3cd",
  },
];

const StepsComponent: React.FC = () => (
  <Row gutter={[16, 16]} justify="center" className={styles.container}>
    {steps.map((step, index) => (
      <Col key={index} xs={24} sm={12} md={6}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={step.image} alt={step.title} className={styles.image} />
          </div>
          <Tag
            className={styles.title}
            style={{ backgroundColor: step.titleBackgroundColor }}
          >
            Step {index + 1}
          </Tag>
          <h4 className={styles.subtitle}>{step.title}</h4>
          <p>{step.description}</p>
        </div>
      </Col>
    ))}
  </Row>
);

export default StepsComponent;
