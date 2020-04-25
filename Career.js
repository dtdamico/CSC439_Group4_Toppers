import React from "react";
import { CareerVisual } from "../visuals/Career-visual";

export class Career extends React.Component {
  render() {
    return <CareerVisual onClick={this.props.onClick} />;
  }
}
