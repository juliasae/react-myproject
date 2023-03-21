import React from "react";

class Loggain extends React.Component{
    render(){
        return(
            <main>
                 <section class="window">
                    <div class="login-window">
                        <h2>LOGGA IN</h2>
                        <div><p>Fyll i inloggningsuppgifterna</p></div>
                        <form method="post">
                            <div class="txt_field">
                                <input type="text" required/>
                                <span></span>
                                <label>E-post</label>
                            </div>
                            <div class="txt_field">
                                <input type="text" required/>
                                <span></span>
                                <label>Lösenord</label>
                            </div>
                            <div class="pass">Glömt lösenord?</div>
                            <input type="submit" value="Logga in"/>
                            <div class="signuplink">
                                Inte medlem? <a href="https://zealous-pond-0f3cf6403.2.azurestaticapps.net/bli-medlem.html">Bli medlem</a>
                            </div>
                        </form>
                    </div>
                </section>  
            </main>
        );
    }
}
export default Loggain;