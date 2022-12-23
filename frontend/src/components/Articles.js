import React from "react";
import "./articles.css";

const Articles = ({ item }) => {
  const { publishedAt } = item;
  const date = publishedAt.split("T", 1);

  return (
    <div className="article">
      <img src={item.urlToImage} alt="img" />
      <span style={{ textAlign: "left" }}>{date}</span>
      <h2 style={{ margin: "0px" }}>{item.author}</h2>
      <p>{item.title}</p>
    </div>
  );
};

export default Articles;
