import React from "react";
import "./car-brand-swiper-child.css";

const CarSwiperChild = (props) => {
  const { name, imgUrl } = props.car;
  return (
    <>
      <div className="brandCard">
        <div className="textBrandCard">
          <img src={imgUrl} alt="" width={60} height={40} />
          <p>{name}</p>
        </div>
      </div>
    </>
  );
};
export default CarSwiperChild;
