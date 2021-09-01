import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntryModule } from './entry/entry.module';

//Orquestador de app

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'us-cdbr-east-04.cleardb.com',
      port: 3306,
      username: 'b1754fb2e2045a',
      password: '028c0b8f',
      database: 'heroku_5201e2f44bc5d2f',
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
