const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InterestSchema = new Schema({
  sports: { type: String, required: true },
});

const Interest = mongoose.model("Interest", InterestSchema);

module.exports = Interest;