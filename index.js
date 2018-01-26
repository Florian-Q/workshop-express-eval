let chalk = require('chalk');
const app = require('./src/app');
var fs = require('fs');

// port
var port = 3000;
const arg2 = parseInt(process.argv[2]);
if(arg2 > 0){
    port = arg2;
}
// pour étre sûr du port
app.set('port', process.env.PORT || port);


// get bingo
app.get('/bingo', function (req, res) {
    // lecture du fichier number.txt
    fs.readFile('src/numbers.txt', 'utf8', function(err, data) {  
        if (err) throw err;
        res.send(data.split(/\r?\n/,5).join());
    });

  })

  console.log("serveur start");
  app.listen(port)

