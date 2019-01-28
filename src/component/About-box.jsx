
     import React, { Component } from "react";
    
     //  import Services from "./Services";
     
      
      class Aboutbox extends Component{
          render(){
             
     
             var result = this.props.box.map((index, i)=>{
                 return(<div className="box" key={i}>
                
                 <h1>{index.h1}</h1>
                 <p>{index.p}</p>
                 
                 </div>)
             })
 
      return(
         <section className=" section boxx">
             {/* <div className="Blog-title">
                 <h1>UPDATES FROM</h1>
                 <p>Our Blog</p>
             </div> */}
     
     
             <div>{result}</div>
         
         </section>
     
      ) 
          }
      }
      export default Aboutbox;