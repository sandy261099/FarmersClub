import fetch from "node-fetch";

const user = {
    "state": "Iowa",
    "cropsa": "973,112",
    "cropsb": "379,614",
    "increase": "156%"
  };

let site1 ={
    url: "http://localhost:3000/activities",
    options: {method: "GET"}
};

let site2 ={
    url: "http://localhost:3000/activities",
    options: {method: "POST", body: JSON.stringify(user), headers: {'Content-Types': 'application/json'}}
};

let site3 = {
    url: "http://localhost:3000/activities",
    options: {method: "DELETE"}
};

async function trigger(){
    const data = await (await fetch(site1.url, site1.options)).json();
    console.log("Total number of events:"+data.length);

    const newData = await (await fetch(site2.url, site2.options)).json();
    console.log("Total number of events after update:"+newData.length);

    const data_del = await (await fetch(site3.url + '/1', site3.options)).json();
    console.log("No:of Activities after deleting "+data_del.length);

}

trigger()