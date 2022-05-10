import express from 'express';
import bcrypt from 'bcryptjs';
import { readFile } from 'fs/promises'; 
import session from 'express-session';
import DataStore from "nedb-promises";
import { send } from 'process';
const usersdb = DataStore.create("./usersdb");
const eventsdata = DataStore.create("./eventsdb");

let app = express();

app.use(express.json());
const cookieName = "fh1498"; // Session ID cookie name, use this to delete cookies too.


app.use(session({
    secret: 'Sai Sandeep',
    resave: false,
    saveUninitialized: false,
    name: cookieName
}));

// Use this middleware to restrict paths to only logged in users
function checkCustomerMiddleware(req, res, next) {
    if (req.session.user.role === "guest") {
        res.status(401).json({ error: "Not permitted" });;
    } else {
        //      console.log(`\nSession info: ${JSON.stringify(req.session)} \n`);
        next();
    }
};

// Use this middleware to restrict paths only to admins
function checkAdminMiddleware(req, res, next) {
    if (req.session.user.role !== "admin") {
        res.status(401).json({ error: "Not permitted" });;
    } else {
        next();
    }
};

function setUpSessionMiddleware(req, res, next) {
    console.log(`\nsession object: ${JSON.stringify(req.session)}`);
    console.log(`session id: ${req.session.id}`);
    if (!req.session.user) {
        req.session.user = { role: "guest" };
    };
    next();
};
function jsonErrors(err, req, res, next) {
    // prepare and send error response here, i.e.,
    // set an error code and send JSON message
    res.status(500);
    res.json(err)
    console.log(JSON.stringify(err));
    return;
};

app.use(setUpSessionMiddleware);


const activities = await eventsdata.find({});

const hashed = JSON.parse(await readFile(new URL('./clubUsers3Hash.json',
    import.meta.url)));

const clubUser = await usersdb.find({});

const fullname = clubUser.map(function(element){
    return {"firstName":element.firstname, "lastName":element.lastName};
});

app.get('/info',function (req,res){
    req.session.isAuth=true;
    console.log(req.session);
    console.log(req.session.id);
    res.send({
        "clubName": "Farmers Club",
        "ownerName": "Sandeep",
        "ownerNetId": "fh1498"
    });
})
app.get('/activities',async function(req,res){
    res.send(activities);
})
app.get('/users',checkCustomerMiddleware ,async function(req,res){
    res.send(fullname);
})

app.post('/activities',express.json({ limit: 10 }),checkAdminMiddleware,jsonErrors,async function(req,res){
    let newData = req.body;
    console.log(newData);
    let newDocs = await eventsdata.insert(newData);

    res.send(newDocs);
})

app.delete('/activities/:index',checkAdminMiddleware,async function(req,res){
    let index=req.params.index;

    // activities.splice(index-1,1);
    let numRemoved = await eventsdata.remove({_id:index});
console.log("numRemoved",numRemoved)

res.status(200)
res.json(numRemoved)
})


app.post('/login', express.json({ limit: 10 }), async function(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    // Find user

    let auser = await usersdb.findOne({email: email});
    if (!auser) { // Not found
        res.status(401).json({ error: true, message: "User/Password error" });
        return;
    }
    let verified = bcrypt.compareSync(password, auser.password);
    if (verified) {

        let oldInfo = req.session.user;
        req.session.regenerate(function(err) {
            if (err) {
                console.log(err);
            }
            let newUserInfo = Object.assign(oldInfo, auser);
            delete newUserInfo.password;
            req.session.user = newUserInfo;
            res.json(newUserInfo);
        });
    } else {
        res.status(401).json({ error: true, message: "User/Password error" });
    }
});

app.get('/logout', function (req, res) {
    let options = req.session.cookie;
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
        res.clearCookie(cookieName, options); // the cookie name and options
        res.json({message: "Goodbye"});
    })
});

app.post('/applicants', express.json({ limit: 10 }),jsonErrors,checkAdminMiddleware, async function (req, res) {
    console.log("inside post / applicants")
    let applicant = JSON.parse(await readFile(new URL('./test/applicantData.json',import.meta.url)));
    await applicant.push(req.body)
    res.set('Content-Type', 'application/json');
    res.json(applicant);
});

app.post('/applicants', express.json({ limit: 10 }),checkAdminMiddleware,jsonErrors, async function (req, res) {
    console.log("inside post / applicants")
    let applicant = JSON.parse(await readFile(new URL('./test/applicantData.json',import.meta.url)));
    const applicantSchema = JSON.parse(
        await readFile(new URL("./test/schemaOne.json", import.meta.url))
      );
    let ajv = new Ajv();
    addFormats(ajv);
    let applicantValidate = ajv.compile(applicantSchema);
    const valid = applicantValidate(req.body)
    console.log("valid",valid)
    if (valid){
        applicant.push(req.body)
        res.json(applicant);
    } 
    else{
        console.log("not valid")
        console.log(applicantValidate.errors)
        console.log("req.body",req.body)
        res.status(500)
    }
    
});

app.get('/members', checkAdminMiddleware,async function(req,res){

    console.log("inside/members")

    let x
    await membersDatabase.find().then((members)=>{

        x = members.map(members=>{
            return members.firstName+" "+members.lastName
        });
    })

    console.log(x);
    res.json(x);

})

app.listen(3000, () => console.log("successfully running"));