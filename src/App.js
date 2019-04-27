import React, { Component } from 'react';


import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home  from './components/Home.js'
import Posts from './components/Posts'
import AuthorList from './components/AuthorList'
import PostShow from './components/PostShow'
import UserShow from './components/UserShow.js';





class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-8'>
              <h1>Blog</h1> 
            </div>
      
            <div className='col-md-4 text-right'>
            <Link to="/" > Home </Link> || 
            <Link to="/posts"> Posts</Link> || 
            <Link to="/authors"> Authors</Link> 
            </div>
            <br></br><br></br>
            <hr/>
        
          
        
            <Route path="/" component = {Home} exact={true} />
            <Route path="/authors" component = {AuthorList} exact={true}/>
            <Route path="/posts" component = {Posts} exact={true}/>
            <Route path='/posts/:id' component = {PostShow}/>
            <Route path='/user/:id' component = {UserShow}/>
        
           
          </div>
        </div>
      </BrowserRouter>
      
    )
  }
}
export default App;
