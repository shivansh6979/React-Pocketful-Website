import React from "react";
import Articles from "./Articles";

import "./news.css";

const News = ({ data }) => {
  console.log("data", data);

  return (
    <div className="grid-news">
      {data?.articles?.map((item, index) => {
        return <Articles key={index} item={item} />;
      })}
    </div>
  );
};

export default News;
