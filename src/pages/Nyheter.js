import React from "react";

import arrowl from "../img/arrow-left.png"
import arrowr from "../img/arrow-right1.png"
import bs1 from "../img/bs1.jpeg"
import bs2 from "../img/bs2.jpeg"
import bs3 from "../img/bs3.jpeg"
import bs4 from "../img/bildspel4.jpeg"

class Nyheter extends React.Component{
    render(){
        return(
            <main>
                <h1>NTHETER</h1>
            
                <div class="slider-outer">
                    <img class="prev" src={arrowl}  width="20px" height="20px" alt=""/>
                    <div class="slider-inner">
                        <img src={bs1} class="active" alt=""/>
                        <img src={bs2} alt=""/>
                        <img src={bs3} alt=""/>
                        <img src={bs4} alt=""/>
                    </div>
                    <img class="next" src={arrowr}  width="20px" height="20px" alt=""/>
                </div>

                <div id="toggle">SE SENASTE NYHETERNA HÄR</div>
                <div id="content">Det finns inga senaste nyheter just nu...</div>
            </main>
        );
    }
}
export default Nyheter;