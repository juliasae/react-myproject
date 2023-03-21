import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/Hemnet_Logo_RGB.png"

class Footer extends React.Component{
    render(){
        return(
            <footer class="footer">
            <div class="l-footer">
                <img src={logo} width="300px" alt=""/>
            </div>
            
            <ul class="r-footer">
                <li>
                    <h2>Kontakt</h2>
                    <ul class="box">
                        <li><NavLink to="/">Kundcervice & Kontakt</NavLink></li>
                        <li><NavLink to="/">Om oss</NavLink></li>
                        <li><NavLink to="/">Press</NavLink></li>
                        <li><NavLink to="/">För investerare</NavLink></li>
                        <li><NavLink to="/">Jobba hos oss</NavLink></li>
                        <li><NavLink to="/">Bostadsstatistik</NavLink></li>
                    </ul>
                </li>
                <li class="socials">
                    <h2>Följ Hemnet</h2>
                    <ul class="box">
                        <li><NavLink to="/">Hemnets nyhetsbrev</NavLink></li>
                        <li><NavLink to="/">Facebook</NavLink></li>
                        <li><NavLink to="/">Instagram</NavLink></li>
                        <li><NavLink to="/">Twitter</NavLink></li>
                        <li><NavLink to="/">Pintrest</NavLink></li>
                    </ul>
                </li>
                <li>
                    <ul class="box1">
                        <li><NavLink to="/">Integritet</NavLink></li>
                        <li><NavLink to="/">Cookies</NavLink></li>
                        <li><NavLink to="/">Vilkor</NavLink></li>
                    </ul>
                </li>
            </ul>
            <div class="b-footer">
                <p>Ansvar utgivare: Jessica Sjöberg &copy;2023 Hemnet AB</p>

            </div>
        </footer>
        );
    }
}
export default Footer;