import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./car-card.css";
import Button from "react-bootstrap/Button";
import strings from "../../localization/localization";

const CarCard = () => {
  return (
    <>
      <div>
        <Row xs={1} md={2}>
          <Col >
          <div className="m-2 autoNews  imgBackGroundOne">
          <p className="textCard">
              {strings.lookingForABuyerForYourCar}
              <br></br>
              <Button variant="outline-warning">
                <span className="m-2 " style={{fontSize:"20px"}}>
                  {strings.sellMyCar} <i className="fa-solid fa-plus "></i>{" "}
                </span>
              </Button>
            </p>
          </div>
          </Col>

          <Col  >
           <div className="m-2 autoNews imgBackGroundTwo">
           <p className="textCard">
              {strings.CarNewsInEgypt}
              <br></br>
              <Button variant="outline-primary">
                {" "}
                <span className="m-2" style={{color:"white" ,fontSize:"20px"}}>
                  {" "}
                  <i className="fa-solid fa-newspaper mx-2"></i>{" "}
                  {strings.carNews}{" "}
                </span>
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
           <div className="articlesCard mx-2">
           <div className="parentImg">
              <img
                src="https://souq.car/storage/posts/1746a2a6be81483abfd69781b39c31d4_20230531095557_main_image.jpg"
                className="w-100 articlesCard-img"
                alt="imgCard"
              ></img>
            </div>
            <p className="articlesCard-taxt">
              {" "}
              <a>هل حقا الشركات تبيعنا سيارات رخيصة تفتقر لمعايير السلامة؟ </a>
            </p>
           </div>
          </Col>
          <Col >
          <div className="articlesCard mx-2">
          <div className="parentImg">
              <img
                src="https://souq.car/storage/posts/2307074b8bd74d0984b10b6b21916ce6_20230521075001_main_image.jpg"
                className="w-100 articlesCard-img"
                alt="imgCard"
              ></img>
            </div>
            <p className="articlesCard-taxt">
              {" "}
              <a>ما مدى صعوبة بناء سيارة من الصفر؟ تعرف على VF8 الفيتنامية </a>
            </p>
          </div>
          </Col>
          <Col>
          <div  className="articlesCard mx-2">
          <div className="parentImg">
              <img
                src="https://souq.car/storage/posts/82a9723c03a5470facea77421719939c_20230515073124_main_image.jpg"
                className="w-100 articlesCard-img h-50"
                alt="imgCard"
              ></img>
            </div>
            <p className="articlesCard-taxt">
              {" "}
              <a>ماذا تعرف عن أنواع ناقل الحركة Transmission؟ </a>
            </p>
          </div>
          </Col>
          <Col>
          <div  className="articlesCard mx-2">
          <div className="parentImg">
              <img
                src="	https://souq.car/storage/posts/5fe986a71d28415eb4447dee47685f2b_20230507055116_main_image.jpg"
                className="w-100 articlesCard-img"
                alt="imgCard"
              ></img>
            </div>
            <p className="articlesCard-taxt">
              {" "}
              <a>
                مالكوري الجنوبي يحرز اللقب ويؤكد "لن نستبدل المفاتيح الصلبة
                بشاشات اللمس"
              </a>
            </p>
          </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default CarCard;
