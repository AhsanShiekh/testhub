import React, { useEffect } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import "./BlogsPage.scss";
import study from "../../Assets/blogpagebg.png";
import BlogCard from "../../Components/BlogCard/BlogCard";
import { useDispatch, useSelector } from "react-redux";

const BlogsPage = (props) => {
  const blogs = useSelector((state) => state.blogs.blogs);
  console.log(blogs);

  return (
    <div className="BlogsPage">
      <PageHeader
        title="Our Blog"
        subtitle="Know us better and Stay up to date"
        bgImage={study}
      />

      <div className="blog-cards">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogsPage;
