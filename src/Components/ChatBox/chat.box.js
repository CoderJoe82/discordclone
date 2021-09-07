import "./chat.box.css";
import React, { Component } from "react";
import { connect } from "react-redux";

class ChatBox extends Component {
  render() {
    return (
      <div id="chatBox">
        {/* <MessageBlock /> Map the redux state with these in props.*/}
        {this.props.posts.length > 10
          ? this.props.posts.shift(this.props.posts[0]) &&
            this.props.posts.map((post) => {
              return post;
            })
          : this.props.posts.map((post) => {
              return post;
            })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         dispatch,
//     }
// }

export default connect(mapStateToProps)(ChatBox);
