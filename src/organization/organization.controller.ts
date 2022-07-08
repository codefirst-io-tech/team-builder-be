import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { OrganizationService } from './organization.service';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Get('/:id')
  get(@Param('id') id: string) {
    return this.organizationService.get({ id: +id });
  }

  @Post()
  save(@Body() organization: Prisma.OrganizationCreateInput) {
    return this.organizationService.save(organization);
  }
}
