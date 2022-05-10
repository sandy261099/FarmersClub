import fs from 'fs';
var a;
var count = 0;
fs.createReadStream("./membership.html")
  .on('data', function(len) {
    for (a=0; a < len.length; ++a)
      if (len[a] == 10) count++;
  })
  .on('end', function() {
    console.log(count);
  });