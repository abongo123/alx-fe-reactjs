import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams();

  return <h1>Viewing Blog Post {postId}</h1>;
};

export default BlogPost;
