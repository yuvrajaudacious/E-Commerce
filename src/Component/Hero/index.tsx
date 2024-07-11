"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { SearchOutlined } from "@ant-design/icons";

interface Slide {
  key: number;
  text: string;
  subtext: string;
  imgSrc: string;
}

const slides: Slide[] = [
  {
    key: 1,
    text: "Exclusive collection ",
    subtext: "In this season, find the best 🔥",
    imgSrc:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-right.a9b085d9.png&w=750&q=75",
  },
  {
    key: 2,
    text: "New Arrivals",
    subtext: "Check out the latest trends🔥",
    imgSrc:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-right-2.dc1c84f6.png&w=750&q=75",
  },
  {
    key: 3,
    text: "Summer Sale",
    subtext: "Get the best deals now🔥",
    imgSrc:
      "https://ciseco-nextjs-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-right-3.010fb6aa.png&w=750&q=75",
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<Slide>(slides[0]);
  const [animationKey, setAnimationKey] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        const nextIndex =
          (slides.findIndex((slide) => slide.key === prevSlide.key) + 1) %
          slides.length;
        return slides[nextIndex];
      });
      setAnimationKey((prevKey) => prevKey + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        <div key={animationKey} className={styles.textContainer}>
          <h1 className={styles.text}>{currentSlide.text}</h1>
          <p className={styles.subtext}>{currentSlide.subtext}</p>
          <button className={styles.exploreButton}>
            Explore now
            {/* <SearchOutlined /> */}
          </button>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={currentSlide.imgSrc}
            alt={currentSlide.text}
            className={`${styles.image} ${styles.zoom}`}
            key={animationKey}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
