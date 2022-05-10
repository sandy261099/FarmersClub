import React from "react";
import events from "./eventData.json";

class AdminActivity extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            state:"",
            cropsa:"",
            cropsb:"",
            increase:"",
            eventsArray:events};
       
    }
    addChoice(event) {
        event.preventDefault()
        let temp = {};
        temp.state = this.state.state;
        temp.cropsa = this.state.cropsa;
        temp.cropsb = this.state.cropsb;
        temp.increase = this.state.increase;
        let arr = this.state.eventsArray;
        arr.push(temp);
        this.setState({eventsArray: arr})
      }
      deleteEvent(event,j){
        
            event.preventDefault();
            let temp = this.state.eventsArray
            let index = temp.indexOf(j);
            temp.splice(index, 1);
            this.setState({eventsArray:temp})
        
      }
    
    render(){ let eventsArray = this.state.eventsArray;
        return (
            <>
            <br></br><br></br><br></br>
            <header>
            <h1>Admin Activities Page</h1>
        </header><main>
            <section id="adminactivity">
            <label> State: </label>
            <input type="text"
            // value={this.state.Day}
            onInput={(event) => this.setState({ state: event.target.value })} 
            />
            <label>2017 : </label>
            <input type="text"
            // value={this.state.Day}
            onInput={(event) => this.setState({ cropsa: event.target.value })} 
            ></input>
            <label>2021 : </label>
            <input type="text"
            // value={this.state.Day}
            onInput={(event) => this.setState({ cropsb: event.target.value })} 
            ></input>
            <label>%Increase : </label>
            <input type="text"
            // value={this.state.Day}
            onInput={(event) => this.setState({ increase: event.target.value })} 
            ></input>
            <button onClick={this.addChoice.bind(this)}>Add Choice</button></section>
            
            <h3>Activity Schedule</h3>
            <table>
            <thead>
                <tr>
                    <th>button</th>
                    <th>State</th>
                    <th>2017</th>
                    <th>2021</th>
                    <th>%Increase</th>
                  </tr>
            </thead>
            <tbody id="table">
            {eventsArray.map((item, idx) => (
                        <tr key={idx}>
                            <td><button 
                            onClick={(event) => this.deleteEvent(event, item)}
                                >Delete</button></td>
                            <td>{item.state}</td>
                            <td>{item.cropsa}</td>
                            <td>{item.cropsb}</td>
                            <td>{item.increase}</td>
                        </tr>
                    ))}
            </tbody>
        </table></main></>
        )
    }
}

export default AdminActivity;

