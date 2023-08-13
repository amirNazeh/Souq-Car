import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./explore-section.css";
import strings from "../../localization/localization";
import { Link } from "react-router-dom";

const ExploreSection = () => {
  return (
    <>
      <div>
        <Row className="my-4">
          <span className="spanClass">{strings.exploreSections} </span>
        </Row>
      </div>
      <div>
        <Row className="my-4" xs={2} md={3} lg={6}>
          <Col>
            <div className="expioreCard m-1">
              <Link to="/SalePage">
                <div className="exploreText ">
                  <img
                    src="https://souq.car/storage/post_types/1.jpg"
                    className="w-50"
                    alt="cardImge"
                  />
                  <p className="mt-3 fs-5"> {strings.buyCars}</p>
                </div>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="expioreCard m-1">
              <Link to="/CarRental">
                <div className="exploreText ">
                  <img
                    src="https://souq.car/storage/post_types/4.jpg"
                    className="w-50"
                    alt="cardImge"
                  />
                  <p className="mt-3 fs-5"> {strings.carRental} </p>
                </div>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="expioreCard m-1">
              <Link to="/MaintenanceCenters">
                <div className="exploreText ">
                  <img
                    src="https://souq.car/storage/post_types/2.jpg"
                    className="w-50"
                    alt="cardImge"
                  />
                  <p className="mt-3 fs-5"> {strings.maintenanceCenters} </p>
                </div>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="expioreCard m-1">
              <Link to="/SpareParts">
                <div className="exploreText">
                  <img
                    src="	https://souq.car/storage/post_types/3.jpg"
                    className="w-50"
                    alt="cardImge"
                  />
                  <p className="mt-3 fs-5"> {strings.spareParts}</p>
                </div>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="expioreCard m-1">
           <Link to='/RescueWinch'>
           <div className="exploreText ">
                <img
                  src="	https://souq.car/storage/post_types/5.jpg"
                  className="w-50"
                  alt="cardImge"
                />
                <p className="mt-3 fs-5"> {strings.rescueWinch} </p>
              </div>
           </Link>
            </div>
          </Col>
          <Col>
          <Link to='/news'>
          <div className="expioreCard m-1">
              <div className="exploreText ">
                <img
                  src="https://souq.car/storage/post_types/6.jpg"
                  className="w-50"
                  alt="cardImge"
                />

                <p className="mt-3 fs-5"> {strings.carNews} </p>
              </div>
            </div>
          </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default ExploreSection;
