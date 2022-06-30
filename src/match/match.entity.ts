import { Member } from 'src/member/member.entity';
import { Organization } from 'src/organization/organization.entity';
import { Team } from 'src/team/team.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
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
  location: string;

  @Column({ nullable: true })
  score: string;

  @OneToMany(() => Team, (team) => team.match)
  teams: Team[];

  @ManyToMany(() => Member, (member) => member.matches)
  members: Member[];

  @ManyToOne(() => Organization, (organization) => organization.matches)
  organization: Organization;
}
