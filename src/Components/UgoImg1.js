import "./ugoimg1.css";

import React, {Component} from "react";

class UgoImg1 extends Component {
    render() {
        return (
            <div className="ugoimage">
    <div className="heading">
      <h1>{this.props.heading}</h1>
      <p>{this.props.text}</p>
    </div>
  </div>
        )
    }
}

export default UgoImg1;
