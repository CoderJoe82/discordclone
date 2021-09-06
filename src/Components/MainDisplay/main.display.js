import './main.display.css'
import React, { Component } from 'react'
import PostText from '../PostText/post.text'
import ChatBox from '../ChatBox/chat.box'

class MainDisplay extends Component {
    render() {
        return (
            <div id = "displaySpot">
                <ChatBox />
                <PostText />
            </div>
        )
    }
}

export default MainDisplay