import React from "react";
import { CateringVisual } from "../visuals/Catering-visual";

export class Catering extends React.Component {
  render() {
    return <CateringVisual onClick={this.props.onClick} />;
  }
}
