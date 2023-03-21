import React from "react";

class Member extends React.Component{
    render(){
        return(
            <main>
                <section class="window">
                <div class="login-window">
                    <h1>BLI MEDLEM</h1>
                    <div><p>Skapa konto</p></div>
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
                        <input type="submit" value="Bli medlem"/>
                    </form>
                </div>
            </section>
            </main>
        );
    }
}
export default Member;