import React, { Component } from "react";



class Footer extends Component{
    render(){
return(
 <div className="footer">
        <div className="logo">
            <img src="../img/airirestaurant..png"/>
        </div>
        <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-linkedin-in"></i>
        </div>
        <h1>Get news&offers</h1>
        <p>Join our mailing list to receive news and announcements</p>
            
            <div className="input">
                <input type="email"  placeholder="email"></input>
            </div>
            <div className="submit">
                <input type="submit" value="Sign Up"></input>
            </div>

            <ul className="list">
                <li>PRIVACY POLICY</li>
                <li>TERMS OF SERVICE</li>
                <li>RESERVATIONS</li>
                <li>MENU</li>
            </ul>

            <p className="end">
           Vvork Cloud Technologies &copy; All Rights Reseaved 2018
            </p>
            
 </div>
) 
    }
}
export default Footer;