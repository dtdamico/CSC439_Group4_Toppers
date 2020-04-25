import React from "react";
import { About } from "./About";
import { Career } from "./containers/Career";
import { Catering } from "./containers/Catering";
import { Contact } from "./Contact";
import { Fundraising } from "./containers/Fundraising";
import { GiftCards } from "./GiftCards";
import { GOEvents } from "./containers/GOEvents";
import { Home } from "./containers/Home";
import { Locations } from "./containers/Locations";
import { Menu } from "./containers/Menu";
import { MyCart } from "./MyCart";
import { Login } from "./Login";

export class Body extends React.Component {
  render() {
    return (
      <div id="body">
        {this.props.page === 0 ? (
          <Home />
        ) : this.props.page === 1 ? (
          <Menu start={this.props.start} onClick={this.props.onOrder} />
        ) : this.props.page === 2 ? (
          <Catering onClick={this.props.onClick} />
        ) : this.props.page === 3 ? (
          <GiftCards />
        ) : this.props.page === 4 ? (
          <Locations />
        ) : this.props.page === 5 ? (
          <Career onClick={this.props.onClick} />
        ) : this.props.page === 6 ? (
          <About />
        ) : this.props.page === 7 ? (
          <GOEvents />
        ) : this.props.page === 8 ? (
          <Fundraising onClick={this.props.onClick} />
        ) : this.props.page === 9 ? (
          <Contact onClick={this.props.onClick} />
        ) : this.props.page === 10 ? (
          <MyCart list={this.props.list} total={this.props.total} />
        ) : this.props.page === 11 ? (
          <Login auth={this.props.auth} isSignedIn={this.props.isSignedIn} />
        ) : (
          <h1>{"Error 404: Not found"}</h1>
        )}
      </div>
    );
  }
}
