import bcrypt from 'bcryptjs';
import { readFile, writeFile } from 'fs/promises';
const users = JSON.parse(await readFile(new URL('./clubUsers3.json',
    import.meta.url)));

let nRounds = 12;
let hashedUsers = [];
let start = new Date(); // timing code
console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);
// Your code here to process the passwords

let salt = bcrypt.genSaltSync(nRounds);

hashedUsers = users.map(e =>{
    e.password = bcrypt.hashSync(e.password, salt);
    return e;
});

let elapsed = new Date() - start; // timing code
console.log(`Finished password hashing, ${elapsed/1000} seconds.`);
writeFile("clubUsers3Hash.json", JSON.stringify(hashedUsers, null, 2));