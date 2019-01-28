
import React, { Component } from "react";
import {menu} from "./Data";

class Menu extends Component{
    state={
        data:menu
    }
    render(){
       
        var response = this.state.data.map((index, i)=>{
            return(<div className="list" key={i}>
            <div className="img"><img src={index.url}/></div>
            <h1>{index.h1}</h1>
            <p>{index.p}</p>
            <h5>{index.h5}</h5>
            </div>)
        })
      
return(
    <section className=" section Menu">
        <div className="head">
        <div className="se">
            <h5>WEEKLY SPECIALS</h5>
            <h1>Our menu</h1>
            <button>SEE THE MENU</button>
            </div>
            <div>{response}</div>
        </div>

        
    </section>

) 
    }
}
export default Menu;