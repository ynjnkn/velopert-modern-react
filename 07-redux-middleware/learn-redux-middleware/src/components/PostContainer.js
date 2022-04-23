import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../redux/modules/postsRefactored";
import Post from "./Post";

const PostContainer = ({ postId }) => {
  const { post } = useSelector((state) => state.posts);
  const { data, loading, error } = post;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
  }, [postId, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return <div>찾을 수 없는 페이지</div>;

  return <Post post={data} />;
};

export default PostContainer;
