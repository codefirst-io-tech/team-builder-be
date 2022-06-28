import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
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
}
