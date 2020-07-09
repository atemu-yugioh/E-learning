import React, { Component } from "react";
import { connect } from "react-redux";

import Popular from "../Components/Popular/Popular";
import PopularItem from "../Components/Popular/PopularItem";

class PopularContainer extends Component {
  render() {
    let { courses } = this.props;

    return <Popular>{this.showPopularItem(courses)}</Popular>;
    // <Popular>{this.showPopularItem(courses)}</Popular>
    // return <Popular item={this.showPopularItem(courses)} />;
  }

  /**----------------------------------------
     * Function: Mapping Popular Item
     * Component: Popular
     ----------------------------------------**/
  showPopularItem = (courses) => {
    let result = [];
    if (courses && courses.length > 0) {
      for (let index = 0; index < 16; index++) {
        result.push(<PopularItem key={index} course={courses[index]} />);
      }
    }
    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

export default connect(mapStateToProps, null)(PopularContainer);
