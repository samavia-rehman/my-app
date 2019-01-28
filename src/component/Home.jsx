import React, { Component } from "react";
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Menu from './Menu';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import Blog from './Blog';
import Contact from './Contact';
import Hello from './hello';
import {array} from './Data';


class Home extends Component{
   state={
        data:array
   }
    render(){
return(
    <div>
        <Hero hero={this.state.data}/>
        <About  about={this.state.data} />
        <Services />
        <Menu />
        <Testimonials />
        <Gallery />
        <Hello />
        <Blog  Box={this.state.data}/>
        <Contact Contact={this.state.data}/>
        
</div>
) 
    }
}
export default Home;