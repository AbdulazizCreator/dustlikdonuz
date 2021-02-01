import React from "react";
import { BiCommentDetail } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import "./More.scss";
import { dataCommit } from "./dataCommit";
import { dataNews } from "./dataNews";

const MoreInfo = () => {
  return (
    <section id="moreInfo">
      <div className="container-lg">
        <div className="row">
          <div className="col-12 col-lg-8 bg-white p-3 article-left">
            <div className="d-flex ">
              <div className="col-4 px-0 d-flex align-items-center">
                <a href="/">Jamiyat haqida</a>
              </div>
              <div className="about d-flex justify-content-between col-8 align-items-center">
                <div className="d-flex align-items-center">
                  <MdDateRange />
                  <span>16:48 / 12.11.20</span>
                </div>

                <div className="d-flex align-items-center">
                  <AiFillEye />
                  <span>321</span>
                </div>
                <div className="d-flex align-items-center">
                  <BiCommentDetail />
                  <span>100</span>
                </div>
              </div>
            </div>
            <h2 className="py-4">
              Eksport qiluvchi tadbirkorlik subektlariga!!!
            </h2>
            <p>
              “O‘zdonmaxsulot” aksiyadorlik kompaniyasi tizim korxonalari
              tomonidan istisno tariqasida maxalliy tadbirkorlik sub'ektlariga
              eksport qilish sharti bilan birja savdolari orqali bug’doy
              sotilmoqda. Bug’doy 2019 yil 1 sentyabrgacha 1 tonnasining
              boshlangich narxi qo‘shilgan qiymat solig’isiz 1 610 000 so‘mdan,
              qo‘shilgan qiymat solig’ini xisobga olgan xolda 1 932 000 so‘mdan
              sotiladi. Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan
              qiymat soligi stavkasini qo‘llash natijasida xosil bo‘lgan
              qo‘shilgan qiymat soligining ortiqcha summasi Adliya vazirligi
              tomonidan 2016 yil 7 aprelda 2775-son bilan ro‘yxatga olingan
              Nizomga asosan qaytarib beriladi.
            </p>
            <div className="d-flex justify-content-between">
              <h3>Mavzuga izohlar</h3>
              <h4>2 ta fikr</h4>
            </div>
            <div className="comment d-flex">
              <div className="commentImg">
                <img src="Rectangle 64.png" alt="" />
              </div>
              <div className="commentInput flex-grow-1">
                <input
                  type="text"
                  className="w-100 d-flex justify-content-start"
                  placeholder="Izoh qoldirishingiz mumkin"
                />
              </div>
            </div>
            {dataCommit.map((item) => (
              <div className="comment d-flex">
                <div className="commentImg">
                  <img src="Rectangle 64.png" alt="" />
                </div>
                <div className="commentInput flex-grow-1 d-flex justify-content-between flex-column">
                  <h5 className="mb-0">{item.name}</h5>
                  <p className="mb-0">{item.comment}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <img src="/images/heart.svg" alt="" />
                    <p className="mb-0 flex-grow-1 pl-5 ">Javob qaytarish</p>
                    <p className="mb-0">{item.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="article-right col-12 col-lg-4 pl-0 mt-lg-0 mt-5 pl-lg-4 pr-0 d-flex flex-column justify-content-between">
            <div className="inner bg-white p-3">
              <h3>Media</h3>
              {dataNews.map((item) => (
                <div className="cardNew mt-4">
                  <div className="row px-0 justify-content-between">
                    <div className="col-6 d-flex align-items-center">
                      <MdDateRange />
                      <span>16:48 / 12.11.20</span>
                    </div>
                    <div className="col-6">
                      <a href="/" className="text-right d-block">
                        {item.categ}
                      </a>
                    </div>
                    <div className="col-12">
                      <p>{item.name}</p>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
            <div className="myGovUz py-4 mt-lg-0 mt-4">
              <h4 className="text-center">
                Shikoyat mavjudmi ? <br />
                Online tarzda yuboring !
              </h4>
              <img
                src="images/image 11.png"
                alt=""
                className="m-auto d-block"
              />
              <h4 className="text-center">
                Davlat interaktiv xizmatlari yagona portali
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
