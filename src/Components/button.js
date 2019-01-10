import React, {Component} from 'react'

class Button extends Component {

    state = {
        text:""
    }

    handleClick = () => {
        this.setState({
            text: 'JUST CLICKED the Button !'
        })
    }



    render () {
        return (
            <button onClick={this.handleClick}>{this.state.text || this.props.text}</button>)
    }
}

export default Button