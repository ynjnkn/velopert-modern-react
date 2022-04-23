import React from "react";
import { useParams } from "react-router-dom";
import PostContainer from "../components/PostContainer";

const PostPage = ({ match }) => {
  const { id } = useParams();
  console.log({ id });

  return <PostContainer postId={parseInt(id)} />;
};

export default PostPage;
