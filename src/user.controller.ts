import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { get } from 'http';
import { UserService } from './user.service';
import { VARIABLES } from './config';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/user')
  async createUser(@Res() res, @Body() userData, @Headers() headers) {
    if (headers.key != VARIABLES.API_KEY)
      return res.status(403).json('Access Denied');
    const createUser = await this.userService.createUser(userData);

    return res.status(200).json(createUser);
  }

  @Post('/users')
  async createUsers(@Res() res, @Body() userData, @Headers() headers) {
    if (headers.key != VARIABLES.API_KEY)
      return res.status(403).json('Access Denied');
    const createUsers = await this.userService.createUsers(userData);

    return res.status(200).json(createUsers);
  }

  @Get('/users')
  async getUser(@Res() res, @Headers() headers) {
    if (headers.key != VARIABLES.API_KEY)
      return res.status(403).json('Access Denied');
    const getUsers = await this.userService.getUsers();
    return res.status(200).json(getUsers);
  }
}
