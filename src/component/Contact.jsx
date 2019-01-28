
     import React, { Component } from "react";
    
     //  import Services from "./Services";
     
      
      class Contact extends Component{
          render(){
             
     
             var result = this.props.Contact.map((index, i)=>{
                 return(<div className="Contact" key={i}>
                
                 <h5>{index.Contact.title}</h5>
                 <h1>{index.Contact.heading}</h1>
                 <p className="one">{index.Contact.Adress}</p>
                 <p className="two">{index.Contact.Time}</p>
                 <p className="three">{index.Contact.Book}</p>
                 </div>)
             })
 
      return(
         <section className=" section Contact">
            
     
     
             <div>{result}</div>
         
         </section>
     
      ) 
          }
      }
      export default Contact;