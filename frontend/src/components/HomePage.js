import React from "react";
import axios from "axios";
import { api } from "./Api";
import { useState, useEffect } from "react";
import HomeNav from "./HomeNav";
import "./homepage.css";
import News from "./News";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${api}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("erer", err);
      });
  }, []);

  return (
    <div>
      <HomeNav />
      <h1 style={{ textAlign: "left" }}>Featured Article</h1>
      <News data={data} />
    </div>
  );
};

export default HomePage;
