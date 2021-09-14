import './message.block.small.css'
import React, { Component } from 'react'

class MessageBlockSmall extends Component {

    render() {
        return (
            <div id = "messageBlocksSmall">
                <p>{this.props.messageText}</p>
            </div>
        )
    }
}

export default MessageBlockSmall