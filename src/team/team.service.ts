import { Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeamService {
  constructor(private prismaService: PrismaService) {}

  save() {
    throw new NotImplementedException();
  }
}
