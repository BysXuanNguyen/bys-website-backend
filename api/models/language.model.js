import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let languageSchema  = new Schema({
    code: String,
    name: String,
    description: String,
	iconUrl: String
});

let Language = mongoose.model('Language', languageSchema, 'languages');

export default Language;