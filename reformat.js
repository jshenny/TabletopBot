const fs = require('fs');
const csv = require('csv')


var rs = {comments:[]}
fs.createReadStream("coffeetasting2020 - coffeetasting2020.csv")
  .pipe(csv.parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    // console.log(row);
    var part = 
    {
        "time": row[0],
        "name": row[1],
        "message":row[2]
    }
    rs.comments.push(part)
  })
  .on("end", e=>{
    console.log(rs)
    
    fs.writeFile('coffee.json', JSON.stringify(rs), err => {
        if (err) {
        console.error(err);
        }
        // file written successfully
    });
  })
