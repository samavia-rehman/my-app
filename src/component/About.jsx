
import React, { Component } from "react";


class About extends Component{
    render(){
       

       

        var response = this.props.about.map((a, index)=>{
            return(<div className="About-title" key={index}>
            <h5>{a.array.heading}</h5>
            <h1>{a.array.h1}</h1>
            <p>{a.array.p1}</p>
            <p>{a.array.p2}</p>
            <button>{a.array.btn}</button>
            </div>)
        })
return(
    <section className=" section About">
   {response}

   <div className="img">
   <img src="../img/about.jpg"/>
   </div>
    
    </section>

) 
    }
}
export default About;