import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get('/:id')
  get(@Param('id') id: string) {
    return this.memberService.get({ id: +id });
  }

  @Post()
  save(@Body() member: Prisma.MemberCreateInput) {
    return this.memberService.save(member);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() member: Prisma.MemberUpdateInput) {
    return this.memberService.update(id, member);
  }
}
