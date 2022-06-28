import { Match } from 'src/match/match.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Member } from '../member/member.entity';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Member, (member) => member.organizations)
  @JoinTable()
  members: Member[];

  @OneToOne(() => Member)
  @JoinColumn()
  adminMember: Member;

  @OneToMany(() => Match, (match) => match.organization)
  matches: Match[];
}
