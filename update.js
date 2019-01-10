var mongo = require('mongodb').MongoClient;
let dbname = process.argv[2];
mongo.connect('mongodb://127.0.0.1:27017/'+dbname, function(err, db) {

    if(err) console.log(err);
    let docs = db.collection('users');
    docs.updateOne({
    	username: "tinatime",
    	age: 30
    },
    {$set: {
    	age: 40
    }}, function(err, res){
    	if(err) throw err;
    	console.log('Done');
    	db.close();
    })
})
