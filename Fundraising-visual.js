import React from "react";

export class FundraisingVisual extends React.Component {
  render() {
    return (
      <div className="pageBody">
        <div className="pageHeader">{"Fundraising"}</div>
        <div className="menuItemGroup" style={{ color: "white" }}>
          <p>
            {
              "Hard as it is to believe, some things matter more than pizza. We believe helping the community is one of those things. To that effect, we do our part the best way we know how. We also make it our business to help organizations big and small throughout our communities by tailoring specific programs to meet their financial needs. From new uniforms to scholarship funds, we’ve helped to raise hundreds and thousands of dollars."
            }
          </p>
          <a
            href="https://www.toppers.com/Portals/0/Documents/dough-nation%20request%20form.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            {"Click here for the request form"}
          </a>
          <br />
          <button onClick={() => this.props.onClick(4)}>
            {"Click here to find a Local Toppers"}
          </button>
        </div>
      </div>
    );
  }
}
