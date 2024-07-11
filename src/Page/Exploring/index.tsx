"use client";
import { Layout, Card, Row, Col, Typography, Button } from "antd";
import styles from "./styles.module.css";
import NavBar2 from "@/Component/Navbar2";
import Paragraph from "antd/es/typography/Paragraph";
import MovingIcon from "@mui/icons-material/Moving";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const data = [
  {
    title: "Shoes",
    count: 22,
    description: "High-quality running shoes",
    image:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdetail1.38019683.jpg&w=640&q=75",
    image2:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/static/media/explore9.0d4aa2f6.svg",
  },
  {
    title: "Recycled Blanket",
    count: 144,
    description: "Eco-friendly recycled blankets",
    image:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.e395a7b8.png&w=640&q=75",
    image2:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/static/media/explore2.46138c9a.svg",
  },
  {
    title: "Recycled Blanket",
    count: 144,
    description: "High-quality running shoes",

    image:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.e395a7b8.png&w=640&q=75",
    image2:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/static/media/explore3.8526de42.svg",
  },
  {
    title: "Recycled Blanket",
    count: 144,
    description: "High-quality running shoes",
    image:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.e395a7b8.png&w=640&q=75",
    image2:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/static/media/explore1.bafb60cf.svg",
  },
  {
    title: "Recycled Blanket",
    count: 144,
    description: "High-quality running shoes",
    image:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.e395a7b8.png&w=640&q=75",
    image2:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/static/media/explore5.4a34ab29.svg",
  },
  {
    title: "Recycled Blanket",
    count: 144,
    description: "High-quality running shoes",
    image:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.e395a7b8.png&w=640&q=75",
    image2:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/static/media/explore6.9182f851.svg",
  },
];

const Exploring = () => {
  return (
    <Layout className={styles.header}>
      <div className={styles.logo}>Start exploring</div>
      <NavBar2 />
      <Content className={styles.content}>
        <Row gutter={[16, 16]} justify="center">
          {data.map((item) => (
            <Col key={item.title}>
              <Card hoverable className={styles.card}>
                <Row>
                  <div className={styles.imagecontainer}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.image}
                    />
                  </div>
                  <div>
                    <Paragraph className={styles.productcount}>
                      {`${item.count} products`}
                    </Paragraph>
                  </div>
                </Row>
                <div className={styles.productinfo}>
                  <Title level={4}>{item.title}</Title>
                  <Text className={styles.description}>{item.description}</Text>
                  <Button type="link" className={styles.button}>
                    SEE COLLECTION
                    <MovingIcon />
                  </Button>
                </div>
                <img
                  src={item.image2}
                  alt="Decorative Element"
                  className={styles.decorativeelement}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default Exploring;
