import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import userimg from '../images/userimg.jpeg'

class PostShow extends React.Component {
    constructor(props){
        super(props)
        this.state={
            post:{},
            posts:[],
            user:{},
            comments:[],
            selectedId: this.props.match.params.id       
        }
        this.TogglePrev = this.TogglePrev.bind(this);
        this.ToggleNext = this.ToggleNext.bind(this);
    }
    componentDidMount(){
      //  const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.selectedId}`)
                  .then(response => this.setState(()=> {
                      const post = response.data
                    const u_id = response.data.userId
                    axios.get(`https://jsonplaceholder.typicode.com/users/${u_id}`)
                               .then(response => this.setState(()=> ({post, user: response.data})))                     
                  }))
        

        axios.get(`https://jsonplaceholder.typicode.com/comments/?postId=${this.state.selectedId}`)
                   .then(response => this.setState(()=> ({ comments: response.data})))
                   axios.get("https://jsonplaceholder.typicode.com/posts")
                   .then(response => this.setState(()=> ({posts:response.data})))

        //  let promise = Promise.all([promise1, promise2, promise3]);

        // promise
        // // .then(function(response){
        // //     console.log(response)
        // // })
        //  .then(response => this.setState(()=> ({ post: response[0].data, user: response[1].data,comments: response[2].data})))
        // .catch(function(error) {
        //     console.error('error', error);
        // });
    }


    ToggleNext=(e)=> {
       e.preventDefault()
        if(this.state.selectedId === this.state.posts.length - 1){
            return 'invalid';
        }else{
            return(

        this.setState(prevState => ({
            selectedId: prevState.selectedId + 1
        })))
    }
           
    }

    TogglePrev=(e) =>{
        if(this.state.selectedId === 0)
         return

        this.setState(prevState => ({
            selectedId: prevState.selectedId - 1
        }))
    }

    render(){
       // console.log(this.state.post)
      // console.log(this.state.selectedId)
     //  console.log(this.state.posts.length)
        return(
            <div className='container-fluid'>
                <h2> postId - {this.props.match.params.id}</h2>
                <b>Title:</b> {this.state.post.title}<br></br><br></br>
                <b>Body:</b> {this.state.post.body} <br></br><br></br>
                <b>Author:</b> <Link to={`/user/${this.state.user.id}`}>
                                    {this.state.user.name}
                                </Link><br></br><br></br>


                <b>Comments:</b><br></br>
                {
                    this.state.comments.map(comment =>{
                    return (
                        <div className="card mb-3" style={{width:" 540px"}}>
                            <div className="row no-gutters">
                                <div className="col-md-4" style={{padding:"40px"}}>
                                    <img src={userimg} className="card-img" alt="..."/><br></br>
                                   
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                    
                                        <div>
                                        
                                            <h5 className="card-title"> <b>Name:</b> {comment.name}</h5>
                                            <p className="card-text"> <b>Email: </b>{comment.email}</p>
                                            <p className="card-text">  <b>Comment: </b>{comment.body}</p>
                                            
                                        </div> 
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    )              
                })}
           
              

                <button  onClick={this.TogglePrev}>Prev</button>
                <button  onClick={this.ToggleNext}>Next</button>

            </div>
        )
    }
}
export default PostShow