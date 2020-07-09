import React, { Component } from "react";
import CatchScroll from "../Components/CatchScroll/CatchScroll";
import HeaderContainer from "../Containers/HeaderContainer";
import Search from "../Components/Search/Search";
import Feature from "../Components/Feature/Feature";
import PopularContainer from "../Containers/PopularContainer";
import ViewingContainer from "../Containers/ViewingContainer";
import Countdown from "../Components/Countdown/Countdown";
import Teacher from "../Components/Teacher/Teacher";
import Offer from "../Components/Offer/Offer";
import OurBlog from "../Components/OurBlog/OurBlog";
import Testimonial from "../Components/Testimonial/Testimonial";
import Footer from "../Components/Footer/Footer";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";

export default class HomePage extends Component {
  render() {
    let { history } = this.props;
    return (
      <div className="wrapper">
        <CatchScroll />
        <HeaderContainer header="header" />
        <Search history={history} />
        <Feature />
        <PopularContainer />
        <ViewingContainer />
        <Countdown />
        <Teacher />
        <Offer />
        <OurBlog />
        <Testimonial />
        <Footer footer="footer" />
        <ScrollUpButton EasingType="linear" />
      </div>
    );
  }
}
