import React from "react";
import ReactDOM from "react-dom";
//import events from "./eventData.json";

function Login(){
    return (<>
    <br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br>
    <main>
            <div class="leftp">
              <label>Userid: </label>
              <input type="text" name="name" id="userid" required minLength="4" maxLength="8" size="10"/>
              <br></br>
              <label>Password:</label>
              <input type="password" name="password" id="password" required minLength="5" maxLength="10"/>
          </div>
              
              <div class="center">
              <button type = "button">Login</button>
              </div><br></br>
              </main>
    </>
      );
}

    export default Login;