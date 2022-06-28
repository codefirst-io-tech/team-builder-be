import { Member } from 'src/member/member.entity';
import { Organization } from 'src/organization/organization.entity';
import { Team } from 'src/team/team.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Member)
  @JoinColumn()
  mvp: Member;

  @Column({ nullable: true })
  date: string;

  @Column({ nullable: true })
  score: string;

  @OneToMany(() => Team, (team) => team.match)
  teams: Team[];

  @ManyToOne(() => Organization, (organization) => organization.matches)
  organization: Organization;
}
