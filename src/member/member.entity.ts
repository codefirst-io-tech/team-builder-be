import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
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

  @ManyToMany(() => Organization, (organization) => organization.members)
  organizations: Organization[];
}
