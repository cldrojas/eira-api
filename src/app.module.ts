import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntryModule } from './entry/entry.module';

//Orquestador de app

@Module({
  imports: [EntryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
