const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const awardSchema = new Schema({
    name: { type: String },
    point: { type: String },
    type: { type: String }, 
    color: { type: String }
}, {
    timestamps: true,
});

const Award = mongoose.model('Award', awardSchema);

module.exports = Award;