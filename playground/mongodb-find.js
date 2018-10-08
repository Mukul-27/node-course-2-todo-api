//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
	return console.log('Unable to connect to mongo server');
}
console.log('Connected to mongoDB server');



db.collection('Todos').find({
	_id: new ObjectID('5b6090dd30cbfc1c003c8e18')
	}).toArray().then((docs)=>{
console.log('Todos');
console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
	console.log('Could not fetch Todos',err);
});

db.collection('Todos').find().count().then((count)=>{
console.log(`Todos count: ${count}`);
},(err)=>{
	console.log('Could not fetch Todos',err);
});

db.collection('Users').find({name: 'Mukul'}).toArray().then((docs)=>{
console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
	console.log('Could not fetch User',err);
})
//db.close();
});