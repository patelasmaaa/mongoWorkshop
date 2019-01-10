var mongo = require('mongodb').MongoClient;
    mongo.connect('mongodb://127.0.0.1:27017/learnyoumongo', function(err, db) {

      if(err) console.log(err);

      var docs = db.collection('docs'),
      str = {firstName: process.argv[2], lastName: process.argv[3]};
      docs.insert(str);
      console.log(JSON.stringify(str));
      // other operations
      	db.close();
})
