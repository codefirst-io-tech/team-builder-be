import { Match } from 'src/match/match.entity';
import { Team } from 'src/team/team.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Organization } from '../organization/organization.entity';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  strength: number;

  @Column({ nullable: true })
  position: string;

  @ManyToMany(() => Organization, (organization) => organization.members, {
    cascade: true,
  })
  organizations: Organization[];

  @ManyToMany(() => Team, (team) => team.members)
  @JoinTable()
  teams: Team[];

  @ManyToMany(() => Match, (match) => match.members)
  @JoinTable()
  matches: Match[];
}
