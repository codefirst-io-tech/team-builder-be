import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { MemberModule } from './member/member.module';
import { MatchModule } from './match/match.module';
import { OrganizationModule } from './organization/organization.module';
import { TeamModule } from './team/team.module';
import { MemberService } from './member/member.service';
import { OrganizationService } from './organization/organization.service';
import { Member } from './member/member.entity';
import { Organization } from './organization/organization.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const databaseHost = config.get('DATABASE_HOST');
        const databasePort = config.get('DATABASE_PORT');
        const databaseName = config.get('DATABASE_NAME');
        const databaseUser = config.get('DATABASE_USER');
        const databasePassword = config.get('DATABASE_PASSWORD');

        console.log(
          databaseHost,
          databasePort,
          databaseName,
          databaseUser,
          databasePassword,
        );

        return {
          database: databaseName,
          host: databaseHost,
          port: databasePort,
          username: databaseUser,
          password: databasePassword,
          autoLoadEntities: true,
          synchronize: true,
          type: 'postgres',
        } as PostgresConnectionOptions;
      },
    }),
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
    const organization = new Organization();
    organization.name = 'codefirst.io';

    this.organizationService
      .save(organization)
      .subscribe((organization: Organization) => {
        console.log({ organization });

        const member = new Member();
        member.username = 'immino';
        member.organizations = [organization];

        this.memberService.save(member).subscribe((member: Member) => {
          console.log({ member });
        });
      });
  }
}
