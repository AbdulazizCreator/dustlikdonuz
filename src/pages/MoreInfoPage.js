import React from 'react'
import Header from '../components/Header/Header';
import MoreInfo from '../components/MoreInfo/MoreInfo';
import News from '../components/News/News'
import Footer from '../components/Footer/Footer'

const MoreInfoPage = () => {
   return (
     <React.Fragment>
       <Header />
       <MoreInfo />
       <News />
       <Footer />
     </React.Fragment>
   );
}

export default MoreInfoPage
