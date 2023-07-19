import React from "react";
import s from "./TopInfo.module.css";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { GrDocument } from "react-icons/gr";
import { BsArrowDownUp } from "react-icons/bs";
import { PiMoney } from "react-icons/pi";
import { GiHeatHaze, GiSteeringWheel } from "react-icons/gi";

function TopInfo() {
  return (
    <div className={s.topInfoContainer}>
         <div className={s.info}>
        <AiOutlineArrowsAlt />
        <p> Liczba pokoi - 4</p>
      </div>
      <div className={s.info}>
        <AiOutlineArrowsAlt />
        <p> Powierzchnia - 98 m²</p>
      </div>
      <div className={s.info}>
        <GrDocument />
        <p> Forma własności - pełna własność </p>
      </div>
      <div className={s.info}>
        <BsArrowDownUp />
        <p> Piętro - 5/5</p>
      </div>
      <div className={s.info}>
        <PiMoney />
        <p> Cena - 750,000 PLN </p>
      </div>
      <div className={s.info}>
        <GiHeatHaze />
        <p> Ogrzewanie - miejskie</p>
      </div>
      <div className={s.info}>
        <GiSteeringWheel />
        <p> Miejsce parkingowe - tak</p>
      </div>
    </div>
  );
}

export default TopInfo;
