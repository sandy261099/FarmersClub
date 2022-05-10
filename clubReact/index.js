import React from "react";
import ReactDOM from "react-dom";
import React from "react";
import events from "./eventData.json"
import Menu from "./menu"; // my new menu component in menu.js
import Home from "./home";
import Activities from "./activities";
import Login from "./login";
import Membership from "./membership";
import AdminActivity from "./AdminActivity";


// Create contents using imported Menu


class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { role: "user", show: "home" }; 
        this.menubundle =this.menubundle.bind(this);

    }
    menubundle(menuitem,event){
    
        this.setState({show :menuitem})
    }


    render() {
        let content;
        // statements/logic to set the content variable based on state
        if (this.state.show=="home")
        {
            content = <Home />;

        }
        else if(this.state.show=="activities")
        {
            content = <Activities events={events} />;
        }
        else if(this.state.show=="login")
        {
            content = <Login events={events} />;
        }
        else if(this.state.show=="membership")
        {
            content = <Membership events={events} />;
        }
        else if(this.state.show=="adminactivity")
        {
            content = <AdminActivity events={events}/>
        }
        return (
            <>
                <Menu role={this.state.role} show={this.state.show} menuHandler={this.menubundle.bind(this)}/>
                {content}
            </>
        );
    }
}


// Now rendering the App component!
ReactDOM.render(<App />, document.getElementById("root"));

//ReactDOM.render(contents, document.getElementById("root"));