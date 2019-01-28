
import React, { Component } from "react";
import Navigation from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import Blogs from "./Blog";
import Blogpage from "./Blogpage";
import { Route } from "react-router-dom";
import AboutUs from "./Aboutmain";

class App extends Component{
    render()
    {
return (
    <div>
       <Navigation/>
       <Route exact path="/" component={Home}/>
       <Route path="/Blog" component={Blogs}/>
       <Route path="/Aboutmain" component={AboutUs}/>
       <Route path="/blogPage" component={Blogpage}/>
       <Footer />
          
    </div>
)
    }
}
export default App;