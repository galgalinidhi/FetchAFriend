import React from "react";
import './Login.css'


function Login() {
    
    const handlesubmit = () => {
      console.log("Login Clicked!")
    };

    return (
    <div>
        <div className="container">
            
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            
            <div className="form">
                <div className="input">
                    <input type= "text" placeholder="Username"/> 
                </div>
                
                <div className="input">
                    <input type= "email" placeholder="Email"/> 
                </div>
            </div>



            <div className="submitform">
                <button className="submit" onClick={handlesubmit}>Login</button>
            </div>   
        </div>  

           
    
    </div>
    );
};
export default Login;