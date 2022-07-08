import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';

@Module({
  providers: [MatchService, PrismaService],
  controllers: [MatchController],
  exports: [MatchService],
})
export class MatchModule {}
