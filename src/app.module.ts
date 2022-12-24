import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { User, UserSchema } from './user.schema';
import { UserService } from './user.service';
import { ConfigModule } from '@nestjs/config';
import { VARIABLES } from './config';
console.log(VARIABLES.MONGODB_URI);

export const dbConnection = MongooseModule.forRoot(VARIABLES.MONGODB_URI);

export const dbSchemas = MongooseModule.forFeature([
  { name: User, schema: UserSchema },
]);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    dbConnection,
    dbSchemas,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
