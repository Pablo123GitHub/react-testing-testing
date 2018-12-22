import React, {Component} from 'react'

class Button extends Component {

    state = {
        text:""
    }

    handleClick = () => {
        this.setState({
            text: 'JUST CLICKED BRO !'
        })
    }


    render () {
        return (
            <div>HEY THIS IS MY BUTTON COMPONENT</div>
        )
    }
}

export default Button