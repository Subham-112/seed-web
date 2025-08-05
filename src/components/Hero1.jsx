import React, { useEffect, useState } from "react";
import "./Hero1.css";

const slides = [
  {
    id: 1,
    title: "One Stop Destination for",
    highlight: "SPICES",
    subtitle: "Your Trusted Partner in Premium Agricultural Exports",
    description:
      "Connecting Indian Farms to Global Markets with Quality, Trust and Excellence",
    image: "/images/new_image1.jpg",
    primaryBtn: "Our Products",
    secondaryBtn: "Contact Us",
    category: "Products",
  },
  {
    id: 2,
    title: "Premium Quality",
    highlight: "VEGETABLES",
    subtitle: "Fresh Farm-to-Export Vegetables",
    description:
      "Delivering the finest fresh vegetables from Indian farms to global markets",
    image: "/images/new_image3.jpg",
    primaryBtn: "View Vegetables",
    secondaryBtn: "Contact Us",
    category: "Vegetables",
  },
  {
    id: 3,
    title: "Exotic Indian",
    highlight: "FRUITS",
    subtitle: "Tropical & Seasonal Fruit Exports",
    description:
      "Experience the authentic taste of Indian fruits with guaranteed freshness",
    image: "/images/new_image2.jpg",
    primaryBtn: "Explore Fruits",
    secondaryBtn: "Contact Us",
    category: "Fruits",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [current, isAutoPlay]);

  const handleMouseEnter = () => setIsAutoPlay(false);
  const handleMouseLeave = () => setIsAutoPlay(true);

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {slides.map((slide, index) => {
          let className = "slide";
          if (index === current) className += " show";
          else if (index === prev) className += " previous";

          return (
            <>
              <div className={className} key={slide.id}>
                <img src={slide.image} alt={slide.highlight} />
              </div>
              {index === current ? (
                <div className="slide-content">
                  <h2>
                    <p>{slide.title}</p>
                    <span>{slide.highlight}</span>
                  </h2>
                  <h4>{slide.subtitle}</h4>
                  <p>{slide.description}</p>
                  <div className="buttons">
                    <button className="primery">{slide.primaryBtn}</button>
                    <button className="secondary">{slide.secondaryBtn}</button>
                  </div>
                </div>
              ) : null}
              <div className="slider-progress">
                <div
                  className="slider-progress-bar"
                  style={{
                    animationDuration: isAutoPlay ? "6s" : "0s",
                    animationPlayState: isAutoPlay ? "running" : "paused",
                  }}
                ></div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
