import React from "react";
import { NavLink} from "react-router-dom";

import logga from "../img/hemnet.png"
import hamb from "../img/hamb.png"

class Header extends React.Component{
    render(){
        return(
            <section class="header">
                    <img class="hamburg" src={hamb} width="30px" height="30px" alt=""/>
                    <img class="logo" src={logga} width="80px" alt=""/>
                    <ul class="menu">
                        <li><NavLink to="/"><p>KÖPA BOSTAD</p></NavLink></li>
                    </ul>
                    <ul class="menu">
                        <li><NavLink to="/slutpris"><p>SLUTPRIS</p></NavLink></li>
                    </ul>
                    <ul class="menu">
                        <li> <NavLink to="/salja-bostad"><p>SÄLJA BOSTAD</p></NavLink></li> 
                    </ul>
                    <ul class="menu">
                        <li><NavLink to="/hitta-maklare"><p>HITTA MÄKLARE</p></NavLink></li>
                    </ul>
                    <ul class="menu">
                        <li><NavLink to="/nyheter"><p>NYHETER</p></NavLink></li>
                    </ul>
                    <ul class="menu">
                        <li><NavLink to="/bygga-nytt"><p>BYGGA NYTT</p></NavLink></li>
                    </ul>
                    <ul class="menu">
                        <li><NavLink to="/nyproduktion"><p>NYPRODUKTION</p></NavLink></li>
                    </ul>
                    <ul class="menu">
                        <li><NavLink to="/logga-in"><p>LOGGA IN</p></NavLink></li>
                    </ul>
                </section>
        );
    }
}
export default Header;