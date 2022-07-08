import { Injectable } from '@nestjs/common';
import { Member, Organization, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

type MemberUpdateDto = Member & { organizations: Organization[] };

@Injectable()
export class MemberService {
  constructor(private readonly prisma: PrismaService) {}

  async get(membersWhereUniqueInput: Prisma.MemberWhereUniqueInput) {
    return this.prisma.member.findFirst({
      where: membersWhereUniqueInput,
      include: {
        organizations: true,
      },
    });
  }

  async save(member: Prisma.MemberCreateInput) {
    return this.prisma.member.create({
      data: {
        ...member,
      },
    });
  }

  async update(id: number, member: MemberUpdateDto) {
    return this.prisma.member.update({
      include: {
        organizations: true,
      },
      where: {
        id,
      },
      data: {
        ...member,
        organizations: {
          set: member.organizations.map((organization) => ({
            id: organization.id,
          })),
        },
      },
    });
  }
}
