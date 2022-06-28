import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { Repository } from 'typeorm';
import { Organization } from './organization.entity';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
  ) {}

  save(organization: Organization): Observable<Organization> {
    return from(this.organizationRepository.save(organization));
  }

  getByName(name: string): Observable<Organization> {
    return from(this.organizationRepository.findOneBy({ name }));
  }
}
