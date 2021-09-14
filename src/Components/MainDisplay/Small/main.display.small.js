import './main.display.small.css'
import React, { Component } from 'react'
import ChatBoxSmall from '../../ChatBox/Small/chat.box.small'
import PostTextSmall from '../../PostText/Small/post.text.small'

class MainDisplaySmall extends Component {
    render() {
        return (
            <div id = "displaySpotSmall">
                <h3>Basic Discord Clone</h3>
                <ChatBoxSmall />
                <PostTextSmall />
            </div>
        )
    }
}

export default MainDisplaySmall