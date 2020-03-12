import React, { Component } from "react";
import { connect } from "react-redux";
import { callData } from "../actions";

export class User extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.callData();
  }

  render() {
    return (
      <ul>
        {this.props.users.map(el => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.remoteUsers.slice(0, 10)
  };
}

export default connect(mapStateToProps, { callData })(User);
