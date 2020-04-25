import React from "react";
import { GOEventsVisual } from "../visuals/GOEvents-visual";

const f50 = [];

export class GOEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currF50: 0, display: 0 };
    this.interval = null;
    this.handleClick = this.handleClick.bind(this);
    this.nextF50 = this.nextF50.bind(this);
  }

  handleClick(d) {
    if (this.state.display !== d) {
      this.setState({ display: d });
    }
  }

  nextF50() {
    let curr = this.state.currF50;
    let next = ++curr % f50.length;
    this.setState({ currF50: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextF50, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <GOEventsVisual
        display={this.state.display}
        src={f50[this.state.currF50]}
        onClick={this.handleClick}
      />
    );
  }
}
