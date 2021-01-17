import React from "react";
import { data } from "./data";
import './xizmatlar.scss'

const Xizmatlar = () => {
  return (
    <section id="Xizmatlar">
      <div>
        <div className="xizmatlar container d-flex flex-md-row flex-column">
          {data.map((item) => (
            <div key={item.id} className="siteBox d-flex align-items-center flex-column">
              <img src={item.img} alt="" />
              <p className="text-center">{item.name}</p>
              <h3>{item.hoverName}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Xizmatlar;
