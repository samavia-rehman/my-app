
import React, { Component } from "react";
import AOS from 'aos';
class Testimonials extends Component{
    
    render(){
        AOS.init();

return(
  <div className="section testimonials">
        <div className="testimonials-title">
                <h1>
                    What our clint say
                </h1>
                <h2>Testimonials</h2>
        </div>
                <div className="boxone" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000">
                <img src="../img/t1.png"/>
                <p>Lorem ipsum dolor sit amet,
                     consectetur adipiscing elit. Ut elit tellus,
                      luctus nec ullamcorper.</p>
                      <h1>Jhon Deo</h1>
                      <h5>Designer</h5>
                </div>

                <div className="boxtwo">
                <img src="../img/t2.png"/>
                <p>Lorem ipsum dolor sit amet,
                     consectetur adipiscing elit. Ut elit tellus,
                      luctus nec ullamcorper.</p>
                      <h1>Jhon Deo</h1>
                      <h5>Designer</h5>
                </div>
         


  </div>

) 
    }
}
export default Testimonials;