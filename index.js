let chalk = require('chalk');

const app = require('./src/app');

// port
var port = 3000;
const arg2 = parseInt(process.argv[2]);
if(arg2 > 0){
    port = arg2;
}


// start server here
app.get('/', function (req, res) {
    res.send('Hello World!')
  })
  
app.listen(port)
console.log(chalk.green('Hello web server ' + port));
