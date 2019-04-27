import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



class Posts extends React.Component{
    constructor(){
        super()
        this.state ={
            posts: []
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => this.setState(()=> ({posts:response.data})))
    }
    render(){
        return(
            <div className='container-fluid'>
                
                <div className="card" style={{width: "50%"}}>
                    <div className="card-header">
                    <h2> Listing Posts - {this.state.posts.length}</h2>
                    </div>
                    <ul className="list-group list-group-flush">
                        {
                            this.state.posts.map(post =>{
                                return (
                                    <li className="list-group-item" key={post.id}><Link to={`/posts/${post.id}`}>
                                    {post.title} </Link></li>
                                )
                            })
                        }
                    </ul>   
                </div>
               
             </div>
        )
    }
}
export default Posts