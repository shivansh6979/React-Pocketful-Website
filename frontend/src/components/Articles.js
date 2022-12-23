import React from "react";
import "./articles.css";

const Articles = ({ item }) => {
  return (
    <div className="article">
      <img src={item.urlToImage} alt="img" />
      <span style={{ textAlign: "left" }}>{item.publishedAt}</span>
      <h2 style={{ margin: "0px" }}>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
};

export default Articles;
