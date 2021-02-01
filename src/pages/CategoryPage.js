import React, { Component } from "react";
import { AiFillEye } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
// import News from "../components/News/News";
import Xizmatlar from "../components/Xizmatlar/Xizmatlar";
import { getNewsByMenu } from "../redux/actions/adminNewsAction";

class CategoryPage extends Component {
  componentDidMount() {
    this.props.getNewsByMenu(this.props.match.params.url);
  }
  render() {
    return (
      <div>
        <Header />
        {this.props.newsByMenu.map((item) => (
          <div className="newsItem" key={item.id}>
            <img src={item.imgSrc} alt="" />
            <div className="imgInform">
              <div className="about d-flex justify-content-between">
                <div>
                  <MdDateRange />
                  <span>{item.createdAt}</span>
                </div>

                <div>
                  <AiFillEye />
                  <span>{item.viewCount}</span>
                </div>
                <div>
                  <BiCommentDetail />
                  <span>{item.comments}</span>
                </div>
              </div>
              <h5>{item.titleUz}</h5>
              <p>{item.descriptionUz}</p>
              <Link to="/maqolalar">Batafsil</Link>
            </div>
          </div>
        ))}
        <Xizmatlar />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newsByMenu: state.news.newsByMenu,
  };
};

export default connect(mapStateToProps, { getNewsByMenu })(CategoryPage);
