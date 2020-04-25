import React from "react";

export class CateringVisual extends React.Component {
  render() {
    return (
      <div className="pageHeader" onClick={() => this.props.onClick(4)}>
        {"Call your Local Toppers to place a catering order."}
      </div>
    );
  }
}
