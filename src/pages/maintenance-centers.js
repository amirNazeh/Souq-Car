import React from "react";
import CarCart from "../Components/car-cart/car-cart";
import Filter from "../Components/filter/filter";
import ViewNav from "../Components/view_nav/view_nav";
import SliderItems from "../Components/slider/slider";
import strings from "../localization/localization";
import { useEffect, useContext } from "react";
import { CarContext } from "../Contexts/car.cotnext";
import Spinner from 'react-bootstrap/Spinner';
const MaintenanceCenters = () => {
  const cars = [
    {
      id: 1,
      name: " مركز مصطفى عفشة لإصلاح جميع انواع السيارات 🚗 مركز كامل لخدمه السيارات",
      imgUrl:
        "https://souq.car/storage/posts/6008e6787c6246f6aa6ca151a822cc5e/88ee6c0eff154757be9928b11bfb1e4a_20230601120116_0_image.jpg",
      saleLocation:
        " القاهرة أشرفكو للاطارات والبطاريات، جسر السويس، الخصوص، قسم النزهة، مصر",
      description:
        "مركز مصطفى عفشة لإصلاح جميع انواع السيارات الكوري والياباني والصيني و الألماني يوجد جميع قطع غيار الاصليه و ضبط زوايا وترصيص وإصلاح جميع علب الدريكسيون. صيانه عربيتك تهمنا 🕵️‍♂️ وهو ده شغلنا 👏 صيانه عربيتك في مكان واحد ☝️ عفشه و",
    },
    {
      id: 2,
      name: "مركز طاهر تيتو لجميع خدمات السيارات البروتون",
      imgUrl:
        "https://souq.car/storage/posts/e46a3bac8de645898b77cf6d3e710593_20230505091028_main_image.jpg",
      saleLocation: "  القاهرة جسر السويس، المنتزه، قسم مصر الجديدة، مصر",
      description:
        "مركز طاهر تيتو قطع غيار جميع السيارات البروتون بريف اكسورا جينا جين 2 عفشة كهرباء دوكو سمكرة فلاتر مواتير استيراد و جديد 01114588485 Taher tito (proton) ‏‪0106 336 1624‬‏&nbsp;",
    },
  ];
  const { filteredCars,  setpage  } = useContext(CarContext);
  useEffect(()=>{
  
    setpage("maintenanceCenters")
    // setFilteredCars(cars)
    // setCarsMap(cars)
   },[])
  return (
    <>
      <div className="row px-3 theme1">
      <div
          className="m-2"
          style={{
            borderRadius: "10px",
            color: "white",
            height: "90px",
            width: "100%",
            position: "relative",
            background: '#888 url("https://souq.car/imgs/sub-header.jpg") no-repeat center/cover fixed',
            backgroundBlendMode:"multiply",
        
            
          }}
        >
          <h1 style={{marginTop:"1%"}}> {strings.maintenanceCenters}</h1>
        </div>
        <SliderItems cars={filteredCars} />
        <Filter 
        state='maintenance'
        />
        <div className="col-sm-12 col-lg-9">
          <ViewNav />
          {filteredCars?filteredCars.map((car) => (
            <CarCart key={car.id} car={car}  />
          )): <div style={{height:"100%" , textAlign:"center"}}> <Spinner style={{marginTop:"25%" , padding:25}} animation="border" /></div>}
        </div>
      </div>
    </>
  );
};

export default MaintenanceCenters;
