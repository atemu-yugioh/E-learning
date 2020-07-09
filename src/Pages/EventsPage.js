import React, { Component } from "react";
import HeaderContainer from "../Containers/HeaderContainer";
import Event from "../Components/Event/Event";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import Fade from "react-reveal/Fade";
import CatchScroll from "../Components/CatchScroll/CatchScroll";

export default class EventsPage extends Component {
  render() {
    return (
      <>
        <CatchScroll />

        <HeaderContainer header="header" />

        <Fade bottom>
          <Event />
        </Fade>

        <ScrollUpButton EasingType="linear" />
      </>
    );
  }
}
