
import React, { Component } from "react";
import {img} from "./Data";

class Gallery extends Component{
    state={
        data:img
    }
    render(){
        

        var result = this.state.data.map((a,b)=>{
            return(<div className="box" key={b}>
            <div className="img"><img src={a.url}/></div>
           
            </div>)
        })
    

return(
  <div className="section Gallery">
        <div className="Gallery-title">
                <span className="heading">
                WHAT WE DO
                </span>
                <p>Food Gallery </p>

                <div>{result}</div>

                
        </div>


  </div>

) 
    }
}
export default Gallery;