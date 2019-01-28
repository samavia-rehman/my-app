
import React, { Component } from "react";
import Aboutus from "./About-hero";
import AboutStory from "./Aboutstory";
import Aboutbox from "./About-box";
import Formm from "./filter";
import Booking from "./Booking";


class Aboutmain extends Component{
    state={
        box:[{
            h1:"Philosophy",
            p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id dolor vel ante vehicula porta. Aliquam fringilla mollis ultrices. Curabitur gravida elit et erat ullamcorper pharetra. Suspendisse mattis augue ac augue tincidunt, eu pretium nunc posuere."
          },
      
          {
             h1:"Vision",
            p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id dolor vel ante vehicula porta. Aliquam fringilla mollis ultrices. Curabitur gravida elit et erat ullamcorper pharetra. Suspendisse mattis augue ac augue tincidunt, eu pretium nunc posuere."
          },
          {
             h1:"Policy",
             p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id dolor vel ante vehicula porta. Aliquam fringilla mollis ultrices. Curabitur gravida elit et erat ullamcorper pharetra. Suspendisse mattis augue ac augue tincidunt, eu pretium nunc posuere."
          }
      ]
    }

    render(){
        

       

return(
   <div>
       <Aboutus  />
       <AboutStory />
        <Aboutbox box={this.state.box}/>
        <Booking />
        <Formm />
        
   </div>

) 
    }
}
export default Aboutmain;