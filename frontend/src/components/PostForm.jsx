import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { fetchApi } from "../redux/slice/apiSlice";
const PostForm = () => {
  const dispatch = useDispatch();

  //Adding Some CSS to give a good look
  const myStyle = {
    backgroundColor: "grey",
    minHeight: "2rem",
    display: "flex",

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "black"
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    const newPost = {
      id: uuidv4(), // Generate a unique ID
      title: title,
      content: content
    };
    dispatch(addPost(newPost));

    setTitle("");
    setContent("");
  };

  return (
    <section className="bg-gray-100">
      <h2>Add a New Post</h2>
      <form style={myStyle}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          className="bg-grey-100"
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />

        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button
          style={{ margin: "10px" }}
          type="button"
          onClick={onSavePostClicked}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};
export default PostForm;
