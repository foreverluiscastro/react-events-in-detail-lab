// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
    render() {
        return (
            <div>
                <button onClick={ this.props.setTimeout((event) => {
                    this.props.onDelayedClick()
                }, this.props.delay)}></button>
            </div>
        )
    }
}
