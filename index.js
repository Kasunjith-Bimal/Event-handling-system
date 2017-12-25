const express =  require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const router = express.Router();
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser');
const cors = require('cors');
mongoose.Promise = global.Promise;
mongoose.connect(config.uri,(err)=>{

if(err){
console.log("could not be connected database");
}else{
console.log("database connected " +config.db);   
}

}
);

app.use(cors({

   origin: 'http://localhost:4200'

}));  
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname+'/client/dist')); 
app.use('/api', authentication);
    


app.get('/', function(req, res) {
    res.sendfile(path.join(__dirname +'/client/dist/index.html'));
});

app.listen(8080, function() {
    console.log('App listening on port 8080');
});