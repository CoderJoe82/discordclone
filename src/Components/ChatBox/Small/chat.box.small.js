import "./chat.box.small.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import MessageBlockSmall from "../../MessageBlock/Small/message.block.small";

class ChatBoxSmall extends Component {

  render() {
    return (
      <div id="chatBoxSmall">
          {
              this.props.posts.map((post) => {
                return <MessageBlockSmall messageText = {post} key = {Math.floor(new Date().getTime() * (Math.random() * 890484948543890))}/>
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

export default connect(mapStateToProps)(ChatBoxSmall);
