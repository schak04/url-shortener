const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortened: { type: String, required: true, default: '', unique: true },
    redirectTo: { type: String, required: true, default: '' }
}, { timestamps: true });

const URL = mongoose.Model('URL', urlSchema);

module.exports = URL;