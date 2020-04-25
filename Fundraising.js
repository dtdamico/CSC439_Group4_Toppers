import React from "react";
import { FundraisingVisual } from "../visuals/Fundraising-visual";

export class Fundraising extends React.Component {
  render() {
    return <FundraisingVisual onClick={this.props.onClick} />;
  }
}
