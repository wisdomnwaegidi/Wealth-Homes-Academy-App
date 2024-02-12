/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { contents } from "../schooldata/contents";
import "./eachblogpost.css";

const EachBlogPost = () => {
  // eslint-disable-next-line no-unused-vars
  const [blogContent, setBlogContent] = useState("Default Pages");
  const { id } = useParams();
  // console.log(useParams());

  useEffect(() => {
    const newBlog = contents.find((content) => content.id === parseInt(id));
    setBlogContent(newBlog.info);
    return;
  }, []);

  return (
    <div className='blog' style={{ marginTop: "10rem" }}>
      <div>
        <h1>Blogs</h1>
        <div style={{ marginTop: "5rem", color: "black" }}>{blogContent}</div>
        );
      </div>
      <button type='button'>
        <Link to='/Blogposts' className='read-more-btn'>
          Return to Blogs
        </Link>
      </button>
    </div>
  );
};

export default EachBlogPost;
