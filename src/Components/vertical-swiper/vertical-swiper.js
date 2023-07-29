import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarCart from "../car-cart/car-cart";
import strings from "../../localization/localization";
import { CarContext } from "../../Contexts/car.cotnext";
import { useEffect, useState, useContext } from "react";
import Spinner from 'react-bootstrap/Spinner';
export default function VerticalSwiper() {
  const { filteredCars,  setpage } = useContext(CarContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: true,
  };

  const cars = [
    {
      id: 1,
      name: "نيسان صني 2019 للبيع",
      manufactureDate: 2019,
      kilometersDone: `75000 ${strings.km}`,
      price: 500000,
      saleLocation: "الشرقية الشرقيه",
      imgUrl:"https://souq.car/storage/posts/def273addb364992bca5ac83abd22508_20230706020437_main_image.jpg", 
      logoUrl:"	https://souq.car/storage/car_makers/33.jpg",
    },
    {
      id: 2,
      name: "كيا سبورتاج 2021 للبيع",
      manufactureDate: 2021,
      kilometersDone: `68000 ${strings.km}`,
      price: 1475000,
      saleLocation: "القاهرة القاهرة",
      imgUrl:"https://souq.car/storage/posts/a5d6363bdd7a402983bff698ef9a166e_20230706020214_main_image.jpg", 
      logoUrl:"https://souq.car/storage/car_makers/23.jpg",
    },
    {
      id: 3,
      name: "سياره BYDموديل 2017 رخصه سنتين L3",
      manufactureDate: 2015,
      kilometersDone: `5000 ${strings.km}`,
      price: 230000,
      saleLocation: "سياره BYDموديل 2017 رخصه سنتين L3",
      imgUrl:"https://souq.car/storage/posts/e88af06a779f46e98cba099e7eb4cd0e/ca384f6388ba454b820b30046de5e882_20230706115130_0_image.jpg", 
      logoUrl:"https://souq.car/storage/car_makers/66.jpg",
    },
    {
      id: 4,
      name: "هيونداي ix35 للبيع",
      manufactureDate: 2013,
      kilometersDone: `141000 ${strings.km}`,
      price: 600000,
      saleLocation: "هيونداي ix35 للبيع",
      imgUrl:"https://souq.car/storage/posts/3492223dfb4c4260a3362cb4d905d4ca_20230706121435_main_image.jpg", 
      logoUrl:"https://souq.car/storage/car_makers/29.jpg",
    },
    {
      id: 5,
      name: "اوبل ميريفا 2016 للبيع",
      manufactureDate: 2016,
      kilometersDone: `140000 ${strings.km}`,
      price: 450000,
      saleLocation: "القاهرة النزهه",
      imgUrl:"https://souq.car/storage/posts/4b3c3e732d724c399be89af8f5b5419b_20230705054440_main_image.jpg", 
      logoUrl:"https://souq.car/storage/car_makers/6.jpg",
    },
    {
      id: 6,
      name: "جيلي باندينو 2010 للبيع",
      manufactureDate: 2010,
      kilometersDone: `100000 ${strings.km}`,
      price: 115000,
      saleLocation: "الاسكندرية الاسكندرية",
      imgUrl:"https://souq.car/storage/posts/12aab58ad39f4a8ea9db2c9239d48309_20230705053450_main_image.jpg", 
      logoUrl:"	https://souq.car/storage/car_makers/47.jpg",
    },
    {
      id: 7,
      name: "شيفروليه افيو 2015 للبيع",
      manufactureDate: 2015,
      kilometersDone:`120000 ${strings.km}`,
      price: 340000,
      saleLocation: "القاهرة القاهرة  ",
      imgUrl:"https://souq.car/storage/posts/75784654680f45698fd9088ed08d30a1_20230705053009_main_image.jpg", 
      logoUrl:"https://souq.car/storage/car_makers/9.jpg",
    },
    {
      id: 8,
      name: "Grand Cherokee Limited 2020 جيب جراند شيروكي",
      manufactureDate: 2020,
      kilometersDone:`41000 ${strings.km}`,
      price:3150000 ,
      saleLocation: " القاهرة مدينة نصر",
      imgUrl:"https://souq.car/storage/posts/3cad27f5932245deb7217c20c1ba4c21_20230705052101_main_image.jpg", 
      logoUrl:"https://souq.car/storage/car_makers/32.jpg",
    },
  ];
  useEffect(()=>{
  
  setpage("sale")
  
 },[])
  return (
    <>

        <Slider {...settings}>
          {filteredCars&&filteredCars.map((car) => (
            <div className="slide px-4">
              {" "}
              <CarCart key={car.id} car={car} />
            </div>
          )) }
        </Slider>

    </>
  );
}
