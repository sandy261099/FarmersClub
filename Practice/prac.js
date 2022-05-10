import { readFile } from 'fs/promises'; 
const clubEvents = JSON.parse(await readFile(new URL('./code.json',
    import.meta.url))); 

clubEvents.forEach(function(event) {
    console.log(event.state+":     "+event.cropsa+"       "+event.cropsb+"         "+event.increase);
    
});