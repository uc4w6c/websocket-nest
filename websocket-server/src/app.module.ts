import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsGateway } from './events.gateway';
import { BroadcastController } from './broadcast/broadcast.controller';

@Module({
  imports: [],
  controllers: [AppController, BroadcastController],
  providers: [AppService, EventsGateway],
})
export class AppModule {}
