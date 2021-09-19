import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EntryModule } from './entry/entry.module';
import { UserModule } from './user/user.module';

import 'dotenv';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

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
    AuthModule,
    UserModule,
    EntryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
