import { readFile } from "fs/promises";
import DataStore from "nedb-promises";
const users = DataStore.create("./usersdb");
const eventsdata = DataStore.create("./eventsdb");

// Get sample data from JSON file
const usersOne = JSON.parse(
    await readFile(new URL("./clubUsers3Hash.json", import.meta.url))
  );
  
  async function cleanAndInsert() {
    // Clear out any existing entries if they exist
    let numRemoved = await users.remove({}, { multi: true });
    console.log("clearing database, removed " + numRemoved);
  
    // We let NeDB create _id property for us.
    let newDocs = await users.insert(usersOne);
    console.log("Added " + newDocs.length + " users");
  

const eventsdataOne = JSON.parse(
    await readFile(new URL("./eventData.json", import.meta.url))
  );
  
    // Clear out any existing entries if they exist
    let eventremoved = await eventsdata.remove({}, { multi: true });
    console.log("clearing database, removed " + eventremoved);
  
    // We let NeDB create _id property for us.
    let eventadded = await eventsdata.insert(eventsdataOne);
    console.log("Added " + eventadded.length + " eventsdata");
  }
  
  cleanAndInsert();


  app.post('/activities',express.json({ limit: 10 }),checkAdminMiddleware,jsonErrors,async function(req,res){
    let newData = req.body;
    console.log(newData);
    let newDocs = await usersdb.insert(newData);
    res.send(newDocs);
})