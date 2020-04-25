import React from "react";
import { HeadNav } from "../navigation/HeadNav";
import ToppersPizza from "../photos/Branding/Toppers-Pizza.png";
import CheckoutCart from "../photos/Branding/checkout_cart_white.png";

export class Head extends React.Component {
  render() {
    const finalHead = (
      <div id="head">
        <div id="headNav">
          <img
            src={ToppersPizza}
            height="inherit"
            width="auto"
            alt="Toppers Logo"
            id="logoPic"
            onClick={() => this.props.onClick(0)}
          />
          <HeadNav onClick={this.props.onClick} />
        </div>
        <div id="user-box">
          <img
            src={CheckoutCart}
            height="30px"
            width="auto"
            alt="Order Cart"
            onClick={() => this.props.onClick(10)}
          />
          {this.props.isStarted ? (
            <button onClick={() => this.props.onClick(10)}>
              {"$" +
                this.props.total
                  .toFixed(2)
                  .replace("/(/d)(?=(/d{3})+(?!/d))/g", "$1,")}
            </button>
          ) : (
            <button onClick={() => this.props.onClick(1)}>
              {"Begin Food Journey!"}
            </button>
          )}
          {this.props.isSignedIn ? (
            <button onClick={() => this.props.signOut()}>{"Sign-Out"}</button>
          ) : (
            <button onClick={() => this.props.onClick(11)}>{"Sign-In"}</button>
          )}
        </div>
      </div>
    );
    return finalHead;
  }
}
