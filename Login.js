import React from "react";

export class Login extends React.Component {
  render() {
    return this.props.isSignedIn ? (
      <div>{"Welcome to Toppers!"}</div>
    ) : (
      this.props.auth
    );
  }
}
