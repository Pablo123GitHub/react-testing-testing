import React, {Component} from 'react'
import axios from 'axios'

class Users extends Component {

    state = {
        data: []
    }

   async componentDidMount () {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        )
        this.handleGet(response);
    }

    handleGet = (response) => {
        this.setState(this.stateUpdater(response))
    }

    stateUpdater = (response) => {
        return {
            data: response.data
        }
    }

    
    
    render(){
        return (
            <ul>
                {this.state.data.map(user => (
                    <li key={user.name}>{user.name}</li>
                ) )}

            </ul>
        )
    }


}

export default Users;
