import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Member } from './member.entity';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get('/:id')
  get(@Param('id') id: number) {
    return this.memberService.get(id);
  }

  @Post()
  save(@Body() member: Member) {
    return this.memberService.save(member);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() member: Member) {
    return this.memberService.update(id, member);
  }
}
