import React from "react";
import "./BlogCard.scss";

const BlogCard = ({ imageUrl, title, description }) => {
  return (
    <div className="BlogCard">
      <img
        className="image"
        src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt="blog"
      />

      <div className="title-n-date">
        <h3 className="title">{title}</h3>
        <p className="date">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
