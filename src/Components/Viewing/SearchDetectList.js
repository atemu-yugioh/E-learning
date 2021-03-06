import React, { Component } from "react";

export default class SearchDetectList extends Component {
  render() {
    return (
      <>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <h3 className="title mt-5">Because you searched for "react"</h3>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 viewing__content">
          <div className="product__items d-flex justify-content-between">
            {this.props.children}
          </div>
        </div>
      </>
    );
  }
}
