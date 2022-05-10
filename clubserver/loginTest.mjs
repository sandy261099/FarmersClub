import fetch from 'node-fetch';

let user1={email:"aromatised1858@yandex.com",
          password:"No3428fsL"}

          let user2={email:"aromatised1858@yandex.com",
          password:"nvjtkydgsbj"}

          let user3={email:"tunbjdka",
          password:"No3428fsL"}

async function trigger(){
    let data1 = await fetch( "http://localhost:3000/login",{method: "POST" ,
        body: JSON.stringify(user1),
        headers: {'Content-Type': 'application/json'}});
        
    let result1 = await data1.json();
    if(result1.error){
        console.log(result1.message);
    }
    else
    {
        console.log("Good: ", "Status Code:"+data1.statusText, result1);
    }

    let data2 = await fetch( "http://localhost:3000/login",{method: "POST" ,
    body: JSON.stringify(user2),
    headers: {'Content-Type': 'application/json'}}
);
    result1 = await data2.json();
    if(result1.error){
        console.log(result1.message);
    }
    else
    {
        console.log(result1.user,result1.email,result1.role)
    }


    const data3 = await (await fetch("http://localhost:3000/login", {method: "POST" ,
    body: JSON.stringify(user3),
    headers: {'Content-Type': 'application/json'}})).json();
    if(data3.error){
        console.log(data3.message);
    }
    else
    {
        console.log(data3.user,data3.email,data3.role)
    }

}

trigger()
