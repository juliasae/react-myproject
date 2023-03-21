import React from "react";


import villa from "../img/villa.png"
import radhus from "../img/radhus.png"
import fritid from "../img/fritid.png"
import gardar from "../img/gardar.png"
import lagenhet from "../img/lagenhet.png"
import tomt from "../img/tomt.png"
import skog from "../img/skog.png"
import ovrigt from "../img/ovrigt.png"
import hus from "../img/hus.png"
import hus2 from "../img/hus2.png"
import hus3 from "../img/hus3.png"
import hus4 from "../img/hus4.png"




class Slutpris extends React.Component{
    render(){
        return( 
        <main>
            <div class="container">
                
                <h1>SLUTPRIS</h1>
    
                <section class="serch-keyword">
                    <div class="sercher">
                            <input type="search" id="holder" placeholder="sök område, kommun, stad, ect..."/>
                    </div>
                </section>
                
        
                <section class="img">
                    <img id="image1"class="img-grid" src={villa} width= "100px" alt=""  onclick="changeImage1()"/>
                    <img id="image2" class="img-grid" src={radhus} width="100px" alt="" onclick="changeImage2()"/>  
                    <img id="image3" class="img-grid" src={fritid} width= "100px" alt="" onclick="changeImage3()"/>
                    <img id="image4" class="img-grid" src={lagenhet} width= "100px" alt="" onclick="changeImage4()"/> 
                    <img id="image5" class="img-grid" src={tomt} width= "100px" alt="" onclick="changeImage5()"/> 
                    <img id="image6" class="img-grid" src={gardar} width= "100px" alt="" onclick="changeImage6()"/> 
                    <img id="image7" class="img-grid" src={skog} width= "100px" alt="" onclick="changeImage7()/"/>
                    <img id="image8"class="img-grid" src={ovrigt} width= "100px" alt="" onclick="changeImage8()"/>
                </section>
    
                <section class="rbp">
                    <div class="rum-bo-pris">
                        <div><p>ANTAL RUM</p></div>
                    </div>
                    <div class="rum-bo-pris">
                        <div><p>1-10</p></div>
                    </div>
                    <div class="rum-bo-pris">
                        <div> <p>BOAREA (KVM)</p></div>
                    </div>
                    <div class="rum-bo-pris">
                        <div><p>20-250+</p></div>
                    </div>
                    <div class="rum-bo-pris">
                        <div><p>PRIS (SEK)</p></div>
                    </div>
                    <div class="rum-bo-pris">
                        <div><p>100 000-20 000 000</p></div>  
                    </div>
                </section>
                <div class="middle">
                    <div class="multi-range-slider">
                        <input type="range" id="input-left" min="0" max="100" value="25"/>
                        <input type="range" id="input-right" min="0" max="100" value="75"/>
                        <section class="rbp2">
                            <div class="rum-bo-pris">
                                <div><p>ANTAL RUM</p></div>
                                <div><p>1-10</p></div> 
                            </div>
                        </section>
                
                        <div class="slider">
                            <div class="track"></div>
                            <div class="range"></div>
                            <div class="thumb left"></div>
                            <div class="thumb right"></div>
                        </div>
                        <section class="rbp2">
                            <div class="rum-bo-pris">
                                <div> <p>BOAREA (KVM)</p></div>
                                <div><p>20-250+</p></div>
                            </div>
                        </section>
                        <div class="slider">
                            <div class="track"></div>
                            <div class="range"></div>
                            <div class="thumb left"></div>
                            <div class="thumb right"></div>
                        </div>
                        <section class="rbp2">
                            <div class="rum-bo-pris">
                                <div><p>PRIS (SEK)</p></div>
                                <div><p>100 000-20 000 000</p></div>  
                            </div>
                        </section>
                        <div class="slider">
                            <div class="track"></div>
                            <div class="range"></div>
                            <div class="thumb left"></div>
                            <div class="thumb right"></div>
                        </div>
                    </div>
                </div>

                <section class="rbP">
                    <div class="rum-bo-pris">
                        <div><p>SLUTPRIS</p></div>
                    </div>
                    <div class="rum-bo-pris">
                        <div><p>100 000-20 000 000</p></div>
                    </div>
                </section>
                <section class="rbp3">
                    <div class="rum-bo-pris">
                        <div> <p>SLUTPRIS</p></div>
                        <div><p>100 000-20 000 000</p></div>
                    </div>
                </section>
                <div class="multi-range-slider1">
                    <input type="range" id="input-left" min="0" max="100" value="25"/>
                    <input type="range" id="input-right" min="0" max="100" value="75"/>
    
                    <div class="slider">
                        <div class="track"></div>
                        <div class="range"></div>
                        <div class="thumb left"></div>
                        <div class="thumb right"></div>
                    </div>   
                </div>
                    
                
    
                <section class="serch-keyword">
                    <div class="sercher">
                        <input type="search" id="holder" placeholder="sök nyckel ord, ex. pool, kakelugn, hiss, etc..."/>
    
                    </div>
                </section>
    
                <section class="keywords">
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                </section>
    
                <ul class="flow" id="floww">
                    <li><a href="#/"><img id="img" src={hus} alt=""/></a></li>
                    <li><a href="#/"><img id="img" src={hus2} alt=""/></a></li>
                    <li><a href="#/"><img id="img" src={hus3} alt=""/></a></li>
                    <li><a href="#/"><img id="img" src={hus} alt=""/></a></li>
                    <li><a href="#/"><img id="img" src={hus4} alt=""/></a></li>
                    <li><a href="#/"><img id="img" src={hus4} alt=""/></a></li>
                    <li><a href="#/"><img id="img" src={hus4} alt=""/></a></li>
                    <li><a href="#/"><img id="img" src={hus4} alt=""/></a></li>
                    <li><a href="#/"><img id="img" src={hus4} alt=""/></a></li>
                    <li><a href="#/"><img id="img" src={hus4} alt=""/></a></li>
                    <li><a href="#/"><img id="img" src={hus4} alt=""/></a></li>
                    <li><a href="#/"><img id="img" src={hus4} alt=""/></a></li>
    
                </ul>
            </div>
        </main>
        
        );
    }
}

export default Slutpris;