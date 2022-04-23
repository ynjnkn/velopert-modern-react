import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostList from "./PostList";
import { getPosts } from "../redux/modules/postsRefactored";

const PostListContainer = () => {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 포스트 목록 요청
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return <div>찾을 수 없는 페이지</div>;
  return <PostList posts={data} />;
};

export default PostListContainer;
