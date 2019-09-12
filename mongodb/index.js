const mongoose = require('mongoose')
mongoose.Promise = Promise

const id = 'test'
const password = 'test'

// const uri = 'mongodb://localhost:27017/test'
const uri = `mongodb://${id}:${password}@localhost:27017/test`

mongoose.connect(
	uri,
	{
	  useNewUrlParser: true, 
	  useUnifiedTopology: true 
	}
);

const db = mongoose.connection


const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
// Object = mongoose.Types.ObjectId

// Schema: 数据库的组织和结构
const UserSchema = new Schema({
  name: {
    type: String,
		required: true,
		unique: true, // 唯一索引
		index: 1 // 排序={1|true:正序, -1:逆序}
  },
  age: {
		type: Number,
		max: 200,
		min: [0, '你太年轻了']   
  }
})
UserSchema.methods.eat = function() {
	console.log("I've eatten one " + this.name)
}
const UserModel = mongoose.model('user', UserSchema)

// 生成一个 document
let user = new UserModel({
	name: "wovert5",
	age: 30
})

user.save((err, user) => {
	if (err) {
		console.log(err.message)
		return
	}
	user.eat()
	// 查找
	UserModel.find({
		name: "wovert"
	}, (err, data) => {
		if (err) console.log(err)
		console.log('data:', data)
		// 更新
	})
	
})

// (async () => {
//   const user = await UserModel.create({
// 		name: "wovert",
// 		age: 30
// 	})

// 	return user
// })()
//   .then(r => {
//     console.log(r)
//   })
//   .catch(e => {
//     console.log(e)
// 	})
	
// db connection handler
db.on('open', () => {
  console.log('connected to database.')
})

// db connection error
db.on('error', (e) => {
  console.log(e)
})