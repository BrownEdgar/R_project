import React from "react";
import style from "./Card.module.scss";

export default function Card({ info }) {
  const { Model, Complect, Price, img } = info;

  return (
    <div className={style.Card}>
      <div className={style.Card_ImgBox}>
        <img src={img} alt="Car" className={style.Card_Img} />
      </div>
      <div className={style.Card_Info}>
        <h2 className={style.Card_Model}>{Model}</h2>
        <h3 className={style.Card_Complect}>{Complect}</h3>
        <p className={style.Card_Price}>{Price}</p>
      </div>
    </div>
  );
}
