import React from 'react'
import Slider from "react-slick";
import './Carousel.scss';

const Carousel = () => {
     var settings = {
       dots: true,
     };
   return (
     <div className="carouselSlider">
       <Slider {...settings}>
         <div className="imgBox">
           <img src="images/Rectangle 4.png" alt="" />
           <div className="innerBox">
             <img src="images/image 8.png" alt="" />
             <h3>
               O`ZBEKISTON RESPUBLIKASI "O`ZDONMAXSULOT" AKSIYADORLIK
               KOMPANIYASI "DO`STLIKDONMAXSULOTLARI" AKSIYADORLIK JAMIYATI
             </h3>
           </div>
         </div>
         <div className="imgBox">
           <img src="images/Rectangle 4.png" alt="" />
           <div className="innerBox">
             <img src="images/image 8.png" alt="" />
             <h3>
               O`ZBEKISTON RESPUBLIKASI "O`ZDONMAXSULOT" AKSIYADORLIK
               KOMPANIYASI "DO`STLIKDONMAXSULOTLARI" AKSIYADORLIK JAMIYATI
             </h3>
           </div>
         </div>
         <div className="imgBox">
           <img src="images/Rectangle 4.png" alt="" />
           <div className="innerBox">
             <img src="images/image 8.png" alt="" />
             <h3>
               O`ZBEKISTON RESPUBLIKASI "O`ZDONMAXSULOT" AKSIYADORLIK
               KOMPANIYASI "DO`STLIKDONMAXSULOTLARI" AKSIYADORLIK JAMIYATI
             </h3>
           </div>
         </div>
       </Slider>
     </div>
   );
}

export default Carousel
