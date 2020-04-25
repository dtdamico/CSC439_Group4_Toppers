import React from "react";
import { FootNav } from "../navigation/FootNav";

export class Foot extends React.Component {
  render() {
    return (
      <div id="foot">
        <FootNav onClick={this.props.onClick} />
        <div id="copyright">
          &copy;
          {
            "2020: Dylan Damico, Ryan Huffman, Mikaela Perez, and Micah Sidebottom"
          }
        </div>
      </div>
    );
  }
}
