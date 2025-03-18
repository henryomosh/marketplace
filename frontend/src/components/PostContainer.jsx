import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../redux/actions";

const PostContainer = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
  };

  return (
    <div>
      <h2>Posts</h2>
      <div className="box bg-gray-100">
        {posts.map((post) => (
          <div key={post.id}>
            <div>{post.title}</div>
            <div>{post.content}</div>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
