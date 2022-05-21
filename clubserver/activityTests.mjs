/* Testing the POST /tours/add API */
import fetch from "node-fetch";
const user = {
    "state": "Iowa",
    "cropsa": "973,112",
    "cropsb": "379,614",
    "increase": "156%"
  };

let urlBase = "http://localhost:3000/";
function extractCookies(rawStrings) {
    let cookies = [];
    rawStrings.forEach(function(ck) {
        cookies.push(ck.split(";")[0]); // Just grabs cookie name=value part
    });
    return cookies.join(";"); // If more than one cookie join with ;
}

let addTour = {
    url: urlBase + "activities",
    options: {
        method: "POST",
       headers:{},
       body: JSON.stringify(user)
    },
};

let dele = {
    url: urlBase + "activities/3",
    options: {
        method: "DELETE",
       headers:{}
    },
};

let loginAdmin = {
    url: urlBase + "login",
    options: {
        method: "POST",
        body: JSON.stringify({
            // admin user, see users.json file
            email: "tirrivees1820@outlook.com",
            password: "449OqspUq",
        }),
        headers: { "Content-Type": "application/json" },
    },
};

let loginCust = {
    url: urlBase + "login",
    options: {
        method: "POST",
        body: JSON.stringify({
            // admin user, see users.json file
            email: "chihuahua1899@gmail.com",
            password: "9E3423Gj3iJ",
        }),
        headers: { "Content-Type": "application/json" },
    },
};

async function someTests() {
    console.log("Try adding tour without logging in");
    try {
        let res = await fetch(addTour.url, addTour.options);
        console.log(`Add Tour result: ${res.status}`);
    } catch (e) {
        console.log(`Error: ${e}\n`);
    }

console.log("Try adding tour without logging in");
    try {
        let res = await fetch(dele.url, dele.options);
        console.log(`Add Tour result: ${res.status}`);
    } catch (e) {
        
        console.log(`Error: ${e}\n`);
    }

    console.log("Login as customer, then try adding tour");
    try {
        let res = await fetch(loginCust.url, loginCust.options);
        console.log(`login results: ${res.status}`);
        // Look at the cookie
        let savedCookie = extractCookies(res.headers.raw()["set-cookie"]);
        console.log(`Saved cookie: ${savedCookie}`);
        addTour.options.headers.cookie = savedCookie;
        // User info from login
        let userInfo = await res.json();
        console.log(userInfo);
        res = await fetch(addTour.url, addTour.options);
        console.log(`Add Tour result: ${res.status}\n`);
        // let data = await res.json();
        // console.log(data);

        dele.options.headers.cookie = savedCookie;
        res = await fetch(addTour.url, addTour.options);
        console.log(`Add Tour result: ${res.status}\n`);
        // data = await res.json();
        // console.log(data);
    } catch (e) {
        console.log(`Error: ${e}\n`);
    }

    
    console.log("Login as admin, then adding tour");
    try {
        let res = await fetch(loginAdmin.url, loginAdmin.options);
        console.log(`login results: ${res.status}`);
        // Look at the cookie
        let savedCookie = extractCookies(res.headers.raw()["set-cookie"]);
        console.log(`Saved cookie: ${savedCookie}`);
        addTour.options.headers.cookie = savedCookie;
        // User info from login
        let userInfo = await res.json();
        console.log(userInfo);
        res = await fetch(addTour.url, addTour.options);
        console.log(`Add Tour result: ${res.status}\n`);
        // let data = await res.json();
        // console.log(data);

        dele.options.headers.cookie = savedCookie;
        res = await fetch(dele.url, dele.options);
        console.log(`Add Tour result: ${res.status}\n`);
        // data = await res.json();
        // console.log(data);
    } catch (e) {
        console.log(`Error: ${e}\n`);
    }
}



someTests();