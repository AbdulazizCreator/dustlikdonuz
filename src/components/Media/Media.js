import React from "react";
import Slider from "react-slick";
import { mediaData } from "./mediaData";
import { photoData } from "./photoData";
import { videoData } from "./videoData";
import "./media.scss";
import { BiCommentDetail } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const News = () => {
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
    <section id="news">
      <div className="news container px-0">
        <h1>Media</h1>
        <Tabs>
          <TabList>
            <Tab>Barchasi</Tab>
            <Tab>Photo Gallery</Tab>
            <Tab>Video Gallery</Tab>
          </TabList>
          <TabPanel>
            <Slider {...settings}>
              {mediaData.map((item) => (
                <div className="newsItem" key={item.id}>
                  <img src={item.imgSrc} alt="" />
                  <div className="imgInform">
                    <h5 className="mt-3">{item.inform}</h5>
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
                  </div>
                </div>
              ))}
            </Slider>
          </TabPanel>
          <TabPanel>
            <Slider {...settings}>
              {photoData.map((item) => (
                <div className="newsItem" key={item.id}>
                  <img src={item.imgSrc} alt="" />
                  <div className="imgInform">
                    <h5 className="mt-3">{item.inform}</h5>
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
                  </div>
                </div>
              ))}
            </Slider>
          </TabPanel>
          <TabPanel>
            <Slider {...settings}>
              {videoData.map((item) => (
                <div className="newsItem" key={item.id}>
                  <img src={item.imgSrc} alt="" />
                  <div className="imgInform">
                    <h5 className="mt-3">{item.inform}</h5>
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
                  </div>
                </div>
              ))}
            </Slider>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default News;
