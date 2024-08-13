import React from "react";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import LeftsideNav from "../shared/LeftsideNav/LeftsideNav";
import Rightside from "../RightsideNav/Rightside";
import BrakingNews from "./BrakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header></Header>
      <BrakingNews></BrakingNews>
      <Navbar></Navbar>
      <h2 className="text-3xl font-poppins font-bold"> This is Home </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div>
          <LeftsideNav></LeftsideNav>
        </div>

        <div className="col-span-2">
          {news.map((aNews) => (
            <NewsCard key={aNews._id} news={aNews}></NewsCard>
          ))}
        </div>


        <div>
          <Rightside></Rightside>
        </div>
      </div>
    </div>
  );
};

export default Home;
