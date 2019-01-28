
     import React, { Component } from "react";
    
 
    
     
     class Blogpage extends Component{
         render(){
            let box=[{
                url:"../img/food-salad-healthy-lunch.jpg",
                date:"JULY 12, 2018",
                p: "Ut finibus lectus lorem, sed sollicitudin",
                btn:"UNCATEGORIZED",
                h1:"by vlad",
                pg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, magna consectetur pharetra molestie, sem metus facilisis metus, sed egestas",
                btn2:"Read More"
            },
        
            {
                url:"../img/food-salad-restaurant-person.jpg",
                date:"JULY 12, 2018",
                p: "Ut finibus lectus lorem, sed sollicitudin",
                btn:"UNCATEGORIZED",
                h1:"by vlad",
                pg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, magna consectetur pharetra molestie, sem metus facilisis metus, sed egestas",
                btn2:"Read More"
            },
            {
                url:"../img/pexels-photo-769289.jpeg",
                date:"JULY 12, 2018",
                p: "Ut finibus lectus lorem, sed sollicitudin",
                btn:"UNCATEGORIZED",
                h1:"by vlad",
                pg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, magna consectetur pharetra molestie, sem metus facilisis metus, sed egestas",
                btn2:"Read More"
            },
            {
                
                date:"JULY 12, 2018",
                p: "Hello World!",
                btn:"UNCATEGORIZED",
                h1:"by vlad",
                pg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, magna consectetur pharetra molestie, sem metus facilisis metus, sed egestas",
                btn2:"Read More"
            }

        ]
    
            var result = box.map((index, i)=>{
                return(<div className="box" key={i}>
                <div className="pic">
                    <img src={index.url}/>
                </div>
                <h1>{index.date}</h1>
                <p>{index.p}</p>
                <button>{index.btn}</button>
                <h4>{index.h1}</h4>
                <p className="pg">{index.pg}</p>
                <button className="btn">{index.btn2}</button>
                </div>)
            })

     return(
        <section className=" section Blogpage">
           
    
    
            <div>{result}</div>
        
        </section>
    
     ) 
         }
     }
     export default Blogpage;