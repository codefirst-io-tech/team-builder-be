import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Match } from './match/match.entity';
import { Member } from './member/member.entity';
import { Organization } from './organization/organization.entity';
import { Team } from './team/team.entity';

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
          entities: [Organization, Member, Match, Team],
          synchronize: true,
          type: 'postgres',
        } as PostgresConnectionOptions;
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
