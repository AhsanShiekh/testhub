import React from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import "./BlogsPage.scss";
import study from "../../Assets/blogpagebg.png";
import BlogCard from "../../Components/BlogCard/BlogCard";

const BlogsPage = (props) => {
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
