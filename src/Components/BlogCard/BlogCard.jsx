import React from "react";
import "./BlogCard.scss";

const BlogCard = (props) => {
  return (
    <div className="BlogCard">
      <img
        className="image"
        src="https://tse1.mm.bing.net/th?id=OIP.ZSeaAZ6lgX2gJiwrEnjEwAHaE8&pid=Api&P=0&w=255&h=171"
        alt="blog"
      />

      <div className="title-n-date">
        <h3 className="title">Exams are Coming...</h3>
        <p className="date">12 October 2020, 12:09 pm</p>
      </div>
    </div>
  );
};

export default BlogCard;
