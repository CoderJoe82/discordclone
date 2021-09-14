import "./post.text.small.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { SET_SUBMIT_POST } from '../../../Redux/types/types'

class PostTextSmall extends Component {
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
    if (this.props.posts.length > 15) {
      this.props.posts.shift();
      this.props.dispatch({
        type: SET_SUBMIT_POST,
        payload: this.state.inputValue,
      });
    } else {
      this.props.dispatch({
        type: SET_SUBMIT_POST,
        payload: this.state.inputValue,
      });
    }

    const textInput = document.getElementById("submitTextSpotSmall");

    textInput.value = "";
  };

  render() {
    return (
      <div id="postTextSmall">
        <input
          type="text"
          id="submitTextSpotSmall"
          maxLength="100"
          placeholder="Type your message here..."
          onChange={this.handleChange}
        />
        <button id="submitChatButtonSmall" onClick={this.handleSubmitPostText}>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostTextSmall);
