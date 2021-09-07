import "./post.text.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { SET_SUBMIT_POST } from "../../Redux/types/types";

class PostText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmitPostText = () => {
    this.props.dispatch({
      type: SET_SUBMIT_POST,
      payload: this.state.inputValue,
    });

    const textInput = document.getElementById("submitTextSpot");

    textInput.value = "";
  };

  render() {
    return (
      <div id="postText">
        <input
          type="text"
          id="submitTextSpot"
          maxLength="100"
          placeholder="Type your message here..."
          onChange={this.handleChange}
        />
        <button id="submitChatButton" onClick={this.handleSubmitPostText}>
          Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostText);
