import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { User, UserSchema } from './user.schema';
import { UserService } from './user.service';

export const dbConnection = MongooseModule.forRoot('mongodb+srv://pranav:5Z1Y7TW6hdjTbVWN@cluster0.8oychpr.mongodb.net/test?retryWrites=true&w=majority');

export const dbSchemas = MongooseModule.forFeature([
  { name: User, schema: UserSchema }
])

@Module({
  imports: [dbConnection, dbSchemas],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule { }
