import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import CardCarBrands from "../card-car-brands/card -car-brands";

const SliderBrandsItem = (props) => {
  const carBrand = props.carBrand;

  return (
    <>
      <div className=" m-2">
      <div style={{fontSize:20 ,marginBottom:7  ,fontWeight:"bold"}}>بحث بماركات السيارات</div>
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
              spaceBetween: 1,
            },
            900: {
              slidesPerView: 2,
              spaceBetween: 1,
            },

            1000: {
              slidesPerView: 4,
              spaceBetween: 1,
            },
            1050: {
              slidesPerView: 5,
              spaceBetween: 1,
            },
          }}
        >
          {carBrand.map((carBrand) => (
            <SwiperSlide>
              <CardCarBrands key={carBrand.id} car={carBrand}></CardCarBrands>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default SliderBrandsItem;
