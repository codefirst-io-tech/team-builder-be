import { Injectable, NotImplementedException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MemberService {
  constructor(private prisma: PrismaService) {}

  async get(memberswhereUniqueInput: Prisma.MemberWhereUniqueInput) {
    return await this.prisma.member.findFirst({
      where: memberswhereUniqueInput,
    });
  }

  async save(member: Prisma.MemberCreateInput) {
    return await this.prisma.member.create({
      data: {
        ...member,
      },
    });
  }

  async update(id: number, member: Prisma.MemberUpdateInput) {
    throw new NotImplementedException();
  }
}
