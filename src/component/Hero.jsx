
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Hero extends Component{
    render(){

        
var a=this.props.hero;
        var response =a.map((index, i)=>{
            
            return(<div className="hero-title" key={i}>
            <h1>{index.arr.name}</h1>
            <p>{index.arr.abc}</p>
            <button>{index.arr.btn}</button>
            </div>)
        })
return(
<section className="section hero">
<div>{response}</div>
</section>

) 
    }
}
export default Hero;