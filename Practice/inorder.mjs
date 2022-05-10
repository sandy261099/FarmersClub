import fetch from 'node-fetch';
let site1 = {
    url: "https://www.tutorialspoint.com/ionic/ionic_footer.htm",
    options: {method: "HEAD"}
  };
  
  let site2 = {
    url: "https://stackblitz.com/",
    options: {method: "HEAD"}
  };
  
  let site3 = {
    url: "https://classroom.grotto-networking.com/",
    options: {method: "HEAD"}
  };
  
  let start = new Date();
  fetch(site1.url, site1.options)
    .then(res => {
      // console.log(`twitter status: ${JSON.stringify(res)}`);
      let time = (new Date() - start) / 1000;
      console.log(`Tutorials point: ${res.statusText}, time: ${time}`);
      return fetch(site2.url, site2.options);
    })
    .then(res => {
      let time = (new Date() - start) / 1000;
      console.log(`Stackblitz: ${res.statusText}, time: ${time}`);
      return fetch(site3.url, site3.options);
    })
    .then(res => {
      let time = (new Date() - start) / 1000;
      console.log(`Grotto-Networking: ${res.statusText}, time: ${time}`);
    });
  console.log("Starting my web requests:");