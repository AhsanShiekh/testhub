import React from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import "./BlogsPage.scss";
import study from "../../Assets/blogpagebg.png";

const BlogsPage = (props) => {
  return (
    <div className="BlogsPage">
      <PageHeader
        title="Our Blog"
        subtitle="Know us better and Stay up to date"
        bgImage={study}
      />
    </div>
  );
};

export default BlogsPage;
