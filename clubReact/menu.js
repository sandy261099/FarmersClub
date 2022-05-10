import React from "react";

class Menu extends React.Component{

  constructor(props){
    super(props);
    
  }

  render (){
    let content = "";
    let rolename = this.props.role;
    let showname = this.props.show;
    if (rolename == "user") {
      content = <React.Fragment>
        <li className={"" + (showname == "home" ? 'active' : '')} onClick={this.props.menuHandler.bind(null,"home")}> Home </li>

        <li className={"" + (showname == "activities" ? 'active' : '')} onClick={this.props.menuHandler.bind(null,"activities")}> Activities </li >

          <li className={"" + (showname == "membership" ? 'active' : '') }onClick={this.props.menuHandler.bind(null,"membership")}>Membership </li > 

          <li className={"" + (showname == "adminactivity" ? 'active' : '') }onClick={this.props.menuHandler.bind(null,"adminactivity")}>Admin activities </li > 

          
          </React.Fragment >
    }
    else if (rolename == "guest") {
      content = <React.Fragment>
        <li className={"" + (showname == "home" ? 'active' : '')} onClick={this.props.menuHandler.bind(null,"home")}> Home  </li>
        <li className={"" + (showname == "activities" ? 'active' : '')} onClick={this.props.menuHandler.bind(null,"activities")}> Activities </li>
        <li className={"" + (showname == "membership" ? 'active' : '')} onClick={this.props.menuHandler.bind(null,"membership")}> Membership </li>
        <li className={"" + (showname == "login" ? 'active' : '')} onClick={this.props.menuHandler.bind(null,"login")} > login </li>
      </React.Fragment>
    }
      else if (rolename == "admin"){
        content = <React.Fragment>
          <li className={"" + (showname == "home" ? 'active' : '')} onClick={this.props.menuHandler.bind(null,"home")}> Home  </li>
          <li className={"" + (showname == "activities" ? 'active' : '')} onClick={this.props.menuHandler.bind(null,"activities")}> Activities </li>
          <li className={"" + (showname == "adminactivity" ? 'active' : '')} onClick={this.props.menuHandler.bind(null,"adminactivity")}> Admin Activity </li>
          <li className={"" + (showname == "logout" ? 'active' : '') }> Logout </li>
        </React.Fragment>
      }

    return <nav>
      <ul>
        {content}
      </ul>
    </nav>;
  }
}

export default Menu;