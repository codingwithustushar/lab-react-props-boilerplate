import { Component } from "react";
import "./App.css"


export default class AppClass extends Component{
  
 
  // code here
    render(){
      this.data = this.props.props;

    let galleyStyle = {
      textAlign: "center",
      
    }
    let styleMydiv = {
      display: "grid",
      gridTemplateColumns:"repeat(2,1fr)",
      margin:"20px",
      gap:"100px",
      placeItems: "center"
  
    }
    return(
    <>
    <h1 style ={galleyStyle}>Kalvium Gallery</h1>

<div style={styleMydiv}> 
  <img src = {this.data[0].img} width={"400px"}/>
  <img src = {this.data[1].img} width={"400px"}/>
  <img src = {this.data[2].img} width={"400px"}/>
  <img src = {this.data[3].img} width={"400px"}/>
</div>
    </>
    
  )
    }
  }
