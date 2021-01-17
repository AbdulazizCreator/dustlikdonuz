import React from "react";
import Slider from "react-slick";
import { data } from "./data";
import "./ComNews.scss";
import { BiCommentDetail } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

const ComNews = () => {
  const settings = {
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section id="comNews">
      <div className="news container px-0">
        <h1>Korxona Yangiliklari</h1>
        <Slider {...settings}>
          {data.map((item) => (
            <div className="newsItem" key={item.id}>
              <img src={item.imgSrc} alt="" />
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
                <button>Batafsil</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ComNews;
