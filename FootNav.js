import React from "react";

export class FootNav extends React.Component {
  render() {
    const footList = [
      "Career",
      "About",
      "Grand Openings",
      "Fundraising",
      "Contact",
    ];
    var footer = [];
    for (let i = 0; i < footList.length; ++i) {
      footer.push(
        <button key={i} onClick={() => this.props.onClick(i + 5)}>
          {footList[i]}
        </button>
      );
    }
    return <nav>{footer}</nav>;
  }
}
