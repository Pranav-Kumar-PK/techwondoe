import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
});

export const User = 'User';
