import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntryModule } from './entry/entry.module';

import { EasyconfigModule } from 'nestjs-easyconfig';

//Orquestador de app

@Module({
  imports: [
    EasyconfigModule.register({ path: '.env' }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.TYPEORM_HOST,
      port: Number.parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [__dirname + `./**/**/*entity{.ts,.js}`],
      autoLoadEntities: true,
      synchronize: true,
    }),
    EntryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
