import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/news/${id}`)
      .then((response) => response.json())
      .then((result) => setPost(result))
      .catch((error) => console.log("error", error));
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={post.imgUrl} alt="news" />
      <br></br>
      <br></br>
      <br></br>
      <h2>{post.title}</h2>
      <br></br>
      <p>{post.body}</p>
    </div>
  );
};

export default NewsDetails;