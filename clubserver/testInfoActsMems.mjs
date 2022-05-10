import fetch from 'node-fetch';

let site1 = {
    url: "http://localhost:5000/info",
    options: {method: "GET"}
};

let site2 ={
    url: "http://localhost:5000/activities",
    options: {method: "GET"}
};

let site3 ={
    url: "http://localhost:5000/users",
    options: {method: "GET"}
};

async function getInfo() {
    const data = await (await fetch(site1.url, site1.options)).json();
    // const data1 = await data.json();
    console.log(data.clubName);
    const data1 = await (await fetch(site2.url, site2.options)).json();
    console.log("My club consists "+data1.length+" activities")

    const data2 = await (await fetch(site3.url, site3.options)).json();
    console.log("This club has "+data2.length+" Members")

}
    

getInfo();