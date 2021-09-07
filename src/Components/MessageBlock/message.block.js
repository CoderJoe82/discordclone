import './message.block.css'
import React, { Component } from 'react'

class MessageBlock extends Component {

    render() {
        return (
            <div id = "messageBlocks">
                <p>{this.props.messageText}</p>
            </div>
        )
    }
}

export default MessageBlock