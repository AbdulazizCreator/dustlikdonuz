import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Adminpage from "./pages/Adminpage";
import MoreInfoPage from "./pages/MoreInfoPage";
import { ToastContainer } from "react-toastify";
import AdminNews from "./components/AdminPage/AdminNews/AdminNews";
import AdminMenu from "./components/AdminPage/AdminMenu/AdminMenu";
import Notfound from "./components/Notfound";
import PrivateRoute from "./components/PrivateRoute";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/category/:url" component={CategoryPage} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/admin" component={Adminpage} />
          <PrivateRoute exact path="/admin/news" component={AdminNews} />
          <PrivateRoute exact path="/admin/menu" component={AdminMenu} />
          <Route exact path="/maqolalar" component={MoreInfoPage}></Route>
          <Route component={Notfound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
