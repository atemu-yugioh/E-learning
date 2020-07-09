import React, { Component } from "react";
import HeaderContainer from "../Containers/HeaderContainer";
import Footer from "../Components/Footer/Footer";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import Blog from "../Components/Blog/Blog";
import Loader from "../Components/Loader/Loader";

import Fade from "react-reveal/Fade";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import CatchScroll from "../Components/CatchScroll/CatchScroll";

export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: true,
    };
  }

  //set thoi gian cho preloader
  componentDidMount() {
    this.setTime = setTimeout(() => {
      this.setState({
        showLoader: false,
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.setTime);
  }

  /**----------------------------------------
     * Function: An hien loader
     * Component: BlogPage
     ----------------------------------------**/
  showLoader = () => {
    if (this.state.showLoader) {
      return <Loader />;
    }
    return (
      <Fade bottom>
        <Blog />
      </Fade>
    );
  };

  render() {
    let { match } = this.props;

    return (
      <>
        <CatchScroll />

        <HeaderContainer header="header pageheader" />

        <Breadcrumb match={match} name="blog" />

        {this.showLoader()}

        <Footer footer="footer footerpage" />

        <ScrollUpButton EasingType="linear" />
      </>
    );
  }
}
