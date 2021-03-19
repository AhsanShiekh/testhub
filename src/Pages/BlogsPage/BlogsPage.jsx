import React, { useEffect } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import "./BlogsPage.scss";
import study from "../../Assets/blogpagebg.png";
import BlogCard from "../../Components/BlogCard/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { APIURL } from "../../Config/constants";
import { setBlogs } from "../../redux/Blogs/Blogs.actions";
import ContactSection from "../../Components/ContactSection/ContactSection";

const BlogsPage = (props) => {
  const blogs = useSelector((state) => state.blogs.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDara = async () => {
      const response = await axios.get(`${APIURL}/blog/`);
      dispatch(setBlogs(response.data.blogs));
    };
    fetchDara();
  }, []);

  return (
    <div className="BlogsPage">
      <PageHeader
        title="Our Blog"
        subtitle="Know us better and Stay up to date"
        bgImage={study}
      />

      <div className="blog-cards">
        {blogs.map((blog) => (
          <BlogCard
            title={blog.title}
            key={blog.slug}
            description={blog.content}
            imageUrl={`${APIURL}/${blog.thumbnail}`}
            slug={blog.slug}
          />
        ))}
      </div>

      <ContactSection />
    </div>
  );
};

export default BlogsPage;
