import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { Repository } from 'typeorm';
import { Member } from './member.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private memberRepository: Repository<Member>,
  ) {}

  get(id: number) {
    return from(
      this.memberRepository.findOne({
        where: { id },
        relations: ['organizations', 'teams', 'matches'],
      }),
    );
  }

  save(member: Member): Observable<Member> {
    return from(this.memberRepository.save(member));
  }

  update(id: number, member: Member) {
    return from(this.memberRepository.update({ id: member.id }, member));
  }
}
