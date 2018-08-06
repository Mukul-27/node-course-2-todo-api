//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
	return console.log('Unable to connect to mongo server');
}
console.log('Connected to mongoDB server');


db.collection('Todos').findOneAndUpdate({
	_id: new ObjectID('5b682e2c058383151c4bb18f')
},{
	$set:{
		completed: true
	}
},{
	returnOriginal: false
}).then((result)=>{
	console.log(result);
});
//db.close();
});