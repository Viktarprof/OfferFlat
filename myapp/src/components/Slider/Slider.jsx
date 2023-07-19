import React from "react";
import s from "./Slider.module.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Slider({ images }) {
  return (
    <Carousel>
      {images.map((el) => (
        <Carousel.Item key={el.id}>
          <img
            src={el.image}
            className="d-block w-100"
            alt={`Slide ${el.id}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
