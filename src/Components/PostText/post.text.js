import "./post.text.css";
import React, { Component } from "react";
import { connect } from "react-redux";

class PostText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

  render() {
    return (
      <div id="postText">
        <input
          type="text"
          id="submitTextSpot"
          maxLength="100"
          placeholder="Type your message here..."
          onChange = {this.handleChange}
        />
        <button id="submitChatButton">Submit</button>
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
