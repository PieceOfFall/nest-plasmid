import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Game } from '@/modules/game/game.entity';
import { GameService } from './game.service';
import { RedisModule } from '../redis/redis.module';
@Module({
  providers: [GameService],
  imports: [TypeOrmModule.forFeature([Game]), RedisModule],
  exports: [GameService],
})
export class GameModule {}
