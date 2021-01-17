import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {BiPhone} from 'react-icons/bi'
import './Footer.scss'

const Footer = () => {
   return (
     <section id="footer">
       <div className="footer container">
         <div className="row">
           <div className="col-12 col-sm-6 col-md-3 d-flex align-items-center flex-column">
             <h3>Dustlikdon.uz</h3>
             <p>
               Jizzax viloyati do‘stlik tumani Sanoatchilar MFY Sanoat ko‘chasi
               49
             </p>
           </div>
           <div className="col-12 col-sm-6 col-md-3 d-flex align-items-center flex-column">
             <h3>Asosiy</h3>
             <p>Jamiyat haqida</p>
             <p>Struktura</p>
             <p>Yangiliklar</p>
           </div>
           <div className="col-12 col-sm-6 col-md-3 d-flex align-items-center flex-column">
             <h3>Xizmatlar</h3>
             <p>Elektron murojaatlar</p>
             <p>Interaktiv xizmatlar</p>
             <p>Saytdan izlash</p>
           </div>
           <div className="col-12 col-sm-6 col-md-3 d-flex align-items-center flex-column">
             <h3>Bog’lanish</h3>
             <p>
               <BiPhone />
               998 71 335 41 16
             </p>
             <p>
               <AiOutlineMail />
               info@dustlikdon.uz
             </p>
           </div>
         </div>
       </div>
     </section>
   );
}

export default Footer
