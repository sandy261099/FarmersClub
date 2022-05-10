import React from "react";
import ReactDOM, { render } from "react-dom";
//import events from "./eventData.json";

class Membership extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userid:"", 
      email:"", 
      password:"", 
      comments:"",
      dialogClass:"hide"
  }
  }

submitApplication(){
  this.setState({dialogClass: "show"})
}
render(){
    let message = null;
    if(this.state.password.length < 3){
      message = <p>Password is too short</p>
    }
    else{
      message = 
      <p>
        Welcome <em>{this.state.userid}</em>,{" "}
        Your Email id is <em>{this.state.email}</em>,{" "}
        Your comments are: <em>{this.state.comments}</em>
      </p>
    }
    return (<>
        <br></br><br></br><br></br><br></br>
    <main>
        <div className="leftp">
              <br></br><br></br><br></br><br></br>
              <div className="containers">
              <label><b>Userid:</b></label>
              <input 
              type="text" 
              name="name" 
              id="userid" 
              required minLength="4" 
              maxLength="10" 
              value={this.state.userid}
              onInput={(event) => this.setState({ userid: event.target.value })}/>
              <label><b>Email: </b></label>
              <input 
              type="email" 
              name="email" 
              id="email" 
              required
              value={this.state.email}
              onInput={(event) => this.setState({ email: event.target.value })}
              />
              <label><b>Password:</b></label>
              <input 
              type="password" 
              name="password" 
              id="password" 
              required minLength="5" 
              maxLength="8" 
              size="10"
              value={this.state.password}
              onInput={(event) => this.setState({ password: event.target.value })}
              />
            </div>
              <br></br>
            <div className="leftp">
              <label><b>Comments:</b></label>
              <textarea 
              name="comments" 
              id="comments"
              placeholder="Hey.. say something"
              value={this.state.comments}
              onInput={(event) => this.setState({ comments: event.target.value })}
              ></textarea>           
            </div>
          </div>
              <br></br>
              <div className="center">
              <button onClick={this.submitApplication.bind(this)}>
                Sign me up!
              </button>
              </div>
              <section id="ThanksDialog" className={`wrap ${this.state.dialogClass}`}>
                <div className="message">
                  <div className="wrapcenter">
                  <h3>Thank you for signing up</h3>
                  {message}
                  <button onClick={(event) => this.setState({dialogClass:""})}>
                    close
                  </button>
                  </div>
                </div>
              </section>
              </main>
    </>
      );
}
}

export default Membership;