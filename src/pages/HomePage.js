import React from 'react'
import Header from '../components/Header/Header'
import News from '../components/News/News'
import ComNews from '../components/ComNews/ComNews'
import Reklama from '../components/Reklama/Reklama'
import Media from '../components/Media/Media'
import Xizmatlar from '../components/Xizmatlar/Xizmatlar'
import Footer from '../components/Footer/Footer'
import Carousel from '../components/Carousel/Carousel'
const HomePage = () => {
   return (
     <React.Fragment>
       <Header />
       <Carousel />
       <News />
       <ComNews />
       <Reklama />
       <Media />
       <Xizmatlar />
       <Footer />
     </React.Fragment>
   );
}

export default HomePage
