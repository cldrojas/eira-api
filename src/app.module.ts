import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AccessControlModule } from 'nest-access-control';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EntryModule } from './entry/entry.module';
import { UserModule } from './user/user.module';

import 'dotenv';
import { AuthModule } from './auth/auth.module';
import { roles } from './app.roles';
import { TYPEORM_CONFIG } from './config/constants';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>
        config.get<TypeOrmModuleOptions>(TYPEORM_CONFIG),
    }),
    AccessControlModule.forRoles(roles),
    AuthModule,
    UserModule,
    EntryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
