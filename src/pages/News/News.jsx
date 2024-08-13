import React from "react";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import Rightside from "../RightsideNav/Rightside";
import { useParams } from "react-router-dom";

const News = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md : grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-4xl">News details </h2>
          <p>{id}</p>
        </div>

        <div>
          <Rightside></Rightside>
        </div>
      </div>
    </div>
  );
};

export default News;
