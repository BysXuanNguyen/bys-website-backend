import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let expertSchema = new Schema({
    name: String,
    avatarUrl: String,
    position: String,
    identify: String,
    description: String,
    facebookLink: String,
    instagramLink: String,
    googlePlusLink: String
});

let Expert = mongoose.model('Expert', expertSchema, 'experts');

export default Expert;