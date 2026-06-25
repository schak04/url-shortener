const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortened: { type: String, required: true, unique: true },
    redirectTo: { type: String, required: true }
}, { timestamps: true });

const URL = mongoose.model('URL', urlSchema);

module.exports = URL;