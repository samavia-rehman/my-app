
import React, { Component } from "react";

class Services extends Component{
    render(){
return(
    <section className=" section services">
    <div className="section-title">
    <span className="heading">WHAT WE DO</span>
    <p>Our services </p>
    </div>


    <div className="services-group">
    <div className="services-item">
    <div className="icon-round">
    <img src="../img/Icon.png"/>
    </div>
    <div className="services-name">
    <h2> Main courses</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
    </div>
    
    </div>
    <div className="services-item">
    <div className="icon-round">
    <img src="../img/Icon2.png"/>
    </div>
    <div className="services-name">
    <h2> Drinks</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
    </div>
    
    </div>

    <div className="services-item">
       <div className="icon-round">
       <img src="../img/Icon3.png"/>
    </div>
     <div className="services-name">
          <h2> Desserts</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
    </div>
    
    </div>
    </div>
    
    </section>

) 
    }
}
export default Services;