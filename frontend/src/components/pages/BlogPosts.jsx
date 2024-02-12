import { useState } from "react";
import { contents } from "../schooldata/contents";
import Blogs from "./Blogs";

import "./blogposts.css";

const BlogPosts = () => {
  // eslint-disable-next-line no-unused-vars
  const [content, setContent] = useState(contents);
  return (
    <div className='cont-blogposts'>
      <section className='blogs'>
        {content.map((eachContent) => {
          return <Blogs key={eachContent.id} {...eachContent} />;
        })}
      </section>
    </div>
  );
};

export default BlogPosts;
