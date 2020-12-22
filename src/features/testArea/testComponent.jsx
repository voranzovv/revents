import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { incrementCounter, decrementCounter } from "./testActions";

const mapState = (state) => ({
  data: state.test.data,
});
const actions = {
  incrementCounter,
  decrementCounter,
};
class TestComponent extends Component {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>test component</h1>
        <h6>the answer is {data}</h6>
        <Button onClick={incrementCounter} positive content="Increment" />
        <Button onClick={decrementCounter} negative content="Decrement" />
      </div>
    );
  }
}

export default connect(mapState, actions)(TestComponent);
