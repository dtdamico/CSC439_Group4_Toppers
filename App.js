import React from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Head } from "./header/Head";
import { Body } from "./body/Body";
import { Foot } from "./footer/Foot";
import "./Toppers.css";

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccess: () => false,
  },
};

firebase.initializeApp({
  apiKey: "AIzaSyCd63Bv9E35Pv-k5xR_rxo6XW6OhPfY_bo",
  authDomain: "project-toppers.firebaseapp.com",
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      isSignedIn: false,
      isOrderStarted: false,
      orderList: [],
      orderTotal: 0,
    };
    this.startOrder = this.startOrder.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
    });
  }

  startOrder() {
    this.setState({
      isOrderStarted: true,
    });
  }

  handleOrder(item, price, amount = 1) {
    let list = this.state.orderList;
    list.push(item);
    var total = this.state.orderTotal;
    total += price * amount;
    this.setState({
      orderList: list,
      orderTotal: total,
    });
  }

  handlePage(p) {
    if (this.state.page !== p) {
      if (this.state.isOrderStarted && this.state.orderTotal === 0) {
        this.setState({
          isOrderStarted: false,
        });
      }
      this.setState({
        page: p,
      });
    }
  }
  handleSignOut() {
    firebase.auth().signOut();
    if (this.state.isSignedIn) {
      this.setState({
        isSignedIn: !this.state.isSignedIn,
      });
    }
    this.handlePage(0);
  }

  render() {
    return (
      <div id="wrapper">
        <Head
          onClick={this.handlePage}
          signOut={this.handleSignOut}
          isSignedIn={this.state.isSignedIn}
          isStarted={this.state.isOrderStarted}
          start={this.startOrder}
          list={this.state.orderList}
          total={this.state.orderTotal}
        />
        <Body
          auth={
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          }
          page={this.state.page}
          onClick={this.handlePage}
          onOrder={this.handleOrder}
          isStarted={this.state.isOrderStarted}
          start={this.startOrder}
          list={this.state.orderList}
          total={this.state.orderTotal}
        />
        <Foot onClick={this.handlePage} />
      </div>
    );
  }
}

export default App;
