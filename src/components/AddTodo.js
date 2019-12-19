import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    // intialize the state
    title: ""
  };

  //onChange = e => this.setState({ title: e.target.value });
  // use the targets name="title" instead of specifying, enables reusability for other fields
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);

    // clear field
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this.onChange}
          style={{ flex: "9", padding: "5px" }}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
