import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Historik {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  distance: number;

  @Column('decimal', { precision: 4, scale: 2 })
  averagespeed: number;

  @Column('decimal', { precision: 4, scale: 2 })
  topspeed: number;

  @Column({ nullable: false })
  time: number;

  @Column({ nullable: false })
  date: Date;

  @ManyToOne(() => User, (user) => user.historiks, { onDelete: 'CASCADE' })
  user: User;
}
