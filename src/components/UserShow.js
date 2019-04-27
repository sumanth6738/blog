import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[],
            user:{}           
        }
    }
    componentDidMount(){
    const id = this.props.match.params.id
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => this.setState(()=> ({ user: response.data})))

    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(response => this.setState(()=> ({ posts: response.data})))

    }

render(){
   
    return(
        <div> 
            <div><br></br></div>
            <fieldset>
            <legend><b>About Author:</b></legend><br></br>
            <b>Name: </b>{this.state.user.name}<br></br>
            <b>Email:</b> {this.state.user.email}
            </fieldset>
            <br></br><br></br>
            <fieldset>
            <legend><b>Posts:</b></legend>
            {this.state.posts.map(post =>{
                    return (
                        <ol>
                            <li key={post.id}> 
                                <b>Title:</b> <Link to={`/posts/${post.id}`}>{post.title}</Link><br></br>
                               
                            </li> 
                        </ol>
                    )              
                })}
                </fieldset>
                
        </div>
    )
}
}
export default UserShow
