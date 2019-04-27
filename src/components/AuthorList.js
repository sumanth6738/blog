import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class AuthorList extends React.Component {
    constructor(){
        super()
        this.state={
            users:[]          
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => this.setState(()=> ({users:response.data})))
    }
    render(){
        return(
            <div>
                
                <h2> Listing Authors - {this.state.users.length}</h2>
                    <ul>
                        {this.state.users.map(user =>{
                            return (
                            <li key={user.id}><Link to={`/user/${user.id}`}>
                            {user.name} </Link></li>
                            )
                        })}
                    </ul>
            </div>
        )
    }
}
export default AuthorList