import { Module } from '@nestjs/common';

import { RedisModule } from '@/modules/redis/redis.module';
import { UserModule } from '@/modules/user/user.module';
import { ChatModule } from '@/modules/chat/chat.module';

import { WebsocketGateway } from './websocket.gateway';
import { PingModule } from '../ping/ping.module';
// import { ResponseTransformModule } from '../response-transform/response-transofrm.module';

@Module({
  providers: [WebsocketGateway],
  imports: [RedisModule, UserModule, ChatModule, PingModule],
})
export class WebsocketModule {}
