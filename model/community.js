const mongoose = require("mongoose");
require("mongoose-double")(mongoose);
const SchemaTypes = mongoose.Schema.Types;

const communitySchema = mongoose.Schema({
  personName: { 
    type: SchemaTypes.ObjectId, 
    ref: 'Auth'  // Make sure 'Person' matches the name of your person model
  },
  museumInfo: { type: String },
    museumImage: { type: String },

  feedBackText: { type: String },
  museumRate: { type: String }
}, 
{ timestamps: true });

module.exports = mongoose.model('Community', communitySchema);
