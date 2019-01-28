
import React, { Component } from "react";


class Booking extends Component{
    render(){
       

       

    
return(
    <section className=" section booking">
        <h1>Table Booking Form</h1>
        <form>
            <input type="text" Value="Name"/>
            <input type="email" Value="Email"/>
            <input type="tel" Value="Phone Number"/><br/>
            {/* <h2>Booking Date & Time</h2> */}
            <input type="datetime-local" value="Booking Date & Time"/><br/>
            {/* <h2>Number of Adults</h2> */}
            <input type="text" value="Number of Adult"/><br/>
            {/* <h2>Number of Children</h2> */}
            <input type="text" value="Number of Children"/>
            <button>RESERVE A TABLE</button>
        </form>
   
    </section>

) 
    }
}
export default Booking;