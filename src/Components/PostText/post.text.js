import './post.text.css'
import React, { Component } from 'react'

class PostText extends Component {
    render() {
        return (
            <div id = "postText">
                <input type = "text" id = "submitTextSpot" maxLength = "100" />
                <button id = "submitChatButton">Submit</button>
            </div>
        )
    }
}

export default PostText