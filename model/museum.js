const mongoose = require("mongoose");
require("mongoose-double")(mongoose);
const SchemaTypes = mongoose.Schema.Types;

const museumSchema = mongoose.Schema({
  museumName: { type: String },
  museumLocation: { type: String },
  museumInfo: { type: String, required: true },
  museumImage: { type: String },
  museumRate: { type: String },
  antiquities: [
    {
      name: { type: String, required: true },
      userImage: { type: String, required: true }
    }
  ],
  hotLine:{ type: String },
  workTime: { type: String },

}, 
{ timestamps: true });

module.exports = mongoose.model('Museum', museumSchema);


