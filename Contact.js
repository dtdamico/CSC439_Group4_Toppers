import React from "react";

export class Contact extends React.Component {
  render() {
    return (
      <div className="pageBody">
        <div className="pageTitle">{"Contact Us"}</div>
        <div className="menuItemGroup">
          <div className="menuItemTitle">{"Contact Corporate"}</div>
          <div className="flavor">
            <div className="flavorInfo">
              <div className="flavorTitle">{"Toppers World Headquarters"}</div>
              <div className="flavorDesc">
                <p>{"333 W. Center St."}</p>
                <p>{"Whitewater, WI 53190"}</p>
                <p>{"Phone: 262-473-6666"}</p>
                <p>{"Old-school fax: 262-473-6697"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="menuItemGroups">
          <button
            className="menuItemTitle"
            style={{ color: "black", width: "100%" }}
            onClick={() => this.props.onClick(4)}
          >
            {"Contact a Local Toppers Here"}
          </button>
        </div>
      </div>
    );
  }
}
