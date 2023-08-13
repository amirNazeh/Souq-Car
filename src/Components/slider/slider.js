import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SliderCard from "../slider_card/slider_card.js";

const SliderItems = (props) => {
  const cars = props.cars;

  return (
    <>
      <div className="my-2 " style={{position:"relative" , zIndex:"5"}}>
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
              spaceBetween: 5,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
          }}
          style={{justifyContent:"center"}}
        >
          {cars.map((car) => (
            
            <SwiperSlide style={{justifyContent:"center"}} >
              <SliderCard key={car.id} car={car}  ></SliderCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default SliderItems;
