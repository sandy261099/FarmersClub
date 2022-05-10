import pkg from 'chai';
const { assert } = pkg;
import fetch from 'node-fetch';

let urlBase = 'http://localhost:3000/'

let data = {
    "name":"san",
    "locatiton" :"callout",
    "gender":"m"
}

let data1 = {
    "name":"shushanth",
    "location" :"seAll of the sentences in a single paragraph should be Unified: All of the sentences in a single paragraph should be Unified: All of the sentences in a single paragraph should be Unified: All of the sentences in a single paragraph should beUnified: All of the sentences in a single paragraph should beUnified: All of the sentences in a siattle",
    "gender":"F"
}


let data2 = {
    
    
    "location" :"oregon",
    "gender":"F"
}

let data3 = {
    "name":"dan",
    "location" :"seattle",
    "gender":"FM"
}


let myCookie = null;

function getCookies(res, print = false) {
    
    let rawStrings = res.headers.raw()["set-cookie"];
    print ? console.log(rawStrings) : console.log("");
    return rawStrings.map((ck) => ck.split(";")[0]).join(";");
  }

  let res;
  let activities = null;

describe('Test Applicant', function(){

    describe('Add  Test', function() {
        let res;
        let activities = null;

        it('Valid Data ',async function() {
            // console.log("inside 1")
            // res = await fetch(urlBase + 'applicants', {
            //     method: "post",
            //     body: JSON.stringify(data),
            //     headers: {
            //         "Content-Type": "application/json",
            //         cookie: myCookie
            //     },
            // });
            // assert.equal(res.status, 200);
        });

        it('Overly Data Rejected',async function() {
            // res = await fetch(urlBase + 'applicants', {
            //     method: "post",
            //     body: JSON.stringify(data1),
            //     headers: {
            //         "Content-Type": "application/json",
            //         cookie: myCookie
            //     },
            // });
            // assert.equal(res.status, 500);
        });

        it('Reject Missing Data',async function() {
            // res = await fetch(urlBase + 'applicants', {
            //     method: "post",
            //     body: JSON.stringify(data2),
            //     headers: {
            //         "Content-Type": "application/json",
            //         cookie: myCookie
            //     },
            // });
            // assert.equal(res.status, 500);
        });

        it('Bad email data',async function() {
            // res = await fetch(urlBase + 'applicants', {
            //     method: "post",
            //     body: JSON.stringify(data3),
            //     headers: {
            //         "Content-Type": "application/json",
            //         cookie: myCookie
            //     },
            // });
            // assert.equal(res.status, 500);
        });

    });
});