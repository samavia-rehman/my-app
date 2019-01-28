
    import React, { Component } from "react";
    import Blogpage from "./Blogpage";
    import {box} from "./Data";

     
 
    
     
     class Blogs extends Component{
         state={
             data:box
         }
         render(){
            
    
            var result = this.state.data.map((index, i)=>{
                return(<div className="box" key={i}>
                <div className="pic">
                    <img src={index.url}/>
                </div>
                <h1>{index.date}</h1>
                <p>{index.p}</p>
                <button>{index.btn}</button>
                <h4>{index.h1}</h4>
                </div>)
            })

     return(
        <section className=" section Blog">
            <div className="Blog-title">
                <h1>UPDATES FROM</h1>
                <p>Our Blog</p>
            </div>
    
    
            <div>{result}</div>
        
        </section>
        
     ) 
         }
     }
     export default Blogs;