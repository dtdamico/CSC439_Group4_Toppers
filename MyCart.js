import React from "react";

const tax = 0.06;

export class MyCart extends React.Component {
  currencyFormat(num) {
    let n = +num;
    return "$" + n.toFixed(2).replace("/(/d)(?=(/d{3})+(?!/d))/g", "$1,");
  }
  render() {
    return (
      <div className="pageBody">
        {this.props.list ? (
          <div className="menuItemGroup">
            <div id="items">
              <div id="itemsTitle">{"Your Cart:"}</div>
              {this.props.list}
            </div>
            <div id="cart">
              <label htmlFor="subtotal">{"Subtotal"}</label>
              <p id="subtotal">{this.currencyFormat(this.props.total)}</p>
              <hr />
              <label htmlFor="tax">{"Tax"}</label>
              <p id="tax">{this.currencyFormat(this.props.total * tax)}</p>
              <hr />
              <label htmlFor="total">{"Total"}</label>
              <p id="total">
                {this.currencyFormat(this.props.total * (1 + tax))}
              </p>
            </div>
          </div>
        ) : (
          <div>{"Looks like your cart is empty!"}</div>
        )}
      </div>
    );
  }
}
