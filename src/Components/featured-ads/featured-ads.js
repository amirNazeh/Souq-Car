import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VerticalSwiper from "../vertical-swiper/vertical-swiper";
import strings from "../../localization/localization";
import Button from "react-bootstrap/Button";
import './featured-ads.css';
const FeaturedAds = () => {
  return (
    <>
      <Row>
        <Col lg={3}>
          <div className="explantionOfUse d-lg-block d-md-none ">
            <h2 className="spanClass m-2 my-5 py-3">
              {strings.howToUseTheSouqCar}
            </h2>

            <div className="m-5">
              <Button variant="outline-warning">{strings.howToUse}</Button>
            </div>
          </div>
        </Col>
        <Col  lg={9}>
          <div className="spanClass m-2">{strings.featuredAds} </div>
          <VerticalSwiper />{" "}
        </Col>
      </Row>
    </>
  );
};
export default FeaturedAds;
