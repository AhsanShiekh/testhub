import React from "react";
import "./BlogCard.scss";

const BlogCard = ({ imageUrl, title, description }) => {
  return (
    <div className="BlogCard">
      <img className="image" src={imageUrl} alt="blog" />

      <div className="title-n-date">
        <h3 className="title">{title}</h3>
        <p className="date">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
