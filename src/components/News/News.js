import React from "react";
import Slider from "react-slick";
import { data } from "./data";
import "./news.scss";
import {BiCommentDetail} from 'react-icons/bi'
import {MdDateRange} from 'react-icons/md'
import {AiFillEye} from 'react-icons/ai'
import { Link } from "react-router-dom";
import { LightgalleryProvider } from "react-lightgallery";  
import { LightgalleryItem } from "react-lightgallery";
const News = () => {
  const settings = {
    slidesToShow: 3,
    responsive: [
       {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
       },
      {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
       }
   ]};
  return (
    <section id="news">
      <div className="news container px-0">
        <h1>Yangiliklar</h1>
        <Slider {...settings}>
          {data.map((item) => (
            <div className="newsItem" key={item.id}>
              <LightgalleryProvider>
                <LightgalleryItem src={item.imgSrc}>
                  <img src={item.imgSrc} alt="" />
                </LightgalleryItem>
              </LightgalleryProvider>

              <div className="imgInform">
                <div className="about d-flex justify-content-between">
                  <div>
                    <MdDateRange />
                    <span>{item.date}</span>
                  </div>

                  <div>
                    <AiFillEye />
                    <span>{item.view}</span>
                  </div>
                  <div>
                    <BiCommentDetail />
                    <span>{item.comments}</span>
                  </div>
                </div>
                <h5>{item.name}</h5>
                <p>{item.inform}</p>
                <Link to="/maqolalar">Batafsil</Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default News;
