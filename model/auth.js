const mongoose = require("mongoose");
require("mongoose-double")(mongoose);
const SchemaTypes = mongoose.Schema.Types;

const authSchema = mongoose.Schema({
 
  userName: { type: String, },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userImage: { type:String  },
 
},
{ timestamps: true }
);
module.exports=mongoose.model('Auth',authSchema)