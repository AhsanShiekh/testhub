import axios from "axios";
import React, { useEffect, useState } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import { APIURL } from "../../Config/constants";
import "./BlogPage.scss";

const BlogPage = ({ match }) => {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await axios.get(`${APIURL}/blog/${match.params.slug}`);
      setBlog(res.data);
    };
    fetchBlog();
  }, []);

  return (
    <div className="BlogPage">
      <PageHeader
        bgImage="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        title={blog.title}
        smallTitle
      />
    </div>
  );
};

export default BlogPage;
