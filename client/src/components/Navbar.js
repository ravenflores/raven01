import React,{useContext,useState,useEffect} from 'react'
import "../App.css"
import {Link,useHistory} from 'react-router-dom'
import { UserContext } from '../App'
import M from 'materialize-css'
import TemporaryDrawer from './Drawer'



function Navbar() {

  

  const {state,dispatch} = useContext(UserContext)
  const history = useHistory()
  const renderList = () => {
    if(state){
      return [
        <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/createpost">Create Post</Link></li>,
        <li><Link to="/myfollowingpost">My Following</Link></li>,
        <li  style = {{marginRight:"15px"}}>
           <button className="btn #c62828 red darken-3"
                onClick = {()=>{
                  localStorage.clear()
                  dispatch({type:"CLEAR"})
                  history.push('/login')
                }}

               
                >Log Out</button>
        </li>
      ]
    }else{
        return[
          <li><Link to="/login">Login</Link></li>,
          <li><Link to="/signup">Sign Up</Link></li>
        ]
    }
  }
    return (
        <div>
             <nav>
    <div className="nav-wrapper white">
      {state?
     <ul className="sidenav-trigger"><TemporaryDrawer /></ul>:null
      }
    <Link to={state? "/":"/login"} className="brand-logo left">Instagram</Link>
      <ul id="nav-mobile" className="right">
        {renderList()}
      </ul>
    </div>  

    
  </nav>

  <ul id="slide-out" className="sidenav">
    <li><div className="user-view">
      <div className="background">
        <img src={state?state.photo:"https://images.unsplash.com/photo-1522039553440-46d3e1e61e4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" }/>
      </div>
      <a href="#user"><img className="circle" src={state?state.photo:"https://images.unsplash.com/photo-1522039553440-46d3e1e61e4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"} /></a>
      <a href="#name"><span className="black-text name">{state?state.name:null}</span></a>
      <a href="#email"><span className="black-text email">{state?state.email:null}</span></a>
    </div></li>
 
    <li><Link to="/">Home</Link></li>
    <li><Link to="/profile">Profile</Link></li>
    <li><Link to="/createpost">Create Post</Link></li>
    <li><Link to="/myfollowingpost">Following</Link></li>
    <li><div className="divider"></div></li>
    <li>
           <button id="log-out" className="btn #c62828 red darken-3"
                onClick = {()=>{
                  localStorage.clear()
                  dispatch({type:"CLEAR"})
                  history.push('/login')
                }} 
                >Log Out</button>
    </li>
  </ul>
     
        </div>
    )


 
  
}

export default Navbar