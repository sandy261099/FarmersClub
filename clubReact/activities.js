import React from "react";
import ReactDOM from "react-dom";

import neptune1 from "./images/farming1.jpg";

class Activities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: []
        }; 
    }

    componentDidMount() {
        fetch('activities').then(res=>res.json()).then((activities)=>{
            this.setState({
                ...this.state,
                activities: activities
            })
        })
        
    }

    render () {
        console.log('state', this.state)
        let eventsArray = this.state.activities
    
        let table_Data = eventsArray.map((e)=>{
                    return (<><tr>
                  <td> {e.state} </td>
                  <td> {e.cropsa} </td>
                  <td> {e.cropsb}</td> 
                  <td> {e.increase} </td>
                    </tr>
                    </>)
                });
                return (<>
                        <main>
                        <div className="center">
                            <h2>Agriculture in The United States of America</h2>
                        </div>
                        <div className="center">
                            <img src={neptune1} alt="Farming" width="400" height="300"/>
                        </div>
                        <table id='tableid'>
                            <tr>
                                <thead>
                                <th>State</th>
                                <th>2017 Cover Crops</th>
                                <th>2021 Cover Crops</th>
                                <th>% Increase</th>
                                </thead>
                                <tbody>
                                    {table_Data}
                                </tbody>
                            </tr>
                        </table>
                        
                        </main>
                            <footer>
                                <p>© 2021 Sandeep</p>
                            </footer>
                        </>
            
                )
                }
    }


export default Activities;