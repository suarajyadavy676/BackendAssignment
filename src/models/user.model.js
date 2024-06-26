const {Schema,model} = require('mongoose')
let userSchema = new Schema({
  username:{type:String,required:true},
  email:{type:String,required:true,unique:true},
  password:{type:String,required:true},
  role:{type:String,enum:["admin","instructor","student"],default:"student"}
})

let UserData = model('UserData',userSchema)

module.exports =  UserData