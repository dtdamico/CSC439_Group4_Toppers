import React from "react";
import Deal1 from "../../photos/Home Page Deals/deal1.jpg";
import Deal2 from "../../photos/Home Page Deals/deal2.jpg";
import Deal3 from "../../photos/Home Page Deals/deal3.jpg";
import Deal4 from "../../photos/Home Page Deals/deal4.jpg";

export class HomeVisual extends React.Component {
  render() {
    return (
      <div id="deals">
        <img src={Deal1} alt="deal1" height="175px" width="auto" />
        <img src={Deal2} alt="deal2" height="175px" width="auto" />
        <img src={Deal3} alt="deal3" height="175px" width="auto" />
        <img src={Deal4} alt="deal4" height="175px" width="auto" />
      </div>
    );
  }
}
