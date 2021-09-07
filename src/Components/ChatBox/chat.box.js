import "./chat.box.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import MessageBlock from "../MessageBlock/message.block";

class ChatBox extends Component {

  render() {
    return (
      <div id="chatBox">
          {
              this.props.posts.map((post) => {
                return <MessageBlock messageText = {post} key = {Math.floor(new Date().getTime() * (Math.random() * 890484948543890))}/>
              })
          }
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
