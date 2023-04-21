import mongoose from "mongoose";

const {Schema, Types} = mongoose;

const schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  words: [{type: Types.ObjectId, ref: 'Words'}]
})

export default mongoose.model('User', schema);