import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./car-swiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CarSwiperChild from "../car-swiper-child/car-brand-swiper-child";


const CarSwiper = (props) => {
  const cars = props.car;
const titleName=props.titleName;
  return (
    <>
      <div className="swiperContainer  my-3 " >
       
        <Swiper
          modules={[Navigation]}
          navigation
          pagination={{ clickable: true }}
          bosition
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          freeMode={true}
          grabCursor={true}
          breakpoints={{
            400: {
              slidesPerView: 1,
           
            },
             600: {
              slidesPerView: 2,
            },
            700: {
              slidesPerView: 3,
             
            },

            1000: {
              slidesPerView: 4,
            
            },
            1070: {
              slidesPerView: 5,
           
            },
            1250: {
              slidesPerView: 6,
           
            },
          }}
        >
          {cars.map((car) => (
            <SwiperSlide >
              <CarSwiperChild key={car.id} car={car} >
            
              </CarSwiperChild>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default CarSwiper;
