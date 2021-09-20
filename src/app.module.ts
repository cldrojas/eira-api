import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessControlModule } from 'nest-access-control';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EntryModule } from './entry/entry.module';
import { UserModule } from './user/user.module';

import 'dotenv';
import { AuthModule } from './auth/auth.module';
import { roles } from './app.roles';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('TYPEORM_HOST'),
        port: parseInt(config.get<string>('TYPEORM_PORT'), 10),
        username: config.get<string>('TYPEORM_USERNAME'),
        password: config.get<string>('TYPEORM_PASSWORD'),
        database: config.get<string>('TYPEORM_DATABASE'),
        entities: [__dirname + `./**/**/*entity{.ts,.js}`],
        autoLoadEntities: true,
        synchronize: true,
      }),
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
