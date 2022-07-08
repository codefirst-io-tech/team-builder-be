import { Injectable, NotImplementedException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrganizationService {
  constructor(private prisma: PrismaService) {}

  async get(organizationWhereUniqueInput: Prisma.OrganizationWhereUniqueInput) {
    return await this.prisma.organization.findFirst({
      where: organizationWhereUniqueInput,
    });
  }

  async save(organization: Prisma.OrganizationCreateInput) {
    return await this.prisma.organization.create({
      data: {
        ...organization,
      },
    });
  }

  async getByName(name: string) {
    throw new NotImplementedException();
  }
}
