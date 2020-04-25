import React from "react";
import { MenuVisual } from "../visuals/Menu-visual";

export class Menu extends React.Component {
  render() {
    return <MenuVisual start={this.props.start} onClick={this.props.onClick} />;
  }
}
