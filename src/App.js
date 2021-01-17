import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import News from './components/News/News';
import ComNews from './components/ComNews/ComNews';
import Reklama from './components/Reklama/Reklama';
import Media from './components/Media/Media';
import Xizmatlar from './components/Xizmatlar/Xizmatlar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <News />
        <ComNews /> 
        <Reklama />
        <Media />
        <Xizmatlar />
        <Switch>
        <Footer />
          <Route path='home' components={Home} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
