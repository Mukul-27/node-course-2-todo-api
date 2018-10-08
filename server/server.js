let mongoose = require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo',{
	text: {
	type: String,
	required: true,
	minlength: 1,
	trim: true
	},
	completed: {
	type: Boolean,
	default: false
	},
	completedAt: {
	type: Number,
	default: null
	}
});


/*let newTodo=new Todo({
	text: 'Cook Dinner'
});

newTodo.save().then((doc)=>{
console.log('Saved todo',doc);
},(e)=>{
console.log('Unable to save Todo');
});

let otherTodo=new Todo({
	text: 'Feed the Cat',
	completed: true,
	completedAt: 123
});
otherTodo.save().then((doc)=>{
	console.log(JSON.stringify(doc,undefined,2));
},(e)=>{
	console.log('Unable to save',e);
});*/

let User = mongoose.model('User',{
email:{
type: String,
required: true,
trim: true,
minlength: 1
}
});

let user = new User({
email: 'mukulbansal96@gmail.com      '
});

user.save().then((doc)=>{
console.log('user saved',doc);
},(e)=>{
console.log('unable to save user',e);
});
