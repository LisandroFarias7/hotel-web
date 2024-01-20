/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './api/users/users.module';
import { CheckModule } from './api/check/check.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './api/auth/auth.module';
import { MenuModule } from './api/menu/menu.module';
import { ClientModule } from './api/client/client.module';
import { RoomsModule } from './api/rooms/rooms.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
    expandVariables: true
  }),
  TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      retryAttempts: 5
  }),
    RoomsModule, 
    UsersModule, 
    CheckModule, 
    AuthModule, MenuModule, ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
