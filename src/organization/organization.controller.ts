import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Organization } from './organization.entity';
import { OrganizationService } from './organization.service';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Get('/:id')
  get(@Param('id') id: number) {
    return this.organizationService.get(id);
  }

  @Post()
  save(@Body() organization: Organization) {
    return this.organizationService.save(organization);
  }
}
