import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./car-card.css";
import Button from "react-bootstrap/Button";
import strings from "../../localization/localization";
import { Link } from "react-router-dom";

const CarCard = () => {
  return (
    <>
      <div>
        <Row xs={1} lg={2}>
          <Col >
          <div className="m-2 autoNews  imgBackGroundOne">
          <p className="textCard fs-2">
              {strings.lookingForABuyerForYourCar}
              <br></br>
              <Button variant="outline-warning m-2 mt-3" style={{fontSize:"20px"}}>
               
                  {strings.sellMyCar} <i className="fa-solid fa-plus "></i>{" "}
               
              </Button>
            </p>
          </div>
          </Col>

          <Col  >
           <div className="m-2 autoNews imgBackGroundTwo">
           <p className="textCard fs-2">
              {strings.CarNewsInEgypt}
              <br></br>
              <Button variant="outline-primary m-2 mt-3" style={{color:"white" ,fontSize:"20px"}}>
                {" "}
             
                  {" "}
                  <i className="fa-solid fa-newspaper mx-2"></i>{" "}
                  {strings.carNews}{" "}
               
              </Button>
            </p>
           </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row className="cardsRow mt-5">
          {" "}
          <span className="spanClass">
            {" "}
            <span>{strings.latestArticles}</span>
            <a> {strings.allArticles} </a>
          </span>
        </Row>
        <Row className="my-4" xs={1} md={4}>
          <Col >
           <div className="articlesCard m-2">
           <div className="parentImg">
              <img
                src="https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453309/articals%20cars/download_bnvbfa.jpg"
                className="w-100 articlesCard-img "
                style={{height:"200px"}}
                alt="imgCard"
              ></img>
            </div>
            <p className="articlesCard-taxt p-2">
              {" "}
              <a>هل حقاالشركات تبيعنا سيارات رخيصة تفتقر لمعايير السلامة؟ </a>
            </p>
           </div>
          </Col>
     
 
          <Col >
          <div className="articlesCard m-2">
          <div className="parentImg">
              <img
                src="https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453310/articals%20cars/ffff_e1d9s2.jpg"
                className="w-100 articlesCard-img"
                style={{height:"200px"}}
                alt="imgCard"
              ></img>
            </div>
            <p className="articlesCard-taxt p-2">
              {" "}
              <a>ما مدى صعوبة بناء سيارة من الصفر؟ تعرف على VF8 الفيتنامية </a>
            </p>
          </div>
          </Col>
        
 
          <Col>
          <div  className="articlesCard m-2">
          <div className="parentImg">
              <img
                src="https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453312/articals%20cars/WhatsApp_Image_2023-09-11_at_20.15.14_wgfnti.jpg"
                className="w-100 articlesCard-img "
                style={{height:"200px"}}
                alt="imgCard"
              ></img>
            </div>
            <p className="articlesCard-taxt p-2">
              {" "}
              <a>ماذا تعرف عن أنواع ناقل الحركة Transmission؟ </a>
            </p>
          </div>
          </Col>
   
 
  
          <Col>
          <div  className="articlesCard m-2">
          <div className="parentImg">
              <img
                src="https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453317/articals%20cars/cc_l0zx8k.jpg"
                className="w-100 articlesCard-img"
                style={{height:"200px"}}
                alt="imgCard"
              ></img>
           
           
          </div>
          <p className="articlesCard-taxt p-2">
              {" "}
              <a> مالكوري الجنوبي يحرز اللقب ويؤكد "لن نستبدل المفاتيح الصلبة بشاشات اللمس" </a>
            </p>
            </div>
          </Col>
   

  
        </Row>
      </div>
    </>
  );
};
export default CarCard;
