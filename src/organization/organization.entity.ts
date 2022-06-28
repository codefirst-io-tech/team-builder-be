import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Member } from '../member/member.entity';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Member, (member) => member.organization)
  members: Member[];

  @OneToOne(() => Member)
  @JoinColumn()
  adminMember: Member;
}
