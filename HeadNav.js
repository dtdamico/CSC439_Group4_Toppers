import React from "react";

export class HeadNav extends React.Component {
  render() {
    const navList = ["Menu", "Catering", "Gift Cards", "Locations"];
    var navigation = [];
    for (let i = 0; i < navList.length; ++i) {
      navigation.push(
        <button key={i} onClick={() => this.props.onClick(i + 1)}>
          {navList[i]}
        </button>
      );
    }
    return <nav>{navigation}</nav>;
  }
}
