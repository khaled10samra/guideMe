const mongoose = require("mongoose");
require("mongoose-double")(mongoose);
const SchemaTypes = mongoose.Schema.Types;

const SavedMuseumSchema = mongoose.Schema({
 
    User: { 
    type: SchemaTypes.ObjectId, 
    ref: 'Auth' 
  },
  Museum:{ 
    type: SchemaTypes.ObjectId, 
    ref: 'Museum' 
  },
 
},
{ timestamps: true }
);
module.exports=mongoose.model('SavedMuseum',SavedMuseumSchema)