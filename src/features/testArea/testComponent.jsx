import React, { Component } from "react";
import {connect} from "react-redux"

const mapState =(state)=>({
    data: state.data
})
class TestComponent extends Component {
  render() {
    return <div>
        <h1>test component</h1>
  <h6>the answer is {this.props.data}</h6>
    </div>;
  }
}

export default connect(mapState)(TestComponent);
