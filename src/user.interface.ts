import * as mongoose from 'mongoose';

export interface User extends Document {
  id: string;
  name: string;
  surname: string;
  dob: string;
  gender: string;
}
