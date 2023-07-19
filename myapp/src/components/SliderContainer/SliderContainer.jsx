import React from "react";
import s from './SliderContainer.module.css'
import { data } from "../data";
import Slider from "../Slider/Slider";

function SliderContainer() {
  return (
    <div className={s.imagesContainer}>
      <Slider images={data}/>
    </div>
  );
}

export default SliderContainer;
