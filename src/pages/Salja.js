import React from "react";
import { NavLink } from "react-router-dom";

class Salja extends  React.Component{
    render(){
        return(
            <main>
                <h1>SÄLJA BOSTAD</h1>

                <ul class="boxen">
                    <li><NavLink to="/guide-till-att-salja"><div class="guide"><h3>Guide till att sälja hus</h3></div></NavLink></li>
                    <li><NavLink to="/"><div class="annonsera"><h3>Annonsera på Hemnet</h3></div></NavLink></li>
                </ul>  
            </main>
        );
    }
}
export default Salja;