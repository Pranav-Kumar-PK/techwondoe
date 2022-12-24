import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private userModel: Model<User>,
  ) {}

  async createUser(data) {
    const user = new this.userModel(data);
    const newUser = await user.save();
    return newUser;
  }

  async createUsers(data) {
    const newUsers = await this.userModel.insertMany(data);
    return newUsers;
  }

  async getUsers() {
    const users = await this.userModel.find();
    return users;
  }
}
