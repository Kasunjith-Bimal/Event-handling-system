const express =  require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri,(err)=>{

if(err){
console.log("could not be connected database");
}else{
console.log("database connected " +config.db);   
}

}
);

 
app.use(express.static(__dirname+'/client/dist')); 

app.get('/', function(req, res) {
    res.sendfile(path.join(__dirname +'/client/dist/index.html'));
});

app.listen(8080, function() {
    console.log('App listening on port 8080');
});