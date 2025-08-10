import React from "react";
import './title.css';

function LandingPage({onLogin}){
    return(
        <div>
            <img src="/logo.svg" alt="Spotifindify Logo" className="title-logo" />
            <h1 className="title-heading">Spotifindify</h1>
            <button onClick={onLogin}>Log In</button>
        </div>    
    )

}


export default LandingPage;