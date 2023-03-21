import React from "react";

import vid from "../img/mov.mov"

class Bygga extends React.Component{
    render(){
        return(
            <main>
                <section class="start">
                    <div class="info">
                        <h1>BYGGA NYTT</h1>
                    </div>
                    <div>
                        <p>Hitta tomter, hustillverkare och tips när du ska bygga hus</p>
                    </div>
                    
                    <div class="vid">
                        <video controls src={vid} width="550vw"></video>
                    </div>
                </section>
                <section class="list-of-object">
                    <div class="list-of-info">
                        <img src="img/flow1.png" width="50vw" alt=""/>
                        <img src="img/flow2.png" width="50vw" alt=""/>
                    </div>
                </section>
                <div class="rita" id="Rita"><h2>SKISSA DITT DRÖMHUS</h2></div>
                <div class="rita">Rita nedan</div>

                <div class="canv">
                    <canvas id="canvas"></canvas>
                </div> 
            </main>
        );
    }
}
export default Bygga;