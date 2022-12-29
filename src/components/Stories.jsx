import React from "react";
import { useGlobalContext } from "../context";
import loading from "../assets/loading.gif";
import { FaRegTrashAlt, FaBookReader } from "react-icons/fa";

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();
  if (isLoading) {
    return (
      <>
        <img src={loading} alt="...loading" />
      </>
    );
  }
  return (
    <div className="stories-div">
      {hits.map((curPost) => {
        const { title, author, objectID, url, num_comments } = curPost;
        return (
          <div className="card" key={objectID}>
            <h2>{title}</h2>
            <p>
              By <span>{author}</span> | <span>{num_comments}</span> comments
            </p>
            <div className="card-button">
              <a href={url} title="read-more">
                <FaBookReader />
              </a> 
              <a title="read-more" className="del-btn" onClick={() => removePost(objectID)} href="#">
                <FaRegTrashAlt />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
