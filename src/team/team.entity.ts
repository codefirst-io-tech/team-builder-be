import { Match } from 'src/match/match.entity';
import { Member } from 'src/member/member.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Member, (member) => member.teams)
  members: Member[];

  @ManyToOne(() => Match, (match) => match.teams)
  match: Match;

  @Column({ nullable: true })
  color: string;
}
