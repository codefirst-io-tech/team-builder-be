import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MemberModule } from './member/member.module';
import { MatchModule } from './match/match.module';
import { OrganizationModule } from './organization/organization.module';
import { TeamModule } from './team/team.module';
import { MemberService } from './member/member.service';
import { OrganizationService } from './organization/organization.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MemberModule,
    MatchModule,
    OrganizationModule,
    TeamModule,
  ],
  controllers: [],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(
    private readonly memberService: MemberService,
    private readonly organizationService: OrganizationService,
  ) {}

  onApplicationBootstrap() {
    // const organization = new Organization();
    // organization.name = 'codefirst.io';
    // this.organizationService
    //   .save(organization)
    //   .subscribe((organization: Organization) => {
    //     console.log({ organization });
    //     const member = new Member();
    //     member.username = 'immino';
    //     member.organizations = [organization];
    //     this.memberService.save(member).subscribe((member: Member) => {
    //       console.log({ member });
    //     });
    //   });
  }
}
