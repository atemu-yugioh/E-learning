import React, { Component } from "react";
import HeaderContainer from "../Containers/HeaderContainer";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import Footer from "../Components/Footer/Footer";
import Loader from "../Components/Loader/Loader";
import CatchScroll from "../Components/CatchScroll/CatchScroll";

import Fade from "react-reveal/Fade";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import CheckoutContainer from "../Containers/CheckoutContainer";

export default class CheckoutPage extends Component {
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
     * Component: CartPage
     ----------------------------------------**/
  showLoader = () => {
    if (this.state.showLoader) {
      return <Loader />;
    }
    return (
      <Fade bottom>
        <CheckoutContainer />
      </Fade>
    );
  };

  render() {
    let { match } = this.props;

    return (
      <>
        <CatchScroll />

        <HeaderContainer header="header pageheader" />

        <Breadcrumb match={match} name="Checkout" />

        {this.showLoader()}

        <Footer footer="footer footerpage" />

        <ScrollUpButton EasingType="linear" />
      </>
    );
  }
}
