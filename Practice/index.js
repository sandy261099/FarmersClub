import React from "react";
import ReactDOM from "react-dom";
import events from "./code.json";

let tableRows = events.map(function(event){
    return <tr><td>{event.state}</td>
                  <td>{event.cropsa}</td> <td>{event.cropsb}</td> <td>{event.increase}</td></tr>;
})

let myTable = <table>
    <thead>
        <tr><th>State</th><th>2017</th><th>2020</th><th>Increase</th></tr>
                </thead>
                <tbody id="ActTable">
                {tableRows}
                </tbody>
    </table>;

let myName = "Sandy"; // Use your name not mine!!!
let contents = <section>
    <h1>Hello from React</h1>
    <h2>{myName}</h2>
	<h3>The number of events is {events.length}</h3>
	{myTable}
  </section>;

ReactDOM.render(contents, document.getElementById("root"));
