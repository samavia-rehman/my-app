import React, { Component } from "react";
import AboutStory from "./Aboutstory";
import Aboutbox from "./About-box";

class AboutUs extends Component{
    render(){
        let text=[{
            text:"Who we are",
            pone:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non scelerisque justo, id scelerisque velit. Cras non scelerisque justo, id scelerisque velit. Aliquam eget ligula libero. Suspendisse ac sollicitudin mi. Quisque ullamcorper fermentum tempus.",
            ptwo:"Aliquam ornare, lectus eget varius vehicula, velit quam posuere nulla, mattis commodo dolor dolor et mauris. Suspendisse in eros enim. Pellentesque molestie euismod dui. Donec ullamcorper orci pulvinar augue pulvinar, vulputate eleifend metus pharetra. Donec eget posuere velit",
            url:"../img/sign.png"
        }]

        var response = text.map((index, i)=>{
            return(<div className="text" key={i}>
            
            <h1>{index.text}</h1>
            <p className="para">{index.pone}</p>
            <p className="pg">{index.ptwo}</p>
            <div className="sign"><img src={index.url}/></div>

            </div>)
        })
return(
    <div>
    <div className="section about-hero">
          <div>{response}</div>

          <div className="pic">
          <img src="../img/food-salad-healthy-lunch.jpg"/>
          </div>
    
     </div>

     </div>
) 
    }
}
export default AboutUs;