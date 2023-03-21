import React from "react";

import ett from "../img/1.png"
import två from "../img/2.png"
import tre from "../img/3.png"
import fyra from "../img/4.png"
import fem from "../img/5.png"


class Guide extends React.Component{
    render(){
        return(
            <main>
                <section class="start">
                <div class="info">
                    <h1>SÄLJA BOSTAD - GUIDE TILL ATT SÄLJA BOSTAD</h1>
                </div>
                <div>
                    <p>Hemnets 10 steg till en lyckad bostadsförsäljning</p>
                </div>
                
                <div class="icon1">
                    <img src="img/5290982.png" width="45px" alt=""/>
                    <p>Se värdet av din bostad</p>
                </div>
                <div class="icon2">
                    <img src="img/5290982.png" width="45px" alt=""/>
                    <p>Hitta rätt mäklare</p>
                </div>
                <div class="icon3">
                    <img src="img/5290982.png" width="45px" alt=""/>
                    <p>Stick ut på Hemnet</p>
                </div>
            </section>
            <section class="list-of-object">
                <div class="list-of-info">
                    <img src={ett} width="900px" alt=""/>
                    <img src={två} width="900px" alt=""/>
                    <img src={tre} width="900px" alt=""/>
                    <img src={fyra} width="900px" alt=""/>
                    <img src={fem} width="900px" alt=""/>

                </div>
            </section>
            </main>
        );
    }
}
export default Guide;