import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import strings from "../../localization/localization";
import { Link } from "react-router-dom";
const News = () => {
  const [posts, setPosts] = useState([]);
  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3000/news", requestOptions)
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    <div className="mainDiv">
    <div
        className="m-2 px-3"
        style={{
          borderRadius: "10px",
          color: "white",
          height: "190px",
          width: "100%",
          textAlign:"center",
          backgroundImage: 'url("https://souq.car/imgs/sub-header.jpg")',
        }}
      >
        <h1> {strings.carNews}</h1>
      </div>
      <Row className="my-4" xs={1} md={3}>
        {posts.map((post) => (
          <div key={post.id}>
          <Link  to={`/news/${post.id}`}><Col>
            <div className="articlesCard m-2">
            <div className="parentImg">
                <img
                  src={post.imgUrl}
                  alt="news"
                  className="w-100 articlesCard-img"
                />
              </div>
              <a>
                <h3 className="articlesCard-taxt">{post.title}</h3>
              </a>

            </div>
             
            </Col> </Link>
            
          </div>
        ))}
      </Row>
    </div>
   
    </>
  );
};

export default News;
